import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'neumorphic-soft-emboss',
    name: 'Neumorphism Soft Inset (Dập Nổi Mịn)',
    category: 'neumorphic',
    tags: ['Neumorphism', 'Soft UI', 'Extruded', 'Minimal', 'Tactile'],
    description: 'Bề mặt đúc liền khối nguyên chất với bóng kép sáng/tối siêu mềm, lõm xuống khi được bấm vào.',
    defaultText: 'ĐIỀU KHIỂN HỆ THỐNG',
    defaultIcon: 'Flame',
    defaultPrimaryColor: '#242b3b',
    defaultAccentColor: '#38bdf8',
    defaultRadius: 16,
    soundType: 'crisp',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Neumorphic Soft UI Button */
.btn-neumorphic {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #e2e8f0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: none;
  cursor: pointer;
  box-shadow: 
    6px 6px 14px rgba(0, 0, 0, 0.45),
    -6px -6px 14px rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.btn-neumorphic:hover {
  color: ${params.accentColor};
  box-shadow: 
    8px 8px 18px rgba(0, 0, 0, 0.55),
    -8px -8px 18px rgba(255, 255, 255, 0.08);
}

.btn-neumorphic:active {
  box-shadow: 
    inset 4px 4px 8px rgba(0, 0, 0, 0.6),
    inset -4px -4px 8px rgba(255, 255, 255, 0.04);
}`,
    generateHtml: (params) => `<button class="btn-neumorphic">
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#242b3b] text-slate-200 font-semibold text-sm rounded-[${params.radius}px] shadow-[6px_6px_14px_rgba(0,0,0,0.5),-6px_-6px_14px_rgba(255,255,255,0.06)] hover:text-sky-400 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.04)] transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function NeumorphicSoftButton() {
  return (
    <button 
      onClick={() => console.log('Neumorphic clicked')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#242b3b] text-slate-200 font-semibold text-sm rounded-2xl shadow-[6px_6px_14px_rgba(0,0,0,0.5),-6px_-6px_14px_rgba(255,255,255,0.05)] hover:text-sky-400 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.04)] transition-all"
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
          className={`inline-flex items-center justify-center font-semibold select-none transition-all duration-200 ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            background: params.primaryColor,
            color: isHovered ? params.accentColor : '#e2e8f0',
            borderRadius: `${params.radius}px`,
            boxShadow: activeState
              ? 'inset 4px 4px 10px rgba(0, 0, 0, 0.7), inset -4px -4px 10px rgba(255, 255, 255, 0.05)'
              : isHovered
              ? '8px 8px 18px rgba(0, 0, 0, 0.6), -8px -8px 18px rgba(255, 255, 255, 0.08)'
              : '6px 6px 14px rgba(0, 0, 0, 0.45), -6px -6px 14px rgba(255, 255, 255, 0.05)',
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
