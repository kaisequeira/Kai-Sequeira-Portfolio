import React from 'react';
import LogoCarousel from './LogoCarousel';
import '@/app/globals.css';

const Play: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex flex-col items-center justify-center">
      <h1>
        My Tech Stack
      </h1>
      <h4>
        Sort the icons into the correct group
      </h4>
      <LogoCarousel />
    </div>
  );
};

export default Play;