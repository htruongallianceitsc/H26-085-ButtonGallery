# ButtonCraft v1.2 — Button Gallery & Studio

React 19 + Vite + Tailwind CSS 4. Gallery 44 interactive presets, code export, favorites and saved variants.

## Local development

```bash
npm install
npm run dev
npm run qa
```

## Architecture

- `src/presets/`: one independent TSX file per button preset.
- `src/data/buttonGallery.tsx`: preset registry.
- `src/button-engine/enhance.ts`: shared export and controls normalization.
- `src/components/`: gallery, customizer, favorites.
- `src/utils/savedVariants.ts`: local saved variant persistence.

## Known limitations

The original designs rely on custom React renderers; exported HTML/CSS uses shared normalization and is not pixel-perfect equivalent for all animation pseudo-elements. Exported React is a standalone React component requiring the matching CSS. Tailwind export likewise uses matching CSS for effects. See `docs/V1.1-RELEASE.md`.

## Install troubleshooting (v1.1.1)

Requires Node >=20.19 and npm >=10. Use `npm install`, then `npm run qa`. See `docs/V1.1.1-INSTALL-FIX.md` for environment and verification details.

## What's new (v1.2)

20 additional presets and a new `material-elevation` category. See `docs/V1.2-RELEASE.md`.
