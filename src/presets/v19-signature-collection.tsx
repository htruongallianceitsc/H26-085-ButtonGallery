import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V19Effect =
  | 'cyber-celestial-aurora-pulse'
  | 'cyber-quantum-singularity'
  | 'cyber-samurai-katana-blade'
  | 'glass-frosted-diamond-ice'
  | 'glass-prismatic-iridescent-halo'
  | 'skeuo-brushed-bronze-plate'
  | 'skeuo-carbon-matrix-shield'
  | 'brutalist-neon-graffiti-tag'
  | 'brutalist-poster-punk-cutout'
  | 'neumorphic-silk-pearl-concave'
  | 'aurora-solar-eclipse-flare'
  | 'luxury-molten-obsidian-gold'
  | 'luxury-sapphire-jewel-crown'
  | 'retro-synth-arcade-vector'
  | 'retro-pinball-launcher-bumper'
  | 'interactive-sonic-shockwave-ring'
  | 'interactive-hyper-gravity-pull'
  | 'playful-cotton-candy-puff'
  | 'tech-pcb-copper-trace'
  | 'tech-golden-filament-frame';

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
  effect: V19Effect;
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

function effectCss(effect: V19Effect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'cyber-celestial-aurora-pulse':
      return `.${cls}{background:#020617;color:${p.primaryColor};border-color:${p.primaryColor};box-shadow:inset 0 0 16px ${p.primaryColor}44,0 0 22px ${p.primaryColor}55;}.${cls}:hover{background:${p.primaryColor};color:#020617;box-shadow:0 0 38px ${p.primaryColor}aa,0 0 65px ${p.accentColor}77;transform:translateY(-2px);}`;
    case 'cyber-quantum-singularity':
      return `.${cls}{background:#030712;color:#f0f9ff;border-color:${p.accentColor};box-shadow:0 0 18px ${p.accentColor}55;}.${cls}:hover{border-color:${p.primaryColor};box-shadow:0 0 32px ${p.primaryColor}bb;transform:scale(1.03);}`;
    case 'cyber-samurai-katana-blade':
      return `.${cls}{background:#09090b;color:#ef4444;border-color:#ef4444;box-shadow:0 0 16px #ef444455;}.${cls}:hover{background:#ef4444;color:#fff;box-shadow:0 0 32px #ef4444aa;transform:translateY(-2px);}`;
    case 'glass-frosted-diamond-ice':
      return `.${cls}{background:rgba(255,255,255,.22);backdrop-filter:blur(22px) saturate(200%);border-color:rgba(255,255,255,.8);box-shadow:inset 0 1px 2px #fff,0 12px 32px rgba(0,0,0,.25);}.${cls}:hover{background:rgba(255,255,255,.32);box-shadow:inset 0 1px 2px #fff,0 16px 42px ${p.primaryColor}77;transform:translateY(-3px);}`;
    case 'glass-prismatic-iridescent-halo':
      return `.${cls}{background:linear-gradient(135deg,rgba(255,255,255,.15),${p.primaryColor}33);backdrop-filter:blur(18px);border-color:rgba(255,255,255,.5);box-shadow:0 8px 25px ${p.accentColor}55;}.${cls}:hover{border-color:#fff;box-shadow:0 12px 38px ${p.primaryColor}88;transform:translateY(-2px);}`;
    case 'skeuo-brushed-bronze-plate':
      return `.${cls}{background:linear-gradient(180deg,#92400e,#451a03);color:#fef3c7;border-color:#292524;box-shadow:inset 0 2px 0 #b45309,0 6px 0 #1c1917,0 10px 20px rgba(0,0,0,.45);}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'skeuo-carbon-matrix-shield':
      return `.${cls}{background:repeating-linear-gradient(45deg,#18181b,#18181b 4px,#27272a 4px,#27272a 8px);color:#f4f4f5;border-color:#09090b;box-shadow:inset 0 2px 0 #3f3f46,0 6px 0 #09090b,0 10px 20px rgba(0,0,0,.5);}.${cls}:hover{filter:brightness(1.2);transform:translateY(-2px);}`;
    case 'brutalist-neon-graffiti-tag':
      return `.${cls}{background:#ec4899;color:#fff;border-color:#000;border-width:3px;box-shadow:6px 6px 0 #000;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:${p.primaryColor};transform:translate(-3px,-3px);box-shadow:9px 9px 0 #000;}`;
    case 'brutalist-poster-punk-cutout':
      return `.${cls}{background:#facc15;color:#000;border-color:#000;border-width:3px;box-shadow:6px 6px 0 ${p.accentColor};font-weight:900;text-transform:uppercase;}.${cls}:hover{background:${p.primaryColor};color:#fff;transform:translate(-2px,-2px);box-shadow:9px 9px 0 ${p.accentColor};}`;
    case 'neumorphic-silk-pearl-concave':
      return `.${cls}{background:linear-gradient(145deg,#f8fafc,#e2e8f0);color:#0f172a;border-color:rgba(255,255,255,.9);box-shadow:6px 6px 14px #cbd5e1,-6px -6px 14px #ffffff;}.${cls}:hover{box-shadow:9px 9px 20px #cbd5e1,-9px -9px 20px #ffffff;transform:translateY(-2px);}`;
    case 'aurora-solar-eclipse-flare':
      return `.${cls}{background:linear-gradient(135deg,#020617,#1e1b4b,#020617);color:#fff;border-color:${p.primaryColor};box-shadow:0 0 24px ${p.primaryColor}88,0 0 48px ${p.accentColor}55;}.${cls}:hover{box-shadow:0 0 40px ${p.primaryColor},0 0 70px ${p.accentColor}88;transform:translateY(-2px);}`;
    case 'luxury-molten-obsidian-gold':
      return `.${cls}{background:linear-gradient(135deg,#09090b,#1c1917);color:#fef08a;border-color:#eab308;box-shadow:0 8px 22px rgba(0,0,0,.5),inset 0 1px 0 #fde047;font-family:serif;letter-spacing:.14em;}.${cls}:hover{border-color:#fde047;box-shadow:0 12px 32px #eab30866;transform:translateY(-2px);}`;
    case 'luxury-sapphire-jewel-crown':
      return `.${cls}{background:linear-gradient(180deg,#1e3a8a,#172554);color:#93c5fd;border-color:#3b82f6;box-shadow:inset 0 0 15px #3b82f644,0 8px 22px rgba(0,0,0,.5);font-family:serif;letter-spacing:.15em;}.${cls}:hover{color:#fff;border-color:#93c5fd;box-shadow:0 0 32px #3b82f6bb;transform:translateY(-2px);}`;
    case 'retro-synth-arcade-vector':
      return `.${cls}{background:#020617;color:#38bdf8;border-color:#38bdf8;border-width:2px;box-shadow:0 0 15px #38bdf844;font-family:monospace;}.${cls}:hover{background:#38bdf8;color:#020617;box-shadow:0 0 30px #38bdf899;transform:scale(1.03);}`;
    case 'retro-pinball-launcher-bumper':
      return `.${cls}{background:#e11d48;color:#fff;border-color:#fda4af;box-shadow:inset 0 3px 0 #fecdd3,inset 0 -4px 0 #881337,0 8px 0 #881337,0 12px 20px rgba(0,0,0,.4);text-shadow:0 2px 2px #881337;}.${cls}:hover{background:#f43f5e;transform:translateY(-2px);}`;
    case 'interactive-sonic-shockwave-ring':
      return `.${cls}{background:#020617;color:#fff;border-color:${p.primaryColor};box-shadow:0 0 16px ${p.primaryColor}66;}.${cls}:hover{box-shadow:0 0 32px ${p.primaryColor}bb,0 0 55px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'interactive-hyper-gravity-pull':
      return `.${cls}{background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 10px 25px ${p.primaryColor}66;}.${cls}:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 18px 42px ${p.primaryColor}99;}`;
    case 'playful-cotton-candy-puff':
      return `.${cls}{background:#f472b6;color:#fff;border-color:#fbcfe8;box-shadow:0 8px 0 #be185d,0 12px 20px rgba(0,0,0,.2);}.${cls}:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 10px 0 #be185d,0 16px 28px #f472b688;}`;
    case 'tech-pcb-copper-trace':
      return `.${cls}{background:#064e3b;color:#6ee7b7;border-color:#34d399;border-width:1px;font-family:monospace;text-transform:uppercase;box-shadow:0 0 15px #34d39944;}.${cls}:hover{background:#047857;color:#fff;box-shadow:0 0 28px #34d39988;transform:translateY(-2px);}`;
    case 'tech-golden-filament-frame':
      return `.${cls}{background:#09090b;color:#facc15;border-color:#eab308;border-width:1px;font-family:monospace;text-transform:uppercase;box-shadow:0 0 15px #eab30844;}.${cls}:hover{background:#eab308;color:#09090b;box-shadow:0 0 28px #eab30888;transform:translateY(-2px);}`;
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
    case 'cyber-celestial-aurora-pulse':
      return { ...base, color: isHovered ? '#020617' : p.primaryColor, background: isHovered ? p.primaryColor : '#020617', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 38 : 22}px ${p.primaryColor}${isHovered ? 'aa' : '55'}`, transform: hoverLift };
    case 'cyber-quantum-singularity':
      return { ...base, color: '#f0f9ff', background: '#030712', borderColor: isHovered ? p.primaryColor : p.accentColor, boxShadow: `0 0 ${isHovered ? 32 : 18}px ${isHovered ? p.primaryColor : p.accentColor}bb`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'cyber-samurai-katana-blade':
      return { ...base, color: isHovered ? '#fff' : '#ef4444', background: isHovered ? '#ef4444' : '#09090b', borderColor: '#ef4444', boxShadow: `0 0 ${isHovered ? 32 : 16}px #ef4444${isHovered ? 'aa' : '55'}`, transform: hoverLift };
    case 'glass-frosted-diamond-ice':
      return { ...base, color: '#fff', background: isHovered ? 'rgba(255,255,255,.32)' : 'rgba(255,255,255,.22)', backdropFilter: 'blur(22px) saturate(200%)', borderColor: 'rgba(255,255,255,.8)', boxShadow: `inset 0 1px 2px #fff, 0 ${isHovered ? 16 : 12}px ${isHovered ? 42 : 32}px ${p.primaryColor}${isHovered ? '77' : '33'}`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'glass-prismatic-iridescent-halo':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,rgba(255,255,255,.15),${p.primaryColor}33)`, backdropFilter: 'blur(18px)', borderColor: isHovered ? '#fff' : 'rgba(255,255,255,.5)', boxShadow: `0 ${isHovered ? 12 : 8}px ${isHovered ? 38 : 25}px ${p.primaryColor}88`, transform: hoverLift };
    case 'skeuo-brushed-bronze-plate':
      return { ...base, color: '#fef3c7', background: 'linear-gradient(180deg,#92400e,#451a03)', borderColor: '#292524', boxShadow: 'inset 0 2px 0 #b45309,0 6px 0 #1c1917,0 10px 20px rgba(0,0,0,.45)', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'skeuo-carbon-matrix-shield':
      return { ...base, color: '#f4f4f5', background: 'repeating-linear-gradient(45deg,#18181b,#18181b 4px,#27272a 4px,#27272a 8px)', borderColor: '#09090b', boxShadow: 'inset 0 2px 0 #3f3f46,0 6px 0 #09090b,0 10px 20px rgba(0,0,0,.5)', filter: isHovered ? 'brightness(1.2)' : undefined, transform: hoverLift };
    case 'brutalist-neon-graffiti-tag':
      return { ...base, color: '#fff', background: isHovered ? p.primaryColor : '#ec4899', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #000`, transform: isHovered && !isActive ? 'translate(-3px,-3px)' : base.transform };
    case 'brutalist-poster-punk-cutout':
      return { ...base, color: isHovered ? '#fff' : '#000', background: isHovered ? p.primaryColor : '#facc15', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 ${p.accentColor}`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'neumorphic-silk-pearl-concave':
      return { ...base, color: '#0f172a', background: 'linear-gradient(145deg,#f8fafc,#e2e8f0)', borderColor: 'rgba(255,255,255,.9)', boxShadow: isHovered ? '9px 9px 20px #cbd5e1,-9px -9px 20px #ffffff' : '6px 6px 14px #cbd5e1,-6px -6px 14px #ffffff', transform: hoverLift };
    case 'aurora-solar-eclipse-flare':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#020617,#1e1b4b,#020617)`, borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 40 : 24}px ${p.primaryColor}, 0 0 ${isHovered ? 70 : 48}px ${p.accentColor}88`, transform: hoverLift };
    case 'luxury-molten-obsidian-gold':
      return { ...base, color: '#fef08a', background: 'linear-gradient(135deg,#09090b,#1c1917)', borderColor: isHovered ? '#fde047' : '#eab308', fontFamily: 'serif', letterSpacing: '.14em', boxShadow: isHovered ? '0 12px 32px #eab30866' : '0 8px 22px rgba(0,0,0,.5)', transform: hoverLift };
    case 'luxury-sapphire-jewel-crown':
      return { ...base, color: isHovered ? '#fff' : '#93c5fd', background: 'linear-gradient(180deg,#1e3a8a,#172554)', borderColor: isHovered ? '#93c5fd' : '#3b82f6', fontFamily: 'serif', letterSpacing: '.15em', boxShadow: `0 0 ${isHovered ? 32 : 15}px #3b82f6bb`, transform: hoverLift };
    case 'retro-synth-arcade-vector':
      return { ...base, color: isHovered ? '#020617' : '#38bdf8', background: isHovered ? '#38bdf8' : '#020617', borderColor: '#38bdf8', borderWidth: Math.max(2, p.borderWidth), fontFamily: 'monospace', boxShadow: `0 0 ${isHovered ? 30 : 15}px #38bdf899`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'retro-pinball-launcher-bumper':
      return { ...base, color: '#fff', background: isHovered ? '#f43f5e' : '#e11d48', borderColor: '#fda4af', boxShadow: 'inset 0 3px 0 #fecdd3,inset 0 -4px 0 #881337,0 8px 0 #881337,0 12px 20px rgba(0,0,0,.4)', textShadow: '0 2px 2px #881337', transform: hoverLift };
    case 'interactive-sonic-shockwave-ring':
      return { ...base, color: '#fff', background: '#020617', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 32 : 16}px ${p.primaryColor}bb, 0 0 ${isHovered ? 55 : 20}px ${p.accentColor}66`, transform: hoverLift };
    case 'interactive-hyper-gravity-pull':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 18 : 10}px ${isHovered ? 42 : 25}px ${p.primaryColor}99`, transform: isHovered && !isActive ? 'translateY(-4px) scale(1.03)' : base.transform };
    case 'playful-cotton-candy-puff':
      return { ...base, color: '#fff', background: '#f472b6', borderColor: '#fbcfe8', boxShadow: `0 ${isHovered ? 10 : 8}px 0 #be185d, 0 ${isHovered ? 16 : 12}px 28px #f472b688`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };
    case 'tech-pcb-copper-trace':
      return { ...base, color: isHovered ? '#fff' : '#6ee7b7', background: isHovered ? '#047857' : '#064e3b', borderColor: '#34d399', fontFamily: 'monospace', textTransform: 'uppercase', boxShadow: `0 0 ${isHovered ? 28 : 15}px #34d39988`, transform: hoverLift };
    case 'tech-golden-filament-frame':
      return { ...base, color: isHovered ? '#09090b' : '#facc15', background: isHovered ? '#eab308' : '#09090b', borderColor: '#eab308', fontFamily: 'monospace', textTransform: 'uppercase', boxShadow: `0 0 ${isHovered ? 28 : 15}px #eab30888`, transform: hoverLift };
  }
}

function decoration(effect: V19Effect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'cyber-celestial-aurora-pulse':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.35 : 0.12, background: `repeating-linear-gradient(90deg,transparent 0 10px,${p.primaryColor} 11px 12px)` }} />;
    case 'cyber-quantum-singularity':
      return <span style={{ ...common, inset: 0, opacity: 0.25, background: `repeating-linear-gradient(0deg,transparent 0 3px,${p.accentColor} 4px 5px)` }} />;
    case 'cyber-samurai-katana-blade':
      return <span style={{ ...common, width: 25, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(239,68,68,.8),transparent)', transform: 'rotate(20deg)', transition: 'left .4s ease' }} />;
    case 'glass-frosted-diamond-ice':
      return <span style={{ ...common, width: 100, height: 35, left: -20, top: -10, borderRadius: '50%', background: 'rgba(255,255,255,.45)', filter: 'blur(9px)' }} />;
    case 'glass-prismatic-iridescent-halo':
      return <span style={{ ...common, width: 38, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent)', transform: 'rotate(22deg)', transition: 'left .5s ease' }} />;
    case 'skeuo-brushed-bronze-plate':
      return <span style={{ ...common, inset: 4, border: '1px solid #b4530955', borderRadius: Math.max(2, p.radius - 4) }} />;
    case 'skeuo-carbon-matrix-shield':
      return <span style={{ ...common, width: 12, height: 12, borderRadius: '50%', right: 8, top: 8, background: '#3f3f46', boxShadow: '0 0 6px #3f3f46' }} />;
    case 'brutalist-neon-graffiti-tag':
      return <span style={{ ...common, right: -2, top: -2, width: 18, height: 18, background: '#facc15', borderLeft: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(45deg)' }} />;
    case 'brutalist-poster-punk-cutout':
      return <span style={{ ...common, inset: 3, border: '1px solid rgba(255,255,255,.35)', pointerEvents: 'none' }} />;
    case 'neumorphic-silk-pearl-concave':
      return <span style={{ ...common, inset: 2, borderRadius: Math.max(0, p.radius - 2), border: '1px solid rgba(255,255,255,.9)' }} />;
    case 'aurora-solar-eclipse-flare':
      return <span style={{ ...common, width: 50, height: 50, right: 10, top: -10, borderRadius: '50%', background: p.accentColor, filter: 'blur(16px)', opacity: 0.5 }} />;
    case 'luxury-molten-obsidian-gold':
      return <span style={{ ...common, width: 8, height: 8, left: 8, top: 8, borderLeft: '2px solid #eab308', borderTop: '2px solid #eab308' }} />;
    case 'luxury-sapphire-jewel-crown':
      return <span style={{ ...common, inset: 4, border: '1px solid #3b82f655', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'retro-synth-arcade-vector':
      return <span style={{ ...common, right: 8, top: 4, fontSize: 9, fontFamily: 'monospace', color: '#38bdf8' }}>HIGH SCORE</span>;
    case 'retro-pinball-launcher-bumper':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', left: 10, top: 10, background: '#fca5a5' }} />;
    case 'interactive-sonic-shockwave-ring':
      return <span style={{ ...common, inset: -4, borderRadius: Math.max(0, p.radius + 4), border: `1px solid ${p.primaryColor}55`, opacity: isHovered ? 1 : 0.3 }} />;
    case 'interactive-hyper-gravity-pull':
      return <span style={{ ...common, width: 60, height: 20, left: 10, top: 2, borderRadius: '50%', background: 'rgba(255,255,255,.35)', filter: 'blur(4px)' }} />;
    case 'playful-cotton-candy-puff':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', right: 10, top: isHovered ? 6 : 8, background: '#fff', boxShadow: '0 0 6px #fff', transition: 'all .2s ease' }} />;
    case 'tech-pcb-copper-trace':
      return (
        <>
          <span style={{ ...common, left: 4, top: 4, width: 6, height: 6, borderLeft: '2px solid #34d399', borderTop: '2px solid #34d399' }} />
          <span style={{ ...common, right: 4, bottom: 4, width: 6, height: 6, borderRight: '2px solid #34d399', borderBottom: '2px solid #34d399' }} />
        </>
      );
    case 'tech-golden-filament-frame':
      return (
        <>
          <span style={{ ...common, left: 4, top: 4, width: 6, height: 6, borderLeft: '2px solid #eab308', borderTop: '2px solid #eab308' }} />
          <span style={{ ...common, right: 4, bottom: 4, width: 6, height: 6, borderRight: '2px solid #eab308', borderBottom: '2px solid #eab308' }} />
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
  { id: 'cyber-celestial-aurora-pulse-gate', name: 'Celestial Aurora Cyber Portal', category: 'cyberpunk', tags: ['Celestial', 'Aurora', 'Portal', 'Cyber'], description: 'Cổng không gian cực quang vũ trụ kỳ ảo phát sáng huyền bí.', defaultText: 'CELESTIAL PORTAL', defaultIcon: 'Terminal', primary: '#22d3ee', accent: '#a855f7', radius: 4, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-celestial-aurora-pulse' },
  { id: 'cyber-quantum-singularity-node', name: 'Quantum Singularity Core Node', category: 'cyberpunk', tags: ['Quantum', 'Singularity', 'Core', 'Node'], description: 'Lõi điểm kỳ dị lượng tử thu hút năng lượng bóng tối.', defaultText: 'SINGULARITY CORE', defaultIcon: 'Cpu', primary: '#06b6d4', accent: '#3b82f6', radius: 8, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-quantum-singularity' },
  { id: 'cyber-samurai-katana-blade-red', name: 'Cyberpunk Samurai Katana Slash', category: 'cyberpunk', tags: ['Samurai', 'Katana', 'Blade', 'Cyber'], description: 'Lưỡi kiếm Katana samurai viễn tưởng chém qua ma trận.', defaultText: 'KATANA SLASH', defaultIcon: 'Zap', primary: '#ef4444', accent: '#38bdf8', radius: 2, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-samurai-katana-blade' },
  { id: 'glass-frosted-diamond-ice-glacier', name: 'Frosted Diamond Ice Crystal', category: 'glass', tags: ['Diamond', 'Ice', 'Frosted', 'Glass'], description: 'Khối kính mờ pha lê kim cương sắc lạnh và trong suốt.', defaultText: 'DIAMOND ICE', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#818cf8', radius: 22, soundType: 'glass', recommendedBg: 'dark-primary', effect: 'glass-frosted-diamond-ice' },
  { id: 'glass-prismatic-iridescent-halo-prism', name: 'Prismatic Iridescent Light Halo', category: 'glass', tags: ['Prismatic', 'Iridescent', 'Halo', 'Glass'], description: 'Vòng hào quang lăng kính tán sắc lấp lánh lung linh.', defaultText: 'IRIDESCENT HALO', defaultIcon: 'Sparkles', primary: '#f472b6', accent: '#38bdf8', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-prismatic-iridescent-halo' },
  { id: 'skeuo-brushed-bronze-plate-craft', name: 'Brushed Antique Bronze Metal', category: 'skeuomorphic-3d', tags: ['Bronze', 'Brushed', 'Antique', 'Metal'], description: 'Tấm đồng cổ phay xước mang đậm phong cách cổ điển 3D.', defaultText: 'BRONZE PRESS', defaultIcon: 'Layers', primary: '#92400e', accent: '#b45309', radius: 8, soundType: 'mechanical', recommendedBg: 'light', effect: 'skeuo-brushed-bronze-plate' },
  { id: 'skeuo-carbon-matrix-shield-race', name: 'Carbon Matrix Composite Shield', category: 'skeuomorphic-3d', tags: ['Carbon', 'Matrix', 'Composite', 'Shield'], description: 'Khiên sợi carbon tổng hợp siêu nhẹ chuyên dụng cho đua xe.', defaultText: 'CARBON MATRIX', defaultIcon: 'Zap', primary: '#27272a', accent: '#3f3f46', radius: 10, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-carbon-matrix-shield' },
  { id: 'brutalist-neon-graffiti-tag-pink', name: 'Neon Pink Graffiti Tag Label', category: 'brutalist', tags: ['Neon', 'Graffiti', 'Pink', 'Brutalist'], description: 'Nghệ thuật xịt sơn graffiti neon hồng cá tính đường phố.', defaultText: 'GRAFFITI TAG', defaultIcon: 'Flame', primary: '#ec4899', accent: '#facc15', radius: 4, soundType: 'pop', recommendedBg: 'light', effect: 'brutalist-neon-graffiti-tag' },
  { id: 'brutalist-poster-punk-cutout-yellow', name: 'Punk Cutout Yellow Poster', category: 'brutalist', tags: ['Punk', 'Poster', 'Cutout', 'Brutalist'], description: 'Áp phích nhạc Punk cắt thủ công góc cạnh nổi bật.', defaultText: 'PUNK POSTER', defaultIcon: 'Shield', primary: '#facc15', accent: '#ec4899', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'brutalist-poster-punk-cutout' },
  { id: 'neumorphic-silk-pearl-concave-soft', name: 'Silk Pearl Soft Concave UI', category: 'neumorphic', tags: ['Silk', 'Pearl', 'Soft', 'Neumorphic'], description: 'Lụa ngọc trai trắng mềm mại với thiết kế chìm tinh tế.', defaultText: 'SILK PEARL', defaultIcon: 'Smile', primary: '#e2e8f0', accent: '#cbd5e1', radius: 20, soundType: 'pop', recommendedBg: 'light', effect: 'neumorphic-silk-pearl-concave' },
  { id: 'aurora-solar-eclipse-flare-corona', name: 'Solar Eclipse Corona Ring', category: 'aurora-gradient', tags: ['Eclipse', 'Solar', 'Corona', 'Aurora'], description: 'Vành nhật hoa nhật thực huyền bí tỏa hào quang đen rực sáng.', defaultText: 'ECLIPSE FLARE', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#a855f7', radius: 24, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-solar-eclipse-flare' },
  { id: 'luxury-molten-obsidian-gold-seal', name: 'Molten Obsidian Gold Emblem', category: 'luxury-minimal', tags: ['Obsidian', 'Gold', 'Emblem', 'Luxury'], description: 'Biểu tượng vàng dát trên đá hắc diệu thạch sang trọng.', defaultText: 'OBSIDIAN GOLD', defaultIcon: 'Crown', primary: '#eab308', accent: '#fde047', radius: 4, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-molten-obsidian-gold' },
  { id: 'luxury-sapphire-jewel-crown-royal', name: 'Royal Sapphire Jewel Crown', category: 'luxury-minimal', tags: ['Sapphire', 'Jewel', 'Crown', 'Luxury'], description: 'Vương miện đính đá sapphire lam ngọc quý phái.', defaultText: 'SAPPHIRE CROWN', defaultIcon: 'Star', primary: '#2563eb', accent: '#93c5fd', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-sapphire-jewel-crown' },
  { id: 'retro-synth-arcade-vector-blue', name: 'Synthwave Arcade Cyan Vector', category: 'retro-pixel', tags: ['Synthwave', 'Arcade', 'Vector', 'Retro'], description: 'Đồ họa phéc-tơ máy điện tử xẻng cổ điển rực rỡ.', defaultText: 'HIGH SCORE', defaultIcon: 'Play', primary: '#38bdf8', accent: '#0284c7', radius: 4, soundType: 'retro', recommendedBg: 'dark', effect: 'retro-synth-arcade-vector' },
  { id: 'retro-pinball-launcher-bumper-red', name: 'Pinball Launcher Spring Bumper', category: 'retro-pixel', tags: ['Pinball', 'Launcher', 'Bumper', 'Retro'], description: 'Lò xơ bắn bóng pinball màu đỏ nảy tức thì.', defaultText: 'LAUNCH BUMPER', defaultIcon: 'Heart', primary: '#e11d48', accent: '#fda4af', radius: 9999, soundType: 'retro', recommendedBg: 'light', effect: 'retro-pinball-launcher-bumper' },
  { id: 'interactive-sonic-shockwave-ring-wave', name: 'Sonic Shockwave Energy Ring', category: 'micro-interactive', tags: ['Sonic', 'Shockwave', 'Ring', 'Interactive'], description: 'Vòng sóng xung kích siêu thanh mở rộng sống động.', defaultText: 'SONIC WAVE', defaultIcon: 'Zap', primary: '#22d3ee', accent: '#a855f7', radius: 14, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-sonic-shockwave-ring' },
  { id: 'interactive-hyper-gravity-pull-field', name: 'Hyper Gravity Force Field', category: 'micro-interactive', tags: ['Gravity', 'Pull', 'Field', 'Interactive'], description: 'Trường trọng lực siêu việt hút không gian xung quanh.', defaultText: 'HYPER GRAVITY', defaultIcon: 'ArrowUpRight', primary: '#6366f1', accent: '#ec4899', radius: 18, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-hyper-gravity-pull' },
  { id: 'playful-cotton-candy-puff-sweet', name: 'Sweet Cotton Candy Puff Pill', category: 'playful-bubbly', tags: ['CottonCandy', 'Puff', 'Sweet', 'Playful'], description: 'Kẹo bông gòn hồng ngọt ngào xinh xắn xốp mềm.', defaultText: 'COTTON CANDY', defaultIcon: 'Smile', primary: '#f472b6', accent: '#be185d', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'playful-cotton-candy-puff' },
  { id: 'tech-pcb-copper-trace-circuit', name: 'PCB Copper Circuit Board Line', category: 'tech-outline', tags: ['PCB', 'Copper', 'Circuit', 'Tech'], description: 'Mạch in đồng điện tử xanh lá với đường dẫn linh kiện.', defaultText: 'COPPER TRACE', defaultIcon: 'Crosshair', primary: '#34d399', accent: '#059669', radius: 0, soundType: 'cyber', recommendedBg: 'dark', effect: 'tech-pcb-copper-trace' },
  { id: 'tech-golden-filament-frame-grid', name: 'Golden Filament Circuit Frame', category: 'tech-outline', tags: ['Filament', 'Gold', 'Frame', 'Tech'], description: 'Khung dây tóc vàng phát sáng góc cạnh công nghệ cao.', defaultText: 'GOLD FILAMENT', defaultIcon: 'Crosshair', primary: '#facc15', accent: '#eab308', radius: 2, soundType: 'cyber', recommendedBg: 'dark', effect: 'tech-golden-filament-frame' },
];

export const v19SignaturePresets = specs.map(createPreset);
