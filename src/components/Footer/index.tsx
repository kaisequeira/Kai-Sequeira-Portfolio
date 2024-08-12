import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Footer() {
  return (
    <div 
      className='relative md:h-[35vh] sm:h-[45vh] h-[60vh]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='fixed bottom-0 md:h-[35vh] sm:h-[45vh] h-[60vh] w-full'>
            <div className='bg-content lg:flex-row flex-col flex justify-center items-center w-full h-full'>
                <div className='w-1/6 lg:h-full h-0'>
                </div>
                <div className='flex flex-col justify-center lg:w-2/3 w-full lg:space-y-12 space-y-8 place- pl-1/11 pr-1/11'>
                    <p className='text-bgr lg:text-2xl text-lg text-center'>
                        Thanks for scrolling to the end. If you’re looking for someone with my skills, feel free to contact me on any of my socials.
                    </p>
                    <div className='flex flex-row lg:space-x-8 space-x-4 flex-wrap justify-center gap-y-2'>
                        <a className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center' href='https://github.com/kaisequeira' target='_blank' rel='noopener noreferrer'>
                            <p className='font-extrabold text-bgr lg:text-2xl text-base'>Github</p>
                            <FontAwesomeIcon className='text-bgr lg:size-8 size-4' icon={faArrowUpRightFromSquare} />
                        </a>
                        <a className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center' href='https://www.linkedin.com/in/kai-sequeira-3b49602ba/' target='_blank' rel='noopener noreferrer'>
                            <p className='font-extrabold text-bgr lg:text-2xl text-base'>Linkedin</p>
                            <FontAwesomeIcon className='text-bgr lg:size-8 size-4' icon={faArrowUpRightFromSquare} />
                        </a>
                        <a className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center' href='https://www.linkedin.com/in/kai-sequeira-3b49602ba/' target='_blank' rel='noopener noreferrer'>
                            <p className='font-extrabold text-bgr lg:text-2xl text-base'>Resume</p>
                            <FontAwesomeIcon className='text-bgr lg:size-8 size-4' icon={faArrowUpRightFromSquare} />
                        </a>
                        <a className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center' href='https://www.linkedin.com/in/kai-sequeira-3b49602ba/' target='_blank' rel='noopener noreferrer'>
                            <p className='font-extrabold text-bgr lg:text-2xl text-base'>Email</p>
                            <FontAwesomeIcon className='text-bgr lg:size-8 size-4' icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>

                    <p className='text-bgr font-extralight lg:text-2xl text-lg text-center'>
                        Developed with Next JS, Matter JS, Aceternity UI, Tailwind CSS & Framer Motion
                    </p>
                </div>
                <div className='lg:w-1/6 w-full lg:h-full h-auto pt-5 flex flex-col justify-end'>
                    <p className='text-bgr font-extralight lg:text-2xl text-lg lg:text-end text-center lg:p-8 p-0'>
                        © Kai Sequeira 2024
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}