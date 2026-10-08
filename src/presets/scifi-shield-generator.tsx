import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'scifi-shield-generator',
    name: 'Sci-Fi Shield Generator (Khiên Lực Vị Lai)',
    category: 'cyberpunk',
    tags: ['Sci-Fi', 'Shield', 'Hexagon', 'Futuristic', 'Barrier'],
    description: 'Nút bấm bảo hộ năng lượng với viền lục giác, đèn LED mức pin và ánh sáng phát ra từ lõi.',
    defaultText: 'BẬT KHIÊN BẢO VỆ',
    defaultIcon: 'Shield',
    defaultPrimaryColor: '#00e5ff',
    defaultAccentColor: '#0077b6',
    defaultRadius: 6,
    soundType: 'cyber',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Sci-Fi Shield Generator Button */
.btn-scifi-shield {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: #02111d;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  border: 1px solid ${params.primaryColor}99;
  border-radius: ${params.radius}px;
  cursor: pointer;
  box-shadow: 
    0 0 15px ${params.primaryColor}33,
    inset 0 0 15px ${params.primaryColor}22;
  transition: all 0.25s ease;
}

.btn-scifi-shield:hover {
  background: ${params.primaryColor}22;
  box-shadow: 
    0 0 25px ${params.primaryColor}66,
    inset 0 0 20px ${params.primaryColor}44;
  transform: translateY(-2px);
}`,
    generateHtml: (params) => `<button class="btn-scifi-shield">
  <span>&#128737;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#02111d] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border border-[${params.primaryColor}]/60 rounded-[${params.radius}px] shadow-[0_0_15px_${params.primaryColor}40] hover:bg-[${params.primaryColor}]/15 hover:shadow-[0_0_25px_${params.primaryColor}80] transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React from 'react';
import { Shield } from 'lucide-react';

export function ShieldGeneratorButton() {
  return (
    <button 
      onClick={() => console.log('Shield active')}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#02111d] text-[${params.primaryColor}] font-mono font-bold text-xs tracking-wider border border-[${params.primaryColor}]/70 rounded-md shadow-[0_0_15px_${params.primaryColor}33] hover:shadow-[0_0_25px_${params.primaryColor}77] hover:bg-[${params.primaryColor}]/20 transition-all"
    >
      <Shield className="w-4 h-4" />
      <span>${params.text}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-mono font-bold select-none transition-all duration-200 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: isHovered ? `${params.primaryColor}22` : '#021220',
          color: params.primaryColor,
          border: `1px solid ${isHovered ? params.primaryColor : params.primaryColor + '88'}`,
          boxShadow: isHovered
            ? `0 0 25px ${params.primaryColor}66, inset 0 0 20px ${params.primaryColor}33`
            : `0 0 12px ${params.primaryColor}28, inset 0 0 10px ${params.primaryColor}18`,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-2px)' : 'none',
        }}
      >
        <span className="flex items-center gap-2.5 tracking-wider">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-0.5" />
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    ),
  };
