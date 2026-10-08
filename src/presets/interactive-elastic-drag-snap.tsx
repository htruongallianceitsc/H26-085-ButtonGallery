import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'interactive-elastic-drag-snap',
  name: 'Elastic Drag Snap (Co Giãn Đàn Hồi)',
  category: 'micro-interactive',
  tags: ['Micro-Interaction', 'Elastic', 'Snap', 'Bouncy', 'Playful'],
  description: 'Nút co giãn lệch trục (squash & stretch) rồi snap trở lại hình dạng gốc với hiệu ứng đàn hồi khi nhả click.',
  defaultText: 'Kéo Thử Xem',
  defaultIcon: 'Zap',
  defaultPrimaryColor: '#f59e0b',
  defaultAccentColor: '#fcd34d',
  defaultRadius: 14,
  soundType: 'pop',
  recommendedBg: 'any',
  generateCss: (params) => `/* Elastic Drag Snap Button */
.btn-elastic-snap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 30px;
  background: ${params.primaryColor};
  color: #1c1203;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: ${params.radius}px;
  box-shadow: 0 6px 16px -4px ${params.primaryColor}aa;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.btn-elastic-snap:hover {
  background: ${params.accentColor};
  box-shadow: 0 10px 22px -4px ${params.primaryColor}cc;
}

.btn-elastic-snap:active {
  animation: elastic-snap 0.5s ease;
}`,
  generateHtml: (params) => `<button class="btn-elastic-snap">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-[#1c1203] font-bold text-sm rounded-[${params.radius}px] shadow-[0_6px_16px_-4px_${params.primaryColor}aa] hover:bg-[${params.accentColor}] active:animate-[elastic-snap_0.5s_ease] transition-colors">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function ElasticDragSnapButton() {
  return (
    <button
      onClick={() => console.log('Snapped')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-[#1c1203] font-bold text-sm rounded-[${params.radius}px] shadow-[0_6px_16px_-4px_${params.primaryColor}aa] hover:bg-[${params.accentColor}] active:animate-[elastic-snap_0.5s_ease] transition-colors"
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
        className={`inline-flex items-center justify-center font-bold select-none transition-colors duration-200 ${
          activeState ? 'animate-[elastic-snap_0.5s_ease]' : ''
        } ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: isHovered ? params.accentColor : params.primaryColor,
          color: '#1c1203',
          borderRadius: `${params.radius}px`,
          boxShadow: isHovered ? `0 10px 22px -4px ${params.primaryColor}cc` : `0 6px 16px -4px ${params.primaryColor}aa`,
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
