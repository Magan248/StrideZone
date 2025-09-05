import { useEffect, useRef, useState } from 'react'

export default function useAutoHideHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const timeoutRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    function handleActivity() {
      setIsVisible(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsVisible(false), 5000)
    }

    function handleMouseNearTop(e) {
      if (e.clientY <= 20) {
        setIsVisible(true)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    function handleTouchNearTop(e) {
      if (e.touches[0].clientY <= 20) {
        setIsVisible(true)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    window.addEventListener('click', handleActivity)
    window.addEventListener('scroll', handleActivity)
    window.addEventListener('keydown', handleActivity)
    window.addEventListener('mousemove', handleMouseNearTop)
    window.addEventListener('touchstart', handleTouchNearTop)

    return () => {
      window.removeEventListener('click', handleActivity)
      window.removeEventListener('scroll', handleActivity)
      window.removeEventListener('keydown', handleActivity)
      window.removeEventListener('mousemove', handleMouseNearTop)
      window.removeEventListener('touchstart', handleTouchNearTop)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return { isVisible, headerRef }
}
