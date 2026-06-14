# /add-project

Agrega una nueva tarjeta de proyecto al portafolio en `index.html`.

## Lo que debes hacer

1. Pregunta al usuario por los siguientes datos si no los proporcionó:
   - Nombre del proyecto
   - Descripción breve (1-2 oraciones)
   - Tags de tecnología (ej: ML, Python, Flask)
   - URL del proyecto (GitHub o app en vivo)
   - Tipo de link: `github` o `live` (determina el texto del overlay y el icono)
   - Nombre del archivo de imagen en `assets/Proyects/` (sin ruta, solo el nombre)

2. Inserta el nuevo `<article class="project-card">` al inicio de `.projects-grid` en `index.html`, siguiendo exactamente la estructura de los demás cards.

3. Si el tipo de link es `live`, usa:
   - Overlay: `<span>Ver en vivo →</span>`
   - Link inferior: `Ver proyecto`
   Si el tipo es `github`, usa:
   - Overlay: `<span>Ver en GitHub →</span>`
   - Link inferior: `Ver proyecto`

4. Avisa al usuario que debe colocar la imagen en `assets/Proyects/<nombre-imagen>`.

5. Haz commit y push con el mensaje `Add project: <nombre del proyecto>`.
