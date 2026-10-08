import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V17Effect =
  | 'cyber-holo-grid-matrix'
  | 'cyber-hyperdrive-warp'
  | 'cyber-lava-core-pulse'
  | 'cyber-bioluminescent-deep'
  | 'skeuo-damascus-steel'
  | 'skeuo-gold-leaf-inlay'
  | 'glass-stained-cathedral'
  | 'glass-origami-fold'
  | 'interactive-kinetic-pendulum'
  | 'interactive-quantum-entanglement'
  | 'retro-synthwave-grid'
  | 'retro-vaporwave-statue'
  | 'neumorphic-clay-soft'
  | 'glass-parallax-depth'
  | 'glass-holographic-foil'
  | 'brutalist-neon-flicker'
  | 'retro-crt-monitor-scan'
  | 'skeuo-brushed-titanium'
  | 'luxury-emerald-prism'
  | 'tech-superconductor-levitation';

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
  effect: V17Effect;
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

function effectCss(effect: V17Effect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'cyber-holo-grid-matrix':
      return `.${cls}{background:#020617;color:${p.primaryColor};border-color:${p.primaryColor};box-shadow:inset 0 0 15px ${p.primaryColor}33,0 0 22px ${p.primaryColor}44;}.${cls}:hover{background:${p.primaryColor};color:#020617;box-shadow:0 0 35px ${p.primaryColor}aa,0 0 60px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'cyber-hyperdrive-warp':
      return `.${cls}{background:linear-gradient(135deg,#030712,${p.primaryColor}33,#030712);color:#fff;border-color:${p.accentColor};box-shadow:0 0 20px ${p.accentColor}55;}.${cls}:hover{border-color:#fff;box-shadow:0 0 40px ${p.accentColor}aa;transform:scale(1.03);}`;
    case 'cyber-lava-core-pulse':
      return `.${cls}{background:linear-gradient(180deg,#7f1d1d,#450a0a);color:#fca5a5;border-color:#ef4444;box-shadow:inset 0 2px 0 #f87171,0 0 25px #ef444466;}.${cls}:hover{color:#fff;box-shadow:0 0 45px #ef4444bb;transform:translateY(-2px);}`;
    case 'cyber-bioluminescent-deep':
      return `.${cls}{background:#042f2e;color:#5eead4;border-color:#14b8a6;box-shadow:inset 0 0 12px #14b8a644,0 0 20px #14b8a655;}.${cls}:hover{background:#14b8a6;color:#042f2e;box-shadow:0 0 35px #14b8a6aa;transform:translateY(-2px);}`;
    case 'skeuo-damascus-steel':
      return `.${cls}{background:repeating-radial-gradient(circle at 50% 50%,#27272a,#27272a 3px,#18181b 3px,#18181b 6px);color:#e4e4e7;border-color:#09090b;box-shadow:inset 0 2px 0 #52525b,0 6px 0 #09090b,0 10px 20px rgba(0,0,0,.5);}.${cls}:hover{filter:brightness(1.2);transform:translateY(-2px);}`;
    case 'skeuo-gold-leaf-inlay':
      return `.${cls}{background:linear-gradient(135deg,#78350f,#451a03);color:#fef08a;border-color:#eab308;box-shadow:inset 0 2px 0 #fde047,0 6px 0 #451a03,0 10px 22px rgba(0,0,0,.4);text-shadow:0 1px 2px #000;}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'glass-stained-cathedral':
      return `.${cls}{background:linear-gradient(135deg,rgba(239,68,68,.3),rgba(59,130,246,.3),rgba(168,85,247,.3));backdrop-filter:blur(18px);border-color:rgba(255,255,255,.6);box-shadow:0 10px 30px rgba(0,0,0,.3);}.${cls}:hover{border-color:#fff;box-shadow:0 15px 40px ${p.primaryColor}77;transform:translateY(-3px);}`;
    case 'glass-origami-fold':
      return `.${cls}{background:linear-gradient(120deg,rgba(255,255,255,.25),rgba(255,255,255,.05));backdrop-filter:blur(14px);border-color:rgba(255,255,255,.5);box-shadow:inset 0 0 15px rgba(255,255,255,.3),0 8px 25px rgba(0,0,0,.2);}.${cls}:hover{background:rgba(255,255,255,.3);transform:translateY(-2px);}`;
    case 'interactive-kinetic-pendulum':
      return `.${cls}{background:#0f172a;color:#f8fafc;border-color:${p.primaryColor};box-shadow:0 8px 20px ${p.primaryColor}44;}.${cls}:hover{transform:translateY(-4px) rotate(1deg);box-shadow:0 14px 32px ${p.primaryColor}88;}`;
    case 'interactive-quantum-entanglement':
      return `.${cls}{background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});color:#fff;border-color:rgba(255,255,255,.4);box-shadow:0 8px 25px ${p.primaryColor}66;}.${cls}:hover{transform:scale(1.04);box-shadow:0 16px 40px ${p.accentColor}aa;}`;
    case 'retro-synthwave-grid':
      return `.${cls}{background:linear-gradient(180deg,#312e81,#1e1b4b);color:#f472b6;border-color:#ec4899;box-shadow:0 0 20px #ec489966,inset 0 -10px 15px #f43f5e33;font-family:sans-serif;}.${cls}:hover{color:#fff;box-shadow:0 0 35px #ec4899bb;transform:translateY(-2px);}`;
    case 'retro-vaporwave-statue':
      return `.${cls}{background:linear-gradient(135deg,#f472b6,#38bdf8);color:#0f172a;border-color:#fff;box-shadow:0 8px 22px rgba(244,114,182,.4);font-weight:900;}.${cls}:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 12px 30px rgba(56,189,248,.6);}`;
    case 'neumorphic-clay-soft':
      return `.${cls}{background:#f472b6;color:#fff;border-color:transparent;box-shadow:8px 8px 18px #be185d,-8px -8px 18px #fbcfe8;}.${cls}:hover{transform:translateY(-2px);box-shadow:12px 12px 24px #be185d,-12px -12px 24px #fbcfe8;}`;
    case 'glass-parallax-depth':
      return `.${cls}{background:rgba(15,23,42,.6);backdrop-filter:blur(20px);border-color:rgba(255,255,255,.3);box-shadow:0 20px 40px rgba(0,0,0,.5);}.${cls}:hover{border-color:rgba(255,255,255,.8);box-shadow:0 28px 55px rgba(0,0,0,.6);transform:translateY(-4px);}`;
    case 'glass-holographic-foil':
      return `.${cls}{background:linear-gradient(115deg,rgba(255,255,255,.2),rgba(56,189,248,.3),rgba(236,72,153,.3),rgba(253,224,71,.3));backdrop-filter:blur(12px);border-color:rgba(255,255,255,.8);box-shadow:0 10px 30px rgba(0,0,0,.25);}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'brutalist-neon-flicker':
      return `.${cls}{background:#000;color:#facc15;border-color:#facc15;border-width:3px;box-shadow:5px 5px 0 #facc15;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:#facc15;color:#000;box-shadow:8px 8px 0 #fff;transform:translate(-2px,-2px);}`;
    case 'retro-crt-monitor-scan':
      return `.${cls}{background:#052e16;color:#4ade80;border-color:#22c55e;border-width:2px;font-family:monospace;box-shadow:0 0 15px #22c55e44;}.${cls}:hover{background:#22c55e;color:#052e16;box-shadow:0 0 30px #22c55ebb;transform:scale(1.02);}`;
    case 'skeuo-brushed-titanium':
      return `.${cls}{background:linear-gradient(180deg,#475569,#334155);color:#f1f5f9;border-color:#1e293b;box-shadow:inset 0 1px 0 #94a3b8,0 6px 0 #0f172a,0 10px 20px rgba(0,0,0,.4);}.${cls}:hover{filter:brightness(1.1);transform:translateY(-2px);}`;
    case 'luxury-emerald-prism':
      return `.${cls}{background:linear-gradient(135deg,#064e3b,#022c22);color:#a7f3d0;border-color:#34d399;box-shadow:inset 0 0 12px #34d39944,0 8px 22px rgba(0,0,0,.5);font-family:serif;letter-spacing:.14em;}.${cls}:hover{color:#fff;border-color:#a7f3d0;box-shadow:0 0 32px #34d39988;transform:translateY(-2px);}`;
    case 'tech-superconductor-levitation':
      return `.${cls}{background:#020617;color:#818cf8;border-color:#6366f1;border-width:2px;box-shadow:0 0 20px #6366f155;}.${cls}:hover{background:#6366f1;color:#fff;box-shadow:0 0 40px #6366f1aa;transform:translateY(-3px);}`;
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
    case 'cyber-holo-grid-matrix':
      return { ...base, color: isHovered ? '#020617' : p.primaryColor, background: isHovered ? p.primaryColor : '#020617', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 35 : 22}px ${p.primaryColor}${isHovered ? 'aa' : '44'}`, transform: hoverLift };
    case 'cyber-hyperdrive-warp':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#030712,${p.primaryColor}33,#030712)`, borderColor: isHovered ? '#fff' : p.accentColor, boxShadow: `0 0 ${isHovered ? 40 : 20}px ${p.accentColor}${isHovered ? 'aa' : '55'}`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'cyber-lava-core-pulse':
      return { ...base, color: isHovered ? '#fff' : '#fca5a5', background: 'linear-gradient(180deg,#7f1d1d,#450a0a)', borderColor: '#ef4444', boxShadow: `0 0 ${isHovered ? 45 : 25}px #ef4444${isHovered ? 'bb' : '66'}`, transform: hoverLift };
    case 'cyber-bioluminescent-deep':
      return { ...base, color: isHovered ? '#042f2e' : '#5eead4', background: isHovered ? '#14b8a6' : '#042f2e', borderColor: '#14b8a6', boxShadow: `0 0 ${isHovered ? 35 : 20}px #14b8a6${isHovered ? 'aa' : '55'}`, transform: hoverLift };
    case 'skeuo-damascus-steel':
      return { ...base, color: '#e4e4e7', background: 'repeating-radial-gradient(circle at 50% 50%,#27272a,#27272a 3px,#18181b 3px,#18181b 6px)', borderColor: '#09090b', boxShadow: 'inset 0 2px 0 #52525b,0 6px 0 #09090b,0 10px 20px rgba(0,0,0,.5)', filter: isHovered ? 'brightness(1.2)' : undefined, transform: hoverLift };
    case 'skeuo-gold-leaf-inlay':
      return { ...base, color: '#fef08a', background: 'linear-gradient(135deg,#78350f,#451a03)', borderColor: '#eab308', boxShadow: 'inset 0 2px 0 #fde047,0 6px 0 #451a03,0 10px 22px rgba(0,0,0,.4)', textShadow: '0 1px 2px #000', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'glass-stained-cathedral':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,rgba(239,68,68,.3),rgba(59,130,246,.3),rgba(168,85,247,.3))', backdropFilter: 'blur(18px)', borderColor: isHovered ? '#fff' : 'rgba(255,255,255,.6)', boxShadow: isHovered ? `0 15px 40px ${p.primaryColor}77` : '0 10px 30px rgba(0,0,0,.3)', transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'glass-origami-fold':
      return { ...base, color: '#fff', background: isHovered ? 'rgba(255,255,255,.3)' : 'linear-gradient(120deg,rgba(255,255,255,.25),rgba(255,255,255,.05))', backdropFilter: 'blur(14px)', borderColor: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 0 15px rgba(255,255,255,.3),0 8px 25px rgba(0,0,0,.2)', transform: hoverLift };
    case 'interactive-kinetic-pendulum':
      return { ...base, color: '#f8fafc', background: '#0f172a', borderColor: p.primaryColor, boxShadow: `0 ${isHovered ? 14 : 8}px ${isHovered ? 32 : 20}px ${p.primaryColor}${isHovered ? '88' : '44'}`, transform: isHovered && !isActive ? 'translateY(-4px) rotate(1deg)' : base.transform };
    case 'interactive-quantum-entanglement':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.4)', boxShadow: `0 ${isHovered ? 16 : 8}px ${isHovered ? 40 : 25}px ${isHovered ? p.accentColor : p.primaryColor}${isHovered ? 'aa' : '66'}`, transform: isHovered && !isActive ? 'scale(1.04)' : base.transform };
    case 'retro-synthwave-grid':
      return { ...base, color: isHovered ? '#fff' : '#f472b6', background: 'linear-gradient(180deg,#312e81,#1e1b4b)', borderColor: '#ec4899', boxShadow: `0 0 ${isHovered ? 35 : 20}px #ec4899${isHovered ? 'bb' : '66'},inset 0 -10px 15px #f43f5e33`, transform: hoverLift };
    case 'retro-vaporwave-statue':
      return { ...base, color: '#0f172a', background: 'linear-gradient(135deg,#f472b6,#38bdf8)', borderColor: '#fff', fontWeight: 900, boxShadow: isHovered ? '0 12px 30px rgba(56,189,248,.6)' : '0 8px 22px rgba(244,114,182,.4)', transform: isHovered && !isActive ? 'translateY(-2px) scale(1.02)' : base.transform };
    case 'neumorphic-clay-soft':
      return { ...base, color: '#fff', background: '#f472b6', borderColor: 'transparent', boxShadow: isHovered ? '12px 12px 24px #be185d,-12px -12px 24px #fbcfe8' : '8px 8px 18px #be185d,-8px -8px 18px #fbcfe8', transform: hoverLift };
    case 'glass-parallax-depth':
      return { ...base, color: '#fff', background: 'rgba(15,23,42,.6)', backdropFilter: 'blur(20px)', borderColor: isHovered ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.3)', boxShadow: isHovered ? '0 28px 55px rgba(0,0,0,.6)' : '0 20px 40px rgba(0,0,0,.5)', transform: isHovered && !isActive ? 'translateY(-4px)' : base.transform };
    case 'glass-holographic-foil':
      return { ...base, color: '#fff', background: 'linear-gradient(115deg,rgba(255,255,255,.2),rgba(56,189,248,.3),rgba(236,72,153,.3),rgba(253,224,71,.3))', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,.8)', boxShadow: '0 10px 30px rgba(0,0,0,.25)', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'brutalist-neon-flicker':
      return { ...base, color: isHovered ? '#000' : '#facc15', background: isHovered ? '#facc15' : '#000', borderColor: '#facc15', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: isHovered ? '8px 8px 0 #fff' : '5px 5px 0 #facc15', transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'retro-crt-monitor-scan':
      return { ...base, color: isHovered ? '#052e16' : '#4ade80', background: isHovered ? '#22c55e' : '#052e16', borderColor: '#22c55e', borderWidth: Math.max(2, p.borderWidth), fontFamily: 'monospace', boxShadow: `0 0 ${isHovered ? 30 : 15}px #22c55e${isHovered ? 'bb' : '44'}`, transform: isHovered && !isActive ? 'scale(1.02)' : base.transform };
    case 'skeuo-brushed-titanium':
      return { ...base, color: '#f1f5f9', background: 'linear-gradient(180deg,#475569,#334155)', borderColor: '#1e293b', boxShadow: 'inset 0 1px 0 #94a3b8,0 6px 0 #0f172a,0 10px 20px rgba(0,0,0,.4)', filter: isHovered ? 'brightness(1.1)' : undefined, transform: hoverLift };
    case 'luxury-emerald-prism':
      return { ...base, color: isHovered ? '#fff' : '#a7f3d0', background: 'linear-gradient(135deg,#064e3b,#022c22)', borderColor: isHovered ? '#a7f3d0' : '#34d399', fontFamily: 'serif', letterSpacing: '.14em', boxShadow: isHovered ? '0 0 32px #34d39988' : 'inset 0 0 12px #34d39944,0 8px 22px rgba(0,0,0,.5)', transform: hoverLift };
    case 'tech-superconductor-levitation':
      return { ...base, color: isHovered ? '#fff' : '#818cf8', background: isHovered ? '#6366f1' : '#020617', borderColor: '#6366f1', borderWidth: Math.max(2, p.borderWidth), boxShadow: `0 0 ${isHovered ? 40 : 20}px #6366f1${isHovered ? 'aa' : '55'}`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
  }
}

function decoration(effect: V17Effect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'cyber-holo-grid-matrix':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.35 : 0.15, background: `repeating-linear-gradient(0deg,transparent 0 8px,${p.primaryColor} 9px 10px)` }} />;
    case 'cyber-hyperdrive-warp':
      return <span style={{ ...common, inset: 0, opacity: 0.3, background: 'radial-gradient(circle at 50% 50%,#fff 1px,transparent 2px)', backgroundSize: '12px 12px' }} />;
    case 'cyber-lava-core-pulse':
      return <span style={{ ...common, width: 80, height: 80, left: '30%', top: -20, borderRadius: '50%', background: '#f87171', filter: 'blur(18px)', opacity: 0.6 }} />;
    case 'cyber-bioluminescent-deep':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', right: 12, top: 10, background: '#5eead4', boxShadow: '0 0 10px #5eead4' }} />;
    case 'skeuo-damascus-steel':
      return <span style={{ ...common, inset: 4, border: '1px solid #52525b55', borderRadius: Math.max(2, p.radius - 4) }} />;
    case 'skeuo-gold-leaf-inlay':
      return <span style={{ ...common, width: 8, height: 8, right: 8, top: 8, borderRight: '2px solid #fde047', borderTop: '2px solid #fde047' }} />;
    case 'glass-stained-cathedral':
      return <span style={{ ...common, inset: 0, opacity: 0.2, background: 'repeating-linear-gradient(45deg,#fff,#fff 10px,transparent 10px,transparent 20px)' }} />;
    case 'glass-origami-fold':
      return <span style={{ ...common, width: 40, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent)', transform: 'rotate(25deg)', transition: 'left .5s ease' }} />;
    case 'interactive-kinetic-pendulum':
      return <span style={{ ...common, left: 10, bottom: 4, width: 12, height: 2, background: p.primaryColor }} />;
    case 'interactive-quantum-entanglement':
      return <span style={{ ...common, width: 6, height: 6, borderRadius: '50%', right: 10, top: 8, background: '#fff', boxShadow: '0 0 8px #fff' }} />;
    case 'retro-synthwave-grid':
      return <span style={{ ...common, inset: 0, opacity: 0.25, background: 'repeating-linear-gradient(0deg,#ec4899 0 1px,transparent 1px 8px)' }} />;
    case 'retro-vaporwave-statue':
      return <span style={{ ...common, right: 8, bottom: 4, fontSize: 9, fontFamily: 'serif', color: '#0f172a' }}>AESTHETIC</span>;
    case 'neumorphic-clay-soft':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', left: 10, top: 8, background: 'rgba(255,255,255,.6)', filter: 'blur(2px)' }} />;
    case 'glass-parallax-depth':
      return <span style={{ ...common, inset: 4, border: '1px solid rgba(255,255,255,.25)', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'glass-holographic-foil':
      return <span style={{ ...common, width: 50, height: '200%', top: '-50%', left: isHovered ? '80%' : '-30%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)', transform: 'rotate(30deg)', transition: 'left .4s ease' }} />;
    case 'brutalist-neon-flicker':
      return <span style={{ ...common, right: 6, top: 4, fontSize: 8, fontFamily: 'monospace', color: isHovered ? '#000' : '#facc15' }}>ON</span>;
    case 'retro-crt-monitor-scan':
      return <span style={{ ...common, inset: 0, opacity: 0.2, background: 'repeating-linear-gradient(0deg,#000 0 2px,transparent 2px 4px)' }} />;
    case 'skeuo-brushed-titanium':
      return <span style={{ ...common, width: 6, height: 6, borderRadius: '50%', left: 8, top: 8, background: '#1e293b', boxShadow: 'inset 0 1px 1px #94a3b8' }} />;
    case 'luxury-emerald-prism':
      return <span style={{ ...common, inset: 4, border: '1px solid #34d39944', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'tech-superconductor-levitation':
      return <span style={{ ...common, inset: -4, borderRadius: Math.max(0, p.radius + 4), border: '1px dashed #6366f188', opacity: isHovered ? 1 : 0.4 }} />;
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
  { id: 'cyber-holo-grid-matrix-node', name: 'Cyber Holo Grid Matrix', category: 'cyberpunk', tags: ['Holo', 'Grid', 'Matrix', 'Cyber'], description: 'Ma trận hologram kỹ thuật số phát sáng với lưới ma trận chìm.', defaultText: 'HOLO MATRIX', defaultIcon: 'Terminal', primary: '#06b6d4', accent: '#a855f7', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-holo-grid-matrix' },
  { id: 'cyber-hyperdrive-warp-star', name: 'Hyperdrive Warp Speed', category: 'cyberpunk', tags: ['Hyperdrive', 'Warp', 'Speed', 'Space'], description: 'Dải ngân hà nhảy vọt vận tốc ánh sáng với sao băng lấp lánh.', defaultText: 'WARP SPEED', defaultIcon: 'Zap', primary: '#3b82f6', accent: '#ec4899', radius: 10, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-hyperdrive-warp' },
  { id: 'cyber-lava-core-pulse-red', name: 'Volcanic Lava Core Pulse', category: 'cyberpunk', tags: ['Lava', 'Volcanic', 'Pulse', 'Red'], description: 'Lõi dung nham núi lửa nóng chảy phập phồng năng lượng nhiệt.', defaultText: 'LAVA CORE', defaultIcon: 'Flame', primary: '#ef4444', accent: '#f97316', radius: 8, soundType: 'mechanical', recommendedBg: 'dark', effect: 'cyber-lava-core-pulse' },
  { id: 'cyber-bioluminescent-deep-teal', name: 'Bioluminescent Deep Sea Teal', category: 'cyberpunk', tags: ['Bioluminescent', 'Deep', 'Teal', 'Sea'], description: 'Sinh vật biển sâu phát quang màu xanh ngọc ảo diệu dưới đại dương.', defaultText: 'DEEP GLOW', defaultIcon: 'Sparkles', primary: '#14b8a6', accent: '#0d9488', radius: 14, soundType: 'glass', recommendedBg: 'dark', effect: 'cyber-bioluminescent-deep' },
  { id: 'skeuo-damascus-steel-pattern', name: 'Damascus Pattern Welded Steel', category: 'skeuomorphic-3d', tags: ['Damascus', 'Steel', 'Welded', 'Metal'], description: 'Thép Damascus rèn thủ công với vân kim loại xoắn ốc tinh xảo.', defaultText: 'DAMASCUS STEEL', defaultIcon: 'Shield', primary: '#3f3f46', accent: '#18181b', radius: 6, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-damascus-steel' },
  { id: 'skeuo-gold-leaf-inlay-craft', name: 'Gold Leaf Inlay Crafting', category: 'skeuomorphic-3d', tags: ['Gold', 'Leaf', 'Inlay', 'Craft'], description: 'Sơn mài đính dát vàng hoàng gia lấp lánh sang trọng.', defaultText: 'GOLD INLAY', defaultIcon: 'Crown', primary: '#eab308', accent: '#78350f', radius: 8, soundType: 'crisp', recommendedBg: 'dark', effect: 'skeuo-gold-leaf-inlay' },
  { id: 'glass-stained-cathedral-window', name: 'Stained Glass Cathedral Window', category: 'glass', tags: ['Stained', 'Glass', 'Cathedral', 'Window'], description: 'Kính màu nhà thờ cổ kính phản chiếu đa sắc qua từng mảng màu.', defaultText: 'CATHEDRAL GLASS', defaultIcon: 'Sparkles', primary: '#a855f7', accent: '#ef4444', radius: 18, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-stained-cathedral' },
  { id: 'glass-origami-fold-prism', name: 'Origami Paper Fold Prism', category: 'glass', tags: ['Origami', 'Paper', 'Fold', 'Prism'], description: 'Gấp giấy Origami mờ phản chiếu các mặt cắt hình học độc đáo.', defaultText: 'ORIGAMI PRISM', defaultIcon: 'Layers', primary: '#38bdf8', accent: '#818cf8', radius: 12, soundType: 'glass', recommendedBg: 'dark-primary', effect: 'glass-origami-fold' },
  { id: 'interactive-kinetic-pendulum-swing', name: 'Kinetic Pendulum Motion Swing', category: 'micro-interactive', tags: ['Kinetic', 'Pendulum', 'Swing', 'Motion'], description: 'Con lắc động lực học đung đưa nghiêng nhẹ theo cử động chuột.', defaultText: 'KINETIC SWING', defaultIcon: 'RefreshCw', primary: '#38bdf8', accent: '#6366f1', radius: 12, soundType: 'pop', recommendedBg: 'dark', effect: 'interactive-kinetic-pendulum' },
  { id: 'interactive-quantum-entanglement-field', name: 'Quantum Entanglement Field Pair', category: 'micro-interactive', tags: ['Quantum', 'Entanglement', 'Field', 'Pair'], description: 'Cặp hạt rối lượng tử liên kết chặt chẽ phản hồi siêu tốc.', defaultText: 'ENTANGLE FIELD', defaultIcon: 'Cpu', primary: '#ec4899', accent: '#8b5cf6', radius: 20, soundType: 'cyber', recommendedBg: 'dark', effect: 'interactive-quantum-entanglement' },
  { id: 'retro-synthwave-grid-sun', name: 'Synthwave 80s Sunset Grid', category: 'retro-pixel', tags: ['Synthwave', '80s', 'Sunset', 'Grid'], description: 'Đường chân trời thập niên 80 Synthwave rực sắc tím hồng.', defaultText: 'SYNTHWAVE 80S', defaultIcon: 'Sun', primary: '#ec4899', accent: '#f43f5e', radius: 6, soundType: 'retro', recommendedBg: 'dark', effect: 'retro-synthwave-grid' },
  { id: 'retro-vaporwave-statue-pink', name: 'Vaporwave Pastel Marble Aesthetic', category: 'retro-pixel', tags: ['Vaporwave', 'Pastel', 'Marble', 'Aesthetic'], description: 'Thẩm mỹ Vaporwave pastel đĩnh đạc mang hoài niệm thập niên 90.', defaultText: 'VAPORWAVE 90S', defaultIcon: 'Smile', primary: '#f472b6', accent: '#38bdf8', radius: 16, soundType: 'retro', recommendedBg: 'light', effect: 'retro-vaporwave-statue' },
  { id: 'neumorphic-clay-soft-dough', name: 'Claymorphism Soft Molded Dough', category: 'neumorphic', tags: ['Claymorphism', 'Soft', 'Molded', 'Dough'], description: 'Đất nặn Claymorphic màu hồng mềm mại đầy ấn tượng.', defaultText: 'CLAY SOFT', defaultIcon: 'Smile', primary: '#f472b6', accent: '#be185d', radius: 24, soundType: 'pop', recommendedBg: 'light', effect: 'neumorphic-clay-soft' },
  { id: 'glass-parallax-depth-3d', name: '3D Parallax Layered Glass Depth', category: 'glass', tags: ['Parallax', '3D', 'Depth', 'Layered'], description: 'Nút kính đa tầng Parallax có độ sâu không gian rõ rệt.', defaultText: 'PARALLAX 3D', defaultIcon: 'Layers', primary: '#60a5fa', accent: '#1e3a8a', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-parallax-depth' },
  { id: 'glass-holographic-foil-iridescent', name: 'Iridescent Holographic Foil Glare', category: 'glass', tags: ['Holographic', 'Foil', 'Iridescent', 'Glare'], description: 'Màng Hologram bẩy sắc cầu vồng phản quang rực rỡ.', defaultText: 'HOLO FOIL', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#ec4899', radius: 20, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-holographic-foil' },
  { id: 'brutalist-neon-flicker-tube', name: 'Flashing Neon Sign Tube Yellow', category: 'brutalist', tags: ['Neon', 'Flashing', 'Sign', 'Tube'], description: 'Đèn Neon thô nhấp nháy màu vàng rực rỡ phong cách xưởng phố.', defaultText: 'NEON FLICKER', defaultIcon: 'Zap', primary: '#facc15', accent: '#000000', radius: 0, soundType: 'crisp', recommendedBg: 'dark', effect: 'brutalist-neon-flicker' },
  { id: 'retro-crt-monitor-scanline', name: 'Retro CRT Cathode Ray Scanline', category: 'retro-pixel', tags: ['CRT', 'Monitor', 'Scanline', 'Retro'], description: 'Màn hình máy tính mạ quét CRT xanh lá hoài cổ.', defaultText: 'CRT TERMINAL', defaultIcon: 'Terminal', primary: '#22c55e', accent: '#052e16', radius: 4, soundType: 'retro', recommendedBg: 'dark', effect: 'retro-crt-monitor-scan' },
  { id: 'skeuo-brushed-titanium-plate', name: 'Aerospace Titanium Matte Plate', category: 'skeuomorphic-3d', tags: ['Titanium', 'Aerospace', 'Matte', 'Plate'], description: 'Titanium hàng không vũ trụ màu xám kim mờ cực kỳ cứng cáp.', defaultText: 'TITANIUM MATTE', defaultIcon: 'Shield', primary: '#475569', accent: '#1e293b', radius: 8, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-brushed-titanium' },
  { id: 'luxury-emerald-prism-cut', name: 'Royal Emerald Gemstone Facet', category: 'luxury-minimal', tags: ['Emerald', 'Gemstone', 'Facet', 'Royal'], description: 'Ngọc lục bảo quý hiếm cắt gọt góc cạnh quý phái đỉnh cao.', defaultText: 'EMERALD PRISM', defaultIcon: 'Star', primary: '#34d399', accent: '#064e3b', radius: 4, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-emerald-prism' },
  { id: 'tech-superconductor-levitation-ring', name: 'Superconductor Quantum Levitation', category: 'tech-outline', tags: ['Superconductor', 'Levitation', 'Quantum', 'Tech'], description: 'Vòng siêu dẫn chậm bay lơ lửng điều khiển bằng từ trường.', defaultText: 'SUPERCONDUCTOR', defaultIcon: 'Crosshair', primary: '#6366f1', accent: '#818cf8', radius: 12, soundType: 'cyber', recommendedBg: 'dark', effect: 'tech-superconductor-levitation' },
];

export const v17SignaturePresets = specs.map(createPreset);
