import React from 'react';

const categories = [
    { name : "Pizza" },
    { name : "Breakfast" },
    { name : "Japanese" },
    { name : "Halal" },
    { name : "Dessert" },
    { name : "Labanese" },
    { name : "American" },
    { name : "Sushi" },
    { name : "Greek" },
    { name : "Thai" },
    { name : "Vegeterian" },
    { name : "Italian" },
    { name : "Mexican" },
    { name : "Indian" },
    { name : "Chinese" },
    { name : "Breakfast" },
    { name : "Burgers" },
]

const Category = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-xl sm:text-2xl text-center font-extrabold'>
            Popular Categories By Food
        </h1>
      
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex flex-wrap gap-4 justify-center'>
                {categories.map((category, i) => {
                    return (
                        <span
                        data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay={i + 100}
                        key={i}
                        className='px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white font-semibold text-lg text-gray-900'
                        >
                            {category.name}
                        </span>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Category;
