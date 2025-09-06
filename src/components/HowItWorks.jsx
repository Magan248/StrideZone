import HowItWork from '../assets/how-it-works-image 1.svg'
import ArrowOne from '../assets/arrow-1.svg'
import ArrowTwo from '../assets/arrow-2.svg'
import ArrowThree from '../assets/arrow-3.svg'
export default function HowItWorks() {
  return (
    <section
      id='how it works'
      className='section-container px-6 py-16 bg-gradient-to-r from-gray-950 to-emerald-950'
    >
      <h2
        className='mx-auto max-w-96 text-2xl font-bold sm:mb-20 sm:max-w-lg sm:text-4xl md:max-w-3xl
          md:text-5xl'
      >
        Have they finally made the perfect workout shoe?
      </h2>
      <div className='relative py-10 mx-auto max-w-64 pt-60 sm:max-w-lg md:max-w-2xl lg:max-w-3xl'>
        <img
          className='mx-auto max-w-52 rotate-25 sm:max-w-80 sm:rotate-0 md:max-w-xl lg:max-w-2xl'
          src={HowItWork}
          alt='arrow for representing features'
          loading='lazy'
        />
        <div
          className='absolute top-16 max-w-40 translate-x-1 sm:max-w-60 sm:translate-x-4 md:translate-x-2
            md:top-20 md:max-w-80 lg:top-24 lg:translate-x-2'
        >
          <h3 className='text-xl font-bold sm:text-2xl md:text-3xl'>THE HEEL</h3>
          <p className='text-xs sm:text-lg md:text-xl'>
            The heel is well-built, has appropriate elevation and is not too rigid.
          </p>
          <img
            className='max-w-30 rotate-60 sm:max-w-40 sm:rotate-50 md:rotate-60'
            src={ArrowOne}
            alt='arrow for representing features'
            loading='lazy'
          />
        </div>
        <div
          className='absolute top-18 max-w-20 translate-x-52 sm:-top-10 sm:max-w-40 sm:translate-x-96
            md:max-w-60 md:translate-x-108 lg:max-w-60 lg:translate-x-140 lg:translate-y-44'
        >
          <img
            className='max-w-20 -ml-16 translate-y-40 rotate-[130deg] sm:max-w-30 sm:-translate-x-18
              sm:translate-y-58 md:max-w-40 md:translate-y-64 md:-translate-x-6 lg:max-w-full
              lg:-translate-x-16 lg:translate-y-24 lg:rotate-10'
            src={ArrowTwo}
            alt='arrow for representing features'
            loading='lazy'
          />
          <h3 className='-ml-16 text-xl font-bold sm:text-2xl md:text-3xl'>THE FRONT</h3>
          <p className='-ml-16 text-xs sm:text-lg md:text-xl'>
            The front is comfortable and adjusts well to the shape of your foot.
          </p>
        </div>
        <div
          className='absolute max-w-40 -translate-y-14 sm:max-w-60 sm:translate-x-20 sm:-translate-y-20
            md:ml-10 md:max-w-80 md:-translate-y-36 lg:-translate-y-48'
        >
          <img
            className='-mb-8 ml-16 max-w-24 sm:-mb-12 sm:ml-12 sm:max-w-30 sm:-translate-y-6 sm:-rotate-10
              md:max-w-40'
            src={ArrowThree}
            alt='arrow for representing features'
            loading='lazy'
          />
          <h3 className='text-xl font-bold sm:text-2xl md:text-3xl'>TRACTION</h3>
          <p className='text-xs sm:text-lg md:text-xl'>The shoe has good traction and doesn't slip easily.</p>
        </div>
      </div>
    </section>
  )
}
