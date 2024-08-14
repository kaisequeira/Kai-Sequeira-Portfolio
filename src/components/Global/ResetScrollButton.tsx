"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLenis } from './LenisWrapper';

type ResetScrollButtonProps = {
    className?: string;
};

export default function ResetScrollButton({ className }: ResetScrollButtonProps) {
    const [hovered, setHovered] = React.useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { lenis } = useLenis();

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.5,
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <motion.button
            className='md:size-14 size-10 bg-offwhite rounded-full origin-center fixed bottom-0 left-0 md:m-8 m-4 mix-blend-difference z-10'
            onTap={scrollToTop}
            initial={{ opacity: 0 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ scale: hovered ? 1.1 : 1, opacity: isVisible ? 1 : 0 }}
        >
            <motion.div
                animate={{ scale: hovered ? 0.91 : 1 }}
            >
                <FontAwesomeIcon className='size-5/12 pt-1 text-offblack' icon={faArrowUp} />
            </motion.div>
        </motion.button>
    );
}