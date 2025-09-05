import React from 'react'
import HeroImage from '../assets/hero-image.svg'
export default function HeroSection() {
  return (
    <section
      id='hero'
      className='section-container bg-[url(/images/background-road.png)] bg-cover bg-right bg-no-repeat px-6 md:bg-contain'
    >
      <div className='mx-auto flex max-w-6xl flex-col justify-between pt-36 pb-10 md:flex-row md:items-center'>
        <h1 className='mobile:text-5xl text-4xl leading-[60px] font-bold text-white md:text-6xl md:leading-[72px]'>
          THE <br /> SHOE <br /> COMPANY
        </h1>
        <div>
          <img
            className='w-full max-w-xl'
            src={HeroImage}
            alt='whit shoe image'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}
