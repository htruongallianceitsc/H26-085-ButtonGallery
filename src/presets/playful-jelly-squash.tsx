import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'playful-jelly-squash',
    name: 'Bouncy Jelly Pop (Thạch Dẻo Nhún Nhảy)',
    category: 'playful-bubbly',
    tags: ['Playful', 'Jelly', 'Squash & Stretch', 'Spring', 'Bounce'],
    description: 'Hiệu ứng thạch dẻo đàn hồi Squash & Stretch khi click, co giãn mềm xốp đem lại niềm vui thị giác.',
    defaultText: 'Nhấn Vào Thử Xem',
    defaultIcon: 'Heart',
    defaultPrimaryColor: '#f43f5e',
    defaultAccentColor: '#fda4af',
    defaultRadius: 9999,
    soundType: 'pop',
    recommendedBg: 'any',
    generateCss: (params) => `/* Bouncy Jelly Squash Button */
.btn-jelly-squash {
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
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px -2px ${params.primaryColor}66;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-jelly-squash:hover {
  transform: scale(1.06);
}

.btn-jelly-squash:active {
  animation: jelly-bounce 0.5s ease;
}

@keyframes jelly-bounce {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
}`,
    generateHtml: (params) => `<button class="btn-jelly-squash">
  <span>&#10084;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-[${params.radius}px] shadow-[0_8px_20px_-2px_${params.primaryColor}80] hover:scale-105 active:scale-95 transition-transform duration-200">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function JellySquashButton() {
  return (
    <button 
      onClick={() => console.log('Jelly pop')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-full shadow-[0_8px_20px_${params.primaryColor}66] hover:scale-105 active:scale-90 transition-transform duration-200"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-bold text-white select-none transition-all duration-200 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: params.primaryColor,
          boxShadow: isHovered ? `0 12px 28px -2px ${params.primaryColor}88` : `0 8px 20px -2px ${params.primaryColor}66`,
          transform: isActive || params.state === 'active' ? 'scale(0.92, 1.15)' : isHovered ? 'scale(1.06)' : 'scale(1)',
        }}
      >
        <span className="flex items-center gap-2">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
