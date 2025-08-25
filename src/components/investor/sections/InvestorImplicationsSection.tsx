import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { TrendingUp, Target, Users, Shield } from 'lucide-react';

export const InvestorImplicationsSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  const implications = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Traction Generation",
      description: "Like CareSwift's EPCR reports strategy",
      details: "Following proven market entry strategies to establish initial customer base and demonstrate market demand."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Product-Market Fit",
      description: "Prove demand before scaling",
      details: "Systematic validation approach ensuring strong PMF before major scaling investments to minimize risk."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Acquisition",
      description: "Strategic customer acquisition approach",
      details: "Focused acquisition strategy targeting early adopters and expanding through proven channels."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Competitive Moat",
      description: "Building sustainable competitive advantages",
      details: "Developing defensible market position through technology leadership and customer lock-in effects."
    }
  ];

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="investor-implications">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Investor Implications
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        <p className={`text-lg ${textSecondary}`}>
          Key strategic considerations for investors evaluating Skribh's market opportunity 
          and growth potential in the healthcare AI documentation space.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {implications.map((implication, index) => (
            <div key={index} className={`p-6 rounded-lg border transition-colors ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 mt-1">
                  {implication.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>
                    {implication.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    {implication.description}
                  </p>
                  <p className={`text-sm ${textSecondary}`}>
                    {implication.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Investment Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className={`font-bold text-green-400 mb-2`}>Market Validation</h4>
              <p className={`text-sm ${textSecondary}`}>
                Continuous validation of product-market fit through customer feedback and usage metrics.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-blue-400 mb-2`}>Scalable Growth</h4>
              <p className={`text-sm ${textSecondary}`}>
                Building sustainable growth engines that can scale efficiently with capital investment.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-purple-400 mb-2`}>Competitive Defense</h4>
              <p className={`text-sm ${textSecondary}`}>
                Establishing defensible market position through technology and customer relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};