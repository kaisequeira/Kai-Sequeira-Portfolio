"use client";

import React, { createContext, useContext, useRef, useState, ReactNode, useCallback } from 'react';

interface StickyCursorContextType {
  stickyButtons: React.RefObject<HTMLButtonElement>[];
  registerStickyButton: (ref: React.RefObject<HTMLButtonElement>) => void;
}

const StickyCursorContext = createContext<StickyCursorContextType | undefined>(undefined);

export const StickyCursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stickyButtons, setStickyButtons] = useState<React.RefObject<HTMLButtonElement>[]>([]);

  const registerStickyButton = useCallback((ref: React.RefObject<HTMLButtonElement>) => {
    setStickyButtons((prev) => [...prev, ref]);
  }, []);

  return (
    <StickyCursorContext.Provider value={{ stickyButtons, registerStickyButton }}>
      {children}
    </StickyCursorContext.Provider>
  );
};

export const useStickyCursor = () => {
  const context = useContext(StickyCursorContext);
  if (!context) {
    throw new Error('useStickyCursor must be used within a StickyCursorProvider');
  }
  return context;
};
