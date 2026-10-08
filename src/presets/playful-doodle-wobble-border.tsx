import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'playful-doodle-wobble-border',
  name: 'Doodle Wobble Border (Viền Nét Vẽ Tay Lung Lay)',
  category: 'playful-bubbly',
  tags: ['Playful', 'Doodle', 'Hand-drawn', 'Wobble', 'Sketch'],
  description: 'Viền vẽ tay nét nhăn kiểu sketch doodle, lắc lư wobble nhẹ qua lại khi di chuột qua.',
  defaultText: 'Vẽ Gì Đó Vui Nào',
  defaultIcon: 'Star',
  defaultPrimaryColor: '#fde68a',
  defaultAccentColor: '#f97316',
  defaultRadius: 20,
  soundType: 'pop',
  recommendedBg: 'light',
  generateCss: (params) => `/* Doodle Wobble Border Button */
.btn-doodle-wobble {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 28px;
  background: ${params.primaryColor};
  color: #422006;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  border: 2.5px solid #422006;
  border-radius: ${params.radius}px 24px ${params.radius}px 22px / 22px ${params.radius}px 20px ${params.radius}px;
  box-shadow: 3px 4px 0 0 #422006;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.btn-doodle-wobble:hover {
  animation: wobble 0.5s ease-in-out infinite;
  border-color: ${params.accentColor};
}

.btn-doodle-wobble:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 0 #422006;
}`,
  generateHtml: (params) => `<button class="btn-doodle-wobble">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-[#422006] font-bold text-sm border-[2.5px] border-[#422006] rounded-[20px_24px_20px_22px/22px_20px_20px_20px] shadow-[3px_4px_0_0_#422006] hover:animate-[wobble_0.5s_ease-in-out_infinite] active:translate-x-0.5 active:translate-y-0.5 transition-transform">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function DoodleWobbleBorderButton() {
  return (
    <button
      onClick={() => console.log('Doodle clicked')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-[#422006] font-bold text-sm border-[2.5px] border-[#422006] rounded-[20px_24px_20px_22px/22px_20px_20px_20px] shadow-[3px_4px_0_0_#422006] hover:animate-[wobble_0.5s_ease-in-out_infinite] transition-transform"
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
        className={`inline-flex items-center justify-center font-bold select-none transition-all duration-200 ${
          isHovered && !activeState ? 'animate-[wobble_0.5s_ease-in-out_infinite]' : ''
        } ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: params.primaryColor,
          color: '#422006',
          border: `2.5px solid ${isHovered ? params.accentColor : '#422006'}`,
          borderRadius: `${params.radius}px 24px ${params.radius}px 22px / 22px ${params.radius}px 20px ${params.radius}px`,
          boxShadow: activeState ? '1px 1px 0 0 #422006' : '3px 4px 0 0 #422006',
          transform: activeState ? 'translate(2px, 2px)' : 'none',
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
