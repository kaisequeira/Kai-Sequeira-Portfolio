'use client'

import ScrollDownButton from './ArrowDown'
import React from 'react'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import UnderlineText from '../_Global/UnderlineText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from '../_Global/Label'
import { faLocationDot, faSchool } from '@fortawesome/free-solid-svg-icons'
import ContactBox from './ContactBox'
import ColorSchemeToggle from './ThemeToggle'

const Home: React.FC = () => {
    return (
        <div
            className={cn(
                'w-screen h-screen min-h-fit py-5 flex flex-col items-center justify-center relative pointer-events-none'
            )}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex-grow flex flex-col justify-center lg:items-center items-start medium:lg:gap-12 gap-8 medium:pb-16 pb-6 lg:w-[1000px] xs:w-[360px] w-[330px] px-0"
            >
                <h1 className="lg:text-center text-left text-wrap">
                    Nice to meet you, I&apos;m Kai.
                </h1>
                <div className="flex flex-col lg:items-center items-start small:gap-4 gap-1.5">
                    <h5 className="lg:text-center text-left text-wrap lg:px-6 lg:py-3 px-4 py-2 rounded-5xl bg-secondary w-fit font-semibold">
                        SOFTWARE ENGINEERING & FINANCE
                    </h5>
                    <h4 className="lg:text-center text-left text-wrap p-0">
                        Currently the Telemetry Project Lead at{' '}
                        <UnderlineText
                            href="https://www.redbackracing.com/"
                            colour="--color-acc4"
                            newTab
                        >
                            UNSW Redback Racing
                        </UnderlineText>
                    </h4>
                    <div className="flex flex-row lg:justify-center justify-start gap-4 flex-wrap">
                        <Label title="Institution" note="UNSW" unresponsive>
                            <FontAwesomeIcon
                                className="text-content font-semibold"
                                icon={faSchool}
                            />
                        </Label>
                        <Label title="Location" note="Sydney" unresponsive>
                            <FontAwesomeIcon
                                className="text-content font-semibold"
                                icon={faLocationDot}
                            />
                        </Label>
                    </div>
                </div>
                <div className="lg:flex grid grid-cols-4 relative medium:lg:gap-8 lg:gap-5 gap-4">
                    <div className="lg:transform -rotate-6 translate-y-4 transform-none">
                        <ContactBox type="Github" />
                    </div>
                    <div className="lg:transform -rotate-3 translate-y-1 transform-none">
                        <ContactBox type="LinkedIn" />
                    </div>
                    <div className="transform hidden lg:block">
                        <ContactBox type="Play" />
                    </div>
                    <div className="lg:transform rotate-3 translate-y-1 transform-none">
                        <ContactBox type="Resume" />
                    </div>
                    <div className="lg:transform rotate-6 translate-y-4 transform-none">
                        <ContactBox type="Email" />
                    </div>
                </div>
            </motion.div>
            <ScrollDownButton />
            <ColorSchemeToggle />
        </div>
    )
}

export default Home
