"use client";

import React, { useRef, useEffect } from 'react';
import { useStickyCursor } from './StickyCursorContext';
import Magnetic from '../magnetic';

interface StickyButtonProps {
  icon: React.ReactNode;
}

const StickyButton: React.FC<StickyButtonProps> = ({ icon }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { registerStickyButton } = useStickyCursor();

  useEffect(() => {
    if (buttonRef.current) {
      registerStickyButton(buttonRef);
    }
  }, [registerStickyButton]);

  return (
    <button ref={buttonRef} className="flex items-center justify-center absolute size-14 top-0 left-0 m-8 hover:scale-400">
          <span className="text-content flex items-center justify-center">
            <Magnetic>
              {icon}
            </Magnetic>
          </span>
      </button> 
  );
};

export default StickyButton;