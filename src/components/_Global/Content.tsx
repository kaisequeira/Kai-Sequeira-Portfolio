'use client'

import Home from '@/components/Home'
import Projects from '@/components/Projects'
import AboutMe from '@/components/About'
import PhysicsGame from '@/components/PhysicsGame/PhysicsGame'
import { useGameContext } from '@/components/PhysicsGame/GameContext'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function Content() {
    const { gameLoaded, setGameLoaded } = useGameContext()
    const { theme } = useTheme()

    const handleCloseGame = () => {
        setGameLoaded(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleCloseGame)
        return () => {
            window.removeEventListener('resize', handleCloseGame)
        }
    }, [setGameLoaded])

    useEffect(() => {
        handleCloseGame()
    }, [theme])

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
