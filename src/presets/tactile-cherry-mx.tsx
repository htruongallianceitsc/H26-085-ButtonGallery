import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'tactile-cherry-mx',
    name: 'Tactile Cherry Keycap (3D Cơ Học)',
    category: 'skeuomorphic-3d',
    tags: ['3D', 'Skeuomorphic', 'Mechanical', 'Keycap', 'Tactile'],
    description: 'Mô phỏng phím cơ Cherry MX dập nổi với gờ đế viền 3D, hành trình phím thụt xuống 4px và độ nảy lò xo đã tay.',
    defaultText: 'BẤM PHÍM CƠ',
    defaultIcon: 'Layers',
    defaultPrimaryColor: '#3b82f6',
    defaultAccentColor: '#1d4ed8',
    defaultRadius: 12,
    soundType: 'mechanical',
    recommendedBg: 'dark',
    generateCss: (params) => `/* 3D Tactile Mechanical Keycap Button */
.btn-cherry-3d {
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
  letter-spacing: 0.5px;
  border-radius: ${params.radius}px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  box-shadow: 
    0 6px 0 0 ${params.accentColor},
    0 8px 16px 0 rgba(0, 0, 0, 0.35);
  transform: translateY(0);
  transition: all 0.1s ease-in-out;
}

.btn-cherry-3d:hover {
  filter: brightness(1.08);
}

.btn-cherry-3d:active {
  transform: translateY(4px);
  box-shadow: 
    0 2px 0 0 ${params.accentColor},
    0 4px 8px 0 rgba(0, 0, 0, 0.2);
}`,
    generateHtml: (params) => `<button class="btn-cherry-3d">
  <span>&#9881;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-[${params.radius}px] border border-white/20 shadow-[0_6px_0_0_${params.accentColor},0_8px_16px_rgba(0,0,0,0.3)] hover:brightness-105 active:translate-y-1 active:shadow-[0_2px_0_0_${params.accentColor},0_4px_8px_rgba(0,0,0,0.2)] transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function TactileKeycapButton() {
  return (
    <button 
      onClick={() => console.log('Key clicked')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-xl border border-white/20 shadow-[0_6px_0_0_${params.accentColor},0_8px_16px_rgba(0,0,0,0.35)] hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_0_${params.accentColor}] transition-all duration-75"
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
          className={`inline-flex items-center justify-center font-bold tracking-wide transition-all duration-75 select-none ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            borderRadius: `${params.radius}px`,
            background: params.primaryColor,
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: activeState
              ? `0 2px 0 0 ${params.accentColor}, 0 4px 8px 0 rgba(0,0,0,0.3)`
              : `0 6px 0 0 ${params.accentColor}, 0 10px 20px 0 rgba(0,0,0,0.35)`,
            transform: activeState ? 'translateY(4px)' : isHovered ? 'translateY(-1px)' : 'translateY(0)',
            filter: isHovered ? 'brightness(1.08)' : 'brightness(1)',
          }}
        >
          <span className="flex items-center gap-2 drop-shadow-sm">
            {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
            <span>{params.text}</span>
            {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          </span>
        </button>
      );
    },
  };
