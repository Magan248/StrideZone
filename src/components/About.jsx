import React from 'react'
import AboutShoeCompany from '../assets/about-shoe-company.svg'
import AboutUsBackground from '../assets/about-us-bg.svg'

export default function About() {
  return (
    <section
      id='about'
      className='section-container mt-20 flex flex-col items-center px-6 pt-6 md:mt-1 md:flex-row
        md:space-x-12'
    >
      <h2 className='p-3 text-5xl font-bold md:hidden'>About Us!</h2>
      <div
        className='mx-auto self-center bg-no-repeat md:w-full'
        style={{ backgroundImage: `url(${AboutUsBackground})` }}
      >
        <img src={AboutShoeCompany} loading='lazy' alt='Foot in shoe' />
      </div>
      <div className='mx-auto max-w-xl space-y-8 px-6 py-16 md:w-full'>
        <h2 className='p-3> hidden text-6xl font-bold md:block'>About Us!</h2>
        <p>
          For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick
          the correct match of footwear.
        </p>
        <p>
          Gone are the days when you needed to go from store to store to locate the correct style and size for
          yourself.
        </p>
        <p>
          At THE SHOE COMPANY, you can locate a vast accumulation of dashing footwear in all sizes and styles,
          all inside a couple of snaps.
        </p>
        <p>
          Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling
          footwear alternatives from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At
          ‘Organization Name’, we offer men, ladies, and child’s shoes perfect for any and each event.
        </p>
      </div>
    </section>
  )
}
