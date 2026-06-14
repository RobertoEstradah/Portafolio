# /changelog

Genera un resumen legible de los últimos cambios del portafolio basado en el historial de git.

## Lo que debes hacer

1. Ejecuta `git log --oneline -20` para obtener los últimos 20 commits.

2. Agrupa los commits por tipo de cambio:
   - Proyectos agregados o eliminados
   - CV / documentos actualizados
   - Estilos o diseño
   - Contenido (texto, traducciones)
   - Correcciones (fix)
   - Infraestructura / configuración

3. Presenta el resumen en formato legible (no raw git log), con fechas relativas y una descripción clara de qué cambió.

4. Si el usuario pide un rango específico (ej: "últimos 3 meses"), usa `git log --since="3 months ago"`.
