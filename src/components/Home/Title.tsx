import ScrollDownButton from './ArrowDown'
import React from 'react'
import '@/app/globals.css'
import Label from '../_Global/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSchool } from '@fortawesome/free-solid-svg-icons'
import Hyperlink from '../_Global/Hyperlink'
import { motion } from 'framer-motion'
import ContactBox from './ContactBox'

const Title: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex-grow flex flex-col justify-center md:items-center items-start md:gap-12 gap-8 pt-6 lg:w-[1000px] xs:w-[360px] w-[330px]"
        >
            <h1 className="md:text-center text-left text-wrap">
                Nice to meet you, I&apos;m Kai.
            </h1>
            <div className="flex flex-col md:items-center items-start gap-4">
                <h5 className="md:text-center text-left text-wrap md:px-6 md:py-3 px-4 py-2 rounded-5xl bg-secondary w-fit font-semibold">
                    SOFTWARE ENGINEER
                </h5>
                <h4 className="md:text-center text-left text-wrap p-0">
                    Currently a Data Acquisition member at{' '}
                    <Hyperlink
                        href="https://www.redbackracing.com/"
                        colour="--color-acc4"
                        newTab
                    >
                        UNSW Redback Racing
                    </Hyperlink>
                </h4>
                <div className="flex flex-row md:justify-center justify-start gap-4 flex-wrap">
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
            <div className="md:flex grid grid-cols-3 relative md:gap-8 gap-4">
                <div className="md:transform -rotate-6 translate-y-4 transform-none">
                    <ContactBox type="Github" />
                </div>
                <div className="md:transform -rotate-3 translate-y-1 transform-none">
                    <ContactBox type="LinkedIn" />
                </div>
                <div className="transform">
                    <ContactBox type="Play" />
                </div>
                <div className="md:transform rotate-3 md:translate-y-1 transform-none">
                    <ContactBox type="Resume" />
                </div>
                <div className="md:transform rotate-6 md:translate-y-4 transform-none">
                    <ContactBox type="Email" />
                </div>
            </div>
        </motion.div>
    )
}

export default Title
