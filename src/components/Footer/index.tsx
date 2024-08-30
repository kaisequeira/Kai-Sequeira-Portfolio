import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ClientFooter from './ClientFooter'

export default function Footer() {
    return (
        <div
            className="relative lg:h-[35vh] sm:h-[40vh] h-[50vh]"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="fixed bottom-0 lg:h-[35vh] sm:h-[40vh] h-[50vh] w-full bg-content flex justify-center items-center">
                <div className="flex-row flex items-center 2xl:w-[1350px] lg:w-[800px] xs:w-[360px] w-[330px] h-full">
                    <div className="flex flex-col justify-start gap-8 w-3/5">
                        <p className="text-bgr text-left">
                            Thanks for scrolling to the end. If you’re looking
                            for someone with my skills, feel free to contact me
                            on any of my socials.
                        </p>
                        <p className="text-bgr font-extralight text-left">
                            Developed with Next JS, Matter JS, Tailwind CSS &
                            Framer Motion
                        </p>
                        <p className="text-bgr font-extralight text-left">
                            © Kai Sequeira 2024
                        </p>
                    </div>
                    <div className="flex flex-col justify-end gap-8 w-2/5">
                        <ClientFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}
