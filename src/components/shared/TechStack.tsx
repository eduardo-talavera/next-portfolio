'use client';

import { runActionByScroll } from '@/utils/helpers';
import React, { memo, useEffect, useRef } from 'react';

interface TechStackProps {
  className?: string
  skills: string[]
  imgSize?: number
  align?: 'center' | 'start'
}

const TechStack = memo(({ className, skills, imgSize = 50, align = 'center',  ...props }: TechStackProps) => {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    runActionByScroll(900, () => {
      ref.current?.classList.add('animate__bounce')
    })
  }, [])

  return (
    <div {...props} className={`d-flex flex-wrap justify-content-${align} ${className}`} ref={ref}>
      {
        skills.map(skill => (
          <img
            key={skill}
            className='m-2'
            src={`https://skillicons.dev/icons?i=${skill}`} 
            width={imgSize}
            height={imgSize} 
            alt={`${skill} icon`}  
            data-toggle="tooltip"
            data-placement="bottom"
            title={skill}
          />
        ))
      }
    </div>
  )
}
)

TechStack.displayName = 'TechStack'

export default TechStack
