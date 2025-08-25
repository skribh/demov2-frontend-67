import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { HelpCircle, Target, Users, Clock, MessageSquare, Brain, TrendingUp } from 'lucide-react';

export const ProductMarketFitSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  const keyQuestions = [
    {
      icon: <Clock className="h-6 w-6" />,
      question: "What specific documentation tasks cause the most delays?",
      rationale: "Understanding pain points helps prioritize feature development and measure impact",
      insights: [
        "Identifying bottlenecks in current workflows",
        "Measuring time savings potential",
        "Prioritizing automation features",
        "Quantifying ROI for customers"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      question: "How do paramedics currently handle difficult patient interactions while documenting?",
      rationale: "Critical for designing ambient AI that works in real-world, high-stress scenarios",
      insights: [
        "Understanding multitasking challenges",
        "Designing for high-stress environments",
        "Ensuring patient care isn't compromised",
        "Optimizing voice recognition accuracy"
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      question: "What information is typically forgotten or missed during busy shifts?",
      rationale: "Addresses key value proposition of comprehensive, automated documentation",
      insights: [
        "Identifying common documentation gaps",
        "Building intelligent prompting systems", 
        "Ensuring compliance completeness",
        "Reducing liability and audit risks"
      ]
    }
  ];

  const pmfIndicators = [
    {
      metric: "Documentation Time Reduction",
      target: "70%+",
      status: "Achieved in pilots",
      color: "green"
    },
    {
      metric: "User Adoption Rate", 
      target: "85%+",
      status: "Tracking",
      color: "blue"
    },
    {
      metric: "Customer Satisfaction",
      target: "4.5/5",
      status: "Measuring",
      color: "purple"
    },
    {
      metric: "Documentation Accuracy",
      target: "95%+", 
      status: "Validating",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'green':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'orange':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="product-market-fit">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Product-Market Fit Validation
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        
        <div className={`p-6 rounded-lg ${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} border-l-4 border-blue-400`}>
          <div className="flex items-center space-x-3 mb-4">
            <Target className="h-6 w-6 text-blue-400" />
            <h3 className={`text-xl font-bold ${textPrimary}`}>PMF Validation Framework</h3>
          </div>
          <p className={`${textSecondary}`}>
            Our product-market fit validation focuses on understanding real-world paramedic workflows 
            and measuring concrete improvements in their daily operations. We validate demand before 
            scaling to minimize risk and maximize product-market alignment.
          </p>
        </div>

        {/* Key Questions */}
        <div>
          <h3 className={`text-xl font-semibold mb-6 ${textPrimary}`}>Key Research Questions</h3>
          <div className="space-y-6">
            {keyQuestions.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg border transition-colors ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 ${textPrimary}`}>
                      {item.question}
                    </h4>
                    <p className={`text-sm mb-4 ${textSecondary} italic`}>
                      {item.rationale}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.insights.map((insight, insightIndex) => (
                        <div key={insightIndex} className="flex items-center space-x-2">
                          <HelpCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          <span className={`text-sm ${textSecondary}`}>
                            {insight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PMF Metrics Dashboard */}
        <div>
          <h3 className={`text-xl font-semibold mb-6 ${textPrimary}`}>PMF Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pmfIndicators.map((indicator, index) => (
              <div key={index} className={`p-4 rounded-lg border text-center transition-colors ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <TrendingUp className="h-6 w-6 mx-auto mb-3 text-blue-400" />
                <h4 className={`font-bold ${textPrimary} mb-2`}>
                  {indicator.metric}
                </h4>
                <p className={`text-2xl font-bold text-blue-400 mb-2`}>
                  {indicator.target}
                </p>
                <span className={`text-xs px-3 py-1 rounded-full border ${getColorClasses(indicator.color)}`}>
                  {indicator.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Methodology */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Validation Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className={`font-bold text-green-400 mb-2`}>Pilot Programs</h4>
              <p className={`text-sm ${textSecondary}`}>
                Direct deployment with EMS departments to measure real-world performance and gather feedback.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-blue-400 mb-2`}>User Interviews</h4>
              <p className={`text-sm ${textSecondary}`}>
                Regular interviews with paramedics to understand workflow challenges and solution effectiveness.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-purple-400 mb-2`}>Metrics Analysis</h4>
              <p className={`text-sm ${textSecondary}`}>
                Continuous monitoring of key performance indicators to validate product-market fit.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className={`border-l-4 border-orange-400 pl-6 ${isDark ? 'bg-orange-900/20' : 'bg-orange-50'} p-4 rounded-r-lg`}>
          <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>PMF Risk Mitigation</h3>
          <p className={`${textSecondary}`}>
            By validating product-market fit through systematic research and pilot programs, 
            we minimize the risk of scaling a product that doesn't meet real market needs. 
            This approach ensures investor capital is deployed efficiently and effectively.
          </p>
        </div>
      </div>
    </section>
  );
};