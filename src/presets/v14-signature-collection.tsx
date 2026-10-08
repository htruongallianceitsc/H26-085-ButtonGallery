import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V14Effect =
  | 'matrix-rain'
  | 'hologram-flicker'
  | 'frosted-liquid'
  | 'prism-glare'
  | 'vintage-wood'
  | 'glossy-bubble'
  | 'sticker-peel'
  | 'ticket-stub'
  | 'soft-cushion'
  | 'neon-groove'
  | 'nebula-pulse'
  | 'sunset-wave'
  | 'diamond-bevel'
  | 'gold-foil'
  | 'gameboy-bevel'
  | 'vhs-tape'
  | 'energy-wave'
  | 'elastic-float'
  | 'wiggle-jelly'
  | 'hud-target';

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
  effect: V14Effect;
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

function effectCss(effect: V14Effect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'matrix-rain':
      return `.${cls}{background:#030a06;color:${p.primaryColor};border-color:${p.primaryColor};box-shadow:0 0 16px ${p.primaryColor}44,inset 0 0 12px ${p.primaryColor}22;font-family:monospace;}.${cls}:hover{box-shadow:0 0 28px ${p.primaryColor}88,0 0 45px ${p.accentColor}44;transform:translateY(-2px);}`;
    case 'hologram-flicker':
      return `.${cls}{background:linear-gradient(135deg,#090d16,#111827);color:#f0f9ff;border-color:${p.primaryColor};box-shadow:0 0 18px ${p.primaryColor}55;}.${cls}:hover{border-color:${p.accentColor};box-shadow:0 0 32px ${p.accentColor}88,-3px 0 0 ${p.primaryColor},3px 0 0 ${p.accentColor};transform:scale(1.03);}`;
    case 'frosted-liquid':
      return `.${cls}{background:rgba(255,255,255,.12);backdrop-filter:blur(16px) saturate(160%);border-color:rgba(255,255,255,.5);box-shadow:inset 0 1px 1px rgba(255,255,255,.8),inset 0 -8px 20px ${p.primaryColor}33,0 12px 30px rgba(0,0,0,.25);}.${cls}:hover{background:rgba(255,255,255,.2);box-shadow:inset 0 1px 1px #fff,0 16px 40px ${p.primaryColor}55;transform:translateY(-3px);}`;
    case 'prism-glare':
      return `.${cls}{background:linear-gradient(120deg,rgba(255,255,255,.08),${p.primaryColor}22,rgba(255,255,255,.08));border-color:${p.primaryColor}aa;backdrop-filter:blur(10px);box-shadow:0 8px 24px rgba(0,0,0,.3);}.${cls}:hover{border-color:#fff;box-shadow:0 0 30px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'vintage-wood':
      return `.${cls}{background:linear-gradient(180deg,#5c3317,#3b1e0b);color:#fde68a;border-color:#241205;box-shadow:inset 0 2px 0 #8b5a2b,inset 0 -3px 0 #1f0d04,0 6px 0 #1f0d04,0 10px 20px rgba(0,0,0,.4);text-shadow:0 2px 2px #100602;}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'glossy-bubble':
      return `.${cls}{background:radial-gradient(circle at 50% 20%,rgba(255,255,255,.7),${p.primaryColor} 60%,${p.accentColor} 100%);color:#fff;border-color:rgba(255,255,255,.4);box-shadow:inset 0 4px 8px rgba(255,255,255,.8),0 10px 25px ${p.primaryColor}66;}.${cls}:hover{transform:translateY(-3px) scale(1.04);box-shadow:inset 0 6px 12px #fff,0 15px 35px ${p.primaryColor}88;}`;
    case 'sticker-peel':
      return `.${cls}{background:#fef08a;color:#0f172a;border-color:#0f172a;border-width:2px;box-shadow:5px 5px 0 #0f172a;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:${p.primaryColor};color:#fff;transform:translate(-2px,-2px);box-shadow:8px 8px 0 #0f172a;}`;
    case 'ticket-stub':
      return `.${cls}{background:#0f172a;color:#f8fafc;border-color:${p.primaryColor};border-width:2px;border-style:dashed;box-shadow:6px 6px 0 ${p.accentColor};text-transform:uppercase;letter-spacing:.1em;}.${cls}:hover{background:${p.primaryColor};color:#0f172a;border-style:solid;transform:translate(-2px,-2px);box-shadow:9px 9px 0 ${p.accentColor};}`;
    case 'soft-cushion':
      return `.${cls}{background:linear-gradient(145deg,#1e293b,#0f172a);color:#e2e8f0;border-color:rgba(255,255,255,.08);box-shadow:8px 8px 18px #090d16,-8px -8px 18px #27354a;}.${cls}:hover{color:#fff;box-shadow:12px 12px 24px #090d16,-12px -12px 24px #27354a;transform:translateY(-2px);}`;
    case 'neon-groove':
      return `.${cls}{background:#0b0f19;color:${p.primaryColor};border-color:#1e293b;box-shadow:inset 4px 4px 10px #04060a,inset -4px -4px 10px #121828,0 0 15px ${p.primaryColor}44;}.${cls}:hover{color:#fff;box-shadow:inset 2px 2px 6px #04060a,inset -2px -2px 6px #121828,0 0 28px ${p.primaryColor}aa;transform:scale(1.02);}`;
    case 'nebula-pulse':
      return `.${cls}{background:linear-gradient(135deg,#0f172a,${p.primaryColor}44,#0f172a);color:#fff;border-color:${p.primaryColor};box-shadow:0 0 20px ${p.primaryColor}66,0 0 40px ${p.accentColor}33;}.${cls}:hover{box-shadow:0 0 35px ${p.primaryColor},0 0 60px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'sunset-wave':
      return `.${cls}{background:linear-gradient(90deg,${p.primaryColor},${p.accentColor},#f59e0b);background-size:200% 100%;color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 8px 25px ${p.primaryColor}55;}.${cls}:hover{background-position:100% 0;box-shadow:0 12px 35px ${p.accentColor}77;transform:translateY(-2px);}`;
    case 'diamond-bevel':
      return `.${cls}{background:linear-gradient(180deg,#18181b,#09090b);color:#fef08a;border-color:${p.primaryColor};box-shadow:0 0 15px ${p.primaryColor}33;font-family:Georgia,serif;letter-spacing:.15em;}.${cls}:hover{color:#fff;border-color:${p.accentColor};box-shadow:0 0 25px ${p.primaryColor}66;transform:translateY(-2px);}`;
    case 'gold-foil':
      return `.${cls}{background:#0a0a0a;color:#fcd34d;border-color:#fcd34d;box-shadow:inset 0 0 15px #fcd34d22,0 8px 20px rgba(0,0,0,.6);font-family:serif;letter-spacing:.12em;}.${cls}:hover{background:linear-gradient(135deg,#171717,#262626);color:#fff;border-color:#fef08a;box-shadow:0 0 25px #fcd34d66;transform:translateY(-2px);}`;
    case 'gameboy-bevel':
      return `.${cls}{background:#9ca3af;color:#111827;border-color:#f3f4f6;box-shadow:inset 3px 3px 0 #e5e7eb,inset -3px -3px 0 #4b5563,0 6px 0 #374151,0 10px 15px rgba(0,0,0,.3);font-family:monospace;}.${cls}:hover{background:${p.primaryColor};color:#fff;transform:translateY(-2px);}`;
    case 'vhs-tape':
      return `.${cls}{background:#111827;color:${p.primaryColor};border-color:${p.primaryColor};border-width:2px;box-shadow:-3px 0 0 ${p.accentColor},3px 0 0 #06b6d4;font-family:monospace;}.${cls}:hover{background:${p.primaryColor};color:#111827;transform:scale(1.03);box-shadow:-5px 0 0 ${p.accentColor},5px 0 0 #06b6d4;}`;
    case 'energy-wave':
      return `.${cls}{background:#030712;color:#fff;border-color:${p.primaryColor};box-shadow:0 0 15px ${p.primaryColor}55;}.${cls}:hover{box-shadow:0 0 30px ${p.primaryColor}aa,0 0 50px ${p.accentColor}55;transform:translateY(-2px);}`;
    case 'elastic-float':
      return `.${cls}{background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 10px 25px ${p.primaryColor}55;}.${cls}:hover{transform:translateY(-4px) scale(1.02);box-shadow:0 16px 35px ${p.primaryColor}88;}`;
    case 'wiggle-jelly':
      return `.${cls}{background:${p.primaryColor};color:#fff;border-color:rgba(255,255,255,.4);box-shadow:0 8px 0 ${p.accentColor},0 12px 20px rgba(0,0,0,.2);}.${cls}:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 10px 0 ${p.accentColor},0 16px 25px ${p.primaryColor}66;}`;
    case 'hud-target':
      return `.${cls}{background:#020617;color:${p.primaryColor};border-color:${p.primaryColor};border-width:1px;font-family:monospace;text-transform:uppercase;box-shadow:0 0 15px ${p.primaryColor}33;}.${cls}:hover{background:${p.primaryColor}1a;color:#fff;box-shadow:0 0 25px ${p.primaryColor}88;transform:translateY(-2px);}`;
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
    case 'matrix-rain':
      return { ...base, color: p.primaryColor, background: '#030a06', borderColor: p.primaryColor, fontFamily: 'monospace', boxShadow: `0 0 ${isHovered ? 28 : 16}px ${p.primaryColor}${isHovered ? '88' : '44'}`, transform: hoverLift };
    case 'hologram-flicker':
      return { ...base, color: '#f0f9ff', background: 'linear-gradient(135deg,#090d16,#111827)', borderColor: isHovered ? p.accentColor : p.primaryColor, boxShadow: isHovered ? `0 0 32px ${p.accentColor}88, -3px 0 0 ${p.primaryColor}, 3px 0 0 ${p.accentColor}` : `0 0 18px ${p.primaryColor}55`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'frosted-liquid':
      return { ...base, color: '#fff', background: isHovered ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.12)', backdropFilter: 'blur(16px) saturate(160%)', borderColor: 'rgba(255,255,255,.5)', boxShadow: `inset 0 1px 1px rgba(255,255,255,.8), 0 ${isHovered ? 16 : 12}px ${isHovered ? 40 : 30}px ${p.primaryColor}${isHovered ? '55' : '33'}`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'prism-glare':
      return { ...base, color: '#fff', background: `linear-gradient(120deg,rgba(255,255,255,.08),${p.primaryColor}22,rgba(255,255,255,.08))`, borderColor: isHovered ? '#fff' : `${p.primaryColor}aa`, backdropFilter: 'blur(10px)', boxShadow: `0 0 ${isHovered ? 30 : 16}px ${p.accentColor}66`, transform: hoverLift };
    case 'vintage-wood':
      return { ...base, color: '#fde68a', background: 'linear-gradient(180deg,#5c3317,#3b1e0b)', borderColor: '#241205', boxShadow: 'inset 0 2px 0 #8b5a2b,inset 0 -3px 0 #1f0d04,0 6px 0 #1f0d04,0 10px 20px rgba(0,0,0,.4)', textShadow: '0 2px 2px #100602', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'glossy-bubble':
      return { ...base, color: '#fff', background: `radial-gradient(circle at 50% 20%,rgba(255,255,255,.7),${p.primaryColor} 60%,${p.accentColor} 100%)`, borderColor: 'rgba(255,255,255,.4)', boxShadow: `inset 0 ${isHovered ? 6 : 4}px ${isHovered ? 12 : 8}px rgba(255,255,255,.8), 0 ${isHovered ? 15 : 10}px ${isHovered ? 35 : 25}px ${p.primaryColor}${isHovered ? '88' : '66'}`, transform: isHovered && !isActive ? 'translateY(-3px) scale(1.04)' : base.transform };
    case 'sticker-peel':
      return { ...base, color: isHovered ? '#fff' : '#0f172a', background: isHovered ? p.primaryColor : '#fef08a', borderColor: '#0f172a', borderWidth: Math.max(2, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: `${isHovered ? 8 : 5}px ${isHovered ? 8 : 5}px 0 #0f172a`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'ticket-stub':
      return { ...base, color: isHovered ? '#0f172a' : '#f8fafc', background: isHovered ? p.primaryColor : '#0f172a', borderColor: p.primaryColor, borderWidth: Math.max(2, p.borderWidth), borderStyle: isHovered ? 'solid' : 'dashed', textTransform: 'uppercase', letterSpacing: '.1em', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 ${p.accentColor}`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'soft-cushion':
      return { ...base, color: isHovered ? '#fff' : '#e2e8f0', background: 'linear-gradient(145deg,#1e293b,#0f172a)', borderColor: 'rgba(255,255,255,.08)', boxShadow: isHovered ? '12px 12px 24px #090d16,-12px -12px 24px #27354a' : '8px 8px 18px #090d16,-8px -8px 18px #27354a', transform: hoverLift };
    case 'neon-groove':
      return { ...base, color: isHovered ? '#fff' : p.primaryColor, background: '#0b0f19', borderColor: '#1e293b', boxShadow: isHovered ? `inset 2px 2px 6px #04060a,inset -2px -2px 6px #121828,0 0 28px ${p.primaryColor}aa` : `inset 4px 4px 10px #04060a,inset -4px -4px 10px #121828,0 0 15px ${p.primaryColor}44`, transform: isHovered && !isActive ? 'scale(1.02)' : base.transform };
    case 'nebula-pulse':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#0f172a,${p.primaryColor}44,#0f172a)`, borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 35 : 20}px ${p.primaryColor}${isHovered ? '' : '66'}, 0 0 ${isHovered ? 60 : 40}px ${p.accentColor}33`, transform: hoverLift };
    case 'sunset-wave':
      return { ...base, color: '#fff', background: isHovered ? `linear-gradient(90deg,${p.accentColor},#f59e0b,${p.primaryColor})` : `linear-gradient(90deg,${p.primaryColor},${p.accentColor},#f59e0b)`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 12 : 8}px ${isHovered ? 35 : 25}px ${isHovered ? p.accentColor : p.primaryColor}66`, transform: hoverLift };
    case 'diamond-bevel':
      return { ...base, color: isHovered ? '#fff' : '#fef08a', background: 'linear-gradient(180deg,#18181b,#09090b)', borderColor: isHovered ? p.accentColor : p.primaryColor, fontFamily: 'Georgia,serif', letterSpacing: '.15em', boxShadow: `0 0 ${isHovered ? 25 : 15}px ${p.primaryColor}55`, transform: hoverLift };
    case 'gold-foil':
      return { ...base, color: isHovered ? '#fff' : '#fcd34d', background: isHovered ? 'linear-gradient(135deg,#171717,#262626)' : '#0a0a0a', borderColor: isHovered ? '#fef08a' : '#fcd34d', fontFamily: 'serif', letterSpacing: '.12em', boxShadow: `0 0 ${isHovered ? 25 : 12}px #fcd34d66`, transform: hoverLift };
    case 'gameboy-bevel':
      return { ...base, color: isHovered ? '#fff' : '#111827', background: isHovered ? p.primaryColor : '#9ca3af', borderColor: '#f3f4f6', fontFamily: 'monospace', boxShadow: 'inset 3px 3px 0 #e5e7eb,inset -3px -3px 0 #4b5563,0 6px 0 #374151,0 10px 15px rgba(0,0,0,.3)', transform: hoverLift };
    case 'vhs-tape':
      return { ...base, color: isHovered ? '#111827' : p.primaryColor, background: isHovered ? p.primaryColor : '#111827', borderColor: p.primaryColor, borderWidth: Math.max(2, p.borderWidth), fontFamily: 'monospace', boxShadow: isHovered ? `-5px 0 0 ${p.accentColor}, 5px 0 0 #06b6d4` : `-3px 0 0 ${p.accentColor}, 3px 0 0 #06b6d4`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'energy-wave':
      return { ...base, color: '#fff', background: '#030712', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 30 : 15}px ${p.primaryColor}aa, 0 0 ${isHovered ? 50 : 20}px ${p.accentColor}55`, transform: hoverLift };
    case 'elastic-float':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 16 : 10}px ${isHovered ? 35 : 25}px ${p.primaryColor}66`, transform: isHovered && !isActive ? 'translateY(-4px) scale(1.02)' : base.transform };
    case 'wiggle-jelly':
      return { ...base, color: '#fff', background: p.primaryColor, borderColor: 'rgba(255,255,255,.4)', boxShadow: `0 ${isHovered ? 10 : 8}px 0 ${p.accentColor}, 0 ${isHovered ? 16 : 12}px 25px ${p.primaryColor}66`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };
    case 'hud-target':
      return { ...base, color: isHovered ? '#fff' : p.primaryColor, background: isHovered ? `${p.primaryColor}22` : '#020617', borderColor: p.primaryColor, fontFamily: 'monospace', textTransform: 'uppercase', boxShadow: `0 0 ${isHovered ? 25 : 15}px ${p.primaryColor}88`, transform: hoverLift };
  }
}

function decoration(effect: V14Effect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'matrix-rain':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.35 : 0.15, background: `repeating-linear-gradient(180deg,transparent 0 6px,${p.primaryColor} 7px 8px)` }} />;
    case 'hologram-flicker':
      return <span style={{ ...common, inset: 0, opacity: 0.25, background: `repeating-linear-gradient(0deg,transparent 0 2px,${p.accentColor} 3px 4px)` }} />;
    case 'frosted-liquid':
      return <span style={{ ...common, width: 80, height: 28, left: -10, top: -5, borderRadius: '50%', background: 'rgba(255,255,255,.35)', filter: 'blur(6px)' }} />;
    case 'prism-glare':
      return <span style={{ ...common, width: 30, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)', transform: 'rotate(15deg)', transition: 'left .5s ease' }} />;
    case 'vintage-wood':
      return <span style={{ ...common, inset: 4, border: '1px solid #8b5a2b66', borderRadius: Math.max(2, p.radius - 4) }} />;
    case 'glossy-bubble':
      return <span style={{ ...common, width: '60%', height: '35%', top: 3, left: '20%', borderRadius: '999px', background: 'rgba(255,255,255,.65)', filter: 'blur(1px)' }} />;
    case 'sticker-peel':
      return <span style={{ ...common, right: -1, top: -1, width: 14, height: 14, background: '#e2e8f0', borderLeft: '2px solid #0f172a', borderBottom: '2px solid #0f172a', transform: 'rotate(90deg)' }} />;
    case 'ticket-stub':
      return <span style={{ ...common, left: 6, right: 6, top: 3, bottom: 3, border: '1px solid rgba(255,255,255,.15)', pointerEvents: 'none' }} />;
    case 'soft-cushion':
      return <span style={{ ...common, inset: 2, borderRadius: Math.max(0, p.radius - 2), border: '1px solid rgba(255,255,255,.05)' }} />;
    case 'neon-groove':
      return <span style={{ ...common, width: 6, height: 6, borderRadius: '50%', left: 10, background: p.primaryColor, boxShadow: `0 0 8px ${p.primaryColor}` }} />;
    case 'nebula-pulse':
      return <span style={{ ...common, width: 40, height: 40, right: 10, top: -10, borderRadius: '50%', background: p.accentColor, filter: 'blur(12px)', opacity: 0.4 }} />;
    case 'sunset-wave':
      return <span style={{ ...common, inset: 0, background: 'radial-gradient(circle at 80% 20%,rgba(255,255,255,.3),transparent 60%)' }} />;
    case 'diamond-bevel':
      return <span style={{ ...common, width: 6, height: 6, left: 6, top: 6, borderLeft: `2px solid ${p.primaryColor}`, borderTop: `2px solid ${p.primaryColor}` }} />;
    case 'gold-foil':
      return <span style={{ ...common, inset: 4, border: '1px solid #fcd34d44', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'gameboy-bevel':
      return <span style={{ ...common, right: 8, bottom: 6, width: 8, height: 8, borderRadius: '50%', background: '#dc2626' }} />;
    case 'vhs-tape':
      return <span style={{ ...common, right: 8, top: 4, fontSize: 9, fontFamily: 'monospace', color: p.accentColor }}>[REC]</span>;
    case 'energy-wave':
      return <span style={{ ...common, inset: -4, borderRadius: Math.max(0, p.radius + 4), border: `1px solid ${p.primaryColor}44`, opacity: isHovered ? 1 : 0.3 }} />;
    case 'elastic-float':
      return <span style={{ ...common, width: 50, height: 16, left: 10, top: 2, borderRadius: '50%', background: 'rgba(255,255,255,.25)', filter: 'blur(3px)' }} />;
    case 'wiggle-jelly':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', right: 10, top: isHovered ? 6 : 8, background: '#facc15', boxShadow: '0 0 6px #facc15', transition: 'all .2s ease' }} />;
    case 'hud-target':
      return (
        <>
          <span style={{ ...common, left: 4, top: 4, width: 6, height: 6, borderLeft: `2px solid ${p.primaryColor}`, borderTop: `2px solid ${p.primaryColor}` }} />
          <span style={{ ...common, right: 4, bottom: 4, width: 6, height: 6, borderRight: `2px solid ${p.primaryColor}`, borderBottom: `2px solid ${p.primaryColor}` }} />
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
  { id: 'cyber-matrix-rain-stream', name: 'Cyber Matrix Rain Stream', category: 'cyberpunk', tags: ['Matrix', 'Rain', 'Cyber', 'Terminal'], description: 'Dòng mã nhị phân cuộn dọc theo phông chữ đơn sắc với ánh sáng xanh neon rực rỡ.', defaultText: 'ENTER MATRIX', defaultIcon: 'Terminal', primary: '#10b981', accent: '#059669', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'matrix-rain' },
  { id: 'cyber-hologram-scanline-flicker', name: 'Hologram Scanline Flicker', category: 'cyberpunk', tags: ['Hologram', 'Flicker', 'Sci-Fi', 'Scanline'], description: 'Hiệu ứng chiếu toàn ảnh hologram nhiễu scanline với lệch màu xanh lục và tím hồng.', defaultText: 'PROJECT HOLO', defaultIcon: 'Cpu', primary: '#06b6d4', accent: '#d946ef', radius: 10, soundType: 'cyber', recommendedBg: 'dark', effect: 'hologram-flicker' },
  { id: 'glass-frosted-liquid-blur', name: 'Frosted Liquid Prism Glass', category: 'glass', tags: ['Frosted', 'Liquid', 'Blur', 'Prism'], description: 'Kính mờ xốp nhiều tầng với độ nhòe phông sâu và phản chiếu ánh sáng dải màu.', defaultText: 'Liquid Frost', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#a855f7', radius: 24, soundType: 'glass', recommendedBg: 'dark-primary', effect: 'frosted-liquid' },
  { id: 'glass-prism-dispersion-shine', name: 'Prism Dispersion Glare', category: 'glass', tags: ['Prism', 'Glare', 'Glass', 'Shimmer'], description: 'Tia sáng lăng kính quét ngang mặt kính thủy tinh khi hover tạo điểm nhấn tinh tế.', defaultText: 'Refract Beam', defaultIcon: 'Zap', primary: '#f472b6', accent: '#38bdf8', radius: 16, soundType: 'glass', recommendedBg: 'dark', effect: 'prism-glare' },
  { id: 'skeuo-vintage-mahogany-wood', name: 'Vintage Mahogany Wood Press', category: 'skeuomorphic-3d', tags: ['Wood', 'Vintage', 'Craft', '3D'], description: 'Khối gỗ xà cừ cổ điển được chạm khắc viền đồng với hiệu ứng nổi 3D chân thực.', defaultText: 'SELECT CRAFT', defaultIcon: 'Layers', primary: '#b45309', accent: '#f59e0b', radius: 8, soundType: 'mechanical', recommendedBg: 'light', effect: 'vintage-wood' },
  { id: 'skeuo-glossy-candy-bubble', name: 'Glossy Candy Pill Bubble', category: 'skeuomorphic-3d', tags: ['Candy', 'Glossy', 'Bubble', '3D'], description: 'Nút bong bóng kẹo dẻo bóng bẩy với điểm vệt sáng trên vòm và độ sâu viền.', defaultText: 'POP CANDY', defaultIcon: 'Heart', primary: '#ec4899', accent: '#f43f5e', radius: 9999, soundType: 'pop', recommendedBg: 'dark', effect: 'glossy-bubble' },
  { id: 'brutalist-sticker-corner-peel', name: 'Sticker Corner Peel Off', category: 'brutalist', tags: ['Sticker', 'Peel', 'Brutalist', 'Offset'], description: 'Miếng nhãn dán góc gấp nổi bật với bóng đổ cứng và tương phản sắc nét.', defaultText: 'STICK IT', defaultIcon: 'Flame', primary: '#eab308', accent: '#ef4444', radius: 4, soundType: 'pop', recommendedBg: 'light', effect: 'sticker-peel' },
  { id: 'brutalist-ticket-stub-cutout', name: 'Ticket Stub Dashed Cutout', category: 'brutalist', tags: ['Ticket', 'Stub', 'Brutalist', 'Dashed'], description: 'Vé mời sự kiện với đường nét đứt và bóng đổ offset góc cạnh mạnh mẽ.', defaultText: 'CLAIM TICKET', defaultIcon: 'Star', primary: '#8b5cf6', accent: '#ec4899', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'ticket-stub' },
  { id: 'neumorphic-soft-convex-cushion', name: 'Soft Convex Neumorphic Cushion', category: 'neumorphic', tags: ['Neumorphic', 'Cushion', 'Soft', 'Convex'], description: 'Thiết kế Neumorphic dạng đệm cong mềm mại với hai nguồn sáng đổ bóng tự nhiên.', defaultText: 'Soft Touch', defaultIcon: 'Smile', primary: '#6366f1', accent: '#8b5cf6', radius: 20, soundType: 'pop', recommendedBg: 'dark', effect: 'soft-cushion' },
  { id: 'neumorphic-neon-groove-ring', name: 'Neon Inset Groove Ring', category: 'neumorphic', tags: ['Neumorphic', 'Inset', 'Groove', 'Neon'], description: 'Rãnh lõm đúc chìm kết hợp đường viền neon phát sáng hiện đại.', defaultText: 'NEON GROOVE', defaultIcon: 'Zap', primary: '#06b6d4', accent: '#3b82f6', radius: 18, soundType: 'mechanical', recommendedBg: 'dark', effect: 'neon-groove' },
  { id: 'aurora-nebula-pulse-core', name: 'Nebula Pulse Core Glow', category: 'aurora-gradient', tags: ['Nebula', 'Pulse', 'Aurora', 'Space'], description: 'Dải ngân hà huyền ảo chuyển màu nhịp nhàng cùng hào quang quyến rũ.', defaultText: 'LAUNCH NEBULA', defaultIcon: 'Sparkles', primary: '#8b5cf6', accent: '#ec4899', radius: 24, soundType: 'glass', recommendedBg: 'dark', effect: 'nebula-pulse' },
  { id: 'aurora-sunset-tropical-wave', name: 'Sunset Tropical Wave Sweeper', category: 'aurora-gradient', tags: ['Sunset', 'Wave', 'Gradient', 'Tropical'], description: 'Hoàng hôn rực rỡ với sóng màu mịn màng dịch chuyển mượt mà khi tương tác.', defaultText: 'SUNSET MODE', defaultIcon: 'Sun', primary: '#f97316', accent: '#e11d48', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'sunset-wave' },
  { id: 'luxury-diamond-bevel-frame', name: 'Diamond Bevel Gold Frame', category: 'luxury-minimal', tags: ['Diamond', 'Gold', 'Luxury', 'Bevel'], description: 'Viền kim cương cắt góc mạ vàng sang trọng dành cho giao diện cao cấp.', defaultText: 'VIP SUITE', defaultIcon: 'Crown', primary: '#eab308', accent: '#fef08a', radius: 4, soundType: 'crisp', recommendedBg: 'dark', effect: 'diamond-bevel' },
  { id: 'luxury-gold-foil-monogram', name: 'Gold Foil Stamped Monogram', category: 'luxury-minimal', tags: ['Gold', 'Foil', 'Luxury', 'Stamp'], description: 'Chất liệu đen nhám ép kim vàng óng ánh kết hợp phông chữ có chân đẳng cấp.', defaultText: 'RESERVE NOW', defaultIcon: 'Star', primary: '#f59e0b', accent: '#fef08a', radius: 0, soundType: 'crisp', recommendedBg: 'dark', effect: 'gold-foil' },
  { id: 'retro-gameboy-dpad-press', name: 'Gameboy Bevel D-Pad Classic', category: 'retro-pixel', tags: ['Gameboy', 'Retro', 'D-Pad', 'Pixel'], description: 'Phím bấm máy chơi game retro phay gờ nhựa xám với đèn báo đỏ phong cách 8-bit.', defaultText: 'PRESS A BUTTON', defaultIcon: 'Play', primary: '#ef4444', accent: '#9ca3af', radius: 6, soundType: 'retro', recommendedBg: 'light', effect: 'gameboy-bevel' },
  { id: 'retro-vhs-glitch-tape-label', name: 'VHS Tape Glitch Cassette', category: 'retro-pixel', tags: ['VHS', 'Tape', 'Glitch', 'Cassette'], description: 'Thẻ băng cassette thập niên 90 với hiệu ứng nhòe dải màu vhs và mác ghi âm.', defaultText: 'PLAY TAPE', defaultIcon: 'Video', primary: '#ec4899', accent: '#06b6d4', radius: 4, soundType: 'retro', recommendedBg: 'dark', effect: 'vhs-tape' },
  { id: 'interactive-energy-wave-pulse', name: 'Energy Wave Radial Expanding', category: 'micro-interactive', tags: ['Energy', 'Wave', 'Radial', 'Pulse'], description: 'Vòng sóng năng lượng lan tỏa từ tâm ra ngoài khi di chuyển chuột qua.', defaultText: 'ACTIVATE WAVE', defaultIcon: 'Zap', primary: '#3b82f6', accent: '#a855f7', radius: 14, soundType: 'crisp', recommendedBg: 'dark', effect: 'energy-wave' },
  { id: 'interactive-elastic-floating-badge', name: 'Elastic Floating Spring Badge', category: 'micro-interactive', tags: ['Elastic', 'Float', 'Spring', 'Badge'], description: 'Thẻ nổi đàn hồi bay bổng nhịp nhàng với độ phản hồi nảy nhẹ cuốn hút.', defaultText: 'Spring Action', defaultIcon: 'ArrowUpRight', primary: '#6366f1', accent: '#d946ef', radius: 16, soundType: 'crisp', recommendedBg: 'dark', effect: 'elastic-float' },
  { id: 'playful-wiggle-jelly-pill', name: 'Wiggle Jelly Bounce Pill', category: 'playful-bubbly', tags: ['Jelly', 'Wiggle', 'Bounce', 'Playful'], description: 'Nút kẹo dẻo lúc lắc với chấm thông báo nhún nhảy siêu dễ thương.', defaultText: 'Jelly Bounce', defaultIcon: 'Smile', primary: '#10b981', accent: '#047857', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'wiggle-jelly' },
  { id: 'tech-hud-targeting-lock-on', name: 'HUD Crosshair Targeting Frame', category: 'tech-outline', tags: ['HUD', 'Targeting', 'Tech', 'Crosshair'], description: 'Khung ngắm bắn giao diện khoa học viễn tưởng với 4 góc căn chỉnh mục tiêu.', defaultText: 'LOCK TARGET', defaultIcon: 'Crosshair', primary: '#38bdf8', accent: '#0284c7', radius: 0, soundType: 'cyber', recommendedBg: 'dark', effect: 'hud-target' },
];

export const v14SignaturePresets = specs.map(createPreset);
