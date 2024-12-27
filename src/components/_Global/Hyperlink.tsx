'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { RoughNotation } from 'react-rough-notation'
import { useInView } from 'framer-motion'

interface HyperlinkProps {
    href: string
    children: React.ReactNode
    colour?: string
    newTab?: boolean
}

const Hyperlink: React.FC<HyperlinkProps> = ({
    href,
    children,
    colour = '--color-acc1',
    newTab = true,
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (isInView) {
            setShow(true)
        }
    }, [isInView])

    return (
        <Link
            href={href}
            ref={ref}
            className="hyperlink relative inline-block z-50"
            target={newTab ? '_blank' : '_self'}
            rel={newTab ? 'noopener noreferrer' : ''}
        >
            <RoughNotation
                type="underline"
                show={show}
                color={`rgb(var(${colour}))`}
                strokeWidth={2}
                padding={6}
                iterations={2}
                animationDuration={5000}
                animate={true}
            >
                {children}
            </RoughNotation>
        </Link>
    )
}

export default Hyperlink
