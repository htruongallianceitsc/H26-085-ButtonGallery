import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'glossy-jelly-candy',
    name: 'Y2K Glossy Candy Bubble (Kẹo Dẻo Bóng)',
    category: 'playful-bubbly',
    tags: ['Y2K', 'Glossy', 'Candy', 'Bubble', 'Skeuomorphic'],
    description: 'Nút bấm bong bóng kẹo dẻo thập niên 2000 với viền vòm phản quang hình lưỡi liềm ở đỉnh.',
    defaultText: 'THƯỞNG THỨC KẸO NGỌT',
    defaultIcon: 'Heart',
    defaultPrimaryColor: '#059669',
    defaultAccentColor: '#34d399',
    defaultRadius: 9999,
    soundType: 'pop',
    recommendedBg: 'any',
    generateCss: (params) => `/* Y2K Glossy Candy Bubble Button */
.btn-glossy-candy {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(180deg, ${params.accentColor} 0%, ${params.primaryColor} 100%);
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  border-radius: ${params.radius}px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  box-shadow: 
    0 8px 16px -2px rgba(0, 0, 0, 0.3),
    inset 0 -4px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: all 0.2s ease;
}

.btn-glossy-candy::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 10%;
  right: 10%;
  height: 45%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 9999px;
  pointer-events: none;
}

.btn-glossy-candy:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.btn-glossy-candy:active {
  transform: translateY(2px);
  box-shadow: 
    0 2px 6px -1px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(0, 0, 0, 0.3);
}`,
    generateHtml: (params) => `<button class="btn-glossy-candy">
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-b from-[${params.accentColor}] to-[${params.primaryColor}] text-white font-extrabold text-sm rounded-full border border-white/30 shadow-lg overflow-hidden hover:-translate-y-0.5 active:translate-y-0.5 transition-all">
  <span className="absolute top-1 inset-x-4 h-[40%] bg-gradient-to-b from-white/60 to-white/5 rounded-full pointer-events-none" />
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function GlossyCandyButton() {
  return (
    <button 
      onClick={() => console.log('Candy clicked')}
      className="relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-extrabold text-sm rounded-full border border-white/30 shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
    >
      <div className="absolute top-1 left-4 right-4 h-1/2 bg-gradient-to-b from-white/70 to-transparent rounded-full pointer-events-none" />
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
          className={`relative inline-flex items-center justify-center font-extrabold text-white select-none transition-all duration-150 overflow-hidden ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            borderRadius: `${params.radius}px`,
            background: `linear-gradient(180deg, ${params.accentColor} 0%, ${params.primaryColor} 100%)`,
            border: '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow: activeState
              ? '0 2px 6px -1px rgba(0,0,0,0.4), inset 0 3px 5px rgba(0,0,0,0.3)'
              : isHovered
              ? '0 12px 24px -2px rgba(0, 0, 0, 0.4), inset 0 -3px 5px rgba(0,0,0,0.2)'
              : '0 8px 16px -2px rgba(0, 0, 0, 0.3), inset 0 -4px 6px rgba(0,0,0,0.25)',
            transform: activeState ? 'translateY(2px)' : isHovered ? 'translateY(-2px)' : 'none',
          }}
        >
          {/* Top gloss curve */}
          <span
            className="absolute top-1 left-[8%] right-[8%] h-[45%] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 100%)',
              borderRadius: '9999px',
            }}
          />
          <span className="flex items-center gap-2 relative z-10 drop-shadow">
            {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
            <span>{params.text}</span>
            {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          </span>
        </button>
      );
    },
  };
