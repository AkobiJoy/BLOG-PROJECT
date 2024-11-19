"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import mockData from './MockData'
import { RiAccountPinCircleLine } from "react-icons/ri";
import Link from 'next/link';
import axios from 'axios';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [blog, setBlog] = useState('')


  const getBlog = async () => {
    const res = await axios.get("http://localhost:3000/api/getBlog");
    // const data=await res.json()
    console.log(res)
    setBlog(res)
    console.log(blog)
    return blog
  }
  useEffect(() => {
    getBlog()
  }, [])

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>

      {blog && (
        <section className='px-40 py-24 flex-'>

          <h1 className='text-4xl font-bold'>Writing🔸</h1>

          {/* <Image src="/couples.jpg" alt='image' width={1500} height={200}/> */}
          <div>
            <div className='flex flex-col gap-16'>
              {blog.map((data) => (
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
      ) || <h1 className='text-red-500 text-5xl text-center mt-5'> Loading</h1>}



    </>
  )
}

export default Hero