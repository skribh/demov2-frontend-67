import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Zap, Code, Globe, Handshake, ArrowRight, TrendingUp } from 'lucide-react';

export const FutureSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  const expansionPlans = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Economy Entry",
      description: "Build machine learning team for rapid API development",
      phase: "Phase 1",
      details: [
        "Hire specialized ML engineering team",
        "Develop robust API infrastructure",
        "Create developer-friendly documentation",
        "Establish partner integration programs"
      ],
      value: "Opens new revenue streams and partnerships",
      color: "blue"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Market Expansion",
      description: "Beyond EMS to adjacent healthcare markets",
      phase: "Phase 2", 
      details: [
        "Hospitals and urgent care centers",
        "Specialty medical practices",
        "International healthcare systems",
        "Telemedicine platforms"
      ],
      value: "Multiplies addressable market size",
      color: "green"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Strategic Partnerships",
      description: "Ecosystem expansion through key partnerships",
      phase: "Phase 3",
      details: [
        "EHR vendor partnerships",
        "Medical device integrations", 
        "Healthcare system partnerships",
        "Technology platform alliances"
      ],
      value: "Creates sustainable competitive moats",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          bg: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
          border: 'border-l-4 border-blue-400',
          accent: 'text-blue-400'
        };
      case 'green':
        return {
          bg: isDark ? 'bg-green-900/20' : 'bg-green-50', 
          border: 'border-l-4 border-green-400',
          accent: 'text-green-400'
        };
      case 'purple':
        return {
          bg: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
          border: 'border-l-4 border-purple-400', 
          accent: 'text-purple-400'
        };
      default:
        return {
          bg: isDark ? 'bg-gray-800' : 'bg-gray-100',
          border: 'border-l-4 border-gray-400',
          accent: 'text-gray-400'
        };
    }
  };

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="expansion-roadmap">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Future
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        
        {/* Expansion Roadmap */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-6 w-6 text-purple-400" />
            <h3 className={`text-xl font-semibold ${textPrimary}`}>Expansion Roadmap</h3>
          </div>
          
          <p className={`mb-6 ${textSecondary}`}>
            Our expansion strategy is built around three key phases, with the API economy as our primary 
            accelerator for rapid growth and market penetration.
          </p>

          <div className="space-y-6">
            {expansionPlans.map((plan, index) => {
              const colors = getColorClasses(plan.color);
              
              return (
                <div key={index} className={`${colors.bg} ${colors.border} p-6 rounded-r-lg`}>
                  <div className="flex items-start space-x-4">
                    <div className={`${colors.accent} mt-1`}>
                      {plan.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`text-lg font-bold ${textPrimary}`}>
                          {plan.title}
                        </h4>
                        <span className={`text-xs px-3 py-1 rounded-full ${colors.accent} bg-current bg-opacity-20`}>
                          {plan.phase}
                        </span>
                      </div>
                      <p className={`text-sm mb-4 ${textSecondary}`}>
                        {plan.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {plan.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full mt-2 ${colors.accent.replace('text-', 'bg-')}`}></div>
                            <span className={`text-sm ${textSecondary}`}>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className={`text-sm font-medium ${colors.accent}`}>
                        💡 {plan.value}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Timeline */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Strategic Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className={`font-bold text-green-400 mb-2`}>Year 1: Foundation</h4>
              <p className={`text-sm ${textSecondary}`}>
                School partnerships, early adoption programs, and verbalization training systems.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-blue-400 mb-2`}>Year 2: Scale</h4>
              <p className={`text-sm ${textSecondary}`}>
                API economy entry, ML team development, and initial market expansion.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-purple-400 mb-2`}>Year 3+: Dominate</h4>
              <p className={`text-sm ${textSecondary}`}>
                Strategic partnerships, international expansion, and ecosystem leadership.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};