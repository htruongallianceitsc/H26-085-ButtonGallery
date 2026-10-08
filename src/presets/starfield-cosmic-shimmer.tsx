import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'starfield-cosmic-shimmer',
    name: 'Cosmic Shimmer Sweep (Quét Ánh Sáng)',
    category: 'aurora-gradient',
    tags: ['Shimmer', 'Cosmic', 'Gradient', 'Sweep', 'Luminous'],
    description: 'Chùm sáng vát chéo quét qua bề mặt nút bấm mượt mà theo chu kỳ, tạo điểm nhấn thu hút ánh nhìn.',
    defaultText: 'Nâng Cấp Pro Ngay',
    defaultIcon: 'Zap',
    defaultPrimaryColor: '#8b5cf6',
    defaultAccentColor: '#3b82f6',
    defaultRadius: 14,
    soundType: 'crisp',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Cosmic Shimmer Sweep Button */
.btn-shimmer-sweep {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(135deg, ${params.primaryColor}, ${params.accentColor});
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 24px -4px ${params.primaryColor}66;
  transition: all 0.3s ease;
}

.btn-shimmer-sweep::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    60deg,
    transparent 20%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 80%
  );
  transform: translateX(-100%);
  animation: shimmer-sweep 3s infinite;
}

.btn-shimmer-sweep:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -4px ${params.primaryColor}99;
}

@keyframes shimmer-sweep {
  0% { transform: translateX(-100%) rotate(25deg); }
  50%, 100% { transform: translateX(100%) rotate(25deg); }
}`,
    generateHtml: (params) => `<button class="btn-shimmer-sweep">
  <span>&#9889;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[${params.primaryColor}] to-[${params.accentColor}] text-white font-semibold text-sm rounded-[${params.radius}px] shadow-[0_8px_24px_-4px_${params.primaryColor}80] overflow-hidden group hover:-translate-y-0.5 transition-all">
  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function ShimmerButton() {
  return (
    <button 
      onClick={() => console.log('Shimmer click')}
      className="relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[${params.primaryColor}] to-[${params.accentColor}] text-white font-semibold text-sm rounded-xl shadow-[0_8px_24px_-4px_${params.primaryColor}80] hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12" />
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative inline-flex items-center justify-center font-semibold text-white select-none transition-all duration-300 overflow-hidden ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: `linear-gradient(135deg, ${params.primaryColor}, ${params.accentColor})`,
          boxShadow: isHovered
            ? `0 14px 34px -4px ${params.primaryColor}99`
            : `0 8px 24px -4px ${params.primaryColor}66`,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-2px)' : 'none',
        }}
      >
        <span
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%) skewX(-20deg)',
            animation: 'shimmer 2.8s infinite',
          }}
        />
        <span className="flex items-center gap-2 relative z-10 drop-shadow">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
