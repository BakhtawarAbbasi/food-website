import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-xl sm:text-2xl text-center font-extrabold'>
        Next Our Quality Features
      </h1>
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <FeatureCard icon="/images/f1.jpeg" title="Analytic Bussiness"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <FeatureCard icon="/images/f2.jpeg" title="Largest People"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <FeatureCard icon="/images/f3.jpeg" title="Wide Coverage Map"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <FeatureCard icon="/images/f4.jpeg" title="Artificial Intelligence"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <FeatureCard icon="/images/f5.jpeg" title="Trusted & Sources"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
          <FeatureCard icon="/images/f6.jpeg" title="Mobile Apps"/>
        </div>
      </div>
      
    </div>
  )
}

export default Feature
