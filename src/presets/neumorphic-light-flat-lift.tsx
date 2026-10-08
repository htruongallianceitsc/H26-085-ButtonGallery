import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'neumorphic-light-flat-lift',
  name: 'Flat Light Card Lift (Thẻ Sáng Nhấc Nhẹ)',
  category: 'neumorphic',
  tags: ['Neumorphism', 'Light', 'Flat', 'Soft UI', 'Elegant'],
  description: 'Biến thể Neumorphism nền sáng với bóng kép mềm mại, nhấc nhẹ lên khi hover và lõm xuống khi bấm.',
  defaultText: 'Xem Chi Tiết',
  defaultIcon: 'ChevronRight',
  defaultPrimaryColor: '#eef1f6',
  defaultAccentColor: '#6366f1',
  defaultRadius: 18,
  soundType: 'crisp',
  recommendedBg: 'light',
  generateCss: (params) => `/* Flat Light Card Lift Button */
.btn-light-flat-lift {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #334155;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: none;
  box-shadow: 6px 6px 14px rgba(163,177,198,0.5), -6px -6px 14px rgba(255,255,255,0.85);
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-light-flat-lift:hover {
  color: ${params.accentColor};
  transform: translateY(-3px);
  box-shadow: 9px 9px 18px rgba(163,177,198,0.55), -9px -9px 18px rgba(255,255,255,0.9);
}

.btn-light-flat-lift:active {
  transform: translateY(0);
  box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.8);
}`,
  generateHtml: (params) => `<button class="btn-light-flat-lift">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-slate-700 font-semibold text-sm rounded-[${params.radius}px] shadow-[6px_6px_14px_rgba(163,177,198,0.5),-6px_-6px_14px_rgba(255,255,255,0.85)] hover:-translate-y-1 hover:text-indigo-500 transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function LightFlatLiftButton() {
  return (
    <button
      onClick={() => console.log('View details')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-slate-700 font-semibold text-sm rounded-[${params.radius}px] shadow-[6px_6px_14px_rgba(163,177,198,0.5),-6px_-6px_14px_rgba(255,255,255,0.85)] hover:-translate-y-1 hover:text-indigo-500 transition-all"
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
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: params.primaryColor,
          color: isHovered ? params.accentColor : '#334155',
          borderRadius: `${params.radius}px`,
          boxShadow: activeState
            ? 'inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.8)'
            : isHovered
            ? '9px 9px 18px rgba(163,177,198,0.55), -9px -9px 18px rgba(255,255,255,0.9)'
            : '6px 6px 14px rgba(163,177,198,0.5), -6px -6px 14px rgba(255,255,255,0.85)',
          transform: activeState ? 'translateY(0)' : isHovered ? 'translateY(-3px)' : 'none',
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
