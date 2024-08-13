"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import React from 'react';

type PlayButtonProps = {
    className: string;
};

export default function PlayButton({ className }: PlayButtonProps) {
    
    return (
        <div className={className}>
            <motion.button className='size-14 bg-content rounded-full'
                whileHover={{ scale: 1.1 }}
            >
                <FontAwesomeIcon className='size-1/2 pl-1 pt-1 text-bgr' icon={faPlay} />
            </motion.button>
        </div>
    );
};