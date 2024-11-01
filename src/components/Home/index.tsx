'use client'

import ScrollDownButton from './ArrowDown'
import React from 'react'
import '@/app/globals.css'
import Title from './Title'
import { GameProvider, useGameContext } from '../PhysicsGame/GameContext'
import { AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import PhysicsGame from '../PhysicsGame/PhysicsGame'

const Home: React.FC = () => {
    return (
        <GameProvider>
            <HomeContent />
        </GameProvider>
    )
}

const HomeContent: React.FC = () => {
    const { gameLoaded } = useGameContext()

    return (
        <div className={cn("bg-bgr w-screen h-screen flex flex-col items-center justify-center relative")}>
            <AnimatePresence>
                {gameLoaded && <PhysicsGame key="game" />}
                <Title key="title" />
                <ScrollDownButton />
            </AnimatePresence>
        </div>
    )
}

export default Home