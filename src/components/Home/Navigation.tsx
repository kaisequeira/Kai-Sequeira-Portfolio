"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Label from '../_Global/Label';
import Link from 'next/link';
import useMediaQuery from '../_Global/UseMediaQuery';

type PlayButtonProps = {
    className?: string;
};

export default function Navigation({ className }: PlayButtonProps) {
    const [hovered, setHovered] = React.useState(false);
    const isMdOrLarger = useMediaQuery('(min-width: 768px)');

    return (
        <div className='absolute flex flex-row top-0 md:right-0 sm:m-8 m-6 origin-center gap-4 justify-center md:justify-end'>
            <Link href='/about'>
                <Label title={isMdOrLarger ? "About me" : undefined} children={<FontAwesomeIcon className='text-content font-semibold size-8' icon={faCircleUser} />} />  
            </Link>
        </div>
    );
};