# /remove-project

Elimina una tarjeta de proyecto del portafolio.

## Lo que debes hacer

1. Lista todos los proyectos actuales en `index.html` con sus títulos y URLs.

2. Pregunta al usuario cuál desea eliminar.

3. Muestra el bloque `<article class="project-card">` completo que se eliminará y pide confirmación explícita antes de proceder.

4. Elimina el bloque del HTML.

5. Detecta el nombre del archivo de imagen referenciado en ese card (atributo `src` del `<img>`).
   - Pregunta al usuario si también desea eliminar la imagen de `assets/Proyects/`.
   - Si confirma, elimina el archivo.

6. Haz commit y push con el mensaje `Remove project: <nombre del proyecto>`.
