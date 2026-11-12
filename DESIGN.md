---
name: Bryant Mitchell Portfolio
description: A Swiss editorial portfolio with an upright arch motif, one authored entrance, and a single continuous technology marquee.
colors:
  blanco: "#FDFFFC"
  negro-200: "#161925"
  negro-500: "#07020D"
  rojo-200: "#990D35"
  rojo-500: "#6b0925"
  naranja-200: "#F0803C"
  naranja-500: "#f59458"
  gris-200: "#959c9a"
  gris-500: "#5b5e5d"
typography:
  display:
    fontFamily: '"Familjen Grotesk", system-ui, sans-serif'
    fontSize: "clamp(3.25rem, 9vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Familjen Grotesk", system-ui, sans-serif'
    fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Familjen Grotesk", system-ui, sans-serif'
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Familjen Grotesk", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  label:
    fontFamily: '"Familjen Grotesk", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
rounded:
  none: "0px"
  control: "2px"
  pill: "999px"
  arch: "999px 999px 0 0"
  arch-soft: "50% 50% 0 0 / 9% 9% 0 0"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
  section-wide: "128px"
components:
  button-primary:
    backgroundColor: "{colors.rojo-200}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-dark:
    backgroundColor: "{colors.naranja-200}"
    textColor: "{colors.negro-500}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.negro-500}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.negro-500}"
    rounded: "{rounded.none}"
    padding: "8px 0"
  nav-pill:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.gris-500}"
    rounded: "{rounded.pill}"
    padding: "6px"
  project-card:
    backgroundColor: "transparent"
    textColor: "{colors.negro-500}"
    rounded: "{rounded.arch-soft}"
    padding: "0px"
  contact-arch:
    backgroundColor: "{colors.rojo-200}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.arch}"
    height: "160px"
    width: "96px"
  modal:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro-500}"
    rounded: "{rounded.none}"
    padding: "24px"
  tech-chip:
    backgroundColor: "transparent"
    textColor: "{colors.gris-500}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
---

# Design System: Bryant Mitchell Portfolio

## Overview

**Creative North Star: "The Editorial Arch"**

This is a developer portfolio composed like a printed page: a strict grid, oversized grotesque type, paper-white and ink-black grounds, and one deep chromatic signal per theme. The page should feel authored rather than assembled, with the confidence of a Swiss poster and the quiet precision of a well-set book.

The arch is the one recurring figure. It appears upright around portraits and contact links, and softened around project screenshots so the curve never competes with the work. Everything else earns its place through proportion, hairlines, and whitespace rather than decoration.

Motion has one authored entrance followed by restrained detail: the name assembles, the portrait reveals, and the rest of the page settles into place. The technology marquee is the single continuous exception; it pauses, respects reduced motion, and never becomes the loudest thing on the page. The system rejects centered stacks, glass cards, gradient fills, and entrance animations on every element.

**Key Characteristics:**
- 12-column offset grid with generous negative space
- One grotesque family at poster scale
- Paper and ink grounds with oxblood or signal orange as the only chromatic event
- Upright arch silhouette and softened arch for screenshots
- Flat surfaces, hairline rules, one floating shadow
- One authored entrance plus a single continuous marquee, fully removable for reduced motion

## Colors

A two-theme palette of warm paper, near-black ink, and one saturated signal per theme. The accents never appear together as a pair; the active theme chooses one.

### Primary
- **Oxblood Signal** (#990D35): The light-theme accent. Used for primary actions, active navigation, links, focus rings, selection, and the arch accent. Deep Oxblood (#6b0925) is its hover and depth partner.
- **Signal Orange** (#F0803C): The dark-theme counterpart. Used for the same roles on ink grounds. Warm Orange (#f59458) is its hover partner.

### Neutral
- **Paper White** (#FDFFFC): The light-theme ground and inverse text on accent fills.
- **Ink Black** (#07020D): The dark-theme ground and primary text on paper.
- **Carbon Surface** (#161925): The dark-theme raised surface for the navigation pill, modal, and form fields.
- **Graphite** (#5b5e5d): Secondary text, labels, and muted icons on paper. It clears 4.5:1 on Paper White.
- **Warm Mist** (#959c9a): Secondary text, labels, and muted icons on ink. It clears 4.5:1 on both Ink Black and Carbon Surface.

### Named Rules
**The Paper-and-Ink Rule.** Every surface resolves to Paper White or Ink Black. The only chromatic events are Oxblood Signal on paper and Signal Orange on ink. No third hue enters the system.

**The One Signal Rule.** The accent occupies less than a tenth of any viewport. Its rarity is what makes it read as a signal rather than a theme color.

## Typography

**Display Font:** Familjen Grotesk (with system-ui, sans-serif)
**Body Font:** Familjen Grotesk (same stack)

**Character:** A single contemporary grotesque with a slightly humanist rhythm. It carries both the poster-scale name and the small labels without needing a second voice. Hierarchy comes from size, weight, and space.

### Hierarchy
- **Display** (500, `clamp(3.25rem, 9vw, 6rem)`, 0.88): The hero name only. Tight tracking (`-0.04em`) and two offset lines.
- **Headline** (500, `clamp(2.5rem, 5.5vw, 4.75rem)`, 0.95): Section titles above a hairline rule.
- **Title** (500, 1.5rem, 1.2): Project names and modal headings.
- **Body** (400, 1rem, 1.7): Prose and interface copy. Measure is capped at 65ch.
- **Label** (400, 0.75rem, 1.5): Form labels, error messages, metadata, and icon captions.

### Named Rules
**The One Voice Rule.** One family carries the entire page. Never introduce a second display face, a serif, or a mono face for decoration.

**The Poster Measure Rule.** Display type may reach 6rem, but body copy never exceeds 65ch and never drops below 12px.

## Layout

The page runs on a 12-column grid inside a 1280px shell, with 24px column gaps and responsive shell padding of 20px, 32px, and 48px. Sections breathe on a 96px vertical rhythm, widening to 128px on desktop.

The hero is an 8/4 split: the name occupies columns 1-8 at display scale, the second line shifts right by 12%, and the portrait occupies columns 9-12 inside an upright arch. About places a four-column portrait on the left and a seven-column text block starting at column 6, creating a deliberate gutter. Projects use three columns with the middle card dropped 96px and the third card dropped 40px; the middle column carries a subtle vertical parallax on desktop. Contact mirrors About with a four-column arch pair and a seven-column form starting at column 6.

Breakpoints follow the implementation: 640px for stacked actions, 768px for the 12-column layout and desktop navigation, and 1024px for the widest shell padding.

### Named Rules
**The Offset Rule.** Nothing important sits in a centered stack. The second name line, the right-hand text column, and the middle project each shift off axis on purpose.

**The Quiet Gutter Rule.** Empty space is a structural material. Never fill a gutter with decoration just because it is available.

## Elevation & Depth

The system is flat by default. Depth comes from tonal contrast, hairline borders, and the offset arch, not from stacked shadows. The navigation pill is the only floating surface, and the modal backdrop is the only blurred layer.

### Shadow Vocabulary
- **Floating navigation** (`box-shadow: 0 12px 32px -16px rgba(7, 2, 13, 0.45)`): Lifts the fixed navigation pill off the page without turning it into a card.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. A shadow is reserved for a surface that physically floats above the page; hierarchy otherwise comes from scale, tone, and rules.

## Shapes

The upright arch is the signature: a full semicircular top over a rectangular base, used for portraits and contact links. Project screenshots use the softened arch (`50% 50% 0 0 / 9% 9% 0 0`) so the curve reads as a family resemblance without cropping interface content. Buttons and fields use a 2px control radius; the navigation, theme switch, and slider dots use full pills. There are no generic rounded cards.

### Named Rules
**The Upright Arch Rule.** The arch always opens upward and stays upright. It is a frame, never a mask over readable work.

**The Softened Capture Rule.** Screenshots get the softened arch. Only portraits and contact links get the full arch.

## Components

### Buttons
- **Shape:** 2px radius, 1px border, 20px horizontal and 12px vertical padding, 14px medium text.
- **Primary:** Filled with the active accent and inverted text. Hover empties the fill and returns the accent to the text and border.
- **Secondary:** Transparent with a hairline border. Hover shifts the border and text to the active accent.
- **Focus:** A 2px accent outline with a 3px offset, visible on keyboard focus in both themes.
- **Motion:** Color transitions only, 300ms. No lift, scale, or shadow on hover.

### Navigation
- **Style:** A fixed bottom-center pill with a hairline border, 85% opaque ground, backdrop blur, and the single floating shadow. Five 36px icon targets surround a 56x32 theme switch.
- **States:** Inactive icons use secondary text; the active section uses an accent tint and `aria-current="page"`. The switch exposes `role="switch"` and `aria-checked`.
- **Mobile:** The same pill stays within the bottom safe area; the footer reserves space for it.

### Inputs and Fields
- **Style:** Transparent background, no radius, a single bottom hairline, 8px vertical padding, and a 12px label above the field.
- **Focus:** The bottom rule shifts to the active accent; the global 2px focus ring remains visible.
- **Error:** The rule and a 12px message below the field use the active accent. The message is linked with `aria-describedby` and announced with `role="alert"`.

### Project Cards
- **Shape:** A 16:10 image in the softened arch, followed by a 24px title, a 65ch-capped description, a wrapped row of technology chips, and inline accent links.
- **Hover:** The image scales to 1.03 over 700ms; the card itself does not lift or gain a shadow.
- **Links:** Visit and repository links are underlined with a 4px offset and only render when a URL exists.

### Contact Arch Links
- **Shape:** 96x160px upright arch, 1px border, 30px icon centered.
- **Treatment:** One link is filled with the active accent; the other is outlined. Hover inverts the fill and text.
- **Access:** Each link has a translated `aria-label`; the icon is hidden from assistive technology.

### Success Modal
- **Shape:** A flat paper or carbon panel with a hairline border, no radius, 24px padding, and a maximum width of 384px.
- **Backdrop:** 40-70% ink with a small backdrop blur; the page behind is locked from scrolling.
- **Behavior:** Focus moves to the close control, Tab cycles inside the dialog, Escape closes it, and focus returns to the submit button.

### Theme Switch
- **Shape:** A 56x32 pill with a 24px knob and a 300ms transform.
- **Color:** The knob uses the active accent and carries a sun or moon glyph.

### Technology Chips
- **Shape:** A 2px-radius chip with a 1px hairline, 12px horizontal and 8px vertical padding, and 12px text.
- **Content:** A Simple Icons mark at 14px when one exists, always followed by the technology name. The icon inherits the text color and is hidden from assistive technology.
- **Use:** Project cards wrap chips under the description; the stack section repeats them in the marquee. No chip introduces a new color.

### Tech Marquee
- **Structure:** Two rows of category groups moving in opposite directions. Each row duplicates its content once; the duplicate is `aria-hidden` so assistive technology reads each technology only once.
- **Motion:** CSS-only `translateX` loop over 60-90 seconds, slower on small screens, with the track pausing on hover, focus, and through the visible pause control.
- **Edges:** An alpha mask fades both ends so chips enter and leave without a hard cut.
- **Reduced motion:** The marquee is replaced by a static, category-grouped grid with the same chips. No animation, no pause control.
- **Accessibility:** The marquee is a labelled region; each category group exposes a `role="list"` and its chips are `role="listitem"`. The pause control is a normal button with translated text.

### Motion
- **Hero:** Characters assemble with a 35ms stagger; the portrait reveals through a clip-path wipe while settling from 1.08 scale.
- **Sections:** Content reveals 20px upward over 600ms when it enters the viewport, once only.
- **Data:** The technology marquee loops continuously; project parallax moves within ±36px on desktop.
- **Reduced motion:** All transforms, clip reveals, parallax, marquee movement, spring smoothing, and smooth scrolling are removed. The marquee becomes a static grid and content appears in its final state.

## Do's and Don'ts

### Do:
- **Do** keep the palette to the nine existing tokens: paper, ink, carbon, oxblood, deep oxblood, signal orange, warm orange, graphite, and warm mist.
- **Do** choose Oxblood Signal for light-theme accents and Signal Orange for dark-theme accents; never use both as a pair.
- **Do** keep body copy at 65ch or less and use the display scale only for the name and section titles.
- **Do** use the upright arch for portraits and contact links, and the softened arch for project screenshots.
- **Do** preserve the 2px accent focus ring with a 3px offset on every interactive element.
- **Do** remove transforms, clip reveals, parallax, marquee movement, and smooth scrolling under `prefers-reduced-motion`.
- **Do** keep the technology marquee as the only continuous animation; it pauses on demand and shows every chip in its static fallback.
- **Do** let whitespace and hairlines carry structure before adding any shadow or border weight.

### Don't:
- **Don't** add colors, gradients, glass cards, or a second display typeface.
- **Don't** place project screenshots inside the full arch or crop interface content with the curve.
- **Don't** center-stack the page or replace the offset grid with a generic card grid.
- **Don't** animate every section entrance; motion should have one authored moment and quiet support.
- **Don't** use shadows for hierarchy; only the floating navigation and modal backdrop earn depth.
- **Don't** use text smaller than 12px for labels, captions, or errors.
- **Don't** fabricate project evidence, testimonials, metrics, or imagery that does not exist.
