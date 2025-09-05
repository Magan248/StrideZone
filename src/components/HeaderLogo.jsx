import LogoImg from '../assets/Logo.svg'

export default function Logo() {
  return (
    <a href='#'>
      <img
        className='w-24 md:w-32'
        src={LogoImg}
        alt='company logo'
        loading='lazy'
      />
    </a>
  )
}
