import React, { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'default';

export default function useTheme(): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>,
] {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return savedMode ? (savedMode as Theme) : 'default';
  });
  function setDark() {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = 'black';
  }
  function setLight() {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = 'white';
  }

  useEffect(() => {
    localStorage.setItem('theme-mode', theme);

    if (theme === 'dark') {
      setDark();
    } else if (theme === 'light') {
      setLight();
    } else {
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDarkScheme) {
        setDark();
      } else {
        setLight();
      }
    }
  }, [theme]);

  return [theme, setTheme];
}
