export default function MobileMenu({ setIsOpen }) {
  return (
    <nav className='flex flex-col font-bold text-white lg:text-2xl'>
      <a
        className='common-link cursor-pointer text-xl font-bold flex justify-end items-center'
        onClick={() => setIsOpen(false)}
      >
        ⟶
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
