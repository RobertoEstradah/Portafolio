# /a11y-check

Audita la accesibilidad de `index.html` y corrige los problemas encontrados.

## Lo que debes hacer

1. Lee `index.html` completo y verifica:
   - Todas las `<img>` tienen atributo `alt` no vacío y descriptivo
   - Todos los botones interactivos tienen `aria-label` si no tienen texto visible
   - Los elementos de navegación tienen `role` y `aria-` correctos
   - El menú hamburguesa tiene `aria-expanded` y `aria-controls`
   - Los links "Ver proyecto" tienen contexto suficiente (ej: `aria-label="Ver proyecto: Predicción de Diabetes"`)
   - El orden de headings es correcto (h1 → h2 → h3, sin saltos)
   - Los inputs del formulario tienen `<label>` asociado o `aria-label`
   - Hay un link "Skip to content" al inicio del body

2. Lista todos los problemas encontrados con su ubicación y severidad (crítico / advertencia).

3. Pregunta al usuario si desea aplicar las correcciones.

4. Aplica los cambios aprobados y hace commit y push con el mensaje `a11y: fix accessibility issues`.
