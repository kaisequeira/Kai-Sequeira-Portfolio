'use client'

import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { useGameContext } from './GameContext'
import { motion } from 'framer-motion'

export default function PhysicsGame() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const { setGameLoaded } = useGameContext()
    const [mouse, setMouse] = useState<Matter.Mouse | null>(null)

    useEffect(() => {
        const getCSSVariableValue = (variableName: any) => {
            return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
        }

        const contentColor = getCSSVariableValue('--color-content');
        const [contentR, contentG, contentB] = contentColor.split(',').map(Number);

        const accentColors: number[][] = [];
        for (let i = 1; i <= 5; i++) {
            const accentColor = getCSSVariableValue(`--color-acc${i}`);
            const [r, g, b] = accentColor.split(',').map(Number);
            accentColors.push([r, g, b]);
        }

        if (!sceneRef.current) return

        const Engine = Matter.Engine
        const Render = Matter.Render
        const Runner = Matter.Runner
        const World = Matter.World
        const Bodies = Matter.Bodies
        const Mouse = Matter.Mouse
        const MouseConstraint = Matter.MouseConstraint
        const Constraint = Matter.Constraint
        const Composites = Matter.Composites
        const Events = Matter.Events

        const engine = Engine.create()
        const runner = Runner.create()

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 2400,
                height: 900,
                wireframes: false,
                background: 'transparent',
            },
        })

        // Ground parameters
        const ground = Bodies.rectangle(2000, 520, 600, 15, { 
            isStatic: true,
            render: { fillStyle: `rgb(${contentR}, ${contentG}, ${contentB})` }
        })

        // Select a random accent color for the initial ball
        let randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
        let [accentR, accentG, accentB] = randomAccentColor;

        // Slingshot position and size
        let ball = Bodies.circle(300, 600, 15, {
            render: { fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})` }
        });
        let sling = Constraint.create({
            pointA: { x: 300, y: 600 },
            bodyB: ball,
            stiffness: 0.05,
            render: { visible: true, lineWidth: 2, strokeStyle: `rgb(${contentR}, ${contentG}, ${contentB})` }
        })

        // Create mouse and mouse constraint
        const mouse = Mouse.create(render.canvas)
        setMouse(mouse)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        })

        // Ensure the mouse is properly scaled and offset
        mouse.pixelRatio = window.devicePixelRatio || 1
        mouse.offset = { x: 0, y: 0 }

        let firing = false
        Events.on(mouseConstraint, "enddrag", function (e: any) {
            if (e.body === ball) firing = true
        })

        Events.on(engine, "afterUpdate", function () {
            if (firing && Math.abs(ball.position.x - 300) < 20 && Math.abs(ball.position.y - 600) < 20) {
                // Select a new random accent color for each new ball
                randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
                [accentR, accentG, accentB] = randomAccentColor;
    
                ball = Bodies.circle(300, 600, 15, {
                    render: { fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})` }
                })
                World.add(engine.world, ball)
                sling.bodyB = ball
                firing = false
            }
        })

        // Shape parameters, '8' for octagon
        const stack = Composites.stack(1800, 1, 15, 15, 0, 0, function (x: any, y: any) {
            return Bodies.polygon(x, y, 8, 18, {
                render: { fillStyle: '#34A853' }
            })
        })

        World.add(engine.world, [stack, ground, ball, sling, mouseConstraint])
        
        // Run the engine and renderer
        Runner.run(runner, engine)
        Render.run(render)

        // Ensure the mouse is added to the render context
        render.mouse = mouse

        const updateColors = () => {
            const newContentColor = getCSSVariableValue('--color-content');
            const [newR, newG, newB] = newContentColor.split(',').map(Number);
            ground.render.fillStyle = `rgb(${newR}, ${newG}, ${newB})`;
        }

        window.addEventListener('resize', updateColors);

        // Cleanup function
        return () => {
            Render.stop(render)
            Runner.stop(runner)
            World.clear(engine.world, false)
            Engine.clear(engine)
            if (render.canvas) {
                render.canvas.remove()
            }
            if (render.context) {
                (render.context as any) = null
            }
            render.textures = {}
            window.removeEventListener('resize', updateColors);
        }
    }, [])

    useEffect(() => {
        if (!mouse || !sceneRef.current) return

        const updateMousePosition = (clientX: number, clientY: number) => {
            const bounds = sceneRef.current?.getBoundingClientRect()
            if (bounds) {
                mouse.position.x = clientX - bounds.left
                mouse.position.y = clientY - bounds.top
            }
        }

        const handleMouseMove = (event: MouseEvent) => {
            updateMousePosition(event.clientX, event.clientY)
        }

        const handleTouchMove = (event: TouchEvent) => {
            event.preventDefault()
            updateMousePosition(event.touches[0].clientX, event.touches[0].clientY)
        }

        sceneRef.current.addEventListener('mousemove', handleMouseMove)
        sceneRef.current.addEventListener('touchmove', handleTouchMove)

        return () => {
            sceneRef.current?.removeEventListener('mousemove', handleMouseMove)
            sceneRef.current?.removeEventListener('touchmove', handleTouchMove)
        }
    }, [mouse])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="relative w-full h-screen overflow-hidden"
        >
            <div ref={sceneRef} className="absolute inset-0 z-50" style={{ cursor: 'grab' }} />
            <button
                onClick={() => setGameLoaded(false)}
                className="absolute top-8 left-8 bg-secondary px-4 py-3 rounded-3xl text-content font-semibold"
            >
                BACK
            </button>
            <p className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xl text-center z-10">
                Shoot the octagons!
            </p>
        </motion.div>
    )
}