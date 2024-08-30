import React from 'react'
import '@/app/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'
import ProjectPane from './ProjectPane'

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-screen min-h-fit justify-center items-center bg-bgr gap-12 pb-1/14 pt-14 pl-6 pr-6">
            <div className="flex 2xl:flex-row 2xl:w-[1350px] 2xl:gap-14 gap-8 lg:w-[800px] flex-col w-[350px]">
                <ProjectPane
                    colour="var(--gradient-acc1)"
                    className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-2/5 w-full"
                    title="Log Management"
                    note="Database management system"
                >
                    {/* Add your image or content here */}
                </ProjectPane>
                <ProjectPane
                    colour="var(--gradient-acc3)"
                    className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-3/5 w-full"
                    title="Crabcrawler"
                    note="Pixel art indie platformer game"
                >
                    {/* Add your image or content here */}
                </ProjectPane>
            </div>
            <div className="flex 2xl:flex-row 2xl:w-[1350px] 2xl:gap-14 gap-8 lg:w-[800px] flex-col w-[350px]">
                <ProjectPane
                    colour="var(--gradient-acc2)"
                    className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-1/4 w-full"
                    title="This Website"
                    note="Learn more..."
                >
                    {/* Add your image or content here */}
                </ProjectPane>
                <ProjectPane
                    colour="var(--gradient-acc4)"
                    className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] min-h-[600px] 2xl:w-3/4 w-full"
                    title="Emberscape"
                    note="Pixel art indie survival game"
                >
                    {/* Add your image or content here */}
                </ProjectPane>
            </div>
        </div>
    )
}

export default Projects
