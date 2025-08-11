'use client';

import { useTheme } from '@/context/ThemeContext';
import { HTMLAttributes } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useThemeMode } from 'tropix-ui';

export interface ThemeToggleProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  text?: boolean
}

export const ThemeToggle = ({ className, text = false, ...props }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const { setIsDark } = useThemeMode();

  const handleClick = () => {
    toggleTheme()
    if (theme === 'light') setIsDark(true)
    else setIsDark(false)  
  }

  return (
    <div className={`toggle_button ${className}`} {...props}>
     {
      text ? <>
        <div className="d-flex align-items-center" onClick={handleClick}>
          <span className='mr-3'>
            {
              theme === 'light' 
                ? 'Tema obscuro'
                : 'Tema claro'
            }
            </span>
            {
                theme === 'light' 
                  ? <FaSun size={25} /> 
                  : <FaMoon size={25} />
            }
        </div>
      </> : <>
            {
              theme === 'light' 
                ? <FaSun onClick={handleClick} size={25} /> 
                : <FaMoon onClick={handleClick} size={25} />
            }
      </>
     }
    </div>
  );
}
