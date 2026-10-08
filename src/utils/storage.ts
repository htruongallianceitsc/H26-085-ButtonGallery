// Storage helpers for favorites and user preferences

const FAVORITES_KEY = 'buttoncraft_favorite_ids';
const SOUND_KEY = 'buttoncraft_sound_enabled';

export function getFavoriteIds(): string[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function toggleFavoriteId(id: string): string[] {
  try {
    const current = getFavoriteIds();
    const updated = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function isFavorite(id: string): boolean {
  return getFavoriteIds().includes(id);
}

export function getSoundPreference(): boolean {
  try {
    const pref = localStorage.getItem(SOUND_KEY);
    return pref !== null ? JSON.parse(pref) : true;
  } catch {
    return true;
  }
}

export function setSoundPreference(enabled: boolean): void {
  try {
    localStorage.setItem(SOUND_KEY, JSON.stringify(enabled));
  } catch {}
}
