import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V22FloralEffect =
  | 'floral-sakura-blossom-pink'
  | 'floral-golden-sunflower-bloom'
  | 'floral-royal-rose-gold-velvet'
  | 'floral-lotus-water-zen'
  | 'floral-lavender-mist-purple'
  | 'floral-emerald-ivy-vine'
  | 'floral-orchid-gradient-glow'
  | 'floral-daisy-sunny-meadow'
  | 'floral-peony-blush-silk'
  | 'floral-wisteria-cascade-violet'
  | 'floral-tulip-spring-breeze'
  | 'floral-hibiscus-tropical-sunset'
  | 'floral-forget-me-not-cyan'
  | 'floral-dandelion-floating-seed'
  | 'floral-jasmine-star-white'
  | 'floral-hydrangea-pastel-quad'
  | 'floral-poppy-crimson-fire'
  | 'floral-magnolia-glass-crystal'
  | 'floral-marigold-festive-amber'
  | 'floral-enchanted-flora-fairy';

interface FloralSpec {
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
  effect: V22FloralEffect;
}

const SVG_FLORAL_PATTERNS = {
  // Sakura petal drift pattern
  sakuraPetals: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c2 3 5 4 5 7s-2.2 5-5 5-5-2.2-5-5 3-4 5-7z" fill="%23fbcfe8" opacity="0.35"/></svg>`,

  // Leaf vine weave
  leafVine: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2 10 Q10 2 18 10 Q10 18 2 10" stroke="%2386efac" stroke-width="1.5" fill="none" opacity="0.3"/></svg>`,

  // Flower blossom rays
  flowerRays: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="%23fde047" opacity="0.4"/></svg>`,
};

const sizes: Record<CustomParams['size'], { padding: string; fontSize: string }> = {
  sm: { padding: '8px 18px', fontSize: '13px' },
  md: { padding: '12px 26px', fontSize: '15px' },
  lg: { padding: '16px 32px', fontSize: '17px' },
  xl: { padding: '18px 38px', fontSize: '19px' },
};

const buttonClass = (id: string) => `bc-floral-${id}`;

function baseCss(spec: FloralSpec, p: CustomParams) {
  const cls = buttonClass(spec.id);
  const effect = effectCss(spec.effect, p, cls);
  return `/* Floral: ${spec.name} */\n.${cls} {\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 26px;\n  color: #fff;\n  font: 700 15px/1.1 'Plus Jakarta Sans', system-ui, sans-serif;\n  letter-spacing: .04em;\n  border-style: solid;\n  border-width: ${p.borderWidth}px;\n  border-radius: ${p.radius}px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all .25s cubic-bezier(.25,1,.5,1);\n}\n.${cls} > * { position: relative; z-index: 2; }\n.${cls}:active { transform: scale(.96); }\n${effect}`;
}

function effectCss(effect: V22FloralEffect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'floral-sakura-blossom-pink':
      return `.${cls}{background:linear-gradient(135deg,#f472b6,#fbcfe8);color:#831843;border-color:#f472b6;box-shadow:0 6px 20px rgba(244,114,182,0.4).}.${cls}:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 28px rgba(244,114,182,0.6);}`;

    case 'floral-golden-sunflower-bloom':
      return `.${cls}{background:linear-gradient(135deg,#eab308,#facc15);color:#713f12;border-color:#ca8a04;box-shadow:0 6px 20px rgba(234,179,8,0.45);}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 10px 30px rgba(234,179,8,0.65);}`;

    case 'floral-royal-rose-gold-velvet':
      return `.${cls}{background:linear-gradient(135deg,#9f1239,#be123c);color:#fecdd3;border-color:#fda4af;box-shadow:0 6px 20px rgba(159,18,57,0.5),inset 0 1px 0 rgba(255,255,255,0.4);}.${cls}:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(159,18,57,0.7),inset 0 1px 0 #fff;}`;

    case 'floral-lotus-water-zen':
      return `.${cls}{background:linear-gradient(135deg,#ec4899,#06b6d4);color:#fff;border-color:rgba(255,255,255,0.4);box-shadow:0 6px 22px rgba(6,182,212,0.4).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 12px 32px rgba(236,72,153,0.5);}`;

    case 'floral-lavender-mist-purple':
      return `.${cls}{background:linear-gradient(135deg,#a855f7,#c084fc);color:#fff;border-color:#e9d5ff;box-shadow:0 6px 20px rgba(168,85,247,0.4).}.${cls}:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(168,85,247,0.6);}`;

    case 'floral-emerald-ivy-vine':
      return `.${cls}{background:linear-gradient(135deg,#15803d,#22c55e);color:#f0fdf4;border-color:#86efac;box-shadow:0 6px 20px rgba(34,197,94,0.4).}.${cls}:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 28px rgba(34,197,94,0.6);}`;

    case 'floral-orchid-gradient-glow':
      return `.${cls}{background:linear-gradient(135deg,#c026d3,#e879f9);color:#fff;border-color:#f5d0fe;box-shadow:0 6px 22px rgba(192,38,211,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 12px 32px rgba(192,38,211,0.65);}`;

    case 'floral-daisy-sunny-meadow':
      return `.${cls}{background:#ffffff;color:#15803d;border-color:#fde047;border-width:3px;box-shadow:0 6px 20px rgba(253,224,71,0.5).}.${cls}:hover{background:#fefce8;transform:translateY(-3px);box-shadow:0 10px 28px rgba(253,224,71,0.7);}`;

    case 'floral-peony-blush-silk':
      return `.${cls}{background:linear-gradient(135deg,#fda4af,#f472b6);color:#881337;border-color:#fecdd3;box-shadow:0 6px 20px rgba(253,164,175,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 28px rgba(253,164,175,0.65);}`;

    case 'floral-wisteria-cascade-violet':
      return `.${cls}{background:linear-gradient(135deg,#7e22ce,#a855f7);color:#f3e8ff;border-color:#d8b4fe;box-shadow:0 6px 22px rgba(126,34,206,0.45).}.${cls}:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(126,34,206,0.65);}`;

    case 'floral-tulip-spring-breeze':
      return `.${cls}{background:linear-gradient(135deg,#ef4444,#f97316);color:#fff;border-color:#fed7aa;box-shadow:0 6px 20px rgba(239,68,68,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 10px 30px rgba(239,68,68,0.65);}`;

    case 'floral-hibiscus-tropical-sunset':
      return `.${cls}{background:linear-gradient(135deg,#f43f5e,#fb923c);color:#fff;border-color:#fecdd3;box-shadow:0 6px 22px rgba(244,63,94,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 12px 32px rgba(244,63,94,0.65);}`;

    case 'floral-forget-me-not-cyan':
      return `.${cls}{background:linear-gradient(135deg,#0284c7,#38bdf8);color:#fff;border-color:#bae6fd;box-shadow:0 6px 20px rgba(56,189,248,0.45).}.${cls}:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(56,189,248,0.65);}`;

    case 'floral-dandelion-floating-seed':
      return `.${cls}{background:linear-gradient(135deg,#0f172a,#1e293b);color:#f8fafc;border-color:#94a3b8;box-shadow:0 6px 20px rgba(148,163,184,0.3).}.${cls}:hover{transform:translateY(-3px);border-color:#e2e8f0;box-shadow:0 10px 28px rgba(226,232,240,0.4);}`;

    case 'floral-jasmine-star-white':
      return `.${cls}{background:linear-gradient(135deg,#f8fafc,#f1f5f9);color:#0f172a;border-color:#cbd5e1;box-shadow:0 6px 20px rgba(203,213,225,0.4).}.${cls}:hover{background:#fff;transform:translateY(-3px);box-shadow:0 10px 28px rgba(203,213,225,0.6);}`;

    case 'floral-hydrangea-pastel-quad':
      return `.${cls}{background:linear-gradient(135deg,#60a5fa,#c084fc,#f472b6);color:#fff;border-color:rgba(255,255,255,0.5);box-shadow:0 6px 22px rgba(192,132,252,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 12px 32px rgba(192,132,252,0.65);}`;

    case 'floral-poppy-crimson-fire':
      return `.${cls}{background:linear-gradient(135deg,#b91c1c,#dc2626);color:#fef2f2;border-color:#fca5a5;box-shadow:0 6px 20px rgba(185,28,28,0.5).}.${cls}:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 30px rgba(185,28,28,0.7);}`;

    case 'floral-magnolia-glass-crystal':
      return `.${cls}{background:rgba(255,255,255,0.25);backdrop-filter:blur(12px);color:#1e293b;border-color:rgba(255,255,255,0.6);box-shadow:0 6px 20px rgba(255,255,255,0.3).}.${cls}:hover{background:rgba(255,255,255,0.4);transform:translateY(-3px);box-shadow:0 10px 28px rgba(255,255,255,0.5);}`;

    case 'floral-marigold-festive-amber':
      return `.${cls}{background:linear-gradient(135deg,#d97706,#f59e0b);color:#fff;border-color:#fef3c7;box-shadow:0 6px 20px rgba(217,119,6,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 10px 30px rgba(217,119,6,0.65);}`;

    case 'floral-enchanted-flora-fairy':
      return `.${cls}{background:linear-gradient(135deg,#10b981,#3b82f6,#ec4899);color:#fff;border-color:rgba(255,255,255,0.5);box-shadow:0 6px 22px rgba(16,185,129,0.45).}.${cls}:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 12px 32px rgba(236,72,153,0.65);}`;
  }
}

function liveStyle(spec: FloralSpec, p: CustomParams, isHovered?: boolean, isActive?: boolean): React.CSSProperties {
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
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '.04em',
    borderStyle: 'solid',
    borderWidth: p.borderWidth,
    borderRadius: p.radius,
    transition: 'all .25s cubic-bezier(.25,1,.5,1)',
    overflow: 'hidden',
    cursor: p.disabled ? 'not-allowed' : 'pointer',
    opacity: p.disabled ? 0.45 : 1,
    transform: isActive ? 'scale(.96)' : isHovered ? 'translateY(-3px)' : undefined,
  };

  switch (spec.effect) {
    case 'floral-sakura-blossom-pink':
      return { ...base, color: '#831843', background: 'linear-gradient(135deg,#f472b6,#fbcfe8)', borderColor: '#f472b6', boxShadow: isHovered ? '0 10px 28px rgba(244,114,182,0.6)' : '0 6px 20px rgba(244,114,182,0.4)' };

    case 'floral-golden-sunflower-bloom':
      return { ...base, color: '#713f12', background: 'linear-gradient(135deg,#eab308,#facc15)', borderColor: '#ca8a04', boxShadow: isHovered ? '0 10px 30px rgba(234,179,8,0.65)' : '0 6px 20px rgba(234,179,8,0.45)' };

    case 'floral-royal-rose-gold-velvet':
      return { ...base, color: '#fecdd3', background: 'linear-gradient(135deg,#9f1239,#be123c)', borderColor: '#fda4af', boxShadow: isHovered ? '0 10px 30px rgba(159,18,57,0.7), inset 0 1px 0 #fff' : '0 6px 20px rgba(159,18,57,0.5), inset 0 1px 0 rgba(255,255,255,0.4)' };

    case 'floral-lotus-water-zen':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#ec4899,#06b6d4)', borderColor: 'rgba(255,255,255,0.4)', boxShadow: isHovered ? '0 12px 32px rgba(236,72,153,0.5)' : '0 6px 22px rgba(6,182,212,0.4)' };

    case 'floral-lavender-mist-purple':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#a855f7,#c084fc)', borderColor: '#e9d5ff', boxShadow: isHovered ? '0 10px 28px rgba(168,85,247,0.6)' : '0 6px 20px rgba(168,85,247,0.4)' };

    case 'floral-emerald-ivy-vine':
      return { ...base, color: '#f0fdf4', background: 'linear-gradient(135deg,#15803d,#22c55e)', borderColor: '#86efac', boxShadow: isHovered ? '0 10px 28px rgba(34,197,94,0.6)' : '0 6px 20px rgba(34,197,94,0.4)' };

    case 'floral-orchid-gradient-glow':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#c026d3,#e879f9)', borderColor: '#f5d0fe', boxShadow: isHovered ? '0 12px 32px rgba(192,38,211,0.65)' : '0 6px 22px rgba(192,38,211,0.45)' };

    case 'floral-daisy-sunny-meadow':
      return { ...base, color: '#15803d', background: isHovered ? '#fefce8' : '#ffffff', borderColor: '#fde047', borderWidth: 3, boxShadow: isHovered ? '0 10px 28px rgba(253,224,71,0.7)' : '0 6px 20px rgba(253,224,71,0.5)' };

    case 'floral-peony-blush-silk':
      return { ...base, color: '#881337', background: 'linear-gradient(135deg,#fda4af,#f472b6)', borderColor: '#fecdd3', boxShadow: isHovered ? '0 10px 28px rgba(253,164,175,0.65)' : '0 6px 20px rgba(253,164,175,0.45)' };

    case 'floral-wisteria-cascade-violet':
      return { ...base, color: '#f3e8ff', background: 'linear-gradient(135deg,#7e22ce,#a855f7)', borderColor: '#d8b4fe', boxShadow: isHovered ? '0 12px 30px rgba(126,34,206,0.65)' : '0 6px 22px rgba(126,34,206,0.45)' };

    case 'floral-tulip-spring-breeze':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#ef4444,#f97316)', borderColor: '#fed7aa', boxShadow: isHovered ? '0 10px 30px rgba(239,68,68,0.65)' : '0 6px 20px rgba(239,68,68,0.45)' };

    case 'floral-hibiscus-tropical-sunset':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#f43f5e,#fb923c)', borderColor: '#fecdd3', boxShadow: isHovered ? '0 12px 32px rgba(244,63,94,0.65)' : '0 6px 22px rgba(244,63,94,0.45)' };

    case 'floral-forget-me-not-cyan':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#0284c7,#38bdf8)', borderColor: '#bae6fd', boxShadow: isHovered ? '0 10px 28px rgba(56,189,248,0.65)' : '0 6px 20px rgba(56,189,248,0.45)' };

    case 'floral-dandelion-floating-seed':
      return { ...base, color: '#f8fafc', background: 'linear-gradient(135deg,#0f172a,#1e293b)', borderColor: isHovered ? '#e2e8f0' : '#94a3b8', boxShadow: isHovered ? '0 10px 28px rgba(226,232,240,0.4)' : '0 6px 20px rgba(148,163,184,0.3)' };

    case 'floral-jasmine-star-white':
      return { ...base, color: '#0f172a', background: isHovered ? '#ffffff' : 'linear-gradient(135deg,#f8fafc,#f1f5f9)', borderColor: '#cbd5e1', boxShadow: isHovered ? '0 10px 28px rgba(203,213,225,0.6)' : '0 6px 20px rgba(203,213,225,0.4)' };

    case 'floral-hydrangea-pastel-quad':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#60a5fa,#c084fc,#f472b6)', borderColor: 'rgba(255,255,255,0.5)', boxShadow: isHovered ? '0 12px 32px rgba(192,132,252,0.65)' : '0 6px 22px rgba(192,132,252,0.45)' };

    case 'floral-poppy-crimson-fire':
      return { ...base, color: '#fef2f2', background: 'linear-gradient(135deg,#b91c1c,#dc2626)', borderColor: '#fca5a5', boxShadow: isHovered ? '0 10px 30px rgba(185,28,28,0.7)' : '0 6px 20px rgba(185,28,28,0.5)' };

    case 'floral-magnolia-glass-crystal':
      return { ...base, color: '#1e293b', background: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.6)', boxShadow: isHovered ? '0 10px 28px rgba(255,255,255,0.5)' : '0 6px 20px rgba(255,255,255,0.3)' };

    case 'floral-marigold-festive-amber':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#d97706,#f59e0b)', borderColor: '#fef3c7', boxShadow: isHovered ? '0 10px 30px rgba(217,119,6,0.65)' : '0 6px 20px rgba(217,119,6,0.45)' };

    case 'floral-enchanted-flora-fairy':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#10b981,#3b82f6,#ec4899)', borderColor: 'rgba(255,255,255,0.5)', boxShadow: isHovered ? '0 12px 32px rgba(236,72,153,0.65)' : '0 6px 22px rgba(16,185,129,0.45)' };
  }
}

function decoration(effect: V22FloralEffect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'floral-sakura-blossom-pink':
      return <span style={{ ...common, inset: 0, opacity: 0.35, backgroundImage: `url("${SVG_FLORAL_PATTERNS.sakuraPetals}")` }} />;

    case 'floral-golden-sunflower-bloom':
      return <span style={{ ...common, right: 8, top: 6, fontSize: 13, color: '#713f12' }}>🌻</span>;

    case 'floral-royal-rose-gold-velvet':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 13, color: '#fecdd3' }}>🌹</span>;

    case 'floral-lotus-water-zen':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 13, color: '#fbcfe8' }}>🪷</span>;

    case 'floral-lavender-mist-purple':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 12, color: '#f3e8ff' }}>🪻</span>;

    case 'floral-emerald-ivy-vine':
      return <span style={{ ...common, inset: 0, opacity: 0.4, backgroundImage: `url("${SVG_FLORAL_PATTERNS.leafVine}")` }} />;

    case 'floral-orchid-gradient-glow':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 13, color: '#f5d0fe' }}>🌺</span>;

    case 'floral-daisy-sunny-meadow':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 13, color: '#eab308' }}>🌼</span>;

    case 'floral-peony-blush-silk':
      return <span style={{ ...common, right: 8, top: 6, fontSize: 13, color: '#f472b6' }}>🌸</span>;

    case 'floral-wisteria-cascade-violet':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 12, color: '#e9d5ff' }}>✨</span>;

    case 'floral-tulip-spring-breeze':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 13, color: '#fecdd3' }}>🌷</span>;

    case 'floral-hibiscus-tropical-sunset':
      return <span style={{ ...common, right: 8, top: 6, fontSize: 13, color: '#fed7aa' }}>🌺</span>;

    case 'floral-forget-me-not-cyan':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 12, color: '#bae6fd' }}>💧</span>;

    case 'floral-dandelion-floating-seed':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 13, color: '#cbd5e1' }}>🌾</span>;

    case 'floral-jasmine-star-white':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 12, color: '#fde047' }}>⭐</span>;

    case 'floral-hydrangea-pastel-quad':
      return <span style={{ ...common, right: 8, top: 6, fontSize: 13, color: '#fff' }}>💐</span>;

    case 'floral-poppy-crimson-fire':
      return <span style={{ ...common, right: 8, top: 6, fontSize: 13, color: '#fca5a5' }}>🥀</span>;

    case 'floral-magnolia-glass-crystal':
      return <span style={{ ...common, right: 10, top: 6, fontSize: 13, color: '#fbcfe8' }}>🌸</span>;

    case 'floral-marigold-festive-amber':
      return <span style={{ ...common, right: 8, top: 6, fontSize: 13, color: '#fef3c7' }}>🏵️</span>;

    case 'floral-enchanted-flora-fairy':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 13, color: '#fef08a' }}>✨</span>;
  }
}

function createPreset(spec: FloralSpec): ButtonDefinition {
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
    generateTailwind: (p) => `<button className="relative inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-[${p.radius}px]" style={{ background: '${p.primaryColor}' }}>${p.text}</button>`,
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

const specs: FloralSpec[] = [
  { id: 'floral-sakura-blossom-pink', name: 'Sakura Cherry Blossom Pink', category: 'playful-bubbly', tags: ['Sakura', 'Floral', 'Blossom', 'Pink'], description: 'Hoa anh đào Sakura hồng phới cánh hoa rơi dịu dàng.', defaultText: 'SAKURA BLOOM', defaultIcon: 'Sparkles', primary: '#f472b6', accent: '#fbcfe8', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'floral-sakura-blossom-pink' },
  { id: 'floral-golden-sunflower-bloom', name: 'Golden Sunflower Radiant Bloom', category: 'aurora-gradient', tags: ['Sunflower', 'Golden', 'Floral', 'Radiant'], description: 'Hoa hướng dương vàng rực rỡ tỏa ánh mặt trời.', defaultText: 'SUNFLOWER', defaultIcon: 'Sparkles', primary: '#eab308', accent: '#facc15', radius: 14, soundType: 'pop', recommendedBg: 'light', effect: 'floral-golden-sunflower-bloom' },
  { id: 'floral-royal-rose-gold-velvet', name: 'Royal Red Rose Gold Velvet', category: 'luxury-minimal', tags: ['Rose', 'Velvet', 'Luxury', 'Gold'], description: 'Hoa hồng nhung hoàng gia dát viền vàng hồng sang trọng.', defaultText: 'ROYAL ROSE', defaultIcon: 'Heart', primary: '#be123c', accent: '#fda4af', radius: 10, soundType: 'crisp', recommendedBg: 'dark', effect: 'floral-royal-rose-gold-velvet' },
  { id: 'floral-lotus-water-zen', name: 'Sacred Lotus Water Zen Cyan', category: 'aurora-gradient', tags: ['Lotus', 'Zen', 'Water', 'Cyan'], description: 'Hoa sen nước thiền tịnh hồng ngọc bích tỏa sáng.', defaultText: 'LOTUS ZEN', defaultIcon: 'Sparkles', primary: '#ec4899', accent: '#06b6d4', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'floral-lotus-water-zen' },
  { id: 'floral-lavender-mist-purple', name: 'Serene Lavender Mist Purple', category: 'aurora-gradient', tags: ['Lavender', 'Mist', 'Purple', 'Serene'], description: 'Cánh đồng hoa oải hương tím mộng mơ trong sương.', defaultText: 'LAVENDER MIST', defaultIcon: 'Sparkles', primary: '#a855f7', accent: '#e9d5ff', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'floral-lavender-mist-purple' },
  { id: 'floral-emerald-ivy-vine', name: 'Lush Emerald Ivy Leaf Vine', category: 'playful-bubbly', tags: ['Ivy', 'Vine', 'Emerald', 'Leaf'], description: 'Dây leo hoa lá thường xuân xanh mướt ngọc bảo.', defaultText: 'EMERALD VINE', defaultIcon: 'Check', primary: '#22c55e', accent: '#86efac', radius: 12, soundType: 'pop', recommendedBg: 'light', effect: 'floral-emerald-ivy-vine' },
  { id: 'floral-orchid-gradient-glow', name: 'Exotic Wild Orchid Magenta Glow', category: 'aurora-gradient', tags: ['Orchid', 'Magenta', 'Exotic', 'Glow'], description: 'Hoa phong lan rừng tím hồng kiêu sa quyến rũ.', defaultText: 'WILD ORCHID', defaultIcon: 'Sparkles', primary: '#c026d3', accent: '#f5d0fe', radius: 20, soundType: 'glass', recommendedBg: 'dark', effect: 'floral-orchid-gradient-glow' },
  { id: 'floral-daisy-sunny-meadow', name: 'Sunny Meadow White Daisy', category: 'playful-bubbly', tags: ['Daisy', 'Meadow', 'White', 'Yellow'], description: 'Hoa cúc họa mi trắng nhị vàng thuần khiết.', defaultText: 'WHITE DAISY', defaultIcon: 'Smile', primary: '#ffffff', accent: '#fde047', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'floral-daisy-sunny-meadow' },
  { id: 'floral-peony-blush-silk', name: 'Silk Blush Peony Pearl Pink', category: 'luxury-minimal', tags: ['Peony', 'Blush', 'Silk', 'Pearl'], description: 'Hoa mẫu đơn lụa hồng phấn kiêu sa tinh tế.', defaultText: 'BLUSH PEONY', defaultIcon: 'Heart', primary: '#fda4af', accent: '#fecdd3', radius: 12, soundType: 'glass', recommendedBg: 'light', effect: 'floral-peony-blush-silk' },
  { id: 'floral-wisteria-cascade-violet', name: 'Cascading Wisteria Dream Violet', category: 'aurora-gradient', tags: ['Wisteria', 'Violet', 'Cascade', 'Dream'], description: 'Hoa tử đằng buông rủ tím mộng mơ huyền ảo.', defaultText: 'WISTERIA DREAM', defaultIcon: 'Sparkles', primary: '#7e22ce', accent: '#d8b4fe', radius: 18, soundType: 'glass', recommendedBg: 'dark', effect: 'floral-wisteria-cascade-violet' },
  { id: 'floral-tulip-spring-breeze', name: 'Dutch Tulip Spring Breeze Coral', category: 'playful-bubbly', tags: ['Tulip', 'Spring', 'Coral', 'Dutch'], description: 'Hoa uất kim hương tulip cam đỏ rạng rỡ ngày xuân.', defaultText: 'SPRING TULIP', defaultIcon: 'Sparkles', primary: '#ef4444', accent: '#fed7aa', radius: 14, soundType: 'pop', recommendedBg: 'light', effect: 'floral-tulip-spring-breeze' },
  { id: 'floral-hibiscus-tropical-sunset', name: 'Tropical Hibiscus Coral Sunset', category: 'aurora-gradient', tags: ['Hibiscus', 'Tropical', 'Sunset', 'Coral'], description: 'Hoa râm bụt nhiệt đới hoàng hôn rực rỡ.', defaultText: 'TROPICAL BLOOM', defaultIcon: 'Flame', primary: '#f43f5e', accent: '#fb923c', radius: 16, soundType: 'pop', recommendedBg: 'dark', effect: 'floral-hibiscus-tropical-sunset' },
  { id: 'floral-forget-me-not-cyan', name: 'Delicate Forget-Me-Not Sky Blue', category: 'glass', tags: ['ForgetMeNot', 'SkyBlue', 'Cyan', 'Floral'], description: 'Hoa lưu ly xanh da trời đượm buồn ngây thơ.', defaultText: 'FORGET ME NOT', defaultIcon: 'Heart', primary: '#38bdf8', accent: '#bae6fd', radius: 9999, soundType: 'glass', recommendedBg: 'light', effect: 'floral-forget-me-not-cyan' },
  { id: 'floral-dandelion-floating-seed', name: 'Whimsical Dandelion Floating Seed', category: 'cyberpunk', tags: ['Dandelion', 'Floating', 'Seed', 'Whimsical'], description: 'Bồ công anh trắng tung bay theo làn gió nhẹ.', defaultText: 'DANDELION WISH', defaultIcon: 'Sparkles', primary: '#0f172a', accent: '#e2e8f0', radius: 12, soundType: 'crisp', recommendedBg: 'dark', effect: 'floral-dandelion-floating-seed' },
  { id: 'floral-jasmine-star-white', name: 'Star Jasmine Fragrance Cream', category: 'luxury-minimal', tags: ['Jasmine', 'Star', 'Cream', 'White'], description: 'Hoa nhài ngôi sao trắng ngà tỏa hương dịu mát.', defaultText: 'STAR JASMINE', defaultIcon: 'Sparkles', primary: '#f8fafc', accent: '#cbd5e1', radius: 10, soundType: 'glass', recommendedBg: 'light', effect: 'floral-jasmine-star-white' },
  { id: 'floral-hydrangea-pastel-quad', name: 'Pastel Hydrangea Cluster Quad', category: 'aurora-gradient', tags: ['Hydrangea', 'Pastel', 'Cluster', 'Floral'], description: 'Cẩm tú cầu bốn màu pastel hòa quyện ngộ nghĩnh.', defaultText: 'HYDRANGEA', defaultIcon: 'Sparkles', primary: '#60a5fa', accent: '#f472b6', radius: 20, soundType: 'pop', recommendedBg: 'light', effect: 'floral-hydrangea-pastel-quad' },
  { id: 'floral-poppy-crimson-fire', name: 'Wild Crimson Poppy Flame Red', category: 'brutalist', tags: ['Poppy', 'Crimson', 'Flame', 'Red'], description: 'Hoa anh túc đỏ rực rỡ đầy sức sống dại.', defaultText: 'CRIMSON POPPY', defaultIcon: 'Flame', primary: '#b91c1c', accent: '#fca5a5', radius: 8, soundType: 'pop', recommendedBg: 'dark', effect: 'floral-poppy-crimson-fire' },
  { id: 'floral-magnolia-glass-crystal', name: 'Translucent Magnolia Glass Dew', category: 'glass', tags: ['Magnolia', 'Glass', 'Dew', 'Crystal'], description: 'Hoa mộc lan thủy tinh đọng giọt sương mai.', defaultText: 'MAGNOLIA DEW', defaultIcon: 'Sparkles', primary: '#ffffff', accent: '#fbcfe8', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'floral-magnolia-glass-crystal' },
  { id: 'floral-marigold-festive-amber', name: 'Festive Marigold Golden Amber', category: 'playful-bubbly', tags: ['Marigold', 'Festive', 'Amber', 'Golden'], description: 'Hoa cúc vạn thọ vàng cam lễ hội tươi vui.', defaultText: 'MARIGOLD GOLD', defaultIcon: 'Sparkles', primary: '#d97706', accent: '#fef3c7', radius: 12, soundType: 'pop', recommendedBg: 'light', effect: 'floral-marigold-festive-amber' },
  { id: 'floral-enchanted-flora-fairy', name: 'Enchanted Fairy Botanical Glow', category: 'aurora-gradient', tags: ['Fairy', 'Enchanted', 'Botanical', 'Glow'], description: 'Vườn hoa thần tiên tỏa sáng ma thuật Lung linh.', defaultText: 'FAIRY FLORA', defaultIcon: 'Sparkles', primary: '#10b981', accent: '#ec4899', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'floral-enchanted-flora-fairy' },
];

export const v22FloralPresets = specs.map(createPreset);
