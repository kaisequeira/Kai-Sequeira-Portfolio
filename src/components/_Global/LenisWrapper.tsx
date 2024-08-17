"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
    lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const LenisWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const lenisInstance = new Lenis();
            setLenis(lenisInstance);

            const raf = (time: number) => {
                lenisInstance.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);
        }
    }, []);

    return (
        <LenisContext.Provider value={{ lenis }}>
            {children}
        </LenisContext.Provider>
    );
};

export const useLenis = () => {
    return useContext(LenisContext);
};

export default LenisWrapper;