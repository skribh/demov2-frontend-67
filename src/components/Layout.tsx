import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/investor/ThemeToggle';
import { Sidebar } from '@/components/investor/Sidebar';
import { Header } from '@/components/investor/Header';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex bg-white text-gray-900">
      {/* Fixed Sidebar */}
      <div className="w-80 fixed left-0 top-0 h-screen overflow-y-auto border-r border-gray-300">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 ml-80">
        {/* Content Container - No header, no footer */}
        <div className="p-8 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LayoutContent>
        {children}
      </LayoutContent>
    </ThemeProvider>
  );
};