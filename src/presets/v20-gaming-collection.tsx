import React from 'react';
import type { ButtonCategory, ButtonDefinition, CustomParams } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

type V20GameEffect =
  | 'game-cyber-hud-hexagon-frame'
  | 'game-rpg-gold-gilded-crest'
  | 'game-fantasy-rune-stone-engraved'
  | 'game-sci-fi-mecha-armor-plate'
  | 'game-pixel-dungeon-brick-8bit'
  | 'game-steampunk-copper-gear-valves'
  | 'game-mythic-excalibur-holy-light'
  | 'game-dark-souls-ebon-flame'
  | 'game-space-commander-shield-hex'
  | 'game-arcade-neonsign-insert-coin'
  | 'game-valorant-tactile-bracket-red'
  | 'game-league-hextech-gem-crystal'
  | 'game-cyber-glitch-core-terminal'
  | 'game-dungeon-boss-health-bar'
  | 'game-mmo-quest-complete-banner'
  | 'game-cyberpunk-neon-katana-slash'
  | 'game-elden-ring-tarnish-gold'
  | 'game-overwatch-futuristic-visor'
  | 'game-retro-gameboy-cartridge'
  | 'game-anime-magical-girl-star';

interface GamingSpec {
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
  effect: V20GameEffect;
  frameSvgDataUri?: string;
}

// SVG Base64 / Data URI patterns for game frames, borders, and textures
const SVG_FRAMES = {
  // Hexagon Cyber Grid Base64 SVG Frame
  cyberHexFrame: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><path d="M10,2 L90,2 L98,10 L98,30 L90,38 L10,38 L2,30 L2,10 Z" fill="none" stroke="%2338bdf8" stroke-width="2"/><polygon points="2,10 10,2 18,2 10,10" fill="%2338bdf8" opacity="0.6"/><polygon points="98,30 90,38 82,38 90,30" fill="%2338bdf8" opacity="0.6"/></svg>`,

  // Medieval RPG Gold Ornate Filigree Frame
  rpgGoldFiligree: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><rect x="3" y="3" width="94" height="34" rx="4" fill="none" stroke="%23eab308" stroke-width="2"/><path d="M3,10 L10,3 M97,10 L90,3 M3,30 L10,37 M97,30 L90,37" stroke="%23fef08a" stroke-width="2"/><circle cx="5" cy="5" r="2" fill="%23eab308"/><circle cx="95" cy="5" r="2" fill="%23eab308"/><circle cx="5" cy="35" r="2" fill="%23eab308"/><circle cx="95" cy="35" r="2" fill="%23eab308"/></svg>`,

  // Ancient Elder Rune Stone Frame
  runeStoneFrame: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><rect x="2" y="2" width="96" height="36" rx="6" fill="none" stroke="%230284c7" stroke-width="2" stroke-dasharray="8,2"/><path d="M12,2 L88,2 M12,38 L88,38" stroke="%2338bdf8" stroke-width="1.5"/></svg>`,

  // Sci-Fi Mecha Armor Segmented Border
  mechaArmorFrame: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><path d="M0,0 L15,0 L20,5 L80,5 L85,0 L100,0 L100,10 L95,15 L95,25 L100,30 L100,40 L85,40 L80,35 L20,35 L15,40 L0,40 Z" fill="none" stroke="%2364748b" stroke-width="2"/></svg>`,

  // Pixel Art 8-bit Dungeon Brick Texture
  pixelBrickPattern: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect x="0" y="0" width="8" height="8" fill="%23334155"/><rect x="8" y="0" width="8" height="8" fill="%231e293b"/><rect x="0" y="8" width="8" height="8" fill="%231e293b"/><rect x="8" y="8" width="8" height="8" fill="%23334155"/><line x1="0" y1="8" x2="16" y2="8" stroke="%230f172a" stroke-width="1"/></svg>`,

  // Steampunk Brass Rivets & Gears Frame
  steampunkGearFrame: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><rect x="2" y="2" width="96" height="36" rx="4" fill="none" stroke="%23b45309" stroke-width="2"/><circle cx="8" cy="8" r="2.5" fill="%23d97706" stroke="%2378350f" stroke-width="1"/><circle cx="92" cy="8" r="2.5" fill="%23d97706" stroke="%2378350f" stroke-width="1"/><circle cx="8" cy="32" r="2.5" fill="%23d97706" stroke="%2378350f" stroke-width="1"/><circle cx="92" cy="32" r="2.5" fill="%23d97706" stroke="%2378350f" stroke-width="1"/></svg>`,

  // Hextech Crystal Gem Geometry
  hextechGemFrame: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><polygon points="12,2 88,2 98,20 88,38 12,38 2,20" fill="none" stroke="%2306b6d4" stroke-width="2"/><line x1="12" y1="2" x2="2" y2="20" stroke="%2367e8f9" stroke-width="1.5"/><line x1="88" y1="2" x2="98" y2="20" stroke="%2367e8f9" stroke-width="1.5"/></svg>`,

  // Tactical Corner Brackets (FPS Style)
  tacticalBrackets: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><path d="M2,12 L2,2 L12,2 M88,2 L98,2 L98,12 M98,28 L98,38 L88,38 M12,38 L2,38 L2,28" fill="none" stroke="%23ef4444" stroke-width="2.5"/></svg>`,

  // Circuit Board Copper Interconnect Base64 Pattern
  pcbCircuitPattern: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,12 L8,12 L12,16 L24,16 M12,0 L12,8 L16,12 L16,24" fill="none" stroke="%2310b981" stroke-width="1" opacity="0.35"/><circle cx="8" cy="12" r="1.5" fill="%2310b981"/><circle cx="16" cy="12" r="1.5" fill="%2310b981"/></svg>`,
};

const sizes: Record<CustomParams['size'], { padding: string; fontSize: string }> = {
  sm: { padding: '8px 16px', fontSize: '12px' },
  md: { padding: '12px 24px', fontSize: '14px' },
  lg: { padding: '16px 30px', fontSize: '16px' },
  xl: { padding: '18px 36px', fontSize: '18px' },
};

const buttonClass = (id: string) => `bc-game-${id}`;

function baseCss(spec: GamingSpec, p: CustomParams) {
  const cls = buttonClass(spec.id);
  const effect = effectCss(spec.effect, p, cls, spec.frameSvgDataUri);
  return `/* Gaming: ${spec.name} */\n.${cls} {\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 24px;\n  color: #fff;\n  font: 800 14px/1.1 'Inter', system-ui, sans-serif;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  border-style: solid;\n  border-width: ${p.borderWidth}px;\n  border-radius: ${p.radius}px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform .22s cubic-bezier(.16,1,.3,1), box-shadow .22s ease, background .22s ease, border-color .22s ease;\n}\n.${cls} > * { position: relative; z-index: 2; }\n.${cls}:active { transform: translateY(2px) scale(.98); }\n${effect}`;
}

function effectCss(effect: V20GameEffect, p: CustomParams, cls: string, frameUri?: string): string {
  switch (effect) {
    case 'game-cyber-hud-hexagon-frame':
      return `.${cls}{background:#020617;color:#38bdf8;border-color:#0284c7;border-image:url("${frameUri || SVG_FRAMES.cyberHexFrame}") 8 stretch;box-shadow:inset 0 0 16px #0284c744,0 0 24px #38bdf855;}.${cls}:hover{color:#fff;background:#0369a1;box-shadow:0 0 40px #38bdf8aa;transform:translateY(-2px) scale(1.02);}`;

    case 'game-rpg-gold-gilded-crest':
      return `.${cls}{background:linear-gradient(180deg,#78350f,#451a03);color:#fef08a;border-color:#eab308;box-shadow:inset 0 2px 0 #fde047,0 6px 0 #78350f,0 10px 24px rgba(0,0,0,.6);font-family:serif;}.${cls}:hover{background:linear-gradient(180deg,#92400e,#78350f);box-shadow:inset 0 2px 0 #fde047,0 8px 0 #78350f,0 14px 32px #eab30866;transform:translateY(-2px);}`;

    case 'game-fantasy-rune-stone-engraved':
      return `.${cls}{background:#1e293b;color:#38bdf8;border-color:#0284c7;box-shadow:inset 0 0 12px #0284c755,0 8px 20px rgba(0,0,0,.5);}.${cls}:hover{color:#7dd3fc;background:#0f172a;box-shadow:inset 0 0 20px #38bdf888,0 0 35px #0284c7aa;transform:translateY(-2px);}`;

    case 'game-sci-fi-mecha-armor-plate':
      return `.${cls}{background:linear-gradient(135deg,#334155,#1e293b);color:#f1f5f9;border-color:#64748b;box-shadow:inset 0 1px 0 #94a3b8,0 6px 0 #0f172a;}.${cls}:hover{background:linear-gradient(135deg,#475569,#334155);box-shadow:inset 0 1px 0 #cbd5e1,0 8px 0 #0f172a,0 0 25px #38bdf866;transform:translateY(-2px);}`;

    case 'game-pixel-dungeon-brick-8bit':
      return `.${cls}{background:#0f172a;color:#facc15;border-color:#000;border-width:3px;box-shadow:4px 4px 0 #000;font-family:monospace;}.${cls}:hover{background:#1e293b;color:#fff;box-shadow:6px 6px 0 #facc15;transform:translate(-2px,-2px);}`;

    case 'game-steampunk-copper-gear-valves':
      return `.${cls}{background:linear-gradient(180deg,#78350f,#451a03);color:#fef3c7;border-color:#b45309;box-shadow:inset 0 2px 0 #d97706,0 6px 0 #292524;}.${cls}:hover{background:linear-gradient(180deg,#92400e,#78350f);box-shadow:0 0 28px #b45309aa;transform:translateY(-2px);}`;

    case 'game-mythic-excalibur-holy-light':
      return `.${cls}{background:linear-gradient(135deg,#1e1b4b,#312e81);color:#fff;border-color:#eab308;box-shadow:0 0 25px #fde047aa,0 0 50px #38bdf866;}.${cls}:hover{box-shadow:0 0 45px #fde047,0 0 80px #38bdf8aa;transform:scale(1.03);}`;

    case 'game-dark-souls-ebon-flame':
      return `.${cls}{background:#09090b;color:#ef4444;border-color:#dc2626;box-shadow:inset 0 0 15px #dc262666,0 0 20px #000;}.${cls}:hover{color:#fff;background:#7f1d1d;box-shadow:0 0 40px #ef4444bb;transform:translateY(-2px);}`;

    case 'game-space-commander-shield-hex':
      return `.${cls}{background:linear-gradient(135deg,#020617,#0f172a);color:#22d3ee;border-color:#0891b2;box-shadow:0 0 20px #22d3ee55;}.${cls}:hover{color:#fff;background:#0891b2;box-shadow:0 0 42px #22d3eeaa;transform:translateY(-2px);}`;

    case 'game-arcade-neonsign-insert-coin':
      return `.${cls}{background:#020617;color:#f43f5e;border-color:#f43f5e;box-shadow:0 0 18px #f43f5e77;font-family:monospace;}.${cls}:hover{background:#f43f5e;color:#020617;box-shadow:0 0 40px #f43f5ebb;transform:scale(1.04);}`;

    case 'game-valorant-tactile-bracket-red':
      return `.${cls}{background:#0f172a;color:#ef4444;border-color:#ef4444;border-width:2px;box-shadow:0 0 15px #ef444444;}.${cls}:hover{background:#ef4444;color:#fff;box-shadow:0 0 32px #ef4444aa;transform:translateY(-2px);}`;

    case 'game-league-hextech-gem-crystal':
      return `.${cls}{background:linear-gradient(135deg,#083344,#164e63);color:#67e8f9;border-color:#06b6d4;box-shadow:inset 0 0 15px #06b6d466,0 0 25px #06b6d455;}.${cls}:hover{color:#fff;background:#0891b2;box-shadow:0 0 45px #67e8f9aa;transform:translateY(-2px);}`;

    case 'game-cyber-glitch-core-terminal':
      return `.${cls}{background:#052e16;color:#4ade80;border-color:#22c55e;font-family:monospace;box-shadow:0 0 16px #22c55e44;}.${cls}:hover{background:#166534;color:#fff;box-shadow:0 0 32px #22c55ebb;transform:translateY(-2px);}`;

    case 'game-dungeon-boss-health-bar':
      return `.${cls}{background:linear-gradient(90deg,#991b1b 0%,#dc2626 70%,#450a0a 100%);color:#fff;border-color:#fca5a5;box-shadow:0 6px 20px rgba(0,0,0,.6);}.${cls}:hover{filter:brightness(1.2);transform:scale(1.02);}`;

    case 'game-mmo-quest-complete-banner':
      return `.${cls}{background:linear-gradient(180deg,#f59e0b,#b45309);color:#fff;border-color:#fef08a;box-shadow:0 8px 25px #f59e0b66;font-family:serif;}.${cls}:hover{background:linear-gradient(180deg,#fbbf24,#d97706);box-shadow:0 12px 35px #f59e0baa;transform:translateY(-3px);}`;

    case 'game-cyberpunk-neon-katana-slash':
      return `.${cls}{background:#09090b;color:#f43f5e;border-color:#f43f5e;box-shadow:0 0 20px #f43f5e66;}.${cls}:hover{background:#f43f5e;color:#fff;box-shadow:0 0 45px #f43f5eaa;transform:translateY(-2px);}`;

    case 'game-elden-ring-tarnish-gold':
      return `.${cls}{background:linear-gradient(180deg,#292524,#1c1917);color:#fde047;border-color:#ca8a04;box-shadow:0 8px 22px rgba(0,0,0,.7);font-family:serif;}.${cls}:hover{color:#fff;border-color:#fef08a;box-shadow:0 0 35px #ca8a04aa;transform:translateY(-2px);}`;

    case 'game-overwatch-futuristic-visor':
      return `.${cls}{background:#020617;color:#38bdf8;border-color:#0284c7;box-shadow:0 0 22px #0284c766;}.${cls}:hover{background:#0284c7;color:#fff;box-shadow:0 0 45px #38bdf8bb;transform:scale(1.03);}`;

    case 'game-retro-gameboy-cartridge':
      return `.${cls}{background:#94a3b8;color:#0f172a;border-color:#475569;box-shadow:inset 0 2px 0 #cbd5e1,0 6px 0 #334155;font-weight:900;}.${cls}:hover{background:#cbd5e1;transform:translateY(-2px);}`;

    case 'game-anime-magical-girl-star':
      return `.${cls}{background:linear-gradient(135deg,#f472b6,#ec4899);color:#fff;border-color:#fbcfe8;box-shadow:0 8px 25px #f472b6aa,0 0 40px #fbcfe888;}.${cls}:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 14px 38px #f472b6cc;}`;
  }
}

function liveStyle(spec: GamingSpec, p: CustomParams, isHovered?: boolean, isActive?: boolean): React.CSSProperties {
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
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    borderStyle: 'solid',
    borderWidth: p.borderWidth,
    borderRadius: p.radius,
    transition: 'all .22s cubic-bezier(.16,1,.3,1)',
    overflow: 'hidden',
    cursor: p.disabled ? 'not-allowed' : 'pointer',
    opacity: p.disabled ? 0.45 : 1,
    transform: isActive ? 'translateY(2px) scale(.98)' : undefined,
  };

  const hoverLift = isHovered && !isActive ? 'translateY(-2px)' : base.transform;

  switch (spec.effect) {
    case 'game-cyber-hud-hexagon-frame':
      return { ...base, color: isHovered ? '#fff' : '#38bdf8', background: isHovered ? '#0369a1' : '#020617', borderColor: '#0284c7', boxShadow: `0 0 ${isHovered ? 40 : 24}px #38bdf8${isHovered ? 'aa' : '55'}`, transform: hoverLift };

    case 'game-rpg-gold-gilded-crest':
      return { ...base, color: '#fef08a', background: isHovered ? 'linear-gradient(180deg,#92400e,#78350f)' : 'linear-gradient(180deg,#78350f,#451a03)', borderColor: '#eab308', fontFamily: 'serif', boxShadow: `inset 0 2px 0 #fde047, 0 6px 0 #78350f, 0 ${isHovered ? 14 : 10}px ${isHovered ? 32 : 24}px rgba(0,0,0,.6)`, transform: hoverLift };

    case 'game-fantasy-rune-stone-engraved':
      return { ...base, color: isHovered ? '#7dd3fc' : '#38bdf8', background: isHovered ? '#0f172a' : '#1e293b', borderColor: '#0284c7', boxShadow: isHovered ? '0 0 35px #0284c7aa' : '0 8px 20px rgba(0,0,0,.5)', transform: hoverLift };

    case 'game-sci-fi-mecha-armor-plate':
      return { ...base, color: '#f1f5f9', background: isHovered ? 'linear-gradient(135deg,#475569,#334155)' : 'linear-gradient(135deg,#334155,#1e293b)', borderColor: '#64748b', boxShadow: isHovered ? '0 0 25px #38bdf866' : 'inset 0 1px 0 #94a3b8,0 6px 0 #0f172a', transform: hoverLift };

    case 'game-pixel-dungeon-brick-8bit':
      return { ...base, color: isHovered ? '#fff' : '#facc15', background: isHovered ? '#1e293b' : '#0f172a', borderColor: '#000', borderWidth: Math.max(3, p.borderWidth), fontFamily: 'monospace', boxShadow: `${isHovered ? 6 : 4}px ${isHovered ? 6 : 4}px 0 ${isHovered ? '#facc15' : '#000'}`, transform: isHovered && !isActive ? 'translate(-2px,-2px)' : base.transform };

    case 'game-steampunk-copper-gear-valves':
      return { ...base, color: '#fef3c7', background: isHovered ? 'linear-gradient(180deg,#92400e,#78350f)' : 'linear-gradient(180deg,#78350f,#451a03)', borderColor: '#b45309', boxShadow: isHovered ? '0 0 28px #b45309aa' : 'inset 0 2px 0 #d97706,0 6px 0 #292524', transform: hoverLift };

    case 'game-mythic-excalibur-holy-light':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#1e1b4b,#312e81)', borderColor: '#eab308', boxShadow: `0 0 ${isHovered ? 45 : 25}px #fde047, 0 0 ${isHovered ? 80 : 50}px #38bdf8aa`, transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };

    case 'game-dark-souls-ebon-flame':
      return { ...base, color: isHovered ? '#fff' : '#ef4444', background: isHovered ? '#7f1d1d' : '#09090b', borderColor: '#dc2626', boxShadow: isHovered ? '0 0 40px #ef4444bb' : 'inset 0 0 15px #dc262666', transform: hoverLift };

    case 'game-space-commander-shield-hex':
      return { ...base, color: isHovered ? '#fff' : '#22d3ee', background: isHovered ? '#0891b2' : 'linear-gradient(135deg,#020617,#0f172a)', borderColor: '#0891b2', boxShadow: `0 0 ${isHovered ? 42 : 20}px #22d3ee${isHovered ? 'aa' : '55'}`, transform: hoverLift };

    case 'game-arcade-neonsign-insert-coin':
      return { ...base, color: isHovered ? '#020617' : '#f43f5e', background: isHovered ? '#f43f5e' : '#020617', borderColor: '#f43f5e', fontFamily: 'monospace', boxShadow: `0 0 ${isHovered ? 40 : 18}px #f43f5e${isHovered ? 'bb' : '77'}`, transform: isHovered && !isActive ? 'scale(1.04)' : base.transform };

    case 'game-valorant-tactile-bracket-red':
      return { ...base, color: isHovered ? '#fff' : '#ef4444', background: isHovered ? '#ef4444' : '#0f172a', borderColor: '#ef4444', borderWidth: Math.max(2, p.borderWidth), boxShadow: isHovered ? '0 0 32px #ef4444aa' : '0 0 15px #ef444444', transform: hoverLift };

    case 'game-league-hextech-gem-crystal':
      return { ...base, color: isHovered ? '#fff' : '#67e8f9', background: isHovered ? '#0891b2' : 'linear-gradient(135deg,#083344,#164e63)', borderColor: '#06b6d4', boxShadow: isHovered ? '0 0 45px #67e8f9aa' : 'inset 0 0 15px #06b6d466,0 0 25px #06b6d455', transform: hoverLift };

    case 'game-cyber-glitch-core-terminal':
      return { ...base, color: isHovered ? '#fff' : '#4ade80', background: isHovered ? '#166534' : '#052e16', borderColor: '#22c55e', fontFamily: 'monospace', boxShadow: isHovered ? '0 0 32px #22c55ebb' : '0 0 16px #22c55e44', transform: hoverLift };

    case 'game-dungeon-boss-health-bar':
      return { ...base, color: '#fff', background: 'linear-gradient(90deg,#991b1b 0%,#dc2626 70%,#450a0a 100%)', borderColor: '#fca5a5', filter: isHovered ? 'brightness(1.2)' : undefined, transform: isHovered && !isActive ? 'scale(1.02)' : base.transform };

    case 'game-mmo-quest-complete-banner':
      return { ...base, color: '#fff', background: isHovered ? 'linear-gradient(180deg,#fbbf24,#d97706)' : 'linear-gradient(180deg,#f59e0b,#b45309)', borderColor: '#fef08a', fontFamily: 'serif', boxShadow: `0 ${isHovered ? 12 : 8}px ${isHovered ? 35 : 25}px #f59e0b${isHovered ? 'aa' : '66'}`, transform: isHovered && !isActive ? 'translateY(-3px)' : base.transform };

    case 'game-cyberpunk-neon-katana-slash':
      return { ...base, color: isHovered ? '#fff' : '#f43f5e', background: isHovered ? '#f43f5e' : '#09090b', borderColor: '#f43f5e', boxShadow: isHovered ? '0 0 45px #f43f5eaa' : '0 0 20px #f43f5e66', transform: hoverLift };

    case 'game-elden-ring-tarnish-gold':
      return { ...base, color: isHovered ? '#fff' : '#fde047', background: 'linear-gradient(180deg,#292524,#1c1917)', borderColor: isHovered ? '#fef08a' : '#ca8a04', fontFamily: 'serif', boxShadow: isHovered ? '0 0 35px #ca8a04aa' : '0 8px 22px rgba(0,0,0,.7)', transform: hoverLift };

    case 'game-overwatch-futuristic-visor':
      return { ...base, color: isHovered ? '#fff' : '#38bdf8', background: isHovered ? '#0284c7' : '#020617', borderColor: '#0284c7', boxShadow: isHovered ? '0 0 45px #38bdf8bb' : '0 0 22px #0284c766', transform: isHovered && !isActive ? 'scale(1.03)' : base.transform };

    case 'game-retro-gameboy-cartridge':
      return { ...base, color: '#0f172a', background: isHovered ? '#cbd5e1' : '#94a3b8', borderColor: '#475569', boxShadow: 'inset 0 2px 0 #cbd5e1,0 6px 0 #334155', transform: hoverLift };

    case 'game-anime-magical-girl-star':
      return { ...base, color: '#fff', background: 'linear-gradient(135deg,#f472b6,#ec4899)', borderColor: '#fbcfe8', boxShadow: `0 ${isHovered ? 14 : 8}px ${isHovered ? 38 : 25}px #f472b6${isHovered ? 'cc' : 'aa'}`, transform: isHovered && !isActive ? 'translateY(-3px) scale(1.04)' : base.transform };
  }
}

function decoration(spec: GamingSpec, p: CustomParams, isHovered?: boolean): React.ReactNode {
  const common: React.CSSProperties = { position: 'absolute', pointerEvents: 'none', zIndex: 0 };
  switch (spec.effect) {
    case 'game-cyber-hud-hexagon-frame':
      return <span style={{ ...common, inset: 0, opacity: 0.35, backgroundImage: `url("${SVG_FRAMES.cyberHexFrame}")`, backgroundSize: 'cover' }} />;

    case 'game-rpg-gold-gilded-crest':
      return <span style={{ ...common, inset: 0, opacity: 0.8, backgroundImage: `url("${SVG_FRAMES.rpgGoldFiligree}")`, backgroundSize: '100% 100%' }} />;

    case 'game-fantasy-rune-stone-engraved':
      return <span style={{ ...common, inset: 0, opacity: 0.5, backgroundImage: `url("${SVG_FRAMES.runeStoneFrame}")`, backgroundSize: '100% 100%' }} />;

    case 'game-sci-fi-mecha-armor-plate':
      return <span style={{ ...common, inset: 0, opacity: 0.6, backgroundImage: `url("${SVG_FRAMES.mechaArmorFrame}")`, backgroundSize: '100% 100%' }} />;

    case 'game-pixel-dungeon-brick-8bit':
      return <span style={{ ...common, inset: 0, opacity: 0.25, backgroundImage: `url("${SVG_FRAMES.pixelBrickPattern}")` }} />;

    case 'game-steampunk-copper-gear-valves':
      return <span style={{ ...common, inset: 0, opacity: 0.7, backgroundImage: `url("${SVG_FRAMES.steampunkGearFrame}")`, backgroundSize: '100% 100%' }} />;

    case 'game-mythic-excalibur-holy-light':
      return <span style={{ ...common, width: 40, height: '200%', top: '-50%', left: isHovered ? '85%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent)', transform: 'rotate(20deg)', transition: 'left .5s ease' }} />;

    case 'game-dark-souls-ebon-flame':
      return <span style={{ ...common, inset: 0, opacity: isHovered ? 0.4 : 0.15, background: 'radial-gradient(circle at 50% 100%, #ef4444 0%, transparent 70%)' }} />;

    case 'game-space-commander-shield-hex':
      return <span style={{ ...common, inset: 0, opacity: 0.3, backgroundImage: `url("${SVG_FRAMES.cyberHexFrame}")`, backgroundSize: 'cover' }} />;

    case 'game-arcade-neonsign-insert-coin':
      return <span style={{ ...common, right: 8, top: 4, fontSize: 8, fontFamily: 'monospace', color: '#f43f5e' }}>1P READY</span>;

    case 'game-valorant-tactile-bracket-red':
      return <span style={{ ...common, inset: 0, opacity: 0.85, backgroundImage: `url("${SVG_FRAMES.tacticalBrackets}")`, backgroundSize: '100% 100%' }} />;

    case 'game-league-hextech-gem-crystal':
      return <span style={{ ...common, inset: 0, opacity: 0.8, backgroundImage: `url("${SVG_FRAMES.hextechGemFrame}")`, backgroundSize: '100% 100%' }} />;

    case 'game-cyber-glitch-core-terminal':
      return <span style={{ ...common, inset: 0, opacity: 0.3, backgroundImage: `url("${SVG_FRAMES.pcbCircuitPattern}")` }} />;

    case 'game-dungeon-boss-health-bar':
      return <span style={{ ...common, left: 0, top: 0, bottom: 0, width: '35%', background: 'rgba(255,255,255,.15)', borderRight: '1px solid #fff' }} />;

    case 'game-mmo-quest-complete-banner':
      return <span style={{ ...common, inset: 3, border: '1px solid #fef08a', opacity: 0.6 }} />;

    case 'game-cyberpunk-neon-katana-slash':
      return <span style={{ ...common, width: 30, height: '200%', top: '-50%', left: isHovered ? '90%' : '-20%', background: 'linear-gradient(90deg,transparent,rgba(244,63,94,.9),transparent)', transform: 'rotate(25deg)', transition: 'left .4s ease' }} />;

    case 'game-elden-ring-tarnish-gold':
      return <span style={{ ...common, inset: 4, border: '1px solid #ca8a04', opacity: 0.5 }} />;

    case 'game-overwatch-futuristic-visor':
      return <span style={{ ...common, inset: 0, opacity: 0.3, backgroundImage: `url("${SVG_FRAMES.cyberHexFrame}")`, backgroundSize: 'cover' }} />;

    case 'game-retro-gameboy-cartridge':
      return <span style={{ ...common, right: 6, top: 6, width: 10, height: 10, borderRadius: '50%', background: '#64748b' }} />;

    case 'game-anime-magical-girl-star':
      return <span style={{ ...common, right: 8, top: isHovered ? 4 : 6, fontSize: 12, color: '#fef08a', transition: 'all .2s ease' }}>✦</span>;
  }
}

function createPreset(spec: GamingSpec): ButtonDefinition {
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
    generateTailwind: (p) => `<button className="relative inline-flex items-center gap-2 px-6 py-3 font-extrabold uppercase" style={{ background: '${p.primaryColor}', borderRadius: ${p.radius} }}>${p.text}</button>`,
    generateReact: (p) => `export function ${spec.id.split('-').map((x) => x[0]?.toUpperCase() + x.slice(1)).join('')}Button(){return <button>${p.text}</button>;}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        type="button"
        disabled={params.disabled}
        onClick={onClick}
        style={liveStyle(spec, params, isHovered, isActive)}
      >
        {decoration(spec, params, isHovered)}
        <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
}

const specs: GamingSpec[] = [
  { id: 'game-cyber-hud-hexagon-frame', name: 'Cyber HUD Hexagon Frame', category: 'cyberpunk', tags: ['HUD', 'Hexagon', 'Cyber', 'Gaming'], description: 'Khung lục giác HUD viễn tưởng với họa tiết Base64 SVG sắc nét.', defaultText: 'ENTER MATRIX', defaultIcon: 'Terminal', primary: '#38bdf8', accent: '#0284c7', radius: 4, soundType: 'cyber', recommendedBg: 'dark', effect: 'game-cyber-hud-hexagon-frame', frameSvgDataUri: SVG_FRAMES.cyberHexFrame },
  { id: 'game-rpg-gold-gilded-crest', name: 'RPG Gold Gilded Crest Frame', category: 'luxury-minimal', tags: ['RPG', 'Gold', 'Crest', 'Filigree'], description: 'Khung mạ vàng hoa văn quý tộc hoàng gia phong cách game RPG.', defaultText: 'START QUEST', defaultIcon: 'Crown', primary: '#eab308', accent: '#fef08a', radius: 6, soundType: 'crisp', recommendedBg: 'dark', effect: 'game-rpg-gold-gilded-crest', frameSvgDataUri: SVG_FRAMES.rpgGoldFiligree },
  { id: 'game-fantasy-rune-stone-engraved', name: 'Ancient Rune Stone Engraved', category: 'retro-pixel', tags: ['Rune', 'Stone', 'Fantasy', 'Ancient'], description: 'Phiến đá cổ khắc phù hiệu phép thuật huyền bí.', defaultText: 'CAST SPELL', defaultIcon: 'Sparkles', primary: '#38bdf8', accent: '#0284c7', radius: 8, soundType: 'mechanical', recommendedBg: 'dark', effect: 'game-fantasy-rune-stone-engraved', frameSvgDataUri: SVG_FRAMES.runeStoneFrame },
  { id: 'game-sci-fi-mecha-armor-plate', name: 'Sci-Fi Mecha Armor Segment', category: 'tech-outline', tags: ['Mecha', 'Armor', 'Sci-Fi', 'Metal'], description: 'Giáp tấm mecha rô-bốt chiến đấu hiện đại.', defaultText: 'DEPLOY MECHA', defaultIcon: 'Cpu', primary: '#64748b', accent: '#38bdf8', radius: 2, soundType: 'mechanical', recommendedBg: 'dark', effect: 'game-sci-fi-mecha-armor-plate', frameSvgDataUri: SVG_FRAMES.mechaArmorFrame },
  { id: 'game-pixel-dungeon-brick-8bit', name: 'Pixel Dungeon Brick 8-Bit', category: 'retro-pixel', tags: ['Pixel', '8bit', 'Dungeon', 'Brick'], description: 'Tường gạch hầm ngục retro 8-bit chuẩn nét hoài niệm.', defaultText: 'START GAME', defaultIcon: 'Play', primary: '#facc15', accent: '#1e293b', radius: 0, soundType: 'retro', recommendedBg: 'dark', effect: 'game-pixel-dungeon-brick-8bit', frameSvgDataUri: SVG_FRAMES.pixelBrickPattern },
  { id: 'game-steampunk-copper-gear-valves', name: 'Steampunk Copper Gear Valves', category: 'skeuomorphic-3d', tags: ['Steampunk', 'Gear', 'Copper', 'Brass'], description: 'Bánh răng đồng phong cách Steampunk hơi nước.', defaultText: 'ENGAGE GEARS', defaultIcon: 'Zap', primary: '#b45309', accent: '#d97706', radius: 6, soundType: 'mechanical', recommendedBg: 'dark', effect: 'game-steampunk-copper-gear-valves', frameSvgDataUri: SVG_FRAMES.steampunkGearFrame },
  { id: 'game-mythic-excalibur-holy-light', name: 'Mythic Excalibur Holy Light', category: 'aurora-gradient', tags: ['Mythic', 'Holy', 'Excalibur', 'Light'], description: 'Ánh sáng thánh kiếm Excalibur huyền thoại bừng sáng.', defaultText: 'SUMMON HERO', defaultIcon: 'Sparkles', primary: '#fde047', accent: '#38bdf8', radius: 12, soundType: 'glass', recommendedBg: 'dark', effect: 'game-mythic-excalibur-holy-light' },
  { id: 'game-dark-souls-ebon-flame', name: 'Dark Souls Ebon Ember Flame', category: 'aurora-gradient', tags: ['DarkSouls', 'Flame', 'Ember', 'Dark'], description: 'Ngọn lửa tàn tro quỷ ma rực đỏ cuồng bạo.', defaultText: 'PRAISE THE SUN', defaultIcon: 'Flame', primary: '#ef4444', accent: '#dc2626', radius: 4, soundType: 'cyber', recommendedBg: 'dark', effect: 'game-dark-souls-ebon-flame' },
  { id: 'game-space-commander-shield-hex', name: 'Space Commander Shield Grid', category: 'cyberpunk', tags: ['Space', 'Commander', 'Shield', 'Hex'], description: 'Lưới lá chắn tàu vũ trụ tư lệnh chiến hà.', defaultText: 'RAISE SHIELDS', defaultIcon: 'Shield', primary: '#22d3ee', accent: '#0891b2', radius: 6, soundType: 'cyber', recommendedBg: 'dark', effect: 'game-space-commander-shield-hex', frameSvgDataUri: SVG_FRAMES.cyberHexFrame },
  { id: 'game-arcade-neonsign-insert-coin', name: 'Arcade Neon Insert Coin Tag', category: 'retro-pixel', tags: ['Arcade', 'Neon', 'Coin', 'Retro'], description: 'Biển neon máy xèng game thùng cổ điển.', defaultText: 'INSERT COIN', defaultIcon: 'Play', primary: '#f43f5e', accent: '#fca5a5', radius: 4, soundType: 'retro', recommendedBg: 'dark', effect: 'game-arcade-neonsign-insert-coin' },
  { id: 'game-valorant-tactile-bracket-red', name: 'Tactical FPS Corner Brackets', category: 'brutalist', tags: ['Tactical', 'FPS', 'Valorant', 'Brackets'], description: 'Khung định vị góc bắn súng chiến thuật FPS.', defaultText: 'LOCK IN', defaultIcon: 'Crosshair', primary: '#ef4444', accent: '#fca5a5', radius: 2, soundType: 'crisp', recommendedBg: 'dark', effect: 'game-valorant-tactile-bracket-red', frameSvgDataUri: SVG_FRAMES.tacticalBrackets },
  { id: 'game-league-hextech-gem-crystal', name: 'Hextech Crystal Gem Core', category: 'glass', tags: ['Hextech', 'Gem', 'Crystal', 'League'], description: 'Lõi tinh thể ma thuật Hextech xanh lam rực sáng.', defaultText: 'HEX CORE', defaultIcon: 'Sparkles', primary: '#06b6d4', accent: '#67e8f9', radius: 10, soundType: 'glass', recommendedBg: 'dark', effect: 'game-league-hextech-gem-crystal', frameSvgDataUri: SVG_FRAMES.hextechGemFrame },
  { id: 'game-cyber-glitch-core-terminal', name: 'Cyber Matrix PCB Copper Wire', category: 'tech-outline', tags: ['Matrix', 'PCB', 'Glitch', 'Wire'], description: 'Bảng mạch vi xử lý ma trận hacker.', defaultText: 'HACK SYSTEM', defaultIcon: 'Terminal', primary: '#22c55e', accent: '#4ade80', radius: 0, soundType: 'cyber', recommendedBg: 'dark', effect: 'game-cyber-glitch-core-terminal', frameSvgDataUri: SVG_FRAMES.pcbCircuitPattern },
  { id: 'game-dungeon-boss-health-bar', name: 'Dungeon Boss Health Gauge', category: 'skeuomorphic-3d', tags: ['Boss', 'Health', 'Gauge', 'Dungeon'], description: 'Thanh máu trùm cuối hầm ngục đỏ rực uy lực.', defaultText: 'BOSS BATTLE', defaultIcon: 'Flame', primary: '#dc2626', accent: '#fca5a5', radius: 4, soundType: 'mechanical', recommendedBg: 'dark', effect: 'game-dungeon-boss-health-bar' },
  { id: 'game-mmo-quest-complete-banner', name: 'MMO Quest Complete Banner', category: 'luxury-minimal', tags: ['Quest', 'Complete', 'MMO', 'Banner'], description: 'Biểu ngữ hoàn thành nhiệm vụ thưởng vàng hoành tráng.', defaultText: 'CLAIM REWARD', defaultIcon: 'Check', primary: '#f59e0b', accent: '#fef08a', radius: 8, soundType: 'crisp', recommendedBg: 'dark', effect: 'game-mmo-quest-complete-banner' },
  { id: 'game-cyberpunk-neon-katana-slash', name: 'Cyber Neon Katana Slash FX', category: 'cyberpunk', tags: ['Katana', 'Neon', 'Slash', 'Cyberpunk'], description: 'Vết chém kiếm laser neon hồng rực cháy.', defaultText: 'CYBER SLASH', defaultIcon: 'Zap', primary: '#f43f5e', accent: '#fda4af', radius: 2, soundType: 'cyber', recommendedBg: 'dark', effect: 'game-cyberpunk-neon-katana-slash' },
  { id: 'game-elden-ring-tarnish-gold', name: 'Elden Ring Tarnished Grace', category: 'luxury-minimal', tags: ['EldenRing', 'Grace', 'Gold', 'Tarnished'], description: 'Ân huệ ánh kim vụt sáng xứ Lõi Cây Thần.', defaultText: 'TOUCH GRACE', defaultIcon: 'Sparkles', primary: '#ca8a04', accent: '#fef08a', radius: 4, soundType: 'crisp', recommendedBg: 'dark', effect: 'game-elden-ring-tarnish-gold' },
  { id: 'game-overwatch-futuristic-visor', name: 'Futuristic Hero HUD Visor', category: 'micro-interactive', tags: ['Visor', 'Hero', 'Futuristic', 'HUD'], description: 'Kính ngắm anh hùng tương lai rực rỡ.', defaultText: 'ACTIVATED', defaultIcon: 'ArrowUpRight', primary: '#0284c7', accent: '#38bdf8', radius: 14, soundType: 'crisp', recommendedBg: 'dark', effect: 'game-overwatch-futuristic-visor' },
  { id: 'game-retro-gameboy-cartridge', name: 'Retro Game Cartridge Slot', category: 'retro-pixel', tags: ['Cartridge', 'Gameboy', 'Retro', 'Console'], description: 'Băng đĩa game console cổ điển cầm tay.', defaultText: 'INSERT CART', defaultIcon: 'Play', primary: '#94a3b8', accent: '#cbd5e1', radius: 6, soundType: 'retro', recommendedBg: 'light', effect: 'game-retro-gameboy-cartridge' },
  { id: 'game-anime-magical-girl-star', name: 'Anime Magical Star Wand', category: 'playful-bubbly', tags: ['Magical', 'Anime', 'Star', 'Girl'], description: 'Gậy ngôi sao biến hình anime lung linh lấp lánh.', defaultText: 'MAGIC SPARK', defaultIcon: 'Sparkles', primary: '#f472b6', accent: '#fbcfe8', radius: 9999, soundType: 'pop', recommendedBg: 'light', effect: 'game-anime-magical-girl-star' },
];

export const v20GamingPresets = specs.map(createPreset);
