import React from 'react';


// const Work = () => {

//     const project = data;
  
//   return (
//     <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
//             Work
//           </p>
//           <p className='py-6'>Check out some of my recent work</p>
//         </div>

// {/* container for projects */}
// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
//           {/* Grid Item */}
//           {project.map((item, index) => (
//   <div
//     key={index}
//     style={{ backgroundImage: `url(${item.image})` }}
//     className="shadow-lg shadow-[#040c16] group container rounded-md 
//               flex justify-center text-center items-center mx-auto content-div "
//   >
//     {/* Hover effect for images */}
//     <div className="opacity-0 group-hover:opacity-100 ">
//       <span className="text-2xl font bold text-white tracking-wider ">
//         {item.name}
//       </span>
//       <div className="pt-8 text-center ">
//         {/* eslint-disable-next-line */}
//         <a href={item.github} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-sm"
//           >
//             View Website
//           </button>
//         </a>
//       </div>
//     </div>
//   </div>
// ))}


// </div>
//       </div>
//     </div>
//   );
// };

// export default Work;







const callouts = [
  {
    name: 'Space Dynamics Lab - Software Developer',
    description: '',
    imageSrc: 'https://th.bing.com/th/id/OIP.D7h5oR3BeVkcCCHzwyncIwHaEZ?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: 'https://sdl.usu.edu/',
  },
  {
    name: 'Aidia - Web Developer',
    description: '',
    imageSrc: 'https://th.bing.com/th/id/OIP.zEUF5KzBX3q2PDWQ3T0YTQHaEW?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: 'https://theaidia.com/',
  },
  {
    name: 'Kartchner Engineering - HVAC Engineering',
    description: '',
    imageSrc: 'https://th.bing.com/th/id/OIP.Y2v63257epIlGe4AVkqI5AHaEJ?w=325&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://kartchnerengineering.com/',
  },
]

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent jobs</p>
        </div>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-md text-white-500 pb-4">
                <a href={callout.href} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              {/* <p className="text-base font-semibold text-gray-500">{callout.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work