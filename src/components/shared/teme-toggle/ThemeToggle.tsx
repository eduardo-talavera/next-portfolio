'use client';

import { useTheme } from '@/context/ThemeContext';
import { HTMLAttributes } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useThemeMode } from 'tropix-ui';
import './theme-toggle.scss';

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
                  ? <LuSun size={25} /> 
                  : <LuMoon size={25} />
            }
        </div>
      </> : <>
            {
              theme === 'light' 
                ? <LuSun onClick={handleClick} size={25} /> 
                : <LuMoon onClick={handleClick} size={25} />
            }
      </>
     }
    </div>
  );
}
