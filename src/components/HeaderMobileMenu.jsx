export default function MobileMenu({ setIsOpen }) {
  return (
    <nav className='flex flex-col font-bold text-white lg:text-2xl'>
      <a className='cursor-pointer text-xl font-bold flex justify-end items-center'>
        <span
          className='rounded-lg m-1 px-4 py-1 hover:bg-gradient-to-r hover:from-indigo-500
            hover:to-emerald-500 active:bg-gradient-to-r active:from-emerald-500 active:to-indigo-500'
          onClick={() => setIsOpen(false)}
        >
          ⟶
        </span>
      </a>
      <a href='#hero' className='common-link' onClick={() => setIsOpen(false)}>
        Home
      </a>
      <a href='#how it works' className='common-link' onClick={() => setIsOpen(false)}>
        How it works?
      </a>
      <a href='#about' className='common-link' onClick={() => setIsOpen(false)}>
        About
      </a>
      <a href='#testimonials' className='common-link' onClick={() => setIsOpen(false)}>
        Testimonials
      </a>
      <a href='#contact' className='common-link' onClick={() => setIsOpen(false)}>
        Contact Us
      </a>
    </nav>
  )
}
