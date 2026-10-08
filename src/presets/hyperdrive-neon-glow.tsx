import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'hyperdrive-neon-glow',
    name: 'Hyperdrive Neon Pulse (Xung Nhịp Neon)',
    category: 'aurora-gradient',
    tags: ['Neon', 'Glow', 'Hyperdrive', 'Vibrant', 'Pulse'],
    description: 'Vầng hào quang neon cực đại đập nhịp nhàng, màu sắc rực rỡ thu hút mọi sự chú ý vào nút Call-To-Action.',
    defaultText: 'KÍCH HOẠT SIÊU TỐC',
    defaultIcon: 'Flame',
    defaultPrimaryColor: '#f97316',
    defaultAccentColor: '#e11d48',
    defaultRadius: 14,
    soundType: 'cyber',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Hyperdrive Neon Pulse Button */
.btn-neon-pulse {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border-radius: ${params.radius}px;
  border: none;
  cursor: pointer;
  box-shadow: 
    0 0 15px ${params.primaryColor}88,
    0 0 35px ${params.primaryColor}44;
  animation: neon-pulse 2s infinite alternate;
  transition: all 0.2s ease;
}

.btn-neon-pulse:hover {
  filter: brightness(1.15);
  transform: scale(1.03);
  box-shadow: 
    0 0 25px ${params.primaryColor},
    0 0 50px ${params.accentColor}aa;
}

@keyframes neon-pulse {
  from {
    box-shadow: 0 0 12px ${params.primaryColor}66, 0 0 25px ${params.accentColor}33;
  }
  to {
    box-shadow: 0 0 24px ${params.primaryColor}cc, 0 0 45px ${params.accentColor}66;
  }
}`,
    generateHtml: (params) => `<button class="btn-neon-pulse">
  <span>&#9889;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-[${params.radius}px] shadow-[0_0_20px_${params.primaryColor}80] hover:scale-105 hover:shadow-[0_0_35px_${params.primaryColor}] transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function NeonPulseButton() {
  return (
    <button 
      onClick={() => console.log('Neon clicked')}
      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-xl shadow-[0_0_20px_${params.primaryColor}80] hover:scale-105 hover:shadow-[0_0_35px_${params.primaryColor}] transition-all duration-200"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-bold text-white select-none transition-all duration-200 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: params.primaryColor,
          boxShadow: isHovered
            ? `0 0 30px ${params.primaryColor}, 0 0 60px ${params.accentColor}88`
            : `0 0 16px ${params.primaryColor}88, 0 0 32px ${params.accentColor}44`,
          transform: isActive || params.state === 'active' ? 'scale(0.98)' : isHovered ? 'scale(1.03)' : 'none',
        }}
      >
        <span className="flex items-center gap-2 drop-shadow">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
