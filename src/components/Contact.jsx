import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitch from '../assets/twitch.svg'
import Youtube from '../assets/youtube.svg'

export default function Contact() {
  return (
    <section
      id='contact'
      className='section-container flex flex-col items-center justify-between sm:p-16 lg:flex-row'
    >
      <div className='mb-10 lg:mb-0'>
        <h2 className='w-80 text-3xl font-bold md:text-6xl'>Contact Us</h2>
        <p className='max-w-40 py-8'>
          THE SHOE COMPANY, Dallas, Texas, USA&nbsp;&nbsp;&nbsp; +1 5590 1120 9910
        </p>
        <div className='flex space-x-4'>
          <a href='#'>
            <img loading='lazy' src={Facebook} alt='Facebook' />
          </a>
          <a href='#'>
            <img loading='lazy' src={Instagram} alt='Instagram' />
          </a>
          <a href='#'>
            <img loading='lazy' src={Twitch} alt='Twitch' />
          </a>
          <a href='#'>
            <img loading='lazy' src={Youtube} alt='Youtube' />
          </a>
        </div>
      </div>
      <div className='w-full sm:mx-0'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429187.3473062354!2d-97.06176344770377!3d32.818072068674184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1753095869482!5m2!1sen!2sin'
          className='mx-auto h-[650px] w-full max-w-2xl border-0 lg:mx-0 lg:ml-auto'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
  )
}
