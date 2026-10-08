import React from 'react';
import { ButtonDefinition } from '../types/button';
import { renderButtonIcon } from '../utils/iconMap';

export const preset: ButtonDefinition =   {
    id: 'action-loader-toggle',
    name: 'State Morph: Idle → Loading → Success',
    category: 'micro-interactive',
    tags: ['Interactive', 'Loading', 'Morph', 'Checkmark', 'Spinner'],
    description: 'Nút bấm đa trạng thái tự động biến đổi: Bấm để xoay vòng quay tải dữ liệu rồi hiện dấu tích xanh hoàn thành.',
    defaultText: 'THANH TOÁN $49.00',
    defaultIcon: 'Check',
    defaultPrimaryColor: '#10b981',
    defaultAccentColor: '#059669',
    defaultRadius: 12,
    soundType: 'crisp',
    recommendedBg: 'dark',
    generateCss: (params) => `/* Morphing State Button */
.btn-state-morph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${params.primaryColor};
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border-radius: ${params.radius}px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px ${params.primaryColor}44;
  transition: all 0.25s ease;
}

.btn-state-morph:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,
    generateHtml: (params) => `<button class="btn-state-morph">
  <span>&#10004;</span>
  <span>${params.text}</span>
</button>`,
    generateTailwind: (params) => `<button className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[${params.primaryColor}] text-white font-bold text-sm rounded-[${params.radius}px] shadow-lg shadow-[${params.primaryColor}]/30 hover:brightness-110 active:translate-y-0.5 transition-all">
  ${params.text}
</button>`,
    generateReact: (params) => `import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

export function MorphStateButton() {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
      setTimeout(() => setState('idle'), 2500);
    }, 1500);
  };

  return (
    <button 
      onClick={handleClick}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all"
    >
      {state === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
      {state === 'success' && <Check className="w-4 h-4" />}
      <span>{state === 'loading' ? 'Đang xử lý...' : state === 'success' ? 'Hoàn tất!' : '${params.text}'}</span>
    </button>
  );
}`,
    render: ({ params, isHovered, isActive, onClick }) => {
      const isLoad = params.state === 'loading';
      const isSuccess = params.state === 'success';

      return (
        <button
          onClick={onClick}
          disabled={params.disabled || isLoad}
          className={`inline-flex items-center justify-center font-bold text-white select-none transition-all duration-200 ${
            params.size === 'sm' ? 'px-4 py-2 text-xs' : params.size === 'lg' ? 'px-8 py-4 text-base' : params.size === 'xl' ? 'px-10 py-5 text-lg' : 'px-6 py-3 text-sm'
          } ${params.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            borderRadius: `${params.radius}px`,
            background: isSuccess ? '#10b981' : params.primaryColor,
            boxShadow: isHovered ? `0 8px 24px ${params.primaryColor}66` : `0 4px 16px ${params.primaryColor}44`,
            transform: isActive || params.state === 'active' ? 'translateY(1px)' : isHovered ? 'translateY(-1px)' : 'none',
          }}
        >
          <span className="flex items-center gap-2">
            {isLoad ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Đang xử lý...</span>
              </>
            ) : isSuccess ? (
              <>
                <span className="text-white font-black text-base">&#10004;</span>
                <span>Thành công!</span>
              </>
            ) : (
              <>
                {params.iconPosition === 'left' && renderButtonIcon(params.iconName, 'w-4 h-4')}
                <span>{params.text}</span>
                {params.iconPosition === 'right' && renderButtonIcon(params.iconName, 'w-4 h-4')}
              </>
            )}
          </span>
        </button>
      );
    },
  };
