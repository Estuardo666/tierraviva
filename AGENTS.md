## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Design (mandatory)

Any task in this project that touches UI, layout, styling, copy on the page, motion, or visual
direction MUST load these four skills via the Skill tool **before writing any markup or CSS**.
This is not optional and does not depend on the task looking small.

Load in this order:

1. **`ui-ux-pro-max`** - look up applicable patterns, product-type conventions, UX guidelines,
   and motion presets for the surface being built.
2. **`design-taste-frontend`** - the governing ruleset. Declare the Design Read and the three
   dials, then obey the anti-slop bans and run its Pre-Flight Check before delivering.
3. **`frontend-design`** - aesthetic direction and typography judgment.
4. **`emil-design-eng`** - motion decisions, easing, durations, and interaction polish.

Where two skills conflict, `design-taste-frontend` wins on layout and content bans,
`emil-design-eng` wins on timing and easing.

Project-specific overrides that survive all four skills:

- Brand palette and typography come from `MANUAL DE MARCA TIERRA VIVA.md` and are fixed.
  The cream/clay palette is an explicitly documented exception to the premium-consumer
  palette ban - see `docs/IA-onepage.md`.
- Fonts are self-hosted from `../Rec/Fonts`. Never load Google Fonts by `<link>`.
- Zero em-dashes in any user-visible string.
- No GSAP. Use CSS scroll-driven animations with an `IntersectionObserver` fallback.
- `docs/IA-onepage.md` is the source of truth for information architecture, copy, and
  the design direction. Read it before building, and update it when decisions change.

## Design (mandatory)

Any task in this project that touches UI, layout, styling, copy on the page, motion, or visual
direction MUST load these four skills via the Skill tool **before writing any markup or CSS**.
This is not optional and does not depend on the task looking small.

Load in this order:

1. **`ui-ux-pro-max`** - look up applicable patterns, product-type conventions, UX guidelines,
   and motion presets for the surface being built.
2. **`design-taste-frontend`** - the governing ruleset. Declare the Design Read and the three
   dials, then obey the anti-slop bans and run its Pre-Flight Check before delivering.
3. **`frontend-design`** - aesthetic direction and typography judgment.
4. **`emil-design-eng`** - motion decisions, easing, durations, and interaction polish.

Where two skills conflict, `design-taste-frontend` wins on layout and content bans,
`emil-design-eng` wins on timing and easing.

Project-specific overrides that survive all four skills:

- Brand palette and typography come from `MANUAL DE MARCA TIERRA VIVA.md` and are fixed.
  The cream/clay palette is an explicitly documented exception to the premium-consumer
  palette ban - see `docs/IA-onepage.md`.
- Fonts are self-hosted from `../Rec/Fonts`. Never load Google Fonts by `<link>`.
- Zero em-dashes in any user-visible string.
- No GSAP. Use CSS scroll-driven animations with an `IntersectionObserver` fallback.
- `docs/IA-onepage.md` is the source of truth for information architecture, copy, and
  the design direction. Read it before building, and update it when decisions change.
