import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/estudiante.model';

@Component({
  selector: 'app-estudiante-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiante-card.component.html',
  styleUrl: './estudiante-card.component.css'
})
export class EstudianteCardComponent {
  @Input() curso!: Curso;

  @Output() editar = new EventEmitter<Curso>();
  @Output() eliminar = new EventEmitter<number>();

  get iniciales(): string {
    return this.curso.nombre
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(nombre => nombre[0])
      .join('')
      .toUpperCase();
  }

  get estadoCurso(): string {
    return this.curso.nivel === 'Avanzado' ? 'Avanzado' : this.curso.nivel === 'Intermedio' ? 'Intermedio' : 'Inicial';
  }

  onEditar(): void {
    this.editar.emit(this.curso);
  }

  onEliminar(): void {
    this.eliminar.emit(this.curso.id);
  }
}

