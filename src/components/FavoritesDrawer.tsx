import React, { useState, useEffect, useRef } from 'react';
import { getSavedVariants, deleteVariant, type SavedVariant } from '../utils/savedVariants';
import { BUTTON_GALLERY } from '../data/buttonGallery';
import { X, Bookmark, Copy, Check, Download, Sliders, Trash2 } from 'lucide-react';
import { ButtonDefinition } from '../types/button';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteButtons: ButtonDefinition[];
  onSelectButton: (button: ButtonDefinition) => void;
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
}

export function FavoritesDrawer({
  isOpen,
  onClose,
  favoriteButtons,
  onSelectButton,
  onRemoveFavorite,
  onClearAll,
}: FavoritesDrawerProps) {
  const [copiedBundle, setCopiedBundle] = useState(false);
  const [variants, setVariants] = useState<SavedVariant[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (isOpen) setVariants(getSavedVariants()); }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const buttons = [...dialogRef.current.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')];
        const first = buttons[0], last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = previousOverflow; previous?.focus(); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const generateCombinedCss = () => {
    return favoriteButtons
      .map((btn) => {
        return `/* ==========================================\n   ${btn.name.toUpperCase()} (${btn.category})\n   ========================================== */\n${btn.generateCss({
          text: btn.defaultText,
          iconName: btn.defaultIcon,
          iconPosition: 'left',
          size: 'md',
          primaryColor: btn.defaultPrimaryColor,
          accentColor: btn.defaultAccentColor,
          radius: btn.defaultRadius,
          borderWidth: 1,
          disabled: false,
          state: 'default',
          animationSpeed: 1,
          soundEnabled: false,
        })}`;
      })
      .concat(variants.map(v => {
        const preset = BUTTON_GALLERY.find(b => b.id === v.presetId);
        return preset ? `/* SAVED VARIANT ${v.name} */\n${preset.generateCss(v.params)}` : '';
      })).filter(Boolean).join('\n\n');
  };

  const handleCopyBundle = async () => {
    try {
      await navigator.clipboard.writeText(generateCombinedCss());
      setCopiedBundle(true);
      setTimeout(() => setCopiedBundle(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  const handleDownloadBundle = () => {
    const cssContent = generateCombinedCss();
    const blob = new Blob([cssContent], { type: 'text/css;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `buttoncraft-favorite-pack.css`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Favorites and saved buttons" className="w-full max-w-md bg-[#0a0e1a] border-l border-slate-800 h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
            <h2 className="text-base font-bold text-white">Nút Bấm Đã Lưu ({favoriteButtons.length})</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {favoriteButtons.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                <Bookmark className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-300">Chưa có nút bấm nào được lưu</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Bấm vào biểu tượng bookmark trên bất kỳ thẻ nút nào để lưu vào danh sách yêu thích của bạn.
              </p>
            </div>
          ) : (
            favoriteButtons.map((btn) => (
              <div
                key={btn.id}
                className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-slate-100 truncate">{btn.name}</h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{btn.description}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onSelectButton(btn);
                      onClose();
                    }}
                    title="Mở tùy biến"
                    className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded transition-colors"
                  >
                    <Sliders className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveFavorite(btn.id)}
                    title="Xóa khỏi danh sách"
                    className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-slate-800 p-4 space-y-2 overflow-y-auto max-h-60">
          <h3 className="text-sm font-semibold text-white">Phiên bản đã tùy chỉnh ({variants.length})</h3>
          {variants.map(v => <div key={v.id} className="rounded-lg border border-slate-700 px-3 py-2 flex items-center gap-2 justify-between">
            <div className="min-w-0"><p className="text-xs text-white truncate">{v.name}</p><p className="text-xs text-slate-400">{v.params.text}</p></div>
            <button aria-label={`Sao chép CSS của ${v.name}`} className="text-indigo-300 text-xs" onClick={() => {const b = BUTTON_GALLERY.find(b => b.id === v.presetId); if(b) void navigator.clipboard.writeText(b.generateCss(v.params));}}>Copy CSS</button>
            <button aria-label={`Xóa ${v.name}`} className="text-rose-300 text-xs" onClick={() => { deleteVariant(v.id); setVariants(getSavedVariants()); }}>Xóa</button>
          </div>)}
        </div>
        {/* Footer with bundle export */}
        {(favoriteButtons.length > 0 || variants.length > 0) && (
          <div className="p-4 border-t border-slate-800 bg-[#070b14] space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyBundle}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                {copiedBundle ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Đã sao chép CSS gói!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép toàn bộ CSS</span>
                  </>
                )}
              </button>
              <button
                onClick={handleDownloadBundle}
                title="Tải gói file .css"
                className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-700 cursor-pointer"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={onClearAll}
              className="w-full text-center text-xs text-slate-500 hover:text-rose-400 transition-colors py-1 cursor-pointer"
            >
              Xóa tất cả danh sách lưu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
