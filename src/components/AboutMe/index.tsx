import React from 'react';
import '@/app/globals.css';
import MotionShape from '../_Global/MotionShape';
import AnimatedIcon from './AnimatedIcon';
import Image from 'next/image';

const AboutMe: React.FC = () => {

  return (
    <div className="bg-transparent w-screen lg:h-[60vh] h-fit lg:p-0 pt-1/8 pb-1/8 relative flex justify-center ">
        <MotionShape className="absolute rounded-full rotate-45 size-32 bg-shapes top-1/10 right-1/6" reverse={true}/>
        {/* <MotionShape className="absolute top-1/4 left-1/8 rotate-45 size-64 bg-shapes" reverse={true}/> */}
        <MotionShape className="absolute bottom-1/6 left-1/8 inline-block w-0 h-0 border-solid border-t-0 border-r-[73.5px] border-l-[73.5px] border-b-[127.3px] border-l-transparent border-r-transparent border-t-transparent border-b-shapes"/>
        <div className='2xl:w-[1350px] lg:w-[800px] w-[350px] flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-6'>
            <div className='flex flex-col justify-center lg:w-1/2 w-full space-y-8 z-10 '>
                <h2>
                    Nice to meet you, {/*<br/> I'm Kai  <AnimatedIcon />*/}
                </h2>
                <div className='space-y-8 lg:line-clamp-none md:line-clamp-none line-clamp-6'>
                    <p className='text-content font-normal'>
                        Currently working as a Software Engineer for UNSW Redback Racing, I am a full stack developer with a passion for solving complex problems. My work spans building microservices, optimizing UI/UX, and creating seamless experiences.
                    </p>
                    <p className='text-content font-extralight'>
                        Outside of Coding,
                    </p>
                    <p className='font-normal text-content'>
                        I have a keen interest in photography, game design, and anything that allows me to express my creativity. When I’m not busy at home, I’ll take any chance to travel, broaden my horizons and discover new places.
                    </p>
                </div>
            </div>
            <div className='h-full lg:w-1/2 w-screen z-10 flex justify-end items-center'>
                <Image
                    className='rounded-3xl'
                    src={'/About/Redback2024TeamPhoto.jpeg'}
                    alt='Redback Racing 2024 Team Photo'
                    width={600}
                    height={400}
                />
            </div>
        </div> 
    </div>
  );
};

export default AboutMe;