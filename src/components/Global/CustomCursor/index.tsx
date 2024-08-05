"use client";

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants: Variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            transition: {
                type: "smooth",
                duration: 0,
            }
        },
        text: {
            height: 50,
            width: 50,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "white",
            mixBlendMode: "difference",
            transition: {
                type: "smooth",
                duration: 0,
            }
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return (
        <motion.div
            className={`w-6 h-6 bg-black rounded-full top-0 left-0 pointer-events-none fixed`}
            variants={variants}
            animate={cursorVariant}
        />
    );
}