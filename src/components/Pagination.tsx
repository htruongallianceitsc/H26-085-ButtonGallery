import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];
  const addPage = (p: number) => pages.push(p);

  const windowStart = Math.max(2, currentPage - 1);
  const windowEnd = Math.min(totalPages - 1, currentPage + 1);

  addPage(1);
  if (windowStart > 2) pages.push('ellipsis');
  for (let p = windowStart; p <= windowEnd; p++) addPage(p);
  if (windowEnd < totalPages - 1) pages.push('ellipsis');
  if (totalPages > 1) addPage(totalPages);

  return pages;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      aria-label="Phân trang"
      className="flex items-center justify-center gap-1.5 pt-2"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 border border-slate-800 bg-slate-900/80 hover:text-white hover:bg-slate-800/80 hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-slate-900/80 disabled:hover:text-slate-400 transition-colors cursor-pointer"
        aria-label="Trang trước"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pageNumbers.map((p, idx) =>
        p === 'ellipsis' ? (
          <span key={`ellipsis-${idx}`} className="px-1.5 text-slate-500 text-xs select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={p === currentPage ? 'page' : undefined}
            className={`min-w-8 h-8 px-2 flex items-center justify-center rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
              p === currentPage
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white hover:bg-slate-800/80 hover:border-slate-700'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 border border-slate-800 bg-slate-900/80 hover:text-white hover:bg-slate-800/80 hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-slate-900/80 disabled:hover:text-slate-400 transition-colors cursor-pointer"
        aria-label="Trang sau"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
