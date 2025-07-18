import { runActionByScroll } from '@/utils/helpers';
import React, { FC, HTMLAttributes, ReactNode, useEffect, useRef } from 'react'

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[]
  className?: string
}

export const Terminal: FC<TerminalProps> = ({ children, className, ...props }) => {
  return (
      <div 
        id="terminal" 
        className={`mt-5 d-none d-sm-block ${className}`} 
        {...props}
      >
      <div id="header">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="body">
       { children }
      </div>
    </div>
  )
}


