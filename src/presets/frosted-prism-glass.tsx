import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'frosted-prism-glass',
    name: 'Frosted Prism Glass',
    category: 'glass',
    tags: ['Glassmorphism', 'Backdrop Blur', 'Iridescent', 'Prism', 'Modern'],
    description: 'Kính mờ quang học với backdrop blur 16px, viền phản quang gradient lăng kính và ánh sáng tán sắc nhẹ.',
    defaultText: 'Khám Phá Chi Tiết',
    defaultIcon: 'Sparkles',
    defaultPrimaryColor: '#a78bfa',
    defaultAccentColor: '#38bdf8',
    defaultRadius: 16,
    soundType: 'glass',
    recommendedBg: 'dark-primary',
    generateCss: (params) => `/* Frosted Prism Glass Button */
.btn-prism-glass {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.36),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.btn-prism-glass::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: ${params.radius + 1}px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.05) 50%, ${params.primaryColor}66);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.btn-prism-glass:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 12px 40px 0 ${params.primaryColor}33,
    inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

.btn-prism-glass:active {
  transform: translateY(1px);
}`,
    generateHtml: (params) => `<button class="btn-prism-glass">
  <span>&#10024;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/5 backdrop-blur-xl text-white font-medium text-sm rounded-[${params.radius}px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_12px_40px_${params.primaryColor}40] hover:-translate-y-0.5 active:translate-y-0.5">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function FrostedPrismButton() {
  return (
    <button 
      onClick={() => console.log('Clicked')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 backdrop-blur-xl text-white font-semibold text-sm rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0.5"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative inline-flex items-center justify-center font-medium transition-all duration-300 select-none backdrop-blur-xl ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: isHovered || params.state === 'hover' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          boxShadow: isHovered
            ? `0 14px 40px 0 ${params.primaryColor}44, inset 0 1px 0 0 rgba(255,255,255,0.6)`
            : '0 8px 32px 0 rgba(0, 0, 0, 0.36), inset 0 1px 0 0 rgba(255, 255, 255, 0.25)',
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-2px)' : 'none',
        }}
      >
        <span className="flex items-center gap-2">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4 text-violet-300')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4 text-sky-300')}
        </span>
      </button>
    ),
  };
