import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'vaporwave-retro-sunset',
    name: 'Vaporwave Sunset 80s (Hoàng Hôn Synthwave)',
    category: 'retro-pixel',
    tags: ['Vaporwave', 'Synthwave', '80s', 'Sunset', 'Grid'],
    description: 'Bầu không khí hoàng hôn Synthwave thập niên 80 với dải màu gradient tím hồng rực rỡ và tia viền neon.',
    defaultText: 'OUTRUN DRIVE',
    defaultIcon: 'Play',
    defaultPrimaryColor: '#ec4899',
    defaultAccentColor: '#eab308',
    defaultRadius: 8,
    soundType: 'retro',
    recommendedBg: 'dark',
    generateCss: (params) => `/* 80s Vaporwave Sunset Button */
.btn-vaporwave-sunset {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(180deg, #ec4899 0%, #a855f7 50%, #eab308 100%);
  color: #0b0216;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: ${params.radius}px;
  border: 2px solid #ffffff;
  cursor: pointer;
  box-shadow: 0 0 25px rgba(236, 72, 153, 0.6);
  transition: all 0.25s ease;
}

.btn-vaporwave-sunset:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 0 35px rgba(234, 179, 8, 0.8);
}`,
    generateHtml: (params) => `<button class="btn-vaporwave-sunset">
  <span>&#9654;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-b from-pink-500 via-purple-500 to-yellow-500 text-[#0b0216] font-mono font-black text-sm uppercase tracking-widest border-2 border-white rounded-[${params.radius}px] shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';

export function VaporwaveButton() {
  return (
    <button 
      onClick={() => console.log('Outrun play')}
      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-b from-pink-500 via-purple-500 to-yellow-500 text-slate-950 font-mono font-black text-xs uppercase tracking-widest border-2 border-white rounded-lg shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition-all"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-mono font-black uppercase tracking-widest select-none transition-all duration-200 border-2 border-white ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: 'linear-gradient(180deg, #ec4899 0%, #a855f7 50%, #eab308 100%)',
          color: '#070114',
          boxShadow: isHovered
            ? '0 0 35px rgba(234, 179, 8, 0.8), 0 0 20px rgba(236, 72, 153, 0.8)'
            : '0 0 20px rgba(236, 72, 153, 0.6)',
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-2px) scale(1.02)' : 'none',
        }}
      >
        <span className="flex items-center gap-2">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4 text-black')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4 text-black')}
        </span>
      </button>
    ),
  };
