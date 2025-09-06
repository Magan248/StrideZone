import TestimonialOne from '../assets/testimonial-1.svg'
import TestimonialTwo from '../assets/testimonial-2.svg'
import TestimonialThree from '../assets/testimonial-3.svg'
export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='section-container bg-gradient-to-r from-emerald-950 to-gray-950 px-6 py-8'
    >
      <h2 className='text-center text-3xl font-bold md:text-6xl'>
        What People are saying about THE SHOE COMPANY ?
      </h2>
      <div
        className='mx-auto mt-24 flex max-w-5xl flex-col items-center justify-between gap-10 text-center
          md:flex-row md:items-stretch'
      >
        <div className='w-64 p-3'>
          <img className='mb-4 w-full' src={TestimonialOne} alt='testimonials' loading='lazy' />
          <p>
            “Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design
            and build quality.”
          </p>
        </div>
        <div className='w-64'>
          <img className='mb-4 w-full rounded-full' src={TestimonialTwo} alt='testimonials' loading='lazy' />
          <p>“I love the shoes, the quality, and everyting. They are worth the investment!”</p>
        </div>
        <div className='w-64 p-3'>
          <img
            className='mb-4 w-full rounded-full'
            src={TestimonialThree}
            alt='testimonials'
            loading='lazy'
          />
          <p>
            “They make the best and forever lasting shoes. Superb fit and confort is literally the next level.
            Much recommended!”
          </p>
        </div>
      </div>
    </section>
  )
}
