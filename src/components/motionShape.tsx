"use client";

import { motion } from "framer-motion";

type MotionShapeProps = {
    className: string;
    reverse?: boolean;
};

export default function MotionShape({ className, reverse = false }: MotionShapeProps) {
    const randomDuration = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    const radius = 100; // Radius of the circular path

    return (
        <motion.div
            className={className}
            animate={{
                rotate: reverse ? [0, -360] : [0, 360],
                x: reverse ? [0, -radius, 0, radius, 0] : [0, radius, 0, -radius, 0],
                y: reverse ? [0, radius, 0, -radius, 0] : [0, -radius, 0, radius, 0]
            }}
            transition={{
                repeat: Infinity,
                duration: randomDuration,
                ease: "linear"
            }}
        />
    );
};