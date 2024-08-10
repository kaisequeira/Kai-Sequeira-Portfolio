"use client";

import React, { useRef, useEffect } from 'react';
import { useStickyCursor } from './StickyCursorContext';
import Magnetic from './Magnetic';

interface StickyButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const StickyButton: React.FC<StickyButtonProps> = ({ icon }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const { registerStickyButton } = useStickyCursor();

  useEffect(() => {
    if (buttonRef.current) {
      registerStickyButton(buttonRef);
    }
  }, [registerStickyButton]);

  return (
    <button className="flex items-center justify-center m-8">
      <Magnetic>
        <div className="size-12 flex justify-center items-center">
          <div className='size-12 md:bg-bgr md:text-content rounded-full md:shadow-none bg-content text-bgr shadow-custom items-center justify-center flex'>
            {icon}
          </div>
          <div ref={buttonRef} className="size-20 absolute rounded-full flex justify-center items-center text-content hover:size-80 origin-center"/>
        </div>
      </Magnetic>
    </button> 
  );
};

export default StickyButton;