"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Label from '../Global/Label';

type PlayButtonProps = {
    className?: string;
};

export default function Navigation({ className }: PlayButtonProps) {
    const [hovered, setHovered] = React.useState(false);

    return (
    <div className='absolute flex flex-row top-0 md:right-0 sm:m-8 m-6 origin-center gap-4 justify-center md:justify-end'>
            <Label title="Play" note="See my tech stack" children={<FontAwesomeIcon className='text-content font-semibold' icon={faPlay} />} />
            <Label title="About me" children={<FontAwesomeIcon className='text-content font-semibold' icon={faCircleUser} />} />  
        </div>
    );
};