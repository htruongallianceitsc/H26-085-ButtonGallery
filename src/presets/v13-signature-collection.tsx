import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type SignatureEffect =
  | 'laser-grid'
  | 'reactor-ring'
  | 'crystal-bubble'
  | 'caustic-edge'
  | 'leather-stitch'
  | 'arcade-metal'
  | 'ransom-cutout'
  | 'hazard-stripe'
  | 'clay-pill'
  | 'concave-led'
  | 'plasma-orbit'
  | 'spectrum-chase'
  | 'velvet-gold'
  | 'editorial-reveal'
  | 'pixel-rpg'
  | 'synthwave-grid'
  | 'morph-arrow'
  | 'orbit-dot'
  | 'confetti-burst'
  | 'bubble-outline';

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
  effect: SignatureEffect;
}

const sizes: Record<CustomParams['size'], { padding: string; fontSize: string }> = {
  sm: { padding: '9px 16px', fontSize: '12px' },
  md: { padding: '13px 24px', fontSize: '14px' },
  lg: { padding: '16px 30px', fontSize: '16px' },
  xl: { padding: '19px 36px', fontSize: '18px' },
};

const buttonClass = (id: string) => `bc-${id}`;

function baseCss(spec: SignatureSpec, p: CustomParams) {
  const cls = buttonClass(spec.id);
  const effect = effectCss(spec.effect, p, cls);
  return `/* ${spec.name} */\n.${cls} {\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 13px 24px;\n  color: #fff;\n  font: 800 14px/1.1 Inter, ui-sans-serif, system-ui, sans-serif;\n  letter-spacing: .04em;\n  border-style: solid;\n  border-width: ${p.borderWidth}px;\n  border-radius: ${p.radius}px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform .22s ease, box-shadow .22s ease, filter .22s ease, background .22s ease;\n}\n.${cls} > * { position: relative; z-index: 2; }\n.${cls}:active { transform: translateY(2px) scale(.98); }\n${effect}`;
}

function effectCss(effect: SignatureEffect, p: CustomParams, cls: string): string {
  switch (effect) {
    case 'laser-grid':
      return `.${cls}{background:linear-gradient(135deg,#07111f 0 48%,${p.primaryColor}22 48% 52%,#07111f 52%);border-color:${p.primaryColor};clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);box-shadow:0 0 0 1px ${p.primaryColor}55,0 0 24px ${p.primaryColor}55;}.` + `${cls}:hover{background:repeating-linear-gradient(90deg,#07111f 0 11px,${p.primaryColor}22 12px 13px),linear-gradient(135deg,#07111f,${p.accentColor}22);box-shadow:0 0 32px ${p.primaryColor}88;transform:translateY(-2px);}`;
    case 'reactor-ring':
      return `.${cls}{background:radial-gradient(circle at 50% 50%,${p.primaryColor}33 0 22%,#07111f 24% 100%);border-color:${p.primaryColor};box-shadow:inset 0 0 18px ${p.primaryColor}55,0 0 18px ${p.primaryColor}66;}.` + `${cls}:hover{box-shadow:inset 0 0 30px ${p.accentColor}77,0 0 34px ${p.primaryColor};transform:scale(1.04);}`;
    case 'crystal-bubble':
      return `.${cls}{color:#f8fbff;background:linear-gradient(145deg,rgba(255,255,255,.28),${p.primaryColor}25);border-color:rgba(255,255,255,.6);backdrop-filter:blur(14px) saturate(145%);box-shadow:inset 0 1px 0 rgba(255,255,255,.75),inset 0 -8px 18px ${p.primaryColor}22,0 12px 28px rgba(0,0,0,.22);}.` + `${cls}:hover{filter:saturate(1.25) brightness(1.12);transform:translateY(-3px) scale(1.02);box-shadow:inset 0 1px 0 #fff,0 16px 38px ${p.primaryColor}44;}`;
    case 'caustic-edge':
      return `.${cls}{color:#eafcff;background:linear-gradient(110deg,${p.primaryColor}18,rgba(255,255,255,.12),${p.accentColor}18);border-color:${p.primaryColor}aa;backdrop-filter:blur(10px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18),0 8px 24px rgba(0,0,0,.28);}.` + `${cls}::after{content:"";position:absolute;inset:-80% -20%;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.75) 48%,transparent 60%);transform:translateX(-70%) rotate(8deg);transition:transform .65s ease;}.` + `${cls}:hover::after{transform:translateX(70%) rotate(8deg);}.` + `${cls}:hover{border-color:#fff;box-shadow:0 0 26px ${p.accentColor}55;}`;
    case 'leather-stitch':
      return `.${cls}{color:#fff6df;background:linear-gradient(#6b3f28,#3f261b);border-color:#2b170f;box-shadow:inset 0 0 0 2px #9d6c47,inset 0 0 0 5px #4a2c1e,0 7px 0 #24140d,0 11px 18px rgba(0,0,0,.38);text-shadow:0 1px 1px #1f120c;}.` + `${cls}::after{content:"";position:absolute;inset:5px;border:1px dashed #f2d59d88;border-radius:max(2px,calc(${p.radius}px - 5px));}.` + `${cls}:hover{filter:brightness(1.12);transform:translateY(-2px);}`;
    case 'arcade-metal':
      return `.${cls}{color:#151515;background:linear-gradient(180deg,#f7f7f7 0%,#9ca3af 45%,#f5f5f5 48%,#6b7280 100%);border-color:#111827;box-shadow:inset 0 2px 0 #fff,inset 0 -3px 0 #4b5563,0 7px 0 #111827,0 10px 18px rgba(0,0,0,.38);text-shadow:0 1px 0 #fff;}.` + `${cls}:hover{background:linear-gradient(180deg,#fff,#d1d5db 44%,${p.primaryColor} 47%,#6b7280);transform:translateY(-2px);}`;
    case 'ransom-cutout':
      return `.${cls}{color:#111;background:#fff;border-color:#111;border-width:3px;box-shadow:7px 7px 0 ${p.accentColor};transform:rotate(-1deg);text-transform:uppercase;}.` + `${cls}:hover{transform:rotate(1deg) translate(-2px,-2px);box-shadow:10px 10px 0 ${p.primaryColor};}`;
    case 'hazard-stripe':
      return `.${cls}{color:#0a0a0a;background:repeating-linear-gradient(135deg,${p.primaryColor} 0 14px,${p.primaryColor} 14px 22px,#111 22px 24px);border-color:#0a0a0a;border-width:3px;box-shadow:6px 6px 0 ${p.accentColor};text-shadow:0 1px rgba(255,255,255,.28);}.` + `${cls}:hover{filter:brightness(1.08);transform:translate(-2px,-2px);box-shadow:9px 9px 0 ${p.accentColor};}`;
    case 'clay-pill':
      return `.${cls}{color:#fff;background:linear-gradient(145deg,${p.primaryColor},${p.accentColor});border-color:rgba(255,255,255,.18);box-shadow:10px 10px 24px ${p.primaryColor}55,-6px -6px 18px ${p.accentColor}22,inset 2px 2px 5px rgba(255,255,255,.28),inset -3px -3px 8px rgba(0,0,0,.18);}.` + `${cls}:hover{transform:translateY(-3px);box-shadow:14px 16px 30px ${p.primaryColor}66,inset 2px 2px 6px rgba(255,255,255,.35);}`;
    case 'concave-led':
      return `.${cls}{color:#d7ffe4;background:#18231d;border-color:#283a2f;box-shadow:inset 7px 7px 14px #0b110e,inset -7px -7px 14px #25362c,0 7px 18px rgba(0,0,0,.35);}.` + `${cls}::before{content:"";width:7px;height:7px;border-radius:50%;background:${p.primaryColor};box-shadow:0 0 10px ${p.primaryColor};margin-right:2px;}.` + `${cls}:hover{color:#fff;box-shadow:inset 4px 4px 9px #0b110e,inset -4px -4px 9px #2e4436,0 0 22px ${p.primaryColor}44;}`;
    case 'plasma-orbit':
      return `.${cls}{background:#080811;border-color:${p.primaryColor};box-shadow:0 0 12px ${p.primaryColor}88,inset 0 0 18px ${p.accentColor}33;}.` + `${cls}::before{content:"";position:absolute;width:24px;height:24px;border:2px solid ${p.accentColor};border-radius:50%;left:8px;box-shadow:0 0 12px ${p.accentColor};animation:bc-orbit-pulse 1.4s ease-in-out infinite alternate;}.` + `${cls}:hover{box-shadow:0 0 28px ${p.primaryColor},0 0 50px ${p.accentColor}55;transform:translateY(-2px);}@keyframes bc-orbit-pulse{to{transform:scale(1.22);opacity:.45;}}`;
    case 'spectrum-chase':
      return `.${cls}{border-color:transparent;background:linear-gradient(#0b1020,#0b1020) padding-box,conic-gradient(from 0deg,${p.primaryColor},${p.accentColor},#22d3ee,${p.primaryColor}) border-box;box-shadow:0 0 18px ${p.primaryColor}44;}.` + `${cls}:hover{background:linear-gradient(#10172a,#10172a) padding-box,conic-gradient(from 180deg,${p.accentColor},#22d3ee,${p.primaryColor},${p.accentColor}) border-box;box-shadow:0 0 30px ${p.accentColor}66;transform:translateY(-2px);}`;
    case 'velvet-gold':
      return `.${cls}{color:#f8e8b0;background:linear-gradient(180deg,#3a0f22,#190914);border-color:${p.primaryColor};box-shadow:inset 0 0 18px #0009,inset 0 1px 0 ${p.primaryColor}88,0 10px 24px #0008;font-family:Georgia,serif;letter-spacing:.12em;}.` + `${cls}:hover{color:#fff3c4;border-color:${p.accentColor};box-shadow:inset 0 0 22px #0008,0 0 24px ${p.primaryColor}44;transform:translateY(-2px);}`;
    case 'editorial-reveal':
      return `.${cls}{color:#f8fafc;background:transparent;border-color:#64748b;border-width:1px;border-radius:0!important;letter-spacing:.18em;text-transform:uppercase;}.` + `${cls}::after{content:"";position:absolute;left:0;bottom:0;width:25%;height:2px;background:${p.primaryColor};transition:width .28s ease;}.` + `${cls}:hover{border-color:#f8fafc;background:#ffffff0d;transform:translateY(-2px);}.` + `${cls}:hover::after{width:100%;}`;
    case 'pixel-rpg':
      return `.${cls}{color:#fffbe6;background:${p.primaryColor};border-color:#fff;border-width:3px;border-radius:0!important;box-shadow:0 0 0 3px #111,6px 6px 0 #111;image-rendering:pixelated;font-family:monospace;letter-spacing:.05em;}.` + `${cls}:hover{background:${p.accentColor};transform:translate(-2px,-2px);box-shadow:0 0 0 3px #111,9px 9px 0 #111;}`;
    case 'synthwave-grid':
      return `.${cls}{color:#fff;background:linear-gradient(180deg,#1b0935,${p.primaryColor}55),repeating-linear-gradient(90deg,transparent 0 9px,${p.accentColor}22 10px 11px);border-color:${p.accentColor};clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%);box-shadow:0 0 18px ${p.primaryColor}88,6px 6px 0 #22d3ee55;text-shadow:2px 2px 0 ${p.accentColor};}.` + `${cls}:hover{filter:hue-rotate(18deg) brightness(1.16);box-shadow:0 0 28px ${p.primaryColor},8px 8px 0 #22d3ee88;transform:translateY(-2px);}`;
    case 'morph-arrow':
      return `.${cls}{color:${p.primaryColor};background:transparent;border-color:${p.primaryColor};border-width:1px;box-shadow:inset 0 -2px 0 ${p.primaryColor}55;}.` + `${cls}:hover{color:#07111f;background:${p.primaryColor};padding-right:32px;box-shadow:0 8px 20px ${p.primaryColor}33;transform:translateY(-2px);}`;
    case 'orbit-dot':
      return `.${cls}{color:#eff6ff;background:#0a1020;border-color:#334155;box-shadow:0 8px 24px #0007;}.` + `${cls}::after{content:"";position:absolute;width:8px;height:8px;border-radius:50%;background:${p.primaryColor};right:8px;top:8px;box-shadow:0 0 12px ${p.primaryColor};transition:transform .4s ease;}.` + `${cls}:hover::after{transform:translate(-100px,26px);}.` + `${cls}:hover{border-color:${p.primaryColor};box-shadow:0 0 22px ${p.primaryColor}44;}`;
    case 'confetti-burst':
      return `.${cls}{color:#fff;background:linear-gradient(135deg,${p.primaryColor},${p.accentColor});border-color:#fff6;box-shadow:0 8px 0 ${p.accentColor}99,0 12px 24px #0005;}.` + `${cls}::before{content:"✦  ●  ◆";position:absolute;top:-20px;left:10px;color:#fde047;opacity:0;transition:all .35s ease;}.` + `${cls}:hover::before{top:4px;opacity:1;transform:rotate(16deg);}.` + `${cls}:hover{transform:translateY(-3px) rotate(-1deg);filter:saturate(1.2);}`;
    case 'bubble-outline':
      return `.${cls}{color:${p.primaryColor};background:${p.primaryColor}0d;border-color:${p.primaryColor};border-width:3px;box-shadow:inset 0 0 0 3px #fff1,0 0 0 4px ${p.primaryColor}22;}.` + `${cls}:hover{color:#fff;background:${p.primaryColor};box-shadow:0 0 0 7px ${p.primaryColor}22,0 10px 26px ${p.primaryColor}44;transform:scale(1.06);}`;
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
    case 'laser-grid':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,#07111f 0 48%,${p.primaryColor}33 48% 52%,#07111f 52%)`, borderColor: p.primaryColor, clipPath: 'polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)', boxShadow: `0 0 ${isHovered ? 30 : 18}px ${p.primaryColor}88`, transform: hoverLift };
    case 'reactor-ring':
      return { ...base, color: '#fff', background: `radial-gradient(circle,${p.primaryColor}44 0 20%,#07111f 22% 100%)`, borderColor: p.primaryColor, boxShadow: `inset 0 0 20px ${p.accentColor}55,0 0 ${isHovered ? 30 : 16}px ${p.primaryColor}88`, transform: isHovered && !isActive ? 'scale(1.04)' : base.transform };
    case 'crystal-bubble':
      return { ...base, color: '#fff', background: `linear-gradient(145deg,rgba(255,255,255,.28),${p.primaryColor}30)`, borderColor: 'rgba(255,255,255,.65)', backdropFilter: 'blur(14px) saturate(145%)', boxShadow: `inset 0 1px 0 rgba(255,255,255,.8),0 ${isHovered ? 16 : 10}px ${isHovered ? 34 : 24}px rgba(0,0,0,.25)`, transform: hoverLift };
    case 'caustic-edge':
      return { ...base, color: '#eaffff', background: `linear-gradient(110deg,${p.primaryColor}25,rgba(255,255,255,.13),${p.accentColor}20)`, borderColor: isHovered ? '#fff' : `${p.primaryColor}aa`, backdropFilter: 'blur(10px)', boxShadow: `0 0 ${isHovered ? 26 : 12}px ${p.accentColor}55`, transform: hoverLift };
    case 'leather-stitch':
      return { ...base, color: '#fff4d6', background: 'linear-gradient(#6b3f28,#3f261b)', borderColor: '#2b170f', boxShadow: 'inset 0 0 0 2px #9d6c47,inset 0 0 0 5px #4a2c1e,0 7px 0 #24140d,0 11px 18px rgba(0,0,0,.38)', textShadow: '0 1px 1px #1f120c', transform: hoverLift };
    case 'arcade-metal':
      return { ...base, color: '#151515', background: `linear-gradient(180deg,#fff,#9ca3af 44%,${isHovered ? p.primaryColor : '#f5f5f5'} 48%,#6b7280)`, borderColor: '#111827', boxShadow: 'inset 0 2px 0 #fff,inset 0 -3px 0 #4b5563,0 7px 0 #111827,0 10px 18px rgba(0,0,0,.38)', textShadow: '0 1px 0 #fff', transform: hoverLift };
    case 'ransom-cutout':
      return { ...base, color: '#111', background: '#fff', borderColor: '#111', borderWidth: 3, boxShadow: `${isHovered ? 10 : 7}px ${isHovered ? 10 : 7}px 0 ${isHovered ? p.primaryColor : p.accentColor}`, transform: isActive ? 'translateY(2px)' : isHovered ? 'rotate(1deg) translate(-2px,-2px)' : 'rotate(-1deg)', textTransform: 'uppercase' };
    case 'hazard-stripe':
      return { ...base, color: '#090909', background: `repeating-linear-gradient(135deg,${p.primaryColor} 0 14px,${p.primaryColor} 14px 22px,#111 22px 24px)`, borderColor: '#0a0a0a', borderWidth: 3, boxShadow: `${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 ${p.accentColor}`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'clay-pill':
      return { ...base, color: '#fff', background: `linear-gradient(145deg,${p.primaryColor},${p.accentColor})`, borderColor: 'rgba(255,255,255,.2)', boxShadow: `10px 10px 24px ${p.primaryColor}55,-6px -6px 18px ${p.accentColor}22,inset 2px 2px 5px rgba(255,255,255,.3),inset -3px -3px 8px rgba(0,0,0,.18)`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };
    case 'concave-led':
      return { ...base, color: '#d7ffe4', background: '#18231d', borderColor: '#283a2f', boxShadow: 'inset 7px 7px 14px #0b110e,inset -7px -7px 14px #25362c,0 7px 18px rgba(0,0,0,.35)', transform: hoverLift };
    case 'plasma-orbit':
      return { ...base, color: '#fff', background: '#080811', borderColor: p.primaryColor, boxShadow: `0 0 ${isHovered ? 30 : 14}px ${p.primaryColor},inset 0 0 18px ${p.accentColor}44`, transform: hoverLift };
    case 'spectrum-chase':
      return { ...base, color: '#fff', borderColor: 'transparent', background: `linear-gradient(#0b1020,#0b1020) padding-box,conic-gradient(from ${isHovered ? '180deg' : '0deg'},${p.primaryColor},${p.accentColor},#22d3ee,${p.primaryColor}) border-box`, boxShadow: `0 0 ${isHovered ? 28 : 16}px ${p.accentColor}55`, transform: hoverLift };
    case 'velvet-gold':
      return { ...base, color: '#f8e8b0', background: 'linear-gradient(180deg,#3a0f22,#190914)', borderColor: isHovered ? p.accentColor : p.primaryColor, boxShadow: `inset 0 0 18px #0009,0 0 ${isHovered ? 22 : 8}px ${p.primaryColor}44`, fontFamily: 'Georgia,serif', letterSpacing: '.12em', transform: hoverLift };
    case 'editorial-reveal':
      return { ...base, color: '#f8fafc', background: isHovered ? '#ffffff0d' : 'transparent', borderColor: isHovered ? '#f8fafc' : '#64748b', borderRadius: 0, letterSpacing: '.18em', textTransform: 'uppercase', transform: hoverLift };
    case 'pixel-rpg':
      return { ...base, color: '#fffbe6', background: isHovered ? p.accentColor : p.primaryColor, borderColor: '#fff', borderWidth: 3, borderRadius: 0, boxShadow: `0 0 0 3px #111,${isHovered ? 9 : 6}px ${isHovered ? 9 : 6}px 0 #111`, fontFamily: 'monospace', transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };
    case 'synthwave-grid':
      return { ...base, color: '#fff', background: `linear-gradient(180deg,#1b0935,${p.primaryColor}66),repeating-linear-gradient(90deg,transparent 0 9px,${p.accentColor}22 10px 11px)`, borderColor: p.accentColor, clipPath: 'polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)', boxShadow: `0 0 ${isHovered ? 28 : 18}px ${p.primaryColor}99,6px 6px 0 #22d3ee66`, textShadow: `2px 2px 0 ${p.accentColor}`, transform: hoverLift };
    case 'morph-arrow':
      return { ...base, color: isHovered ? '#07111f' : p.primaryColor, background: isHovered ? p.primaryColor : 'transparent', borderColor: p.primaryColor, boxShadow: `inset 0 -2px 0 ${p.primaryColor}55`, transform: hoverLift };
    case 'orbit-dot':
      return { ...base, color: '#eff6ff', background: '#0a1020', borderColor: isHovered ? p.primaryColor : '#334155', boxShadow: `0 0 ${isHovered ? 22 : 10}px ${p.primaryColor}44`, transform: hoverLift };
    case 'confetti-burst':
      return { ...base, color: '#fff', background: `linear-gradient(135deg,${p.primaryColor},${p.accentColor})`, borderColor: '#ffffff66', boxShadow: `0 8px 0 ${p.accentColor}99,0 12px 24px #0005`, transform: isActive ? base.transform : isHovered ? 'translateY(-3px) rotate(-1deg)' : undefined };
    case 'bubble-outline':
      return { ...base, color: isHovered ? '#fff' : p.primaryColor, background: isHovered ? p.primaryColor : `${p.primaryColor}0d`, borderColor: p.primaryColor, borderWidth: 3, boxShadow: isHovered ? `0 0 0 7px ${p.primaryColor}22,0 10px 26px ${p.primaryColor}44` : `inset 0 0 0 3px #ffffff12,0 0 0 4px ${p.primaryColor}22`, transform: isHovered && !isActive ? 'scale(1.06)' : base.transform };
  }
}

function decoration(effect: SignatureEffect, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (effect) {
    case 'laser-grid':
      return <span style={{ ...common, inset: 0, opacity: 0.28, background: `repeating-linear-gradient(90deg,transparent 0 11px,${p.primaryColor} 12px 13px)` }} />;
    case 'reactor-ring':
      return <span style={{ ...common, width: 34, height: 34, left: 8, borderRadius: '50%', border: `2px solid ${p.accentColor}`, boxShadow: `0 0 12px ${p.accentColor}`, transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} />;
    case 'crystal-bubble':
      return <span style={{ ...common, width: 60, height: 24, right: -8, top: 2, borderRadius: '50%', background: 'rgba(255,255,255,.22)', filter: 'blur(4px)' }} />;
    case 'caustic-edge':
      return <span style={{ ...common, width: 28, height: '180%', top: '-40%', left: isHovered ? '82%' : '-18%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)', transform: 'rotate(12deg)', transition: 'left .5s ease' }} />;
    case 'leather-stitch':
      return <span style={{ ...common, inset: 5, border: '1px dashed #f2d59d88', borderRadius: Math.max(2, p.radius - 5) }} />;
    case 'arcade-metal':
      return <span style={{ ...common, inset: '3px 6px auto', height: 2, background: 'rgba(255,255,255,.75)', borderRadius: 999 }} />;
    case 'ransom-cutout':
      return <span style={{ ...common, width: 42, height: 42, right: -12, top: -18, background: `${p.primaryColor}22`, transform: 'rotate(18deg)' }} />;
    case 'hazard-stripe':
      return <span style={{ ...common, inset: 3, border: '1px solid rgba(255,255,255,.28)' }} />;
    case 'clay-pill':
      return <span style={{ ...common, width: 70, height: 24, left: 12, top: 3, borderRadius: '50%', background: 'rgba(255,255,255,.16)', filter: 'blur(2px)' }} />;
    case 'concave-led':
      return <span style={{ ...common, width: 7, height: 7, borderRadius: '50%', left: 12, background: p.primaryColor, boxShadow: `0 0 10px ${p.primaryColor}` }} />;
    case 'plasma-orbit':
      return <span style={{ ...common, width: isHovered ? 29 : 22, height: isHovered ? 29 : 22, left: 8, borderRadius: '50%', border: `2px solid ${p.accentColor}`, boxShadow: `0 0 12px ${p.accentColor}`, transition: 'all .22s ease' }} />;
    case 'spectrum-chase':
      return <span style={{ ...common, inset: 2, borderRadius: Math.max(0, p.radius - 2), border: '1px solid rgba(255,255,255,.12)' }} />;
    case 'velvet-gold':
      return <span style={{ ...common, left: 10, right: 10, bottom: 5, height: 1, background: `linear-gradient(90deg,transparent,${p.primaryColor},transparent)` }} />;
    case 'editorial-reveal':
      return <span style={{ ...common, left: 0, bottom: 0, height: 2, width: isHovered ? '100%' : '25%', background: p.primaryColor, transition: 'width .28s ease' }} />;
    case 'pixel-rpg':
      return <span style={{ ...common, width: 6, height: 6, right: 8, top: 7, background: '#fffbe6', boxShadow: '8px 8px 0 #fffbe6' }} />;
    case 'synthwave-grid':
      return <span style={{ ...common, left: 0, right: 0, bottom: 0, height: '45%', opacity: .3, background: `repeating-linear-gradient(90deg,transparent 0 12px,${p.accentColor} 13px 14px)` }} />;
    case 'morph-arrow':
      return <span style={{ ...common, right: isHovered ? 10 : 18, opacity: isHovered ? 1 : .5, transition: 'right .22s ease' }}>→</span>;
    case 'orbit-dot':
      return <span style={{ ...common, width: 8, height: 8, borderRadius: '50%', right: isHovered ? '80%' : 8, top: isHovered ? '72%' : 8, background: p.primaryColor, boxShadow: `0 0 12px ${p.primaryColor}`, transition: 'all .4s ease' }} />;
    case 'confetti-burst':
      return isHovered ? <span style={{ ...common, left: 8, top: 2, color: '#fde047', fontSize: 10, transform: 'rotate(12deg)' }}>✦ ● ◆</span> : null;
    case 'bubble-outline':
      return <span style={{ ...common, inset: isHovered ? -8 : -3, borderRadius: Math.max(8, p.radius + 8), border: `2px solid ${p.primaryColor}33`, opacity: isHovered ? 1 : .35, transition: 'all .22s ease' }} />;
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
  { id:'cyber-laser-grid-lock', name:'Cyber Laser Grid Lock', category:'cyberpunk', tags:['Laser','Grid','Cyber','Clip'], description:'Khung laser góc cắt với lưới năng lượng chuyển động, hợp CTA phong cách terminal/sci-fi.', defaultText:'LOCK TARGET', defaultIcon:'Cpu', primary:'#22d3ee', accent:'#a855f7', radius:8, soundType:'cyber', recommendedBg:'dark', effect:'laser-grid' },
  { id:'cyber-reactor-core-ring', name:'Reactor Core Ring', category:'cyberpunk', tags:['Reactor','Core','Sci-Fi','Glow'], description:'Lõi phản ứng phát sáng nằm trong nền tối, tạo cảm giác nút điều khiển trên bảng console tương lai.', defaultText:'ENGAGE CORE', defaultIcon:'Zap', primary:'#34d399', accent:'#22d3ee', radius:16, soundType:'cyber', recommendedBg:'dark', effect:'reactor-ring' },
  { id:'glass-crystal-bubble', name:'Crystal Bubble Refraction', category:'glass', tags:['Crystal','Bubble','Glass','Refraction'], description:'Nút kính bong bóng với vùng highlight cong và chiều sâu khúc xạ mềm.', defaultText:'Crystal View', defaultIcon:'Sparkles', primary:'#60a5fa', accent:'#c084fc', radius:9999, soundType:'glass', recommendedBg:'dark-primary', effect:'crystal-bubble' },
  { id:'glass-caustic-edge', name:'Caustic Edge Sweep', category:'glass', tags:['Caustic','Sweep','Glass','Shimmer'], description:'Viền kính trong với vệt sáng caustic quét qua bề mặt khi hover.', defaultText:'Reflect Light', defaultIcon:'Sparkles', primary:'#67e8f9', accent:'#818cf8', radius:18, soundType:'glass', recommendedBg:'dark', effect:'caustic-edge' },
  { id:'skeuo-leather-stitch', name:'Leather Stitch Press', category:'skeuomorphic-3d', tags:['Leather','Stitch','Tactile','Classic'], description:'Bề mặt da ép nổi, chỉ may bên trong và bóng đế dày tạo cảm giác thủ công.', defaultText:'OPEN CASE', defaultIcon:'Layers', primary:'#c08457', accent:'#f2d59d', radius:12, soundType:'mechanical', recommendedBg:'light', effect:'leather-stitch' },
  { id:'skeuo-arcade-metal', name:'Arcade Metal Switch', category:'skeuomorphic-3d', tags:['Metal','Arcade','Chrome','Switch'], description:'Nút kim loại kiểu máy arcade với highlight chrome, gờ sâu và cảm giác nhấn vật lý.', defaultText:'START ENGINE', defaultIcon:'Play', primary:'#ef4444', accent:'#f59e0b', radius:10, soundType:'mechanical', recommendedBg:'dark', effect:'arcade-metal' },
  { id:'brutalist-ransom-cutout', name:'Ransom Cutout Punch', category:'brutalist', tags:['Ransom','Cutout','Brutalist','Print'], description:'Khối giấy trắng nghiêng nhẹ, viền mực đen và shadow lệch màu như poster cắt dán.', defaultText:'MAKE NOISE', defaultIcon:'Flame', primary:'#f97316', accent:'#fb7185', radius:2, soundType:'pop', recommendedBg:'light', effect:'ransom-cutout' },
  { id:'brutalist-hazard-stripe', name:'Hazard Stripe Offset', category:'brutalist', tags:['Hazard','Stripe','Industrial','Offset'], description:'Sọc cảnh báo công nghiệp, viền dày và bóng offset cứng cho hành động cần chú ý.', defaultText:'DANGER ACTION', defaultIcon:'Shield', primary:'#facc15', accent:'#ef4444', radius:4, soundType:'crisp', recommendedBg:'light', effect:'hazard-stripe' },
  { id:'neumorphic-clay-pill', name:'Clay Soft Pill', category:'neumorphic', tags:['Clay','Soft','Pastel','Pill'], description:'Dạng clay mềm nhiều lớp bóng trong/ngoài, tạo cảm giác nút cao su cao cấp.', defaultText:'Soft Launch', defaultIcon:'Heart', primary:'#8b5cf6', accent:'#ec4899', radius:9999, soundType:'pop', recommendedBg:'light', effect:'clay-pill' },
  { id:'neumorphic-concave-led', name:'Concave LED Console', category:'neumorphic', tags:['Concave','LED','Inset','Console'], description:'Nút lõm tối với bóng inset hai chiều và đèn LED trạng thái phát sáng.', defaultText:'SYSTEM READY', defaultIcon:'Cpu', primary:'#4ade80', accent:'#22c55e', radius:14, soundType:'mechanical', recommendedBg:'dark', effect:'concave-led' },
  { id:'aurora-plasma-orbit', name:'Plasma Orbit Pulse', category:'aurora-gradient', tags:['Plasma','Orbit','Glow','Energy'], description:'Viền plasma phát sáng cùng vòng quỹ đạo phụ tạo cảm giác năng lượng đang nén.', defaultText:'IGNITE PLASMA', defaultIcon:'Zap', primary:'#a855f7', accent:'#22d3ee', radius:20, soundType:'cyber', recommendedBg:'dark', effect:'plasma-orbit' },
  { id:'aurora-spectrum-chase', name:'Spectrum Border Chase', category:'aurora-gradient', tags:['Spectrum','Border','Chase','Gradient'], description:'Viền quang phổ conic đổi hướng khi hover, phù hợp CTA hiện đại trên nền tối.', defaultText:'CHASE COLOR', defaultIcon:'Sparkles', primary:'#ec4899', accent:'#8b5cf6', radius:16, soundType:'glass', recommendedBg:'dark', effect:'spectrum-chase' },
  { id:'luxury-velvet-gold', name:'Velvet Gold Frame', category:'luxury-minimal', tags:['Velvet','Gold','Luxury','Serif'], description:'Nền nhung đỏ đậm, viền kim loại vàng và typography serif mang chất boutique.', defaultText:'PRIVATE ACCESS', defaultIcon:'Star', primary:'#d4af37', accent:'#f6e7a1', radius:8, soundType:'crisp', recommendedBg:'dark', effect:'velvet-gold' },
  { id:'luxury-editorial-reveal', name:'Editorial Line Reveal', category:'luxury-minimal', tags:['Editorial','Minimal','Underline','Mono'], description:'Nút tối giản kiểu tạp chí với tracking rộng và đường underline mở rộng khi hover.', defaultText:'DISCOVER MORE', defaultIcon:'ArrowRight', primary:'#f8fafc', accent:'#94a3b8', radius:0, soundType:'crisp', recommendedBg:'dark', effect:'editorial-reveal' },
  { id:'retro-pixel-rpg-dialog', name:'Pixel RPG Dialog', category:'retro-pixel', tags:['Pixel','RPG','Dialog','8-Bit'], description:'Nút hội thoại RPG với khung pixel nhiều lớp, shadow ô vuông và font mono.', defaultText:'CONTINUE QUEST', defaultIcon:'Play', primary:'#2563eb', accent:'#7c3aed', radius:0, soundType:'retro', recommendedBg:'dark', effect:'pixel-rpg' },
  { id:'retro-synthwave-chrome-grid', name:'Synthwave Chrome Grid', category:'retro-pixel', tags:['Synthwave','Chrome','Grid','80s'], description:'Gradient tím điện, lưới cyan và cạnh cắt kiểu poster synthwave thập niên 80.', defaultText:'ENTER 2088', defaultIcon:'Terminal', primary:'#d946ef', accent:'#22d3ee', radius:6, soundType:'retro', recommendedBg:'dark', effect:'synthwave-grid' },
  { id:'interactive-morphing-arrow', name:'Morphing Arrow CTA', category:'micro-interactive', tags:['Arrow','Morph','CTA','Motion'], description:'CTA tối giản biến nền và kéo mũi tên về phía trước khi hover.', defaultText:'Explore Flow', defaultIcon:'ArrowRight', primary:'#38bdf8', accent:'#0ea5e9', radius:12, soundType:'crisp', recommendedBg:'dark', effect:'morph-arrow' },
  { id:'interactive-orbiting-dot', name:'Orbiting Dot Focus', category:'micro-interactive', tags:['Orbit','Dot','Focus','Motion'], description:'Điểm sáng di chuyển quanh vùng nút khi hover, tạo phản hồi thị giác nhẹ nhưng rõ.', defaultText:'Focus Mode', defaultIcon:'Cpu', primary:'#60a5fa', accent:'#22d3ee', radius:14, soundType:'crisp', recommendedBg:'dark', effect:'orbit-dot' },
  { id:'playful-confetti-burst', name:'Confetti Burst Pop', category:'playful-bubbly', tags:['Confetti','Burst','Playful','Party'], description:'Gradient rực rỡ, shadow dày và cụm confetti bật lên khi hover.', defaultText:'CELEBRATE!', defaultIcon:'Sparkles', primary:'#f97316', accent:'#ec4899', radius:18, soundType:'pop', recommendedBg:'dark', effect:'confetti-burst' },
  { id:'playful-bubble-outline', name:'Bubble Outline Bounce', category:'playful-bubbly', tags:['Bubble','Outline','Bounce','Playful'], description:'Viền bong bóng hai lớp phồng nhẹ khi hover, phù hợp giao diện vui tươi hoặc onboarding.', defaultText:'BOUNCE IN', defaultIcon:'Heart', primary:'#22c55e', accent:'#14b8a6', radius:9999, soundType:'pop', recommendedBg:'light', effect:'bubble-outline' },
];

export const v13SignaturePresets = specs.map(createPreset);
