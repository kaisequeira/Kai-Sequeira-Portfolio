import React from 'react';
import '@/app/globals.css';
import MotionShape from '../Global/MotionShape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import ProjectPane from './ProjectPane';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col w-screen 2xl:h-[130vh] min-h-fit justify-center items-center bg-bgr space-y-14 2xl:p-0 pb-1/10 relative">
      <MotionShape className="absolute rounded-full rotate-45 size-40 bg-shapes bottom-1/10 left-1/10" reverse={true}/>
      <MotionShape className="absolute top-0 right-1/4 rotate-45 size-64 bg-shapes" reverse={true}/>
      <MotionShape className="absolute inline-block w-0 h-0 border-solid border-t-0 border-r-[147px] border-l-[147px] border-b-[254.6px] border-l-transparent border-r-transparent border-t-transparent border-b-shapes top-1/2 right-1/8"/>
      <div className='flex 2xl:flex-row 2xl:w-[1350px] 2xl:space-x-14 2xl:space-y-0 lg:w-[800px] space-x-0 space-y-14 flex-col w-[350px] z-10'>
        <ProjectPane colour="var(--gradient-acc1)" className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] 2xl:w-2/5 w-full" title="Log Management" note='Database management system'>
          {/* Add your image or content here */}
        </ProjectPane>
        <ProjectPane colour="var(--gradient-acc3)" className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] 2xl:w-3/5 w-full" title="Crabcrawler" note='Pixel art indie platformer game'>
          {/* Add your image or content here */}
        </ProjectPane>
      </div>
      <div className='flex 2xl:flex-row 2xl:w-[1350px] 2xl:space-x-14 2xl:space-y-0 lg:w-[800px] space-x-0 space-y-14 flex-col w-[350px] z-10'>
        <ProjectPane colour="var(--gradient-acc2)" className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] 2xl:w-1/4 w-full" title="Techstack">
          {/* Add your image or content here */}
        </ProjectPane>
        <ProjectPane colour="var(--gradient-acc4)" className="flex flex-col items-center 2xl:h-[50vh] h-[70vh] 2xl:w-3/4 w-full" title="Emberscape" note='Pixel art indie survival game'>
          {/* Add your image or content here */}
        </ProjectPane>
      </div>
    </div>
  );
};

export default Projects;