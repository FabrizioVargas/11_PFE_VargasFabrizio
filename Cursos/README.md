# Gestión de Estudiantes

Aplicación web desarrollada con Angular para administrar la información de los
estudiantes mediante un CRUD completo. El sistema permite registrar, consultar,
editar y eliminar estudiantes desde una interfaz sencilla y organizada.

## Funcionalidades

- Registrar nuevos estudiantes con sus datos principales.
- Visualizar los estudiantes registrados en tarjetas individuales.
- Buscar estudiantes por nombre o información relacionada.
- Filtrar el listado por grado.
- Editar la información de un estudiante existente.
- Eliminar estudiantes del listado.

Cada estudiante muestra información como nombre, grado, edad, correo y promedio.
La aplicación está organizada en componentes para las tarjetas, el formulario y
el listado de estudiantes.

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
