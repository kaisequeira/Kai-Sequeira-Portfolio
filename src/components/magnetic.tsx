"use client";

import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const maxDistance = 15;

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        const normalizedX = (middleX / width) * 100;
        const normalizedY = (middleY / height) * 100;

        let newX = normalizedX * 0.1;
        let newY = normalizedY * 0.1;

        const distance = Math.sqrt(newX * newX + newY * newY);

        if (distance > maxDistance) {
            const ratio = maxDistance / distance;
            newX *= ratio;
            newY *= ratio;
        }

        setPosition({ x: newX, y: newY });
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 350, damping: 10, mass: 0.75 }}
        >
            {children}
        </motion.div>
    );
}