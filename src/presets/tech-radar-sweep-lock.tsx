import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'tech-radar-sweep-lock',
  name: 'Radar Sweep HUD Lock (Khung HUD Khóa Mục Tiêu)',
  category: 'tech-outline',
  tags: ['Tech', 'HUD', 'Radar', 'Lock-on', 'Outline'],
  description: 'Khung ngắm 4 góc kiểu HUD quân sự khóa mục tiêu, tia radar quét xoay nền khi di chuột qua.',
  defaultText: 'TARGET.LOCK()',
  defaultIcon: 'Shield',
  defaultPrimaryColor: '#f43f5e',
  defaultAccentColor: '#fb7185',
  defaultRadius: 2,
  soundType: 'cyber',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Radar Sweep HUD Lock Button */
.btn-radar-lock {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  background: rgba(10, 6, 10, 0.6);
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  border: 1px dashed ${params.primaryColor}66;
  border-radius: ${params.radius}px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
}

.btn-radar-lock::before,
.btn-radar-lock::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid ${params.accentColor};
  opacity: 0;
  transition: opacity 0.2s ease;
}

.btn-radar-lock::before {
  top: 2px;
  left: 2px;
  border-right: none;
  border-bottom: none;
}

.btn-radar-lock::after {
  bottom: 2px;
  right: 2px;
  border-left: none;
  border-top: none;
}

.btn-radar-lock:hover::before,
.btn-radar-lock:hover::after {
  opacity: 1;
}

.btn-radar-lock:hover {
  color: #fff;
  border-color: ${params.accentColor};
  box-shadow: 0 0 20px -4px ${params.accentColor}99;
}`,
  generateHtml: (params) => `<button class="btn-radar-lock">
  <span>&#9678;</span>
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-black/40 text-[${params.primaryColor}] font-mono font-bold text-xs tracking-wide border border-dashed border-[${params.primaryColor}]/40 rounded-[${params.radius}px] overflow-hidden hover:text-white hover:border-[${params.accentColor}] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function RadarSweepLockButton() {
  return (
    <button
      onClick={() => console.log('Target locked')}
      className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-black/40 text-[${params.primaryColor}] font-mono font-bold text-xs tracking-wide border border-dashed border-[${params.primaryColor}]/40 rounded-[${params.radius}px] overflow-hidden hover:text-white hover:border-[${params.accentColor}] transition-all"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
  render: ({ params, isHovered, isActive, onClick }) => {
    const activeState = isActive || params.state === 'active';
    const corner = (position: 'tl' | 'br') => (
      <span
        className="absolute w-2.5 h-2.5 transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          borderColor: params.accentColor,
          ...(position === 'tl'
            ? { top: 2, left: 2, borderTop: `2px solid ${params.accentColor}`, borderLeft: `2px solid ${params.accentColor}` }
            : { bottom: 2, right: 2, borderBottom: `2px solid ${params.accentColor}`, borderRight: `2px solid ${params.accentColor}` }),
        }}
      />
    );
    return (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative inline-flex items-center justify-center font-mono font-bold tracking-wide select-none overflow-hidden transition-all duration-200 ${
          params.size === 'sm' ? 'px-5 py-2.5 text-[10px]' : params.size === 'lg' ? 'px-9 py-4.5 text-sm' : params.size === 'xl' ? 'px-11 py-5 text-base' : 'px-8 py-4 text-xs'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: 'rgba(10, 6, 10, 0.6)',
          color: isHovered ? '#ffffff' : params.primaryColor,
          border: `1px dashed ${isHovered ? params.accentColor : `${params.primaryColor}66`}`,
          borderRadius: `${params.radius}px`,
          boxShadow: isHovered ? `0 0 20px -4px ${params.accentColor}99` : 'none',
          transform: activeState ? 'scale(0.97)' : 'none',
        }}
      >
        {isHovered && (
          <span
            className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] pointer-events-none"
            style={{ background: `conic-gradient(from 0deg, transparent 0deg, ${params.accentColor}55 12deg, transparent 36deg)` }}
          />
        )}
        {corner('tl')}
        {corner('br')}
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
