"use client";

import { useStickyCursor } from '@/components/StickyItems/StickyCursorContext';
import { motion, transform, useMotionValue, useSpring, animate } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function CustomCursor() {
    const { stickyButtons } = useStickyCursor();
    const [isHovered, setIsHovered] = useState(false);

    const CURSOR_SIZE = isHovered ? 70 : 20;
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouseMovement = { stiffness: 300, damping: 20, mass: 0.5 };
    // const mouseMovement = { stiffness: 1000, damping: 30, mass: 0.5 };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const scaleX = useMotionValue(1);
    const scaleY = useMotionValue(1);

    const scale = useMemo(() => ({
        x: scaleX,
        y: scaleY
    }), [scaleX, scaleY]);

    const mouse = useMemo(() => ({
        x: mouseX,
        y: mouseY
    }), [mouseX, mouseY]);
    
    const smoothMouseX = useSpring(mouse.x, mouseMovement);
    const smoothMouseY = useSpring(mouse.y, mouseMovement);

    const smoothMouse = {
        x: smoothMouseX,
        y: smoothMouseY
    };

    const rotate = useCallback((distance: { x: number, y: number }) => {
        const angle = Math.atan2(distance.y, distance.x);
        if (cursorRef.current) {
            animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
        }
    }, [cursorRef]);

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
        { distance: Infinity, button: null as React.RefObject<HTMLDivElement> | null }
    );

    const manageMouseMove = useCallback((e: MouseEvent) => {
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
    }, [isHovered, rotate, scale, mouse, CURSOR_SIZE, closestButton.button]);

    useEffect(() => {
        closestButton.button?.current?.addEventListener("mouseover", manageMouseOver);
        closestButton.button?.current?.addEventListener("mouseleave", manageMouseOut);
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            closestButton.button?.current?.removeEventListener("mouseover", manageMouseOver);
            closestButton.button?.current?.removeEventListener("mouseleave", manageMouseOut);
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [manageMouseMove, closestButton.button]);

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