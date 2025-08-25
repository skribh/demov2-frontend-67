import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GraduationCap, Users, Mic, Code, Globe, ArrowRight, BookOpen, Handshake, Zap } from 'lucide-react';

export const EarlyAdoptionExpansionSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  const earlyAdoptionStrategies = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Partner with Paramedic Schools",
      description: "Target future paramedics during their training phase",
      details: [
        "Integrate Skribh into paramedic training curricula",
        "Create familiarity with AI documentation tools early",
        "Build brand loyalty before career decisions are made",
        "Establish feedback loops for product improvement"
      ],
      timeline: "0-6 months",
      impact: "High - builds long-term user base"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Early Career Paramedic Programs", 
      description: "Focus on new graduates and career-switchers",
      details: [
        "Specialized onboarding for new paramedics",
        "Reduced learning curve compared to legacy systems",
        "Career development partnerships",
        "Mentorship programs linking students to experienced users"
      ],
      timeline: "3-9 months",
      impact: "Medium - accelerates adoption"
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Verbalization Training",
      description: "Address the key question: Will paramedics verbalize enough?",
      details: [
        "Training programs on effective verbal documentation",
        "Best practices for ambient AI interaction",
        "Workflow optimization for voice-first documentation",
        "Behavioral change management and incentives"
      ],
      timeline: "Ongoing",
      impact: "Critical - ensures product effectiveness"
    }
  ];

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
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="early-adoption-expansion">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Early Adoption & Expansion Strategy
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        
        {/* Early Adoption Strategy */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-blue-400" />
            <h3 className={`text-xl font-semibold ${textPrimary}`}>Early Adoption Strategy</h3>
          </div>
          
          <p className={`mb-6 ${textSecondary}`}>
            Our early adoption strategy focuses on capturing the next generation of paramedics while 
            they're still in training, creating lasting habits and brand loyalty from the start of their careers.
          </p>

          <div className="space-y-6">
            {earlyAdoptionStrategies.map((strategy, index) => (
              <div key={index} className={`p-6 rounded-lg border transition-colors ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    {strategy.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-lg font-bold ${textPrimary}`}>
                        {strategy.title}
                      </h4>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        strategy.impact.includes('High') ? 'bg-green-100 text-green-800' :
                        strategy.impact.includes('Critical') ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {strategy.timeline}
                      </span>
                    </div>
                    <p className={`text-sm mb-4 ${textSecondary}`}>
                      {strategy.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                      {strategy.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <ArrowRight className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className={`text-sm ${textSecondary}`}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className={`text-xs italic ${textSecondary}`}>
                      {strategy.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Success Factor */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-orange-900/20' : 'bg-orange-50'} border-l-4 border-orange-400`}>
          <div className="flex items-center space-x-3 mb-4">
            <Mic className="h-6 w-6 text-orange-400" />
            <h3 className={`text-lg font-bold ${textPrimary}`}>Critical Success Factor</h3>
          </div>
          <p className={`${textSecondary} mb-4`}>
            <strong>Will paramedics verbalize enough?</strong> This is the fundamental question that determines 
            our product's success. Our early adoption strategy specifically addresses this through training 
            and behavior change programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className={`font-semibold mb-2 ${textPrimary}`}>Challenges</h4>
              <ul className={`text-sm space-y-1 ${textSecondary}`}>
                <li>• Natural tendency to work silently</li>
                <li>• High-stress environments</li>
                <li>• Existing workflow habits</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${textPrimary}`}>Solutions</h4>
              <ul className={`text-sm space-y-1 ${textSecondary}`}>
                <li>• Structured verbalization training</li>
                <li>• Positive reinforcement systems</li>
                <li>• Integration with existing protocols</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expansion Plans */}
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