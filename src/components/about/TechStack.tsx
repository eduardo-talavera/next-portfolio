'use client';

import { skills } from '@/utils/constants';
import { runActionByScroll } from '@/utils/helpers';
import React, { useEffect, useRef } from 'react'

interface TechStackProps {
  className?: string
}

export const TechStack = ({ className, ...props }: TechStackProps) => {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    runActionByScroll(900, () => {
      ref.current?.classList.add('animate__bounce')
    })
  }, [])

  return (
    <div {...props} className={`animate__animated ${className}`} ref={ref}>
      {
        skills.map(skill => (
          <img
            key={skill}
            className='m-2'
            src={`https://skillicons.dev/icons?i=${skill}`} 
            width={50}
            height={50} 
            alt={`${skill} icon`}  
          />
        ))
      }
    </div>
  )
}


