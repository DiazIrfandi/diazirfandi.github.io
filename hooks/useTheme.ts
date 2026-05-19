import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check initial preference
    const root = window.document.documentElement;
    const initialColorValue = root.classList.contains('dark') 
      ? true 
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDark(initialColorValue);
    if (initialColorValue) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  return { isDark, toggleTheme };
}