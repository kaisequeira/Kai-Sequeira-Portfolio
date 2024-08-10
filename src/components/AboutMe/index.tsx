import React from 'react';
import '@/app/globals.css';
import MotionShape from '../Global/MotionShape';

const AboutMe: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex md:flex-row flex-col items-center justify-center pl-1/14 pr-1/14 pb-1/10 pt-1/10 relative">
      <MotionShape className="absolute bottom-1/4 left-1/6 rotate-12 size-40 bg-shapes"/>
      <MotionShape className="absolute rounded-full rotate-45 size-28 bg-shapes bottom-1/10 left-1/4" reverse={true}/>
      <MotionShape className="absolute top-1/4 right-1/6 rotate-45 size-64 bg-shapes" reverse={true}/>
      <MotionShape className="absolute border-b-shapes border-[100px] w-0 h-0 border-t-0 border-x-transparent top-1/10 right-1/4"/>
        <div className='flex flex-col justify-center h-full w-2/5 space-y-8 z-10'>
            <h2>
                Nice to meet you, <br/> I'm Kai.
            </h2>
            <div className='space-y-8'>
                <p className='text-3xl font-medium'>
                    Currently working as a Software Engineer for UNSW Redback Racing, I am a full stack developer with a passion for solving complex problems. I enjoy designing and implementing scalable services and crafting intuitive user interfaces. My work spans building microservices, optimizing UI/UX, and creating seamless experiences.
                </p>
                <p className='text-3xl font-extralight'>
                    Outside of coding,
                </p>
                <p className='text-3xl font-medium'>
                    I have a keen interest in photography, capturing moments with friends and places I’ve been to. I also enjoy game design, exploring the creative and technical aspects of creating small packaged experiences. When I’m not busy at home, I’ll take any chance to travel, broaden my horizons and discover new places.
                </p>
            </div>
        </div>
        <div className='h-full w-3/5 p-1/8 z-10'>

        </div>
    </div>
  );
};

export default AboutMe;