import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'cyberpunk-hex-radar-scan',
  name: 'Hex Grid Radar Scan (Lưới Lục Giác Quét)',
  category: 'cyberpunk',
  tags: ['Cyberpunk', 'Hex Grid', 'Radar', 'Scan', 'HUD'],
  description: 'Nền lưới lục giác mờ ảo với tia radar quét xoay liên tục khi di chuột, cảm giác như giao diện quét mục tiêu.',
  defaultText: 'QUÉT HỆ THỐNG',
  defaultIcon: 'Shield',
  defaultPrimaryColor: '#10b981',
  defaultAccentColor: '#34d399',
  defaultRadius: 6,
  soundType: 'cyber',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Hex Grid Radar Scan Button */
.btn-hex-radar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: #091410;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  border: 1px solid ${params.primaryColor}44;
  border-radius: ${params.radius}px;
  cursor: pointer;
  overflow: hidden;
  background-image: repeating-linear-gradient(60deg, ${params.primaryColor}11 0, ${params.primaryColor}11 1px, transparent 1px, transparent 10px);
  transition: all 0.25s ease;
}

.btn-hex-radar::before {
  content: '';
  position: absolute;
  inset: -100%;
  background: conic-gradient(from 0deg, transparent 0deg, ${params.accentColor}99 10deg, transparent 40deg);
  opacity: 0;
  transition: opacity 0.25s ease;
  animation: rotate-beam 2.4s linear infinite;
}

.btn-hex-radar:hover::before {
  opacity: 1;
}

.btn-hex-radar:hover {
  color: #ffffff;
  border-color: ${params.accentColor};
  box-shadow: 0 0 18px -2px ${params.accentColor}88;
}`,
  generateHtml: (params) => `<button class="btn-hex-radar">
  <span>&#9679;</span>
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#091410] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border border-[${params.primaryColor}]/30 rounded-[${params.radius}px] overflow-hidden hover:text-white hover:border-[${params.accentColor}] transition-all">
  <span className="absolute inset-[-100%] opacity-0 hover:opacity-100 animate-[spin_2.4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,${params.accentColor}_10deg,transparent_40deg)]" />
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function HexRadarScanButton() {
  return (
    <button
      onClick={() => console.log('Scanning...')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#091410] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border border-[${params.primaryColor}]/30 rounded-[${params.radius}px] overflow-hidden group hover:text-white transition-all"
    >
      <span className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 animate-[spin_2.4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,${params.accentColor}_10deg,transparent_40deg)]" />
      <span className="relative z-10">${params.text}</span>
    </button>
  );
}`,
  render: ({ params, isHovered, isActive, onClick }) => {
    const activeState = isActive || params.state === 'active';
    return (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`relative inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider select-none overflow-hidden transition-all duration-200 ${
          params.size === 'sm' ? 'px-4 py-2 text-[10px]' : params.size === 'lg' ? 'px-8 py-4 text-sm' : params.size === 'xl' ? 'px-10 py-5 text-base' : 'px-6 py-3 text-xs'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: '#091410',
          color: isHovered ? '#ffffff' : params.primaryColor,
          borderRadius: `${params.radius}px`,
          border: `1px solid ${isHovered ? params.accentColor : `${params.primaryColor}44`}`,
          backgroundImage: `repeating-linear-gradient(60deg, ${params.primaryColor}11 0, ${params.primaryColor}11 1px, transparent 1px, transparent 10px)`,
          boxShadow: isHovered ? `0 0 18px -2px ${params.accentColor}99` : 'none',
          transform: activeState ? 'scale(0.97)' : 'none',
        }}
      >
        {isHovered && (
          <span
            className="absolute inset-[-100%] animate-[spin_2.4s_linear_infinite] pointer-events-none"
            style={{ background: `conic-gradient(from 0deg, transparent 0deg, ${params.accentColor}99 10deg, transparent 40deg)` }}
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
