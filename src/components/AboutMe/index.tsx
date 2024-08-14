import React from 'react';
import '@/app/globals.css';
import MotionShape from '../Global/MotionShape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import AnimatedIcon from './AnimatedIcon';

const AboutMe: React.FC = () => {

  return (
    <div className="bg-bgr w-screen min-h-screen h-full flex lg:flex-row flex-col items-center justify-center pl-1/14 pr-1/14 pb-1/10 pt-1/10 relative">
      <MotionShape className="absolute rounded-full rotate-45 size-32 bg-shapes top-1/10 right-1/6" reverse={true}/>
      <MotionShape className="absolute top-1/4 right-1/2 rotate-45 size-64 bg-shapes" reverse={true}/>
      <MotionShape className="absolute bottom-1/6 right-1/3 inline-block w-0 h-0 border-solid border-t-0 border-r-[73.5px] border-l-[73.5px] border-b-[127.3px] border-l-transparent border-r-transparent border-t-transparent border-b-shapes"/>
        <div className='flex flex-col justify-center min-h-full lg:w-2/5 w-full space-y-8 z-10'>
            <h2>
                Nice to meet you, <br/> I'm Kai  <AnimatedIcon />
            </h2>
            <div className='space-y-8 lg:line-clamp-none md:line-clamp-none line-clamp-6'>
                <p className='md:text-3xl text-lg font-normal'>
                    Currently working as a Software Engineer for UNSW Redback Racing, I am a full stack developer with a passion for solving complex problems. I enjoy designing and implementing scalable services and crafting intuitive user interfaces. My work spans building microservices, optimizing UI/UX, and creating seamless experiences.
                </p>
                <p className='md:text-3xl text-lg font-extralight'>
                    Outside of coding,
                </p>
                <p className='md:text-3xl text-lg font-normal'>
                    I have a keen interest in photography, capturing moments with friends and places I’ve been to. I also enjoy game design, exploring the creative and technical aspects of creating small packaged experiences. When I’m not busy at home, I’ll take any chance to travel, broaden my horizons and discover new places.
                </p>
            </div>
        </div>
        <div className='h-full lg:w-3/5 w-screen p-1/8 z-10'>

        </div>
    </div>
  );
};

export default AboutMe;