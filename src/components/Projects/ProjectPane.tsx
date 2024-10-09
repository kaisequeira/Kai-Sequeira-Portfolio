"use client";

import React, { RefObject, useRef, useState } from 'react'
import Label from '../_Global/Label'
import { useScroll, useTransform, motion, spring, circOut } from 'framer-motion'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface ProjectPaneProps {
    className: string
    children?: React.ReactNode
    icon: IconDefinition
    colour: string
    title: string
    note?: string
    link: string
}

const variants = {
    visible: { x: "0%", opacity: 1 },
    hidden: { x: "0%", opacity: 0 },
}

const ProjectPane: React.FC<ProjectPaneProps> = ({
    className,
    children,
    colour,
    title,
    icon,
    link,
    note,
}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end 110%"],
    });

    const [isInteracted, setIsInteracted] = useState(false);
  
    const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"], { ease: circOut });
    const opacity = useTransform(scrollYProgress, [0, 1], ["0%", "100%"], { ease: circOut });

    return (
        <motion.div style={{ y, opacity }} ref={targetRef} className={className}>
            <div
                className={'h-full w-full rounded-3xl flex flex-row overflow-hidden relative'}
                style={{ backgroundImage: colour }}
                onMouseEnter={() => setIsInteracted(true)}
                onMouseLeave={() => setIsInteracted(false)}
                onMouseDown={() => setIsInteracted(isInteracted => !isInteracted)}
            >
                <div
                    className='h-full w-full flex items-center justify-center absolute'
                >
                    {children}
                </div>
                <motion.div
                    className='h-full w-full flex items-center justify-center absolute bg-overlay'
                    variants={variants}
                    animate={isInteracted ? "visible" : "hidden"}
                    transition={{ type: "tween" }}
                >
                    <Link href={link} target="_blank" className='h-full w-full flex justify-center items-center'>
                        <FontAwesomeIcon
                            className="text-offwhite font-semibold text-7xl flex"
                            icon={icon}
                        />
                    </Link>
                </motion.div>
            </div>
            <div className="flex flex-row gap-4 pt-6 justify-start w-full">
                <Label title={title} note={note}/>
            </div>
        </motion.div>
    )
}

export default ProjectPane
