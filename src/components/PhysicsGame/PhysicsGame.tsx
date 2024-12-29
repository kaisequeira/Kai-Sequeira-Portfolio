'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Matter from 'matter-js'
import { motion } from 'framer-motion'

type ExtendedMouse = Matter.Mouse & {
    body?: Matter.Body
    constraint?: Matter.Constraint
}

export default function PhysicsGame() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const engineRef = useRef<Matter.Engine | null>(null)
    const [mouse, setMouse] = useState<ExtendedMouse | null>(null)
    const [isMousePressed, setIsMousePressed] = useState(false)
    const [constraintApplied, setConstraintApplied] = useState(false)
    const [mouseConstraint, setMouseConstraint] = useState<Matter.MouseConstraint | null>(null)

    useEffect(() => {
        if (!sceneRef.current) return

        const getCSSVariableValue = (variableName: any) => {
            return getComputedStyle(document.documentElement)
                .getPropertyValue(variableName)
                .trim()
        }
    
        const [contentR, contentG, contentB] = getCSSVariableValue('--color-content')
            .split(',')
            .map(Number)
    
        const accentColors: number[][] = []
        for (let i = 1; i <= 5; i++) {
            const accentColor = getCSSVariableValue(`--color-acc${i}`)
            const [r, g, b] = accentColor.split(',').map(Number)
            accentColors.push([r, g, b])
        }
    
        // Get the width and height of the scene
        const width = sceneRef.current.offsetWidth
        const height = sceneRef.current.offsetHeight
    
        // Matter.js setup
        const Engine = Matter.Engine
        const Render = Matter.Render
        const Runner = Matter.Runner
        const World = Matter.World
        const Bodies = Matter.Bodies
        const Mouse = Matter.Mouse
        const MouseConstraint = Matter.MouseConstraint
        const Constraint = Matter.Constraint
        const Events = Matter.Events
        const runner = Runner.create()
        const engine = Engine.create()
        
        // Engine setup
        engineRef.current = engine
        engine.gravity.y = 0
    
        /**
         * Create the renderer for the game
         */
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
    
        /**
         * Generate random shapes on the left or right side of the screen
         * 
         * @param side 
         * @returns 
         */
        const generateRandomShapes = (side: 'left' | 'right') => {
            const shapeCount = Math.floor(height / 50);                 // Density
            const shapes = [];
        
            for (let i = 0; i < shapeCount; i++) {
                const x = side === 'left'
                    ? Math.random() * (width / 8)
                    : width - Math.random() * (width / 8);
                const y = Math.random() * height * 2 - height / 2;      // Random y position
                const sides = Math.floor(Math.random() * 4) + 3;        // Random edge count
                const size = Math.random() * 50 + 30;                   // Random size
        
                const randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
                const [accentR, accentG, accentB] = randomAccentColor;
        
                const shape = Bodies.polygon(x, y, sides, size, {
                    render: {
                        fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})`,
                    },
                });
        
                shapes.push(shape);
            }
        
            return shapes;
        };
    
        /**
         * Generate the slingshot, also creates initial ammo
         * 
         * @param accentR 
         * @param accentG 
         * @param accentB 
         * @returns 
         */
        const generateSling = () => {
            const randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
            const [accentR, accentG, accentB] = randomAccentColor;
            const ball = Bodies.circle(width * (1/ 2), innerHeight * (4 / 5), 30, {
                render: { fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})` },
            })
            const sling = Constraint.create({
                pointA: { x: width * (1 / 2), y: innerHeight * (4 / 5) },
                bodyB: ball,
                stiffness: 0.1,
                damping: 0.1,
                render: {
                    type: 'line',
                    visible: true,
                    lineWidth: 5,
                    strokeStyle: `rgb(${contentR}, ${contentG}, ${contentB})`,
                },
            })
            return { ball, sling }
        }
    
        /**
         * Setup the mouse and mouse constraint
         * @returns 
         */
        const setupMouse = () => {
            const mouse = Mouse.create(render.canvas) as ExtendedMouse
            setMouse(mouse)
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: { visible: false },
                },
            }) as Matter.MouseConstraint
            setMouseConstraint(mouseConstraint)
    
            mouse.pixelRatio = window.devicePixelRatio || 1
            mouse.offset = { x: 0, y: 0 }
    
            return mouseConstraint
        }

        /**
         * Handle the events for the slingshot, including the firing and spawning of new balls
         * 
         * @param mouseConstraint 
         * @param ball 
         * @param sling 
         */
        const handleEvents = (mouseConstraint: Matter.MouseConstraint, ball: Matter.Body, sling: Matter.Constraint) => {
            let firing = false
            let passedThroughCenter = false
            let timeoutId: NodeJS.Timeout | null = null
    
            Events.on(mouseConstraint, 'enddrag', function (e: any) {
                if (e.body === ball) {
                    firing = true
                    passedThroughCenter = false
    
                    if (timeoutId) clearTimeout(timeoutId)
                    timeoutId = setTimeout(() => {
                        if (!passedThroughCenter) {
                            console.log(
                                'Fallback: Ball did not pass through the center within 0.3 seconds'
                            )
                            passedThroughCenter = true
                        }
                    }, 300)
                }
            })
    
            Events.on(engine, 'afterUpdate', function () {
                const dx = ball.position.x - width * (4 / 8)
                const dy = ball.position.y - innerHeight * (4 / 5)
                const distance = Math.sqrt(dx * dx + dy * dy)
    
                // Check ammo has passed through the center
                if (firing && !passedThroughCenter && distance < 35) {
                    passedThroughCenter = true
                    sling.bodyB = null
                    sling.render.visible = false
                }
    
                // Check ammo is fired far enough before spawning new ammo
                if (firing && passedThroughCenter && distance > 50) {
                    const randomAccentColor =
                        accentColors[
                            Math.floor(Math.random() * accentColors.length)
                        ]
                    const [accentR, accentG, accentB] = randomAccentColor
    
                    ball = Bodies.circle(width * (4 / 8), innerHeight * (4 / 5), 30, {
                        render: {
                            fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})`,
                        },
                    })
                    World.add(engine.world, ball)
                    sling.bodyB = ball
                    sling.render.visible = true
                    firing = false
    
                    if (timeoutId) clearTimeout(timeoutId)
                }
            })
        }
    
        // Generate the shapes, slingshot and mouse constraint
        const leftShapes = generateRandomShapes('left');
        const rightShapes = generateRandomShapes('right');
        const { ball, sling } = generateSling()
        const mouseConstraint = setupMouse()
        handleEvents(mouseConstraint, ball, sling)

        // Add all the bodies to the world
        setConstraintApplied(true)
        const MatterBodies: any = [mouseConstraint, ...leftShapes, ...rightShapes]
        
        if (innerHeight > 780)
            MatterBodies.push(ball, sling);
        
        World.add(engine.world, MatterBodies)
    
        // Run the engine, renderer and add mouse
        Runner.run(runner, engine)
        Render.run(render)
        if (mouse !== null)
            render.mouse = mouse
    
        // Cleanup function
        return () => {
            Render.stop(render)
            Runner.stop(runner)
            World.clear(engine.world, false)
            Engine.clear(engine)
            if (render.canvas) render.canvas.remove()
            if (render.context) (render.context as any) = null
            render.textures = {}
        }
    }, [])

    /**
     * Release the objects from the mouse constraint. Is called when the mouse loses focus of game scene
     */
    const releaseObjects = useCallback(() => {
        if (mouseConstraint?.body && engineRef.current && constraintApplied) {
            Matter.Composite.remove(
                engineRef.current.world,
                mouseConstraint.constraint
            )
            setConstraintApplied(false)
        }
    }, [mouseConstraint, constraintApplied])

    /**
     * Apply the constraint to the mouse. Is called when the mouse enters the game scene
    */
    const applyConstraint = useCallback(() => {
        if (mouseConstraint && engineRef.current && !constraintApplied) {
            mouseConstraint.constraint.bodyB = null
            mouseConstraint.mouse.button = -1
            Matter.Composite.add(
                engineRef.current.world,
                mouseConstraint.constraint
            )
            setConstraintApplied(true)
        }
    }, [mouseConstraint, constraintApplied])

    /**
     * Event listeners for mouse and touch interactions
     */
    useEffect(() => {
        if (!mouse || !sceneRef.current || !engineRef.current) return

        const updateMousePosition = (clientX: number, clientY: number) => {
            const bounds = sceneRef.current?.getBoundingClientRect()
            if (bounds) {
                mouse.position.x = clientX - bounds.left
                mouse.position.y = clientY - bounds.top
            }
        }
        
        const handleTouchMove = (event: TouchEvent) => {
            event.preventDefault()
            updateMousePosition(
                event.touches[0].clientX,
                event.touches[0].clientY
            )
        }

        const handleMouseMove = (event: MouseEvent) => {
            updateMousePosition(event.clientX, event.clientY)
        }

        const handleMouseDown = () => {
            setIsMousePressed(true)
        }
        
        const handleMouseUp = () => {
            setIsMousePressed(false)
        }

        const handleMouseOut = (event: MouseEvent) => {
            if (!sceneRef.current?.contains(event.relatedTarget as Node)) {
                setIsMousePressed(false)
                releaseObjects()
            }
        }

        const handleMouseEnter = () => {
            applyConstraint()
        }

        sceneRef.current.addEventListener('mousemove', handleMouseMove)
        sceneRef.current.addEventListener('touchmove', handleTouchMove)
        sceneRef.current.addEventListener('mousedown', handleMouseDown)
        sceneRef.current.addEventListener('mouseup', handleMouseUp)
        sceneRef.current.addEventListener('mouseout', handleMouseOut)
        sceneRef.current.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            sceneRef.current?.removeEventListener('mousemove', handleMouseMove)
            sceneRef.current?.removeEventListener('touchmove', handleTouchMove)
            sceneRef.current?.removeEventListener('mousedown', handleMouseDown)
            sceneRef.current?.removeEventListener('mouseup', handleMouseUp)
            sceneRef.current?.removeEventListener('mouseout', handleMouseOut)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            sceneRef.current?.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [mouse, engineRef, releaseObjects, applyConstraint])

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
                style={{ cursor: isMousePressed ? 'grabbing' : 'grab' }}
            />
        </motion.div>
    )
}
