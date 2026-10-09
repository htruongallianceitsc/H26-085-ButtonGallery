import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'inferno-blazing-fire',
  name: 'Inferno Blazing Firestorm (Rực Lửa Phừng Cháy)',
  category: 'aurora-gradient',
  tags: ['Fire', 'Flame', 'Inferno', 'Blazing', 'Heat', 'Glow', 'Hot'],
  description: 'Nút bấm hiệu ứng rực lửa phừng cháy bùng nổ năng lượng nhiệt huyết mãnh liệt khi rê chuột.',
  defaultText: 'RỰC LỬA PHỪNG CHÁY',
  defaultIcon: 'Flame',
  defaultPrimaryColor: '#ea580c',
  defaultAccentColor: '#ef4444',
  defaultRadius: 12,
  soundType: 'cyber',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Inferno Blazing Firestorm Button */
@keyframes fire-flicker {
  0%, 100% {
    box-shadow:
      0 0 20px ${params.primaryColor}cc,
      0 0 40px #ef4444aa,
      0 0 60px #f59e0b88,
      inset 0 0 15px #fde047;
    filter: brightness(1);
  }
  50% {
    box-shadow:
      0 0 32px ${params.primaryColor},
      0 0 55px #dc2626dd,
      0 0 80px #f59e0bbb,
      inset 0 0 22px #fef08a;
    filter: brightness(1.25);
  }
}

@keyframes ember-rise {
  0% {
    transform: translateY(100%) scale(0.6) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-120%) scale(1.4) rotate(45deg);
    opacity: 0;
  }
}

.btn-inferno-fire {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #7f1d1d 0%, #c2410c 35%, #ea580c 70%, #f59e0b 100%);
  color: #ffffff;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: ${params.radius}px;
  border: 2px solid #fdba74;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 15px ${params.primaryColor}88, inset 0 1px 0 rgba(255,255,255,0.4);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-inferno-fire:hover {
  transform: translateY(-3px) scale(1.03);
  border-color: #fef08a;
  animation: fire-flicker 1.2s infinite ease-in-out;
}

.btn-inferno-fire:active {
  transform: translateY(1px) scale(0.98);
}`,
  generateHtml: (params) => `<button class="btn-inferno-fire">
  <span>&#128293;</span>
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-red-900 via-orange-600 to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-[${params.radius}px] border-2 border-orange-300 shadow-[0_0_20px_#ea580c] hover:scale-105 hover:border-yellow-200 transition-all duration-300">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function InfernoFireButton() {
  return (
    <button
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-red-900 via-orange-600 to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl border-2 border-orange-300 shadow-[0_0_25px_#ea580c] hover:scale-105 transition-all duration-300"
    >
      <span>${params.text}</span>
    </button>
  );
}`,
  render: ({ params, isHovered, isActive, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={params.disabled}
      className={`relative inline-flex items-center justify-center font-extrabold text-white select-none overflow-hidden transition-all duration-300 ${
        params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
      } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{
        borderRadius: `${params.radius}px`,
        background: isHovered
          ? 'linear-gradient(135deg, #991b1b 0%, #dc2626 30%, #ea580c 65%, #f59e0b 100%)'
          : 'linear-gradient(135deg, #7f1d1d 0%, #c2410c 35%, #ea580c 70%, #f59e0b 100%)',
        border: `2px solid ${isHovered ? '#fef08a' : '#fdba74'}`,
        boxShadow: isHovered
          ? '0 0 35px #ea580c, 0 0 65px #ef4444bb, 0 0 90px #f59e0b88, inset 0 0 20px #fef08a'
          : '0 0 18px #ea580caa, inset 0 1px 0 rgba(255,255,255,0.3)',
        transform: isActive || params.state === 'active' ? 'scale(0.98)' : isHovered ? 'translateY(-3px) scale(1.03)' : 'none',
      }}
    >
      {/* Animated flame ember overlay on hover */}
      {isHovered && (
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 120%, rgba(253, 224, 71, 0.45) 0%, rgba(234, 88, 12, 0.2) 50%, transparent 80%)',
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* Flame Particles */}
      {isHovered && (
        <>
          <span
            className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-yellow-300 pointer-events-none blur-[1px]"
            style={{
              animation: 'ember-rise 0.8s infinite ease-out',
            }}
          />
          <span
            className="absolute bottom-0 left-2/4 w-3 h-3 rounded-full bg-orange-400 pointer-events-none blur-[1px]"
            style={{
              animation: 'ember-rise 1.1s infinite ease-out 0.2s',
            }}
          />
          <span
            className="absolute bottom-0 left-3/4 w-2 h-2 rounded-full bg-red-400 pointer-events-none blur-[1px]"
            style={{
              animation: 'ember-rise 0.9s infinite ease-out 0.4s',
            }}
          />
        </>
      )}

      <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4 text-yellow-300 animate-pulse')}
        <span>{params.text}</span>
        {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4 text-yellow-300 animate-pulse')}
      </span>
    </button>
  ),
};
