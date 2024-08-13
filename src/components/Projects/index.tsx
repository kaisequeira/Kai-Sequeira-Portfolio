import React from 'react';
import '@/app/globals.css';
import MotionShape from '../Global/MotionShape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC = () => {

  return (
    <div className="bg-bgr flex flex-col relative">
        <div className='rounded-3xl bg-gradient-to-bl from-shapes via-bgr to-bgr'>
            <div className='w-screen h-[70vh]'/>
            <div className='w-screen h-[70vh]'/>
            <div className='w-screen h-[70vh]'/>
        </div>
    </div>
  );
};

export default Projects;