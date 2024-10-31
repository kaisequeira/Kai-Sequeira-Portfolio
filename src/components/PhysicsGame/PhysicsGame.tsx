'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
    Engine,
    Render,
    World,
    Bodies,
    Mouse,
    MouseConstraint,
    Composite,
} from 'matter-js'
import Matter from 'matter-js'
import { useGameContext } from './GameContext'
import { motion } from 'framer-motion'

const colour = [
    [66, 133, 244],
    [122, 60, 208],
    [251, 188, 5],
    [234, 67, 53],
    [52, 168, 83],
]

export default function PhysicsGame({
    width = 800,
    height = 600,
}: {
    width?: number
    height?: number
}) {
    const sceneRef = useRef<HTMLDivElement>(null)
    const engineRef = useRef<Matter.Engine | null>(null)
    const [dimensions, setDimensions] = useState({ width, height })
    const { setGameLoaded } = useGameContext()

    useEffect(() => {
        if (!sceneRef.current) return

        // Create engine
        const engine = Engine.create({ gravity: { x: 0, y: 1 } })
        engineRef.current = engine

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: dimensions.width,
                height: dimensions.height,
                wireframes: false,
                background: 'transparent',
            },
        })

        render.canvas.width = dimensions.width
        render.canvas.height = dimensions.height

        // Create walls
        const wallOptions = {
            isStatic: true,
            render: {
                fillStyle: 'rgba(0,0,0,0)',
                strokeStyle: 'rgba(0,0,0,0)',
                lineWidth: 0,
            },
        }
        const ground = Bodies.rectangle(
            dimensions.width / 2,
            dimensions.height,
            dimensions.width,
            20,
            wallOptions
        )
        const leftWall = Bodies.rectangle(
            0,
            dimensions.height / 2,
            20,
            dimensions.height,
            wallOptions
        )
        const rightWall = Bodies.rectangle(
            dimensions.width,
            dimensions.height / 2,
            20,
            dimensions.height,
            wallOptions
        )
        const ceiling = Bodies.rectangle(
            dimensions.width / 2,
            0,
            dimensions.width,
            20,
            wallOptions
        )

        Composite.add(engine.world, [ground, leftWall, rightWall, ceiling])

        // Add mouse control
        const mouse = Mouse.create(render.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        })

        Composite.add(engine.world, mouseConstraint)

        // Run the engine
        Engine.run(engine)
        Render.run(render)

        const runner = Matter.Runner.create()
        Matter.Runner.run(runner, engine)

        // Cleanup function
        return () => {
            Matter.Runner.stop(runner)
            Render.stop(render)
            World.clear(engine.world, false)
            Engine.clear(engine)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, [dimensions])

    useEffect(() => {
        const handleResize = () => {
            if (sceneRef.current) {
                setDimensions({
                    width: sceneRef.current.clientWidth,
                    height: sceneRef.current.clientHeight,
                })
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!engineRef.current) return

        const rect = sceneRef.current?.getBoundingClientRect()
        if (!rect) return

        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const randColour = colour[Math.floor(Math.random() * colour.length)]

        const ball = Bodies.circle(x, y, 20 + Math.random() * 10, {
            restitution: 0.9,
            render: {
                fillStyle: `rgb(${randColour[0]}, ${randColour[1]}, ${randColour[2]})`,
            },
        })

        Composite.add(engineRef.current.world, ball)
    }

    return (
        <motion.div
            ref={sceneRef}
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden w-full h-full"
        >
            <button
                onClick={() => setGameLoaded(false)}
                className="absolute top-8 left-8 bg-secondary px-4 py-3 rounded-3xl text-content font-semibold"
            >
                BACK
            </button>
            <p className="absolute top-8 left-1/2 text-xl">
                Click anywhere to add a ball
            </p>
        </motion.div>
    )
}
