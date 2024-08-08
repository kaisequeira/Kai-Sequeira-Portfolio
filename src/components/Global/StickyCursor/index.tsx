"use client";

import { useStickyCursor } from '@/components/StickyItems/StickyCursorContext';
import { motion, transform, useMotionValue, useSpring, Variants, animate } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const { stickyButtons } = useStickyCursor();
    const [isHovered, setIsHovered] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    
    const CURSOR_SIZE = isHovered ? 70 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    // const mouseMovement = { stiffness: 1500, damping: 50, mass: 0.5 };
    const mouseMovement = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, mouseMovement),
        y: useSpring(mouse.y, mouseMovement)
    };

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const rotate = (distance: {x: number, y: number}) => {
        const angle = Math.atan2(distance.y, distance.x);
        if (cursorRef.current)
            animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
    
        const { left = 0, top = 0, height = 0, width = 0 } = closestButton.button?.current?.getBoundingClientRect() || {};
        const center = { x: left + width / 2, y: top + height / 2 }

        if (isHovered) {
            const distance = {x: clientX - center.x, y: clientY - center.y};
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));

            rotate(distance);

            scale.x.set(transform(absDistance, [0, height/2], [1, 1.3]));
            scale.y.set(transform(absDistance, [0, height/2], [1, 0.8]));

            mouse.x.set((center.x - CURSOR_SIZE / 2) + (distance.x * 0.1));
            mouse.y.set((center.y - CURSOR_SIZE / 2) + (distance.y * 0.1));

        } else {
            mouse.x.set(clientX - CURSOR_SIZE / 2);
            mouse.y.set(clientY - CURSOR_SIZE / 2);
        }
    }

    const manageMouseOver = () => {
        setIsHovered(true);
    }

    const manageMouseOut = () => {
        setIsHovered(false);
        if (cursorRef.current)
            animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, {duration: 0.1, type: "spring" })
    }

    const closestButton = stickyButtons.reduce(
        (acc, button) => {
            const rect = button.current?.getBoundingClientRect();
            if (!rect) return acc;
            const distance = Math.hypot(mouse.x.get() - rect.x, mouse.y.get() - rect.y);
            return distance < acc.distance ? { distance, button } : acc;
        },
        { distance: Infinity, button: null as React.RefObject<HTMLButtonElement> | null }
    );

    useEffect(() => {
        closestButton.button?.current?.addEventListener("mouseover", manageMouseOver);
        closestButton.button?.current?.addEventListener("mouseleave", manageMouseOut);
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            closestButton.button?.current?.removeEventListener("mouseover", manageMouseOver);
            closestButton.button?.current?.removeEventListener("mouseleave", manageMouseOut);
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [manageMouseMove]);

    const template = ({rotate, scaleX, scaleY}: {rotate: number, scaleX: number, scaleY: number}) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})` 
    }

    return (
        <motion.div
            className={`bg-white mix-blend-difference z-10 rounded-full top-0 left-0 pointer-events-none fixed`}
            ref={cursorRef}
            transformTemplate={template}
            animate={{
                width: CURSOR_SIZE,
                height: CURSOR_SIZE
            }}
            style={{
                left: smoothMouse.x, 
                top: smoothMouse.y, 
                scaleX: scale.x,
                scaleY: scale.y, 
            }} 
        />
    );
}