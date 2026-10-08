import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'expanding-icon-slide',
    name: 'Sliding Arrow Reveal (Trượt Mũi Tên)',
    category: 'micro-interactive',
    tags: ['Micro-Interaction', 'Slide', 'Icon Reveal', 'Smooth', 'Modern'],
    description: 'Icon mũi tên ẩn khéo léo trượt vào từ cạnh phải khi người dùng đưa chuột lại gần, tạo chuyển động tự nhiên.',
    defaultText: 'Xem Tất Cả Dự Án',
    defaultIcon: 'ArrowRight',
    defaultPrimaryColor: '#0ea5e9',
    defaultAccentColor: '#0284c7',
    defaultRadius: 9999,
    soundType: 'crisp',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Sliding Arrow Reveal Button */
.btn-icon-slide {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: #0f172a;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-icon-slide .arrow-icon {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-icon-slide:hover {
  background: ${params.primaryColor};
  border-color: ${params.primaryColor};
  box-shadow: 0 10px 25px -5px ${params.primaryColor}66;
  padding-right: 34px;
}

.btn-icon-slide:hover .arrow-icon {
  transform: translateX(6px);
}`,
    generateHtml: (params) => `<button class="btn-icon-slide">
  <span>${params.text}</span>
  <span class="arrow-icon">&rarr;</span>
</button>`,
    generateTailwind: (params) => `<button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0f172a] text-white font-medium text-sm rounded-full border border-white/10 hover:bg-[${params.primaryColor}] hover:border-[${params.primaryColor}] hover:pr-9 transition-all duration-300">
  <span>${params.text}</span>
  <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
</button>`,
    generateReact: (params) => `import React from 'react';
import { ArrowRight } from 'lucide-react';

export function SlidingArrowButton() {
  return (
    <button 
      onClick={() => console.log('Navigated')}
      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-slate-900 text-white font-semibold text-sm rounded-full border border-slate-700/60 hover:bg-[${params.primaryColor}] hover:border-[${params.primaryColor}] hover:pr-8.5 transition-all duration-300 shadow-sm"
    >
      <span>${params.text}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`group inline-flex items-center justify-center font-medium select-none transition-all duration-300 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: isHovered ? params.primaryColor : '#0f172a',
          color: '#ffffff',
          border: `1px solid ${isHovered ? params.primaryColor : 'rgba(255,255,255,0.12)'}`,
          boxShadow: isHovered ? `0 10px 25px -4px ${params.primaryColor}66` : '0 2px 8px rgba(0,0,0,0.2)',
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : 'none',
        }}
      >
        <span className="flex items-center gap-2.5">
          <span>{params.text}</span>
          <span
            className="transition-transform duration-300"
            style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}
          >
            {renderButtonIcon(params.iconName, 'w-4 h-4')}
          </span>
        </span>
      </button>
    ),
  };
