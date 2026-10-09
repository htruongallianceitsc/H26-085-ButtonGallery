import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V16Effect =
  | 'cyber-subspace-portal'
  | 'cyber-quantum-grid'
  | 'glass-ice-frosted'
  | 'glass-spectrum-aurora'
  | 'skeuo-brushed-copper'
  | 'skeuo-carbon-fiber'
  | 'brutalist-graffiti-tag'
  | 'brutalist-neon-poster'
  | 'neumorphic-pearl-concave'
  | 'neumorphic-brushed-silver'
  | 'aurora-supernova-flare'
  | 'aurora-solar-prominence'
  | 'luxury-obsidian-gold'
  | 'luxury-sapphire-crown'
  | 'retro-vector-arcade'
  | 'retro-pinball-bumper'
  | 'interactive-sonic-boom'
  | 'interactive-gravitational-pull'
  | 'playful-marshmallow-puff'
  | 'tech-circuit-board-trace';

interface SignatureSpec {
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
  effect: V16Effect;
}

const sizes: Record<CustomParams['size'], { padding: string; fontSize: string }> = {
  sm: { padding: '8px 16px', fontSize: '12px' },
  md: { padding: '12px 24px', fontSize: '14px' },
  lg: { padding: '16px 30px', fontSize: '16px' },
  xl: { padding: '18px 36px', fontSize: '18px' },
};

const buttonClass = (id: string) => `bc-${id}`;

function baseCss(spec: SignatureSpec, p: CustomParams) {
  const cls = buttonClass(spec.id);
  const effect = effectCss(spec.effect, p, cls);
  return `/* ${spec.name} */\n.${cls} {\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 24px;\n  color: #fff;\n  font: 800 14px/1.1 Inter, system-ui, sans-serif;\n  letter-spacing: .04em;\n  border-style: solid;\n  border-width: ${p.borderWidth}px;\n  border-radius: ${p.radius}px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform .22s ease, box-shadow .22s ease, background .22s ease, border-color .22s ease;\n}\n.${cls} > * { position: relative; z-index: 2; }\n.${cls}:active { transform: translateY(2px) scale(.98); }\n${effect}`;
}

function effectCss(effect: V16Effect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'cyber-subspace-portal':
      return `.${cls}{background:#050510;color:${p.primaryColor};border-color:${p.primaryColor};box-shadow:inset 0 0 12px ${p.primaryColor}44,0 0 20px ${p.primaryColor}55;}.${cls}:hover{background:${p.primaryColor};color:#050510;box-shadow:0 0 35px ${p.primaryColor}bb,0 0 60px ${p.accentColor}77;transform:translateY(-2px);}`;
    case 'cyber-quantum-grid':
      return `.${cls}{background:#030712;color:#f0f9ff;border-color:${p.accentColor};box-shadow:0 0 16px ${p.accentColor}55;}.${cls}:hover{border-color:${p.primaryColor};box-shadow:0 0 30px ${p.primaryColor}aa;transform:scale(1.03);}`;
    case 'glass-ice-frosted':
      return `.${cls}{background:rgba(255,255,255,.18);backdrop-filter:blur(22px) saturate(200%);border-color:rgba(255,255,255,.7);box-shadow:inset 0 1px 2px #fff,0 12px 32px rgba(0,0,0,.25);}.${cls}:hover{background:rgba(255,255,255,.28);box-shadow:inset 0 1px 2px #fff,0 16px 42px ${p.primaryColor}77;transform:translateY(-3px);}`;
    case 'glass-spectrum-aurora':
      return `.${cls}{background:linear-gradient(135deg,rgba(255,255,255,.12),${p.primaryColor}25);backdrop-filter:blur(16px);border-color:rgba(255,255,255,.45);box-shadow:0 8px 25px ${p.accentColor}55;}.${cls}:hover{border-color:#fff;box-shadow:0 12px 38px ${p.primaryColor}88;transform:translateY(-2px);}`;
    case 'skeuo-brushed-copper':
      return `.${cls}{background:linear-gradient(180deg,#c2410c,#7c2d12);color:#ffedd5;border-color:#431407;box-shadow:inset 0 2px 0 #ea580c,inset 0 -3px 0 #270e04,0 7px 0 #270e04,0 12px 22px rgba(0,0,0,.45);text-shadow:0 1px 2px #270e04;}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'skeuo-carbon-fiber':
      return `.${cls}{background:repeating-linear-gradient(45deg,#18181b,#18181b 4px,#27272a 4px,#27272a 8px);color:#f4f4f5;border-color:#09090b;box-shadow:inset 0 2px 0 #3f3f46,0 6px 0 #09090b,0 10px 20px rgba(0,0,0,.5);text-shadow:0 1px 2px #000;}.${cls}:hover{filter:brightness(1.2);transform:translateY(-2px);}`;
    case 'brutalist-graffiti-tag':
      return `.${cls}{background:#a855f7;color:#fff;border-color:#000;border-width:3px;box-shadow:6px 6px 0 #000;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:${p.primaryColor};transform:translate(-3px,-3px);box-shadow:9px 9px 0 #000;}`;
    case 'brutalist-neon-poster':
      return `.${cls}{background:#06b6d4;color:#000;border-color:#000;border-width:3px;box-shadow:6px 6px 0 ${p.accentColor};font-weight:900;text-transform:uppercase;}.${cls}:hover{background:${p.primaryColor};color:#fff;transform:translate(-2px,-2px);box-shadow:9px 9px 0 ${p.accentColor};}`;
    case 'neumorphic-pearl-concave':
      return `.${cls}{background:linear-gradient(145deg,#f1f5f9,#e2e8f0);color:#0f172a;border-color:rgba(255,255,255,.8);box-shadow:6px 6px 14px #cbd5e1,-6px -6px 14px #ffffff;}.${cls}:hover{box-shadow:9px 9px 20px #cbd5e1,-9px -9px 20px #ffffff;transform:translateY(-2px);}`;
    case 'neumorphic-brushed-silver':
      return `.${cls}{background:#1e293b;color:${p.primaryColor};border-color:#334155;box-shadow:inset 5px 5px 12px #0f172a,inset -5px -5px 12px #475569,0 0 15px ${p.primaryColor}33;}.${cls}:hover{color:#fff;box-shadow:inset 2px 2px 6px #0f172a,inset -2px -2px 6px #475569,0 0 25px ${p.primaryColor}aa;transform:scale(1.02);}`;
    case 'aurora-supernova-flare':
      return `.${cls}{background:linear-gradient(135deg,#020617,${p.primaryColor}66,#020617);color:#fff;border-color:${p.primaryColor};box-shadow:0 0 24px ${p.primaryColor}88,0 0 48px ${p.accentColor}55;}.${cls}:hover{box-shadow:0 0 40px ${p.primaryColor},0 0 70px ${p.accentColor}88;transform:translateY(-2px);}`;
    case 'aurora-solar-prominence':
      return `.${cls}{background:linear-gradient(120deg,${p.primaryColor},${p.accentColor},#f59e0b);background-size:200% 100%;color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 8px 25px ${p.primaryColor}77;}.${cls}:hover{background-position:100% 0;box-shadow:0 14px 40px ${p.accentColor}99;transform:translateY(-2px);}`;
    case 'luxury-obsidian-gold':
      return `.${cls}{background:linear-gradient(135deg,#09090b,#18181b);color:#fef08a;border-color:#eab308;box-shadow:0 8px 22px rgba(0,0,0,.5),inset 0 1px 0 #fef08a88;font-family:serif;letter-spacing:.14em;}.${cls}:hover{border-color:#fef08a;box-shadow:0 12px 32px #eab30866;transform:translateY(-2px);}`;
    case 'luxury-sapphire-crown':
      return `.${cls}{background:linear-gradient(180deg,#1e3a8a,#172554);color:#93c5fd;border-color:#60a5fa;box-shadow:inset 0 0 15px #60a5fa44,0 8px 22px rgba(0,0,0,.5);font-family:serif;letter-spacing:.15em;}.${cls}:hover{color:#fff;border-color:#93c5fd;box-shadow:0 0 32px #60a5fabb;transform:translateY(-2px);}`;
    case 'retro-vector-arcade':
      return `.${cls}{background:#020617;color:#38bdf8;border-color:#38bdf8;border-width:2px;box-shadow:0 0 15px #38bdf844;font-family:monospace;}.${cls}:hover{background:#38bdf8;color:#020617;box-shadow:0 0 30px #38bdf899;transform:scale(1.03);}`;
    case 'retro-pinball-bumper':
      return `.${cls}{background:#e11d48;color:#fff;border-color:#fda4af;box-shadow:inset 0 3px 0 #fecdd3,inset 0 -4px 0 #881337,0 8px 0 #881337,0 12px 20px rgba(0,0,0,.4);text-shadow:0 2px 2px #881337;}.${cls}:hover{background:#f43f5e;transform:translateY(-2px);}`;
    case 'interactive-sonic-boom':
      return `.${cls}{background:#020617;color:#fff;border-color:${p.primaryColor};box-shadow:0 0 16px ${p.primaryColor}66;}.${cls}:hover{box-shadow:0 0 32px ${p.primaryColor}bb,0 0 55px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'interactive-gravitational-pull':
      return `.${cls}{background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 10px 25px ${p.primaryColor}66;}.${cls}:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 18px 42px ${p.primaryColor}99;}`;
    case 'playful-marshmallow-puff':
      return `.${cls}{background:#c084fc;color:#fff;border-color:#f3e8ff;box-shadow:0 8px 0 #7e22ce,0 12px 20px rgba(0,0,0,.2);}.${cls}:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 10px 0 #7e22ce,0 16px 28px #c084fc88;}`;
    case 'tech-circuit-board-trace':
      return `.${cls}{background:#064e3b;color:#6ee7b7;border-color:#34d399;border-width:1px;font-family:monospace;text-transform:uppercase;box-shadow:0 0 15px #34d39944;}.${cls}:hover{background:#047857;color:#fff;box-shadow:0 0 28px #34d39988;transform:translateY(-2px);}`;
  }
}

function liveStyle(spec: SignatureSpec, p: CustomParams, isHovered?: boolean, isActive?: boolean): React.CSSProperties {
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
    letterSpacing: '.04em',
    borderStyle: 'solid',
    borderWidth: p.borderWidth,
    borderRadius: p.radius,
    transition: 'all .22s ease',
    overflow: 'hidden',
    cursor: p.disabled ? 'not-allowed' : 'pointer',
    opacity: p.disabled ? 0.45 : 1,
    transform: isActive ? 'translateY(2px) scale(.98)' : undefined,
  };

  const hoverLift = isHovered && !isActive ? 'translateY(-2px)' : base.transform;

  switch (spec.effect) {
    case 'cyber-subspace-portal':
      return { ...base, color: isHovered ? '#050510' : p.primaryColor, background: isHovered ? p.primaryColor : '#050510', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 35 : 20}px ${p.primaryColor}${isHovered ? 'bb' : '55'}`, transform: hoverLift };
    case 'cyber-quantum-grid':
      return { ...base, color: '#f0f9ff', background: '#030712', borderColor: isHovered ? p.primaryColor : p.accentColor, boxShadow: `0 0 ${isHovered ? 30 : 16}px ${isHovered ? p.primaryColor : p.accentColor}aa`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'glass-ice-frosted':
      return { ...base, color: '#fff', background: isHovered ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.18)', backdropFilter: 'blur(22px) saturate(200%)', borderColor: 'rgba(255,255,255,.7)', boxShadow: `inset 0 1px 2px #fff, 0 ${isHovered ? 16 : 12}px ${isHovered ? 42 : 32}px ${p.primaryColor}${isHovered ? '77' : '33'}`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'glass-spectrum-aurora':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,rgba(255,255,255,.12),${p.primaryColor}25)`, backdropFilter: 'blur(16px)', borderColor: isHovered ? '#fff' : 'rgba(255,255,255,.45)', boxShadow: `0 ${isHovered ? 12 : 8}px ${isHovered ? 38 : 25}px ${p.primaryColor}88`, transform: hoverLift };
    case 'skeuo-brushed-copper':
      return { ...base, color: '#ffedd5', background: 'linear-gradient(180deg,#c2410c,#7c2d12)', borderColor: '#431407', boxShadow: 'inset 0 2px 0 #ea580c,inset 0 -3px 0 #270e04,0 7px 0 #270e04,0 12px 22px rgba(0,0,0,.45)', textShadow: '0 1px 2px #270e04', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'skeuo-carbon-fiber':
      return { ...base, color: '#f4f4f5', background: 'repeating-linear-gradient(45deg,#18181b,#18181b 4px,#27272a 4px,#27272a 8px)', borderColor: '#09090b', boxShadow: 'inset 0 2px 0 #3f3f46,0 6px 0 #09090b,0 10px 20px rgba(0,0,0,.5)', textShadow: '0 1px 2px #000', filter: isHovered ? 'brightness(1.2)' : undefined, transform: hoverLift };
    case 'brutalist-graffiti-tag':
      return { ...base, color: '#fff', background: isHovered ? p.primaryColor : '#a855f7', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #000`, transform: isHovered && !isActive ? 'translate(-3px,-3px)' : base.transform };
    case 'brutalist-neon-poster':
      return { ...base, color: isHovered ? '#fff' : '#000', background: isHovered ? p.primaryColor : '#06b6d4', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 ${p.accentColor}`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'neumorphic-pearl-concave':
      return { ...base, color: '#0f172a', background: 'linear-gradient(145deg,#f1f5f9,#e2e8f0)', borderColor: 'rgba(255,255,255,.8)', boxShadow: isHovered ? '9px 9px 20px #cbd5e1,-9px -9px 20px #ffffff' : '6px 6px 14px #cbd5e1,-6px -6px 14px #ffffff', transform: hoverLift };
    case 'neumorphic-brushed-silver':
      return { ...base, color: isHovered ? '#fff' : p.primaryColor, background: '#1e293b', borderColor: '#334155', boxShadow: isHovered ? `inset 2px 2px 6px #0f172a,inset -2px -2px 6px #475569,0 0 25px ${p.primaryColor}aa` : `inset 5px 5px 12px #0f172a,inset -5px -5px 12px #475569,0 0 15px ${p.primaryColor}33`, transform: isHovered && !isActive ? 'scale(1.02)' : base.transform };
    case 'aurora-supernova-flare':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#020617,${p.primaryColor}66,#020617)`, borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 40 : 24}px ${p.primaryColor}, 0 0 ${isHovered ? 70 : 48}px ${p.accentColor}88`, transform: hoverLift };
    case 'aurora-solar-prominence':
      return { ...base, color: '#fff', background: isHovered ? `linear-gradient(120deg,${p.accentColor},#f59e0b,${p.primaryColor})` : `linear-gradient(120deg,${p.primaryColor},${p.accentColor},#f59e0b)`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 14 : 8}px ${isHovered ? 40 : 25}px ${isHovered ? p.accentColor : p.primaryColor}99`, transform: hoverLift };
    case 'luxury-obsidian-gold':
      return { ...base, color: '#fef08a', background: 'linear-gradient(135deg,#09090b,#18181b)', borderColor: isHovered ? '#fef08a' : '#eab308', fontFamily: 'serif', letterSpacing: '.14em', boxShadow: isHovered ? '0 12px 32px #eab30866' : '0 8px 22px rgba(0,0,0,.5)', transform: hoverLift };
    case 'luxury-sapphire-crown':
      return { ...base, color: isHovered ? '#fff' : '#93c5fd', background: 'linear-gradient(180deg,#1e3a8a,#172554)', borderColor: isHovered ? '#93c5fd' : '#60a5fa', fontFamily: 'serif', letterSpacing: '.15em', boxShadow: `0 0 ${isHovered ? 32 : 15}px #60a5fabb`, transform: hoverLift };
    case 'retro-vector-arcade':
      return { ...base, color: isHovered ? '#020617' : '#38bdf8', background: isHovered ? '#38bdf8' : '#020617', borderColor: '#38bdf8', borderWidth: Math.max(2, p.borderWidth), fontFamily: 'monospace', boxShadow: `0 0 ${isHovered ? 30 : 15}px #38bdf899`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'retro-pinball-bumper':
      return { ...base, color: '#fff', background: isHovered ? '#f43f5e' : '#e11d48', borderColor: '#fda4af', boxShadow: 'inset 0 3px 0 #fecdd3,inset 0 -4px 0 #881337,0 8px 0 #881337,0 12px 20px rgba(0,0,0,.4)', textShadow: '0 2px 2px #881337', transform: hoverLift };
    case 'interactive-sonic-boom':
      return { ...base, color: '#fff', background: '#020617', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 32 : 16}px ${p.primaryColor}bb, 0 0 ${isHovered ? 55 : 20}px ${p.accentColor}66`, transform: hoverLift };
    case 'interactive-gravitational-pull':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 18 : 10}px ${isHovered ? 42 : 25}px ${p.primaryColor}99`, transform: isHovered && !isActive ? 'translateY(-4px) scale(1.03)' : base.transform };
    case 'playful-marshmallow-puff':
      return { ...base, color: '#fff', background: '#c084fc', borderColor: '#f3e8ff', boxShadow: `0 ${isHovered ? 10 : 8}px 0 #7e22ce, 0 ${isHovered ? 16 : 12}px 28px #c084fc88`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };
    case 'tech-circuit-board-trace':
      return { ...base, color: isHovered ? '#fff' : '#6ee7b7', background: isHovered ? '#047857' : '#064e3b', borderColor: '#34d399', fontFamily: 'monospace', textTransform: 'uppercase', boxShadow: `0 0 ${isHovered ? 28 : 15}px #34d39988`, transform: hoverLift };
  }
}

function decoration(effect: V16Effect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'cyber-subspace-portal':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.35 : 0.12, background: `repeating-linear-gradient(90deg,transparent 0 10px,${p.primaryColor} 11px 12px)` }} />;
    case 'cyber-quantum-grid':
      return <span style={{ ...common, inset: 0, opacity: 0.25, background: `repeating-linear-gradient(0deg,transparent 0 3px,${p.accentColor} 4px 5px)` }} />;
    case 'glass-ice-frosted':
      return <span style={{ ...common, width: 100, height: 35, left: -20, top: -10, borderRadius: '50%', background: 'rgba(255,255,255,.45)', filter: 'blur(9px)' }} />;
    case 'glass-spectrum-aurora':
      return <span style={{ ...common, width: 38, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent)', transform: 'rotate(22deg)', transition: 'left .5s ease' }} />;
    case 'skeuo-brushed-copper':
      return <span style={{ ...common, inset: 4, border: '1px solid #ea580c55', borderRadius: Math.max(2, p.radius - 4) }} />;
    case 'skeuo-carbon-fiber':
      return <span style={{ ...common, width: 12, height: 12, borderRadius: '50%', right: 8, top: 8, background: '#3f3f46', boxShadow: '0 0 6px #3f3f46' }} />;
    case 'brutalist-graffiti-tag':
      return <span style={{ ...common, right: -2, top: -2, width: 18, height: 18, background: '#facc15', borderLeft: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(45deg)' }} />;
    case 'brutalist-neon-poster':
      return <span style={{ ...common, inset: 3, border: '1px solid rgba(255,255,255,.35)', pointerEvents: 'none' }} />;
    case 'neumorphic-pearl-concave':
      return <span style={{ ...common, inset: 2, borderRadius: Math.max(0, p.radius - 2), border: '1px solid rgba(255,255,255,.9)' }} />;
    case 'neumorphic-brushed-silver':
      return <span style={{ ...common, width: 6, height: 6, borderRadius: '50%', left: 10, background: p.primaryColor, boxShadow: `0 0 8px ${p.primaryColor}` }} />;
    case 'aurora-supernova-flare':
      return <span style={{ ...common, width: 50, height: 50, right: 10, top: -10, borderRadius: '50%', background: p.accentColor, filter: 'blur(16px)', opacity: 0.5 }} />;
    case 'aurora-solar-prominence':
      return <span style={{ ...common, inset: 0, background: 'radial-gradient(circle at 80% 20%,rgba(255,255,255,.4),transparent 60%)' }} />;
    case 'luxury-obsidian-gold':
      return <span style={{ ...common, width: 8, height: 8, left: 8, top: 8, borderLeft: '2px solid #eab308', borderTop: '2px solid #eab308' }} />;
    case 'luxury-sapphire-crown':
      return <span style={{ ...common, inset: 4, border: '1px solid #60a5fa55', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'retro-vector-arcade':
      return <span style={{ ...common, right: 8, top: 4, fontSize: 9, fontFamily: 'monospace', color: '#38bdf8' }}>READY</span>;
    case 'retro-pinball-bumper':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', left: 10, top: 10, background: '#fca5a5' }} />;
    case 'interactive-sonic-boom':
      return <span style={{ ...common, inset: -4, borderRadius: Math.max(0, p.radius + 4), border: `1px solid ${p.primaryColor}55`, opacity: isHovered ? 1 : 0.3 }} />;
    case 'interactive-gravitational-pull':
      return <span style={{ ...common, width: 60, height: 20, left: 10, top: 2, borderRadius: '50%', background: 'rgba(255,255,255,.35)', filter: 'blur(4px)' }} />;
    case 'playful-marshmallow-puff':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', right: 10, top: isHovered ? 6 : 8, background: '#fff', boxShadow: '0 0 6px #fff', transition: 'all .2s ease' }} />;
    case 'tech-circuit-board-trace':
      return (
        <>
          <span style={{ ...common, left: 4, top: 4, width: 6, height: 6, borderLeft: '2px solid #34d399', borderTop: '2px solid #34d399' }} />
          <span style={{ ...common, right: 4, bottom: 4, width: 6, height: 6, borderRight: '2px solid #34d399', borderBottom: '2px solid #34d399' }} />
        </>
      );
  }
}

function createPreset(spec: SignatureSpec): ButtonDefinition {
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
    generateTailwind: (p) => `<button className="relative inline-flex items-center gap-2 px-6 py-3 font-extrabold" style={{ background: '${p.primaryColor}', borderRadius: ${p.radius} }}>${p.text}</button>`,
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

const specs: SignatureSpec[] = [
  { id: 'cyber-subspace-portal-glow', name: 'Subspace Cyber Portal Gate', category: 'cyberpunk', tags: ['Subspace', 'Portal', 'Cyber', 'Gate'], description: 'Cổng không gian phụ viễn tưởng với viền sáng năng lượng ma trận huyền bí.', defaultText: 'OPEN PORTAL', defaultIcon: 'Terminal', primary: '#22d3ee', accent: '#a855f7', radius: 4, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-subspace-portal' },
  { id: 'cyber-quantum-grid-matrix', name: 'Quantum Grid Matrix Node', category: 'cyberpunk', tags: ['Quantum', 'Grid', 'Matrix', 'Node'], description: 'Nút mạng lượng tử phát sáng nhịp nhàng theo tần số sóng năng lượng.', defaultText: 'QUANTUM LINK', defaultIcon: 'Cpu', primary: '#06b6d4', accent: '#3b82f6', radius: 8, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-quantum-grid' },
  { id: 'glass-ice-frosted-glacier', name: 'Frosted Glacier Ice Glass', category: 'glass', tags: ['Glacier', 'Ice', 'Frosted', 'Glass'], description: 'Khối kính mờ băng tuyết băng giá tinh khiết với viền phản quang trắng sáng.', defaultText: 'Băng Mờ Glacier', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#818cf8', radius: 22, soundType: 'glass', recommendedBg: 'dark-primary', effect: 'glass-ice-frosted' },
  { id: 'glass-spectrum-aurora-glow', name: 'Spectrum Aurora Prism Glass', category: 'glass', tags: ['Spectrum', 'Aurora', 'Prism', 'Glass'], description: 'Kính đa sắc cầu vồng bắt ánh sáng lung linh sống động theo góc nhìn.', defaultText: 'Aurora Spectrum', defaultIcon: 'Sparkles', primary: '#f472b6', accent: '#38bdf8', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-spectrum-aurora' },
  { id: 'skeuo-brushed-copper-plate', name: 'Brushed Copper Metal Plate', category: 'skeuomorphic-3d', tags: ['Copper', 'Brushed', 'Metal', 'Plate'], description: 'Tấm đồng đỏ phay xước cổ điển với độ đày nổi khối 3D rõ nét.', defaultText: 'COPPER PRESS', defaultIcon: 'Layers', primary: '#c2410c', accent: '#ea580c', radius: 8, soundType: 'mechanical', recommendedBg: 'light', effect: 'skeuo-brushed-copper' },
  { id: 'skeuo-carbon-fiber-race', name: 'Carbon Fiber Racing Button', category: 'skeuomorphic-3d', tags: ['Carbon', 'Fiber', 'Racing', '3D'], description: 'Bề mặt sợi carbon thể thao với họa tiết đường chéo nổi bật.', defaultText: 'RACE MODE', defaultIcon: 'Zap', primary: '#27272a', accent: '#3f3f46', radius: 10, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-carbon-fiber' },
  { id: 'brutalist-graffiti-tag-art', name: 'Graffiti Street Tag Label', category: 'brutalist', tags: ['Graffiti', 'Street', 'Brutalist', 'Art'], description: 'Phong cách nghệ thuật đường phố cá tính với bóng đổ vuông vắn ấn tượng.', defaultText: 'STREET ART', defaultIcon: 'Flame', primary: '#a855f7', accent: '#facc15', radius: 4, soundType: 'pop', recommendedBg: 'light', effect: 'brutalist-graffiti-tag' },
  { id: 'brutalist-neon-poster-bold', name: 'Bold Neon Poster Cutout', category: 'brutalist', tags: ['Neon', 'Poster', 'Bold', 'Cutout'], description: 'Áp phích neon rực rỡ với đường cắt thô mộc phong cách Brutalism.', defaultText: 'NEON POSTER', defaultIcon: 'Shield', primary: '#06b6d4', accent: '#ec4899', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'brutalist-neon-poster' },
  { id: 'neumorphic-pearl-white-concave', name: 'Pearl White Soft Neumorphism', category: 'neumorphic', tags: ['Pearl', 'White', 'Neumorphism', 'Soft'], description: 'Nút ngọc trai trắng mềm mại với hai dải bóng chìm nổi thanh lịch.', defaultText: 'PEARL SOFT', defaultIcon: 'Smile', primary: '#e2e8f0', accent: '#cbd5e1', radius: 20, soundType: 'pop', recommendedBg: 'light', effect: 'neumorphic-pearl-concave' },
  { id: 'neumorphic-brushed-silver-well', name: 'Brushed Silver Metallic Well', category: 'neumorphic', tags: ['Silver', 'Brushed', 'Neumorphism', 'Well'], description: 'Giếng bạc phay xước chìm phát ra ánh kim loại hiện đại.', defaultText: 'SILVER TOUCH', defaultIcon: 'Cpu', primary: '#64748b', accent: '#475569', radius: 18, soundType: 'mechanical', recommendedBg: 'dark', effect: 'neumorphic-brushed-silver' },
  { id: 'aurora-supernova-flare-core', name: 'Supernova Flare Core Glow', category: 'aurora-gradient', tags: ['Supernova', 'Flare', 'Aurora', 'Space'], description: 'Hào quang siêu tân tinh bùng nổ năng lượng vũ trụ huyền ảo.', defaultText: 'SUPERNOVA', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#a855f7', radius: 24, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-supernova-flare' },
  { id: 'aurora-solar-prominence-wave', name: 'Solar Prominence Thermal Wave', category: 'aurora-gradient', tags: ['Solar', 'Prominence', 'Aurora', 'Wave'], description: 'Tai lửa mặt trời rực rỡ với sóng nhiệt màu cam đỏ cuốn hút.', defaultText: 'SOLAR FLARE', defaultIcon: 'Sun', primary: '#f97316', accent: '#ef4444', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-solar-prominence' },
  { id: 'luxury-obsidian-gold-seal', name: 'Obsidian Black Gold Emblem', category: 'luxury-minimal', tags: ['Obsidian', 'Gold', 'Luxury', 'Seal'], description: 'Đá hắc diệu thạch đen tuyền điểm xuyết viền vàng hoàng gia.', defaultText: 'OBSIDIAN VIP', defaultIcon: 'Crown', primary: '#eab308', accent: '#fef08a', radius: 4, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-obsidian-gold' },
  { id: 'luxury-sapphire-crown-jewel', name: 'Royal Sapphire Crown Jewel', category: 'luxury-minimal', tags: ['Sapphire', 'Crown', 'Jewel', 'Luxury'], description: 'Đá lam ngọc hoàng gia tỏa sáng quý phái trên nền tối.', defaultText: 'ROYAL SAPPHIRE', defaultIcon: 'Star', primary: '#2563eb', accent: '#93c5fd', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-sapphire-crown' },
  { id: 'retro-vector-arcade-cyan', name: 'Vector Arcade Glowing Cyan', category: 'retro-pixel', tags: ['Vector', 'Arcade', 'Retro', 'Cyan'], description: 'Đồ họa phéc-tơ máy game điện tử băng cổ điển rực rỡ.', defaultText: 'INSERT COIN', defaultIcon: 'Play', primary: '#38bdf8', accent: '#0284c7', radius: 4, soundType: 'retro', recommendedBg: 'dark', effect: 'retro-vector-arcade' },
  { id: 'retro-pinball-bumper-red', name: 'Pinball Bumper Flash Button', category: 'retro-pixel', tags: ['Pinball', 'Bumper', 'Retro', 'Flash'], description: 'Nút đẩy máy pinball màu đỏ rực rỡ phản hồi tức thì.', defaultText: 'FLIPPER BUMPER', defaultIcon: 'Heart', primary: '#e11d48', accent: '#fda4af', radius: 9999, soundType: 'retro', recommendedBg: 'light', effect: 'retro-pinball-bumper' },
  { id: 'interactive-sonic-boom-pulse', name: 'Sonic Boom Wave Ring', category: 'micro-interactive', tags: ['Sonic', 'Boom', 'Wave', 'Interactive'], description: 'Sóng xung kích siêu thanh mở rộng sống động khi hover.', defaultText: 'SONIC PULSE', defaultIcon: 'Zap', primary: '#22d3ee', accent: '#a855f7', radius: 14, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-sonic-boom' },
  { id: 'interactive-gravitational-pull-field', name: 'Gravitational Force Field Pull', category: 'micro-interactive', tags: ['Gravitational', 'Pull', 'Field', 'Interactive'], description: 'Trường trọng lực thu hút nhẹ nhàng với hiệu ứng chuyển động mượt.', defaultText: 'GRAVITY PULL', defaultIcon: 'ArrowUpRight', primary: '#6366f1', accent: '#ec4899', radius: 18, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-gravitational-pull' },
  { id: 'playful-marshmallow-puff-pill', name: 'Marshmallow Puff Sweet Pill', category: 'playful-bubbly', tags: ['Marshmallow', 'Puff', 'Sweet', 'Playful'], description: 'Kẹo xốp marshmallow xốp mềm màu tím pastel xinh xắn.', defaultText: 'SWEET PUFF', defaultIcon: 'Smile', primary: '#c084fc', accent: '#7e22ce', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'playful-marshmallow-puff' },
  { id: 'tech-circuit-board-trace-lines', name: 'PCB Circuit Board Green Trace', category: 'tech-outline', tags: ['PCB', 'Circuit', 'Board', 'Tech'], description: 'Mạch in điện tử xanh lá với các đường dẫn vi mạch sắc nét.', defaultText: 'CIRCUIT TRACE', defaultIcon: 'Crosshair', primary: '#34d399', accent: '#059669', radius: 0, soundType: 'cyber', recommendedBg: 'dark', effect: 'tech-circuit-board-trace' },
];

export const v16SignaturePresets = specs.map(createPreset);
