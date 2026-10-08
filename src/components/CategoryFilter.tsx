import React from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { CategoryFilter as CategoryFilterValue } from '../types/button';
import { CATEGORIES } from '../data/categories';

interface CategoryFilterProps {
  activeCategory: CategoryFilterValue;
  onSelectCategory: (category: CategoryFilterValue) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  totalButtons: number;
  filteredCount: number;
  availableTags: string[];
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedTag,
  onSelectTag,
  totalButtons,
  filteredCount,
  availableTags,
}: CategoryFilterProps) {
  return (
    <div className="w-full space-y-4">
      {/* Search Bar & Global Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm kiếm theo phong cách, hiệu ứng (Cyberpunk, Glass, 3D, Glow, Retro...)"
            className="w-full pl-10 pr-9 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span>Hiển thị</span>
          <span className="font-mono tabular-nums font-semibold text-slate-200">{filteredCount}</span>
          <span>trên</span>
          <span className="font-mono tabular-nums font-semibold text-slate-200">{totalButtons}</span>
          <span>mẫu nút bấm</span>
        </div>
      </div>

      {/* Segmented Category Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white hover:bg-slate-800/80 hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Feature & Animation Tags */}
      <div className="flex items-center gap-1.5 flex-wrap text-xs">
        <span className="text-slate-400 flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span>Hiệu ứng hot:</span>
        </span>
        {availableTags.slice(0, 10).map((tag) => {
          const isTagActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => onSelectTag(isTagActive ? null : tag)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-xs ${
                isTagActive
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-medium'
                  : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent'
              }`}
            >
              #{tag}
            </button>
          );
        })}
        {selectedTag && (
          <button
            onClick={() => onSelectTag(null)}
            className="text-xs text-rose-400 hover:text-rose-300 underline ml-1 cursor-pointer"
          >
            Bỏ lọc tag
          </button>
        )}
      </div>
    </div>
  );
}
