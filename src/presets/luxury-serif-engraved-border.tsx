import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'luxury-serif-engraved-border',
  name: 'Serif Engraved Border (Viền Chạm Khắc Serif)',
  category: 'luxury-minimal',
  tags: ['Luxury', 'Serif', 'Engraved', 'Minimal', 'Elegant'],
  description: 'Font serif thanh lịch với viền hairline đôi kiểu chạm khắc, ánh kim loại lướt ngang khi di chuột.',
  defaultText: 'Khám Phá Bộ Sưu Tập',
  defaultIcon: 'Star',
  defaultPrimaryColor: '#f8fafc',
  defaultAccentColor: '#d4af37',
  defaultRadius: 2,
  soundType: 'crisp',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Serif Engraved Border Button */
.btn-serif-engraved {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px 34px;
  background: transparent;
  color: ${params.primaryColor};
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  border: 1px solid ${params.primaryColor}55;
  outline: 1px solid ${params.primaryColor}25;
  outline-offset: 4px;
  border-radius: ${params.radius}px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s ease;
}

.btn-serif-engraved::before {
  content: '';
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(100deg, transparent, ${params.accentColor}55, transparent);
  transform: skewX(-15deg);
  transition: left 0.6s ease;
}

.btn-serif-engraved:hover {
  border-color: ${params.accentColor};
  outline-color: ${params.accentColor}55;
  color: ${params.accentColor};
}

.btn-serif-engraved:hover::before {
  left: 140%;
}`,
  generateHtml: (params) => `<button class="btn-serif-engraved">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-slate-50 font-serif text-sm tracking-widest border border-slate-50/40 outline outline-1 outline-offset-4 outline-slate-50/20 overflow-hidden hover:border-[${params.accentColor}] hover:text-[${params.accentColor}] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function SerifEngravedBorderButton() {
  return (
    <button
      onClick={() => console.log('Explore collection')}
      className="relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-slate-50 font-serif text-sm tracking-widest border border-slate-50/40 outline outline-1 outline-offset-4 outline-slate-50/20 overflow-hidden hover:border-[${params.accentColor}] hover:text-[${params.accentColor}] transition-all"
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
        className={`relative inline-flex items-center justify-center font-serif tracking-widest select-none overflow-hidden transition-all duration-300 ${
          params.size === 'sm' ? 'px-5 py-2.5 text-xs' : params.size === 'lg' ? 'px-9 py-4.5 text-base' : params.size === 'xl' ? 'px-11 py-5 text-lg' : 'px-8 py-4 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: 'transparent',
          color: isHovered ? params.accentColor : params.primaryColor,
          border: `1px solid ${isHovered ? params.accentColor : `${params.primaryColor}55`}`,
          outline: `1px solid ${isHovered ? `${params.accentColor}55` : `${params.primaryColor}25`}`,
          outlineOffset: '4px',
          borderRadius: `${params.radius}px`,
          transform: activeState ? 'scale(0.98)' : 'none',
        }}
      >
        <span
          className="absolute top-0 h-full w-[40%] pointer-events-none transition-all duration-500"
          style={{
            left: isHovered ? '140%' : '-60%',
            background: `linear-gradient(100deg, transparent, ${params.accentColor}55, transparent)`,
            transform: 'skewX(-15deg)',
          }}
        />
        <span className="flex items-center gap-2.5 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
