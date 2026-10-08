import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'minimal-split-underline',
    name: 'Editorial Kinetic Underline (Gạch Chân Động)',
    category: 'luxury-minimal',
    tags: ['Minimal', 'Editorial', 'Underline', 'Typography', 'Sleek'],
    description: 'Thiết kế tối giản thuần chất typography với đường gạch chân mỏng nở rộng từ trung tâm khi tương tác.',
    defaultText: 'Đọc Tiếp Câu Chuyện',
    defaultIcon: 'ArrowRight',
    defaultPrimaryColor: '#f1f5f9',
    defaultAccentColor: '#38bdf8',
    defaultRadius: 0,
    soundType: 'crisp',
    recommendedBg: 'any',
    generateCss: (params) => `/* Editorial Kinetic Underline Button */
.btn-editorial-underline {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 0px;
  background: transparent;
  color: ${params.primaryColor};
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;
}

.btn-editorial-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: ${params.accentColor};
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-editorial-underline:hover {
  color: ${params.accentColor};
}

.btn-editorial-underline:hover::after {
  width: 100%;
}`,
    generateHtml: (params) => `<button class="btn-editorial-underline">
  <span>${params.text}</span>
  <span>&rarr;</span>
</button>`,
    generateTailwind: (params) => `<button className="relative group inline-flex items-center gap-2 py-3 bg-transparent text-slate-100 font-semibold text-sm hover:text-sky-400 transition-colors">
  <span>${params.text}</span>
  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300" />
</button>`,
    generateReact: (params) => `import React from 'react';
import { ChevronRight } from 'lucide-react';

export function KineticUnderlineButton() {
  return (
    <button 
      onClick={() => console.log('Read more')}
      className="relative group inline-flex items-center gap-2 py-2.5 bg-transparent text-slate-200 font-semibold text-sm hover:text-[${params.accentColor}] transition-colors"
    >
      <span>${params.text}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[${params.accentColor}] group-hover:w-full transition-all duration-300" />
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative group inline-flex items-center justify-center font-semibold select-none transition-colors duration-250 ${
          params.size === 'sm' ? 'py-1.5 text-xs' : params.size === 'lg' ? 'py-3 text-base' : params.size === 'xl' ? 'py-4 text-lg' : 'py-2.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: 'transparent',
          color: isHovered ? params.accentColor : params.primaryColor,
        }}
      >
        <span className="flex items-center gap-2">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && (
            <span
              className="transition-transform duration-250"
              style={{ transform: isHovered ? 'translateX(4px)' : 'none' }}
            >
              {renderButtonIcon(params.iconName, 'w-4 h-4')}
            </span>
          )}
        </span>
        <span
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
          style={{
            background: params.accentColor,
            width: isHovered ? '100%' : '0%',
          }}
        />
      </button>
    ),
  };
