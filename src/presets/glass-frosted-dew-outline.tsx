import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'glass-frosted-dew-outline',
  name: 'Frosted Dew Outline (Viền Sương Đọng)',
  category: 'glass',
  tags: ['Glass', 'Frosted', 'Outline', 'Dew', 'Soft'],
  description: 'Viền gradient mờ như hơi sương buổi sớm, một giọt sáng "dew drop" chạy quanh viền khi di chuột.',
  defaultText: 'Khám Phá Thêm',
  defaultIcon: 'Sparkles',
  defaultPrimaryColor: '#e0f2fe',
  defaultAccentColor: '#38bdf8',
  defaultRadius: 16,
  soundType: 'glass',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Frosted Dew Outline Button */
.btn-dew-outline {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 27px;
  background: rgba(255,255,255,0.04);
  color: ${params.primaryColor};
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: 1.5px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 1.5px rgba(255,255,255,0.18) inset;
  backdrop-filter: blur(10px);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-dew-outline::before {
  content: '';
  position: absolute;
  inset: -1.5px;
  border-radius: ${params.radius}px;
  padding: 1.5px;
  background: conic-gradient(from 0deg, transparent, ${params.accentColor}, transparent 40%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  animation: rotate-beam 2.6s linear infinite;
  transition: opacity 0.3s ease;
}

.btn-dew-outline:hover::before {
  opacity: 1;
}

.btn-dew-outline:hover {
  color: #ffffff;
  background: rgba(255,255,255,0.08);
}`,
  generateHtml: (params) => `<button class="btn-dew-outline">
  <span>&#10024;</span>
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/5 text-sky-100 font-semibold text-sm rounded-[${params.radius}px] ring-1 ring-white/20 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:text-white transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function FrostedDewOutlineButton() {
  return (
    <button
      onClick={() => console.log('Explore more')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/5 text-sky-100 font-semibold text-sm rounded-[${params.radius}px] ring-1 ring-white/20 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:text-white transition-all"
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
        className={`relative inline-flex items-center justify-center font-semibold select-none overflow-hidden backdrop-blur-md transition-all duration-300 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          color: isHovered ? '#ffffff' : params.primaryColor,
          borderRadius: `${params.radius}px`,
          background: isHovered ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.04)',
          boxShadow: '0 0 0 1.5px rgba(255,255,255,0.18) inset',
          transform: activeState ? 'scale(0.97)' : 'none',
        }}
      >
        {isHovered && (
          <span
            className="absolute -inset-[1.5px] rounded-[inherit] animate-[spin_2.6s_linear_infinite] pointer-events-none"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${params.accentColor}, transparent 40%)`,
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1.5px',
            }}
          />
        )}
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
