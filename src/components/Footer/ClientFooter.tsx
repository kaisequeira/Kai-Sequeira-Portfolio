"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faDownload, faClipboard } from '@fortawesome/free-solid-svg-icons';

const ClientFooter: React.FC = () => {
    const EMAIL = 'kai.sequeira2003@gmail.com';

    function copyText(){
        navigator.clipboard.writeText(EMAIL);
    }

    return (
        <div className='flex flex-row lg:space-x-8 space-x-4 flex-wrap justify-center gap-y-2'>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center'
                href='https://github.com/kaisequeira'
                target='_blank'
                rel='noopener noreferrer'
            >
                <p className='font-extrabold text-bgr lg:text-2xl text-base'>Github</p>
                <FontAwesomeIcon className='text-bgr lg:size-6 size-4' icon={faArrowUpRightFromSquare} />
            </a>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center'
                href='https://www.linkedin.com/in/kai-sequeira-3b49602ba/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <p className='font-extrabold text-bgr lg:text-2xl text-base'>Linkedin</p>
                <FontAwesomeIcon className='text-bgr lg:size-6 size-4' icon={faArrowUpRightFromSquare} />
            </a>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center'
                href='/KaiSequeiraResume.pdf'
                download={'KaiSequeiraResume.pdf'}
            >
                <p className='font-extrabold text-bgr lg:text-2xl text-base'>Resume</p>
                <FontAwesomeIcon className='text-bgr lg:size-6 size-4' icon={faDownload} />
            </a>
            <a
                className='flex flex-row lg:gap-4 gap-2 hover:underline decoration-bgr items-center'
                href='#'
                onClick={(event) => {
                    event.preventDefault();
                    copyText();
                }}
            >
                <p className='font-extrabold text-bgr lg:text-2xl text-base'>Email</p>
                <FontAwesomeIcon className='text-bgr lg:size-6 size-4' icon={faClipboard} />
            </a>
        </div>
    );
};

export default ClientFooter;