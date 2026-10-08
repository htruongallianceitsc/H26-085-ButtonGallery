import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'holographic-foil-sheen',
    name: 'Holographic Rainbow Foil (Cầu Vồng 7 Màu)',
    category: 'glass',
    tags: ['Holographic', 'Prism', 'Rainbow', 'Foil', 'Iridescent'],
    description: 'Lớp phủ kim loại ba chiều chuyển sắc cầu vồng óng ánh phản chiếu góc nghiêng ánh sáng.',
    defaultText: 'HOLO SPECIAL EDITION',
    defaultIcon: 'Sparkles',
    defaultPrimaryColor: '#ec4899',
    defaultAccentColor: '#06b6d4',
    defaultRadius: 9999,
    soundType: 'glass',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Holographic Rainbow Foil Button */
.btn-holographic {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(
    115deg,
    #ff0080 0%,
    #7928ca 25%,
    #0070f3 50%,
    #00dfd8 75%,
    #ff4b4b 100%
  );
  background-size: 200% 200%;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: ${params.radius}px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px -5px rgba(236, 72, 153, 0.4);
  animation: holo-gradient 4s ease infinite;
  transition: all 0.3s ease;
}

.btn-holographic:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 15px 35px -5px rgba(0, 223, 216, 0.5);
}

@keyframes holo-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    generateHtml: (params) => `<button class="btn-holographic">
  <span>&#10024;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[linear-gradient(115deg,#ff0080_0%,#7928ca_25%,#0070f3_50%,#00dfd8_75%,#ff4b4b_100%)] bg-[length:200%_200%] animate-[gradient_4s_ease_infinite] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-pink-500/30 hover:-translate-y-0.5 hover:scale-105 transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function HolographicButton() {
  return (
    <button 
      onClick={() => console.log('Holo clicked')}
      className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      style={{
        background: 'linear-gradient(115deg, #ff0080, #7928ca, #0070f3, #00dfd8, #ff0080)',
        backgroundSize: '200% 200%',
        animation: 'holo-gradient 4s ease infinite'
      }}
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-bold text-white uppercase tracking-wider select-none transition-all duration-300 ${
          params.size === 'sm' ? 'px-4 py-2 text-[10px]' : params.size === 'lg' ? 'px-8 py-4 text-sm' : params.size === 'xl' ? 'px-10 py-5 text-base' : 'px-6 py-3 text-xs'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: 'linear-gradient(115deg, #ff007f 0%, #7928ca 25%, #0070f3 50%, #00dfd8 75%, #ff007f 100%)',
          backgroundSize: '250% 250%',
          boxShadow: isHovered
            ? '0 12px 35px -4px rgba(255, 0, 127, 0.55), 0 0 20px rgba(0, 223, 216, 0.4)'
            : '0 8px 25px -4px rgba(121, 40, 202, 0.4)',
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-2px) scale(1.02)' : 'none',
        }}
      >
        <span className="flex items-center gap-2 drop-shadow-md">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
