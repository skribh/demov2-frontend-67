import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';

export const ContactSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textSecondary } = useTheme();
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact Information",
      description: "Please reach out to investors@skribh.com for more information.",
    });
  };

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="contact">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Contact
      </h2>
      <div className="text-center">
        <p className={`text-lg mb-6 ${textSecondary}`}>
          Ready to learn more? We invite you to reach out to discuss investment opportunities 
          and learn more about Skribh's mission to transform healthcare documentation.
        </p>
        <Button 
          onClick={handleContactClick} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base"
        >
          Request More Information
        </Button>
        <div className={`mt-8 p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className={textSecondary}>
            <strong>Contact:</strong> investors@skribh.com
          </p>
        </div>
      </div>
    </section>
  );
};
