import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const FoundingStorySection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="founding-story">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Founding Story
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        <div>
          <h3 className={`text-xl font-semibold mt-8 mb-4 transition-colors ${textPrimary}`}>
            Inspiration
          </h3>
          <p>
            The idea for Skribh was born from founder Kaju Sarkar's direct experience with healthcare 
            inefficiencies. After witnessing firsthand how medical professionals struggled with 
            time-consuming documentation that pulled them away from patient care, Kaju envisioned 
            a world where AI could handle the paperwork, allowing clinicians to focus on what they 
            do best: healing.
          </p>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mt-8 mb-4 transition-colors ${textPrimary}`}>
            Founder Background
          </h3>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h4 className="text-lg font-bold text-blue-400">Kaju Sarkar</h4>
            <p className={`text-sm mb-2 ${textSecondary}`}>Founder & CEO</p>
            <p>
              Experienced product leader with deep expertise in AI/ML and healthcare technology. 
              Previously led product initiatives at major tech companies, with a track record of 
              building scalable solutions that solve real-world problems in healthcare and enterprise software.
            </p>
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mt-8 mb-4 transition-colors ${textPrimary}`}>
            Pivotal Events & Early Accomplishments
          </h3>
          <p>
            After months of research and development, Skribh secured initial validation through 
            pilot programs with healthcare providers. The positive response from early adopters 
            confirmed the market need and led to successful seed funding, enabling the team to 
            accelerate product development and market entry. A pivotal moment came with achieving 
            70% documentation time reduction in pilot programs, validating the core value proposition.
          </p>
        </div>
      </div>
    </section>
  );
};
