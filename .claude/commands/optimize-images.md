# /optimize-images

Audita el uso de imágenes en `index.html` y corrige problemas comunes.

## Lo que debes hacer

1. Lee `index.html` y encuentra todas las etiquetas `<img>`.

2. Para cada imagen verifica:
   - Tiene atributo `alt` descriptivo (no vacío, no genérico como "image")
   - Tiene `loading="lazy"` (excepto imágenes above-the-fold como la foto de perfil)
   - El archivo referenciado en `src` existe en el sistema de archivos
   - No usa rutas absolutas innecesarias

3. Lista los problemas encontrados con la ubicación exacta (número de línea) de cada uno.

4. Pregunta al usuario si desea aplicar las correcciones automáticas (añadir `loading="lazy"`, mejorar `alt`).

5. Aplica los cambios aprobados y hace commit y push con el mensaje `fix: optimize image attributes`.
