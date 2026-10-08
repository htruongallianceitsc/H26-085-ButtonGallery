import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'tech-ghost-brackets',
    name: 'HUD Corner Brackets (Khung Ngắm Góc)',
    category: 'tech-outline',
    tags: ['HUD', 'Ghost', 'Brackets', 'Targeting', 'Minimal Tech'],
    description: 'Khung ngắm 4 góc mở rộng khi rê chuột, cảm giác kính ngắm quang học trong phi thuyền vũ trụ.',
    defaultText: 'LOCK TARGET // KHÓA MỤC TIÊU',
    defaultIcon: 'Zap',
    defaultPrimaryColor: '#38bdf8',
    defaultAccentColor: '#0284c7',
    defaultRadius: 0,
    soundType: 'cyber',
    recommendedBg: 'dark',
    generateCss: (params) => `/* HUD Corner Brackets Button */
.btn-hud-brackets {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: transparent;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 4 Corner Markers */
.btn-hud-brackets::before,
.btn-hud-brackets::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: ${params.primaryColor};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-hud-brackets::before {
  top: 0;
  left: 0;
  border-top: 2px solid;
  border-left: 2px solid;
}

.btn-hud-brackets::after {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.btn-hud-brackets:hover {
  background: ${params.primaryColor}12;
  color: #ffffff;
}

.btn-hud-brackets:hover::before,
.btn-hud-brackets:hover::after {
  width: 100%;
  height: 100%;
}`,
    generateHtml: (params) => `<button class="btn-hud-brackets">
  <span>&#9889;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-widest transition-all hover:bg-[${params.primaryColor}]/10 hover:text-white">
  <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[${params.primaryColor}] group-hover:w-full group-hover:h-full transition-all duration-300" />
  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[${params.primaryColor}] group-hover:w-full group-hover:h-full transition-all duration-300" />
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function HudBracketButton() {
  return (
    <button 
      onClick={() => console.log('Target locked')}
      className="relative group inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-widest transition-all hover:bg-[${params.primaryColor}]/10 hover:text-white"
    >
      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[${params.primaryColor}] group-hover:w-full group-hover:h-full transition-all duration-300 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[${params.primaryColor}] group-hover:w-full group-hover:h-full transition-all duration-300 pointer-events-none" />
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative group inline-flex items-center justify-center font-mono font-bold select-none transition-all duration-300 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: isHovered ? `${params.primaryColor}15` : 'transparent',
          color: isHovered ? '#ffffff' : params.primaryColor,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : 'none',
        }}
      >
        {/* Top-left corner bracket */}
        <span
          className="absolute top-0 left-0 border-t-2 border-l-2 transition-all duration-300 pointer-events-none"
          style={{
            borderColor: params.primaryColor,
            width: isHovered ? '100%' : '10px',
            height: isHovered ? '100%' : '10px',
          }}
        />
        {/* Bottom-right corner bracket */}
        <span
          className="absolute bottom-0 right-0 border-b-2 border-r-2 transition-all duration-300 pointer-events-none"
          style={{
            borderColor: params.primaryColor,
            width: isHovered ? '100%' : '10px',
            height: isHovered ? '100%' : '10px',
          }}
        />
        <span className="flex items-center gap-2 tracking-wider">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
