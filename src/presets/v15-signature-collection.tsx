import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V15Effect =
  | 'cyber-cyberdeck-key'
  | 'cyber-data-stream'
  | 'glass-crystal-prism'
  | 'glass-milky-way'
  | 'skeuo-carved-stone'
  | 'skeuo-brass-gear'
  | 'brutalist-comic-pop'
  | 'brutalist-warning-tape'
  | 'neumorphic-embossed-metal'
  | 'neumorphic-glossy-inset'
  | 'aurora-cosmic-comet'
  | 'aurora-boreal-curtain'
  | 'luxury-platinum-card'
  | 'luxury-emerald-gem'
  | 'retro-crt-screen'
  | 'retro-arcade-joystick'
  | 'interactive-ripple-ring'
  | 'interactive-magnetic-pulse'
  | 'playful-doughnut-glaze'
  | 'tech-blueprint-grid';

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
  effect: V15Effect;
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

function effectCss(effect: V15Effect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'cyber-cyberdeck-key':
      return `.${cls}{background:#0d0d15;color:${p.primaryColor};border-color:${p.primaryColor};box-shadow:inset 0 0 10px ${p.primaryColor}33,0 0 15px ${p.primaryColor}44;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));}.${cls}:hover{background:${p.primaryColor};color:#0d0d15;box-shadow:0 0 30px ${p.primaryColor}aa,0 0 50px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'cyber-data-stream':
      return `.${cls}{background:#020617;color:#f8fafc;border-color:${p.accentColor};box-shadow:0 0 18px ${p.accentColor}55;}.${cls}:hover{border-color:${p.primaryColor};box-shadow:0 0 32px ${p.primaryColor}88;transform:scale(1.03);}`;
    case 'glass-crystal-prism':
      return `.${cls}{background:rgba(255,255,255,.15);backdrop-filter:blur(20px) saturate(180%);border-color:rgba(255,255,255,.6);box-shadow:inset 0 1px 2px rgba(255,255,255,.9),0 10px 30px rgba(0,0,0,.25);}.${cls}:hover{background:rgba(255,255,255,.25);box-shadow:inset 0 1px 2px #fff,0 15px 40px ${p.primaryColor}66;transform:translateY(-3px);}`;
    case 'glass-milky-way':
      return `.${cls}{background:linear-gradient(135deg,rgba(255,255,255,.1),${p.primaryColor}22);backdrop-filter:blur(14px);border-color:rgba(255,255,255,.4);box-shadow:0 8px 25px ${p.accentColor}44;}.${cls}:hover{border-color:#fff;box-shadow:0 12px 35px ${p.primaryColor}77;transform:translateY(-2px);}`;
    case 'skeuo-carved-stone':
      return `.${cls}{background:linear-gradient(180deg,#475569,#334155);color:#f1f5f9;border-color:#1e293b;box-shadow:inset 0 2px 0 #64748b,inset 0 -3px 0 #0f172a,0 6px 0 #0f172a,0 10px 20px rgba(0,0,0,.4);text-shadow:0 2px 3px #0f172a;}.${cls}:hover{filter:brightness(1.15);transform:translateY(-2px);}`;
    case 'skeuo-brass-gear':
      return `.${cls}{background:linear-gradient(180deg,#d97706,#78350f);color:#fef3c7;border-color:#451a03;box-shadow:inset 0 2px 0 #f59e0b,inset 0 -3px 0 #292524,0 7px 0 #292524,0 12px 22px rgba(0,0,0,.45);text-shadow:0 1px 2px #292524;}.${cls}:hover{filter:brightness(1.18);transform:translateY(-2px);}`;
    case 'brutalist-comic-pop':
      return `.${cls}{background:#ffdf00;color:#000;border-color:#000;border-width:3px;box-shadow:6px 6px 0 #000;font-weight:900;text-transform:uppercase;}.${cls}:hover{background:${p.primaryColor};color:#fff;transform:translate(-3px,-3px);box-shadow:9px 9px 0 #000;}`;
    case 'brutalist-warning-tape':
      return `.${cls}{background:repeating-linear-gradient(45deg,#facc15,#facc15 15px,#000 15px,#000 30px);color:#fff;border-color:#000;border-width:3px;box-shadow:6px 6px 0 ${p.accentColor};text-shadow:0 2px 4px #000;}.${cls}:hover{transform:translate(-2px,-2px);box-shadow:9px 9px 0 ${p.accentColor};}`;
    case 'neumorphic-embossed-metal':
      return `.${cls}{background:linear-gradient(145deg,#334155,#1e293b);color:#f8fafc;border-color:rgba(255,255,255,.1);box-shadow:6px 6px 14px #0f172a,-6px -6px 14px #475569;}.${cls}:hover{box-shadow:9px 9px 20px #0f172a,-9px -9px 20px #475569;transform:translateY(-2px);}`;
    case 'neumorphic-glossy-inset':
      return `.${cls}{background:#0f172a;color:${p.primaryColor};border-color:#1e293b;box-shadow:inset 5px 5px 12px #020617,inset -5px -5px 12px #334155,0 0 15px ${p.primaryColor}33;}.${cls}:hover{color:#fff;box-shadow:inset 2px 2px 6px #020617,inset -2px -2px 6px #334155,0 0 25px ${p.primaryColor}aa;transform:scale(1.02);}`;
    case 'aurora-cosmic-comet':
      return `.${cls}{background:linear-gradient(135deg,#020617,${p.primaryColor}55,#020617);color:#fff;border-color:${p.primaryColor};box-shadow:0 0 22px ${p.primaryColor}77,0 0 45px ${p.accentColor}44;}.${cls}:hover{box-shadow:0 0 38px ${p.primaryColor},0 0 65px ${p.accentColor}77;transform:translateY(-2px);}`;
    case 'aurora-boreal-curtain':
      return `.${cls}{background:linear-gradient(120deg,${p.primaryColor},${p.accentColor},#10b981);background-size:200% 100%;color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 8px 25px ${p.primaryColor}66;}.${cls}:hover{background-position:100% 0;box-shadow:0 14px 38px ${p.accentColor}88;transform:translateY(-2px);}`;
    case 'luxury-platinum-card':
      return `.${cls}{background:linear-gradient(135deg,#e2e8f0,#94a3b8,#f8fafc);color:#0f172a;border-color:#cbd5e1;box-shadow:0 8px 20px rgba(0,0,0,.3),inset 0 1px 0 #fff;font-family:serif;letter-spacing:.12em;}.${cls}:hover{filter:brightness(1.1);box-shadow:0 12px 30px rgba(0,0,0,.4);transform:translateY(-2px);}`;
    case 'luxury-emerald-gem':
      return `.${cls}{background:linear-gradient(180deg,#065f46,#022c22);color:#a7f3d0;border-color:#34d399;box-shadow:inset 0 0 15px #34d39944,0 8px 22px rgba(0,0,0,.5);font-family:serif;letter-spacing:.15em;}.${cls}:hover{color:#fff;border-color:#6ee7b7;box-shadow:0 0 30px #34d399aa;transform:translateY(-2px);}`;
    case 'retro-crt-screen':
      return `.${cls}{background:#052e16;color:#22c55e;border-color:#22c55e;border-width:2px;box-shadow:0 0 15px #22c55e44;font-family:monospace;}.${cls}:hover{background:#22c55e;color:#052e16;box-shadow:0 0 30px #22c55e88;transform:scale(1.03);}`;
    case 'retro-arcade-joystick':
      return `.${cls}{background:#dc2626;color:#fff;border-color:#f87171;box-shadow:inset 0 3px 0 #fca5a5,inset 0 -4px 0 #7f1d1d,0 8px 0 #7f1d1d,0 12px 20px rgba(0,0,0,.4);text-shadow:0 2px 2px #7f1d1d;}.${cls}:hover{background:#ef4444;transform:translateY(-2px);}`;
    case 'interactive-ripple-ring':
      return `.${cls}{background:#0f172a;color:#fff;border-color:${p.primaryColor};box-shadow:0 0 15px ${p.primaryColor}55;}.${cls}:hover{box-shadow:0 0 30px ${p.primaryColor}aa,0 0 50px ${p.accentColor}55;transform:translateY(-2px);}`;
    case 'interactive-magnetic-pulse':
      return `.${cls}{background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});color:#fff;border-color:rgba(255,255,255,.3);box-shadow:0 10px 25px ${p.primaryColor}55;}.${cls}:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 18px 40px ${p.primaryColor}88;}`;
    case 'playful-doughnut-glaze':
      return `.${cls}{background:#f472b6;color:#fff;border-color:#fbcfe8;box-shadow:0 8px 0 #be185d,0 12px 20px rgba(0,0,0,.2);}.${cls}:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 10px 0 #be185d,0 16px 28px #f472b688;}`;
    case 'tech-blueprint-grid':
      return `.${cls}{background:#1e3a8a;color:#93c5fd;border-color:#60a5fa;border-width:1px;font-family:monospace;text-transform:uppercase;box-shadow:0 0 15px #3b82f644;}.${cls}:hover{background:#2563eb;color:#fff;box-shadow:0 0 28px #3b82f688;transform:translateY(-2px);}`;
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
    case 'cyber-cyberdeck-key':
      return { ...base, color: isHovered ? '#0d0d15' : p.primaryColor, background: isHovered ? p.primaryColor : '#0d0d15', borderColor: p.primaryColor, clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))', boxShadow: `0 0 ${isHovered ? 30 : 15}px ${p.primaryColor}${isHovered ? 'aa' : '44'}`, transform: hoverLift };
    case 'cyber-data-stream':
      return { ...base, color: '#f8fafc', background: '#020617', borderColor: isHovered ? p.primaryColor : p.accentColor, boxShadow: `0 0 ${isHovered ? 32 : 18}px ${isHovered ? p.primaryColor : p.accentColor}88`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'glass-crystal-prism':
      return { ...base, color: '#fff', background: isHovered ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.15)', backdropFilter: 'blur(20px) saturate(180%)', borderColor: 'rgba(255,255,255,.6)', boxShadow: `inset 0 1px 2px rgba(255,255,255,.9), 0 ${isHovered ? 15 : 10}px ${isHovered ? 40 : 30}px ${p.primaryColor}${isHovered ? '66' : '33'}`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'glass-milky-way':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,rgba(255,255,255,.1),${p.primaryColor}22)`, backdropFilter: 'blur(14px)', borderColor: isHovered ? '#fff' : 'rgba(255,255,255,.4)', boxShadow: `0 ${isHovered ? 12 : 8}px ${isHovered ? 35 : 25}px ${p.primaryColor}77`, transform: hoverLift };
    case 'skeuo-carved-stone':
      return { ...base, color: '#f1f5f9', background: 'linear-gradient(180deg,#475569,#334155)', borderColor: '#1e293b', boxShadow: 'inset 0 2px 0 #64748b,inset 0 -3px 0 #0f172a,0 6px 0 #0f172a,0 10px 20px rgba(0,0,0,.4)', textShadow: '0 2px 3px #0f172a', filter: isHovered ? 'brightness(1.15)' : undefined, transform: hoverLift };
    case 'skeuo-brass-gear':
      return { ...base, color: '#fef3c7', background: 'linear-gradient(180deg,#d97706,#78350f)', borderColor: '#451a03', boxShadow: 'inset 0 2px 0 #f59e0b,inset 0 -3px 0 #292524,0 7px 0 #292524,0 12px 22px rgba(0,0,0,.45)', textShadow: '0 1px 2px #292524', filter: isHovered ? 'brightness(1.18)' : undefined, transform: hoverLift };
    case 'brutalist-comic-pop':
      return { ...base, color: isHovered ? '#fff' : '#000', background: isHovered ? p.primaryColor : '#ffdf00', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), fontWeight: 900, textTransform: 'uppercase', boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #000`, transform: isHovered && !isActive ? 'translate(-3px,-3px)' : base.transform };
    case 'brutalist-warning-tape':
      return { ...base, color: '#fff', background: 'repeating-linear-gradient(45deg,#facc15,#facc15 15px,#000 15px,#000 30px)', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 ${p.accentColor}`, textShadow: '0 2px 4px #000', transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'neumorphic-embossed-metal':
      return { ...base, color: '#f8fafc', background: 'linear-gradient(145deg,#334155,#1e293b)', borderColor: 'rgba(255,255,255,.1)', boxShadow: isHovered ? '9px 9px 20px #0f172a,-9px -9px 20px #475569' : '6px 6px 14px #0f172a,-6px -6px 14px #475569', transform: hoverLift };
    case 'neumorphic-glossy-inset':
      return { ...base, color: isHovered ? '#fff' : p.primaryColor, background: '#0f172a', borderColor: '#1e293b', boxShadow: isHovered ? `inset 2px 2px 6px #020617,inset -2px -2px 6px #334155,0 0 25px ${p.primaryColor}aa` : `inset 5px 5px 12px #020617,inset -5px -5px 12px #334155,0 0 15px ${p.primaryColor}33`, transform: isHovered && !isActive ? 'scale(1.02)' : base.transform };
    case 'aurora-cosmic-comet':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#020617,${p.primaryColor}55,#020617)`, borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 38 : 22}px ${p.primaryColor}, 0 0 ${isHovered ? 65 : 45}px ${p.accentColor}77`, transform: hoverLift };
    case 'aurora-boreal-curtain':
      return { ...base, color: '#fff', background: isHovered ? `linear-gradient(120deg,${p.accentColor},#10b981,${p.primaryColor})` : `linear-gradient(120deg,${p.primaryColor},${p.accentColor},#10b981)`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 14 : 8}px ${isHovered ? 38 : 25}px ${isHovered ? p.accentColor : p.primaryColor}88`, transform: hoverLift };
    case 'luxury-platinum-card':
      return { ...base, color: '#0f172a', background: 'linear-gradient(135deg,#e2e8f0,#94a3b8,#f8fafc)', borderColor: '#cbd5e1', fontFamily: 'serif', letterSpacing: '.12em', boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,.4)' : '0 8px 20px rgba(0,0,0,.3)', filter: isHovered ? 'brightness(1.1)' : undefined, transform: hoverLift };
    case 'luxury-emerald-gem':
      return { ...base, color: isHovered ? '#fff' : '#a7f3d0', background: 'linear-gradient(180deg,#065f46,#022c22)', borderColor: isHovered ? '#6ee7b7' : '#34d399', fontFamily: 'serif', letterSpacing: '.15em', boxShadow: `0 0 ${isHovered ? 30 : 15}px #34d399aa`, transform: hoverLift };
    case 'retro-crt-screen':
      return { ...base, color: isHovered ? '#052e16' : '#22c55e', background: isHovered ? '#22c55e' : '#052e16', borderColor: '#22c55e', borderWidth: Math.max(2, p.borderWidth), fontFamily: 'monospace', boxShadow: `0 0 ${isHovered ? 30 : 15}px #22c55e88`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };
    case 'retro-arcade-joystick':
      return { ...base, color: '#fff', background: isHovered ? '#ef4444' : '#dc2626', borderColor: '#f87171', boxShadow: 'inset 0 3px 0 #fca5a5,inset 0 -4px 0 #7f1d1d,0 8px 0 #7f1d1d,0 12px 20px rgba(0,0,0,.4)', textShadow: '0 2px 2px #7f1d1d', transform: hoverLift };
    case 'interactive-ripple-ring':
      return { ...base, color: '#fff', background: '#0f172a', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 30 : 15}px ${p.primaryColor}aa, 0 0 ${isHovered ? 50 : 20}px ${p.accentColor}55`, transform: hoverLift };
    case 'interactive-magnetic-pulse':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.3)', boxShadow: `0 ${isHovered ? 18 : 10}px ${isHovered ? 40 : 25}px ${p.primaryColor}88`, transform: isHovered && !isActive ? 'translateY(-4px) scale(1.03)' : base.transform };
    case 'playful-doughnut-glaze':
      return { ...base, color: '#fff', background: '#f472b6', borderColor: '#fbcfe8', boxShadow: `0 ${isHovered ? 10 : 8}px 0 #be185d, 0 ${isHovered ? 16 : 12}px 28px #f472b688`, transform: isHovered && !isActive ? 'translateY(-2px) scale(1.04)' : base.transform };
    case 'tech-blueprint-grid':
      return { ...base, color: isHovered ? '#fff' : '#93c5fd', background: isHovered ? '#2563eb' : '#1e3a8a', borderColor: '#60a5fa', fontFamily: 'monospace', textTransform: 'uppercase', boxShadow: `0 0 ${isHovered ? 28 : 15}px #3b82f688`, transform: hoverLift };
  }
}

function decoration(effect: V15Effect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'cyber-cyberdeck-key':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.3 : 0.1, background: `repeating-linear-gradient(90deg,transparent 0 8px,${p.primaryColor} 9px 10px)` }} />;
    case 'cyber-data-stream':
      return <span style={{ ...common, inset: 0, opacity: 0.25, background: `repeating-linear-gradient(0deg,transparent 0 3px,${p.accentColor} 4px 5px)` }} />;
    case 'glass-crystal-prism':
      return <span style={{ ...common, width: 90, height: 32, left: -15, top: -8, borderRadius: '50%', background: 'rgba(255,255,255,.4)', filter: 'blur(8px)' }} />;
    case 'glass-milky-way':
      return <span style={{ ...common, width: 35, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)', transform: 'rotate(20deg)', transition: 'left .5s ease' }} />;
    case 'skeuo-carved-stone':
      return <span style={{ ...common, inset: 4, border: '1px solid #64748b55', borderRadius: Math.max(2, p.radius - 4) }} />;
    case 'skeuo-brass-gear':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', right: 8, top: 8, background: '#f59e0b', boxShadow: '0 0 6px #f59e0b' }} />;
    case 'brutalist-comic-pop':
      return <span style={{ ...common, right: -2, top: -2, width: 16, height: 16, background: '#ef4444', borderLeft: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(45deg)' }} />;
    case 'brutalist-warning-tape':
      return <span style={{ ...common, inset: 3, border: '1px solid rgba(255,255,255,.3)', pointerEvents: 'none' }} />;
    case 'neumorphic-embossed-metal':
      return <span style={{ ...common, inset: 2, borderRadius: Math.max(0, p.radius - 2), border: '1px solid rgba(255,255,255,.08)' }} />;
    case 'neumorphic-glossy-inset':
      return <span style={{ ...common, width: 6, height: 6, borderRadius: '50%', left: 10, background: p.primaryColor, boxShadow: `0 0 8px ${p.primaryColor}` }} />;
    case 'aurora-cosmic-comet':
      return <span style={{ ...common, width: 45, height: 45, right: 12, top: -12, borderRadius: '50%', background: p.accentColor, filter: 'blur(14px)', opacity: 0.45 }} />;
    case 'aurora-boreal-curtain':
      return <span style={{ ...common, inset: 0, background: 'radial-gradient(circle at 75% 25%,rgba(255,255,255,.35),transparent 60%)' }} />;
    case 'luxury-platinum-card':
      return <span style={{ ...common, width: 8, height: 8, left: 8, top: 8, borderLeft: '2px solid #0f172a', borderTop: '2px solid #0f172a' }} />;
    case 'luxury-emerald-gem':
      return <span style={{ ...common, inset: 4, border: '1px solid #34d39955', borderRadius: Math.max(0, p.radius - 4) }} />;
    case 'retro-crt-screen':
      return <span style={{ ...common, right: 8, top: 4, fontSize: 9, fontFamily: 'monospace', color: '#22c55e' }}>ONLINE</span>;
    case 'retro-arcade-joystick':
      return <span style={{ ...common, width: 10, height: 10, borderRadius: '50%', left: 10, top: 10, background: '#fef08a' }} />;
    case 'interactive-ripple-ring':
      return <span style={{ ...common, inset: -4, borderRadius: Math.max(0, p.radius + 4), border: `1px solid ${p.primaryColor}44`, opacity: isHovered ? 1 : 0.3 }} />;
    case 'interactive-magnetic-pulse':
      return <span style={{ ...common, width: 55, height: 18, left: 12, top: 2, borderRadius: '50%', background: 'rgba(255,255,255,.3)', filter: 'blur(4px)' }} />;
    case 'playful-doughnut-glaze':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', right: 10, top: isHovered ? 6 : 8, background: '#fff', boxShadow: '0 0 6px #fff', transition: 'all .2s ease' }} />;
    case 'tech-blueprint-grid':
      return (
        <>
          <span style={{ ...common, left: 4, top: 4, width: 6, height: 6, borderLeft: '2px solid #60a5fa', borderTop: '2px solid #60a5fa' }} />
          <span style={{ ...common, right: 4, bottom: 4, width: 6, height: 6, borderRight: '2px solid #60a5fa', borderBottom: '2px solid #60a5fa' }} />
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
  { id: 'cyber-cyberdeck-key', name: 'Cyberdeck Mechanical Key', category: 'cyberpunk', tags: ['Cyberdeck', 'Cyber', 'Key', 'Polygon'], description: 'Nút phím máy tính cyberdeck góc cắt vạch scanline phát sáng không gian tương lai.', defaultText: 'EXECUTE DECK', defaultIcon: 'Terminal', primary: '#38bdf8', accent: '#a855f7', radius: 0, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-cyberdeck-key' },
  { id: 'cyber-data-stream-pulse', name: 'Cyber Data Stream Pulse', category: 'cyberpunk', tags: ['Data', 'Stream', 'Cyber', 'Pulse'], description: 'Dòng dữ liệu chạy ngầm phát ra ánh huỳnh quang rực rỡ khi kích hoạt.', defaultText: 'STREAM DATA', defaultIcon: 'Cpu', primary: '#f43f5e', accent: '#38bdf8', radius: 8, soundType: 'cyber', recommendedBg: 'dark', effect: 'cyber-data-stream' },
  { id: 'glass-crystal-prism-refract', name: 'Crystal Prism Dispersion Glass', category: 'glass', tags: ['Prism', 'Crystal', 'Glass', 'Refract'], description: 'Khối kính pha lê lăng kính tán sắc ánh sáng lung linh sống động.', defaultText: 'Pha Lê Prism', defaultIcon: 'Sparkles', primary: '#818cf8', accent: '#f472b6', radius: 20, soundType: 'glass', recommendedBg: 'dark-primary', effect: 'glass-crystal-prism' },
  { id: 'glass-milky-way-galaxy', name: 'Milky Way Galaxy Blur', category: 'glass', tags: ['Milky Way', 'Galaxy', 'Glass', 'Blur'], description: 'Hiệu ứng kính mờ không gian dải ngân hà huyền ảo mượt mà.', defaultText: 'Galaxy View', defaultIcon: 'Sparkles', primary: '#c084fc', accent: '#38bdf8', radius: 14, soundType: 'glass', recommendedBg: 'dark', effect: 'glass-milky-way' },
  { id: 'skeuo-carved-slate-stone', name: 'Carved Slate Stone Press', category: 'skeuomorphic-3d', tags: ['Slate', 'Stone', 'Carved', '3D'], description: 'Bề mặt đá phiến tự nhiên được đục đẽo tỉ mỉ với độ nổi 3D chắc chắn.', defaultText: 'SLATE BLOCK', defaultIcon: 'Layers', primary: '#64748b', accent: '#334155', radius: 6, soundType: 'mechanical', recommendedBg: 'light', effect: 'skeuo-carved-stone' },
  { id: 'skeuo-brass-gear-switch', name: 'Brass Gear Industrial Switch', category: 'skeuomorphic-3d', tags: ['Brass', 'Gear', 'Industrial', 'Steampunk'], description: 'Nút bánh răng bằng đồng thau mạ kim cổ điển phong cách steampunk.', defaultText: 'ENGAGE GEAR', defaultIcon: 'Zap', primary: '#d97706', accent: '#f59e0b', radius: 10, soundType: 'mechanical', recommendedBg: 'dark', effect: 'skeuo-brass-gear' },
  { id: 'brutalist-comic-pop-burst', name: 'Comic Pop Explosion Label', category: 'brutalist', tags: ['Comic', 'Pop', 'Brutalist', 'Burst'], description: 'Phong cách truyện tranh pop-art đầy màu sắc với đường viền đen đậm.', defaultText: 'BOOM POP!', defaultIcon: 'Flame', primary: '#ef4444', accent: '#3b82f6', radius: 4, soundType: 'pop', recommendedBg: 'light', effect: 'brutalist-comic-pop' },
  { id: 'brutalist-warning-tape-border', name: 'Warning Caution Tape Ribbon', category: 'brutalist', tags: ['Warning', 'Tape', 'Caution', 'Brutalist'], description: 'Băng dính cảnh báo sọc vàng đen thu hút mọi sự chú ý ngay lập tức.', defaultText: 'CAUTION ZONE', defaultIcon: 'Shield', primary: '#facc15', accent: '#ef4444', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'brutalist-warning-tape' },
  { id: 'neumorphic-embossed-titanium', name: 'Embossed Titanium Neumorphism', category: 'neumorphic', tags: ['Titanium', 'Embossed', 'Neumorphism', 'Metal'], description: 'Tấm titan dập nổi Neumorphic tinh xảo sắc nét trên nền tối.', defaultText: 'TITANIUM TOUCH', defaultIcon: 'Cpu', primary: '#94a3b8', accent: '#64748b', radius: 16, soundType: 'pop', recommendedBg: 'dark', effect: 'neumorphic-embossed-metal' },
  { id: 'neumorphic-glossy-inset-well', name: 'Glossy Inset Glow Well', category: 'neumorphic', tags: ['Glossy', 'Inset', 'Neumorphic', 'Glow'], description: 'Giếng lõm phát sáng inset hai tầng bóng đổ nội tại sang trọng.', defaultText: 'INSET GLOW', defaultIcon: 'Zap', primary: '#06b6d4', accent: '#3b82f6', radius: 18, soundType: 'mechanical', recommendedBg: 'dark', effect: 'neumorphic-glossy-inset' },
  { id: 'aurora-cosmic-comet-trail', name: 'Cosmic Comet Trail Burst', category: 'aurora-gradient', tags: ['Comet', 'Cosmic', 'Aurora', 'Trail'], description: 'Vệt sao băng vũ trụ phát sáng tạo hiệu ứng ánh sáng lôi cuốn.', defaultText: 'COMET STRIKE', defaultIcon: 'Sparkles', primary: '#a855f7', accent: '#ec4899', radius: 20, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-cosmic-comet' },
  { id: 'aurora-boreal-curtain-flow', name: 'Boreal Curtain Glow Wave', category: 'aurora-gradient', tags: ['Boreal', 'Curtain', 'Aurora', 'Wave'], description: 'Màn cực quang phương bắc mềm mại chuyển màu rực rỡ.', defaultText: 'AURORA FLOW', defaultIcon: 'Sun', primary: '#10b981', accent: '#06b6d4', radius: 9999, soundType: 'glass', recommendedBg: 'dark', effect: 'aurora-boreal-curtain' },
  { id: 'luxury-platinum-card-plate', name: 'Platinum VIP Member Card', category: 'luxury-minimal', tags: ['Platinum', 'VIP', 'Luxury', 'Card'], description: 'Thẻ bạch kim VIP lấp lánh phản chiếu đẳng cấp doanh nhân.', defaultText: 'PLATINUM ACCESS', defaultIcon: 'Crown', primary: '#cbd5e1', accent: '#f8fafc', radius: 6, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-platinum-card' },
  { id: 'luxury-emerald-gem-facet', name: 'Emerald Gem Facet Cut', category: 'luxury-minimal', tags: ['Emerald', 'Gem', 'Facet', 'Luxury'], description: 'Viên ngọc bảo lục bảo giác cắt kiệt tác với chiều sâu lấp lánh.', defaultText: 'EMERALD CLUB', defaultIcon: 'Star', primary: '#10b981', accent: '#6ee7b7', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'luxury-emerald-gem' },
  { id: 'retro-crt-monitor-green', name: 'Retro CRT Terminal Monitor', category: 'retro-pixel', tags: ['CRT', 'Terminal', 'Retro', 'Green'], description: 'Màn hình máy tính đồ họa ống tia âm cực chữ xanh lục cổ điển.', defaultText: 'RUN COMMAND', defaultIcon: 'Terminal', primary: '#22c55e', accent: '#15803d', radius: 4, soundType: 'retro', recommendedBg: 'dark', effect: 'retro-crt-screen' },
  { id: 'retro-arcade-red-joystick', name: 'Arcade Cabinet Red Button', category: 'retro-pixel', tags: ['Arcade', 'Joystick', 'Retro', 'Cabinet'], description: 'Nút đỏ máy game thùng arcade truyền thống với cảm giác nhấn cực đã.', defaultText: 'INSERT COIN', defaultIcon: 'Play', primary: '#ef4444', accent: '#b91c1c', radius: 9999, soundType: 'retro', recommendedBg: 'light', effect: 'retro-arcade-joystick' },
  { id: 'interactive-ripple-wave-ring', name: 'Expanding Ripple Radar Wave', category: 'micro-interactive', tags: ['Ripple', 'Radar', 'Wave', 'Interactive'], description: 'Sóng gợn rada lan tỏa mượt mà khi người dùng tương tác.', defaultText: 'RADAR WAVE', defaultIcon: 'Zap', primary: '#3b82f6', accent: '#6366f1', radius: 12, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-ripple-ring' },
  { id: 'interactive-magnetic-spring-pull', name: 'Magnetic Spring Elastic Pull', category: 'micro-interactive', tags: ['Magnetic', 'Spring', 'Elastic', 'Pull'], description: 'Lực hút từ tính nảy sinh động với biên độ di chuyển linh hoạt.', defaultText: 'MAGNET PULL', defaultIcon: 'ArrowUpRight', primary: '#8b5cf6', accent: '#d946ef', radius: 18, soundType: 'crisp', recommendedBg: 'dark', effect: 'interactive-magnetic-pulse' },
  { id: 'playful-doughnut-strawberry-glaze', name: 'Strawberry Glazed Doughnut', category: 'playful-bubbly', tags: ['Strawberry', 'Doughnut', 'Glaze', 'Playful'], description: 'Bánh donut dâu tây ngọt ngào phủ lớp kem bóng bắt mắt.', defaultText: 'SWEET TREAT', defaultIcon: 'Smile', primary: '#f472b6', accent: '#be185d', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'playful-doughnut-glaze' },
  { id: 'tech-blueprint-architect-grid', name: 'Architect Blueprint Line Grid', category: 'tech-outline', tags: ['Blueprint', 'Architect', 'Grid', 'Tech'], description: 'Bản vẽ thiết kế kiến trúc xanh lam với lưới viền tọa độ chính xác.', defaultText: 'BLUEPRINT PLAN', defaultIcon: 'Crosshair', primary: '#3b82f6', accent: '#1d4ed8', radius: 0, soundType: 'cyber', recommendedBg: 'dark', effect: 'tech-blueprint-grid' },
];

export const v15SignaturePresets = specs.map(createPreset);
