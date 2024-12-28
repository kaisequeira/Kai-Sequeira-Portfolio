'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useMediaQuery } from 'react-responsive'

type RotatingIconProps = {
    icon: IconDefinition
    link: string
}

const RotatingIcon: React.FC<RotatingIconProps> = ({ icon, link }) => {
    const isLgOrAbove = useMediaQuery({ query: '(min-width: 1024px)' })
    const controls = useAnimation()

    useEffect(() => {
        if (isLgOrAbove)
            controls.start({
                rotate: [0, 0, -10, 10, -10, 10, -10, 0],
                transition: {
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.5, 0.575, 0.65, 0.725, 0.8, 0.875, 1],
                    repeat: Infinity,
                    repeatDelay: 1.8,
                },
            })
        else {
            controls.stop()
            controls.set({ rotate: 0 })
        }
    }, [controls, isLgOrAbove])

    const handleClick = () => {
        window.open(link, '_blank')
    }

    return (
        <motion.button
            className="absolute top-6 right-6"
            onClick={handleClick}
            animate={controls}
        >
            <FontAwesomeIcon
                className="text-offwhite font-semibold text-4xl"
                icon={icon}
            />
        </motion.button>
    )
}

export default RotatingIcon
