'use client'

import React, { use, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'
import {
    faHandPeace,
    faCameraRetro,
    faPersonHiking,
    faLaptopCode,
    faGamepad,
} from '@fortawesome/free-solid-svg-icons'

const icons = [
    faHandPeace,
    faCameraRetro,
    faPersonHiking,
    faLaptopCode,
    faGamepad,
]

const AnimatedIcon: React.FC = () => {
    const [iconIndex, setIconIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const [isSpinning, setIsSpinning] = useState(false);
    
    const controls = useAnimation();
    const isMdOrAbove = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        if (isSpinning)
            return;
        
        if (isHovered || !isMdOrAbove) {
            controls.start({
                rotate: 0,
                transition: {
                    duration: 0.05,
                },
            });
            return;
        }

        controls.start({
            rotate: [0, 0, -10, 10, -10, 10, -10, 0],
            transition: {
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 0.575, 0.65, 0.725, 0.8, 0.875, 1],
                repeat: Infinity,
                repeatDelay: 4,
            },
        });
    }, [isHovered, isMdOrAbove, controls, isSpinning]);

    const handleClick = async () => {
        setIsSpinning(true);
        controls.start({
            rotate: [0, -10, -15, 45, 180, 360, 375, 360],
            transition: {
                duration: 1,
                times: [0, 0.15, 0.2, 0.25, 0.3, 0.4, 0.48, 0.57],
            },
        })

        setTimeout(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
        }, 300);
    }

    return (
        <motion.button
            className="w-14 md:w-20 text-3xl xs:text-4xl md:text-5xl rounded-full inline-block origin-center text-center text-"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onAnimationComplete={() => {
                controls.set({ rotate: 0 });
                setIsSpinning(false);
            }}
            disabled={isSpinning}
            onClick={handleClick}
            animate={controls}
        >
            <FontAwesomeIcon icon={icons[iconIndex]} />
        </motion.button>
    )
}

export default AnimatedIcon
