"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import React from 'react';

type PlayButtonProps = {
    className?: string;
};

export default function PlayButton({ className }: PlayButtonProps) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <motion.button className='absolute top-0 left-0 md:m-8 m-4 md:size-14 size-10 bg-content rounded-full origin-center'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ scale: hovered ? 1.1 : 1 }}
        >
            <motion.div
                animate={{ scale: hovered ? 0.91 : 1 }}
            >
                <FontAwesomeIcon className='size-5/12 md:pl-1 pl-0.5 pt-1 text-bgr' icon={faPlay} />
            </motion.div>
        </motion.button>
    );
};