# /deploy

Valida el estado del proyecto y hace commit + push a GitHub.

## Lo que debes hacer

1. Ejecuta `git status` para listar archivos modificados y no rastreados.

2. Si no hay cambios, informa al usuario y termina.

3. Si hay cambios, muéstralos y pregunta al usuario:
   - Qué archivos incluir (por defecto todos los modificados relevantes, excluyendo archivos sensibles)
   - Mensaje para el commit (o genera uno descriptivo automáticamente basado en los archivos modificados)

4. Haz stage de los archivos confirmados, crea el commit y ejecuta `git push origin master`.

5. Confirma el push exitoso con el hash del commit y el link al repositorio.
