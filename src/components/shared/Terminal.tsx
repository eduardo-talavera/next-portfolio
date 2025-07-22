
import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[]
  className?: string
}

export const Terminal: FC<TerminalProps> = ({ children, className, ...props }) => {
  return (
      <div 
        id="terminal" 
        className={`mt-5 ${className}`} 
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


