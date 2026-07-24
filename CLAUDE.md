# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio site for Roberto Estrada (Computational Physicist & Data Engineer). No build tools, no framework, no npm — pure HTML5, CSS3, and vanilla JavaScript.

## Running Locally

Open `index.html` directly in a browser, or serve with any static server:

```bash
python -m http.server 8080
```

There are no build steps, compilation, or dependency installation.

## Architecture

Everything lives in three root files:

- **[index.html](index.html)** — Full single-page app. All sections (Hero, About, Skills, Education, Projects, Contact) exist in the HTML; JavaScript controls visibility/animation, not routing.
- **[scripts.js](scripts.js)** — All interactive behavior: theme, language switching, scroll effects, cursor, animations.
- **[style.css](style.css)** — All styling. Design system is CSS custom properties defined in `:root`.

### JavaScript Architecture

`scripts.js` uses no bundler and no modules — it's a single script that initializes on DOMContentLoaded. Key systems:

- **i18n**: 4 languages (Spanish default, English, German, French) stored as a `translations` object keyed by language code. The active language is saved to `localStorage`. All translatable text uses `data-i18n` attributes; `applyTranslation(lang)` does a single DOM pass to update them.
- **Theme**: `data-theme` attribute on `<html>` (values: `dark` / `light`). Persisted to `localStorage`.
- **Scroll/Intersection animations**: Skill bars and cards use `IntersectionObserver`. Do not use CSS `animation` directly on these elements — the observer adds/removes classes that trigger the animation.
- **Custom cursor**: Only activates for `(pointer: fine)` media query (desktop). Uses `requestAnimationFrame` for the trailing ring.

### CSS Design System

Key variables defined in `:root` (and overridden in `[data-theme="light"]`):

- `--accent` (#2563EB) — primary blue used for highlights, glows, and CTAs.
- `--bg-primary` / `--bg-secondary` / `--bg-tertiary` — layered backgrounds.
- `--text-primary` / `--text-secondary` / `--text-muted` — text hierarchy.
- Spacing via `clamp()` for fluid responsive sizing.
- Transitions: `0.25s cubic-bezier(0.4, 0, 0.2, 1)` used consistently.

Glassmorphism panels use `backdrop-filter: blur(...)` — test in Chrome/Edge where support is most consistent.

### Contact Form

The contact form POSTs to Formspree endpoint `formspree.io/f/xwpbejee`. No backend is needed; form submissions go directly to Formspree.

### Assets

- `assets/Proyects/` — project preview images (referenced in index.html project cards).
- `assets/icons/` — skill/technology icons.
- `documents/` — PDF CV file linked from the hero section.

## Adding Content

**New project card**: Add a new `<article class="project-card">` in the `#proyectos` section following the existing pattern. Add corresponding translations for `data-i18n` keys in `scripts.js` under all 4 language objects.

**New translation key**: Add the key to all four language blocks (`es`, `en`, `de`, `fr`) in the `translations` object in `scripts.js`, then add `data-i18n="your-key"` to the HTML element.

**Updating the CV**: Replace `documents/CV - ROBERTO HERNANDEZ ESTRADA.pdf` in place (the filename is referenced directly twice in index.html — hero section and elsewhere — so keep the exact name if you rename it).

## Claude Code Tooling

This repo has custom Claude Code automation under `.claude/` (mirrored in `.agents/` for other tools). Prefer these over ad-hoc edits when the task matches:

- **Slash commands** (`.claude/commands/`): `/add-project`, `/remove-project`, `/add-cert`, `/update-cv`, `/update-about`, `/update-social`, `/translate`, `/changelog`, `/deploy`, `/preview`, `/optimize-images`, `/seo-check`, `/a11y-check`, `/add-skill`. These encode the exact conventions for common content edits (e.g. `/add-project` inserts the card in the right structure and reminds about the image asset; `/deploy` handles the commit+push flow).
- **Subagents** (`.claude/agents/`): `deploy-validator`, `accessibility-auditor`, `seo-optimizer`, `design-consistency`, `performance-analyst`, `translation-qa`, `cv-sync`, `content-writer`, `project-ranker`, `github-scraper`. Run the relevant validator before a deploy or after a content/style change rather than re-deriving these checks manually.
- **Design/taste skills** (`.claude/skills/`): a set of overlapping UI-polish skills (`emil-design-eng`, `design-taste-frontend`, `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui`, `redesign-existing-projects`, `animation-vocabulary`, etc.) installed via the `skills` CLI (`npx skills add <repo>`, tracked in `skills-lock.json`). Reach for one when doing visual/animation work instead of guessing at conventions from scratch — `emil-design-eng` is the default for animation/motion decisions on this project.
