import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const TractionSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="traction">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Traction & Growth
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        <div>
          <p className={`text-lg ${textSecondary}`}>
            Skribh is actively building traction in the healthcare AI documentation space through
            strategic partnerships, pilot programs, and continued product development.
          </p>
        </div>
      </div>
    </section>
  );
};
