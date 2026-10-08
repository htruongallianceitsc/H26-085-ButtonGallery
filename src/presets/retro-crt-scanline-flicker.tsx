import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'retro-crt-scanline-flicker',
  name: 'CRT Scanline Flicker (Màn Hình CRT Nhiễu)',
  category: 'retro-pixel',
  tags: ['Retro', 'CRT', 'Scanline', 'Flicker', 'Vintage'],
  description: 'Mô phỏng màn hình CRT cũ với các dòng scanline chạy liên tục và hiệu ứng nhiễu sáng flicker nhẹ.',
  defaultText: 'PRESS START',
  defaultIcon: 'Terminal',
  defaultPrimaryColor: '#22c55e',
  defaultAccentColor: '#86efac',
  defaultRadius: 3,
  soundType: 'retro',
  recommendedBg: 'dark',
  generateCss: (params) => `/* CRT Scanline Flicker Button */
.btn-crt-scanline {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: #050a06;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid ${params.primaryColor}66;
  border-radius: ${params.radius}px;
  text-shadow: 0 0 6px ${params.primaryColor}aa;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-crt-scanline::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px);
  background-size: 100% 4px;
  animation: scanline-drift 1.2s linear infinite;
  pointer-events: none;
}

.btn-crt-scanline:hover {
  color: ${params.accentColor};
  box-shadow: 0 0 20px -2px ${params.primaryColor}99;
  border-color: ${params.accentColor};
}`,
  generateHtml: (params) => `<button class="btn-crt-scanline">
  <span>&#9608;</span>
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#050a06] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-widest border border-[${params.primaryColor}]/50 rounded-[${params.radius}px] overflow-hidden hover:text-[${params.accentColor}] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function CrtScanlineFlickerButton() {
  return (
    <button
      onClick={() => console.log('Start pressed')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#050a06] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-widest border border-[${params.primaryColor}]/50 rounded-[${params.radius}px] overflow-hidden hover:text-[${params.accentColor}] transition-all"
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
        className={`relative inline-flex items-center justify-center font-mono font-bold uppercase tracking-widest select-none overflow-hidden transition-all duration-200 ${
          params.size === 'sm' ? 'px-4 py-2 text-[10px]' : params.size === 'lg' ? 'px-8 py-4 text-sm' : params.size === 'xl' ? 'px-10 py-5 text-base' : 'px-7 py-3.5 text-xs'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: '#050a06',
          color: isHovered ? params.accentColor : params.primaryColor,
          border: `1px solid ${isHovered ? params.accentColor : `${params.primaryColor}66`}`,
          borderRadius: `${params.radius}px`,
          textShadow: `0 0 6px ${params.primaryColor}aa`,
          boxShadow: isHovered ? `0 0 20px -2px ${params.primaryColor}99` : 'none',
          transform: activeState ? 'scale(0.97)' : 'none',
        }}
      >
        <span
          className="absolute inset-0 pointer-events-none animate-[scanline-drift_1.2s_linear_infinite]"
          style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)',
            backgroundSize: '100% 4px',
          }}
        />
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
