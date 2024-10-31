'use client'

import React, { useRef, useEffect, useState } from 'react'
import {
    circOut,
    useScroll,
    useTransform,
    motion,
    useInView,
} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { RoughNotation } from 'react-rough-notation'

export default function ProjectTitle() {
    const [isLoaded, setIsLoaded] = useState(false)
    const targetRef = useRef(null)
    const isInView = useInView(targetRef, { once: true })
    const [show, setShow] = useState(false)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start 85%', 'start 30%'],
    })

    useEffect(() => {
        if (isInView) {
            setShow(true)
        }
    }, [isInView])

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1], {
        ease: circOut,
    })

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <motion.h2
            ref={targetRef}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={isLoaded ? { opacity } : {}}
            className="mb-6 mt-8 will-change-transform"
        >
            <RoughNotation
                type="underline"
                show={show}
                color={`rgb(var(--color-content))`}
                strokeWidth={4}
                padding={14}
                iterations={2}
                animationDuration={5000}
                animate={true}
            >
                Projects {''}
            </RoughNotation>
            <FontAwesomeIcon
                className="text-content font-semibold w-14 md:w-20 text-3xl xs:text-4xl md:text-5xl"
                icon={faPencil}
            />
        </motion.h2>
    )
}
