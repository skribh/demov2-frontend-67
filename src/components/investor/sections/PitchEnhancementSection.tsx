import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Brain, Heart, Cpu, Stethoscope, Users, Shield } from 'lucide-react';

export const PitchEnhancementSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  const pitchPillars = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Deep Understanding",
      tagline: "EMS-specific intelligence that understands the unique challenges",
      description: "We're not building generic AI - we're building EMS-specific intelligence that understands the unique challenges, terminology, and workflows of emergency medical services.",
      highlights: [
        "Medical terminology recognition trained on EMS-specific datasets",
        "Understanding of emergency protocols and procedures", 
        "Context-aware documentation for high-stress environments",
        "Integration with existing EMS workflows and systems"
      ],
      color: "blue"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centric Design",
      tagline: "Every decision made with the paramedic in mind",
      description: "Every decision is made with the paramedic in mind. If it doesn't make their job easier and better, it doesn't belong in our product.",
      highlights: [
        "Intuitive interface designed for high-pressure situations",
        "Minimal learning curve and training requirements",
        "Voice-first interaction optimized for field conditions",
        "Seamless integration into existing paramedic workflows"
      ],
      color: "green"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Technical Excellence",
      tagline: "Foundation of trust that makes adoption possible",
      description: "Local-first AI processing, offline capability, and proximity authentication aren't just features - they're the foundation of trust that makes adoption possible.",
      highlights: [
        "Local-first AI processing for data privacy and speed",
        "Offline capability ensuring reliability in remote areas",
        "Proximity authentication for secure, hands-free operation",
        "Enterprise-grade security and compliance standards"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          icon: 'text-blue-400',
          border: 'border-blue-400',
          bg: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
          accent: 'text-blue-400'
        };
      case 'green':
        return {
          icon: 'text-green-400',
          border: 'border-green-400',
          bg: isDark ? 'bg-green-900/20' : 'bg-green-50',
          accent: 'text-green-400'
        };
      case 'purple':
        return {
          icon: 'text-purple-400',
          border: 'border-purple-400',
          bg: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
          accent: 'text-purple-400'
        };
      default:
        return {
          icon: 'text-blue-400',
          border: 'border-blue-400', 
          bg: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
          accent: 'text-blue-400'
        };
    }
  };

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="pitch-enhancement">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Our Pitch: Three Core Differentiators
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-12 ${textSecondary}`}>
        
        <p className={`text-lg text-center ${textSecondary} italic`}>
          "What sets Skribh apart in the crowded healthcare AI landscape"
        </p>

        {pitchPillars.map((pillar, index) => {
          const colors = getColorClasses(pillar.color);
          
          return (
            <div key={index} className={`border-l-4 ${colors.border} ${colors.bg} p-8 rounded-r-lg`}>
              <div className="flex items-start space-x-6">
                <div className={`${colors.icon} flex-shrink-0`}>
                  {pillar.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${textPrimary}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-lg font-medium mb-4 ${colors.accent}`}>
                    {pillar.tagline}
                  </p>
                  <p className={`text-base mb-6 ${textSecondary}`}>
                    {pillar.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillar.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${colors.icon.replace('text-', 'bg-')}`}></div>
                        <span className={`text-sm ${textSecondary}`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Competitive Advantage Summary */}
        <div className={`mt-12 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary} text-center`}>
            Why This Matters for Investors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Stethoscope className="h-8 w-8 mx-auto mb-3 text-blue-400" />
              <h4 className={`font-bold mb-2 ${textPrimary}`}>Domain Expertise</h4>
              <p className={`text-sm ${textSecondary}`}>
                Deep EMS knowledge creates barriers to entry for generic AI competitors
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-green-400" />
              <h4 className={`font-bold mb-2 ${textPrimary}`}>User Adoption</h4>
              <p className={`text-sm ${textSecondary}`}>
                User-centric design ensures high adoption rates and low churn
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-purple-400" />
              <h4 className={`font-bold mb-2 ${textPrimary}`}>Technical Moat</h4>
              <p className={`text-sm ${textSecondary}`}>
                Advanced technical architecture creates sustainable competitive advantages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};