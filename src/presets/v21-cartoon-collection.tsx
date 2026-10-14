import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V21CartoonEffect =
  | 'cartoon-pop-comic-boom-orange'
  | 'cartoon-chibi-bubbly-marshmallow'
  | 'cartoon-anime-action-speedlines'
  | 'cartoon-looney-rubber-bounce'
  | 'cartoon-halftone-pop-art-yellow'
  | 'cartoon-superhero-pow-emblem'
  | 'cartoon-slime-splat-gooey-green'
  | 'cartoon-kawaii-cat-paw-pink'
  | 'cartoon-graffiti-sticker-peel'
  | 'cartoon-doodle-crayon-sketch'
  | 'cartoon-retro-rubberhose-mickey'
  | 'cartoon-pastel-cloud-puff'
  | 'cartoon-candy-soda-fizzy-pop'
  | 'cartoon-chunky-wooden-toy-block'
  | 'cartoon-pixel-chibi-heart-glow'
  | 'cartoon-magical-girl-sparkle-ribbon'
  | 'cartoon-monster-eyeball-squish'
  | 'cartoon-explosive-tnt-crate'
  | 'cartoon-space-alien-ufo-beam'
  | 'cartoon-underwater-bubble-pop';

interface CartoonSpec {
  id: string;
  name: string;
  category: ButtonCategory;
  tags: string[];
  description: string;
  defaultText: string;
  defaultIcon: string;
  primary: string;
  accent: string;
  radius: number;
  soundType: ButtonDefinition['soundType'];
  recommendedBg: ButtonDefinition['recommendedBg'];
  effect: V21CartoonEffect;
}

const SVG_PATTERNS = {
  // Comic book halftone dots pattern
  halftoneDots: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="2.5" fill="%23000000" opacity="0.18"/></svg>`,

  // Speed lines background pattern
  speedLines: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><line x1="0" y1="20" x2="20" y2="0" stroke="%23ffffff" stroke-width="2" opacity="0.25"/></svg>`,

  // Crayon pencil hatch texture
  crayonHatch: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M0,2 L8,10 M2,0 L10,8" stroke="%23000000" stroke-width="1" opacity="0.2"/></svg>`,
};

const sizes: Record<CustomParams['size'], { padding: string; fontSize: string }> = {
  sm: { padding: '8px 18px', fontSize: '13px' },
  md: { padding: '12px 26px', fontSize: '15px' },
  lg: { padding: '16px 32px', fontSize: '17px' },
  xl: { padding: '18px 38px', fontSize: '19px' },
};

const buttonClass = (id: string) => `bc-cartoon-${id}`;

function baseCss(spec: CartoonSpec, p: CustomParams) {
  const cls = buttonClass(spec.id);
  const effect = effectCss(spec.effect, p, cls);
  return `/* Cartoon: ${spec.name} */\n.${cls} {\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 26px;\n  color: #fff;\n  font: 900 15px/1.1 'Plus Jakarta Sans', system-ui, sans-serif;\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  border-style: solid;\n  border-width: ${p.borderWidth}px;\n  border-radius: ${p.radius}px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform .22s cubic-bezier(.34,1.56,.64,1), box-shadow .22s ease, background .22s ease, border-color .22s ease;\n}\n.${cls} > * { position: relative; z-index: 2; }\n.${cls}:active { transform: translateY(3px) scale(.95); }\n${effect}`;
}

function effectCss(effect: V21CartoonEffect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'cartoon-pop-comic-boom-orange':
      return `.${cls}{background:#f97316;color:#fff;border-color:#000;border-width:3px;box-shadow:6px 6px 0 #000;}.${cls}:hover{background:#ea580c;transform:translate(-3px,-3px) rotate(-1.5deg);box-shadow:9px 9px 0 #000;}`;

    case 'cartoon-chibi-bubbly-marshmallow':
      return `.${cls}{background:#f472b6;color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #be185d,0 12px 0 #000;}.${cls}:hover{background:#ec4899;transform:translateY(-3px) scale(1.05);box-shadow:0 12px 0 #be185d,0 16px 0 #000;}`;

    case 'cartoon-anime-action-speedlines':
      return `.${cls}{background:#3b82f6;color:#fff;border-color:#000;border-width:3px;box-shadow:5px 5px 0 #000;}.${cls}:hover{background:#2563eb;transform:scale(1.04) rotate(1deg);box-shadow:8px 8px 0 #000;}`;

    case 'cartoon-looney-rubber-bounce':
      return `.${cls}{background:#facc15;color:#000;border-color:#000;border-width:4px;box-shadow:6px 6px 0 #000;}.${cls}:hover{background:#eab308;transform:translateY(-4px) scale(1.06) rotate(-2deg);box-shadow:10px 10px 0 #000;}`;

    case 'cartoon-halftone-pop-art-yellow':
      return `.${cls}{background:#fde047;color:#000;border-color:#000;border-width:3px;box-shadow:6px 6px 0 #ec4899;}.${cls}:hover{background:#facc15;transform:translate(-2px,-2px);box-shadow:9px 9px 0 #ec4899;}`;

    case 'cartoon-superhero-pow-emblem':
      return `.${cls}{background:#ef4444;color:#fff;border-color:#000;border-width:4px;box-shadow:6px 6px 0 #facc15;font-size:16px;}.${cls}:hover{background:#dc2626;transform:scale(1.06) rotate(2deg);box-shadow:10px 10px 0 #facc15;}`;

    case 'cartoon-slime-splat-gooey-green':
      return `.${cls}{background:#22c55e;color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #15803d,0 12px 0 #000;}.${cls}:hover{background:#16a34a;transform:translateY(-2px) scale(1.04);box-shadow:0 11px 0 #15803d,0 15px 0 #000;}`;

    case 'cartoon-kawaii-cat-paw-pink':
      return `.${cls}{background:#fbcfe8;color:#be185d;border-color:#be185d;border-width:3px;box-shadow:0 6px 0 #f472b6,0 10px 0 #be185d;}.${cls}:hover{background:#f472b6;color:#fff;transform:translateY(-2px) scale(1.05);}`;

    case 'cartoon-graffiti-sticker-peel':
      return `.${cls}{background:#fff;color:#000;border-color:#000;border-width:3px;box-shadow:5px 5px 0 #000;}.${cls}:hover{background:#f8fafc;transform:rotate(-2deg) scale(1.04);box-shadow:8px 8px 0 #000;}`;

    case 'cartoon-doodle-crayon-sketch':
      return `.${cls}{background:#f8fafc;color:#0f172a;border-color:#0f172a;border-width:3px;box-shadow:4px 4px 0 #0f172a;}.${cls}:hover{background:#e2e8f0;transform:translate(-2px,-2px) rotate(1deg);box-shadow:7px 7px 0 #0f172a;}`;

    case 'cartoon-retro-rubberhose-mickey':
      return `.${cls}{background:#000;color:#fff;border-color:#fff;border-width:3px;box-shadow:6px 6px 0 #ef4444;}.${cls}:hover{background:#18181b;transform:translateY(-2px) rotate(-1deg);box-shadow:9px 9px 0 #ef4444;}`;

    case 'cartoon-pastel-cloud-puff':
      return `.${cls}{background:#c084fc;color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #7e22ce,0 12px 0 #000;}.${cls}:hover{background:#a855f7;transform:translateY(-3px) scale(1.05);}`;

    case 'cartoon-candy-soda-fizzy-pop':
      return `.${cls}{background:#38bdf8;color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #0284c7,0 12px 0 #000;}.${cls}:hover{background:#0284c7;transform:translateY(-2px) scale(1.04);}`;

    case 'cartoon-chunky-wooden-toy-block':
      return `.${cls}{background:#b45309;color:#fef3c7;border-color:#000;border-width:3px;box-shadow:inset 0 2px 0 #f59e0b,0 8px 0 #78350f,0 12px 0 #000;}.${cls}:hover{background:#d97706;transform:translateY(-2px);}`;

    case 'cartoon-pixel-chibi-heart-glow':
      return `.${cls}{background:#ec4899;color:#fff;border-color:#000;border-width:3px;box-shadow:5px 5px 0 #fbcfe8;}.${cls}:hover{background:#db2777;transform:scale(1.05);box-shadow:8px 8px 0 #fbcfe8;}`;

    case 'cartoon-magical-girl-sparkle-ribbon':
      return `.${cls}{background:linear-gradient(135deg,#f472b6,#38bdf8);color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #ec4899,0 12px 0 #000;}.${cls}:hover{transform:translateY(-3px) scale(1.05);}`;

    case 'cartoon-monster-eyeball-squish':
      return `.${cls}{background:#84cc16;color:#000;border-color:#000;border-width:3px;box-shadow:0 8px 0 #4d7c0f,0 12px 0 #000;}.${cls}:hover{background:#65a30d;transform:translateY(-2px) scale(1.05);}`;

    case 'cartoon-explosive-tnt-crate':
      return `.${cls}{background:#dc2626;color:#fef08a;border-color:#000;border-width:4px;box-shadow:6px 6px 0 #000;}.${cls}:hover{background:#b91c1c;transform:translate(-3px,-3px) rotate(1deg);box-shadow:9px 9px 0 #000;}`;

    case 'cartoon-space-alien-ufo-beam':
      return `.${cls}{background:#a855f7;color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #6b21a8,0 12px 0 #22c55e;}.${cls}:hover{background:#9333ea;transform:translateY(-3px) scale(1.04);}`;

    case 'cartoon-underwater-bubble-pop':
      return `.${cls}{background:#06b6d4;color:#fff;border-color:#000;border-width:3px;box-shadow:0 8px 0 #0e7490,0 12px 0 #000;}.${cls}:hover{background:#0891b2;transform:translateY(-2px) scale(1.04);}`;
  }
}

function liveStyle(spec: CartoonSpec, p: CustomParams, isHovered?: boolean, isActive?: boolean): React.CSSProperties {
  const size = sizes[p.size];
  const base: React.CSSProperties = {
    position: 'relative',
    isolation: 'isolate',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    padding: size.padding,
    fontSize: size.fontSize,
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: '.05em',
    textTransform: 'uppercase',
    borderStyle: 'solid',
    borderWidth: Math.max(3, p.borderWidth),
    borderRadius: p.radius,
    transition: 'all .22s cubic-bezier(.34,1.56,.64,1)',
    overflow: 'hidden',
    cursor: p.disabled ? 'not-allowed' : 'pointer',
    opacity: p.disabled ? 0.45 : 1,
    transform: isActive ? 'translateY(3px) scale(.95)' : undefined,
  };

  switch (spec.effect) {
    case 'cartoon-pop-comic-boom-orange':
      return { ...base, color: '#fff', background: isHovered ? '#ea580c' : '#f97316', borderColor: '#000', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #000`, transform: isHovered && !isActive ? 'translate(-3px,-3px) rotate(-1.5deg)' : base.transform };

    case 'cartoon-chibi-bubbly-marshmallow':
      return { ...base, color: '#fff', background: isHovered ? '#ec4899' : '#f472b6', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #be185d, 0 ${isHovered ? 16 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-3px) scale(1.05)' : base.transform };

    case 'cartoon-anime-action-speedlines':
      return { ...base, color: '#fff', background: isHovered ? '#2563eb' : '#3b82f6', borderColor: '#000', boxShadow: `${isHovered ? 8 : 5}px ${isHovered ? 8 : 5}px 0 #000`, transform: isHovered && !isActive ? 'scale(1.04) rotate(1deg)' : base.transform };

    case 'cartoon-looney-rubber-bounce':
      return { ...base, color: '#000', background: isHovered ? '#eab308' : '#facc15', borderColor: '#000', borderWidth: 4, boxShadow: `${isHovered ? 10 : 6}px ${isHovered ? 10 : 6}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-4px) scale(1.06) rotate(-2deg)' : base.transform };

    case 'cartoon-halftone-pop-art-yellow':
      return { ...base, color: '#000', background: isHovered ? '#facc15' : '#fde047', borderColor: '#000', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #ec4899`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };

    case 'cartoon-superhero-pow-emblem':
      return { ...base, color: '#fff', background: isHovered ? '#dc2626' : '#ef4444', borderColor: '#000', borderWidth: 4, boxShadow: `${isHovered ? 10 : 6}px ${isHovered ? 10 : 6}px 0 #facc15`, transform: isHovered && !isActive ? 'scale(1.06) rotate(2deg)' : base.transform };

    case 'cartoon-slime-splat-gooey-green':
      return { ...base, color: '#fff', background: isHovered ? '#16a34a' : '#22c55e', borderColor: '#000', boxShadow: `0 ${isHovered ? 11 : 8}px 0 #15803d, 0 ${isHovered ? 15 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };

    case 'cartoon-kawaii-cat-paw-pink':
      return { ...base, color: isHovered ? '#fff' : '#be185d', background: isHovered ? '#f472b6' : '#fbcfe8', borderColor: '#be185d', boxShadow: `0 6px 0 #f472b6, 0 10px 0 #be185d`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.05)' : base.transform };

    case 'cartoon-graffiti-sticker-peel':
      return { ...base, color: '#000', background: isHovered ? '#f8fafc' : '#fff', borderColor: '#000', boxShadow: `${isHovered ? 8 : 5}px ${isHovered ? 8 : 5}px 0 #000`, transform: isHovered && !isActive ? 'rotate(-2deg) scale(1.04)' : base.transform };

    case 'cartoon-doodle-crayon-sketch':
      return { ...base, color: '#0f172a', background: isHovered ? '#e2e8f0' : '#f8fafc', borderColor: '#0f172a', boxShadow: `${isHovered ? 7 : 4}px ${isHovered ? 7 : 4}px 0 #0f172a`, transform: isHovered && !isActive ? 'translate(-2px,-2px) rotate(1deg)' : base.transform };

    case 'cartoon-retro-rubberhose-mickey':
      return { ...base, color: '#fff', background: isHovered ? '#18181b' : '#000', borderColor: '#fff', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #ef4444`, transform: isHovered && !isActive ? 'translateY(-2px) rotate(-1deg)' : base.transform };

    case 'cartoon-pastel-cloud-puff':
      return { ...base, color: '#fff', background: isHovered ? '#a855f7' : '#c084fc', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #7e22ce, 0 ${isHovered ? 16 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-3px) scale(1.05)' : base.transform };

    case 'cartoon-candy-soda-fizzy-pop':
      return { ...base, color: '#fff', background: isHovered ? '#0284c7' : '#38bdf8', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #0284c7, 0 ${isHovered ? 16 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };

    case 'cartoon-chunky-wooden-toy-block':
      return { ...base, color: '#fef3c7', background: isHovered ? '#d97706' : '#b45309', borderColor: '#000', boxShadow: `inset 0 2px 0 #f59e0b, 0 8px 0 #78350f, 0 12px 0 #000`, transform: isHovered && !isActive ? 'translateY(-2px)' : base.transform };

    case 'cartoon-pixel-chibi-heart-glow':
      return { ...base, color: '#fff', background: isHovered ? '#db2777' : '#ec4899', borderColor: '#000', boxShadow: `${isHovered ? 8 : 5}px ${isHovered ? 8 : 5}px 0 #fbcfe8`, transform: isHovered && !isActive ? 'scale(1.05)' : base.transform };

    case 'cartoon-magical-girl-sparkle-ribbon':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#f472b6,#38bdf8)', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #ec4899, 0 ${isHovered ? 16 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-3px) scale(1.05)' : base.transform };

    case 'cartoon-monster-eyeball-squish':
      return { ...base, color: '#000', background: isHovered ? '#65a30d' : '#84cc16', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #4d7c0f, 0 ${isHovered ? 16 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.05)' : base.transform };

    case 'cartoon-explosive-tnt-crate':
      return { ...base, color: '#fef08a', background: isHovered ? '#b91c1c' : '#dc2626', borderColor: '#000', borderWidth: 4, boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #000`, transform: isHovered && !isActive ? 'translate(-3px,-3px) rotate(1deg)' : base.transform };

    case 'cartoon-space-alien-ufo-beam':
      return { ...base, color: '#fff', background: isHovered ? '#9333ea' : '#a855f7', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #6b21a8, 0 ${isHovered ? 16 : 12}px 0 #22c55e`, transform: isHovered && !isActive ? 'translateY(-3px) scale(1.04)' : base.transform };

    case 'cartoon-underwater-bubble-pop':
      return { ...base, color: '#fff', background: isHovered ? '#0891b2' : '#06b6d4', borderColor: '#000', boxShadow: `0 ${isHovered ? 12 : 8}px 0 #0e7490, 0 ${isHovered ? 16 : 12}px 0 #000`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };
  }
}

function decoration(effect: V21CartoonEffect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'cartoon-pop-comic-boom-orange':
      return <span style={{ ...common, right: -4, top: -4, width: 22, height: 22, background: '#fde047', borderLeft: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(45deg)' }} />;

    case 'cartoon-chibi-bubbly-marshmallow':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', right: 10, top: 8, background: '#fff' }} />;

    case 'cartoon-anime-action-speedlines':
      return <span style={{ ...common, inset: 0, opacity: 0.25, backgroundImage: `url("${SVG_PATTERNS.speedLines}")` }} />;

    case 'cartoon-looney-rubber-bounce':
      return <span style={{ ...common, right: 8, top: 4, fontSize: 11, color: '#000' }}>★</span>;

    case 'cartoon-halftone-pop-art-yellow':
      return <span style={{ ...common, inset: 0, opacity: 0.35, backgroundImage: `url("${SVG_PATTERNS.halftoneDots}")` }} />;

    case 'cartoon-superhero-pow-emblem':
      return <span style={{ ...common, right: 6, top: -6, background: '#facc15', color: '#000', fontSize: 9, padding: '2px 6px', borderRadius: 4, border: '2px solid #000', fontWeight: 900 }}>POW!</span>;

    case 'cartoon-slime-splat-gooey-green':
      return <span style={{ ...common, bottom: -4, left: 16, width: 14, height: 8, borderRadius: '0 0 8px 8px', background: '#22c55e', border: '2px solid #000' }} />;

    case 'cartoon-kawaii-cat-paw-pink':
      return <span style={{ ...common, right: 10, top: isHovered ? 4 : 6, fontSize: 12, color: '#be185d' }}>🐾</span>;

    case 'cartoon-graffiti-sticker-peel':
      return <span style={{ ...common, right: -1, bottom: -1, width: 16, height: 16, background: '#cbd5e1', borderTop: '2px solid #000', borderLeft: '2px solid #000', transform: 'rotate(180deg)' }} />;

    case 'cartoon-doodle-crayon-sketch':
      return <span style={{ ...common, inset: 0, opacity: 0.3, backgroundImage: `url("${SVG_PATTERNS.crayonHatch}")` }} />;

    case 'cartoon-retro-rubberhose-mickey':
      return <span style={{ ...common, left: 10, top: 6, width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />;

    case 'cartoon-pastel-cloud-puff':
      return <span style={{ ...common, width: 12, height: 12, borderRadius: '50%', right: 10, top: 6, background: '#fff', boxShadow: '0 0 8px #fff' }} />;

    case 'cartoon-candy-soda-fizzy-pop':
      return <span style={{ ...common, width: 6, height: 6, borderRadius: '50%', right: 12, top: isHovered ? 4 : 8, background: '#fff', transition: 'all .2s ease' }} />;

    case 'cartoon-chunky-wooden-toy-block':
      return <span style={{ ...common, inset: 3, border: '1px dashed rgba(255,255,255,.4)' }} />;

    case 'cartoon-pixel-chibi-heart-glow':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 12, color: '#fff' }}>♥</span>;

    case 'cartoon-magical-girl-sparkle-ribbon':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 13, color: '#fef08a' }}>✨</span>;

    case 'cartoon-monster-eyeball-squish':
      return <span style={{ ...common, right: 10, top: 6, width: 12, height: 12, borderRadius: '50%', background: '#fff', border: '2px solid #000' }} />;

    case 'cartoon-explosive-tnt-crate':
      return <span style={{ ...common, right: 6, top: -8, background: '#facc15', color: '#000', fontSize: 8, padding: '1px 4px', borderRadius: 2, border: '2px solid #000', fontWeight: 900 }}>TNT</span>;

    case 'cartoon-space-alien-ufo-beam':
      return <span style={{ ...common, right: 10, top: isHovered ? 4 : 6, fontSize: 12, color: '#22c55e' }}>🛸</span>;

    case 'cartoon-underwater-bubble-pop':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', right: 10, top: isHovered ? 4 : 8, background: 'rgba(255,255,255,.8)', transition: 'all .2s ease' }} />;
  }
}

function createPreset(spec: CartoonSpec): ButtonDefinition {
  return {
    id: spec.id,
    name: spec.name,
    category: spec.category,
    tags: spec.tags,
    description: spec.description,
    defaultText: spec.defaultText,
    defaultIcon: spec.defaultIcon,
    defaultPrimaryColor: spec.primary,
    defaultAccentColor: spec.accent,
    defaultRadius: spec.radius,
    soundType: spec.soundType,
    recommendedBg: spec.recommendedBg,
    generateCss: (p) => baseCss(spec, p),
    generateHtml: (p) => `<button class="${buttonClass(spec.id)}">${p.text}</button>`,
    generateTailwind: (p) => `<button className="relative inline-flex items-center gap-2 px-6 py-3 font-black uppercase text-white rounded-[${p.radius}px]" style={{ background: '${p.primaryColor}' }}>${p.text}</button>`,
    generateReact: (p) => `export function ${spec.id.split('-').map((x) => x[0]?.toUpperCase() + x.slice(1)).join('')}Button(){return <button>${p.text}</button>;}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        type="button"
        disabled={params.disabled}
        onClick={onClick}
        style={liveStyle(spec, params, isHovered, isActive)}
      >
        {decoration(spec.effect, params, isHovered)}
        <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
}

const specs: CartoonSpec[] = [
  { id: 'cartoon-pop-comic-boom-orange', name: 'Comic Boom Orange Pop', category: 'playful-bubbly', tags: ['Cartoon', 'Comic', 'Boom', 'PopArt'], description: 'Nút bấm truyện tranh với viền nét đậm và góc nổi bật.', defaultText: 'BOOM POP!', defaultIcon: 'Zap', primary: '#f97316', accent: '#fde047', radius: 10, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-pop-comic-boom-orange' },
  { id: 'cartoon-chibi-bubbly-marshmallow', name: 'Chibi Bubbly Marshmallow Pink', category: 'playful-bubbly', tags: ['Chibi', 'Bubbly', 'Marshmallow', 'Cartoon'], description: 'Nút kẹo bọt dẻo Chibi mập mạp bồng bềnh.', defaultText: 'SWEET CHIBI', defaultIcon: 'Smile', primary: '#f472b6', accent: '#be185d', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-chibi-bubbly-marshmallow' },
  { id: 'cartoon-anime-action-speedlines', name: 'Anime Action Speedlines Blue', category: 'retro-pixel', tags: ['Anime', 'Speedlines', 'Action', 'Cartoon'], description: 'Đường vệt tốc độ hành động hoạt hình Nhật Bản.', defaultText: 'ULTIMATE MOVE', defaultIcon: 'Zap', primary: '#3b82f6', accent: '#60a5fa', radius: 6, soundType: 'pop', recommendedBg: 'dark', effect: 'cartoon-anime-action-speedlines' },
  { id: 'cartoon-looney-rubber-bounce', name: 'Looney Rubber Hose Bounce', category: 'playful-bubbly', tags: ['Looney', 'RubberHose', 'Bounce', 'Retro'], description: 'Phong cách hoạt hình cổ điển nhún nhảy vui nhộn.', defaultText: 'BOUNCY!', defaultIcon: 'Sparkles', primary: '#facc15', accent: '#000', radius: 16, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-looney-rubber-bounce' },
  { id: 'cartoon-halftone-pop-art-yellow', name: 'Halftone Pop Art Yellow Dot', category: 'brutalist', tags: ['Halftone', 'PopArt', 'Dots', 'Comic'], description: 'Họa tiết chấm Halftone Pop Art sắc nét độc đáo.', defaultText: 'POP ART', defaultIcon: 'Sparkles', primary: '#fde047', accent: '#ec4899', radius: 4, soundType: 'crisp', recommendedBg: 'light', effect: 'cartoon-halftone-pop-art-yellow' },
  { id: 'cartoon-superhero-pow-emblem', name: 'Superhero POW Badge Emblem', category: 'brutalist', tags: ['Superhero', 'POW', 'Badge', 'Comic'], description: 'Huy hiệu siêu hạm Anh hùng với nhãn POW nổ tung.', defaultText: 'POWER UP', defaultIcon: 'Flame', primary: '#ef4444', accent: '#facc15', radius: 8, soundType: 'pop', recommendedBg: 'dark', effect: 'cartoon-superhero-pow-emblem' },
  { id: 'cartoon-slime-splat-gooey-green', name: 'Gooey Slime Splat Green', category: 'playful-bubbly', tags: ['Slime', 'Gooey', 'Splat', 'Cartoon'], description: 'Chất nhờn Slime xanh chảy giọt siêu ngộ nghĩnh.', defaultText: 'SLIME SPLAT', defaultIcon: 'Smile', primary: '#22c55e', accent: '#15803d', radius: 20, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-slime-splat-gooey-green' },
  { id: 'cartoon-kawaii-cat-paw-pink', name: 'Kawaii Cat Paw Soft Cushion', category: 'playful-bubbly', tags: ['Kawaii', 'CatPaw', 'Pink', 'Soft'], description: 'Dấu chân mèo Kawaii đệm thịt hồng dễ thương.', defaultText: 'MEOW PAW', defaultIcon: 'Heart', primary: '#fbcfe8', accent: '#be185d', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-kawaii-cat-paw-pink' },
  { id: 'cartoon-graffiti-sticker-peel', name: 'Cartoon Sticker Corner Peel', category: 'brutalist', tags: ['Sticker', 'Peel', 'Cartoon', 'Graffiti'], description: 'Tem dán nhãn hoạt hình bóc góc sành điệu.', defaultText: 'STICKER PEEL', defaultIcon: 'Layers', primary: '#ffffff', accent: '#000000', radius: 6, soundType: 'crisp', recommendedBg: 'dark', effect: 'cartoon-graffiti-sticker-peel' },
  { id: 'cartoon-doodle-crayon-sketch', name: 'Doodle Crayon Pencil Sketch', category: 'playful-bubbly', tags: ['Doodle', 'Crayon', 'Sketch', 'Cartoon'], description: 'Nét vẽ chì màu sáp nguệch ngoạc tự nhiên.', defaultText: 'DOODLE ART', defaultIcon: 'Check', primary: '#f8fafc', accent: '#0f172a', radius: 12, soundType: 'crisp', recommendedBg: 'light', effect: 'cartoon-doodle-crayon-sketch' },
  { id: 'cartoon-retro-rubberhose-mickey', name: 'Retro Rubberhose Black & Red', category: 'retro-pixel', tags: ['Rubberhose', 'Mickey', 'Retro', 'BlackRed'], description: 'Hoạt hình đen trắng đỏ cổ điển thập niên 1930.', defaultText: 'CLASSIC TOON', defaultIcon: 'Play', primary: '#000000', accent: '#ef4444', radius: 8, soundType: 'retro', recommendedBg: 'light', effect: 'cartoon-retro-rubberhose-mickey' },
  { id: 'cartoon-pastel-cloud-puff', name: 'Pastel Cloud Puff Purple', category: 'aurora-gradient', tags: ['Pastel', 'Cloud', 'Puff', 'Purple'], description: 'Đám mây tím pastel bồng bềnh nhẹ nhàng.', defaultText: 'DREAM CLOUD', defaultIcon: 'Sparkles', primary: '#c084fc', accent: '#7e22ce', radius: 24, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-pastel-cloud-puff' },
  { id: 'cartoon-candy-soda-fizzy-pop', name: 'Candy Soda Fizzy Bubble Pop', category: 'playful-bubbly', tags: ['Soda', 'Fizzy', 'Candy', 'Bubble'], description: 'Nước ngọt có ga sủi bọt bóng xốt xát.', defaultText: 'FIZZY SODA', defaultIcon: 'Smile', primary: '#38bdf8', accent: '#0284c7', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-candy-soda-fizzy-pop' },
  { id: 'cartoon-chunky-wooden-toy-block', name: 'Chunky Wooden Toy Block', category: 'skeuomorphic-3d', tags: ['Toy', 'Wooden', 'Block', 'Chunky'], description: 'Khối gỗ đồ chơi trẻ em đêu khắc dày dặn.', defaultText: 'WOODEN BLOCK', defaultIcon: 'Layers', primary: '#b45309', accent: '#f59e0b', radius: 8, soundType: 'mechanical', recommendedBg: 'light', effect: 'cartoon-chunky-wooden-toy-block' },
  { id: 'cartoon-pixel-chibi-heart-glow', name: 'Chibi Heart Pixel Glow Pink', category: 'retro-pixel', tags: ['Chibi', 'Heart', 'Pixel', 'Pink'], description: 'Trái tim Chibi tỏa sáng rực rỡ ngọt ngào.', defaultText: 'CHIBI LOVE', defaultIcon: 'Heart', primary: '#ec4899', accent: '#fbcfe8', radius: 10, soundType: 'pop', recommendedBg: 'dark', effect: 'cartoon-pixel-chibi-heart-glow' },
  { id: 'cartoon-magical-girl-sparkle-ribbon', name: 'Magical Girl Sparkle Ribbon', category: 'aurora-gradient', tags: ['Magical', 'Ribbon', 'Sparkle', 'Girl'], description: 'Dải ruy-băng ma thuật lấp lánh nơ thần kỳ.', defaultText: 'MAGICAL GIRLS', defaultIcon: 'Sparkles', primary: '#f472b6', accent: '#38bdf8', radius: 18, soundType: 'glass', recommendedBg: 'dark', effect: 'cartoon-magical-girl-sparkle-ribbon' },
  { id: 'cartoon-monster-eyeball-squish', name: 'Cute Monster Eyeball Squish', category: 'playful-bubbly', tags: ['Monster', 'Eyeball', 'Squish', 'Cute'], description: 'Quái vật mắt tròn xoe tinh nghịch đàn hồi.', defaultText: 'MONSTER EYE', defaultIcon: 'Smile', primary: '#84cc16', accent: '#4d7c0f', radius: 14, soundType: 'pop', recommendedBg: 'light', effect: 'cartoon-monster-eyeball-squish' },
  { id: 'cartoon-explosive-tnt-crate', name: 'Cartoon TNT Explosive Crate', category: 'brutalist', tags: ['TNT', 'Explosive', 'Crate', 'Cartoon'], description: 'Thùng thuốc nổ TNT hoạt hình nổ bùng.', defaultText: 'EXPLODE!', defaultIcon: 'Flame', primary: '#dc2626', accent: '#fef08a', radius: 4, soundType: 'pop', recommendedBg: 'dark', effect: 'cartoon-explosive-tnt-crate' },
  { id: 'cartoon-space-alien-ufo-beam', name: 'Space Alien UFO Beam Purple', category: 'cyberpunk', tags: ['Space', 'Alien', 'UFO', 'Beam'], description: 'Đĩa bay ngoài hành tinh chiếu chùm sáng xanh.', defaultText: 'UFO BEAM', defaultIcon: 'Terminal', primary: '#a855f7', accent: '#22c55e', radius: 12, soundType: 'cyber', recommendedBg: 'dark', effect: 'cartoon-space-alien-ufo-beam' },
  { id: 'cartoon-underwater-bubble-pop', name: 'Underwater Ocean Bubble Pop', category: 'glass', tags: ['Underwater', 'Bubble', 'Ocean', 'Cyan'], description: 'Bong bóng nước đáy đại dương nhô lên sinh động.', defaultText: 'BUBBLE POP', defaultIcon: 'Smile', primary: '#06b6d4', accent: '#0e7490', radius: 9999, soundType: 'pop', recommendedBg: 'dark', effect: 'cartoon-underwater-bubble-pop' },
];

export const v21CartoonPresets = specs.map(createPreset);
