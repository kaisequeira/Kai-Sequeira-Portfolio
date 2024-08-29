"use client";

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

type NavLinkProps = {
    href: string;
    icon: IconProp
};

const Navbar: React.FC = () => {
    let segment = useSelectedLayoutSegment();
    
    const isActive = (segmentName: string) => {
        return segment ? 'text-content' : 'text-subtitle';
    };

    return (
        <div className="flex flex-row gap-3 absolute top-0 right-0 z-10 p-6">
            <NavLink href="/" icon={faHome} />
            <NavLink href="/about" icon={faUser} />
        </div>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon }) => {
    const isActive = `/${useSelectedLayoutSegment() ?? ""}` === href;

    return (
        <Link href={href}>
            <FontAwesomeIcon className={`${isActive ? "text-content " : "text-subtitle "} md:text-3xl text-xl m-3`} icon={icon} />
        </Link>
    );
};

export default Navbar;