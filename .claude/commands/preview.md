# /preview

Levanta un servidor local para previsualizar el portafolio en el navegador.

## Lo que debes hacer

1. Verifica si Python está disponible con `python --version` o `python3 --version`.

2. Si Python está disponible, ejecuta en background:
   ```
   python -m http.server 8080
   ```
   desde el directorio raíz del proyecto (`d:/1. Proyectos/Portafolio`).

3. Informa al usuario que puede abrir `http://localhost:8080` en su navegador.

4. Si Python no está disponible, sugiere alternativas:
   - VS Code Live Server extension
   - `npx serve .` si tiene Node.js
