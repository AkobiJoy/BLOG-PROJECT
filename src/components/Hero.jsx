import Image from 'next/image'
import React from 'react'
import mockData from './MockData'

const Hero = () => {
  return (
    <section className='px-40 py-24 flex-'>
      <div>
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
               <div className="h-[18rem]">
                  <Image
                    className="w-[10500px] h-[20rem]"
                    src={data.image}
                    width={800}
                    height={800}
                    alt="images"
                  />
                </div>
                <p>{data.name}</p>
                <p>{data.description}</p>
          </div>
        ))}
          </div>
        </div>
    </section>
    
  
  )
}

export default Hero