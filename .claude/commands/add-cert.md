# /add-cert

Agrega una nueva certificación al grid de formación en `index.html`.

## Lo que debes hacer

1. Pregunta al usuario:
   - Nombre de la certificación
   - Institución emisora y año (ej: "Coursera · 2024")
   - Letra o siglas para el logo del emisor (ej: "C" para Coursera)
   - Clase CSS del logo (usa las existentes: `ibm`, `smf`, o crea una nueva)
   - Si pertenece a un grupo emisor ya existente o es uno nuevo

2. Si el grupo emisor ya existe en el HTML, agrega el `<li>` al `<ul class="cert-list">` correspondiente.

3. Si es un emisor nuevo, agrega un bloque `.cert-group` completo dentro de `.cert-grid` siguiendo la estructura existente.

4. Haz commit y push con el mensaje `Add cert: <nombre de la certificación>`.
