# /update-cv

Actualiza el archivo CV del portafolio y sincroniza los links en `index.html`.

## Lo que debes hacer

1. Lista los archivos PDF en la carpeta `documents/` para identificar los CVs disponibles.

2. Pregunta al usuario cuál es el nuevo archivo CV si hay más de uno, o confirma el único encontrado.

3. Busca todas las referencias al CV anterior en `index.html` usando el patrón `documents/` + `*.pdf` y reemplázalas con el nuevo nombre de archivo.

4. Verifica que los atributos `download` estén presentes en todos los links de descarga.

5. Si hay un CV antiguo que ya no se usará, pregunta al usuario si desea eliminarlo del directorio `documents/`.

6. Haz commit y push con el mensaje `Update CV: <nombre del nuevo archivo>`.
