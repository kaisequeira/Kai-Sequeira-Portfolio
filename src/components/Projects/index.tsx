import React from 'react'
import '@/app/globals.css'
import ProjectPane from './ProjectPane'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectTitle from './ProjectTitle'
import Hyperlink from '../_Global/Hyperlink'

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-screen min-h-fit justify-center items-center bg-bgr gap-8 pt-1/20 pb-1/14">
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
                                <Hyperlink
                                    colour="--color-acc1"
                                    href="https://aws.amazon.com/dynamodb/"
                                >
                                    AWS DynamoDB
                                </Hyperlink>{' '}
                                for efficient NoSQL data storage and{' '}
                                <Hyperlink
                                    colour="--color-acc1"
                                    href="https://aws.amazon.com/s3/"
                                >
                                    S3
                                </Hyperlink>{' '}
                                for large file handling. The frontend is built
                                using{' '}
                                <Hyperlink
                                    colour="--color-acc1"
                                    href="https://nextjs.org/"
                                >
                                    Next.js
                                </Hyperlink>{' '}
                                and TypeScript, featuring server-side rendering
                                and a responsive{' '}
                                <Hyperlink
                                    colour="--color-acc1"
                                    href="https://tailwindcss.com/"
                                >
                                    Tailwind CSS
                                </Hyperlink>{' '}
                                design.
                            </span>
                        }
                        link="https://spyder.redbackracing.com"
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
                                <Hyperlink
                                    colour="--color-acc3"
                                    href="https://unity.com/"
                                >
                                    Unity
                                </Hyperlink>{' '}
                                and C#, featuring custom graphics created in{' '}
                                <Hyperlink
                                    colour="--color-acc3"
                                    href="https://www.aseprite.org/"
                                >
                                    Aseprite
                                </Hyperlink>{' '}
                                and original music composed using{' '}
                                <Hyperlink
                                    colour="--color-acc3"
                                    href="https://boscaceoil.net/"
                                >
                                    Bosca Ceoil
                                </Hyperlink>
                                . Crab Crawler showcases a state-based animation
                                system, cross-platform input handling for both
                                keyboard and controller, and a robust save
                                system that works across different deployments.
                                Deployed as a WebGL game in{' '}
                                <Hyperlink
                                    colour="--color-acc3"
                                    href="https://pages.github.com/"
                                >
                                    Github Pages
                                </Hyperlink>
                                , Crab Crawler is directly playable through the
                                browser.
                            </span>
                        }
                        link="https://github.com/kaisequeira/Crabcrawler"
                        src="./Projects/CrabCrawler.mp4"
                        icon={faGithub}
                    />
                </div>
                <div className="flex 2xl:flex-row 2xl:gap-10 gap-8 flex-col relative">
                    <ProjectPane
                        colour="var(--gradient-acc2)"
                        size="2xl:w-3/5"
                        title="Spyder Telemetry Rework"
                        note="Redesign of Redback Racing's Data Acquisition Frontend"
                        description={
                            <span className="inline-block text-center select-none">
                                A 15,000+ line rewrite of the spyder telemetry
                                frontend, transitioning from the{' '}
                                <Hyperlink
                                    colour="--color-acc2"
                                    href="https://mui.com/"
                                >
                                    Material-UI
                                </Hyperlink>{' '}
                                component library to{' '}
                                <Hyperlink
                                    colour="--color-acc2"
                                    href="https://ui.shadcn.com/"
                                >
                                    Shadcn/ui
                                </Hyperlink>
                                . Implemented custom utility functions for
                                keyboard shortcuts, a new notification system,
                                and extensively refactored the codebase for
                                improved readability. This rework significantly
                                enhanced the team&apos;s data analysis
                                capabilities with a more intuitive and
                                responsive interface built with{' '}
                                <Hyperlink
                                    colour="--color-acc2"
                                    href="https://nextjs.org/"
                                >
                                    Next.js
                                </Hyperlink>{' '}
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
                                <Hyperlink
                                    colour="--color-acc4"
                                    href="https://godotengine.org/"
                                >
                                    Godot Engine
                                </Hyperlink>{' '}
                                and C#. It features a dynamic inventory system,
                                interactive gameplay, and custom pixel art
                                assets made in{' '}
                                <Hyperlink
                                    colour="--color-acc4"
                                    href="https://www.aseprite.org/"
                                >
                                    Aseprite
                                </Hyperlink>
                                . Utilising Godot&apos;s{' '}
                                <Hyperlink
                                    colour="--color-acc4"
                                    href="https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html"
                                >
                                    signal system
                                </Hyperlink>{' '}
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
