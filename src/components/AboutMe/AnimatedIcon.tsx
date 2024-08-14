"use client";

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace, faCameraRetro, faPersonHiking, faLaptopCode, faGamepad } from '@fortawesome/free-solid-svg-icons';

const icons = [faHandPeace, faCameraRetro, faPersonHiking, faLaptopCode, faGamepad];

const AnimatedIcon: React.FC = () => {
    const [iconIndex, setIconIndex] = useState(0);
    const controls = useAnimation();

    const handleClick = async () => {
        controls.start({
            rotate: [0, -10, -15, 45, 180, 360, 375, 360],
            transition: { duration: 1, times: [0, 0.15, 0.2, 0.25, 0.3, 0.4, 0.48, 0.57] }
        });

        setTimeout(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 300); // Change icon at the midpoint of the 1-second rotation
    };

    return (
        <motion.button
            className='w-14 md:w-24 text-3xl md:text-6xl rounded-full inline-block origin-center'
            whileHover={{ scale: 1.1 }}
            onClick={handleClick}
            animate={controls}
        >
            <FontAwesomeIcon icon={icons[iconIndex]} />
        </motion.button>
    );
};

export default AnimatedIcon;