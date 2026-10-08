import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'cyber-glitch-polygon',
    name: 'Cyberpunk Glitch Protocol',
    category: 'cyberpunk',
    tags: ['Cyberpunk', 'Glitch', 'Polygon', 'Neon', 'Sci-Fi'],
    description: 'Vết cắt đa giác polygon góc nhọn, vạch scanline vị lai, hiệu ứng lệch màu quang học Chromatic Aberration khi hover.',
    defaultText: 'KÍCH HOẠT HỆ THỐNG',
    defaultIcon: 'Cpu',
    defaultPrimaryColor: '#00f2fe',
    defaultAccentColor: '#ff007f',
    defaultRadius: 0,
    soundType: 'cyber',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Cyberpunk Glitch Protocol Button */
.btn-cyber-glitch {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: #050508;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid ${params.primaryColor};
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 0 15px ${params.primaryColor}33;
}

.btn-cyber-glitch::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, ${params.primaryColor}33, transparent);
  transition: all 0.5s ease;
}

.btn-cyber-glitch:hover {
  background: ${params.primaryColor};
  color: #050508;
  box-shadow: 0 0 25px ${params.primaryColor}cc, 0 0 50px ${params.accentColor}66;
  text-shadow: 2px 2px 0px ${params.accentColor};
  transform: translateY(-2px);
}

.btn-cyber-glitch:hover::before {
  left: 100%;
}

.btn-cyber-glitch:active {
  transform: translateY(1px);
}`,
    generateHtml: (params) => `<button class="btn-cyber-glitch">
  <span class="icon">&#9889;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#050508] text-[${params.primaryColor}] font-mono text-sm font-bold uppercase tracking-widest border border-[${params.primaryColor}] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))] transition-all duration-200 hover:bg-[${params.primaryColor}] hover:text-[#050508] hover:shadow-[0_0_25px_${params.primaryColor}] active:translate-y-0.5">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function CyberGlitchButton() {
  return (
    <button 
      onClick={() => console.log('Clicked')}
      className="relative group inline-flex items-center gap-3 px-7 py-3.5 bg-[#070913] text-[${params.primaryColor}] font-mono text-sm font-bold uppercase tracking-wider border border-[${params.primaryColor}] transition-all duration-200 hover:bg-[${params.primaryColor}] hover:text-[#070913] hover:shadow-[0_0_25px_${params.primaryColor}88] active:translate-y-0.5"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))'
      }}
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => {
      const clip = 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))';
      return (
        <button
          onClick={onClick}
          disabled={params.disabled}
          className={`relative group inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-all duration-200 select-none overflow-hidden ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            clipPath: clip,
            background: isHovered || params.state === 'hover' ? params.primaryColor : '#05070e',
            color: isHovered || params.state === 'hover' ? '#05070e' : params.primaryColor,
            border: `1px solid ${params.primaryColor}`,
            boxShadow: isHovered ? `0 0 25px ${params.primaryColor}aa, 0 0 45px ${params.accentColor}55` : `0 0 12px ${params.primaryColor}33`,
            transform: isActive || params.state === 'active' ? 'translateY(2px)' : isHovered ? 'translateY(-2px)' : 'none',
          }}
        >
          <span className="absolute top-1 left-1 w-1.5 h-1.5 bg-current opacity-70" />
          <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-current opacity-70" />
          <span className="flex items-center gap-2 relative z-10">
            {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
            <span>{params.text}</span>
            {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          </span>
        </button>
      );
    },
  };
