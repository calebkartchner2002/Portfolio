import React, {useState} from 'react'
// import kartchnerLogo from '../assets/KartchnerLogo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  return (
    <div className='font-sans fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <div className='text-4xl font-bold inline border-b-4 border-color-accent'>Caleb Ford Kartchner</div>
        {/* <img src={kartchnerLogo} alt="Kartchner Logo" style={{width: '50px'}}/> */}
      </div>
        
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href="/">Home</a> 
        </li>
        <li>
          <a href="/about">About</a> 
        </li>
        <li>
          <a href="/skills">Skills</a> 
        </li>
        <li>
          <a href="/work">Work</a> 
        </li>
        <li>
          <a href="/contact">Contact</a> 
        </li>
      </ul>

      {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>
      
      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <a href="/">Home</a> 
        </li>
        <li className='py-6 text-4xl'>
          <a href="/about">About</a> 
        </li>
        <li className='py-6 text-4xl'>
          <a href="/skills">Skills</a> 
        </li>
        <li className='py-6 text-4xl'>
          <a href="/work">Work</a> 
        </li>
        <li className='py-6 text-4xl'>
          <a href="/contact">Contact</a> 
        </li>
      </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/caleb-kartchner-353bab209/" target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
        </ul>

        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/calebkartchner2002" target="_blank" rel="noopener noreferrer">
              Github <FaGithub size={30}/>
            </a>
          </li>
        </ul>

        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:calebkartchner2002@gmail.com" target="_blank" rel="noopener noreferrer">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>

        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1eOrhWVl0r485kvtHDoPL4Y4U81Mapbnh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default Navbar