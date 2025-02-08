import React from 'react'
import '@/app/globals.css'
import ProjectPane from './ProjectPane'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectTitle from './ProjectTitle'
import UnderlineText from '../_Global/UnderlineText'

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-screen min-h-fit justify-center items-center bg-bgr gap-8 pt-1/20 pb-1/14 pointer-events-none">
            <div className="flex flex-col gap-9 2xl:w-[1350px] lg:w-[800px] xs:w-[360px] w-[330px]">
                <ProjectTitle />
                <div className="flex 2xl:flex-row 2xl:gap-10 gap-8 flex-col">
                    <ProjectPane
                        colour="var(--gradient-acc1)"
                        size="2xl:w-2/5"
                        title="Log Management"
                        note="Database management system"
                        description={
                            <span className="inline-block text-center select-none">
                                A system to manage logged data from the UNSW
                                Redback Racing vehicle utilizing{' '}
                                <UnderlineText
                                    colour="--color-acc1"
                                >
                                    AWS DynamoDB
                                </UnderlineText>{' '}
                                for efficient NoSQL data storage and{' '}
                                <UnderlineText
                                    colour="--color-acc1"
                                >
                                    S3
                                </UnderlineText>{' '}
                                for large file handling. The frontend is built
                                using{' '}
                                <UnderlineText
                                    colour="--color-acc1"
                                >
                                    Next.js
                                </UnderlineText>{' '}
                                and TypeScript, featuring server-side rendering
                                and a responsive{' '}
                                <UnderlineText
                                    colour="--color-acc1"
                                >
                                    Tailwind CSS
                                </UnderlineText>{' '}
                                design.
                            </span>
                        }
                        link="https://spyder.redbackracing.com/data-analytics/log-management"
                        src="./Projects/LogManagement.mp4"
                        icon={faSquareArrowUpRight}
                    />
                    <ProjectPane
                        colour="var(--gradient-acc3)"
                        size="2xl:w-3/5"
                        title="Crab Crawler"
                        note="Pixel art indie platformer game"
                        description={
                            <span className="inline-block text-center select-none">
                                Crab Crawler is a 2D pixel art platformer built
                                with{' '}
                                <UnderlineText
                                    colour="--color-acc3"
                                >
                                    Unity
                                </UnderlineText>{' '}
                                and C#, featuring custom graphics created in{' '}
                                <UnderlineText
                                    colour="--color-acc3"
                                >
                                    Aseprite
                                </UnderlineText>{' '}
                                and original music composed using{' '}
                                <UnderlineText
                                    colour="--color-acc3"
                                >
                                    Bosca Ceoil
                                </UnderlineText>
                                . Crab Crawler showcases a state-based animation
                                system, cross-platform input handling for both
                                keyboard and controller, and a robust save
                                system that works across different deployments.
                                Deployed as a WebGL game in{' '}
                                <UnderlineText
                                    colour="--color-acc3"
                                >
                                    Github Pages
                                </UnderlineText>
                                , Crab Crawler is directly playable through the
                                browser.
                            </span>
                        }
                        link="https://github.com/kaisequeira/Crabcrawler"
                        src="./Projects/CrabCrawler.mp4"
                        icon={faGithub}
                    />
                </div>
                <div className="flex 2xl:flex-row 2xl:gap-10 gap-8 flex-col">
                    <ProjectPane
                        colour="var(--gradient-acc2)"
                        size="2xl:w-3/5"
                        title="Spyder Telemetry Rework"
                        note="Redesign of Redback Racing's Data Acquisition Frontend"
                        description={
                            <span className="inline-block text-center select-none">
                                A 15,000+ line rewrite of the spyder telemetry
                                frontend, transitioning from the{' '}
                                <UnderlineText
                                    colour="--color-acc2"
                                >
                                    Material-UI
                                </UnderlineText>{' '}
                                component library to{' '}
                                <UnderlineText
                                    colour="--color-acc2"
                                >
                                    Shadcn/ui
                                </UnderlineText>
                                . Implemented custom utility functions for
                                keyboard shortcuts, a new notification system,
                                and extensively refactored the codebase for
                                improved readability. This rework significantly
                                enhanced the team&apos;s data analysis
                                capabilities with a more intuitive and
                                responsive interface built with{' '}
                                <UnderlineText
                                    colour="--color-acc2"
                                >
                                    Next.js
                                </UnderlineText>{' '}
                                and TypeScript.
                            </span>
                        }
                        link="https://spyder.redbackracing.com"
                        src="./Projects/SpyderTelemetryRework.mp4"
                        icon={faSquareArrowUpRight}
                    />
                    <ProjectPane
                        colour="var(--gradient-acc4)"
                        size="2xl:w-2/5"
                        title="Emberscape"
                        note="Pixel art indie survival game"
                        description={
                            <span className="inline-block text-center select-none">
                                Emberscape is a 2D pixel art survival game built
                                using the{' '}
                                <UnderlineText
                                    colour="--color-acc4"
                                >
                                    Godot Engine
                                </UnderlineText>{' '}
                                and C#. It features a dynamic inventory system,
                                interactive gameplay, and custom pixel art
                                assets made in{' '}
                                <UnderlineText
                                    colour="--color-acc4"
                                >
                                    Aseprite
                                </UnderlineText>
                                . Utilising Godot&apos;s{' '}
                                <UnderlineText
                                    colour="--color-acc4"
                                >
                                    signal system
                                </UnderlineText>{' '}
                                for event handling and node-based architecture,
                                Emberscape demonstrates strong adherence to
                                object-oriented programming principles.
                            </span>
                        }
                        link="https://github.com/kaisequeira/Emberscape"
                        src="./Projects/Emberscape.mp4"
                        icon={faGithub}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
