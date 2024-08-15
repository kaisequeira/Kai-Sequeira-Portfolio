import React from 'react';
import '@/app/globals.css';
import LogoCarousel from './LogoCarousel';

const Technologies: React.FC = () => {

  return (
    <div className="bg-content w-screen h-[20vh] flex flex-row items-center justify-center">
      {/* <p className='text-bgr font-semibold w-1/3 text-right'>
        My Tech Stack
      </p> */}
      <LogoCarousel />
    </div>
  );
};

export default Technologies;