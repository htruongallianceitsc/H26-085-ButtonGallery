import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'material-fab-elevation-ripple',
  name: 'FAB Elevation Ripple (Nút Tròn Nổi Material)',
  category: 'material-elevation',
  tags: ['Material', 'FAB', 'Elevation', 'Ripple', 'Shadow'],
  description: 'Floating Action Button chuẩn Material Design: elevation shadow tăng cấp khi hover/active và ripple lan tâm khi click.',
  defaultText: 'Tạo Mới',
  defaultIcon: 'Sparkles',
  defaultPrimaryColor: '#6366f1',
  defaultAccentColor: '#818cf8',
  defaultRadius: 9999,
  soundType: 'crisp',
  recommendedBg: 'any',
  generateCss: (params) => `/* Material FAB Elevation Ripple Button */
.btn-material-fab {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Roboto', 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.25px;
  border: none;
  border-radius: ${params.radius}px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 1px 5px rgba(0,0,0,0.12);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s ease;
}

.btn-material-fab::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.5);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}

.btn-material-fab:hover {
  background: ${params.accentColor};
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.btn-material-fab:active::after {
  animation: ripple-spread 0.5s ease-out;
  opacity: 1;
}

.btn-material-fab:active {
  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
}`,
  generateHtml: (params) => `<button class="btn-material-fab">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-semibold text-sm rounded-full shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)] overflow-hidden hover:bg-[${params.accentColor}] hover:-translate-y-0.5 hover:shadow-[0_4px_5px_rgba(0,0,0,0.14)] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function MaterialFabElevationButton() {
  return (
    <button
      onClick={() => console.log('FAB clicked')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-semibold text-sm rounded-full shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_1px_5px_rgba(0,0,0,0.12)] overflow-hidden hover:bg-[${params.accentColor}] hover:-translate-y-0.5 transition-all"
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
        className={`relative inline-flex items-center justify-center font-semibold text-white select-none overflow-hidden transition-all duration-300 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: isHovered ? params.accentColor : params.primaryColor,
          borderRadius: `${params.radius}px`,
          boxShadow: activeState
            ? '0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12)'
            : isHovered
            ? '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12)'
            : '0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 1px 5px rgba(0,0,0,0.12)',
          transform: isHovered ? 'translateY(-2px)' : 'none',
        }}
      >
        {activeState && (
          <span
            className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full pointer-events-none animate-[ripple-spread_0.5s_ease-out]"
            style={{ background: 'rgba(255,255,255,0.5)', transform: 'translate(-50%, -50%)' }}
          />
        )}
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
