import React from 'react';
import '@/app/globals.css';
import LogoCarousel from './LogoCarousel';

const Technologies: React.FC = () => {

  return (
    <div className="bg-content w-screen h-[25vh] flex flex-col items-center justify-center">
      {/* <p className='text-bgr font-semibold'>
        Technologies I use
      </p> */}
      <LogoCarousel />
    </div>
  );
};

export default Technologies;