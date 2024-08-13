import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace, faCamera, faMountainSun, faLaptopCode, faGamepad } from '@fortawesome/free-solid-svg-icons';

const icons = [faHandPeace, faCamera, faMountainSun, faLaptopCode, faGamepad];

const AnimatedIcon: React.FC = () => {
    const [iconIndex, setIconIndex] = useState(0);

    const handleClick = () => {
        setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    };

    return (
        <motion.div
            className='size-20 rounded-full pl-3'
            onTap={handleClick}
        >
            <FontAwesomeIcon className='size-18' icon={icons[iconIndex]} />
        </motion.div>
    );
};

export default AnimatedIcon;