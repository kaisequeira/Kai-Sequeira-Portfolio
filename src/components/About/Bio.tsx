'use client'

import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Hyperlink from '../_Global/Hyperlink'
import TransformingIcon from './TransformingIcon'
import { cn } from '@/lib/utils'

type BioProps = {
    className?: string
}

const Bio: React.FC<BioProps> = ({ className }) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const isLgOrAbove = useMediaQuery({ query: '(min-width: 1024px)' })

    const handleClick = () => {
        if (!isLgOrAbove) {
            setIsExpanded(!isExpanded)
        }
    }

    return (
        <div className={className}>
            <h2>
                About <TransformingIcon />
            </h2>
            <div
                className='flex flex-col gap-4 pointer-events-auto lg:pointer-events-none'
                onClick={handleClick}
            >
                <div
                    className={`space-y-8 ${isExpanded ? 'line-clamp-none' : 'line-clamp-8'} lg:line-clamp-none`}
                >
                    <p className="text-content font-normal md:text-xl sm:text-lg text-base">
                        I am currently in my fourth year at{' '}
                        <Hyperlink
                            href="https://www.unsw.edu.au/"
                            colour="--color-acc1"
                            newTab
                        >
                            UNSW,
                        </Hyperlink>{' '}
                        pursuing a double Bachelor&apos;s degree in{' '}
                        <Hyperlink
                            href="https://www.handbook.unsw.edu.au/undergraduate/specialisations/2025/SENGAH?year=2025"
                            colour="--color-acc2"
                            newTab
                        >
                            Software Engineering{' '}
                        </Hyperlink>{' '}
                        (Honours) and{' '}
                        <Hyperlink
                            href="https://www.handbook.unsw.edu.au/undergraduate/specialisations/2023/FINSA1"
                            colour="--color-acc3"
                            newTab
                        >
                            Commerce
                        </Hyperlink>
                        , with a major in Finance.
                    </p>
                    <p className="text-content font-normal md:text-xl sm:text-lg text-base">
                        Previously a Software Engineer at{' '}
                        <Hyperlink
                            href="https://www.redbackracing.com/"
                            colour="--color-acc4"
                            newTab
                        >
                            UNSW Redback Racing
                        </Hyperlink>
                        , my current role as the Telemetry Project Lead
                        encompasses managing a team of +7 software engineers
                        across data analytics, cloud ops, streaming, database
                        management, simlations, testing and live telemetry.
                    </p>
                    <p className="text-content font-extralight md:text-xl sm:text-lg text-base">
                        Beyond the keyboard,
                    </p>
                    <p className="font-normal text-content md:text-xl sm:text-lg text-base">
                        My interests extend to photography, game design and
                        anything that allows me to express my creativity. When
                        I&apos;m not studying at home, I&apos;ll take any
                        opportunity to pick up my camera, snap photos of friends
                        and document my travels.
                    </p>
                </div>
                <p className="text-left lg:hidden visible md:text-xl sm:text-lg text-base">
                    {isExpanded ? 'See less...' : 'See more...'}
                </p>
            </div>
        </div>
    )
}

export default Bio
