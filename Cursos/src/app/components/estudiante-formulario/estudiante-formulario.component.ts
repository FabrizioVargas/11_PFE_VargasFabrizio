import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../models/estudiante.model';

@Component({
  selector: 'app-estudiante-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante-formulario.component.html',
  styleUrl: './estudiante-formulario.component.css'
})
export class EstudianteFormularioComponent implements OnChanges {
  @Input() cursoAEditar: Curso | null = null;

  @Output() guardar = new EventEmitter<Curso>();
  @Output() cancelar = new EventEmitter<void>();

  model: Omit<Curso, 'id'> & { id?: number } = {
    nombre: '',
    categoria: '',
    duracion: 0,
    modalidad: '',
    instructor: '',
    nivel: ''
  };

  categorias = ['Tecnología', 'Diseño', 'Negocios', 'Idiomas', 'Arte'];
  modalidades = ['En línea', 'Presencial', 'Híbrida'];
  niveles = ['Inicial', 'Intermedio', 'Avanzado'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cursoAEditar'] && this.cursoAEditar) {
      this.model = { ...this.cursoAEditar };
    } else if (changes['cursoAEditar'] && !this.cursoAEditar) {
      this.resetForm();
    }
  }

  onSubmit(): void {
    if (this.model.nombre && this.model.categoria && this.model.modalidad && this.model.instructor && this.model.nivel) {
      this.guardar.emit(this.model as Curso);
      this.resetForm();
    }
  }

  onCancelar(): void {
    this.cancelar.emit();
    this.resetForm();
  }

  private resetForm(): void {
    this.model = {
      nombre: '',
      categoria: '',
      duracion: 0,
      modalidad: '',
      instructor: '',
      nivel: ''
    };
  }
}

