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
    const isRecruiter = saved === 'true';
    setIsRecruiterMode(isRecruiter);
    if (isRecruiter) {
      document.documentElement.classList.add('theme-recruiter');
      document.body.classList.add('theme-recruiter');
    } else {
      document.documentElement.classList.remove('theme-recruiter');
      document.body.classList.remove('theme-recruiter');
    }
  }, []);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => {
      const next = !prev;
      localStorage.setItem('tsakane_recruiter_mode', String(next));
      if (next) {
        document.documentElement.classList.add('theme-recruiter');
        document.body.classList.add('theme-recruiter');
      } else {
        document.documentElement.classList.remove('theme-recruiter');
        document.body.classList.remove('theme-recruiter');
      }
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
      <div className={`min-h-screen transition-colors duration-300 ${isRecruiterMode && mounted ? 'theme-recruiter bg-[#f0f4f9] text-slate-900' : 'theme-cyber bg-[#030712] text-slate-100'}`}>
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
