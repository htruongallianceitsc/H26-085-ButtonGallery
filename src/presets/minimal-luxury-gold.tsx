import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'minimal-luxury-gold',
    name: 'Minimal Luxury Monolith (Thanh Lịch Gold)',
    category: 'luxury-minimal',
    tags: ['Luxury', 'Minimal', 'Gold', 'Editorial', 'Hairline'],
    description: 'Phong cách tạp chí thời trang thượng lưu với viền hairline mạ vàng, giãn chữ tracking rộng và đường gạch tinh tế.',
    defaultText: 'BỘ SƯU TẬP CAO CẤP',
    defaultIcon: 'Star',
    defaultPrimaryColor: '#d4af37',
    defaultAccentColor: '#faf8f5',
    defaultRadius: 0,
    soundType: 'crisp',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Minimal Luxury Gold Button */
.btn-luxury-gold {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 16px 36px;
  background: transparent;
  color: ${params.primaryColor};
  font-family: 'Plus Jakarta Sans', serif;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  border: 1px solid ${params.primaryColor}88;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.btn-luxury-gold::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${params.primaryColor};
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: -1;
}

.btn-luxury-gold:hover {
  color: #0b0f17;
  border-color: ${params.primaryColor};
  box-shadow: 0 10px 30px -5px ${params.primaryColor}44;
}

.btn-luxury-gold:hover::before {
  transform: translateY(0);
}`,
    generateHtml: (params) => `<button class="btn-luxury-gold">
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative inline-flex items-center gap-3 px-9 py-4 bg-transparent text-[${params.primaryColor}] font-medium text-xs uppercase tracking-[0.25em] border border-[${params.primaryColor}]/50 overflow-hidden transition-all duration-400 hover:text-black hover:border-[${params.primaryColor}] group">
  <span className="absolute inset-0 bg-[${params.primaryColor}] translate-y-full group-hover:translate-y-0 transition-transform duration-400 -z-10" />
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function MinimalLuxuryButton() {
  return (
    <button 
      onClick={() => console.log('Luxury view')}
      className="relative group inline-flex items-center gap-3 px-8 py-3.5 bg-transparent text-[${params.primaryColor}] text-xs uppercase tracking-[3px] font-medium border border-[${params.primaryColor}]/60 overflow-hidden transition-colors duration-300 hover:text-[#0b0f17]"
    >
      <span className="absolute inset-0 bg-[${params.primaryColor}] translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative group inline-flex items-center justify-center uppercase select-none transition-all duration-300 overflow-hidden ${
          params.size === 'sm' ? 'px-5 py-2.5 text-[10px] tracking-[2px]' : params.size === 'lg' ? 'px-10 py-4 text-sm tracking-[4px]' : params.size === 'xl' ? 'px-12 py-5 text-base tracking-[5px]' : 'px-8 py-3.5 text-xs tracking-[3px]'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          border: `1px solid ${isHovered ? params.primaryColor : params.primaryColor + '66'}`,
          background: isHovered ? params.primaryColor : 'transparent',
          color: isHovered ? '#090d16' : params.primaryColor,
          boxShadow: isHovered ? `0 10px 30px -5px ${params.primaryColor}55` : 'none',
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : 'none',
        }}
      >
        <span className="flex items-center gap-3 font-medium">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-3.5 h-3.5')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-3.5 h-3.5')}
        </span>
      </button>
    ),
  };
