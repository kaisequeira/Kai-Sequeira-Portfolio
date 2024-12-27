'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useMediaQuery } from 'react-responsive'

type BouncingIconProps = {
    icon: IconDefinition
    link: string
}

const BouncingIcon: React.FC<BouncingIconProps> = ({ icon, link }) => {
    const isLgOrAbove = useMediaQuery({ query: '(min-width: 1024px)' })
    const controls = useAnimation()

    useEffect(() => {
        if (isLgOrAbove)
            // controls.start({ y: [0, 0, -8, -10, -10, 0], transition: { duration: 1, times: [0, 0.5, 0.6, 0.65, 0.9, 1], repeatDelay: 2, repeat: Infinity} })
            controls.start({
                rotate: [0, 0, -10, 10, -10, 10, -10, 0],
                transition: {
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.5, 0.575, 0.65, 0.725, 0.8, 0.875, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                },
            })
        else {
            controls.stop()
            controls.set({ y: 0 })
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

export default BouncingIcon
