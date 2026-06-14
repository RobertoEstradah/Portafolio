# /add-skill

Agrega una nueva tecnología o lenguaje a la sección Hard Skills de `index.html`.

## Lo que debes hacer

1. Pregunta al usuario:
   - Nombre de la habilidad (ej: "Docker")
   - Nivel de dominio en porcentaje (ej: 75)
   - Nombre del archivo de icono en `assets/icons/` (ej: `docker.svg`)

2. Localiza la sección `#habilidades` en `index.html` y agrega un nuevo bloque `.skill-item` siguiendo exactamente la estructura de los existentes:
   ```html
   <div class="skill-item">
     <div class="skill-header">
       <img src="assets/icons/<icono>" alt="<nombre>" class="skill-icon"/>
       <span class="skill-name"><nombre></span>
       <span class="skill-pct"><porcentaje>%</span>
     </div>
     <div class="skill-bar">
       <div class="skill-fill" data-pct="<porcentaje>"></div>
     </div>
   </div>
   ```

3. Avisa al usuario si el icono no existe en `assets/icons/` para que lo agregue.

4. Haz commit y push con el mensaje `Add skill: <nombre>`.
