import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Fabrizio Vargas';
  profesion = 'Analista de Sistemas Empresariales';
  descripcion = 'Soy estudiante de Análisis de Sistemas interesado en crear aplicaciones web claras, funcionales y fáciles de usar.';
  correo = 'fabrizio.vargas@vallegrande.edu.pe';
  ubicacion = 'Cañete, Perú';
  habilidades = [
    { nombre: 'Angular', icono: 'A', clase: 'angular', descripcion: 'Framework para crear aplicaciones web.' },
    { nombre: 'Java', icono: '☕', clase: 'java', descripcion: 'Lenguaje usado para desarrollar aplicaciones.' },
    { nombre: 'SQL', icono: '▤', clase: 'sql', descripcion: 'Lenguaje para consultar y organizar datos.' },
    { nombre: 'Git', icono: '◆', clase: 'git', descripcion: 'Herramienta para controlar versiones del código.' },
    { nombre: 'HTML5', icono: '5', clase: 'html', descripcion: 'Lenguaje que define la estructura de una página web.' },
    { nombre: 'CSS3', icono: '3', clase: 'css', descripcion: 'Lenguaje para diseñar y dar estilo a una página web.' }
  ];
  proyectos = [
    { nombre: 'Ferreche', descripcion: 'Página web para una ferretería con productos como martillos y herramientas.', clase: 'coral', enlace: 'https://github.com/vallegrande/ASE251S2_T01_wp.git' },
    { nombre: 'Asociación Tutawayta', descripcion: 'Página web creada en equipo para mostrar y vender variedades de pitahaya.', clase: 'amarillo', enlace: 'https://github.com/vallegrande/ASE252S2_T05_wp.git' },
    { nombre: 'Sistema de Reportes', descripcion: 'Sistema para organizar y consultar reportes de información.', clase: 'azul', enlace: 'https://github.com/FabrizioVargas/sistema_reportes.git' }
  ];
}
