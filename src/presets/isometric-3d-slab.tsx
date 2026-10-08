import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'isometric-3d-slab',
    name: 'Isometric 3D Depth (Khối Vát Nghiêng)',
    category: 'skeuomorphic-3d',
    tags: ['Isometric', '3D', 'Depth', 'Layered', 'Geometric'],
    description: 'Khối nút bấm đa chiều 3D vát góc nghiêng, khi bấm xuống sẽ lún vào rãnh khung phẳng chuẩn xác.',
    defaultText: 'XÂY DỰNG NGAY',
    defaultIcon: 'Layers',
    defaultPrimaryColor: '#8b5cf6',
    defaultAccentColor: '#6d28d9',
    defaultRadius: 8,
    soundType: 'mechanical',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Isometric 3D Slab Button */
.btn-iso-3d {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border-radius: ${params.radius}px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  box-shadow: 
    -1px 1px 0 ${params.accentColor},
    -2px 2px 0 ${params.accentColor},
    -3px 3px 0 ${params.accentColor},
    -4px 4px 0 ${params.accentColor},
    -5px 5px 0 ${params.accentColor},
    -6px 6px 12px rgba(0, 0, 0, 0.4);
  transform: translate(0, 0);
  transition: all 0.15s ease-out;
}

.btn-iso-3d:hover {
  transform: translate(2px, -2px);
  box-shadow: 
    -1px 1px 0 ${params.accentColor},
    -2px 2px 0 ${params.accentColor},
    -3px 3px 0 ${params.accentColor},
    -4px 4px 0 ${params.accentColor},
    -5px 5px 0 ${params.accentColor},
    -6px 6px 0 ${params.accentColor},
    -7px 7px 0 ${params.accentColor},
    -8px 8px 16px rgba(0, 0, 0, 0.45);
}

.btn-iso-3d:active {
  transform: translate(-3px, 3px);
  box-shadow: 
    -1px 1px 0 ${params.accentColor},
    -2px 2px 4px rgba(0, 0, 0, 0.3);
}`,
    generateHtml: (params) => `<button class="btn-iso-3d">
  <span>&#128394;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-[${params.radius}px] border border-white/25 shadow-[-4px_4px_0_0_${params.accentColor},-6px_6px_12px_rgba(0,0,0,0.35)] hover:translate-x-0.5 hover:-translate-y-0.5 active:-translate-x-1 active:translate-y-1 transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function IsometricButton() {
  return (
    <button 
      onClick={() => console.log('Isometric click')}
      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-lg border border-white/20 shadow-[-5px_5px_0_0_${params.accentColor},-8px_8px_16px_rgba(0,0,0,0.4)] hover:translate-x-0.5 hover:-translate-y-0.5 active:-translate-x-1 active:translate-y-1 transition-all"
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
          className={`inline-flex items-center justify-center font-bold text-white select-none transition-all duration-150 ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            borderRadius: `${params.radius}px`,
            background: params.primaryColor,
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: activeState
              ? `-1px 1px 0 ${params.accentColor}, -2px 2px 4px rgba(0,0,0,0.3)`
              : isHovered
              ? `-1px 1px 0 ${params.accentColor}, -2px 2px 0 ${params.accentColor}, -3px 3px 0 ${params.accentColor}, -4px 4px 0 ${params.accentColor}, -5px 5px 0 ${params.accentColor}, -6px 6px 0 ${params.accentColor}, -8px 8px 16px rgba(0,0,0,0.45)`
              : `-1px 1px 0 ${params.accentColor}, -2px 2px 0 ${params.accentColor}, -3px 3px 0 ${params.accentColor}, -4px 4px 0 ${params.accentColor}, -5px 5px 12px rgba(0,0,0,0.35)`,
            transform: activeState ? 'translate(-3px, 3px)' : isHovered ? 'translate(2px, -2px)' : 'none',
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
