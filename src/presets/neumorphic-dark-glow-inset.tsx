import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'neumorphic-dark-glow-inset',
  name: 'Dark Glow Inset Press (Lõm Tối Phát Sáng)',
  category: 'neumorphic',
  tags: ['Neumorphism', 'Dark', 'Glow', 'Inset', 'Soft UI'],
  description: 'Biến thể Neumorphism tối với viền glow màu accent mờ ảo thay cho bóng trắng cổ điển, lõm sâu khi bấm.',
  defaultText: 'MỞ BẢNG ĐIỀU KHIỂN',
  defaultIcon: 'Zap',
  defaultPrimaryColor: '#1b2030',
  defaultAccentColor: '#8b5cf6',
  defaultRadius: 18,
  soundType: 'crisp',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Dark Glow Inset Press Button */
.btn-dark-glow-inset {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #cbd5e1;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: none;
  box-shadow: 7px 7px 16px rgba(0,0,0,0.55), -7px -7px 16px rgba(255,255,255,0.03), 0 0 0 1px ${params.accentColor}22;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn-dark-glow-inset:hover {
  color: #ffffff;
  box-shadow: 9px 9px 20px rgba(0,0,0,0.6), -9px -9px 20px rgba(255,255,255,0.04), 0 0 20px -2px ${params.accentColor}99, 0 0 0 1px ${params.accentColor}66;
}

.btn-dark-glow-inset:active {
  box-shadow: inset 5px 5px 10px rgba(0,0,0,0.7), inset -5px -5px 10px rgba(255,255,255,0.03), 0 0 16px -2px ${params.accentColor}aa;
}`,
  generateHtml: (params) => `<button class="btn-dark-glow-inset">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-slate-300 font-semibold text-sm rounded-[${params.radius}px] shadow-[7px_7px_16px_rgba(0,0,0,0.55),-7px_-7px_16px_rgba(255,255,255,0.03)] hover:text-white hover:shadow-[0_0_20px_-2px_${params.accentColor}] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function DarkGlowInsetButton() {
  return (
    <button
      onClick={() => console.log('Panel opened')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-slate-300 font-semibold text-sm rounded-[${params.radius}px] shadow-[7px_7px_16px_rgba(0,0,0,0.55),-7px_-7px_16px_rgba(255,255,255,0.03)] hover:text-white hover:shadow-[0_0_20px_-2px_${params.accentColor}] transition-all"
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
        className={`inline-flex items-center justify-center font-semibold select-none transition-all duration-250 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: params.primaryColor,
          color: isHovered ? '#ffffff' : '#cbd5e1',
          borderRadius: `${params.radius}px`,
          boxShadow: activeState
            ? `inset 5px 5px 10px rgba(0,0,0,0.7), inset -5px -5px 10px rgba(255,255,255,0.03), 0 0 16px -2px ${params.accentColor}aa`
            : isHovered
            ? `9px 9px 20px rgba(0,0,0,0.6), -9px -9px 20px rgba(255,255,255,0.04), 0 0 20px -2px ${params.accentColor}99, 0 0 0 1px ${params.accentColor}66`
            : `7px 7px 16px rgba(0,0,0,0.55), -7px -7px 16px rgba(255,255,255,0.03), 0 0 0 1px ${params.accentColor}22`,
          transform: activeState ? 'scale(0.98)' : 'none',
        }}
      >
        <span className="flex items-center gap-2">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
