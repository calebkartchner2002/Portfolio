import React from 'react'
// import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='mx=auto px-8 flex flex-col justify-center items-center w-full h-full'>
        <p className='text-color-accent'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Caleb Kartchner</h1>
        <h2 className='text-4xl text-center sm:text-7xl font-bold text-[#8892b0]'>I am a Software Engineer</h2>
        {/* <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600 hover:bg-pink-600'>Under Construction 
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Home