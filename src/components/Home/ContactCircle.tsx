"use client";

import React, { act, MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faEnvelope, faAddressCard, faSquareArrowUpRight, faPaste } from '@fortawesome/free-solid-svg-icons';

type ContactType = "Github" | "LinkedIn" | "Resume" | "Email";

interface ContactCircleProps {
    type: ContactType;
}

const ContactCircle: React.FC<ContactCircleProps> = ({ type }) => {
    const [hovered, setHovered] = useState(false);
    const EMAIL = 'kai.sequeira2003@gmail.com';
    let icon, color, onClick, actionIcon;

    switch (type) {
        case "Github":
            icon = <FontAwesomeIcon className='size-1/2 text-offwhite' icon={faGithub} />;
            actionIcon = <FontAwesomeIcon className='size-6 text-offwhite' icon={faSquareArrowUpRight} />;
            color = 'var(--gradient-acc2)';
            onClick = () => window.open('https://github.com/kaisequeira', '_blank');
            break;
        case "LinkedIn":
            icon = <FontAwesomeIcon className='size-5/12 text-offwhite' icon={faLinkedinIn} />;
            actionIcon = <FontAwesomeIcon className='size-6 text-offwhite' icon={faSquareArrowUpRight} />;
            color = 'var(--gradient-acc1)';
            onClick = () => window.open('https://www.linkedin.com/in/kai-sequeira-3b49602ba/', '_blank');
            break;
        case "Resume":
            icon = <FontAwesomeIcon className='size-5/12 text-offwhite' icon={faAddressCard} />;
            actionIcon = <FontAwesomeIcon className='size-6 text-offwhite' icon={faFileArrowDown} />;
            color = 'var(--gradient-acc3)';
            onClick = () => {
                const link = document.createElement('a');
                link.href = '/KaiSequeiraResume.pdf';
                link.download = 'KaiSequeiraResume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            break;
        case "Email":
            icon = <FontAwesomeIcon className='size-5/12 text-offwhite' icon={faEnvelope} />;
            actionIcon = <FontAwesomeIcon className='size-6 text-offwhite' icon={faPaste} />;
            color = 'var(--gradient-acc4)';
            onClick = (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigator.clipboard.writeText(EMAIL);
            };
            break;
        default:
            throw new Error("Invalid contact type");
    }

    return (
        <div className="relative flex flex-col items-center">
            <motion.button
                className={"md:rounded-3xl rounded-2xl lg:size-24 sm:size-20 size-16 flex items-center justify-center"}
                style={{ backgroundImage: color }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileHover={{ y: -5 }}
                onClick={onClick}
            >
                <span className={`flex items-center justify-center text-white`}>
                    {icon}
                </span>
            </motion.button>
            <motion.div
                style={{ backgroundImage: color }}
                className={"absolute top-full mt-6 rounded-3xl h-11 w-36 flex flex-row justify-center items-center gap-x-2"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ type: "spring", duration: 0.2 }}
            >
                <p className='text-offwhite font-semibold text-center'>
                    {type.toString()}
                </p>
                {actionIcon}
            </motion.div>
        </div>
    );
};

export default ContactCircle;