'use client'

// GameContext.tsx
import React, { createContext, useContext, useState } from 'react'

interface GameContextProps {
    gameLoaded: boolean
    setGameLoaded: (loaded: boolean) => void
}

const GameContext = createContext<GameContextProps | undefined>(undefined)

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [gameLoaded, setGameLoaded] = useState(false)

    return (
        <GameContext.Provider value={{ gameLoaded, setGameLoaded }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => {
    const context = useContext(GameContext)
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider')
    }
    return context
}
