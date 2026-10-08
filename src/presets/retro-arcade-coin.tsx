import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'retro-arcade-coin',
    name: 'Retro 8-Bit Arcade (Game Thùng)',
    category: 'retro-pixel',
    tags: ['Retro', '8-Bit', 'Arcade', 'Pixel Art', 'Gaming'],
    description: 'Gợi nhớ máy game thùng thập niên 90 với viền răng cưa pixel, nhịp nháy Insert Coin và âm hưởng chiptune.',
    defaultText: 'INSERT 1 COIN',
    defaultIcon: 'Play',
    defaultPrimaryColor: '#e11d48',
    defaultAccentColor: '#fbbf24',
    defaultRadius: 0,
    soundType: 'retro',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Retro 8-Bit Arcade Button */
.btn-retro-arcade {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  /* Pixel art stepped corner using box-shadows */
  box-shadow: 
    -4px 0 0 0 #000,
    4px 0 0 0 #000,
    0 -4px 0 0 #000,
    0 4px 0 0 #000,
    inset -3px -3px 0 0 rgba(0, 0, 0, 0.5),
    inset 3px 3px 0 0 rgba(255, 255, 255, 0.4),
    0 6px 0 0 #000;
  transition: all 0.1s steps(2);
}

.btn-retro-arcade:hover {
  filter: brightness(1.15);
}

.btn-retro-arcade:active {
  transform: translateY(4px);
  box-shadow: 
    -4px 0 0 0 #000,
    4px 0 0 0 #000,
    0 -4px 0 0 #000,
    0 4px 0 0 #000,
    inset -3px -3px 0 0 rgba(0, 0, 0, 0.5),
    inset 3px 3px 0 0 rgba(255, 255, 255, 0.4),
    0 2px 0 0 #000;
}`,
    generateHtml: (params) => `<button class="btn-retro-arcade">
  <span>&#9658;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-6 py-3 bg-[${params.primaryColor}] text-white font-mono font-black text-xs uppercase tracking-widest shadow-[-4px_0_0_0_#000,4px_0_0_0_#000,0_-4px_0_0_#000,0_4px_0_0_#000,0_6px_0_0_#000] hover:brightness-110 active:translate-y-1 transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function RetroArcadeButton() {
  return (
    <button 
      onClick={() => console.log('Coin inserted')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-[-4px_0_0_0_#000,4px_0_0_0_#000,0_-4px_0_0_#000,0_4px_0_0_#000,0_6px_0_0_#000] hover:brightness-110 active:translate-y-1 transition-all"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => {
      const activeState = isActive || params.state === 'active';
      return (
        <button
          onClick={onClick}
          disabled={params.disabled}
          className={`inline-flex items-center justify-center font-mono font-bold uppercase tracking-widest select-none transition-all duration-75 ${
            params.size === 'sm' ? 'px-4 py-2 text-[10px]' : params.size === 'lg' ? 'px-8 py-4 text-sm' : params.size === 'xl' ? 'px-10 py-5 text-base' : 'px-6 py-3 text-xs'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            background: params.primaryColor,
            color: '#ffffff',
            boxShadow: activeState
              ? '-4px 0 0 0 #000, 4px 0 0 0 #000, 0 -4px 0 0 #000, 0 4px 0 0 #000, inset -3px -3px 0 0 rgba(0,0,0,0.5), inset 3px 3px 0 0 rgba(255,255,255,0.4), 0 2px 0 0 #000'
              : '-4px 0 0 0 #000, 4px 0 0 0 #000, 0 -4px 0 0 #000, 0 4px 0 0 #000, inset -3px -3px 0 0 rgba(0,0,0,0.5), inset 3px 3px 0 0 rgba(255,255,255,0.4), 0 6px 0 0 #000',
            transform: activeState ? 'translateY(4px)' : 'none',
            filter: isHovered ? 'brightness(1.15)' : 'brightness(1)',
          }}
        >
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-yellow-400 animate-pulse" />
            <span>{params.text}</span>
            {params.iconPosition !== 'none' && renderButtonIcon(params.iconName, 'w-3.5 h-3.5 text-yellow-300')}
          </span>
        </button>
      );
    },
  };
