'use client';
import ThemeToggler from '@/components/Helper/ThemeToggler';
import { Navlinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';


type Props = {
  openNav: () => void;
};

const Nav = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(()=> {
    const handler = () => {
      if (window.scrollY >= 50) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);

  },[]);

  return (
    <div className={`transition-all ${navBg ?"bg-white dark:bg-gray-900 shadow-md" : "fixed"
    } duration-200 h-[12vh] z-[100] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* logo */}
        <div className='flex items-center space-x-2'>
            <div className='w-10 h-10  rounded-full flex items-center justify-center flex-col'>
              <Image src="/logo.png" alt='' height="30" width="30"/>
            </div>
          <h1 className='text-xl hidden sm:block md:text-2xl font-bold text-red-900 dark:text-white'>Flavorya</h1>
        </div>

        {/* Nav links */}
        <div className='hidden lg:flex items-center space-x-10'>
          {Navlinks.map((link) => {
            return(
              <Link
              key={link.id}
              href={link.url}
              className='text-black dark:text-white hover:text-green-700 dark:hover:text-green-400 font-bold transition-all duration-200'
              >
                <p>{link.Label}</p>
              </Link>
            );
          })}
        </div>

        {/* Buttons */}
        <button className='bg-red-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer'>
          Join Now
        </button>

        {/* Theme */}
          <ThemeToggler/>

        {/* Menu icon */}
        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-red-900 dark:text-white lg:hidden'/>
        </div>
      
    </div>
  )
}

export default Nav
