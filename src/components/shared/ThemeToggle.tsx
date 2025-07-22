'use client';

import { useTheme } from '@/context/ThemeContext';
import { HTMLAttributes } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export interface ThemeToggleProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
}

export const ThemeToggle = ({ className, ...props }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`toggle_button ${className}`} {...props}>
     {
        theme === 'light' 
          ? <FaMoon onClick={toggleTheme} size={25} /> 
          : <FaSun onClick={toggleTheme} size={25} />
     }
    </div>
  );
}
