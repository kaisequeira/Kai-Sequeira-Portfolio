'use client'

import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-bgr w-full h-full overflow-y-auto !no-scrollbar overflow-x-clip grain-effect">
            <div className='grain-effect'>
                <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'spring', duration: 8 }}
                >
                    {children}
                </motion.main>
            </div>
        </div>
    )
}
