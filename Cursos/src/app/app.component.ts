import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListaComponent } from './components/estudiante-lista/estudiante-lista.component';
import { EstudianteFormularioComponent } from './components/estudiante-formulario/estudiante-formulario.component';
import { Curso } from './models/estudiante.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EstudianteListaComponent, EstudianteFormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD de Cursos';
  formularioAbierto = false;

  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Desarrollo web con Angular',
      categoria: 'Tecnología',
      duracion: 40,
      modalidad: 'En línea',
      instructor: 'María Torres',
      nivel: 'Intermedio'
    },
    {
      id: 2,
      nombre: 'Diseño y experiencia de usuario',
      categoria: 'Diseño',
      duracion: 24,
      modalidad: 'Presencial',
      instructor: 'Carlos Mendoza',
      nivel: 'Inicial'
    },
    {
      id: 3,
      nombre: 'Gestión de proyectos ágiles',
      categoria: 'Negocios',
      duracion: 32,
      modalidad: 'Híbrida',
      instructor: 'Ana Salazar',
      nivel: 'Avanzado'
    }
  ];

  cursoSeleccionado: Curso | null = null;

  get duracionPromedio(): number {
    if (!this.cursos.length) {
      return 0;
    }

    return Math.round(this.cursos.reduce((total, curso) => total + curso.duracion, 0) / this.cursos.length);
  }

  get categoriasRegistradas(): number {
    return new Set(this.cursos.map(curso => curso.categoria)).size;
  }

  get cursosAvanzados(): number {
    return this.cursos.filter(curso => curso.nivel === 'Avanzado').length;
  }

  abrirFormulario(): void {
    this.cursoSeleccionado = null;
    this.formularioAbierto = true;
  }

  onEditar(curso: Curso): void {
    this.cursoSeleccionado = { ...curso };
    this.formularioAbierto = true;
  }

  onEliminar(id: number): void {
    const curso = this.cursos.find(item => item.id === id);
    if (curso && !window.confirm(`¿Deseas eliminar el curso ${curso.nombre}?`)) {
      return;
    }

    this.cursos = this.cursos.filter(item => item.id !== id);
    if (this.cursoSeleccionado?.id === id) {
      this.cursoSeleccionado = null;
    }
  }

  onGuardar(curso: Curso): void {
    if (curso.id) {
      this.cursos = this.cursos.map(item => item.id === curso.id ? curso : item);
    } else {
      const nuevoId = this.cursos.length > 0 ? Math.max(...this.cursos.map(item => item.id)) + 1 : 1;
      this.cursos = [...this.cursos, { ...curso, id: nuevoId }];
    }
    this.cursoSeleccionado = null;
    this.formularioAbierto = false;
  }

  onCancelarFormulario(): void {
    this.cursoSeleccionado = null;
    this.formularioAbierto = false;
  }
}
