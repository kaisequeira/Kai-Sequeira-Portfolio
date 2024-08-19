"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ClientFooter: React.FC = () => {
    const EMAIL = 'kai.sequeira2003@gmail.com';

    return (
        <div className='flex flex-col space-y-4 items-end'>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr w-fit'
                href='https://github.com/kaisequeira'
                target='_blank'
                rel='noopener noreferrer'
            >
                <p className='font-extrabold text-bgr justify-end'>Github</p>
                <FontAwesomeIcon className='text-bgr lg:size-5 size-4' icon={faGithub} />
            </a>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr w-fit'
                href='https://www.linkedin.com/in/kai-sequeira-3b49602ba/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <p className='font-extrabold text-bgr'>LinkedIn</p>
                <FontAwesomeIcon className='text-bgr lg:size-5 size-4' icon={faLinkedin} />
            </a>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr w-fit'
                href='/KaiSequeiraResume.pdf'
                target='_blank'
            >
                <p className='font-extrabold text-bgr'>Resume</p>
                <FontAwesomeIcon className='text-bgr lg:size-5 size-4' icon={faAddressCard} />
            </a>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr w-fit'
                href='#'
                onClick={(event) => {
                    window.location.href = `mailto:${EMAIL}`;
                }}
            >
                <p className='font-extrabold text-bgr'>Email</p>
                <FontAwesomeIcon className='text-bgr lg:size-5 size-4' icon={faEnvelope} />
            </a>
        </div>
    );
};

export default ClientFooter;