import Logo from '../assets/logo.svg'
export default function Footer() {
  return (
    <footer className='section-container px-2 bg-gradient-to-r from-gray-950 to-emerald-950'>
      <div className='flex items-center justify-center font-bold'>
        <a href='#'>
          <img className='w-20' src={Logo} alt='company logo' loading='lazy' />
        </a>
        <p>Made with ❤️ by Magan Singh</p>
      </div>
    </footer>
  )
}
