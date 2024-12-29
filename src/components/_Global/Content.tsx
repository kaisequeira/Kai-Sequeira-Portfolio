'use client'

import Home from '@/components/Home'
import Projects from '@/components/Projects'
import AboutMe from '@/components/About'
import PhysicsGame from '@/components/PhysicsGame/PhysicsGame'
import { useGameContext } from '@/components/PhysicsGame/GameContext'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Content() {
    const { gameLoaded, setGameLoaded } = useGameContext()

    useEffect(() => {
        const handleCloseGame = () => {
            setGameLoaded(false)
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        mediaQuery.addEventListener('change', handleCloseGame)
        window.addEventListener('resize', handleCloseGame)
        return () => {
            mediaQuery.removeEventListener('change', handleCloseGame)
            window.removeEventListener('resize', handleCloseGame)
        }
    }, [setGameLoaded])

    return (
        <div className="flex flex-col relative">
            <AnimatePresence>
                {gameLoaded && <PhysicsGame key="game" />}
            </AnimatePresence>
            <Home />
            <AboutMe />
            <Projects />
        </div>
    )
}
