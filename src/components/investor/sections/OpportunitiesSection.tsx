import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { TrendingUp, Download, Eye } from 'lucide-react';

export const OpportunitiesSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();
  const [showCanvas, setShowCanvas] = useState(false);

  const opportunities = [
    {
      category: "Market Expansion",
      potential: "High",
      timeframe: "12-18 months",
      description: "Expand beyond EMS to hospitals, urgent care, and international markets",
      requirements: "Product scaling, regulatory approvals, partnership development",
      value: "$50M+ TAM expansion"
    },
    {
      category: "AI Enhancement",
      potential: "High", 
      timeframe: "6-12 months",
      description: "Advanced ML models for predictive analytics and clinical decision support",
      requirements: "Data scientist hiring, model training, clinical validation",
      value: "Premium pricing, competitive differentiation"
    },
    {
      category: "Platform Integration",
      potential: "Medium",
      timeframe: "9-15 months", 
      description: "Deep EHR integrations and API ecosystem development",
      requirements: "Partnership agreements, technical development, certification",
      value: "Sticky customer relationships, recurring revenue"
    },
    {
      category: "Hardware Innovation",
      potential: "Medium",
      timeframe: "18-24 months",
      description: "Next-gen wearables with advanced sensors and longer battery life",
      requirements: "R&D investment, manufacturing partnerships, regulatory approval",
      value: "Technology leadership, patent portfolio"
    }
  ];

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="opportunities">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-3xl font-bold pb-3 border-b transition-colors ${borderClasses}`}>
          Growth Opportunities
        </h2>
        <button
          onClick={() => setShowCanvas(!showCanvas)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            showCanvas 
              ? 'bg-green-500 text-white' 
              : isDark 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Eye className="h-4 w-4" />
          {showCanvas ? 'Hide Canvas' : 'Show Opportunity Map'}
        </button>
      </div>

      {showCanvas ? (
        // Opportunity Canvas Visualization
        <div className={`mb-8 p-6 rounded-lg border-2 border-green-500 ${isDark ? 'bg-gray-900' : 'bg-green-50'}`}>
          <h3 className={`text-xl font-bold mb-4 text-green-600`}>Opportunity Impact & Effort Matrix</h3>
          <div className="relative h-96 bg-gradient-to-br from-red-100 via-yellow-100 to-green-200 rounded-lg overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0">
              <div className="absolute inset-x-0 top-1/3 h-px bg-gray-400"></div>
              <div className="absolute inset-x-0 top-2/3 h-px bg-gray-400"></div>
              <div className="absolute inset-y-0 left-1/3 w-px bg-gray-400"></div>
              <div className="absolute inset-y-0 left-2/3 w-px bg-gray-400"></div>
            </div>
            
            {/* Axis Labels */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-700">
              Effort Required →
            </div>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-bold text-gray-700">
              Impact →
            </div>
            
            {/* Opportunity Nodes */}
            <div className="absolute w-24 h-14 bg-green-500 text-white text-xs p-1 rounded shadow-lg" 
                 style={{ left: '25%', top: '25%', transform: 'translate(-50%, -50%)' }}>
              <div className="font-bold">AI Enhancement</div>
              <div>High Impact / Low Effort</div>
            </div>
            
            <div className="absolute w-24 h-14 bg-blue-500 text-white text-xs p-1 rounded shadow-lg"
                 style={{ left: '75%', top: '25%', transform: 'translate(-50%, -50%)' }}>
              <div className="font-bold">Market Expansion</div>
              <div>High Impact / High Effort</div>
            </div>
            
            <div className="absolute w-24 h-14 bg-yellow-500 text-white text-xs p-1 rounded shadow-lg"
                 style={{ left: '55%', top: '55%', transform: 'translate(-50%, -50%)' }}>
              <div className="font-bold">Platform Integration</div>
              <div>Med Impact / Med Effort</div>
            </div>
            
            <div className="absolute w-24 h-14 bg-orange-500 text-white text-xs p-1 rounded shadow-lg"
                 style={{ left: '75%', top: '75%', transform: 'translate(-50%, -50%)' }}>
              <div className="font-bold">Hardware Innovation</div>
              <div>Med Impact / High Effort</div>
            </div>
            
            {/* Quick Wins Label */}
            <div className="absolute top-4 left-4 text-green-700 font-bold text-sm">Quick Wins</div>
            {/* Major Projects Label */}
            <div className="absolute top-4 right-4 text-blue-700 font-bold text-sm">Major Projects</div>
          </div>
          <p className={`mt-4 text-sm ${textSecondary}`}>
            Opportunity canvas showing impact vs effort matrix. Green zones represent quick wins, blue zones are major strategic initiatives.
          </p>
        </div>
      ) : (
        // Traditional Opportunity List
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((opportunity, index) => (
            <div key={index} className={`p-6 rounded-lg border transition-colors ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-lg font-bold ${textPrimary} flex items-center`}>
                  <TrendingUp className={`h-5 w-5 mr-2 ${
                    opportunity.potential === 'High' ? 'text-green-500' :
                    opportunity.potential === 'Medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  {opportunity.category}
                </h3>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  opportunity.potential === 'High' ? 'bg-green-100 text-green-800' :
                  opportunity.potential === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {opportunity.potential} Potential
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className={`text-sm font-medium ${textPrimary} mb-1`}>Opportunity:</h4>
                  <p className={`text-sm ${textSecondary}`}>{opportunity.description}</p>
                </div>
                
                <div>
                  <h4 className={`text-sm font-medium ${textPrimary} mb-1`}>Requirements:</h4>
                  <p className={`text-sm ${textSecondary}`}>{opportunity.requirements}</p>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <h4 className={`text-sm font-medium ${textPrimary} mb-1`}>Timeline:</h4>
                    <p className={`text-sm ${textSecondary}`}>{opportunity.timeframe}</p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${textPrimary} mb-1`}>Value:</h4>
                    <p className={`text-sm ${textSecondary}`}>{opportunity.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Opportunity Strategy */}
      <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Growth Strategy Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className={`font-bold text-green-400 mb-2`}>Short-term (0-6M)</h4>
            <p className={`text-sm ${textSecondary}`}>
              AI enhancements and core product optimization for immediate competitive advantage.
            </p>
          </div>
          <div>
            <h4 className={`font-bold text-blue-400 mb-2`}>Medium-term (6-12M)</h4>
            <p className={`text-sm ${textSecondary}`}>
              Platform integrations and partnership development for ecosystem expansion.
            </p>
          </div>
          <div>
            <h4 className={`font-bold text-purple-400 mb-2`}>Long-term (12-24M)</h4>
            <p className={`text-sm ${textSecondary}`}>
              Market expansion and hardware innovation for sustained growth and market leadership.
            </p>
          </div>
          <div>
            <h4 className={`font-bold text-orange-400 mb-2`}>Strategic</h4>
            <p className={`text-sm ${textSecondary}`}>
              Continuous evaluation and pivoting based on market feedback and competitive landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
