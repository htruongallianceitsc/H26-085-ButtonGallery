import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'brutalist-comic-halftone-pop',
  name: 'Comic Halftone Pop (Chấm Bi Truyện Tranh)',
  category: 'brutalist',
  tags: ['Brutalist', 'Comic', 'Halftone', 'Pop Art', 'Bold'],
  description: 'Nền chấm bi halftone kiểu truyện tranh, viền đen dày bản, lệch nghiêng kiểu "POW" khi nhấn.',
  defaultText: 'BÙM! NHẤN NGAY',
  defaultIcon: 'Flame',
  defaultPrimaryColor: '#facc15',
  defaultAccentColor: '#ef4444',
  defaultRadius: 4,
  soundType: 'crisp',
  recommendedBg: 'light',
  generateCss: (params) => `/* Comic Halftone Pop Button */
.btn-comic-halftone {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 30px;
  background: ${params.primaryColor};
  background-image: radial-gradient(${params.accentColor}99 1.5px, transparent 1.5px);
  background-size: 9px 9px;
  color: #0a0a0a;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  border: 3px solid #0a0a0a;
  border-radius: ${params.radius}px;
  box-shadow: 6px 6px 0 0 #0a0a0a;
  cursor: pointer;
  transition: all 0.12s ease;
}

.btn-comic-halftone:hover {
  transform: rotate(-1.5deg) translate(-2px, -2px);
  box-shadow: 8px 8px 0 0 #0a0a0a;
}

.btn-comic-halftone:active {
  transform: translate(4px, 4px) rotate(0deg);
  box-shadow: 2px 2px 0 0 #0a0a0a;
}`,
  generateHtml: (params) => `<button class="btn-comic-halftone">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-black font-black text-sm uppercase border-[3px] border-black rounded-[${params.radius}px] shadow-[6px_6px_0_0_#0a0a0a] hover:-rotate-1 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#0a0a0a] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function ComicHalftonePopButton() {
  return (
    <button
      onClick={() => console.log('POW!')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-black font-black text-sm uppercase border-[3px] border-black rounded-[${params.radius}px] shadow-[6px_6px_0_0_#0a0a0a] hover:-rotate-1 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#0a0a0a] transition-all"
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
        className={`inline-flex items-center justify-center font-black uppercase text-black select-none transition-all duration-100 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: params.primaryColor,
          backgroundImage: `radial-gradient(${params.accentColor}99 1.5px, transparent 1.5px)`,
          backgroundSize: '9px 9px',
          border: '3px solid #0a0a0a',
          borderRadius: `${params.radius}px`,
          boxShadow: activeState ? '2px 2px 0 0 #0a0a0a' : isHovered ? '8px 8px 0 0 #0a0a0a' : '6px 6px 0 0 #0a0a0a',
          transform: activeState ? 'translate(4px, 4px)' : isHovered ? 'rotate(-1.5deg) translate(-2px, -2px)' : 'none',
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
