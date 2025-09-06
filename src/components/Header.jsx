import { lazy, Suspense, useState } from 'react'
const Logo = lazy(() => import('./HeaderLogo'))
const DesktopNav = lazy(() => import('./HeaderDesktopNav'))
const MobileMenu = lazy(() => import('./HeaderMobileMenu'))
const Modal = lazy(() => import('./Modal'))
import useAutoHideHeader from '../hooks/useAutoHideHeader.js'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isVisible, headerRef } = useAutoHideHeader()

  return (
    <>
      {isVisible && (
        <header
          ref={headerRef}
          className='section-container fixed left-[50%] z-10 flex -translate-x-[50%] flex-row items-center
            justify-between bg-gradient-to-r from-sky-950/60 to-blue-950/60 px-6 backdrop-blur-sm'
        >
          {/* Logo */}
          <Suspense fallback={<div className='w-32 h-8 bg-gray-200'></div>}>
            <Logo />
          </Suspense>

          {/* Desktop Navigation */}
          <Suspense fallback={<div className='hidden md:block'>Loading...</div>}>
            <DesktopNav />
          </Suspense>

          {/* Mobile Menu Button */}
          <button
            className='cursor-pointer text-3xl rounded-lg p-2 hover:bg-gradient-to-r hover:from-indigo-500
              hover:to-emerald-500 active:bg-gradient-to-r active:from-emerald-500 active:to-indigo-500
              md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Mobile Menu Modal */}
          <Suspense fallback={null}>
            {isOpen && (
              <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Suspense fallback={<div className='p-4 text-white'>Loading Menu...</div>}>
                  <MobileMenu setIsOpen={setIsOpen} />
                </Suspense>
              </Modal>
            )}
          </Suspense>
        </header>
      )}
    </>
  )
}
