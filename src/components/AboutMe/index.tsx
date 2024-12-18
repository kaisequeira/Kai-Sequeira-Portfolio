'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import ResumePhoto from '/public/About/ResumePhotoKai.jpg'
import Bio from './Bio'
import { circOut, useScroll, useTransform, motion } from 'framer-motion'

const AboutMe: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['25% end', 'center center'],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], ['0%', '100%'], {
        ease: circOut,
    })

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="bg-bgr w-full lg:tall:h-[50vh] min-h-fit flex flex-row items-center justify-center pt-1/20">
            <motion.div
                ref={targetRef}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={isLoaded ? { opacity } : {}}
                className="2xl:w-[1350px] lg:w-[800px] xs:w-[360px] w-[330px] h-fit flex lg:flex-row flex-col justify-between gap-8 will-change-transform"
            >
                <Bio className="flex flex-col justify-center lg:w-1/2 w-full gap-8" />
                <div className="xl:h-full h-fit lg:w-fit w-full items-center justify-center flex">
                    <Image
                        src={ResumePhoto}
                        className="rounded-3xl"
                        alt="Profile Photo"
                        quality={100}
                        width={440}
                        placeholder="blur"
                        loading="eager"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe
