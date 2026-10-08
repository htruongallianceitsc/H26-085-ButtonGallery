import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'glass-liquid-ios-pill',
  name: 'iOS Liquid Glass Pill (Viên Kính Lỏng)',
  category: 'glass',
  tags: ['Glass', 'Liquid', 'iOS', 'Pill', 'Refraction'],
  description: 'Lấy cảm hứng từ hiệu ứng Liquid Glass của iOS: viên pill trong suốt khúc xạ ánh sáng, bo tròn tuyệt đối.',
  defaultText: 'Tiếp Tục',
  defaultIcon: 'ArrowRight',
  defaultPrimaryColor: '#ffffff',
  defaultAccentColor: '#60a5fa',
  defaultRadius: 9999,
  soundType: 'glass',
  recommendedBg: 'dark',
  generateCss: (params) => `/* iOS Liquid Glass Pill Button */
.btn-liquid-glass {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 30px;
  background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08));
  color: ${params.primaryColor};
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: ${params.radius}px;
  backdrop-filter: blur(16px) saturate(160%);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -8px 12px -8px rgba(255,255,255,0.15), 0 8px 20px -6px rgba(0,0,0,0.35);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-liquid-glass::before {
  content: '';
  position: absolute;
  top: -40%;
  left: -10%;
  width: 60%;
  height: 120%;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,0.5), transparent);
  transform: translateX(-120%);
  transition: transform 0.6s ease;
}

.btn-liquid-glass:hover {
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.7), 0 10px 26px -6px ${params.accentColor}55;
  border-color: ${params.accentColor}99;
  transform: translateY(-1px) scale(1.01);
}

.btn-liquid-glass:hover::before {
  transform: translateX(220%);
}`,
  generateHtml: (params) => `<button class="btn-liquid-glass">
  <span>${params.text}</span>
  <span>&rarr;</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/15 text-white font-semibold text-sm rounded-full border border-white/40 backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_20px_-6px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function LiquidGlassPillButton() {
  return (
    <button
      onClick={() => console.log('Continue')}
      className="relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/15 text-white font-semibold text-sm rounded-full border border-white/40 backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_20px_-6px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all"
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
        className={`relative inline-flex items-center justify-center font-semibold select-none overflow-hidden backdrop-blur-xl transition-all duration-300 ${
          params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          color: params.primaryColor,
          borderRadius: `${params.radius}px`,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08))',
          border: `1px solid ${isHovered ? `${params.accentColor}aa` : 'rgba(255,255,255,0.4)'}`,
          boxShadow: isHovered
            ? `inset 0 1px 1px rgba(255,255,255,0.7), 0 10px 26px -6px ${params.accentColor}66`
            : 'inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -8px 12px -8px rgba(255,255,255,0.15), 0 8px 20px -6px rgba(0,0,0,0.35)',
          transform: activeState ? 'scale(0.98)' : isHovered ? 'translateY(-1px) scale(1.01)' : 'none',
        }}
      >
        {isHovered && (
          <span
            className="absolute -top-[40%] -left-[10%] w-[60%] h-[120%] pointer-events-none animate-[shimmer_0.9s_ease]"
            style={{ background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)' }}
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
