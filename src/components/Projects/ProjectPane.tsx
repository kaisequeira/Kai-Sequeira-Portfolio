'use client'

import React, { RefObject, useRef, useState } from 'react'
import Label from '../_Global/Label'
import { useScroll, useTransform, motion, spring, circOut } from 'framer-motion'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { cn } from '@/lib/utils'

interface ProjectPaneProps {
    icon: IconDefinition
    colour: string
    title: string
    note?: string
    link: string
    size: string
    src: string
    description: React.ReactNode
}

const variants = {
    visible: { x: '0%', opacity: 1 },
    hidden: { x: '0%', opacity: 0 },
}

const ProjectPane: React.FC<ProjectPaneProps> = ({
    colour,
    title,
    icon,
    link,
    size,
    src,
    note,
    description,
}) => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end 110%'],
    })

    const [isInteracted, setIsInteracted] = useState(false)
    const isLgOrAbove = useMediaQuery({ query: '(min-width: 1024px)' })

    const y = useTransform(scrollYProgress, [0, 1], ['50%', '0%'], {
        ease: circOut,
    })
    const opacity = useTransform(scrollYProgress, [0, 1], ['0%', '100%'], {
        ease: circOut,
    })

    return (
        <motion.div
            style={{ y, opacity }}
            ref={targetRef}
            className={cn(
                size,
                'flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] w-full'
            )}
        >
            <div
                className={
                    'h-full w-full rounded-3xl flex flex-row overflow-hidden relative'
                }
                style={{ backgroundImage: colour }}
                onMouseEnter={() => setIsInteracted(true)}
                onMouseLeave={() => setIsInteracted(false)}
                onMouseDown={() =>
                    setIsInteracted((isInteracted) => !isInteracted)
                }
            >
                <div className="h-full w-full flex items-center justify-center absolute">
                    <video
                        preload="auto"
                        src={src}
                        className="md:w-[calc(100%-50px)] w-11/12 rounded-3xl !relative flex shadow-thick"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <motion.div
                    className="h-full w-full md:flex items-center justify-center absolute lg:bg-overlay bg-transparent"
                    variants={variants}
                    animate={
                        isInteracted || !isLgOrAbove ? 'visible' : 'hidden'
                    }
                    transition={{ type: 'tween' }}
                >
                    <div className="h-full w-full flex flex-col relative">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-6 right-6"
                        >
                            <FontAwesomeIcon
                                className="lg:text-offwhite text-offblack font-semibold text-4xl"
                                icon={icon}
                            />
                        </a>
                        <div className="flex-1 flex items-center justify-center px-1/11">
                            <div className="text-center font-semibold text-offwhite lg:block hidden">
                                {description}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-row gap-4 pt-6 justify-start w-full">
                <Label title={title} note={note} />
            </div>
        </motion.div>
    )
}

export default ProjectPane
