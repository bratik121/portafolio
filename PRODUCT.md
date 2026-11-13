# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, clients and collaborators who evaluate Bryant Mitchell as a frontend developer. They usually arrive from a CV, LinkedIn or GitHub and skim for evidence of skill, taste and real project work.

## Product Purpose

A personal portfolio that presents Bryant's profile, skills, experience and projects, offers his CV, and gives visitors a direct way to get in touch. Success means a visitor understands who he is and what he can build within the first viewport, then explores the work and contacts him.

## Positioning

A developer portfolio treated as an editorial object: the same care applied to frontend engineering is visible in the typography, grid and motion. The site is itself a piece of work.

## Operating Context

Single-page site with anchored sections: hero, about, experience, projects and contact. Light and dark themes. Spanish and English audiences. Deployed as a static site through GitHub Pages.

## Capabilities and Constraints

- React 18, TypeScript, Vite and Tailwind CSS.
- Framer Motion for animation; no additional animation or 3D libraries in this phase.
- Existing color tokens are fixed: blanco, negro-200/500, rojo-200/500, naranja-200/500 and gris-200/500. No new colors.
- Existing section content is preserved. Typos may be corrected; new copy requires explicit approval (the footer line is approved).
- Internationalization with react-i18next, Spanish and English.
- Language detection by IP geolocation, falling back to the browser language.
- Contact form handled by EmailJS.
- Project slots 4 to 6 remain placeholders.

## Brand Commitments

- Name: Bryant Mitchell.
- Arch silhouette as a repeated identity motif (hero portrait, about portrait, project imagery, contact links).
- Editorial Swiss direction: offset grid, generous whitespace, typography as the main voice, quiet microinteractions.
- The color palette is a non-negotiable brand asset.

## Evidence on Hand

- `src/assets/CURRICULUM BRYANT MITCHELL.pdf` (CV download).
- `src/assets/final.png` (hero portrait).
- `src/assets/Aboutme.png` (about portrait).
- Project URLs and repositories listed in `src/data/portafolio.ts`.
- No testimonials, customer logos, metrics or case studies exist; future work must not fabricate them.

## Product Principles

- The work and the person lead; the interface recedes.
- Motion earns its place: one authored moment, then quiet details.
- Every detail ships at production quality, including keyboard access, reduced motion and both themes.
- Content and language are never sacrificed for visual effect.
