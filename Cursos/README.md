# Gestión de Cursos

Aplicación web desarrollada con Angular para administrar la información de los
cursos mediante un CRUD completo. El sistema permite registrar, consultar,
editar y eliminar cursos desde una interfaz sencilla y organizada.

Este proyecto forma parte de un sistema académico y tiene como objetivo
facilitar la administración de las asignaturas disponibles. De esta manera se
puede mantener actualizada la oferta académica y consultar rápidamente la
información de cada curso.

## Funcionalidades

- Registrar nuevos cursos con sus datos principales.
- Visualizar los cursos registrados en tarjetas individuales.
- Buscar cursos por nombre o información relacionada.
- Filtrar el listado por categoría o grado.
- Editar la información de un curso existente.
- Eliminar cursos del listado.

Cada curso muestra información como nombre, código, docente responsable,
créditos y horario. La aplicación está organizada en componentes para las
tarjetas, el formulario y el listado de cursos.

## Tecnologías utilizadas

- Angular 19
- TypeScript
- HTML y CSS
- Jasmine y Karma para pruebas unitarias

## Instalación

Se necesita tener instalado Node.js. Para instalar las dependencias del proyecto,
ejecuta:

```bash
npm install
```

## Servidor de desarrollo

Para iniciar la aplicación localmente, ejecuta:

```bash
npm start
```

Después, abre `http://localhost:4200/` en el navegador. La aplicación se
recargará automáticamente cuando se modifique el código.

## Compilación

Para generar una compilación optimizada del proyecto, ejecuta:

```bash
npm run build
```

Los archivos generados se guardarán en la carpeta `dist/`.

## Pruebas unitarias

Para ejecutar las pruebas unitarias configuradas con Jasmine y Karma, utiliza:

```bash
npm test
```
