# /seo-check

Audita y corrige los meta tags SEO de `index.html`.

## Lo que debes hacer

1. Lee el `<head>` de `index.html` y verifica la presencia y calidad de:
   - `<title>` — descriptivo, menos de 60 caracteres
   - `<meta name="description">` — entre 120 y 155 caracteres
   - `<meta name="keywords">` (opcional pero útil)
   - Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
   - Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
   - `<link rel="canonical">`
   - `<html lang="...">` correcto

2. Para cada elemento faltante o mejorable, propón el valor correcto basado en el contenido real del portafolio.

3. Pregunta al usuario si desea aplicar los cambios.

4. Aplica solo los cambios aprobados y hace commit y push con el mensaje `SEO: improve meta tags`.
