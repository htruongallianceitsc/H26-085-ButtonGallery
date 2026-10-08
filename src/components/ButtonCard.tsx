import React, { useState } from 'react';
import { Bookmark, Code2, Copy, Check, Sliders, Sun, Moon, Grid } from 'lucide-react';
import { ButtonDefinition, CustomParams } from '../types/button';
import { playButtonSound } from '../utils/soundEffects';
import { defaultParams } from '../button-engine/enhance';

interface ButtonCardProps {
  button: ButtonDefinition;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCustomizer: (button: ButtonDefinition) => void;
  soundEnabled: boolean;
}

export function ButtonCard({
  button,
  isFavorited,
  onToggleFavorite,
  onOpenCustomizer,
  soundEnabled,
}: ButtonCardProps) {
  const [bgMode, setBgMode] = useState<'dark' | 'midnight' | 'slate' | 'light' | 'grid'>('dark');
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [copiedType, setCopiedType] = useState<'css' | 'html' | null>(null);

  // Default parameters for rendering on the card
  const params: CustomParams = defaultParams(button, soundEnabled);

  const handleButtonClick = () => {
    if (soundEnabled) {
      playButtonSound(button.soundType);
    }
  };

  const handleCopyCss = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const css = button.generateCss(params);
    try {
      await navigator.clipboard.writeText(css);
      setCopiedType('css');
      setTimeout(() => setCopiedType(null), 2000);
    } catch {}
  };

  const handleCopyHtml = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const html = button.generateHtml(params);
    try {
      await navigator.clipboard.writeText(html);
      setCopiedType('html');
      setTimeout(() => setCopiedType(null), 2000);
    } catch {}
  };

  const getBackgroundStyle = () => {
    switch (bgMode) {
      case 'midnight':
        return 'bg-[#000000]';
      case 'slate':
        return 'bg-[#1e293b]';
      case 'light':
        return 'bg-[#ffffff] text-slate-900';
      case 'grid':
        return 'bg-[#0b0f19] bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]';
      case 'dark':
      default:
        return 'bg-[#0c111d]';
    }
  };

  return (
    <div className="flex flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700/80 transition-all duration-200 overflow-hidden group/card">
      {/* Top Card Bar: Title & Favorite */}
      <div className="px-4 py-3 border-b border-slate-800/60 flex items-center justify-between gap-2 bg-slate-900/60">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-100 truncate group-hover/card:text-indigo-300 transition-colors">
            {button.name}
          </h3>
          {/* Unboxed Metadata: Tags separated by dots */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 truncate mt-0.5">
            {button.tags.slice(0, 3).map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < Math.min(button.tags.length - 1, 2) && <span aria-hidden="true" className="opacity-40">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Favorite Bookmark Button */}
        <button
          onClick={() => onToggleFavorite(button.id)}
          aria-label={isFavorited ? 'Xóa khỏi danh sách lưu' : 'Lưu button vào yêu thích'}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
            isFavorited
              ? 'text-amber-400 bg-amber-400/10 hover:bg-amber-400/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Button Interactive Sandbox & Viewport */}
      <div
        className={`relative flex items-center justify-center p-8 min-h-[170px] transition-colors ${getBackgroundStyle()}`}

      >
        {/* Background switchers in top right corner of preview */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-md rounded-lg p-1 border border-slate-800 shadow-sm z-20">
          <button
            onClick={() => setBgMode('dark')}
            title="Nền tối tự nhiên"
            className={`p-1 rounded ${bgMode === 'dark' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Moon className="w-3 h-3" />
          </button>
          <button
            onClick={() => setBgMode('light')}
            title="Nền sáng"
            className={`p-1 rounded ${bgMode === 'light' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Sun className="w-3 h-3" />
          </button>
          <button
            onClick={() => setBgMode('grid')}
            title="Lưới Grid"
            className={`p-1 rounded ${bgMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Grid className="w-3 h-3" />
          </button>
        </div>

        {/* The Button Under Test */}
        <div className="flex items-center justify-center transition-transform" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false); setIsActive(false); }} onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
          {button.render({
            params,
            isHovered,
            isActive,
            onClick: handleButtonClick,
          })}
        </div>
      </div>

      {/* Card Footer: Quick Actions */}
      <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800/60 flex items-center justify-between gap-2 mt-auto">
        {/* Inspect / Customize Button */}
        <button
          onClick={() => onOpenCustomizer(button)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 text-xs font-medium rounded-lg border border-indigo-500/30 transition-colors cursor-pointer"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Tùy biến</span>
        </button>

        {/* Copy Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopyCss}
            title="Sao chép CSS thuần"
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium rounded-lg border border-slate-700/60 transition-colors cursor-pointer"
          >
            {copiedType === 'css' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Đã chép</span>
              </>
            ) : (
              <>
                <Code2 className="w-3.5 h-3.5 text-slate-400" />
                <span>CSS</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopyHtml}
            title="Sao chép mã HTML"
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium rounded-lg border border-slate-700/60 transition-colors cursor-pointer"
          >
            {copiedType === 'html' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Đã chép</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>HTML</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
