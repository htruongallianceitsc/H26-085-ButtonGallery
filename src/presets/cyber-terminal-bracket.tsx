import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'cyber-terminal-bracket',
    name: 'Command Terminal HUD (Khung Dòng Lệnh)',
    category: 'tech-outline',
    tags: ['Terminal', 'Monospace', 'Command Line', 'Brackets', 'Hacker'],
    description: 'Dòng lệnh hacker console với con trỏ nhấp nháy, dấu ngoặc vuông HUD và màu xanh phosphor đặc trưng.',
    defaultText: 'EXECUTE ./DEPLOY',
    defaultIcon: 'Terminal',
    defaultPrimaryColor: '#10b981',
    defaultAccentColor: '#059669',
    defaultRadius: 4,
    soundType: 'cyber',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Command Terminal HUD Button */
.btn-terminal-hud {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: #030a06;
  color: ${params.primaryColor};
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  border: 1px dashed ${params.primaryColor}88;
  border-radius: ${params.radius}px;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 0 10px ${params.primaryColor}22;
  transition: all 0.2s ease;
}

.btn-terminal-hud:hover {
  background: ${params.primaryColor}15;
  border-style: solid;
  border-color: ${params.primaryColor};
  box-shadow: 0 0 20px ${params.primaryColor}44;
  transform: translateY(-1px);
}

.btn-terminal-hud:active {
  background: ${params.primaryColor}25;
  transform: translateY(1px);
}`,
    generateHtml: (params) => `<button class="btn-terminal-hud">
  <span>&gt;_</span>
  <span>[ ${params.text} ]</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2 px-6 py-3 bg-[#030a06] text-[${params.primaryColor}] font-mono font-bold text-xs border border-dashed border-[${params.primaryColor}]/50 rounded-[${params.radius}px] hover:bg-[${params.primaryColor}]/10 hover:border-solid hover:border-[${params.primaryColor}] transition-all">
  &gt;_ [ {params.text} ]
</button>`,
    generateReact: (params) => `import React from 'react';

export function TerminalCommandButton() {
  return (
    <button 
      onClick={() => console.log('Command executed')}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#030a06] text-[${params.primaryColor}] font-mono font-bold text-xs border border-dashed border-[${params.primaryColor}]/60 rounded hover:border-solid hover:bg-[${params.primaryColor}]/15 hover:shadow-[0_0_20px_${params.primaryColor}40] transition-all"
    >
      <span>&gt;_</span>
      <span>[ ${params.text} ]</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-mono font-bold select-none transition-all duration-200 ${
          params.size === 'sm' ? 'px-3 py-1.5 text-[11px]' : params.size === 'lg' ? 'px-7 py-3.5 text-sm' : params.size === 'xl' ? 'px-9 py-4 text-base' : 'px-5 py-2.5 text-xs'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: isHovered ? `${params.primaryColor}18` : '#040b07',
          color: params.primaryColor,
          border: isHovered ? `1px solid ${params.primaryColor}` : `1px dashed ${params.primaryColor}88`,
          boxShadow: isHovered ? `0 0 20px ${params.primaryColor}55` : `0 0 8px ${params.primaryColor}22`,
          transform: isActive || params.state === 'active' ? 'translateY(1px)' : 'none',
        }}
      >
        <span className="flex items-center gap-2 tracking-wide">
          <span className="text-emerald-400 font-extrabold">&gt;_</span>
          <span className="opacity-70">[</span>
          <span>{params.text}</span>
          <span className="opacity-70">]</span>
          <span className="inline-block w-1.5 h-3 bg-current animate-pulse ml-0.5" />
        </span>
      </button>
    ),
  };
