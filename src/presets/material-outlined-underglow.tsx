import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'material-outlined-underglow',
  name: 'Outlined Text Button Underglow (Viền Mỏng Sáng Dưới)',
  category: 'material-elevation',
  tags: ['Material', 'Outlined', 'Underglow', 'Elevation', 'Clean'],
  description: 'Outlined button chuẩn Material với nền fill nhẹ dần theo hover và underglow shadow mềm phía dưới.',
  defaultText: 'Tìm Hiểu Thêm',
  defaultIcon: 'Download',
  defaultPrimaryColor: '#0ea5e9',
  defaultAccentColor: '#38bdf8',
  defaultRadius: 8,
  soundType: 'crisp',
  recommendedBg: 'light',
  generateCss: (params) => `/* Material Outlined Underglow Button */
.btn-material-outlined {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 26px;
  background: transparent;
  color: ${params.primaryColor};
  font-family: 'Roboto', 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.25px;
  border: 1.5px solid ${params.primaryColor};
  border-radius: ${params.radius}px;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.25s ease, transform 0.2s ease;
}

.btn-material-outlined:hover {
  background: ${params.primaryColor}14;
  box-shadow: 0 8px 18px -6px ${params.accentColor}99;
}

.btn-material-outlined:active {
  transform: translateY(1px);
  background: ${params.primaryColor}22;
}`,
  generateHtml: (params) => `<button class="btn-material-outlined">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-[${params.primaryColor}] font-semibold text-sm border-[1.5px] border-[${params.primaryColor}] rounded-[${params.radius}px] hover:bg-[${params.primaryColor}]/10 hover:shadow-[0_8px_18px_-6px_${params.accentColor}] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function MaterialOutlinedUnderglowButton() {
  return (
    <button
      onClick={() => console.log('Learn more')}
      className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-[${params.primaryColor}] font-semibold text-sm border-[1.5px] border-[${params.primaryColor}] rounded-[${params.radius}px] hover:bg-[${params.primaryColor}]/10 hover:shadow-[0_8px_18px_-6px_${params.accentColor}] transition-all"
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
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-7 py-3.5 text-base' : params.size === 'xl' ? 'px-9 py-4.5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: activeState ? `${params.primaryColor}22` : isHovered ? `${params.primaryColor}14` : 'transparent',
          color: params.primaryColor,
          border: `1.5px solid ${params.primaryColor}`,
          borderRadius: `${params.radius}px`,
          boxShadow: isHovered ? `0 8px 18px -6px ${params.accentColor}99` : 'none',
          transform: activeState ? 'translateY(1px)' : 'none',
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
