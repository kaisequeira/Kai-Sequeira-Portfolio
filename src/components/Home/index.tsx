'use client'

import ScrollDownButton from './ArrowDown'
import React from 'react'
import '@/app/globals.css'
import Title from './Title'
import PhysicsGame from '../PhysicsGame/PhysicsGame'
import { GameProvider, useGameContext } from '../PhysicsGame/GameContext'
import { AnimatePresence } from 'framer-motion'

const Home: React.FC = () => {
    return (
        <GameProvider>
            <div className="bg-bgr w-screen h-screen flex flex-col items-center justify-center md:px-10 px-0 relative">
                <AnimatePresence mode="wait">
                    <HomeContent />
                    <ScrollDownButton />
                </AnimatePresence>
            </div>
        </GameProvider>
    )
}

const HomeContent: React.FC = () => {
    const { gameLoaded } = useGameContext()
    return gameLoaded ? <PhysicsGame /> : <Title />
}

export default Home
