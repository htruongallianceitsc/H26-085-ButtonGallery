import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'neo-brutalist-pop',
    name: 'Neo-Brutalist POP',
    category: 'brutalist',
    tags: ['Brutalism', 'Retro', 'High Contrast', 'Shadow Offset', 'Bold'],
    description: 'Viền đen dày 3px, đổ bóng đen góc 4px cứng cáp không mờ, bộc phát sự trẻ trung và dứt khoát.',
    defaultText: 'HÃY NHẤN VÀO ĐÂY',
    defaultIcon: 'Zap',
    defaultPrimaryColor: '#ffe600',
    defaultAccentColor: '#000000',
    defaultRadius: 6,
    soundType: 'crisp',
    recommendedBg: 'light',
    generateCss: (params) => `/* Neo-Brutalist POP Button */
.btn-neo-brutalist {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #000000;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 3px solid #000000;
  border-radius: ${params.radius}px;
  box-shadow: 4px 4px 0px 0px #000000;
  cursor: pointer;
  transition: all 0.15s ease-out;
}

.btn-neo-brutalist:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #000000;
}

.btn-neo-brutalist:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0px 0px #000000;
}`,
    generateHtml: (params) => `<button class="btn-neo-brutalist">
  <span>&#9889;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-black font-extrabold text-sm uppercase border-[3px] border-black rounded-[${params.radius}px] shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function NeoBrutalistButton() {
  return (
    <button 
      onClick={() => console.log('Brutalist click')}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[${params.primaryColor}] text-black font-black text-sm uppercase tracking-wider border-[3px] border-black rounded-lg shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all"
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
          className={`inline-flex items-center justify-center font-extrabold uppercase tracking-wide select-none transition-all duration-150 ${
            params.size === 'sm' ? 'px-4 py-2 text-xs border-2' : params.size === 'lg' ? 'px-8 py-4 text-base border-[3px]' : params.size === 'xl' ? 'px-10 py-5 text-lg border-[3px]' : 'px-6 py-3 text-sm border-[3px]'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            borderColor: '#000000',
            background: params.primaryColor,
            color: '#000000',
            borderRadius: `${params.radius}px`,
            boxShadow: activeState
              ? '1px 1px 0px 0px #000000'
              : isHovered
              ? '6px 6px 0px 0px #000000'
              : '4px 4px 0px 0px #000000',
            transform: activeState ? 'translate(3px, 3px)' : isHovered ? 'translate(-2px, -2px)' : 'none',
          }}
        >
          <span className="flex items-center gap-2">
            {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4 text-black')}
            <span>{params.text}</span>
            {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4 text-black')}
          </span>
        </button>
      );
    },
  };
