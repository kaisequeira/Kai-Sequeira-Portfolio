'use client'

import Home from '@/components/Home'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'
import PhysicsGame from '@/components/PhysicsGame/PhysicsGame'
import { useGameContext } from '@/components/PhysicsGame/GameContext'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Content() {
    const { gameLoaded, setGameLoaded } = useGameContext()

    useEffect(() => {
        const handleResize = () => {
            setGameLoaded(false)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [setGameLoaded])

    return (
        <div className="flex flex-col relative">
            <Home />
            <AboutMe />
            <Projects />
            <AnimatePresence>
                {gameLoaded && <PhysicsGame key="game" />}
            </AnimatePresence>
        </div>
    )
}
