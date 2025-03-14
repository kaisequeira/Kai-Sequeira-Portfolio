'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useLenis } from '../_Global/LenisWrapper'
import { motion } from 'framer-motion'
import React from 'react'

export default function ScrollDownButton() {
    const { lenis } = useLenis()

    const scrollToProjects = () => {
        if (lenis) {
            const nextScreenPosition = window.innerHeight
            lenis.scrollTo(nextScreenPosition, {
                duration: 1.5,
            })
        }
    }

    return (
        <motion.button
            className="size-fit pb-0 z-50 absolute md:bottom-1/20 bottom-1/10 pointer-events-auto medium:block hidden"
            onTap={scrollToProjects}
        >
            <motion.div>
                <FontAwesomeIcon
                    className="size-6 pt-1 text-content"
                    icon={faChevronDown}
                />
            </motion.div>
        </motion.button>
    )
}
