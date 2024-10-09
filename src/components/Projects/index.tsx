import React from 'react'
import '@/app/globals.css'
import ProjectPane from './ProjectPane'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

import Emberscape from '/public/Projects/Emberscape/1.jpg';

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-screen min-h-fit justify-center items-center bg-bgr gap-12 py-1/14">
            <div className="flex flex-col gap-9 2xl:w-[1350px] lg:w-[800px] xs:w-[360px] w-[330px]">
            <h2 className='md:hidden visible'>
                Projects
            </h2>
                <div className="flex 2xl:flex-row 2xl:gap-14 gap-8 flex-col">
                    <ProjectPane
                        colour="var(--gradient-acc1)"
                        className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-2/5 w-full"
                        title="Log Management"
                        note="Database management system"
                        link="https://spyder.redbackracing.com/data_analytics/managelogs"
                        icon={faSquareArrowUpRight}
                    >
                        <Image
                            src={Emberscape}
                            className="w-5/6 rounded-3xl !relative flex shadow-thick"
                            alt="Profile Photo"
                            objectFit='contain'
                        />
                    </ProjectPane>
                    <ProjectPane
                        colour="var(--gradient-acc3)"
                        className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-3/5 w-full"
                        title="Crabcrawler"
                        note="Pixel art indie platformer game"
                        link="https://github.com/kaisequeira/Crabcrawler"
                        icon={faGithub}
                    >
                        <Image
                            src={Emberscape}
                            className="w-5/6 rounded-3xl !relative flex shadow-thick"
                            alt="Profile Photo"
                            objectFit='contain'
                        />
                    </ProjectPane>
                </div>
                <div className="flex 2xl:flex-row 2xl:gap-14 gap-8 flex-col relative">
                    <ProjectPane
                        colour="var(--gradient-acc2)"
                        className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-1/4 w-full"
                        title="This Website"
                        note="Learn more..."
                        link="https://github.com/kaisequeira/kai-sequeira-portfolio"
                        icon={faGithub}
                    >
                        <Image
                            src={Emberscape}
                            className="w-5/6 rounded-3xl !relative flex shadow-thick"
                            alt="Profile Photo"
                            objectFit='contain'
                        />
                    </ProjectPane>
                    <ProjectPane
                        colour="var(--gradient-acc4)"
                        className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-3/4 w-full"
                        title="Emberscape"
                        note="Pixel art indie survival game"
                        link="https://github.com/kaisequeira/Emberscape"
                        icon={faGithub}
                    >
                        <Image
                            src={Emberscape}
                            className="w-5/6 rounded-3xl !relative flex shadow-thick"
                            alt="Profile Photo"
                            objectFit='contain'
                        />
                    </ProjectPane>
                </div>
            </div>
        </div>
    )
}

export default Projects
