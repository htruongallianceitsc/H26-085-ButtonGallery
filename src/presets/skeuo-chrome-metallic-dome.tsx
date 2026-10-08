import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'skeuo-chrome-metallic-dome',
  name: 'Chrome Metallic Dome (Vòm Kim Loại Crom)',
  category: 'skeuomorphic-3d',
  tags: ['Skeuomorphic', '3D', 'Chrome', 'Metallic', 'Dome'],
  description: 'Mặt vòm kim loại crom phản chiếu ánh sáng, highlight chạy dọc thân nút khi di chuột qua.',
  defaultText: 'ACTIVATE',
  defaultIcon: 'Zap',
  defaultPrimaryColor: '#94a3b8',
  defaultAccentColor: '#e2e8f0',
  defaultRadius: 9999,
  soundType: 'mechanical',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Chrome Metallic Dome Button */
.btn-chrome-dome {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  background: linear-gradient(180deg, #f1f5f9 0%, ${params.accentColor} 18%, ${params.primaryColor} 55%, #475569 100%);
  color: #1e293b;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: ${params.radius}px;
  border: 1px solid #cbd5e1;
  box-shadow: 0 8px 16px -4px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.8), inset 0 -6px 8px rgba(0,0,0,0.25);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
}

.btn-chrome-dome::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 40%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent);
  transform: translateX(-200%) rotate(10deg);
  transition: transform 0.5s ease;
}

.btn-chrome-dome:hover::before {
  transform: translateX(350%) rotate(10deg);
}

.btn-chrome-dome:active {
  transform: translateY(2px);
  box-shadow: 0 3px 8px -2px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.3);
}`,
  generateHtml: (params) => `<button class="btn-chrome-dome">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-b from-slate-100 via-[${params.primaryColor}] to-slate-600 text-slate-800 font-bold text-sm tracking-wide rounded-full border border-slate-300 overflow-hidden shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5),inset_0_2px_2px_rgba(255,255,255,0.8)] active:translate-y-0.5 transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function ChromeMetallicDomeButton() {
  return (
    <button
      onClick={() => console.log('Activated')}
      className="relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-b from-slate-100 via-[${params.primaryColor}] to-slate-600 text-slate-800 font-bold text-sm tracking-wide rounded-full border border-slate-300 overflow-hidden shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5),inset_0_2px_2px_rgba(255,255,255,0.8)] active:translate-y-0.5 transition-all"
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
        className={`relative inline-flex items-center justify-center font-bold text-slate-800 select-none overflow-hidden transition-all duration-200 ${
          params.size === 'sm' ? 'px-5 py-2 text-xs' : params.size === 'lg' ? 'px-9 py-4 text-base' : params.size === 'xl' ? 'px-11 py-5 text-lg' : 'px-8 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: `linear-gradient(180deg, #f1f5f9 0%, ${params.accentColor} 18%, ${params.primaryColor} 55%, #475569 100%)`,
          border: '1px solid #cbd5e1',
          boxShadow: activeState
            ? '0 3px 8px -2px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.3)'
            : '0 8px 16px -4px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.8), inset 0 -6px 8px rgba(0,0,0,0.25)',
          transform: activeState ? 'translateY(2px)' : 'none',
        }}
      >
        <span
          className="absolute -top-1/2 left-[-20%] w-[40%] h-[200%] pointer-events-none transition-transform duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)',
            transform: isHovered ? 'translateX(350%) rotate(10deg)' : 'translateX(-200%) rotate(10deg)',
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
