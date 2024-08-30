import React from 'react'
import '@/app/globals.css'
import Image from 'next/image'
import ResumePhoto from '/public/About/ResumePhotoKai.jpg'
import Bio from './Bio'

const AboutMe: React.FC = () => {
    return (
        <div className="bg-bgr w-full lg:tall:h-[65vh] h-fit flex flex-row items-center justify-center py-1/14">
            <div className="2xl:w-[1350px] lg:w-[800px] xs:w-[360px] w-[330px] h-fit flex lg:flex-row flex-col justify-between gap-8">
                <Bio className="flex flex-col justify-center lg:w-1/2 w-full gap-8" />
                <div className="xl:h-full h-fit lg:w-fit w-full items-center justify-center flex">
                    <Image
                        src={ResumePhoto}
                        className="rounded-3xl"
                        alt="Profile Photo"
                        quality={100}
                        width={440}
                        placeholder="blur"
                        unoptimized
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
