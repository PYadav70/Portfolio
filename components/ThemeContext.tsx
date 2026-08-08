'use client';

import React, { createContext, useContext, useCallback, useSyncExternalStore } from 'react';

export type ThemeMode = 'terminal' | 'oled' | 'matrix' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'portfolio-theme') callback();
  };
  window.addEventListener('storage', handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
  };
}

function getSnapshot(): ThemeMode {
  if (typeof window === 'undefined') return 'terminal';
  const saved = localStorage.getItem('portfolio-theme') as ThemeMode;
  if (saved && ['terminal', 'oled', 'matrix', 'light'].includes(saved)) {
    return saved;
  }
  return 'terminal';
}

function getServerSnapshot(): ThemeMode {
  return 'terminal';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    localStorage.setItem('portfolio-theme', newTheme);
    listeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme} min-h-screen transition-colors duration-300 ${
        theme === 'oled' 
          ? 'bg-black text-slate-100' 
          : theme === 'matrix' 
          ? 'bg-[#03120e] text-emerald-300' 
          : theme === 'light' 
          ? 'bg-slate-50 text-slate-900' 
          : 'bg-[#080c10] text-slate-100'
      }`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
