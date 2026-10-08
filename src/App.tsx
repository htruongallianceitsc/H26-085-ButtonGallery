import React, { useState, useMemo, useEffect } from 'react';
import {
  Sparkles,
  Sliders,
  Code2,
  Copy,
  Zap,
  Bookmark,
  Shuffle,
  ChevronDown,
  Info
} from 'lucide-react';
import { ButtonCategory, CategoryFilter as CategoryFilterValue, ButtonDefinition } from './types/button';
import { BUTTON_GALLERY } from './data/buttonGallery';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ButtonCard } from './components/ButtonCard';
import { CustomizerModal } from './components/CustomizerModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Pagination } from './components/Pagination';
import {
  getFavoriteIds,
  toggleFavoriteId,
  getSoundPreference,
  setSoundPreference
} from './utils/storage';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterValue>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [selectedCustomButton, setSelectedCustomButton] = useState<ButtonDefinition | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 20;

  // Load preferences from localStorage on mount
  useEffect(() => {
    setFavoriteIds(getFavoriteIds());
    setSoundEnabled(getSoundPreference());
    const initial = new URLSearchParams(window.location.search).get('button') || window.location.pathname.match(/^\/buttons\/([a-z0-9-]+)\/?$/)?.[1];
    if (initial) setSelectedCustomButton(BUTTON_GALLERY.find(b => b.id === initial) ?? null);
  }, []);

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    setSoundPreference(nextVal);
  };

  const handleToggleFavorite = (id: string) => {
    const updated = toggleFavoriteId(id);
    setFavoriteIds(updated);
  };

  const handleClearAllFavorites = () => {
    localStorage.removeItem('buttoncraft_favorite_ids');
    setFavoriteIds([]);
  };

  // Collect all unique tags
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    BUTTON_GALLERY.forEach((btn) => {
      btn.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filtered button list
  const filteredButtons = useMemo(() => {
    return BUTTON_GALLERY.filter((btn) => {
      // Category filter
      if (activeCategory !== 'all' && btn.category !== activeCategory) {
        return false;
      }
      // Tag filter
      if (selectedTag && !btn.tags.includes(selectedTag)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = btn.name.toLowerCase().includes(q);
        const matchDesc = btn.description.toLowerCase().includes(q);
        const matchTag = btn.tags.some((t) => t.toLowerCase().includes(q));
        const matchCat = btn.category.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchTag && !matchCat) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, selectedTag, searchQuery]);

  // Reset to first page whenever the filtered result set changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, selectedTag, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredButtons.length / ITEMS_PER_PAGE));

  const paginatedButtons = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredButtons.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredButtons, currentPage]);

  const handlePageChange = (page: number) => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(clamped);
    const galleryEl = document.getElementById('gallery-section');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCustomizer = (button: ButtonDefinition) => {
    window.history.pushState({ buttonId: button.id }, '', `?button=${encodeURIComponent(button.id)}`);
    setSelectedCustomButton(button);
  };
  const closeCustomizer = () => {
    window.history.replaceState({}, '', window.location.pathname);
    setSelectedCustomButton(null);
  };
  useEffect(() => {
    const onPop = () => { const id = new URLSearchParams(location.search).get('button'); setSelectedCustomButton(BUTTON_GALLERY.find(b => b.id === id) ?? null); };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Saved buttons list
  const favoriteButtons = useMemo(() => {
    return BUTTON_GALLERY.filter((btn) => favoriteIds.includes(btn.id));
  }, [favoriteIds]);

  // Random button picker
  const handlePickRandom = () => {
    const randomIndex = Math.floor(Math.random() * BUTTON_GALLERY.length);
    openCustomizer(BUTTON_GALLERY[randomIndex]);
  };

  const handleScrollToCategory = (catId: string) => {
    if (catId === 'all') {
      setActiveCategory('all');
    } else {
      setActiveCategory(catId as ButtonCategory);
    }
    const galleryEl = document.getElementById('gallery-section');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. Header (Strict 3-Zone Contract) */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onRandomButton={handlePickRandom}
        favoritesCount={favoriteIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onScrollToCategory={handleScrollToCategory}
      />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0e1424] via-[#090d16] to-[#090d16] py-14 md:py-20">
        {/* Subtle background glow mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Editorial Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Thư Viện Gallery Button Đa Phong Cách &amp; Trình Tùy Biến
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              Bộ sưu tập nút bấm cao cấp từ Cyberpunk, Glassmorphism, 3D cơ học đến Neo-Brutalism. Xem trước tương tác, chỉnh thông số thời gian thực và sao chép mã nguồn CSS, HTML, Tailwind chỉ với 1 cú click.
            </p>

            {/* Quick Hero Highlights (Unboxed typography metadata) */}
            <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 pt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                124+ Phong cách tuyển chọn
              </span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Xuất Pure CSS &amp; HTML độc lập
              </span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                Phản hồi âm thanh Tactile Web Audio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Gallery & Playground Section */}
      <main id="gallery-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Category Filters, Search & Tag Picker */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSelectedTag(null);
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          totalButtons={BUTTON_GALLERY.length}
          filteredCount={filteredButtons.length}
          availableTags={availableTags}
        />

        {/* Button Grid Showcase */}
        {filteredButtons.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/20 space-y-3">
            <p className="text-base font-semibold text-slate-300">Không tìm thấy kiểu nút bấm phù hợp</p>
            <p className="text-sm text-slate-500">
              Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc danh mục.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Đặt lại tất cả bộ lọc
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedButtons.map((button) => (
                <ButtonCard
                  key={button.id}
                  button={button}
                  isFavorited={favoriteIds.includes(button.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onOpenCustomizer={openCustomizer}
                  soundEnabled={soundEnabled}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>

      {/* 4. Quick How-To / Documentation Strip */}
      <section className="border-t border-slate-800/80 bg-[#0a0f1d] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xs">1</span>
                Tương Tác &amp; Chọn Mẫu
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Di chuột và click trực tiếp lên từng nút trong gallery để kiểm tra hiệu ứng chuyển động, bóng đổ và âm thanh phản hồi haptic.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xs">2</span>
                Tùy Chỉnh Thông Số Studio
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bấm vào nút <strong>Tùy biến</strong> để tinh chỉnh text, icon, độ bo góc, màu chính/phụ và mô phỏng các trạng thái (Hover, Active, Loading, Disabled).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xs">3</span>
                Nhúng Ngay Vào Source Web
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sao chép mã CSS thuần, HTML hoặc Tailwind/React TSX và dán thẳng vào dự án HTML tĩnh, WordPress, Next.js hay Vue mà không cần thêm thư viện ngoài.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Minimal Clean Footer */}
      <footer className="border-t border-slate-800 bg-[#070a14] py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 ButtonCraft. Thư viện nút bấm tương tác cao cấp &amp; mã nguồn mở.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Pure CSS</span>
            <span aria-hidden="true">·</span>
            <span>Tailwind Compatible</span>
            <span aria-hidden="true">·</span>
            <span>Zero Dependencies</span>
          </div>
        </div>
      </footer>

      {/* 6. Customizer Modal */}
      {selectedCustomButton && <CustomizerModal
        button={selectedCustomButton}
        onClose={closeCustomizer}
        isFavorited={selectedCustomButton ? favoriteIds.includes(selectedCustomButton.id) : false}
        onToggleFavorite={handleToggleFavorite}
        soundEnabled={soundEnabled}
      />}

      {/* 7. Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteButtons={favoriteButtons}
        onSelectButton={openCustomizer}
        onRemoveFavorite={handleToggleFavorite}
        onClearAll={handleClearAllFavorites}
      />
    </div>
  );
}
