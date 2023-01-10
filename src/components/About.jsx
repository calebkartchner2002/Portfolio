import React from 'react'
import portrait from "../assets/selfPortrait2.JPG"

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-color-accent'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Caleb Kartchner, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I am currently an employee at Space Dynamics lab and am studying computer Science at Utah State University</p>  
            </div>
          </div>
          <img width={'400'} src={portrait} alt='Profile Portrait' className='pt-4'/>
      </div>
    </div>
  );
};

export default About