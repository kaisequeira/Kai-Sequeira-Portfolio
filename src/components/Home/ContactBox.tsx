'use client'

import React, { MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
    faFileArrowDown,
    faEnvelope,
    faAddressCard,
    faSquareArrowUpRight,
    faPaste,
    faPlay,
    faCircleCheck,
    faStop,
    faX,
    faGamepad,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useGameContext } from '../PhysicsGame/GameContext'
import { useMediaQuery } from 'react-responsive'

type ContactType = 'Github' | 'LinkedIn' | 'Resume' | 'Email' | 'Play'

interface ContactBoxProps {
    type: ContactType
}

const ContactBox: React.FC<ContactBoxProps> = ({ type }) => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const EMAIL = 'kai.sequeira2003@gmail.com'
    let icon: JSX.Element,
        color: string,
        title: string | undefined = undefined,
        successTitle: string | undefined = undefined,
        onClick: (event: MouseEvent<HTMLButtonElement>) => void,
        actionIcon: any

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setClicked(true)
        if (onClick) onClick(event)
    }

    const { setGameLoaded, gameLoaded } = useGameContext()
    const isLgOrAbove = useMediaQuery({ query: '(min-width: 1024px)' })

    switch (type) {
        case 'Github':
            icon = (
                <FontAwesomeIcon
                    className="size-1/2 text-offwhite"
                    icon={faGithub}
                />
            )
            actionIcon = faSquareArrowUpRight
            color = 'var(--gradient-acc2)'
            onClick = () =>
                setTimeout(
                    () =>
                        window.open('https://github.com/kaisequeira', '_blank'),
                    200
                )
            break
        case 'LinkedIn':
            icon = (
                <FontAwesomeIcon
                    className="size-5/12 text-offwhite"
                    icon={faLinkedinIn}
                />
            )
            actionIcon = faSquareArrowUpRight
            color = 'var(--gradient-acc1)'
            onClick = () =>
                setTimeout(
                    () =>
                        window.open(
                            'https://www.linkedin.com/in/kai-sequeira-3b49602ba/',
                            '_blank'
                        ),
                    200
                )
            break
        case 'Resume':
            icon = (
                <FontAwesomeIcon
                    className="size-5/12 text-offwhite"
                    icon={faAddressCard}
                />
            )
            actionIcon = faFileArrowDown
            color = 'var(--gradient-acc3)'
            onClick = () =>
                setTimeout(
                    () => window.open('/KaiSequeiraResume.pdf', '_blank'),
                    200
                )
            break
        case 'Email':
            icon = (
                <FontAwesomeIcon
                    className="size-5/12 text-offwhite"
                    icon={faEnvelope}
                />
            )
            actionIcon = faPaste
            successTitle = 'Copied'
            color = 'var(--gradient-acc4)'
            onClick = (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault()
                navigator.clipboard.writeText(EMAIL)
            }
            break
        case 'Play':
            icon = (
                <FontAwesomeIcon
                    className="size-4/12 pl-0.5 text-offwhite"
                    icon={gameLoaded ? faStop : faPlay}
                />
            )
            actionIcon = gameLoaded ? faCircleXmark : faGamepad
            title = gameLoaded ? 'Stop' : 'Play'
            color = 'var(--gradient-acc5)'
            onClick = () => setGameLoaded(gameLoaded ? false : true)
            break
        default:
            throw new Error('Invalid contact type')
    }

    return (
        <div className="relative flex flex-col items-center">
            <motion.button
                className={
                    'md:rounded-3xl rounded-2xl lg:size-24 sm:size-20 size-16 flex items-center justify-center'
                }
                style={{ backgroundImage: color }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileTap={{ scale: isLgOrAbove ? 1 : 0.75 }}
                whileHover={{ y: -10 }}
                onClick={handleClick}
            >
                <span
                    className={`flex items-center justify-center text-offwhite`}
                >
                    {icon}
                </span>
            </motion.button>
            <motion.div
                style={{ backgroundImage: color }}
                className="absolute top-full mt-6 rounded-3xl h-11 w-36 hidden lg:tall:flex flex-row justify-center items-center gap-x-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ type: 'spring', duration: 0.2 }}
                onAnimationComplete={() => !hovered && setClicked(false)}
            >
                <p className="text-offwhite font-semibold text-center">
                    {clicked && successTitle !== undefined
                        ? successTitle
                        : title !== undefined
                          ? title
                          : type.toString()}
                </p>
                <FontAwesomeIcon
                    className="size-5 text-offwhite"
                    icon={
                        clicked && title === undefined
                            ? faCircleCheck
                            : actionIcon
                    }
                />
            </motion.div>
        </div>
    )
}

export default ContactBox
