# Biblioteca Digital

Aplicación web para consultar libros y registrar nuevos ejemplares. El catálogo inicial se obtiene desde Open Library y el formulario permite agregar libros propios desde la misma pantalla.

## ¿Qué permite hacer?

- Buscar libros por título, autor o género.
- Consultar información de Open Library, como título, autor, género, año y portada.
- Registrar un libro con título, autor, género y año.
- Ver el libro registrado inmediatamente en el catálogo.
- Mantener los libros registrados en el navegador usando `localStorage`.

## Tecnologías utilizadas

- Angular 21
- TypeScript
- HTML y SCSS
- `HttpClient` para las peticiones HTTP
- Open Library para consultar libros
- JSONPlaceholder para simular el registro mediante `POST`

## Cómo ejecutar el proyecto

Se necesita tener instalado Node.js y npm.

1. Entrar a la carpeta del proyecto:

```bash
cd biblioteca-digital
```

2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm start
```

Luego abrir `http://localhost:4200/` en el navegador.

## Comandos disponibles

```bash
npm start                 # Inicia la aplicación
npm run build             # Genera la versión de producción
npm test -- --watch=false # Ejecuta las pruebas sin modo interactivo
```

## Organización principal

- `src/app/app.html`: estructura de la pantalla, buscador y formulario.
- `src/app/app.ts`: controla los eventos y el estado de la pantalla.
- `src/app/libro.service.ts`: realiza las peticiones y transforma los datos de las APIs.
- `src/app/app.scss`: estilos de la aplicación.

## Nota sobre el registro

Open Library se utiliza para consultar libros, pero no ofrece un endpoint para guardar nuevos registros. Por eso el formulario envía los datos mediante `POST` a JSONPlaceholder y también los guarda localmente en el navegador para que el libro se pueda seguir viendo en la aplicación.
