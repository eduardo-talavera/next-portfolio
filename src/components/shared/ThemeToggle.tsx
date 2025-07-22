'use client';

import { useTheme } from '@/context/ThemeContext';
import { HTMLAttributes } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export interface ThemeToggleProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  text?: boolean
}

export const ThemeToggle = ({ className, text = false, ...props }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`toggle_button ${className}`} {...props}>
     {
      text ? <>
        <div className="d-flex align-items-center" onClick={toggleTheme}>
          <span className='mr-3'>
            {
              theme === 'light' 
                ? 'Tema obscuro'
                : 'Tema claro'
            }
            </span>
            {
                theme === 'light' 
                  ? <FaMoon size={25} /> 
                  : <FaSun size={25} />
            }
        </div>
      </> : <>
            {
              theme === 'light' 
                ? <FaMoon onClick={toggleTheme} size={25} /> 
                : <FaSun onClick={toggleTheme} size={25} />
            }
      </>
     }
    </div>
  );
}
