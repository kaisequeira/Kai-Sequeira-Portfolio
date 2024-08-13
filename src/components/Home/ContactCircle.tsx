"use client";

import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';

type ContactType = "Github" | "Linkedin" | "Resume" | "Email";

interface ContactCircleProps {
    type: ContactType;
}

const ContactCircle: React.FC<ContactCircleProps> = ({ type }) => {
    const EMAIL = 'kai.sequeira2003@gmail.com';
    let icon, color, onClick;

    switch (type) {
        case "Github":
            icon = <FontAwesomeIcon className='size-1/2' icon={faGithub} />;
            color = 'rgb(var(--color-acc1))';
            onClick = () => window.open('https://github.com/kaisequeira', '_blank');
            break;
        case "Linkedin":
            icon = <FontAwesomeIcon className='size-5/12' icon={faLinkedinIn} />;
            color = 'rgb(var(--color-acc2))';
            onClick = () => window.open('https://www.linkedin.com/in/kai-sequeira-3b49602ba/', '_blank');
            break;
        case "Resume":
            icon = <FontAwesomeIcon className='size-5/12' icon={faAddressCard} />;
            color = 'rgb(var(--color-acc3))';
            onClick = () => window.location.href = '/KaiSequeiraResume.pdf';
            break;
        case "Email":
            icon = <FontAwesomeIcon className='size-5/12' icon={faEnvelope} />;
            color = 'rgb(var(--color-acc4))';
            onClick = (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigator.clipboard.writeText(EMAIL);
            };
            break;
        default:
            throw new Error("Invalid contact type");
    }

    return (
        <motion.button
            className={"rounded-3xl lg:size-24 sm:size-20 size-16 flex items-center justify-center"}
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ y: 15 }}
            onClick={onClick}
        >
            <span className={`flex items-center justify-center text-white`}>
                {icon}
            </span>
        </motion.button>
    );
};

export default ContactCircle;