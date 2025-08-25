import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThesisSection: React.FC = () => {
  const { accentClasses, borderClasses, textSecondary } = useTheme();

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="thesis">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Investment Thesis
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-4 ${textSecondary}`}>
        <p>
          The healthcare industry faces a critical documentation crisis. Medical professionals spend 40-60% 
          of their time on paperwork instead of patient care, leading to burnout, errors, and inefficient 
          resource allocation. Current solutions are fragmented, non-compliant, or require significant 
          workflow changes.
        </p>
        <p>
          Skribh addresses this fundamental pain point with ambient AI transcription that automatically 
          generates HIPAA-compliant medical documentation in real-time. Our solution integrates seamlessly 
          into existing workflows, requires no additional hardware, and produces documentation that meets 
          regulatory standards while freeing up clinicians to focus on what matters most: patient care.
        </p>
      </div>
    </section>
  );
};
