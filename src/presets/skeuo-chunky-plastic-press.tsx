import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'skeuo-chunky-plastic-press',
  name: 'Chunky Plastic Toy Press (Nhựa Đồ Chơi Dày)',
  category: 'skeuomorphic-3d',
  tags: ['Skeuomorphic', '3D', 'Plastic', 'Toy', 'Tactile'],
  description: 'Nút nhựa dày bo tròn kiểu đồ chơi trẻ em, đổ bóng sâu và lõm thật xuống khi bấm.',
  defaultText: 'NHẤN ĐỂ CHƠI',
  defaultIcon: 'Play',
  defaultPrimaryColor: '#f97316',
  defaultAccentColor: '#fb923c',
  defaultRadius: 24,
  soundType: 'mechanical',
  recommendedBg: 'any',
  generateCss: (params) => `/* Chunky Plastic Toy Press Button */
.btn-chunky-plastic {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(180deg, ${params.accentColor}, ${params.primaryColor});
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  border-radius: ${params.radius}px;
  border: none;
  box-shadow:
    0 10px 0 0 color-mix(in srgb, ${params.primaryColor} 60%, #000 40%),
    0 14px 18px -4px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: all 0.08s ease-out;
}

.btn-chunky-plastic::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 12%;
  right: 12%;
  height: 30%;
  border-radius: 9999px;
  background: rgba(255,255,255,0.45);
  pointer-events: none;
}

.btn-chunky-plastic:hover {
  filter: brightness(1.06);
}

.btn-chunky-plastic:active {
  transform: translateY(8px);
  box-shadow:
    0 2px 0 0 color-mix(in srgb, ${params.primaryColor} 60%, #000 40%),
    0 4px 8px -2px rgba(0,0,0,0.4);
}`,
  generateHtml: (params) => `<button class="btn-chunky-plastic">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-b from-[${params.accentColor}] to-[${params.primaryColor}] text-white font-extrabold text-sm rounded-[${params.radius}px] shadow-[0_10px_0_0_rgba(0,0,0,0.35),0_14px_18px_-4px_rgba(0,0,0,0.4)] active:translate-y-2 transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function ChunkyPlasticButton() {
  return (
    <button
      onClick={() => console.log('Pressed')}
      className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-b from-[${params.accentColor}] to-[${params.primaryColor}] text-white font-extrabold text-sm rounded-[${params.radius}px] shadow-[0_10px_0_0_rgba(0,0,0,0.35),0_14px_18px_-4px_rgba(0,0,0,0.4)] active:translate-y-2 transition-all"
    >
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
        className={`relative inline-flex items-center justify-center font-extrabold text-white select-none transition-all duration-75 ${
          params.size === 'sm' ? 'px-5 py-2.5 text-xs' : params.size === 'lg' ? 'px-9 py-5 text-base' : params.size === 'xl' ? 'px-11 py-6 text-lg' : 'px-8 py-4 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          borderRadius: `${params.radius}px`,
          background: `linear-gradient(180deg, ${params.accentColor}, ${params.primaryColor})`,
          filter: isHovered && !activeState ? 'brightness(1.06)' : 'none',
          boxShadow: activeState
            ? `0 2px 0 0 ${params.primaryColor}cc, 0 4px 8px -2px rgba(0,0,0,0.4)`
            : `0 10px 0 0 ${params.primaryColor}cc, 0 14px 18px -4px rgba(0,0,0,0.4)`,
          transform: activeState ? 'translateY(8px)' : 'none',
        }}
      >
        <span
          className="absolute top-[3px] left-[12%] right-[12%] h-[30%] rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.45)' }}
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
