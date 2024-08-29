import React from 'react';
import '@/app/globals.css';
import AnimatedIcon from './AnimatedIcon';
import Image from 'next/image';
import Bio from './Bio';

const AboutMe: React.FC = () => {

  return (
    <div className="bg-transparent w-full lg:h-screen h-fit p-6 flex justify-center relative">
        <div className='2xl:w-[1350px] lg:w-[800px] w-full flex lg:flex-row flex-col items-center justify-center gap-8'>
            <Bio className='flex flex-col justify-center lg:w-1/2 w-full gap-8'/>
            <div className='xl:h-full h-fit lg:w-fit w-full items-center justify-center flex'>
                <Image
                    src={'/About/ResumePhotoKai.jpg'}
                    alt='Profile Photo'
                    quality={100}
                    width={440}
                    height={400}
                    unoptimized
                    priority
                />
            </div>
        </div>
    </div>
  );
};

export default AboutMe;