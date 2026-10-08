import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'ripple-material-fluid',
    name: 'Material Dynamic Ripple (Gợn Sóng Tỏa Lan)',
    category: 'micro-interactive',
    tags: ['Material', 'Ripple', 'Fluid', 'Clean', 'Modern'],
    description: 'Vòng sóng nước tỏa lan mở rộng từ điểm chạm ngón tay hoặc chuột, tạo phản hồi thị giác tự nhiên.',
    defaultText: 'GỬI YÊU CẦU NGAY',
    defaultIcon: 'Send',
    defaultPrimaryColor: '#3b82f6',
    defaultAccentColor: '#60a5fa',
    defaultRadius: 10,
    soundType: 'crisp',
    recommendedBg: 'any',
    generateCss: (params) => `/* Dynamic Ripple Button */
.btn-material-ripple {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: ${params.radius}px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 14px ${params.primaryColor}44;
  transition: all 0.2s ease;
}

.btn-material-ripple:hover {
  background: ${params.accentColor};
  box-shadow: 0 6px 20px ${params.primaryColor}66;
  transform: translateY(-1px);
}

.btn-material-ripple:active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: ripple-spread 0.6s ease-out;
}

@keyframes ripple-spread {
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(3);
  }
}`,
    generateHtml: (params) => `<button class="btn-material-ripple">
  <span>&#9993;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-semibold text-sm rounded-[${params.radius}px] shadow-md hover:bg-[${params.accentColor}] hover:-translate-y-0.5 active:translate-y-0.5 overflow-hidden transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function RippleButton() {
  return (
    <button 
      onClick={() => console.log('Ripple send')}
      className="relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 text-white font-semibold text-sm rounded-xl shadow-md hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative inline-flex items-center justify-center font-semibold text-white select-none transition-all duration-200 overflow-hidden ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: isHovered ? params.accentColor : params.primaryColor,
          boxShadow: isHovered ? `0 8px 24px ${params.primaryColor}66` : `0 4px 14px ${params.primaryColor}44`,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-1px)' : 'none',
        }}
      >
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
