'use client';

import { useTheme } from '@/context/ThemeContext';
import { ButtonHTMLAttributes } from 'react';

export interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
}

export const ThemeToggle = ({ className, ...props }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`toggle_button ${className}`} onClick={toggleTheme} {...props}>
      {theme === 'light' ? '🌙 Modo obscuro' : '☀️ Modo claro'}
    </button>
  );
}
