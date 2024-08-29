"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useLenis } from '../_Global/LenisWrapper';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export default function ScrollDownButton() {
    const [hovered, setHovered] = React.useState(false);
    const { lenis } = useLenis();

    const scrollToProjects = () => {
        if (lenis) {
            const nextScreenPosition = window.innerHeight;
            lenis.scrollTo(nextScreenPosition, {
                duration: 1.5,
            });
        }
    };

    return (
        <motion.button
            className='md:size-14 size-14 origin-center absolute bottom-1/10 md:m-8 m-4'
            onTap={scrollToProjects}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div>
                <FontAwesomeIcon className='size-5/12 pt-1 text-content' icon={faChevronDown} />
            </motion.div>
        </motion.button>
    );
}