'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  isCVModalOpen: boolean;
  setIsCVModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tsakane_recruiter_mode');
    if (saved === 'true') {
      setIsRecruiterMode(true);
    }
  }, []);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => {
      const next = !prev;
      localStorage.setItem('tsakane_recruiter_mode', String(next));
      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isRecruiterMode: mounted ? isRecruiterMode : false,
        toggleRecruiterMode,
        isCVModalOpen,
        setIsCVModalOpen,
      }}
    >
      <div className={isRecruiterMode && mounted ? 'theme-recruiter' : 'theme-cyber'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
