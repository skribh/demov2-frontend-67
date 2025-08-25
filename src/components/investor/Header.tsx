import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';

export const Header: React.FC = () => {
  const { isDark, textSecondary } = useTheme();
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact Information",
      description: "Please reach out to investors@skribh.com for more information.",
    });
  };

  return (
    <header className="mb-10">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img 
              src="/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png" 
              alt="Skribh Logo" 
              className="h-8 w-8" 
            />
            <h1 className="text-4xl font-bold text-blue-400">Skribh</h1>
          </div>
          <p className={`text-lg mt-2 max-w-2xl transition-colors ${textSecondary}`}>
            Automated, HIPAA-compliant medical documentation via ambient AI transcription. 
            Transforming healthcare efficiency through intelligent automation.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center space-x-3">
          <Button 
            onClick={handleContactClick} 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Contact
          </Button>
          <Button 
            variant="outline" 
            className={
              isDark 
                ? 'border-gray-600 hover:bg-gray-700' 
                : 'border-gray-300 hover:bg-gray-100'
            }
          >
            Share
          </Button>
        </div>
      </div>
    </header>
  );
};
