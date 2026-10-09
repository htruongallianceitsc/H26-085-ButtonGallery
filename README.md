# ButtonCraft v1.3 — Button Gallery & Studio

React 19 + Vite + Tailwind CSS 4. Gallery 205 interactive presets, code export, favorites and saved variants.

## Local development

```bash
npm install
npm run dev
npm run qa
```

## Architecture

- `src/presets/`: individual preset modules plus grouped signature collections for closely related releases.
- `src/data/buttonGallery.tsx`: preset registry.
- `src/button-engine/enhance.ts`: shared export and controls normalization.
- `src/components/`: gallery, customizer, favorites.
- `src/utils/savedVariants.ts`: local saved variant persistence.

## Known limitations

The original designs rely on custom React renderers; exported HTML/CSS uses shared normalization and is not pixel-perfect equivalent for all animation pseudo-elements. Exported React is a standalone React component requiring the matching CSS. Tailwind export likewise uses matching CSS for effects. See `docs/V1.1-RELEASE.md`.

## Install troubleshooting (v1.1.1)

Requires Node >=20.19 and npm >=10. Use `npm install`, then `npm run qa`. See `docs/V1.1.1-INSTALL-FIX.md` for environment and verification details.

## What's new (v2.0)

- Added 20 gaming button presets using Base64 SVG Data URI frames, borders, and textures, increasing gallery total to 205 presets.
- Includes RPG gold crest filigree, cyber HUD hexagon frames, rune stone engravings, 8-bit pixel dungeon bricks, Hextech crystal gem cores, and mecha armor plates.

## What's new (v1.9)

- Added 20 signature button presets, increasing the gallery from 164 to 184 styles.
- New designs include celestial aurora cyber portal, quantum singularity core node, cyberpunk samurai katana slash, frosted diamond ice crystal, brushed antique bronze metal, neon pink graffiti tag label, solar eclipse corona ring, and golden filament circuit frame.

## What's new (v1.8)

- Added 20 signature button presets, increasing the gallery from 144 to 164 styles.
- New designs include plasma fusion energy core, cyber neon blade slash, chrono time warp gate, frosted opal gemstone glass, golden origami swan sculpt, molten iron forge anvil, electric arc shock zap, and 8-bit retro pixel life heart.

## What's new (v1.7)

- Added 20 signature button presets, increasing the gallery from 124 to 144 styles.
- New designs include cyber holo grid matrix, hyperdrive warp speed, volcanic lava core pulse, bioluminescent deep sea teal, damascus pattern welded steel, gold leaf inlay, stained glass cathedral window, origami paper fold prism, synthwave 80s sunset grid, claymorphism soft molded dough, and superconductor quantum levitation.

## What's new (v1.6)

- Added 20 signature button presets, increasing the gallery from 104 to 124 styles.
- New designs include subspace cyber portal gate, frosted glacier ice glass, brushed copper metal plate, carbon fiber racing button, graffiti street tag label, royal sapphire crown jewel, and PCB circuit board trace lines.

## What's new (v1.5)

- Added 20 signature button presets, increasing the gallery from 84 to 104 styles.
- New designs include cyberdeck mechanical key, crystal prism refract, carved slate stone, brass gear industrial switch, comic pop explosion, platinum VIP card, emerald gem facet cut, and architect blueprint line grid.

## What's new (v1.4)

- Added 20 signature button presets, increasing the gallery from 64 to 84 styles.
- New designs include matrix rain, hologram scanline, frosted liquid, sticker corner peel, ticket stub, gameboybevel, vhs tape glitch, and HUD target lock.

## What's new (v1.3)

- Added 20 signature button presets, increasing the gallery from 44 to 64 styles.
- New designs span cyberpunk, glass, tactile 3D, brutalist, neumorphic, aurora, luxury, retro, micro-interaction and playful categories.
- All new presets participate in the same ButtonCraft customization/export contract and QA suite.

## What's new (v1.2)

20 additional presets and a new `material-elevation` category. See `docs/V1.2-RELEASE.md`.
