'use client';
import { useEffect, useState } from 'react';

const _getTheme = () => {
  // Check if we are in the browser
  if (typeof window === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(_getTheme());
  const [isDark, setIsDark] = useState(theme === 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  // Get theme on mount
  useEffect(() => {
    setTheme(_getTheme());
  }, []);

  // Update isDark state
  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return { theme, toggleTheme, isDark };
};
