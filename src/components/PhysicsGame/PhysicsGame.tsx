'use client'

import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { motion } from 'framer-motion'

export default function PhysicsGame() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const [mouse, setMouse] = useState<Matter.Mouse | null>(null)

    useEffect(() => {
        const getCSSVariableValue = (variableName: any) => {
            return getComputedStyle(document.documentElement)
                .getPropertyValue(variableName)
                .trim()
        }

        const contentColor = getCSSVariableValue('--color-content')
        const [contentR, contentG, contentB] = contentColor
            .split(',')
            .map(Number)

        const accentColors: number[][] = []
        for (let i = 1; i <= 5; i++) {
            const accentColor = getCSSVariableValue(`--color-acc${i}`)
            const [r, g, b] = accentColor.split(',').map(Number)
            accentColors.push([r, g, b])
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

        const width = sceneRef.current.offsetWidth
        const height = window.innerHeight

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.offsetWidth,
                height: sceneRef.current.offsetHeight,
                wireframes: false,
                background: 'transparent',
            },
        })

        // Ground parameters
        const ground = Bodies.rectangle(
            width * (7 / 8),
            height * (2 / 3),
            99,
            30,
            {
                isStatic: true,
                render: {
                    fillStyle: `rgb(${contentR}, ${contentG}, ${contentB})`,
                },
            }
        )

        // Select a random accent color for the initial ball
        let randomAccentColor =
            accentColors[Math.floor(Math.random() * accentColors.length)]
        let [accentR, accentG, accentB] = randomAccentColor

        // Slingshot position and size
        let ball = Bodies.circle(width * (1 / 8), height * (2 / 3), 30, {
            render: { fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})` },
        })
        let sling = Constraint.create({
            pointA: { x: width * (1 / 8), y: height * (2 / 3) },
            bodyB: ball,
            stiffness: 0.05,
            render: {
                type: 'line',
                visible: true,
                lineWidth: 5,
                strokeStyle: `rgb(${contentR}, ${contentG}, ${contentB})`,
            },
        })

        // Create mouse and mouse constraint
        const mouse = Mouse.create(render.canvas)
        setMouse(mouse)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        })

        // Ensure the mouse is properly scaled and offset
        mouse.pixelRatio = window.devicePixelRatio || 1
        mouse.offset = { x: 0, y: 0 }

        let firing = false
        Events.on(mouseConstraint, 'enddrag', function (e: any) {
            if (e.body === ball) firing = true
        })

        Events.on(engine, 'afterUpdate', function () {
            if (
                firing &&
                Math.abs(ball.position.x - width * (1 / 8)) < 35 &&
                Math.abs(ball.position.y - height * (2 / 3)) < 35
            ) {
                // Select a new random accent color for each new ball
                randomAccentColor =
                    accentColors[
                        Math.floor(Math.random() * accentColors.length)
                    ]
                ;[accentR, accentG, accentB] = randomAccentColor

                ball = Bodies.circle(width * (1 / 8), height * (2 / 3), 30, {
                    render: {
                        fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})`,
                    },
                })
                World.add(engine.world, ball)
                sling.bodyB = ball
                firing = false
            }
        })

        // Shape parameters, '8' for octagon
        const stack = Composites.stack(
            width * (7 / 8) - 49.5,
            height * (2 / 3) - 350,
            3,
            10,
            0,
            0,
            function (x: any, y: any) {
                randomAccentColor =
                    accentColors[
                        Math.floor(Math.random() * accentColors.length)
                    ]
                ;[accentR, accentG, accentB] = randomAccentColor

                return Bodies.polygon(x, y, 8, 18, {
                    render: {
                        fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})`,
                    },
                })
            }
        )

        const MatterBodies: any = [stack, ground, ball, sling, mouseConstraint]
        World.add(engine.world, MatterBodies)

        // Run the engine and renderer
        Runner.run(runner, engine)
        Render.run(render)

        const updateColors = () => {
            const newContentColor = getCSSVariableValue('--color-content')
            const [newR, newG, newB] = newContentColor.split(',').map(Number)
            ground.render.fillStyle = `rgb(${newR}, ${newG}, ${newB})`
        }

        // Add event listeners
        window.addEventListener('resize', updateColors)

        // Ensure the mouse is added to the render context
        render.mouse = mouse

        // Cleanup function
        return () => {
            window.removeEventListener('resize', updateColors)
            Render.stop(render)
            Runner.stop(runner)
            World.clear(engine.world, false)
            Engine.clear(engine)
            if (render.canvas) render.canvas.remove()
            if (render.context) (render.context as any) = null
            render.textures = {}
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
            updateMousePosition(
                event.touches[0].clientX,
                event.touches[0].clientY
            )
        }

        sceneRef.current.addEventListener('mousemove', handleMouseMove)
        sceneRef.current.addEventListener('touchmove', handleTouchMove)

        return () => {
            sceneRef.current?.removeEventListener('mousemove', handleMouseMove)
            //eslint-disable-next-line react-hooks/exhaustive-deps
            sceneRef.current?.removeEventListener('touchmove', handleTouchMove)
        }
    }, [mouse])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute overflow-hidden w-full h-full"
        >
            <div
                ref={sceneRef}
                className="inset-0 z-10 w-full h-full"
                style={{ cursor: 'default' }}
            />
        </motion.div>
    )
}
