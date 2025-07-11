import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w=[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

        {/* Image content */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src="/images/a.webp" width={800} height={800} alt='image'/>
        </div>

        {/* Text Content */}
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12'>
            We deliver our products as fast as superman can do.
          </h1>
          <p className='mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi facere id.
          </p>

          <div className='mt-8'>
            <div className='flex mt-8 items-center space-x-6'>
              <p className='text-3xl md:text-5xl opacity-40 font-bold'>01</p>
              <div>
                <h1 className='text-base sm:text-lg font-extrabold '>Easy to use application</h1>
                <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                  We&apos;re driven beyond finish the project we want to find solutions using our website &amp; apps
                </p>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <div className='flex mt-8 items-center space-x-6'>
              <p className='text-3xl md:text-5xl opacity-40 font-bold'>02</p>
              <div>
                <h1 className='text-base sm:text-lg font-extrabold '>Deliver food within 30 minute</h1>
                <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                  We&apos;re driven beyond finish the project we want to find solutions using our website &amp; apps
                </p>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <div className='flex mt-8 items-center space-x-6'>
              <p className='text-3xl md:text-5xl opacity-40 font-bold'>03</p>
              <div>
                <h1 className='text-base sm:text-lg font-extrabold '>100% Reliable within 30 days</h1>
                <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                  We&apos;re driven beyond finish the project we want to find solutions using our website &amp; apps
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
