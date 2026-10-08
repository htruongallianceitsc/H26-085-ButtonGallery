import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'retro-cassette-tape-label',
  name: 'Cassette Tape Label (Nhãn Băng Cassette)',
  category: 'retro-pixel',
  tags: ['Retro', '80s', 'Cassette', 'Tape', 'Vintage'],
  description: 'Thiết kế như nhãn băng cassette thập niên 80, hai "ốc vít" góc và hiệu ứng cuộn băng xoay khi di chuột.',
  defaultText: 'PLAY SIDE A',
  defaultIcon: 'Play',
  defaultPrimaryColor: '#f472b6',
  defaultAccentColor: '#facc15',
  defaultRadius: 8,
  soundType: 'retro',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Cassette Tape Label Button */
.btn-cassette-tape {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #1e1b2e, #0f0d1a);
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 2px solid ${params.primaryColor}aa;
  border-radius: ${params.radius}px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cassette-tape .reel {
  width: 14px;
  height: 14px;
  border-radius: 9999px;
  border: 2px solid ${params.accentColor};
  position: relative;
}

.btn-cassette-tape .reel::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 9999px;
  background: ${params.accentColor};
}

.btn-cassette-tape:hover .reel {
  animation: rotate-beam 0.6s linear infinite;
}

.btn-cassette-tape:hover {
  border-color: ${params.accentColor};
  box-shadow: 0 0 16px -2px ${params.primaryColor}88;
}

.btn-cassette-tape:active {
  transform: scale(0.97);
}`,
  generateHtml: (params) => `<button class="btn-cassette-tape">
  <span class="reel"></span>
  <span>${params.text}</span>
  <span class="reel"></span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-br from-[#1e1b2e] to-[#0f0d1a] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[${params.primaryColor}]/70 rounded-[${params.radius}px] hover:border-[${params.accentColor}] transition-all">
  <span className="w-3.5 h-3.5 rounded-full border-2 border-[${params.accentColor}] group-hover:animate-spin" />
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function CassetteTapeLabelButton() {
  return (
    <button
      onClick={() => console.log('Playing side A')}
      className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-br from-[#1e1b2e] to-[#0f0d1a] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[${params.primaryColor}]/70 rounded-[${params.radius}px] hover:border-[${params.accentColor}] transition-all"
    >
      <span className="w-3.5 h-3.5 rounded-full border-2 border-[${params.accentColor}] group-hover:animate-spin" />
      <span>${params.text}</span>
      <span className="w-3.5 h-3.5 rounded-full border-2 border-[${params.accentColor}] group-hover:animate-spin" />
    </button>
  );
}`,
  render: ({ params, isHovered, isActive, onClick }) => {
    const activeState = isActive || params.state === 'active';
    const reel = (
      <span
        className={`inline-flex w-3.5 h-3.5 rounded-full border-2 items-center justify-center ${isHovered ? 'animate-spin' : ''}`}
        style={{ borderColor: params.accentColor }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: params.accentColor }} />
      </span>
    );
    return (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider select-none transition-all duration-200 ${
          params.size === 'sm' ? 'gap-2 px-5 py-2 text-[10px]' : params.size === 'lg' ? 'gap-3.5 px-9 py-4 text-sm' : params.size === 'xl' ? 'gap-4 px-11 py-5 text-base' : 'gap-3 px-8 py-3.5 text-xs'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: 'linear-gradient(135deg, #1e1b2e, #0f0d1a)',
          color: params.primaryColor,
          border: `2px solid ${isHovered ? params.accentColor : `${params.primaryColor}aa`}`,
          borderRadius: `${params.radius}px`,
          boxShadow: isHovered ? `0 0 16px -2px ${params.primaryColor}88` : 'none',
          transform: activeState ? 'scale(0.97)' : 'none',
        }}
      >
        {reel}
        <span className="flex items-center gap-2">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-3.5 h-3.5')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-3.5 h-3.5')}
        </span>
        {reel}
      </button>
    );
  },
};
