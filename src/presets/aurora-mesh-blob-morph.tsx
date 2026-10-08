import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition = {
  id: 'aurora-mesh-blob-morph',
  name: 'Mesh Gradient Blob Morph (Khối Mây Biến Hình)',
  category: 'aurora-gradient',
  tags: ['Aurora', 'Mesh Gradient', 'Blob', 'Morph', 'Organic'],
  description: 'Gradient mesh đa sắc dạng khối hữu cơ, border-radius liên tục biến hình như mây trôi khi di chuột.',
  defaultText: 'TRẢI NGHIỆM NGAY',
  defaultIcon: 'Sparkles',
  defaultPrimaryColor: '#8b5cf6',
  defaultAccentColor: '#ec4899',
  defaultRadius: 24,
  soundType: 'cyber',
  recommendedBg: 'dark',
  generateCss: (params) => `/* Mesh Gradient Blob Morph Button */
.btn-mesh-blob {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 30px;
  background: radial-gradient(circle at 20% 20%, ${params.primaryColor} 0%, transparent 55%),
              radial-gradient(circle at 80% 80%, ${params.accentColor} 0%, transparent 55%),
              linear-gradient(135deg, ${params.primaryColor}, ${params.accentColor});
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%;
  box-shadow: 0 12px 30px -8px ${params.primaryColor}aa;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  animation: blob-morph 6s ease-in-out infinite;
}

.btn-mesh-blob:hover {
  box-shadow: 0 16px 40px -6px ${params.accentColor}cc;
  transform: scale(1.04);
  animation-play-state: running;
}

.btn-mesh-blob:active {
  transform: scale(0.96);
}`,
  generateHtml: (params) => `<button class="btn-mesh-blob">
  <span>${params.text}</span>
</button>`,
  generateTailwind: (params) => `<button className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-br from-[${params.primaryColor}] to-[${params.accentColor}] text-white font-bold text-sm rounded-[42%_58%_55%_45%/48%_42%_58%_52%] shadow-[0_12px_30px_-8px_${params.primaryColor}aa] animate-[blob-morph_6s_ease-in-out_infinite] hover:scale-105 active:scale-95 transition-transform">
  ${params.text}
</button>`,
  generateReact: (params) => `import React from 'react';

export function MeshBlobMorphButton() {
  return (
    <button
      onClick={() => console.log('Experience now')}
      className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-br from-[${params.primaryColor}] to-[${params.accentColor}] text-white font-bold text-sm rounded-[42%_58%_55%_45%/48%_42%_58%_52%] shadow-[0_12px_30px_-8px_${params.primaryColor}aa] animate-[blob-morph_6s_ease-in-out_infinite] hover:scale-105 active:scale-95 transition-transform"
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
        className={`relative inline-flex items-center justify-center font-bold text-white select-none animate-[blob-morph_6s_ease-in-out_infinite] transition-all duration-300 ${
          params.size === 'sm' ? 'px-5 py-2.5 text-xs' : params.size === 'lg' ? 'px-9 py-5 text-base' : params.size === 'xl' ? 'px-11 py-6 text-lg' : 'px-8 py-4 text-sm'
        } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{
          background: `radial-gradient(circle at 20% 20%, ${params.primaryColor} 0%, transparent 55%), radial-gradient(circle at 80% 80%, ${params.accentColor} 0%, transparent 55%), linear-gradient(135deg, ${params.primaryColor}, ${params.accentColor})`,
          boxShadow: isHovered ? `0 16px 40px -6px ${params.accentColor}cc` : `0 12px 30px -8px ${params.primaryColor}aa`,
          transform: activeState ? 'scale(0.96)' : isHovered ? 'scale(1.04)' : 'none',
        }}
      >
        <span className="flex items-center gap-2 relative z-10">
          {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
          <span>{params.text}</span>
          {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
        </span>
      </button>
    );
  },
};
