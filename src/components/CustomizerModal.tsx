import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  RotateCcw,
  Sparkles,
  Sliders,
  Code,
  Layers,
  Sun,
  Moon,
  Volume2,
  Bookmark
} from 'lucide-react';
import { ButtonDefinition, CustomParams, ButtonSize, ButtonState, IconPosition } from '../types/button';
import { AVAILABLE_ICONS } from '../utils/iconMap';
import { playButtonSound } from '../utils/soundEffects';
import { saveVariant } from '../utils/savedVariants';
import { supportedControls } from '../button-engine/enhance';

interface CustomizerModalProps {
  button: ButtonDefinition;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  soundEnabled: boolean;
}

const COLOR_PRESETS = [
  { name: 'Cyber Cyan', color: '#00f2fe' },
  { name: 'Neon Rose', color: '#ff007f' },
  { name: 'Electric Violet', color: '#8b5cf6' },
  { name: 'Solar Yellow', color: '#ffe600' },
  { name: 'Emerald Mint', color: '#10b981' },
  { name: 'Sky Blue', color: '#0ea5e9' },
  { name: 'Warm Amber', color: '#f59e0b' },
  { name: 'Crimson Red', color: '#ef4444' },
  { name: 'Midnight', color: '#0f172a' },
  { name: 'Pure White', color: '#ffffff' },
];

export function CustomizerModal({
  button,
  onClose,
  isFavorited,
  onToggleFavorite,
  soundEnabled,
}: CustomizerModalProps) {

  // Initial parameters based on button defaults
  const [params, setParams] = useState<CustomParams>({
    text: button.defaultText,
    iconName: button.defaultIcon,
    iconPosition: 'left',
    size: 'md',
    primaryColor: button.defaultPrimaryColor,
    accentColor: button.defaultAccentColor,
    radius: button.defaultRadius,
    borderWidth: 1,
    disabled: false,
    state: 'default',
    animationSpeed: 1,
    soundEnabled,
  });

  const controls = supportedControls(button);
  const [activeCodeTab, setActiveCodeTab] = useState<'css' | 'html' | 'tailwind' | 'react'>('css');
  const [copied, setCopied] = useState(false);
  const [previewBg, setPreviewBg] = useState<'dark' | 'midnight' | 'slate' | 'light' | 'cream' | 'grid'>('dark');
  const [clickCount, setClickCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => { document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const elements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        if (!elements.length) return;
        const first = elements[0], last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset to default button parameters
  const handleReset = () => {
    setParams({
      text: button.defaultText,
      iconName: button.defaultIcon,
      iconPosition: 'left',
      size: 'md',
      primaryColor: button.defaultPrimaryColor,
      accentColor: button.defaultAccentColor,
      radius: button.defaultRadius,
      borderWidth: 1,
      disabled: false,
      state: 'default',
      animationSpeed: 1,
      soundEnabled,
    });
  };

  const handleTestClick = () => {
    setClickCount((prev) => prev + 1);
    if (soundEnabled) {
      playButtonSound(button.soundType);
    }
  };

  const getActiveCode = () => {
    switch (activeCodeTab) {
      case 'css':
        return button.generateCss(params);
      case 'html':
        return button.generateHtml(params);
      case 'tailwind':
        return button.generateTailwind(params);
      case 'react':
        return button.generateReact(params);
    }
  };

  const handleSaveVariant = () => {
    const name = window.prompt('Tên phiên bản button:', `${button.name} - custom`);
    if (!name?.trim()) return;
    saveVariant({ id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`, presetId: button.id, name: name.trim(), params, savedAt: new Date().toISOString() });
    window.alert('Đã lưu phiên bản tùy chỉnh vào trình duyệt.');
  };

  const handleCopyCode = async () => {
    const code = getActiveCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleDownloadCss = () => {
    const cssContent = button.generateCss(params);
    const blob = new Blob([cssContent], { type: 'text/css;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${button.id}-styles.css`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getBackgroundStyle = () => {
    switch (previewBg) {
      case 'midnight':
        return 'bg-[#000000]';
      case 'slate':
        return 'bg-[#1e293b]';
      case 'light':
        return 'bg-[#ffffff] text-slate-900';
      case 'cream':
        return 'bg-[#faf8f5] text-slate-900';
      case 'grid':
        return 'bg-[#0b0f19] bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]';
      case 'dark':
      default:
        return 'bg-[#0b0f17]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Button customizer" className="relative w-full max-w-5xl bg-[#0d121f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        <button type="button" onClick={handleSaveVariant} className="absolute bottom-3 right-4 z-30 rounded-lg bg-indigo-600 px-3 py-2 text-xs text-white hover:bg-indigo-500">Lưu phiên bản tùy chỉnh</button>
        {/* Header Modal */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#0a0e18]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white truncate">{button.name}</h2>
                <button
                  onClick={() => onToggleFavorite(button.id)}
                  aria-label={isFavorited ? 'Xóa khỏi lưu' : 'Lưu vào yêu thích'}
                  className={`p-1 rounded transition-colors ${
                    isFavorited ? 'text-amber-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>
              <p className="text-xs text-slate-400 truncate">{button.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="Đặt lại thông số ban đầu"
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split into Interactive Stage & Parameter Controls */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {/* Left Column: Live Interactive Sandbox & Code Preview (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* The Live Interactive Canvas */}
            <div className="p-4 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="font-semibold text-slate-200">Khu vực thử nghiệm</span>
                <span>·</span>
                <span>Số lượt bấm: <span className="font-mono tabular-nums text-indigo-400 font-bold">{clickCount}</span></span>
              </div>

              {/* Background Theme Switcher */}
              <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setPreviewBg('dark')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    previewBg === 'dark' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tối
                </button>
                <button
                  onClick={() => setPreviewBg('light')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    previewBg === 'light' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sáng
                </button>
                <button
                  onClick={() => setPreviewBg('cream')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    previewBg === 'cream' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Kem
                </button>
                <button
                  onClick={() => setPreviewBg('grid')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    previewBg === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lưới
                </button>
              </div>
            </div>

            {/* Sandbox Viewport */}
            <div className={`flex items-center justify-center p-12 min-h-[220px] transition-colors relative ${getBackgroundStyle()}`}>
              <div className="transform scale-110" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => {setIsHovered(false);setIsActive(false)}} onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
                {button.render({
                  isHovered, isActive,
                  params,
                  onClick: handleTestClick,
                })}
              </div>

              {/* Quick Sound Test Hint */}
              {soundEnabled && (
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                  <Volume2 className="w-3 h-3 text-indigo-400" />
                  <span>Âm thanh: {button.soundType} switch</span>
                </div>
              )}
            </div>

            {/* Code Export Tabs */}
            <div className="flex-1 flex flex-col bg-[#070a12] border-t border-slate-800">
              <div className="px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('css')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCodeTab === 'css'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    CSS Thuần
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('html')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCodeTab === 'html'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('tailwind')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCodeTab === 'tailwind'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    Tailwind CSS
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('react')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCodeTab === 'react'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    React (TSX)
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {activeCodeTab === 'css' && (
                    <button
                      onClick={handleDownloadCss}
                      title="Tải về file CSS"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Đã sao chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép mã</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Display Area */}
              <div className="p-4 flex-1 overflow-x-auto max-h-[220px]">
                <pre className="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre font-normal selection:bg-indigo-500/30">
                  <code>{getActiveCode()}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right Column: Parameter Tuning Controls (5 Cols) */}
          <div className="lg:col-span-5 p-5 space-y-5 bg-[#0a0f1c] overflow-y-auto" data-supported-controls={Object.keys(controls).filter(key => controls[key as keyof CustomParams] !== false).join(",")}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tùy chỉnh thông số trực tiếp</span>
            </h3>

            {/* 1. Label Text Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Nội dung chữ (Button Text)</label>
              <input
                type="text"
                value={params.text}
                onChange={(e) => setParams({ ...params, text: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Nhập chữ trên nút..."
              />
            </div>

            {/* 2. Icon Picker & Placement */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-300">Vị trí & Biểu tượng (Icon)</label>
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-md border border-slate-800">
                  {(['left', 'right', 'none'] as IconPosition[]).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setParams({ ...params, iconPosition: pos })}
                      className={`px-2 py-0.5 text-[11px] rounded transition-colors ${
                        params.iconPosition === pos ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {pos === 'left' ? 'Trái' : pos === 'right' ? 'Phải' : 'Ẩn'}
                    </button>
                  ))}
                </div>
              </div>

              {params.iconPosition !== 'none' && (
                <div className="grid grid-cols-8 gap-1.5 p-2 bg-slate-900/80 rounded-lg border border-slate-800">
                  {AVAILABLE_ICONS.map((icon) => {
                    const IconComp = icon.component;
                    const isSelected = params.iconName === icon.id;
                    return (
                      <button
                        key={icon.id}
                        onClick={() => setParams({ ...params, iconName: icon.id })}
                        title={icon.name}
                        className={`p-1.5 rounded flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Size Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Kích thước (Size)</label>
              <div className="grid grid-cols-4 gap-1.5">
                {(['sm', 'md', 'lg', 'xl'] as ButtonSize[]).map((sizeKey) => (
                  <button
                    key={sizeKey}
                    onClick={() => setParams({ ...params, size: sizeKey })}
                    className={`py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      params.size === sizeKey
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {sizeKey.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Border Radius Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Độ bo góc (Border Radius)</label>
                <span className="font-mono tabular-nums text-slate-400">
                  {params.radius >= 9000 ? 'Pill (Tròn vo)' : `${params.radius}px`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="36"
                  value={params.radius > 50 ? 36 : params.radius}
                  onChange={(e) => setParams({ ...params, radius: Number(e.target.value) })}
                  className="flex-1 accent-indigo-500 cursor-pointer"
                />
                <button
                  onClick={() => setParams({ ...params, radius: params.radius === 9999 ? 12 : 9999 })}
                  className={`px-2 py-1 text-xs rounded border transition-colors whitespace-nowrap ${
                    params.radius >= 9000
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Pill
                </button>
              </div>
            </div>

            {/* 5. Color Customization & Presets */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Màu chính (Primary Color)</label>
                <span className="font-mono uppercase text-slate-400">{params.primaryColor}</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={params.primaryColor.startsWith('#') && params.primaryColor.length === 7 ? params.primaryColor : '#3b82f6'}
                  onChange={(e) => setParams({ ...params, primaryColor: e.target.value })}
                  className="w-10 h-8 rounded border border-slate-800 bg-transparent cursor-pointer p-0"
                />
                <input
                  type="text"
                  value={params.primaryColor}
                  onChange={(e) => setParams({ ...params, primaryColor: e.target.value })}
                  className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Color Presets */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.color}
                    onClick={() => setParams({ ...params, primaryColor: preset.color })}
                    title={preset.name}
                    className="w-5 h-5 rounded-full border border-white/20 transition-transform hover:scale-125 cursor-pointer shadow-sm"
                    style={{ backgroundColor: preset.color }}
                  />
                ))}
              </div>
            </div>

            {/* 6. Accent Color */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Màu phụ / Viền (Accent Color)</label>
                <span className="font-mono uppercase text-slate-400">{params.accentColor}</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={params.accentColor.startsWith('#') && params.accentColor.length === 7 ? params.accentColor : '#ff007f'}
                  onChange={(e) => setParams({ ...params, accentColor: e.target.value })}
                  className="w-10 h-8 rounded border border-slate-800 bg-transparent cursor-pointer p-0"
                />
                <input
                  type="text"
                  value={params.accentColor}
                  onChange={(e) => setParams({ ...params, accentColor: e.target.value })}
                  className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* 7. State Simulator */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-medium text-slate-300">Mô phỏng trạng thái (State Simulation)</label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                {(['default', 'hover', 'active', 'loading', 'disabled', 'success'] as ButtonState[]).map((stateKey) => (
                  <button
                    key={stateKey}
                    onClick={() =>
                      setParams({
                        ...params,
                        state: stateKey,
                        disabled: stateKey === 'disabled',
                      })
                    }
                    className={`py-1.5 px-2 font-medium rounded-lg border capitalize transition-colors ${
                      params.state === stateKey
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {stateKey === 'default'
                      ? 'Mặc định'
                      : stateKey === 'hover'
                      ? 'Di chuột'
                      : stateKey === 'active'
                      ? 'Nhấn giữ'
                      : stateKey === 'loading'
                      ? 'Đang tải'
                      : 'Vô hiệu'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
