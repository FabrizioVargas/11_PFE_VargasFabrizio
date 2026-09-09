import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../models/estudiante.model';
import { EstudianteCardComponent } from '../estudiante-card/estudiante-card.component';

@Component({
  selector: 'app-estudiante-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, EstudianteCardComponent],
  templateUrl: './estudiante-lista.component.html',
  styleUrl: './estudiante-lista.component.css'
})
export class EstudianteListaComponent {
  @Input() cursos: Curso[] = [];

  @Output() editar = new EventEmitter<Curso>();
  @Output() eliminar = new EventEmitter<number>();
  @Output() nuevo = new EventEmitter<void>();

  busqueda = '';
  categoriaSeleccionada = '';

  get categorias(): string[] {
    return [...new Set(this.cursos.map(curso => curso.categoria))].sort();
  }

  get cursosFiltrados(): Curso[] {
    const termino = this.busqueda.trim().toLowerCase();

    return this.cursos.filter(curso => {
      const coincideBusqueda = !termino
        || curso.nombre.toLowerCase().includes(termino)
        || curso.instructor.toLowerCase().includes(termino)
        || curso.categoria.toLowerCase().includes(termino);
      const coincideCategoria = !this.categoriaSeleccionada || curso.categoria === this.categoriaSeleccionada;

      return coincideBusqueda && coincideCategoria;
    });
  }

  onEditar(curso: Curso): void {
    this.editar.emit(curso);
  }

  onEliminar(id: number): void {
    this.eliminar.emit(id);
  }

  onNuevo(): void {
    this.nuevo.emit();
  }
}

