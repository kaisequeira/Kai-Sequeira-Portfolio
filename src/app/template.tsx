'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div className="bg-bgr w-full h-full overflow-y-auto !no-scrollbar overflow-x-clip grain-effect">
            <motion.main
                variants={variants}
                initial="hidden"
                animate={isMounted ? 'enter' : 'hidden'}
                exit="exit"
                transition={{ type: 'spring', duration: 8 }}
            >
                {children}
            </motion.main>
        </div>
    )
}
