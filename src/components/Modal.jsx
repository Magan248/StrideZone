import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, setIsOpen, children }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      //delay unmount until animation ends
      const timer = setTimeout(() => setShowModal(false), 100) // 500ms = transition time
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={'fixed inset-0 flex transform items-center justify-center bg-black/50 px-4 backdrop-blur-sm'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ease-in-out8 fixed top-23 right-1 max-w-40 grow rounded-lg bg-gradient-to-r from-sky-900
          to-emerald-900 shadow-lg transition-transform duration-300 ${isOpen ? '' : 'translate-x-100'}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}
