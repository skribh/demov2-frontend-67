import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/investor/ThemeToggle';
import { Sidebar } from '@/components/investor/Sidebar';
import { Header } from '@/components/investor/Header';
import { PricingStrategySection } from '@/components/investor/sections/PricingStrategySection';
import { useTheme } from '@/contexts/ThemeContext';

const PricingStrategyPage: React.FC = () => {
  const { themeClasses } = useTheme();

  return (
    <div className={`min-h-screen transition-colors ${themeClasses}`}>
      <ThemeToggle />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:space-x-8 py-12">
          <Sidebar />
          
          <main className="w-full lg:w-3/4">
            <Header />
            
            <div className="space-y-16">
              <PricingStrategySection />
            </div>
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <footer className={`mt-24 py-8 border-t transition-colors ${
        useTheme().isDark ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 Skribh. All Rights Reserved.</p>
          <p className="mt-1">
            This document is for informational purposes only and does not constitute
            an offer to sell or a solicitation of an offer to buy any securities.
          </p>
        </div>
      </footer>
    </div>
  );
};

const PricingStrategy: React.FC = () => {
  return (
    <ThemeProvider>
      <PricingStrategyPage />
    </ThemeProvider>
  );
};

export default PricingStrategy;