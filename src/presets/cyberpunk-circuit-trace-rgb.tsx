import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'cyberpunk-circuit-trace-rgb',
  name: 'Circuit Board RGB Trace (Mạch In Phát Sáng)',
  category: 'cyberpunk',
  tags: ['Cyberpunk', 'Circuit', 'RGB', 'PCB', 'Tech'],
  description: 'Mô phỏng bảng mạch in PCB với đường trace viền chạy sáng và các pad RGB nhấp nháy liên tục.',
  defaultText: 'KHỞI ĐỘNG MODULE',
  defaultIcon: 'Cpu',
  defaultPrimaryColor: '#22d3ee',
  defaultAccentColor: '#a3e635',
  defaultRadius: 10,
  soundType: 'cyber',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Circuit Board RGB Trace Button */
.btn-circuit-trace {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: #0a0e1a;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  border: 1px solid ${params.primaryColor}55;
  border-radius: ${params.radius}px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s ease;
}

.btn-circuit-trace::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent 94%, ${params.accentColor} 96%, transparent 98%),
    linear-gradient(0deg, transparent 94%, ${params.primaryColor} 96%, transparent 98%);
  background-size: 12px 12px;
  opacity: 0.25;
  pointer-events: none;
}

.btn-circuit-trace::after {
  content: '';
  position: absolute;
  top: 6px;
  right: 10px;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: ${params.accentColor};
  box-shadow: 0 0 8px ${params.accentColor};
  animation: circuit-blink 1.4s ease-in-out infinite;
}

.btn-circuit-trace:hover {
  border-color: ${params.primaryColor};
  box-shadow: 0 0 20px -2px ${params.primaryColor}88, inset 0 0 14px -4px ${params.accentColor}55;
  color: #ffffff;
}`,
  generateHtml: (params) => `<button class="btn-circuit-trace">
  <span>&#9881;</span>
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0a0e1a] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border border-[${params.primaryColor}]/40 rounded-[${params.radius}px] overflow-hidden hover:text-white hover:shadow-[0_0_20px_-2px_${params.primaryColor}] transition-all">
  <span className="absolute top-1.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[${params.accentColor}] animate-pulse" />
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function CircuitTraceButton() {
  return (
    <button
      onClick={() => console.log('Module booted')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0a0e1a] text-[${params.primaryColor}] font-mono font-bold text-xs uppercase tracking-wider border border-[${params.primaryColor}]/40 rounded-[${params.radius}px] overflow-hidden hover:text-white hover:shadow-[0_0_20px_-2px_${params.primaryColor}] transition-all"
    >
      <span className="absolute top-1.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[${params.accentColor}] animate-pulse" />
      <span>${params.text}</span>
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
          background: '#0a0e1a',
          color: isHovered ? '#ffffff' : params.primaryColor,
          borderRadius: `${params.radius}px`,
          border: `1px solid ${isHovered ? params.primaryColor : `${params.primaryColor}55`}`,
          boxShadow: isHovered ? `0 0 20px -2px ${params.primaryColor}aa, inset 0 0 14px -4px ${params.accentColor}66` : 'none',
          transform: activeState ? 'scale(0.97)' : 'none',
        }}
      >
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 94%, ${params.accentColor} 96%, transparent 98%), linear-gradient(0deg, transparent 94%, ${params.primaryColor} 96%, transparent 98%)`,
            backgroundSize: '12px 12px',
            opacity: 0.22,
          }}
        />
        <span
          className="absolute top-1.5 right-2.5 w-1.5 h-1.5 rounded-full animate-[circuit-blink_1.4s_ease-in-out_infinite]"
          style={{ background: params.accentColor, boxShadow: `0 0 8px ${params.accentColor}` }}
        />
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
