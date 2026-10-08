import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'interactive-magnetic-cursor-pull',
  name: 'Magnetic Cursor Pull (Nam Châm Hút Icon)',
  category: 'micro-interactive',
  tags: ['Micro-Interaction', 'Magnetic', 'Cursor', 'Hover', 'Playful'],
  description: 'Nội dung nút dịch chuyển nhẹ theo hướng con trỏ chuột, mô phỏng lực hút nam châm khi di chuột gần.',
  defaultText: 'Theo Dõi Con Trỏ',
  defaultIcon: 'ArrowRight',
  defaultPrimaryColor: '#4f46e5',
  defaultAccentColor: '#818cf8',
  defaultRadius: 9999,
  soundType: 'crisp',
  recommendedBg: 'any',
  generateCss: (params) => `/* Magnetic Cursor Pull Button */
.btn-magnetic-pull {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 30px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: ${params.radius}px;
  cursor: pointer;
  transition: transform 0.15s ease-out, background 0.2s ease;
}

.btn-magnetic-pull:hover {
  background: ${params.accentColor};
}

.btn-magnetic-pull .content {
  transition: transform 0.15s ease-out;
}`,
  generateHtml: (params) => `<button class="btn-magnetic-pull">
  <span class="content">${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-semibold text-sm rounded-full hover:bg-[${params.accentColor}] transition-colors">
  ${params.text}
</button>`,
  generateReact: (params) => `import React, { useRef, useState } from 'react';

export function MagneticCursorPullButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setOffset({ x: (e.clientX - rect.left - rect.width / 2) * 0.25, y: (e.clientY - rect.top - rect.height / 2) * 0.4 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-semibold text-sm rounded-full transition-colors hover:bg-[${params.accentColor}]"
    >
      <span style={{ transform: \`translate(\${offset.x}px, \${offset.y}px)\`, display: 'inline-flex', transition: 'transform 0.15s ease-out' }}>
        ${params.text}
      </span>
    </button>
  );
}`,
  render: ({ params, isHovered, isActive, onClick }) => {
    const activeState = isActive || params.state === 'active';
    return (
      <button
        onClick={onClick}
        disabled={params.disabled}
        className={`inline-flex items-center justify-center font-semibold text-white select-none transition-colors duration-200 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-7 py-3.5 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: isHovered ? params.accentColor : params.primaryColor,
          borderRadius: `${params.radius}px`,
          transform: activeState ? 'scale(0.95)' : 'none',
        }}
      >
        <span
          className="flex items-center gap-2 transition-transform duration-200 ease-out"
          style={{ transform: isHovered ? 'translate(4px, -2px)' : 'translate(0, 0)' }}
        >
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
