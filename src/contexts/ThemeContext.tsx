import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  themeClasses: string;
  accentClasses: string;
  textPrimary: string;
  textSecondary: string;
  borderClasses: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark 
    ? 'bg-gray-900 text-gray-100' 
    : 'bg-gray-50 text-gray-900';
  
  const accentClasses = isDark 
    ? 'bg-gray-700' 
    : 'bg-white';

  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const borderClasses = isDark ? 'border-gray-700' : 'border-gray-200';

  const value = {
    isDark,
    toggleTheme,
    themeClasses,
    accentClasses,
    textPrimary,
    textSecondary,
    borderClasses,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
