import { useTheme } from '@/context/ThemeContext'
import React from 'react'

export const ModalSkeleton = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-100 skeleton-wrapper`}>
      <div className={`skeleton-${theme} skeleton-title`}></div>
      <div className={`skeleton-${theme} skeleton-text mt-3`}></div>
      <div className={`skeleton-${theme} skeleton-text`}></div>
      <div className={`skeleton-${theme} skeleton-text`}></div>
      <div className={`skeleton-${theme} skeleton-text d-md-none`}></div>
      <div className={`skeleton-${theme} skeleton-text d-md-none`}></div>

      <div className={`skeleton-${theme} skeleton-title mt-3`}></div>

      <div className={`d-flex flex-wrap`}>
        <div className={`skeleton-${theme} skeleton-img`}></div>
        <div className={`skeleton-${theme} skeleton-img`}></div>
        <div className={`skeleton-${theme} skeleton-img`}></div>
        <div className={`skeleton-${theme} skeleton-img`}></div>  
        <div className={`skeleton-${theme} skeleton-img`}></div>
      </div>

      <div className={`skeleton-${theme} skeleton-func mt-3`}></div>
      <div className={`skeleton-${theme} skeleton-func`}></div>
      <div className={`skeleton-${theme} skeleton-func`}></div>
      <div className={`skeleton-${theme} skeleton-func`}></div>
      <div className={`skeleton-${theme} skeleton-func`}></div>
      <div className={`skeleton-${theme} skeleton-func`}></div>
      <div className={`skeleton-${theme} skeleton-func`}></div>
    </div>
  )
}


