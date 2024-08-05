import React, { ReactNode } from 'react';

interface ContactCircleProps {
    icon: ReactNode;
    color: string;
    size: string; // Add size prop
}

const ContactCircle: React.FC<ContactCircleProps> = ({ icon, color, size }) => {
    return (
        <button className={`rounded-full shadow-custom w-24 h-24 flex items-center justify-center`} style={{ backgroundColor: color }}>
            <span className={`flex items-center justify-center`} style={{ width: size, height: size }}>{icon}</span>
        </button>
    );
};

export default ContactCircle;