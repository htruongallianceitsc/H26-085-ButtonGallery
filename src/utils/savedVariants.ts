import type { CustomParams } from '../types/button';
export interface SavedVariant { id: string; presetId: string; name: string; params: CustomParams; savedAt: string; }
const KEY = 'buttoncraft_saved_variants_v1';
export function getSavedVariants(): SavedVariant[] {
  try { const data = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(data) ? data.filter(v => v && typeof v.id === 'string' && typeof v.presetId === 'string') : []; }
  catch { return []; }
}
export function saveVariant(item: SavedVariant): void { localStorage.setItem(KEY, JSON.stringify([...getSavedVariants().filter(v => v.id !== item.id), item])); }
export function deleteVariant(id: string): void { localStorage.setItem(KEY, JSON.stringify(getSavedVariants().filter(v => v.id !== id))); }
