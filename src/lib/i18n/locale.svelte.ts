export type Locale = 'it' | 'en';

function initLocale(): Locale {
  if (typeof window === 'undefined') return 'it';
  try {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved === 'it' || saved === 'en') {
      return saved;
    }
    const browserLang = (navigator.language || '').toLowerCase();
    return browserLang.startsWith('it') ? 'it' : 'en';
  } catch {
    return 'it';
  }
}

const initialLocale = initLocale();
let currentLocale = $state<Locale>(initialLocale);

if (typeof window !== 'undefined') {
  document.documentElement.lang = initialLocale;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
    } catch {
      // Ignore localStorage errors (e.g. private browsing restrictions)
    }
  }
}

export function toggleLocale(): Locale {
  const next: Locale = currentLocale === 'it' ? 'en' : 'it';
  setLocale(next);
  return next;
}

export type Localized<T = string> = {
  it: T;
  en: T;
};

/**
 * Helper to resolve a localized value reactively.
 * If given an object with `it` and `en` properties, returns the one for the current locale.
 * Otherwise returns the value as-is.
 */
export function t<T>(val: Localized<T> | T): T {
  const loc = getLocale();
  if (val && typeof val === 'object' && 'it' in val && 'en' in val) {
    return (val as Localized<T>)[loc];
  }
  return val as T;
}
