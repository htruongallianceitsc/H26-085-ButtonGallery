import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'liquid-wave-fill',
    name: 'Liquid Fluid Fill (Sóng Nước Trào)',
    category: 'micro-interactive',
    tags: ['Liquid', 'Wave', 'Fill', 'Smooth', 'Fluid'],
    description: 'Chất lỏng màu tràn dâng từ đáy lên khi rê chuột, đảo chiều màu chữ mượt mà như mực loang.',
    defaultText: 'ĐĂNG KÝ THÀNH VIÊN',
    defaultIcon: 'Send',
    defaultPrimaryColor: '#06b6d4',
    defaultAccentColor: '#0891b2',
    defaultRadius: 10,
    soundType: 'pop',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Liquid Wave Fill Button */
.btn-liquid-fill {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: transparent;
  color: ${params.primaryColor};
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border-radius: ${params.radius}px;
  border: 2px solid ${params.primaryColor};
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}

.btn-liquid-fill::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: ${params.primaryColor};
  transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: -1;
  border-radius: ${Math.max(0, params.radius - 2)}px ${Math.max(0, params.radius - 2)}px 0 0;
}

.btn-liquid-fill:hover {
  color: #041217;
}

.btn-liquid-fill:hover::before {
  height: 100%;
}`,
    generateHtml: (params) => `<button class="btn-liquid-fill">
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[${params.primaryColor}] font-bold text-sm border-2 border-[${params.primaryColor}] rounded-[${params.radius}px] overflow-hidden transition-colors duration-300 hover:text-black">
  <span className="absolute bottom-0 left-0 w-full h-0 bg-[${params.primaryColor}] group-hover:h-full transition-all duration-300 -z-10" />
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function LiquidWaveButton() {
  return (
    <button 
      onClick={() => console.log('Liquid filled')}
      className="relative group inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-[${params.primaryColor}] font-bold text-sm border-2 border-[${params.primaryColor}] rounded-xl overflow-hidden transition-colors duration-300 hover:text-slate-950"
    >
      <span className="absolute bottom-0 left-0 w-full h-0 bg-[${params.primaryColor}] group-hover:h-full transition-all duration-300 -z-10" />
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative group inline-flex items-center justify-center font-bold select-none transition-colors duration-300 overflow-hidden ${
          params.size === 'sm' ? 'px-4 py-2 text-xs border' : params.size === 'lg' ? 'px-8 py-4 text-base border-2' : params.size === 'xl' ? 'px-10 py-5 text-lg border-2' : 'px-6 py-3 text-sm border-2'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          borderColor: params.primaryColor,
          color: isHovered ? '#05131a' : params.primaryColor,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : 'none',
        }}
      >
        <span
          className="absolute bottom-0 left-0 w-full transition-all duration-300 ease-out -z-10"
          style={{
            height: isHovered ? '100%' : '0%',
            background: params.primaryColor,
          }}
        />
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
