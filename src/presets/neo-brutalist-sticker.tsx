import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'neo-brutalist-sticker',
    name: 'Neo-Brutalist Slanted Sticker (Tem Dán Nghiêng)',
    category: 'brutalist',
    tags: ['Brutalism', 'Sticker', 'Slanted', 'Tilt', 'Warning Stripe'],
    description: 'Miếng dán sticker nghiêng -2 độ với viền sọc cảnh báo vàng đen và lực nảy giật cá tính.',
    defaultText: 'PHIÊN BẢN GIỚI HẠN',
    defaultIcon: 'Flame',
    defaultPrimaryColor: '#ff0055',
    defaultAccentColor: '#000000',
    defaultRadius: 0,
    soundType: 'crisp',
    recommendedBg: 'light',
    generateCss: (params) => `/* Neo-Brutalist Slanted Sticker */
.btn-sticker-tilt {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 3px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  transform: rotate(-2deg);
  cursor: pointer;
  transition: all 0.15s ease-out;
}

.btn-sticker-tilt:hover {
  transform: rotate(0deg) scale(1.04);
  box-shadow: 7px 7px 0px #000000;
}

.btn-sticker-tilt:active {
  transform: translate(3px, 3px) rotate(0deg);
  box-shadow: 2px 2px 0px #000000;
}`,
    generateHtml: (params) => `<button class="btn-sticker-tilt">
  <span>&#9889;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-black text-sm uppercase -rotate-2 border-[3px] border-black shadow-[5px_5px_0_0_#000] hover:rotate-0 hover:scale-105 active:translate-x-1 active:translate-y-1 transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function StickerButton() {
  return (
    <button 
      onClick={() => console.log('Sticker click')}
      className="inline-flex items-center gap-2.5 px-6 py-3 bg-[${params.primaryColor}] text-white font-black text-xs uppercase tracking-wider -rotate-2 border-[3px] border-black shadow-[5px_5px_0px_#000] hover:rotate-0 hover:scale-105 active:translate-x-1 active:translate-y-1 transition-all"
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
          className={`inline-flex items-center justify-center font-black uppercase tracking-wider select-none transition-all duration-150 border-[3px] border-black ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            background: params.primaryColor,
            color: '#ffffff',
            boxShadow: activeState ? '2px 2px 0px #000000' : isHovered ? '7px 7px 0px #000000' : '5px 5px 0px #000000',
            transform: activeState ? 'translate(3px, 3px) rotate(0deg)' : isHovered ? 'rotate(0deg) scale(1.03)' : 'rotate(-2deg)',
          }}
        >
          <span className="flex items-center gap-2">
            {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4 text-white')}
            <span>{params.text}</span>
            {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4 text-white')}
          </span>
        </button>
      );
    },
  };
