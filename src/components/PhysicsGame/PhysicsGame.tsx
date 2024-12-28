type ExtendedMouse = Matter.Mouse & {
    body?: Matter.Body
    constraint?: Matter.Constraint
}

;('use client')

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Matter from 'matter-js'
import { motion } from 'framer-motion'

export default function PhysicsGame() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const engineRef = useRef<Matter.Engine | null>(null)
    const [mouse, setMouse] = useState<ExtendedMouse | null>(null)
    const [isMousePressed, setIsMousePressed] = useState(false)
    const [mouseConstraint, setMouseConstraint] =
        useState<Matter.MouseConstraint | null>(null)
    const [constraintApplied, setConstraintApplied] = useState(false)

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
        engineRef.current = engine
        engine.gravity.y = 0
        //   engine.gravity.x = 1
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
        let ball = Bodies.circle(width * (4 / 8), height * (4 / 5), 30, {
            render: { fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})` },
        })
        let sling = Constraint.create({
            pointA: { x: width * (4 / 8), y: height * (4 / 5) },
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

        // Create mouse and mouse constraint
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

        // Ensure the mouse is properly scaled and offset
        mouse.pixelRatio = window.devicePixelRatio || 1
        mouse.offset = { x: 0, y: 0 }

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
            const dy = ball.position.y - height * (4 / 5)
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Check if the ball has passed through the center of the slingshot
            if (firing && !passedThroughCenter && distance < 35) {
                passedThroughCenter = true
                sling.bodyB = null
                sling.render.visible = false
            }

            // Check if the ball is far enough away to spawn a new one
            if (firing && passedThroughCenter && distance > 50) {
                // Select a new random accent color for each new ball
                randomAccentColor =
                    accentColors[
                        Math.floor(Math.random() * accentColors.length)
                    ]
                ;[accentR, accentG, accentB] = randomAccentColor

                ball = Bodies.circle(width * (4 / 8), height * (4 / 5), 30, {
                    render: {
                        fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})`,
                    },
                })
                World.add(engine.world, ball)
                sling.bodyB = ball
                sling.render.visible = true
                firing = false

                // Clear the timeout if the ball has passed through the center
                if (timeoutId) clearTimeout(timeoutId)
            }
        })

        // Shape parameters, '8' for octagon
        const stack = Composites.stack(
            width * (6 / 8) - 49.5,
            height * (2 / 3) - 350,
            5,
            5,
            4,
            4,
            function (x: any, y: any) {
                randomAccentColor =
                    accentColors[
                        Math.floor(Math.random() * accentColors.length)
                    ]
                ;[accentR, accentG, accentB] = randomAccentColor

                return Bodies.polygon(x, y, 8, 30, {
                    render: {
                        fillStyle: `rgb(${accentR}, ${accentG}, ${accentB})`,
                    },
                })
            }
        )

        const MatterBodies: any = [stack, ball, sling, mouseConstraint]
        setConstraintApplied(true)
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

    const releaseObjects = useCallback(() => {
        if (mouseConstraint?.body && engineRef.current && constraintApplied) {
            Matter.Composite.remove(
                engineRef.current.world,
                mouseConstraint.constraint
            )
            setConstraintApplied(false)
        }
    }, [mouseConstraint, constraintApplied])

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

    useEffect(() => {
        if (!mouse || !sceneRef.current || !engineRef.current) return

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

        const handleMouseDown = () => setIsMousePressed(true)
        const handleMouseUp = () => setIsMousePressed(false)

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
            sceneRef.current?.removeEventListener(
                'mouseenter',
                handleMouseEnter
            )
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
