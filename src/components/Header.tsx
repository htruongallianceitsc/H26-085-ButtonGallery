import React from 'react';
import { Volume2, VolumeX, Shuffle, Bookmark } from 'lucide-react';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onRandomButton: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onScrollToCategory: (categoryId: string) => void;
}

export function Header({
  soundEnabled,
  onToggleSound,
  onRandomButton,
  favoritesCount,
  onOpenFavorites,
  onScrollToCategory,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors whitespace-nowrap"
        >
          ButtonCraft
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onScrollToCategory('all')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Tất cả kiểu dáng
          </button>
          <button
            onClick={() => onScrollToCategory('cyberpunk')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Cyberpunk
          </button>
          <button
            onClick={() => onScrollToCategory('glass')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Glassmorphism
          </button>
          <button
            onClick={() => onScrollToCategory('skeuomorphic-3d')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            3D Phím cơ
          </button>
          <button
            onClick={() => onScrollToCategory('brutalist')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Neo-Brutalist
          </button>
          <button
            onClick={() => onScrollToCategory('aurora-gradient')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Aurora Glow
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Tắt âm thanh tương tác' : 'Bật âm thanh tương tác'}
            className={`p-2 rounded-lg text-xs font-medium transition-colors border ${
              soundEnabled
                ? 'bg-slate-800/80 text-indigo-300 border-indigo-500/30 hover:bg-slate-700'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {soundEnabled ? (
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">Âm thanh</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Tắt tiếng</span>
              </span>
            )}
          </button>

          {/* Random Button */}
          <button
            onClick={onRandomButton}
            title="Khám phá ngẫu nhiên 1 kiểu button"
            className="p-2 sm:px-3 sm:py-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Shuffle className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Gợi ý ngẫu nhiên</span>
          </button>

          {/* Favorites Filter trigger */}
          <button
            onClick={onOpenFavorites}
            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Đã lưu</span>
            <span className="font-mono tabular-nums text-[11px] opacity-90">({favoritesCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
