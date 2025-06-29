import Image from 'next/image';
import React from 'react'

type Props = {
    title: string;
    image: string;
};

const RestaurantCard = ({ image, title}: Props) => {
  return (
    <div>
      <Image src={image} alt='img' width={400} height={400} className='w-full h-[250px] object-cover'/>
      <h1 className='mt-4 w-fit dark:hover:text-amber-300 hover:text-red-900 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold'>{title}</h1>

      <div className='flex items-center font-medium mt-3 space-x-2'>
        <p className='bg-gray-800 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>American</p>
        <p className='bg-gray-800 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>Fast Food</p>
        <p className='bg-gray-800 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>Burgers</p>
      </div>
      
    </div>
  );
};

export default RestaurantCard;
