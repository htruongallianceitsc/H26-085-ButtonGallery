import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V23SvgArtEffect =
  | 'svg-art-neon-hex-cyber-frame'
  | 'svg-art-baroque-gold-filigree'
  | 'svg-art-tribal-tattoo-flame-wing'
  | 'svg-art-space-constellation-starlight'
  | 'svg-art-circuit-board-microchip'
  | 'svg-art-origami-geometric-fox'
  | 'svg-art-gothic-spire-arch'
  | 'svg-art-steampunk-gear-clockwork'
  | 'svg-art-wave-tsunami-seascape'
  | 'svg-art-aztec-sun-calendar-ring'
  | 'svg-art-art-deco-gatsby-gold'
  | 'svg-art-celtic-knotwork-braid'
  | 'svg-art-crystal-shard-geode'
  | 'svg-art-biohazard-toxic-shield'
  | 'svg-art-retro-synth-grid-landscape'
  | 'svg-art-sacred-geometry-mandala'
  | 'svg-art-starlight-galaxy-nebula'
  | 'svg-art-phoenix-firebird-crest'
  | 'svg-art-medieval-shield-crest'
  | 'svg-art-mecha-gundam-panel-hud';

interface SvgArtSpec {
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
  effect: V23SvgArtEffect;
}

const sizes: Record<CustomParams['size'], { padding: string; fontSize: string }> = {
  sm: { padding: '8px 18px', fontSize: '13px' },
  md: { padding: '12px 26px', fontSize: '15px' },
  lg: { padding: '16px 32px', fontSize: '17px' },
  xl: { padding: '18px 38px', fontSize: '19px' },
};

const buttonClass = (id: string) => `bc-svgart-${id}`;

function baseCss(spec: SvgArtSpec, p: CustomParams) {
  const cls = buttonClass(spec.id);
  const effect = effectCss(spec.effect, p, cls);
  return `/* SVG Art: ${spec.name} */\n.${cls} {\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 26px;\n  color: #fff;\n  font: 800 15px/1.1 'Plus Jakarta Sans', system-ui, sans-serif;\n  letter-spacing: .05em;\n  border-style: solid;\n  border-width: ${p.borderWidth}px;\n  border-radius: ${p.radius}px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all .25s cubic-bezier(.16,1,.3,1);\n}\n.${cls} > * { position: relative; z-index: 2; }\n.${cls}:active { transform: scale(.96); }\n${effect}`;
}

function effectCss(effect: V23SvgArtEffect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'svg-art-neon-hex-cyber-frame':
      return `.${cls}{background:#090d16;color:#38bdf8;border-color:#0284c7;box-shadow:0 0 15px rgba(56,189,248,0.3).}.${cls}:hover{color:#fff;border-color:#38bdf8;box-shadow:0 0 25px rgba(56,189,248,0.6);transform:translateY(-2px);}`;

    case 'svg-art-baroque-gold-filigree':
      return `.${cls}{background:linear-gradient(135deg,#1c1917,#292524);color:#fef08a;border-color:#eab308;box-shadow:0 6px 20px rgba(234,179,8,0.3).}.${cls}:hover{color:#fff;border-color:#fde047;box-shadow:0 10px 28px rgba(234,179,8,0.5);transform:translateY(-2px);}`;

    case 'svg-art-tribal-tattoo-flame-wing':
      return `.${cls}{background:#18181b;color:#f97316;border-color:#ea580c;box-shadow:0 6px 20px rgba(249,115,22,0.35).}.${cls}:hover{color:#fde047;border-color:#f97316;box-shadow:0 10px 28px rgba(249,115,22,0.6);transform:translateY(-2px) scale(1.02);}`;

    case 'svg-art-space-constellation-starlight':
      return `.${cls}{background:#0f172a;color:#cbd5e1;border-color:#38bdf8;box-shadow:0 6px 20px rgba(56,189,248,0.25).}.${cls}:hover{color:#fff;border-color:#818cf8;box-shadow:0 10px 28px rgba(129,140,248,0.5);transform:translateY(-2px);}`;

    case 'svg-art-circuit-board-microchip':
      return `.${cls}{background:#064e3b;color:#6ee7b7;border-color:#10b981;box-shadow:0 6px 20px rgba(16,185,129,0.35).}.${cls}:hover{color:#a7f3d0;border-color:#34d399;box-shadow:0 10px 28px rgba(16,185,129,0.6);transform:translateY(-2px);}`;

    case 'svg-art-origami-geometric-fox':
      return `.${cls}{background:linear-gradient(135deg,#ea580c,#c2410c);color:#fef2f2;border-color:#ffedd5;box-shadow:0 6px 20px rgba(234,88,12,0.4).}.${cls}:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 10px 28px rgba(234,88,12,0.6);}`;

    case 'svg-art-gothic-spire-arch':
      return `.${cls}{background:#020617;color:#e2e8f0;border-color:#475569;box-shadow:0 6px 20px rgba(71,85,105,0.4).}.${cls}:hover{color:#38bdf8;border-color:#94a3b8;box-shadow:0 10px 28px rgba(56,189,248,0.4);transform:translateY(-2px);}`;

    case 'svg-art-steampunk-gear-clockwork':
      return `.${cls}{background:linear-gradient(135deg,#78350f,#451a03);color:#fef3c7;border-color:#d97706;box-shadow:0 6px 20px rgba(217,119,6,0.4).}.${cls}:hover{color:#fff;border-color:#f59e0b;box-shadow:0 10px 28px rgba(217,119,6,0.6);transform:translateY(-2px);}`;

    case 'svg-art-wave-tsunami-seascape':
      return `.${cls}{background:linear-gradient(135deg,#0369a1,#0284c7);color:#e0f2fe;border-color:#7dd3fc;box-shadow:0 6px 20px rgba(2,132,199,0.4).}.${cls}:hover{color:#fff;border-color:#bae6fd;box-shadow:0 10px 28px rgba(2,132,199,0.6);transform:translateY(-2px);}`;

    case 'svg-art-aztec-sun-calendar-ring':
      return `.${cls}{background:#b45309;color:#fef3c7;border-color:#f59e0b;box-shadow:0 6px 20px rgba(245,158,11,0.4).}.${cls}:hover{color:#fff;border-color:#fde047;box-shadow:0 10px 28px rgba(245,158,11,0.6);transform:translateY(-2px);}`;

    case 'svg-art-art-deco-gatsby-gold':
      return `.${cls}{background:#0f172a;color:#fde047;border-color:#eab308;box-shadow:0 6px 20px rgba(234,179,8,0.35).}.${cls}:hover{color:#fff;border-color:#fef08a;box-shadow:0 10px 28px rgba(234,179,8,0.6);transform:translateY(-2px);}`;

    case 'svg-art-celtic-knotwork-braid':
      return `.${cls}{background:#14532d;color:#bbf7d0;border-color:#22c55e;box-shadow:0 6px 20px rgba(34,197,94,0.35).}.${cls}:hover{color:#fff;border-color:#86efac;box-shadow:0 10px 28px rgba(34,197,94,0.6);transform:translateY(-2px);}`;

    case 'svg-art-crystal-shard-geode':
      return `.${cls}{background:linear-gradient(135deg,#6b21a8,#9333ea);color:#f3e8ff;border-color:#c084fc;box-shadow:0 6px 20px rgba(147,51,234,0.4).}.${cls}:hover{color:#fff;border-color:#e9d5ff;box-shadow:0 10px 28px rgba(147,51,234,0.6);transform:translateY(-2px);}`;

    case 'svg-art-biohazard-toxic-shield':
      return `.${cls}{background:#172554;color:#a3e635;border-color:#84cc16;box-shadow:0 6px 20px rgba(132,204,22,0.4).}.${cls}:hover{color:#d9f99d;border-color:#a3e635;box-shadow:0 10px 28px rgba(132,204,22,0.65);transform:translateY(-2px);}`;

    case 'svg-art-retro-synth-grid-landscape':
      return `.${cls}{background:linear-gradient(180deg,#581c87,#0f172a);color:#f472b6;border-color:#ec4899;box-shadow:0 6px 20px rgba(236,72,153,0.4).}.${cls}:hover{color:#38bdf8;border-color:#f472b6;box-shadow:0 10px 28px rgba(236,72,153,0.65);transform:translateY(-2px);}`;

    case 'svg-art-sacred-geometry-mandala':
      return `.${cls}{background:#312e81;color:#c7d2fe;border-color:#818cf8;box-shadow:0 6px 20px rgba(129,140,248,0.4).}.${cls}:hover{color:#fff;border-color:#a5b4fc;box-shadow:0 10px 28px rgba(129,140,248,0.65);transform:translateY(-2px);}`;

    case 'svg-art-starlight-galaxy-nebula':
      return `.${cls}{background:linear-gradient(135deg,#1e1b4b,#311042);color:#f5d0fe;border-color:#e879f9;box-shadow:0 6px 20px rgba(232,121,249,0.4).}.${cls}:hover{color:#fff;border-color:#f0abfc;box-shadow:0 10px 28px rgba(232,121,249,0.65);transform:translateY(-2px);}`;

    case 'svg-art-phoenix-firebird-crest':
      return `.${cls}{background:linear-gradient(135deg,#991b1b,#dc2626);color:#fef08a;border-color:#facc15;box-shadow:0 6px 20px rgba(220,38,38,0.45).}.${cls}:hover{color:#fff;border-color:#fde047;box-shadow:0 10px 28px rgba(220,38,38,0.7);transform:translateY(-2px) scale(1.02);}`;

    case 'svg-art-medieval-shield-crest':
      return `.${cls}{background:#1e293b;color:#f1f5f9;border-color:#94a3b8;box-shadow:0 6px 20px rgba(148,163,184,0.35).}.${cls}:hover{color:#fde047;border-color:#cbd5e1;box-shadow:0 10px 28px rgba(148,163,184,0.55);transform:translateY(-2px);}`;

    case 'svg-art-mecha-gundam-panel-hud':
      return `.${cls}{background:#0f172a;color:#38bdf8;border-color:#0284c7;box-shadow:0 6px 20px rgba(2,132,199,0.4).}.${cls}:hover{color:#f43f5e;border-color:#fb7185;box-shadow:0 10px 28px rgba(244,63,94,0.6);transform:translateY(-2px);}`;
  }
}

function liveStyle(spec: SvgArtSpec, p: CustomParams, isHovered?: boolean, isActive?: boolean): React.CSSProperties {
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
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '.05em',
    borderStyle: 'solid',
    borderWidth: p.borderWidth,
    borderRadius: p.radius,
    transition: 'all .25s cubic-bezier(.16,1,.3,1)',
    overflow: 'hidden',
    cursor: p.disabled ? 'not-allowed' : 'pointer',
    opacity: p.disabled ? 0.45 : 1,
    transform: isActive ? 'scale(.96)' : isHovered ? 'translateY(-2px)' : undefined,
  };

  switch (spec.effect) {
    case 'svg-art-neon-hex-cyber-frame':
      return { ...base, color: isHovered ? '#fff' : '#38bdf8', background: '#090d16', borderColor: isHovered ? '#38bdf8' : '#0284c7', boxShadow: isHovered ? '0 0 25px rgba(56,189,248,0.6)' : '0 0 15px rgba(56,189,248,0.3)' };

    case 'svg-art-baroque-gold-filigree':
      return { ...base, color: isHovered ? '#fff' : '#fef08a', background: 'linear-gradient(135deg,#1c1917,#292524)', borderColor: isHovered ? '#fde047' : '#eab308', boxShadow: isHovered ? '0 10px 28px rgba(234,179,8,0.5)' : '0 6px 20px rgba(234,179,8,0.3)' };

    case 'svg-art-tribal-tattoo-flame-wing':
      return { ...base, color: isHovered ? '#fde047' : '#f97316', background: '#18181b', borderColor: isHovered ? '#f97316' : '#ea580c', boxShadow: isHovered ? '0 10px 28px rgba(249,115,22,0.6)' : '0 6px 20px rgba(249,115,22,0.35)' };

    case 'svg-art-space-constellation-starlight':
      return { ...base, color: isHovered ? '#fff' : '#cbd5e1', background: '#0f172a', borderColor: isHovered ? '#818cf8' : '#38bdf8', boxShadow: isHovered ? '0 10px 28px rgba(129,140,248,0.5)' : '0 6px 20px rgba(56,189,248,0.25)' };

    case 'svg-art-circuit-board-microchip':
      return { ...base, color: isHovered ? '#a7f3d0' : '#6ee7b7', background: '#064e3b', borderColor: isHovered ? '#34d399' : '#10b981', boxShadow: isHovered ? '0 10px 28px rgba(16,185,129,0.6)' : '0 6px 20px rgba(16,185,129,0.35)' };

    case 'svg-art-origami-geometric-fox':
      return { ...base, color: '#fef2f2', background: 'linear-gradient(135deg,#ea580c,#c2410c)', borderColor: '#ffedd5', boxShadow: isHovered ? '0 10px 28px rgba(234,88,12,0.6)' : '0 6px 20px rgba(234,88,12,0.4)' };

    case 'svg-art-gothic-spire-arch':
      return { ...base, color: isHovered ? '#38bdf8' : '#e2e8f0', background: '#020617', borderColor: isHovered ? '#94a3b8' : '#475569', boxShadow: isHovered ? '0 10px 28px rgba(56,189,248,0.4)' : '0 6px 20px rgba(71,85,105,0.4)' };

    case 'svg-art-steampunk-gear-clockwork':
      return { ...base, color: isHovered ? '#fff' : '#fef3c7', background: 'linear-gradient(135deg,#78350f,#451a03)', borderColor: isHovered ? '#f59e0b' : '#d97706', boxShadow: isHovered ? '0 10px 28px rgba(217,119,6,0.6)' : '0 6px 20px rgba(217,119,6,0.4)' };

    case 'svg-art-wave-tsunami-seascape':
      return { ...base, color: isHovered ? '#fff' : '#e0f2fe', background: 'linear-gradient(135deg,#0369a1,#0284c7)', borderColor: isHovered ? '#bae6fd' : '#7dd3fc', boxShadow: isHovered ? '0 10px 28px rgba(2,132,199,0.6)' : '0 6px 20px rgba(2,132,199,0.4)' };

    case 'svg-art-aztec-sun-calendar-ring':
      return { ...base, color: isHovered ? '#fff' : '#fef3c7', background: '#b45309', borderColor: isHovered ? '#fde047' : '#f59e0b', boxShadow: isHovered ? '0 10px 28px rgba(245,158,11,0.6)' : '0 6px 20px rgba(245,158,11,0.4)' };

    case 'svg-art-art-deco-gatsby-gold':
      return { ...base, color: isHovered ? '#fff' : '#fde047', background: '#0f172a', borderColor: isHovered ? '#fef08a' : '#eab308', boxShadow: isHovered ? '0 10px 28px rgba(234,179,8,0.6)' : '0 6px 20px rgba(234,179,8,0.35)' };

    case 'svg-art-celtic-knotwork-braid':
      return { ...base, color: isHovered ? '#fff' : '#bbf7d0', background: '#14532d', borderColor: isHovered ? '#86efac' : '#22c55e', boxShadow: isHovered ? '0 10px 28px rgba(34,197,94,0.6)' : '0 6px 20px rgba(34,197,94,0.35)' };

    case 'svg-art-crystal-shard-geode':
      return { ...base, color: isHovered ? '#fff' : '#f3e8ff', background: 'linear-gradient(135deg,#6b21a8,#9333ea)', borderColor: isHovered ? '#e9d5ff' : '#c084fc', boxShadow: isHovered ? '0 10px 28px rgba(147,51,234,0.6)' : '0 6px 20px rgba(147,51,234,0.4)' };

    case 'svg-art-biohazard-toxic-shield':
      return { ...base, color: isHovered ? '#d9f99d' : '#a3e635', background: '#172554', borderColor: isHovered ? '#a3e635' : '#84cc16', boxShadow: isHovered ? '0 10px 28px rgba(132,204,22,0.65)' : '0 6px 20px rgba(132,204,22,0.4)' };

    case 'svg-art-retro-synth-grid-landscape':
      return { ...base, color: isHovered ? '#38bdf8' : '#f472b6', background: 'linear-gradient(180deg,#581c87,#0f172a)', borderColor: '#ec4899', boxShadow: isHovered ? '0 10px 28px rgba(236,72,153,0.65)' : '0 6px 20px rgba(236,72,153,0.4)' };

    case 'svg-art-sacred-geometry-mandala':
      return { ...base, color: isHovered ? '#fff' : '#c7d2fe', background: '#312e81', borderColor: isHovered ? '#a5b4fc' : '#818cf8', boxShadow: isHovered ? '0 10px 28px rgba(129,140,248,0.65)' : '0 6px 20px rgba(129,140,248,0.4)' };

    case 'svg-art-starlight-galaxy-nebula':
      return { ...base, color: isHovered ? '#fff' : '#f5d0fe', background: 'linear-gradient(135deg,#1e1b4b,#311042)', borderColor: isHovered ? '#f0abfc' : '#e879f9', boxShadow: isHovered ? '0 10px 28px rgba(232,121,249,0.65)' : '0 6px 20px rgba(232,121,249,0.4)' };

    case 'svg-art-phoenix-firebird-crest':
      return { ...base, color: isHovered ? '#fff' : '#fef08a', background: 'linear-gradient(135deg,#991b1b,#dc2626)', borderColor: isHovered ? '#fde047' : '#facc15', boxShadow: isHovered ? '0 10px 28px rgba(220,38,38,0.7)' : '0 6px 20px rgba(220,38,38,0.45)' };

    case 'svg-art-medieval-shield-crest':
      return { ...base, color: isHovered ? '#fde047' : '#f1f5f9', background: '#1e293b', borderColor: isHovered ? '#cbd5e1' : '#94a3b8', boxShadow: isHovered ? '0 10px 28px rgba(148,163,184,0.55)' : '0 6px 20px rgba(148,163,184,0.35)' };

    case 'svg-art-mecha-gundam-panel-hud':
      return { ...base, color: isHovered ? '#f43f5e' : '#38bdf8', background: '#0f172a', borderColor: isHovered ? '#fb7185' : '#0284c7', boxShadow: isHovered ? '0 10px 28px rgba(244,63,94,0.6)' : '0 6px 20px rgba(2,132,199,0.4)' };
  }
}

function svgOverlay(effect: V23SvgArtEffect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, width: '100%', height: '100%' };
  switch (effect) {
    case 'svg-art-neon-hex-cyber-frame':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,10 L10,0 L190,0 L200,10 L200,40 L190,50 L10,50 L0,40 Z" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
          <polygon points="0,0 12,0 0,12" fill="#38bdf8" />
          <polygon points="200,50 188,50 200,38" fill="#38bdf8" />
        </svg>
      );

    case 'svg-art-baroque-gold-filigree':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M10,25 C30,5 50,45 70,25 C90,5 110,45 130,25 C150,5 170,45 190,25" fill="none" stroke="#fde047" strokeWidth="1" opacity="0.3" />
          <circle cx="10" cy="25" r="4" fill="#eab308" opacity="0.6" />
          <circle cx="190" cy="25" r="4" fill="#eab308" opacity="0.6" />
        </svg>
      );

    case 'svg-art-tribal-tattoo-flame-wing':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,50 Q20,20 50,30 Q30,10 0,0 M200,50 Q180,20 150,30 Q170,10 200,0" fill="#f97316" opacity="0.25" />
        </svg>
      );

    case 'svg-art-space-constellation-starlight':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <line x1="20" y1="15" x2="60" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
          <line x1="60" y1="35" x2="140" y2="15" stroke="#818cf8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
          <line x1="140" y1="15" x2="180" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
          <circle cx="20" cy="15" r="2.5" fill="#fff" />
          <circle cx="60" cy="35" r="2" fill="#38bdf8" />
          <circle cx="140" cy="15" r="2.5" fill="#fff" />
          <circle cx="180" cy="35" r="2" fill="#818cf8" />
        </svg>
      );

    case 'svg-art-circuit-board-microchip':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M10,10 L40,10 L50,25 L80,25 M200,40 L160,40 L150,25 L120,25" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.35" />
          <circle cx="80" cy="25" r="3" fill="#10b981" />
          <circle cx="120" cy="25" r="3" fill="#10b981" />
        </svg>
      );

    case 'svg-art-origami-geometric-fox':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <polygon points="0,0 40,0 20,50" fill="#fff" opacity="0.08" />
          <polygon points="160,0 200,0 180,50" fill="#fff" opacity="0.08" />
          <polygon points="80,0 120,0 100,50" fill="#000" opacity="0.1" />
        </svg>
      );

    case 'svg-art-gothic-spire-arch':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M10,50 L10,25 Q10,0 25,0 Q40,0 40,25 L40,50 M160,50 L160,25 Q160,0 175,0 Q190,0 190,25 L190,50" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.3" />
        </svg>
      );

    case 'svg-art-steampunk-gear-clockwork':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <circle cx="15" cy="25" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" opacity="0.4" />
          <circle cx="185" cy="25" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" opacity="0.4" />
        </svg>
      );

    case 'svg-art-wave-tsunami-seascape':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 Q75,30 100,50 Q125,30 150,50 Q175,30 200,50 Z" fill="#7dd3fc" opacity="0.2" />
        </svg>
      );

    case 'svg-art-aztec-sun-calendar-ring':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <rect x="4" y="4" width="192" height="42" fill="none" stroke="#fde047" strokeWidth="1" strokeDasharray="6,4" opacity="0.35" />
        </svg>
      );

    case 'svg-art-art-deco-gatsby-gold':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,25 L100,0 L200,25 L100,50 Z" fill="none" stroke="#eab308" strokeWidth="1" opacity="0.25" />
        </svg>
      );

    case 'svg-art-celtic-knotwork-braid':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M10,10 Q25,40 40,10 Q50,40 60,10 M140,10 Q150,40 160,10 Q175,40 190,10" fill="none" stroke="#86efac" strokeWidth="1.5" opacity="0.35" />
        </svg>
      );

    case 'svg-art-crystal-shard-geode':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <polygon points="10,10 30,5 20,45 5,35" fill="#e9d5ff" opacity="0.2" />
          <polygon points="190,10 170,5 180,45 195,35" fill="#e9d5ff" opacity="0.2" />
        </svg>
      );

    case 'svg-art-biohazard-toxic-shield':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <circle cx="20" cy="25" r="10" fill="none" stroke="#a3e635" strokeWidth="2" opacity="0.4" />
          <circle cx="180" cy="25" r="10" fill="none" stroke="#a3e635" strokeWidth="2" opacity="0.4" />
        </svg>
      );

    case 'svg-art-retro-synth-grid-landscape':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,50 L50,30 L100,50 L150,30 L200,50" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.4" />
          <line x1="0" y1="40" x2="200" y2="40" stroke="#38bdf8" strokeWidth="1" opacity="0.3" />
        </svg>
      );

    case 'svg-art-sacred-geometry-mandala':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <circle cx="100" cy="25" r="22" fill="none" stroke="#a5b4fc" strokeWidth="1" strokeDasharray="4,2" opacity="0.3" />
        </svg>
      );

    case 'svg-art-starlight-galaxy-nebula':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M20,25 C60,0 140,50 180,25" fill="none" stroke="#f0abfc" strokeWidth="1.5" opacity="0.35" />
        </svg>
      );

    case 'svg-art-phoenix-firebird-crest':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,0 Q30,25 0,50 M200,0 Q170,25 200,50" fill="none" stroke="#fde047" strokeWidth="2" opacity="0.4" />
        </svg>
      );

    case 'svg-art-medieval-shield-crest':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <path d="M0,0 L200,0 L200,10 L0,10 Z" fill="#94a3b8" opacity="0.2" />
        </svg>
      );

    case 'svg-art-mecha-gundam-panel-hud':
      return (
        <svg style={common} viewBox="0 0 200 50" preserveAspectRatio="none">
          <rect x="2" y="2" width="8" height="8" fill="#38bdf8" opacity="0.6" />
          <rect x="190" y="40" width="8" height="8" fill="#fb7185" opacity="0.6" />
        </svg>
      );
  }
}

function createPreset(spec: SvgArtSpec): ButtonDefinition {
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
    generateTailwind: (p) => `<button className="relative inline-flex items-center gap-2 px-6 py-3 font-extrabold text-white rounded-[${p.radius}px]" style={{ background: '${p.primaryColor}' }}>${p.text}</button>`,
    generateReact: (p) => `export function ${spec.id.split('-').map((x) => x[0]?.toUpperCase() + x.slice(1)).join('')}Button(){return <button>${p.text}</button>;}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        type="button"
        disabled={params.disabled}
        onClick={onClick}
        style={liveStyle(spec, params, isHovered, isActive)}
      >
        {svgOverlay(spec.effect, params, isHovered)}
        <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
}

const specs: SvgArtSpec[] = [
  { id: 'svg-art-neon-hex-cyber-frame', name: 'Cyber Neon Hexagon Vector Frame', category: 'cyberpunk', tags: ['SVG', 'Cyber', 'Hexagon', 'Frame'], description: 'Khung đường góc lục giác Vector Cyberpunk phát sáng.', defaultText: 'HEX PROTOCOL', defaultIcon: 'Terminal', primary: '#090d16', accent: '#38bdf8', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'svg-art-neon-hex-cyber-frame' },
  { id: 'svg-art-baroque-gold-filigree', name: 'Golden Baroque Royal Filigree', category: 'luxury-minimal', tags: ['Baroque', 'Gold', 'Filigree', 'SVG'], description: 'Họa tiết vương giả baroque mạ vàng đêu khắc tỉ mỉ.', defaultText: 'BAROQUE GOLD', defaultIcon: 'Sparkles', primary: '#1c1917', accent: '#fde047', radius: 10, soundType: 'crisp', recommendedBg: 'dark', effect: 'svg-art-baroque-gold-filigree' },
  { id: 'svg-art-tribal-tattoo-flame-wing', name: 'Tribal Flame Wing Vector Tattoo', category: 'brutalist', tags: ['Tribal', 'Flame', 'Tattoo', 'SVG'], description: 'Đường nét xăm Tribal cánh lửa bùng cháy cực ngầu.', defaultText: 'TRIBAL FLAME', defaultIcon: 'Flame', primary: '#18181b', accent: '#f97316', radius: 8, soundType: 'pop', recommendedBg: 'dark', effect: 'svg-art-tribal-tattoo-flame-wing' },
  { id: 'svg-art-space-constellation-starlight', name: 'Starlight Space Constellation Map', category: 'aurora-gradient', tags: ['Space', 'Constellation', 'Star', 'SVG'], description: 'Bản đồ chòm sao thiên văn vector nối sao lấp lánh.', defaultText: 'CONSTELLATION', defaultIcon: 'Sparkles', primary: '#0f172a', accent: '#38bdf8', radius: 12, soundType: 'glass', recommendedBg: 'dark', effect: 'svg-art-space-constellation-starlight' },
  { id: 'svg-art-circuit-board-microchip', name: 'Silicon Microchip PCB Circuit Trace', category: 'cyberpunk', tags: ['Circuit', 'PCB', 'Microchip', 'SVG'], description: 'Mạch điện tử silicon vi xử lý Vector xanh lục.', defaultText: 'PCB CIRCUIT', defaultIcon: 'Zap', primary: '#064e3b', accent: '#34d399', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'svg-art-circuit-board-microchip' },
  { id: 'svg-art-origami-geometric-fox', name: 'Low-Poly Geometric Origami Fox', category: 'playful-bubbly', tags: ['Origami', 'LowPoly', 'Geometric', 'Fox'], description: 'Hình khối hình học Origami đa giác xếp giấy sắc sảo.', defaultText: 'ORIGAMI FOX', defaultIcon: 'Layers', primary: '#ea580c', accent: '#ffedd5', radius: 10, soundType: 'pop', recommendedBg: 'light', effect: 'svg-art-origami-geometric-fox' },
  { id: 'svg-art-gothic-spire-arch', name: 'Gothic Cathedral Spire Archway', category: 'skeuomorphic-3d', tags: ['Gothic', 'Arch', 'Cathedral', 'Spire'], description: 'Mái vòm nhà thờ Gothic cổ kính uy nghiêm.', defaultText: 'GOTHIC ARCH', defaultIcon: 'Sparkles', primary: '#020617', accent: '#94a3b8', radius: 8, soundType: 'mechanical', recommendedBg: 'dark', effect: 'svg-art-gothic-spire-arch' },
  { id: 'svg-art-steampunk-gear-clockwork', name: 'Clockwork Steampunk Gear Wheel', category: 'skeuomorphic-3d', tags: ['Steampunk', 'Gear', 'Clockwork', 'Brass'], description: 'Bánh răng đồng hồ cơ Steampunk đồng thau cổ điển.', defaultText: 'CLOCKWORK GEAR', defaultIcon: 'Layers', primary: '#78350f', accent: '#f59e0b', radius: 12, soundType: 'mechanical', recommendedBg: 'dark', effect: 'svg-art-steampunk-gear-clockwork' },
  { id: 'svg-art-wave-tsunami-seascape', name: 'Great Japanese Wave Tsunami Contour', category: 'aurora-gradient', tags: ['Wave', 'Tsunami', 'Japanese', 'SVG'], description: 'Sóng biển đại dương cuộn trào nghệ thuật Nhật Bản.', defaultText: 'GREAT WAVE', defaultIcon: 'Sparkles', primary: '#0369a1', accent: '#7dd3fc', radius: 14, soundType: 'glass', recommendedBg: 'dark', effect: 'svg-art-wave-tsunami-seascape' },
  { id: 'svg-art-aztec-sun-calendar-ring', name: 'Ancient Aztec Sun Calendar Ring', category: 'luxury-minimal', tags: ['Aztec', 'Sun', 'Calendar', 'Gold'], description: 'Vòng tròn đĩa mặt trời Aztec cổ đại huyền bí.', defaultText: 'AZTEC SUN', defaultIcon: 'Sparkles', primary: '#b45309', accent: '#f59e0b', radius: 10, soundType: 'crisp', recommendedBg: 'dark', effect: 'svg-art-aztec-sun-calendar-ring' },
  { id: 'svg-art-art-deco-gatsby-gold', name: '1920s Art Deco Gatsby Fan Lines', category: 'luxury-minimal', tags: ['ArtDeco', 'Gatsby', 'Gold', '1920s'], description: 'Đường quạt hình học Art Deco Gatsby thập niên 1920.', defaultText: 'ART DECO GATSBY', defaultIcon: 'Sparkles', primary: '#0f172a', accent: '#fde047', radius: 6, soundType: 'crisp', recommendedBg: 'dark', effect: 'svg-art-art-deco-gatsby-gold' },
  { id: 'svg-art-celtic-knotwork-braid', name: 'Eternal Celtic Knotwork Braid', category: 'retro-pixel', tags: ['Celtic', 'Knot', 'Braid', 'SVG'], description: 'Họa tiết đan tết dây nút Celtic vĩnh cửu.', defaultText: 'CELTIC KNOT', defaultIcon: 'Shield', primary: '#14532d', accent: '#86efac', radius: 12, soundType: 'pop', recommendedBg: 'dark', effect: 'svg-art-celtic-knotwork-braid' },
  { id: 'svg-art-crystal-shard-geode', name: 'Crystal Geode Shard Facet Frame', category: 'glass', tags: ['Crystal', 'Geode', 'Facet', 'Purple'], description: 'Khung mảng tinh thể thạch anh tím góc cạnh rực rỡ.', defaultText: 'CRYSTAL GEODE', defaultIcon: 'Sparkles', primary: '#6b21a8', accent: '#e9d5ff', radius: 14, soundType: 'glass', recommendedBg: 'dark', effect: 'svg-art-crystal-shard-geode' },
  { id: 'svg-art-biohazard-toxic-shield', name: 'Cyber Biohazard Toxic Radiation Shield', category: 'cyberpunk', tags: ['Biohazard', 'Toxic', 'Shield', 'Lime'], description: 'Khiên cảnh báo chất độc sinh học Cyberpunk phát sáng.', defaultText: 'BIOHAZARD', defaultIcon: 'AlertTriangle', primary: '#172554', accent: '#a3e635', radius: 8, soundType: 'cyber', recommendedBg: 'dark', effect: 'svg-art-biohazard-toxic-shield' },
  { id: 'svg-art-retro-synth-grid-landscape', name: '80s Synthwave Grid Vector Horizon', category: 'retro-pixel', tags: ['Synthwave', 'Retro80s', 'Grid', 'Neon'], description: 'Lưới không gian Synthwave thập niên 80 hồng neon.', defaultText: 'SYNTH GRID 80S', defaultIcon: 'Play', primary: '#581c87', accent: '#ec4899', radius: 10, soundType: 'retro', recommendedBg: 'dark', effect: 'svg-art-retro-synth-grid-landscape' },
  { id: 'svg-art-sacred-geometry-mandala', name: 'Sacred Geometry Cosmic Mandala Ring', category: 'aurora-gradient', tags: ['Sacred', 'Geometry', 'Mandala', 'Cosmic'], description: 'Hình học thiêng Mandala thiên văn vũ trụ thần tịnh.', defaultText: 'SACRED MANDALA', defaultIcon: 'Sparkles', primary: '#312e81', accent: '#a5b4fc', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'svg-art-sacred-geometry-mandala' },
  { id: 'svg-art-starlight-galaxy-nebula', name: 'Deep Space Starlight Galaxy Nebula', category: 'aurora-gradient', tags: ['Galaxy', 'Nebula', 'Starlight', 'Purple'], description: 'Dải ngân hà tinh vân xa xăm rực rỡ huyền ảo.', defaultText: 'GALAXY NEBULA', defaultIcon: 'Sparkles', primary: '#1e1b4b', accent: '#f0abfc', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'svg-art-starlight-galaxy-nebula' },
  { id: 'svg-art-phoenix-firebird-crest', name: 'Rising Phoenix Firebird Wing Crest', category: 'brutalist', tags: ['Phoenix', 'Firebird', 'Wing', 'Red'], description: 'Cánh chim Phượng hoàng lửa tái sinh nổ tung.', defaultText: 'PHOENIX RISE', defaultIcon: 'Flame', primary: '#991b1b', accent: '#fde047', radius: 10, soundType: 'pop', recommendedBg: 'dark', effect: 'svg-art-phoenix-firebird-crest' },
  { id: 'svg-art-medieval-shield-crest', name: 'Medieval Heraldic Knight Shield Crest', category: 'skeuomorphic-3d', tags: ['Medieval', 'Knight', 'Shield', 'Crest'], description: 'Huy hiệu khiên hiệp sĩ thời trung cổ kiên cố.', defaultText: 'KNIGHT CREST', defaultIcon: 'Shield', primary: '#1e293b', accent: '#cbd5e1', radius: 8, soundType: 'mechanical', recommendedBg: 'dark', effect: 'svg-art-medieval-shield-crest' },
  { id: 'svg-art-mecha-gundam-panel-hud', name: 'Sci-Fi Mecha Gundam HUD Armor Bracket', category: 'cyberpunk', tags: ['Mecha', 'Gundam', 'HUD', 'Armor'], description: 'Mảnh giáp Mecha rô-bốt với chỉ số HUD chiến đấu.', defaultText: 'MECHA HUD', defaultIcon: 'Terminal', primary: '#0f172a', accent: '#fb7185', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'svg-art-mecha-gundam-panel-hud' },
];

export const v23SvgArtworkPresets = specs.map(createPreset);
