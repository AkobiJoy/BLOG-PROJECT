import Image from 'next/image'
import React from 'react'
import mockData from './MockData'

const Hero = () => {
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
    </section>
    
  
  )
}

export default Hero