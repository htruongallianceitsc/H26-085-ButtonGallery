import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'aurora-border-beam',
    name: 'Aurora Border Beam (Cực Quang Chạy)',
    category: 'aurora-gradient',
    tags: ['Aurora', 'Border Beam', 'Gradient', 'Neon', 'Cosmic'],
    description: 'Chùm tia laser cực quang xoay quanh viền 360 độ liên tục, tạo cảm giác linh kiện công nghệ cao.',
    defaultText: 'Bắt Đầu Trải Nghiệm',
    defaultIcon: 'Rocket',
    defaultPrimaryColor: '#6366f1',
    defaultAccentColor: '#ec4899',
    defaultRadius: 9999,
    soundType: 'cyber',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Aurora Border Beam Button */
.btn-aurora-beam {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: #090d16;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 0 20px -5px ${params.primaryColor}88;
  transition: all 0.3s ease;
}

.btn-aurora-beam::before {
  content: '';
  position: absolute;
  inset: -100%;
  background: conic-gradient(from 0deg, transparent 0deg, ${params.primaryColor} 120deg, ${params.accentColor} 180deg, transparent 240deg);
  animation: rotate-beam 3s linear infinite;
  z-index: -2;
}

.btn-aurora-beam::after {
  content: '';
  position: absolute;
  inset: 1.5px;
  background: #0d121f;
  border-radius: ${params.radius}px;
  z-index: -1;
  transition: background 0.3s ease;
}

.btn-aurora-beam:hover {
  box-shadow: 0 0 35px 0px ${params.primaryColor}cc;
  transform: translateY(-2px);
}

.btn-aurora-beam:hover::after {
  background: #141c30;
}

@keyframes rotate-beam {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    generateHtml: (params) => `<button class="btn-aurora-beam">
  <span>&#128640;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<div className="relative inline-flex p-[1.5px] overflow-hidden rounded-[${params.radius}px] group">
  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_120deg,#6366f1_180deg,#ec4899_240deg,transparent_300deg)]" />
  <button className="relative px-7 py-3.5 bg-[#090d16] text-white font-semibold text-sm rounded-[${params.radius}px] z-10 transition-colors group-hover:bg-[#111726]">
    ${params.text}
  </button>
</div>`,
    generateReact: (params) => `import React from 'react';

export function AuroraBorderBeamButton() {
  return (
    <div className="relative inline-flex p-[1.5px] overflow-hidden rounded-full group cursor-pointer">
      <span className="absolute inset-[-100%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,${params.primaryColor}_120deg,${params.accentColor}_180deg,transparent_240deg)]" />
      <button className="relative px-7 py-3.5 bg-[#090d16] text-white font-medium text-sm rounded-full z-10 transition-all duration-300 group-hover:bg-[#131929] group-hover:shadow-[0_0_30px_${params.primaryColor}66]">
        ${params.text}
      </button>
    </div>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <div
        onClick={onClick}
        className={`relative inline-flex p-[1.5px] overflow-hidden select-none transition-all duration-300 ${
          params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
        }`}
        style={{
          borderRadius: `${params.radius}px`,
          boxShadow: isHovered ? `0 0 35px 2px ${params.primaryColor}88` : `0 0 15px -3px ${params.primaryColor}44`,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-2px)' : 'none',
        }}
      >
        <span
          className="absolute inset-[-150%] animate-[spin_3s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${params.primaryColor} 120deg, ${params.accentColor} 180deg, transparent 240deg)`,
          }}
        />
        <button
          disabled={params.disabled}
          className={`relative z-10 flex items-center justify-center font-semibold text-white transition-colors duration-200 ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          }`}
          style={{
            borderRadius: `${params.radius}px`,
            background: isHovered ? '#141c30' : '#090d16',
          }}
        >
          <span className="flex items-center gap-2">
            {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4 text-indigo-400')}
            <span>{params.text}</span>
            {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4 text-pink-400')}
          </span>
        </button>
      </div>
    ),
  };
