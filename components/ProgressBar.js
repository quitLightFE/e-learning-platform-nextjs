"use client"

import { usePathname } from 'next/navigation'
import nProgress from 'nprogress'
import React, { useEffect } from 'react'

export default function ProgressBar() {
    const pathname = usePathname()
    useEffect(() => {
      nProgress.start()
      nProgress.done()
    
    }, [pathname])
    
  return null
}
