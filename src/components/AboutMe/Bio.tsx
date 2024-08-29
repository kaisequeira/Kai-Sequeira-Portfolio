"use client";

import React from 'react';
import '@/app/globals.css';
import AnimatedIcon from './AnimatedIcon';

type BioProps = {
    className?: string;
};

const Bio: React.FC<BioProps> = ({ className }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setIsExpanded(!isExpanded);
        }
    };

  return (
    <div className={className}>
        <h2>
            About  <AnimatedIcon />
        </h2>
        <div className='flex flex-col gap-4' onClick={handleClick}>
            <div className={`space-y-8 ${isExpanded ? 'line-clamp-none' : 'line-clamp-6'} md:line-clamp-none`}>
                <p className='text-content font-normal'>
                    I am currently in my third year at UNSW, pursuing a double Bachelor's degree in Software Engineering (Honours) and Commerce, with a major in Finance.
                </p>
                <p className='text-content font-normal'>
                    As a Software Engineer with UNSW Redback Racing, my role encompasses full-stack development where I deploy microservices, develop cloud solutions
                    to help race engineers manage data and design frontend interfaces to abstract this logic.
                </p>
                <p className='text-content font-extralight'>
                    Beyond the keyboard,
                </p>
                <p className='font-normal text-content'>
                    My interests extend to photography, game design and anything that allows me to express my creativity. When I’m not studying at home, I’ll take any opportunity to pick up my camera, snap photos of friends and document my travels.
                </p>
            </div>
            <p className='text-left md:hidden visible'>
                {isExpanded ? 'See less...' : 'See more...'}
            </p>
        </div>
    </div>
  );
};

export default Bio;