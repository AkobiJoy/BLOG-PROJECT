"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import mockData from './MockData'
import { RiAccountPinCircleLine } from "react-icons/ri";
import Link from 'next/link';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   // Toggle dropdown visibility
   const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className='px-40 py-24 flex-'>
      <div className='mb-12'>
      <h1 className='text-4xl font-bold'>Writing🔸</h1>
      </div>    
        {/* <Image src="/couples.jpg" alt='image' width={1500} height={200}/> */}
        <div>
          <div className='flex flex-col gap-16'>
        {mockData.map((data)=>(
          <div
            key={data.id}
            className='flex flex-col gap-16'
            >
               <div className="h-[20rem]">
                  <Image
                    className="w-[10500px] max-h-96"
                    src={data.image}
                    width={800}
                    height={1000}
                    alt="images"
                  />
                </div>
                <div className='mt-8'>
                <p className='text-2xl font-bold mb-5'>{data.name}</p>
                <p className='text-xl mb-5'>{data.description}</p>
                <button className='bg-blue-700  rounded-full w-max py-3 px-2 text-white text-lg font-semibold'>{data.imression}</button>

                </div>
          </div>
        ))}
          </div>
        </div>
 
      <div className='fixed bottom-10 right-10'>
      {/* Account button */}
      <button
        onClick={toggleDropdown}
        className='bg-sky-300 font-bold rounded-full py-3 px-3'
      >
        <RiAccountPinCircleLine className='text-5xl' />
      </button>

      {/* Dropdown menu (above button) */}
      {isDropdownOpen && (
        <div className='slide-top absolute bottom-0 right-0 bg-white shadow-sky-100 shadow-lg rounded-lg py-3 w-44'>
          <ul className='text-gray-700'>
            <Link href={'/register'}>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              Register
            </li>
            </Link>

            <Link href={'/login'}>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              Login
            </li>
            </Link>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>

    </section>
    
  
  )
}

export default Hero