"use client";

import React, { useEffect, ReactElement } from 'react';
import Lenis from 'lenis';

interface LenisWrapperProps {
    children: ReactElement;
}

const LenisWrapper: React.FC<LenisWrapperProps> = ({ children }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const lenis = new Lenis();

            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);
        }
    }, []);

    return React.cloneElement(children);
};

export default LenisWrapper;