'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import ResumePhoto from '/public/About/ResumePhotoKai.jpg'
import Bio from './Bio'
import { circOut, useScroll, useTransform, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const AboutMe: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'center center'],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], ['0%', '99%'], {
        ease: circOut,
    })

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="w-full lg:medium:h-[50vh] min-h-fit flex flex-row items-center justify-center pt-1/20 pointer-events-none">
            <motion.div
                ref={targetRef}
                initial={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={isLoaded ? { opacity } : {}}
                className="2xl:w-[1350px] lg:w-[800px] xs:w-[360px] w-[330px] h-full flex lg:flex-row flex-col justify-between gap-8"
            >
                <Bio className="flex flex-col justify-center lg:w-1/2 w-full gap-8" />
                <div className="lg:w-fit w-full h-full flex items-center justify-center flex-col">
                    <Image
                        src={ResumePhoto}
                        className="rounded-3xl shadow-thick select-none"
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
