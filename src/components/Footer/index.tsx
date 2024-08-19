import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ClientFooter from './ClientFooter'

export default function Footer() {
    return (
        <div 
        className='relative lg:h-[35vh] sm:h-[45vh] h-[60vh]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='fixed bottom-0 lg:h-[35vh] sm:h-[45vh] h-[60vh] w-full bg-content flex justify-center items-center'>
                <div className='flex-row flex items-center 2xl:w-[1350px] lg:w-[800px] w-[350px] h-full'>
                    <div className='flex flex-col justify-start space-y-8 w-1/2 pr-1/11'>
                        <p className='text-bgr text-left'>
                            Thanks for scrolling to the end. If you’re looking for someone with my skills, feel free to contact me on any of my socials.
                        </p>
                        <p className='text-bgr font-extralight text-left'>
                            Developed with Next JS, Matter JS, Tailwind CSS & Framer Motion
                        </p>
                        <p className='text-bgr font-extralight text-left'>
                            © Kai Sequeira 2024
                        </p>
                    </div>
                    <div className='flex flex-col justify-end space-y-8 w-1/2'>
                        <ClientFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}