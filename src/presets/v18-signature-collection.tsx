import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V18Effect =
  | 'cyber-plasma-fusion-core'
  | 'cyber-neon-blade-slash'
  | 'cyber-chrono-warp-gate'
  | 'glass-frosted-opal-gem'
  | 'glass-prism-dispersion'
  | 'glass-quantum-crystal-shard'
  | 'skeuo-golden-origami-swan'
  | 'skeuo-molten-iron-forge'
  | 'skeuo-mechanical-valve-wheel'
  | 'brutalist-electric-arc-zap'
  | 'brutalist-obsidian-spike-edge'
  | 'neumorphic-soft-velvet-cushion'
  | 'aurora-cosmic-nebula-swirl'
  | 'aurora-starlight-beam-pulse'
  | 'luxury-diamond-lattice-crown'
  | 'luxury-emerald-bio-shield'
  | 'retro-pixel-heart-life'
  | 'retro-vaporwave-cassette-tape'
  | 'interactive-hyperion-pulse-wave'
  | 'interactive-kinetic-marble-roll';

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
  effect: V18Effect;
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

function effectCss(effect: V18Effect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'cyber-plasma-fusion-core':
      return `.${cls}{background:#030712;color:${p.primaryColor};border-color:${p.primaryColor};box-shadow:inset 0 0 18px ${p.primaryColor}44,0 0 25px ${p.primaryColor}55;}.${cls}:hover{background:${p.primaryColor};color:#030712;box-shadow:0 0 40px ${p.primaryColor}bb,0 0 70px ${p.accentColor}77;transform:translateY(-2px);}`;
    case 'cyber-neon-blade-slash':
      return `.${cls}{background:#09090b;color:#f43f5e;border-color:#f43f5e;box-shadow:0 0 18px #f43f5e55;}.${cls}:hover{background:#f43f5e;color:#fff;box-shadow:0 0 35px #f43f5eaa;transform:translateY(-2px);}`;
    case 'cyber-chrono-warp-gate':
      return `.${cls}{background:linear-gradient(135deg,#020617,${p.primaryColor}44,#020617);color:#fff;border-color:${p.accentColor};box-shadow:0 0 22px ${p.accentColor}66;}.${cls}:hover{border-color:#fff;box-shadow:0 0 45px ${p.accentColor}bb;transform:scale(1.03);}`;
    case 'glass-frosted-opal-gem':
      return `.${cls}{background:rgba(255,255,255,.2);backdrop-filter:blur(20px);border-color:rgba(255,255,255,.75);box-shadow:inset 0 1px 2px #fff,0 10px 30px rgba(0,0,0,.2);}.${cls}:hover{background:rgba(255,255,255,.32);box-shadow:inset 0 1px 2px #fff,0 15px 40px ${p.primaryColor}66;transform:translateY(-2px);}`;
    case 'glass-prism-dispersion':
      return `.${cls}{background:linear-gradient(135deg,rgba(56,189,248,.25),rgba(236,72,153,.25));backdrop-filter:blur(16px);border-color:rgba(255,255,255,.5);box-shadow:0 8px 25px rgba(0,0,0,.25);}.${cls}:hover{border-color:#fff;box-shadow:0 12px 38px ${p.primaryColor}88;transform:translateY(-2px);}`;
    case 'glass-quantum-crystal-shard':
      return `.${cls}{background:rgba(15,23,42,.5);backdrop-filter:blur(18px);border-color:rgba(255,255,255,.4);box-shadow:0 12px 32px rgba(0,0,0,.35);}.${cls}:hover{border-color:rgba(255,255,255,.9);box-shadow:0 18px 45px ${p.accentColor}66;transform:translateY(-3px);}`;
    case 'skeuo-golden-origami-swan':
      return `.${cls}{background:linear-gradient(135deg,#eab308,#ca8a04);color:#fef08a;border-color:#854d0e;box-shadow:inset 0 2px 0 #fde047,0 6px 0 #713f12,0 10px 20px rgba(0,0,0,.4);text-shadow:0 1px 2px #713f12;}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'skeuo-molten-iron-forge':
      return `.${cls}{background:linear-gradient(180deg,#9a3412,#431407);color:#ffedd5;border-color:#270e04;box-shadow:inset 0 2px 0 #ea580c,0 6px 0 #180702,0 10px 20px rgba(0,0,0,.5);}.${cls}:hover{filter:brightness(1.2);transform:translateY(-2px);}`;
    case 'skeuo-mechanical-valve-wheel':
      return `.${cls}{background:linear-gradient(180deg,#3f3f46,#18181b);color:#f4f4f5;border-color:#09090b;box-shadow:inset 0 2px 0 #71717a,0 6px 0 #09090b,0 10px 22px rgba(0,0,0,.5);}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'brutalist-electric-arc-zap':
      return `.${cls}{background:#000;color:#38bdf8;border-color:#38bdf8;border-width:3px;box-shadow:6px 6px 0 #38bdf8;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:#38bdf8;color:#000;box-shadow:9px 9px 0 #fff;transform:translate(-3px,-3px);}`;
    case 'brutalist-obsidian-spike-edge':
      return `.${cls}{background:#18181b;color:#facc15;border-color:#facc15;border-width:3px;box-shadow:6px 6px 0 #facc15;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:#facc15;color:#18181b;box-shadow:9px 9px 0 #000;transform:translate(-3px,-3px);}`;
    case 'neumorphic-soft-velvet-cushion':
      return `.${cls}{background:#475569;color:#f8fafc;border-color:#64748b;box-shadow:inset 4px 4px 10px #1e293b,inset -4px -4px 10px #94a3b8,0 8px 20px rgba(0,0,0,.3);}.${cls}:hover{box-shadow:inset 2px 2px 6px #1e293b,inset -2px -2px 6px #94a3b8,0 12px 28px rgba(0,0,0,.4);transform:translateY(-2px);}`;
    case 'aurora-cosmic-nebula-swirl':
      return `.${cls}{background:linear-gradient(135deg,#0f172a,${p.primaryColor}55,#0f172a);color:#fff;border-color:${p.primaryColor};box-shadow:0 0 24px ${p.primaryColor}77,0 0 48px ${p.accentColor}44;}.${cls}:hover{box-shadow:0 0 40px ${p.primaryColor}bb,0 0 70px ${p.accentColor}88;transform:translateY(-2px);}`;
    case 'aurora-starlight-beam-pulse':
      return `.${cls}{background:linear-gradient(120deg,${p.primaryColor},${p.accentColor},#38bdf8);background-size:200% 100%;color:#fff;border-color:rgba(255,255,255,.4);box-shadow:0 8px 25px ${p.primaryColor}66;}.${cls}:hover{background-position:100% 0;box-shadow:0 14px 40px ${p.accentColor}99;transform:translateY(-2px);}`;
    case 'luxury-diamond-lattice-crown':
      return `.${cls}{background:linear-gradient(135deg,#18181b,#09090b);color:#fef08a;border-color:#eab308;box-shadow:0 8px 22px rgba(0,0,0,.5),inset 0 1px 0 #fde047;font-family:serif;letter-spacing:.14em;}.${cls}:hover{border-color:#fef08a;box-shadow:0 12px 32px #eab30888;transform:translateY(-2px);}`;
    case 'luxury-emerald-bio-shield':
      return `.${cls}{background:linear-gradient(180deg,#064e3b,#022c22);color:#6ee7b7;border-color:#34d399;box-shadow:inset 0 0 15px #34d39944,0 8px 22px rgba(0,0,0,.5);font-family:serif;letter-spacing:.15em;}.${cls}:hover{color:#fff;border-color:#6ee7b7;box-shadow:0 0 32px #34d399bb;transform:translateY(-2px);}`;
    case 'retro-pixel-heart-life':
      return `.${cls}{background:#e11d48;color:#fff;border-color:#fda4af;box-shadow:inset 0 3px 0 #fecdd3,0 6px 0 #9f1239,0 10px 20px rgba(0,0,0,.3);font-family:monospace;}.${cls}:hover{background:#f43f5e;transform:translateY(-2px);}`;
    case 'retro-vaporwave-cassette-tape':
      return `.${cls}{background:linear-gradient(135deg,#c084fc,#38bdf8);color:#0f172a;border-color:#fff;box-shadow:0 8px 22px rgba(192,132,252,.4);font-family:sans-serif;font-weight:900;}.${cls}:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 12px 30px rgba(56,189,248,.6);}`;
    case 'interactive-hyperion-pulse-wave':
      return `.${cls}{background:#020617;color:#fff;border-color:${p.primaryColor};box-shadow:0 0 18px ${p.primaryColor}66;}.${cls}:hover{box-shadow:0 0 35px ${p.primaryColor}bb,0 0 60px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'interactive-kinetic-marble-roll':
      return `.${cls}{background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 10px 25px ${p.primaryColor}66;}.${cls}:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 18px 42px ${p.primaryColor}99;}`;
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
    case 'cyber-plasma-fusion-core':
      return { ...base, color: isHovered ? '#030712' : p.primaryColor, background: isHovered ? p.primaryColor : '#030712', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 40 : 25}px ${p.primaryColor}${isHovered ? 'bb' : '55'}`, transform: hoverLift };
    case 'cyber-neon-blade-slash':
      return { ...base, color: isHovered ? '#fff' : '#f43f5e', background: isHovered ? '#f43f5e' : '#09090b', borderColor: '#f43f5e', boxShadow: `0 0 ${isHovered ? 35 : 18}px #f43f5e${isHovered ? 'aa' : '55'}`, transform: hoverLift };
    case 'cyber-chrono-warp-gate':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#020617,${p.primaryColor}44,#020617)`, borderColor: isHovered ? '#fff' : p.accentColor, boxShadow: `0 0 ${isHovered ? 45 : 22}px ${p.accentColor}${isHovered ? 'bb' : '66'}`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'glass-frosted-opal-gem':
      return { ...base, color: '#fff', background: isHovered ? 'rgba(255,255,255,.32)' : 'rgba(255,255,255,.2)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,.75)', boxShadow: `inset 0 1px 2px #fff, 0 ${isHovered ? 15 : 10}px ${isHovered ? 40 : 30}px ${p.primaryColor}${isHovered ? '66' : '22'}`, transform: hoverLift };
    case 'glass-prism-dispersion':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,rgba(56,189,248,.25),rgba(236,72,153,.25))', backdropFilter: 'blur(16px)', borderColor: isHovered ? '#fff' : 'rgba(255,255,255,.5)', boxShadow: `0 ${isHovered ? 12 : 8}px ${isHovered ? 38 : 25}px ${p.primaryColor}88`, transform: hoverLift };
    case 'glass-quantum-crystal-shard':
      return { ...base, color: '#fff', background: 'rgba(15,23,42,.5)', backdropFilter: 'blur(18px)', borderColor: isHovered ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.4)', boxShadow: isHovered ? `0 18px 45px ${p.accentColor}66` : '0 12px 32px rgba(0,0,0,.35)', transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'skeuo-golden-origami-swan':
      return { ...base, color: '#fef08a', background: 'linear-gradient(135deg,#eab308,#ca8a04)', borderColor: '#854d0e', boxShadow: 'inset 0 2px 0 #fde047,0 6px 0 #713f12,0 10px 20px rgba(0,0,0,.4)', textShadow: '0 1px 2px #713f12', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'skeuo-molten-iron-forge':
      return { ...base, color: '#ffedd5', background: 'linear-gradient(180deg,#9a3412,#431407)', borderColor: '#270e04', boxShadow: 'inset 0 2px 0 #ea580c,0 6px 0 #180702,0 10px 20px rgba(0,0,0,.5)', filter: isHovered ? 'brightness(1.2)' : undefined, transform: hoverLift };
    case 'skeuo-mechanical-valve-wheel':
      return { ...base, color: '#f4f4f5', background: 'linear-gradient(180deg,#3f3f46,#18181b)', borderColor: '#09090b', boxShadow: 'inset 0 2px 0 #71717a,0 6px 0 #09090b,0 10px 22px rgba(0,0,0,.5)', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'brutalist-electric-arc-zap':
      return { ...base, color: isHovered ? '#000' : '#38bdf8', background: isHovered ? '#38bdf8' : '#000', borderColor: '#38bdf8', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: isHovered ? '9px 9px 0 #fff' : '6px 6px 0 #38bdf8', transform: isHovered && !isActive ? 'translate(-3px,-3px)' : base.transform };
    case 'brutalist-obsidian-spike-edge':
      return { ...base, color: isHovered ? '#18181b' : '#facc15', background: isHovered ? '#facc15' : '#18181b', borderColor: '#facc15', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: isHovered ? '9px 9px 0 #000' : '6px 6px 0 #facc15', transform: isHovered && !isActive ? 'translate(-3px,-3px)' : base.transform };
    case 'neumorphic-soft-velvet-cushion':
      return { ...base, color: '#f8fafc', background: '#475569', borderColor: '#64748b', boxShadow: isHovered ? 'inset 2px 2px 6px #1e293b,inset -2px -2px 6px #94a3b8,0 12px 28px rgba(0,0,0,.4)' : 'inset 4px 4px 10px #1e293b,inset -4px -4px 10px #94a3b8,0 8px 20px rgba(0,0,0,.3)', transform: hoverLift };
    case 'aurora-cosmic-nebula-swirl':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#0f172a,${p.primaryColor}55,#0f172a)`, borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 40 : 24}px ${p.primaryColor}${isHovered ? 'bb' : '77'}, 0 0 ${isHovered ? 70 : 48}px ${p.accentColor}${isHovered ? '88' : '44'}`, transform: hoverLift };
    case 'aurora-starlight-beam-pulse':
      return { ...base, color: '#fff', background: isHovered ? `linear-gradient(120deg,${p.accentColor},#38bdf8,${p.primaryColor})` : `linear-gradient(120deg,${p.primaryColor},${p.accentColor},#38bdf8)`, borderColor: 'rgba(255,255,255,.4)', boxShadow: `0 ${isHovered ? 14 : 8}px ${isHovered ? 40 : 25}px ${isHovered ? p.accentColor : p.primaryColor}99`, transform: hoverLift };
    case 'luxury-diamond-lattice-crown':
      return { ...base, color: '#fef08a', background: 'linear-gradient(135deg,#18181b,#09090b)', borderColor: isHovered ? '#fef08a' : '#eab308', fontFamily: 'serif', letterSpacing: '.14em', boxShadow: isHovered ? '0 12px 32px #eab30888' : '0 8px 22px rgba(0,0,0,.5)', transform: hoverLift };
    case 'luxury-emerald-bio-shield':
      return { ...base, color: isHovered ? '#fff' : '#6ee7b7', background: 'linear-gradient(180deg,#064e3b,#022c22)', borderColor: isHovered ? '#6ee7b7' : '#34d399', fontFamily: 'serif', letterSpacing: '.15em', boxShadow: `0 0 ${isHovered ? 32 : 15}px #34d399bb`, transform: hoverLift };
    case 'retro-pixel-heart-life':
      return { ...base, color: '#fff', background: isHovered ? '#f43f5e' : '#e11d48', borderColor: '#fda4af', fontFamily: 'monospace', boxShadow: 'inset 0 3px 0 #fecdd3,0 6px 0 #9f1239,0 10px 20px rgba(0,0,0,.3)', transform: hoverLift };
    case 'retro-vaporwave-cassette-tape':
      return { ...base, color: '#0f172a', background: 'linear-gradient(135deg,#c084fc,#38bdf8)', borderColor: '#fff', fontWeight: 900, boxShadow: isHovered ? '0 12px 30px rgba(56,189,248,.6)' : '0 8px 22px rgba(192,132,252,.4)', transform: isHovered && !isActive ? 'translateY(-2px) scale(1.02)' : base.transform };
    case 'interactive-hyperion-pulse-wave':
      return { ...base, color: '#fff', background: '#020617', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 35 : 18}px ${p.primaryColor}bb, 0 0 ${isHovered ? 60 : 25}px ${p.accentColor}66`, transform: hoverLift };
    case 'interactive-kinetic-marble-roll':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 18 : 10}px ${isHovered ? 42 : 25}px ${p.primaryColor}99`, transform: isHovered && !isActive ? 'translateY(-4px) scale(1.03)' : base.transform };
  }
}

function decoration(effect: V18Effect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'cyber-plasma-fusion-core':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.35 : 0.15, background: `repeating-linear-gradient(90deg,transparent 0 8px,${p.primaryColor} 9px 10px)` }} />;
    case 'cyber-neon-blade-slash':
      return <span style={{ ...common, width: 30, height: '200%', top: '-50%', left: isHovered ? '80%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(244,63,94,.8),transparent)', transform: 'rotate(25deg)', transition: 'left .4s ease' }} />;
    case 'cyber-chrono-warp-gate':
      return <span style={{ ...common, inset: 0, opacity: 0.3, background: 'radial-gradient(circle at 50% 50%,#fff 1px,transparent 2px)', backgroundSize: '10px 10px' }} />;
    case 'glass-frosted-opal-gem':
      return <span style={{ ...common, width: 80, height: 30, left: -10, top: -5, borderRadius: '50%', background: 'rgba(255,255,255,.4)', filter: 'blur(8px)' }} />;
    case 'glass-prism-dispersion':
      return <span style={{ ...common, width: 40, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)', transform: 'rotate(20deg)', transition: 'left .5s ease' }} />;
    case 'glass-quantum-crystal-shard':
      return <span style={{ ...common, inset: 4, border: '1px solid rgba(255,255,255,.3)', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'skeuo-golden-origami-swan':
      return <span style={{ ...common, width: 8, height: 8, right: 8, top: 8, borderRight: '2px solid #fde047', borderTop: '2px solid #fde047' }} />;
    case 'skeuo-molten-iron-forge':
      return <span style={{ ...common, inset: 3, border: '1px solid #ea580c44', borderRadius: Math.max(2, p.radius - 3) }} />;
    case 'skeuo-mechanical-valve-wheel':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', left: 8, top: 8, background: '#71717a' }} />;
    case 'brutalist-electric-arc-zap':
      return <span style={{ ...common, right: 6, top: 4, fontSize: 8, fontFamily: 'monospace', color: isHovered ? '#000' : '#38bdf8' }}>ARC</span>;
    case 'brutalist-obsidian-spike-edge':
      return <span style={{ ...common, right: -2, top: -2, width: 16, height: 16, background: '#facc15', borderLeft: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(45deg)' }} />;
    case 'neumorphic-soft-velvet-cushion':
      return <span style={{ ...common, inset: 2, borderRadius: Math.max(0, p.radius - 2), border: '1px solid rgba(255,255,255,.2)' }} />;
    case 'aurora-cosmic-nebula-swirl':
      return <span style={{ ...common, width: 60, height: 60, right: 10, top: -15, borderRadius: '50%', background: p.accentColor, filter: 'blur(16px)', opacity: 0.5 }} />;
    case 'aurora-starlight-beam-pulse':
      return <span style={{ ...common, inset: 0, background: 'radial-gradient(circle at 80% 20%,rgba(255,255,255,.4),transparent 60%)' }} />;
    case 'luxury-diamond-lattice-crown':
      return <span style={{ ...common, width: 8, height: 8, left: 8, top: 8, borderLeft: '2px solid #eab308', borderTop: '2px solid #eab308' }} />;
    case 'luxury-emerald-bio-shield':
      return <span style={{ ...common, inset: 4, border: '1px solid #34d39944', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'retro-pixel-heart-life':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', left: 8, top: 8, background: '#fca5a5' }} />;
    case 'retro-vaporwave-cassette-tape':
      return <span style={{ ...common, right: 8, bottom: 4, fontSize: 9, fontFamily: 'monospace', color: '#0f172a' }}>SIDE A</span>;
    case 'interactive-hyperion-pulse-wave':
      return <span style={{ ...common, inset: -4, borderRadius: Math.max(0, p.radius + 4), border: `1px solid ${p.primaryColor}55`, opacity: isHovered ? 1 : 0.3 }} />;
    case 'interactive-kinetic-marble-roll':
      return <span style={{ ...common, width: 50, height: 18, left: 10, top: 2, borderRadius: '50%', background: 'rgba(255,255,255,.35)', filter: 'blur(4px)' }} />;
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
  { id: 'cyber-plasma-fusion-core-node', name: 'Plasma Fusion Energy Core', category: 'cyberpunk', tags: ['Plasma', 'Fusion', 'Core', 'Cyber'], description: 'Lõi lò phản ứng plasma năng lượng cao phát sáng với mạch xung điện.', defaultText: 'PLASMA FUSION', defaultIcon: 'Zap', primary: '#a855f7', accent: '#3b82f6', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-plasma-fusion-core' },
  { id: 'cyber-neon-blade-slash-red', name: 'Cyberpunk Neon Blade Slash', category: 'cyberpunk', tags: ['Neon', 'Blade', 'Slash', 'Cyber'], description: 'Lưỡi kiếm neon màu đỏ chói xé rách không gian kỹ thuật số.', defaultText: 'NEON BLADE', defaultIcon: 'Flame', primary: '#f43f5e', accent: '#38bdf8', radius: 4, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-neon-blade-slash' },
  { id: 'cyber-chrono-warp-gate-blue', name: 'Chrono Time Warp Gate', category: 'cyberpunk', tags: ['Chrono', 'Warp', 'Gate', 'Time'], description: 'Cổng du hành thời gian Chrono tỏa hào quang rực rỡ.', defaultText: 'CHRONO WARP', defaultIcon: 'RefreshCw', primary: '#3b82f6', accent: '#06b6d4', radius: 10, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-chrono-warp-gate' },
  { id: 'glass-frosted-opal-gem-stone', name: 'Frosted Opal Gemstone Glass', category: 'glass', tags: ['Opal', 'Frosted', 'Gem', 'Glass'], description: 'Đá opal mờ phản chiếu ánh ngọc trai quyến rũ lung linh.', defaultText: 'FROSTED OPAL', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#f472b6', radius: 20, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-frosted-opal-gem' },
  { id: 'glass-prism-dispersion-spectrum', name: 'Optical Prism Rainbow Spectrum', category: 'glass', tags: ['Prism', 'Dispersion', 'Rainbow', 'Spectrum'], description: 'Lăng kính khúc xạ bẩy sắc cầu vồng tỏa ánh sáng ảo diệu.', defaultText: 'PRISM SPECTRUM', defaultIcon: 'Sparkles', primary: '#f472b6', accent: '#38bdf8', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-prism-dispersion' },
  { id: 'glass-quantum-crystal-shard-ice', name: 'Quantum Crystal Shard Ice', category: 'glass', tags: ['Quantum', 'Crystal', 'Shard', 'Ice'], description: 'Mảnh pha lê lượng tử sắc nhọn đóng băng mờ ảo.', defaultText: 'QUANTUM SHARD', defaultIcon: 'Layers', primary: '#818cf8', accent: '#c084fc', radius: 12, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-quantum-crystal-shard' },
  { id: 'skeuo-golden-origami-swan-sculpt', name: 'Golden Origami Swan Sculpt', category: 'skeuomorphic-3d', tags: ['Golden', 'Origami', 'Swan', '3D'], description: 'Hạc giấy dát vàng origami gấp nếp nổi khối 3D quý phái.', defaultText: 'GOLDEN SWAN', defaultIcon: 'Crown', primary: '#eab308', accent: '#854d0e', radius: 8, soundType: 'crisp', recommendedBg: 'dark', effect: 'skeuo-golden-origami-swan' },
  { id: 'skeuo-molten-iron-forge-button', name: 'Molten Iron Forge Anvil', category: 'skeuomorphic-3d', tags: ['Molten', 'Iron', 'Forge', 'Metal'], description: 'Sắt nóng chảy trong lò rèn tỏa nhiệt lượng rực lửa.', defaultText: 'MOLTEN FORGE', defaultIcon: 'Flame', primary: '#ea580c', accent: '#9a3412', radius: 6, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-molten-iron-forge' },
  { id: 'skeuo-mechanical-valve-wheel-dial', name: 'Mechanical Industrial Valve Dial', category: 'skeuomorphic-3d', tags: ['Mechanical', 'Valve', 'Industrial', 'Dial'], description: 'Van xoay cơ khí công nghiệp nặng với kim loại đúc bền bỉ.', defaultText: 'VALVE WHEEL', defaultIcon: 'Cpu', primary: '#71717a', accent: '#27272a', radius: 8, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-mechanical-valve-wheel' },
  { id: 'brutalist-electric-arc-zap-blue', name: 'Electric Arc Shock Zap', category: 'brutalist', tags: ['Electric', 'Arc', 'Shock', 'Brutalist'], description: 'Tia sét điện cao thế bùng nổ bóng đổ cá tính.', defaultText: 'ARC ZAP', defaultIcon: 'Zap', primary: '#38bdf8', accent: '#000000', radius: 0, soundType: 'crisp', recommendedBg: 'dark', effect: 'brutalist-electric-arc-zap' },
  { id: 'brutalist-obsidian-spike-edge-yellow', name: 'Obsidian Spike Blade Edge', category: 'brutalist', tags: ['Obsidian', 'Spike', 'Edge', 'Brutalist'], description: 'Cạnh gờ đá hắc diệu thạch sắc nhọn viền vàng rực rỡ.', defaultText: 'SPIKE EDGE', defaultIcon: 'Shield', primary: '#facc15', accent: '#18181b', radius: 2, soundType: 'pop', recommendedBg: 'dark', effect: 'brutalist-obsidian-spike-edge' },
  { id: 'neumorphic-soft-velvet-cushion-slate', name: 'Soft Velvet Pillow Neumorphic', category: 'neumorphic', tags: ['Velvet', 'Pillow', 'Soft', 'Neumorphic'], description: 'Gối nhung xám êm ái với dải bóng chìm dịu nhẹ.', defaultText: 'VELVET SOFT', defaultIcon: 'Smile', primary: '#64748b', accent: '#475569', radius: 18, soundType: 'pop', recommendedBg: 'dark', effect: 'neumorphic-soft-velvet-cushion' },
  { id: 'aurora-cosmic-nebula-swirl-violet', name: 'Cosmic Nebula Violet Swirl', category: 'aurora-gradient', tags: ['Cosmic', 'Nebula', 'Swirl', 'Aurora'], description: 'Tinh vân vũ trụ tím hồng xoáy sâu vào không gian vô tận.', defaultText: 'COSMIC NEBULA', defaultIcon: 'Sparkles', primary: '#a855f7', accent: '#ec4899', radius: 22, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-cosmic-nebula-swirl' },
  { id: 'aurora-starlight-beam-pulse-cyan', name: 'Starlight Energy Beam Pulse', category: 'aurora-gradient', tags: ['Starlight', 'Beam', 'Pulse', 'Aurora'], description: 'Chùm sáng tinh tú bùng phát với dải quang phổ tuyệt đẹp.', defaultText: 'STARLIGHT BEAM', defaultIcon: 'Sun', primary: '#38bdf8', accent: '#818cf8', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-starlight-beam-pulse' },
  { id: 'luxury-diamond-lattice-crown-gold', name: 'Royal Diamond Lattice Crown', category: 'luxury-minimal', tags: ['Diamond', 'Lattice', 'Crown', 'Luxury'], description: 'Lưới kim cương dát vàng đẳng cấp quý tộc thượng lưu.', defaultText: 'DIAMOND CROWN', defaultIcon: 'Crown', primary: '#eab308', accent: '#fef08a', radius: 4, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-diamond-lattice-crown' },
  { id: 'luxury-emerald-bio-shield-green', name: 'Emerald Gem Bio-Shield Emblem', category: 'luxury-minimal', tags: ['Emerald', 'Shield', 'Emblem', 'Luxury'], description: 'Khiên ngọc lục bảo bảo vệ tối thượng sang trọng.', defaultText: 'EMERALD SHIELD', defaultIcon: 'Shield', primary: '#34d399', accent: '#6ee7b7', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-emerald-bio-shield' },
  { id: 'retro-pixel-heart-life-pink', name: '8-Bit Retro Pixel Life Heart', category: 'retro-pixel', tags: ['8Bit', 'Pixel', 'Heart', 'Retro'], description: 'Trái tim hồi máu game 8-bit hoài cổ đỏ rực rỡ.', defaultText: 'PIXEL HEART', defaultIcon: 'Heart', primary: '#e11d48', accent: '#fda4af', radius: 4, soundType: 'retro', recommendedBg: 'light', effect: 'retro-pixel-heart-life' },
  { id: 'retro-vaporwave-cassette-tape-90s', name: 'Vaporwave 90s Cassette Tape', category: 'retro-pixel', tags: ['Vaporwave', 'Cassette', 'Tape', '90s'], description: 'Băng cassette nhạc Synthwave thập niên 90 thơ mộng.', defaultText: 'CASSETTE 90S', defaultIcon: 'Play', primary: '#c084fc', accent: '#38bdf8', radius: 14, soundType: 'retro', recommendedBg: 'dark', effect: 'retro-vaporwave-cassette-tape' },
  { id: 'interactive-hyperion-pulse-wave-ring', name: 'Hyperion Shockwave Pulse Ring', category: 'micro-interactive', tags: ['Hyperion', 'Pulse', 'Shockwave', 'Interactive'], description: 'Vòng sóng xung kích Hyperion lan tỏa quyến rũ khi hover.', defaultText: 'HYPERION PULSE', defaultIcon: 'Zap', primary: '#22d3ee', accent: '#3b82f6', radius: 16, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-hyperion-pulse-wave' },
  { id: 'interactive-kinetic-marble-roll-3d', name: 'Kinetic Marble Roll Field', category: 'micro-interactive', tags: ['Kinetic', 'Marble', 'Roll', 'Interactive'], description: 'Hòn bi động lực học lăn chuyển linh hoạt với lực hấp dẫn.', defaultText: 'MARBLE ROLL', defaultIcon: 'RefreshCw', primary: '#6366f1', accent: '#a855f7', radius: 20, soundType: 'pop', recommendedBg: 'dark', effect: 'interactive-kinetic-marble-roll' },
];

export const v18SignaturePresets = specs.map(createPreset);
