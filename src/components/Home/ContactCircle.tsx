import React, { ReactNode } from 'react';

interface ContactCircleProps {
    icon: ReactNode;
    color: string;
}

const ContactCircle: React.FC<ContactCircleProps> = ({ icon, color }) => {
    return (
        <button className={"rounded-full shadow-custom lg:size-24 sm:size-20 size-16 flex items-center justify-center"}
                style={{ backgroundColor: color }}>
            <span className={`flex items-center justify-center text-white`}>
                {icon}
            </span>
        </button>
    );
};

export default ContactCircle;