import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'playful-balloon-inflate-pop',
  name: 'Balloon Inflate Pop (Bóng Bay Phồng Nổ)',
  category: 'playful-bubbly',
  tags: ['Playful', 'Balloon', 'Inflate', 'Bouncy', 'Fun'],
  description: 'Nút phồng to dần như bóng bay được bơm hơi khi di chuột, rồi "nổ" co nhún lại khi click.',
  defaultText: 'BƠM HƠI NÀO',
  defaultIcon: 'Heart',
  defaultPrimaryColor: '#ec4899',
  defaultAccentColor: '#f9a8d4',
  defaultRadius: 9999,
  soundType: 'pop',
  recommendedBg: 'any',
  generateCss: (params) => `/* Balloon Inflate Pop Button */
.btn-balloon-inflate {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 30px;
  background: radial-gradient(circle at 35% 25%, ${params.accentColor}, ${params.primaryColor});
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  border: none;
  border-radius: ${params.radius}px;
  box-shadow: 0 10px 22px -6px ${params.primaryColor}aa, inset 0 -6px 10px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
}

.btn-balloon-inflate:hover {
  transform: scale(1.1);
  box-shadow: 0 14px 30px -6px ${params.primaryColor}cc, inset 0 -6px 10px rgba(0,0,0,0.15);
}

.btn-balloon-inflate:active {
  animation: jelly-bounce 0.5s ease;
  transform: scale(0.85);
}`,
  generateHtml: (params) => `<button class="btn-balloon-inflate">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-radial from-[${params.accentColor}] to-[${params.primaryColor}] text-white font-extrabold text-sm rounded-full shadow-[0_10px_22px_-6px_${params.primaryColor}aa] hover:scale-110 active:scale-85 transition-transform">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function BalloonInflatePopButton() {
  return (
    <button
      onClick={() => console.log('Pop!')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[radial-gradient(circle_at_35%_25%,${params.accentColor},${params.primaryColor})] text-white font-extrabold text-sm rounded-full shadow-[0_10px_22px_-6px_${params.primaryColor}aa] hover:scale-110 active:scale-85 transition-transform duration-200"
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
        className={`relative inline-flex items-center justify-center font-extrabold text-white select-none transition-transform duration-250 ${
          activeState ? 'animate-[jelly-bounce_0.5s_ease]' : ''
        } ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: `radial-gradient(circle at 35% 25%, ${params.accentColor}, ${params.primaryColor})`,
          borderRadius: `${params.radius}px`,
          boxShadow: isHovered
            ? `0 14px 30px -6px ${params.primaryColor}cc, inset 0 -6px 10px rgba(0,0,0,0.15)`
            : `0 10px 22px -6px ${params.primaryColor}aa, inset 0 -6px 10px rgba(0,0,0,0.15)`,
          transform: activeState ? 'scale(0.85)' : isHovered ? 'scale(1.1)' : 'scale(1)',
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
