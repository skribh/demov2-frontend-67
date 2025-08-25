import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Package, Plus, Gift, BarChart3, Users } from 'lucide-react';

export const PricingStrategySection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  const pricingTiers = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Documentation Product",
      type: "Standalone Entry Point",
      description: "Core AI documentation solution as the primary market entry vehicle",
      features: [
        "Real-time transcription",
        "HIPAA-compliant processing", 
        "Basic report generation",
        "Standard integrations"
      ],
      positioning: "Primary market entry - proven value proposition"
    },
    {
      icon: <Plus className="h-6 w-6" />,
      title: "QA/QI Product", 
      type: "Premium Add-on",
      description: "Advanced quality assurance and quality improvement analytics",
      features: [
        "Advanced analytics dashboard",
        "Performance metrics tracking",
        "Compliance monitoring",
        "Predictive insights"
      ],
      positioning: "Premium upsell - higher margins"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Bundle Solution",
      type: "Combined Discount",
      description: "Comprehensive package with attractive bundle pricing",
      features: [
        "Full documentation suite",
        "Complete QA/QI analytics",
        "Priority support",
        "Advanced integrations"
      ],
      positioning: "Maximum customer value - reduced churn"
    }
  ];

  const volumeTiers = [
    { range: "1-50 calls/month", price: "$299", target: "Small EMS services" },
    { range: "51-200 calls/month", price: "$799", target: "Medium departments" },
    { range: "201-500 calls/month", price: "$1,499", target: "Large departments" },
    { range: "500+ calls/month", price: "Custom", target: "Enterprise accounts" }
  ];

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="pricing-strategy">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Pricing Strategy
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        
        {/* Bundling Strategy */}
        <div>
          <h3 className={`text-xl font-semibold mb-6 ${textPrimary}`}>Bundling Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`p-6 rounded-lg border transition-colors ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-400">
                    {tier.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${textPrimary}`}>
                      {tier.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                      {tier.type}
                    </p>
                  </div>
                </div>
                
                <p className={`text-sm mb-4 ${textSecondary}`}>
                  {tier.description}
                </p>
                
                <ul className={`text-sm space-y-1 mb-4 ${textSecondary}`}>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={`text-xs px-3 py-2 rounded-full ${
                  index === 0 ? 'bg-green-100 text-green-800' :
                  index === 1 ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {tier.positioning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tiered Pricing by Volume */}
        <div>
          <h3 className={`text-xl font-semibold mb-6 ${textPrimary}`}>Tiered Pricing Based on Call Volume</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {volumeTiers.map((tier, index) => (
              <div key={index} className={`p-4 rounded-lg border text-center transition-colors ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="text-blue-400 mb-2">
                  <BarChart3 className="h-6 w-6 mx-auto" />
                </div>
                <h4 className={`font-bold ${textPrimary} mb-1`}>
                  {tier.range}
                </h4>
                <p className={`text-2xl font-bold text-blue-400 mb-2`}>
                  {tier.price}
                </p>
                <p className={`text-xs ${textSecondary}`}>
                  {tier.target}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Focus */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Marketing Positioning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Users className="h-5 w-5 text-green-400" />
                <h4 className={`font-bold text-green-400`}>Primary Focus</h4>
              </div>
              <h5 className={`font-semibold mb-2 ${textPrimary}`}>Paramedic Experience First</h5>
              <p className={`text-sm ${textSecondary}`}>
                Lead with how the solution improves daily workflows, reduces documentation burden, 
                and enhances job satisfaction for front-line paramedics.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <h4 className={`font-bold text-blue-400`}>Secondary Benefits</h4>
              </div>
              <h5 className={`font-semibold mb-2 ${textPrimary}`}>Administrative Benefits Second</h5>
              <p className={`text-sm ${textSecondary}`}>
                Support with operational efficiency, compliance improvements, and cost savings 
                for management and administrative stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Rationale */}
        <div className={`border-l-4 border-blue-400 pl-6 ${isDark ? 'bg-gray-900' : 'bg-blue-50'} p-4 rounded-r-lg`}>
          <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>Strategic Rationale</h3>
          <p className={`${textSecondary}`}>
            This bundling approach creates multiple revenue streams while allowing customers to start 
            with our core value proposition. The tiered volume pricing ensures scalability and 
            fair pricing across different organization sizes, while our user-first marketing 
            approach drives adoption from the bottom up.
          </p>
        </div>
      </div>
    </section>
  );
};