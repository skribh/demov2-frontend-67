import React, { useState } from 'react';
import { AlertTriangle, Eye } from 'lucide-react';

const RiskAnalysis: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const risks = [
    {
      category: "Technical Risk",
      level: "Medium",
      description: "Hardware development complexity and integration challenges",
      mitigation: "Experienced India team, phased development approach, regular testing",
      impact: "Product delays, increased costs"
    },
    {
      category: "Regulatory Risk", 
      level: "High",
      description: "HIPAA compliance and medical device certification requirements",
      mitigation: "Early legal consultation, compliance-first design, certification pathway planning",
      impact: "Market access delays, compliance costs"
    },
    {
      category: "Market Risk",
      level: "Medium", 
      description: "EMS adoption resistance and competitive response",
      mitigation: "Pilot programs, user training, clear ROI demonstration",
      impact: "Slower adoption, pricing pressure"
    },
    {
      category: "Financial Risk",
      level: "Medium",
      description: "Funding gaps and cash flow management",
      mitigation: "Conservative burn rate, milestone-based funding, multiple funding sources",
      impact: "Development delays, team reduction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="py-12">
          <header className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Risk Analysis</h1>
                <p className="text-xl text-gray-600">Identifying and managing potential challenges</p>
              </div>
              <button
                onClick={() => setShowCanvas(!showCanvas)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  showCanvas 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Eye className="h-4 w-4" />
                {showCanvas ? 'Hide Canvas' : 'Show Risk Canvas'}
              </button>
            </div>
          </header>

          <main className="space-y-12">
            {showCanvas ? (
              // Risk Canvas Visualization
              <section className="bg-red-50 p-6 rounded-lg border-2 border-red-500">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Risk Impact & Probability Matrix</h2>
                <div className="relative h-96 bg-gradient-to-br from-green-100 via-yellow-100 to-red-200 rounded-lg overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-x-0 top-1/3 h-px bg-gray-400"></div>
                    <div className="absolute inset-x-0 top-2/3 h-px bg-gray-400"></div>
                    <div className="absolute inset-y-0 left-1/3 w-px bg-gray-400"></div>
                    <div className="absolute inset-y-0 left-2/3 w-px bg-gray-400"></div>
                  </div>
                  
                  {/* Axis Labels */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-700">
                    Probability →
                  </div>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-bold text-gray-700">
                    Impact →
                  </div>
                  
                  {/* Risk Nodes */}
                  <div className="absolute w-20 h-12 bg-red-500 text-white text-xs p-1 rounded shadow-lg" 
                       style={{ left: '75%', top: '20%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Regulatory</div>
                    <div>High/High</div>
                  </div>
                  
                  <div className="absolute w-20 h-12 bg-orange-500 text-white text-xs p-1 rounded shadow-lg"
                       style={{ left: '45%', top: '40%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Technical</div>
                    <div>Med/Med</div>
                  </div>
                  
                  <div className="absolute w-20 h-12 bg-yellow-500 text-white text-xs p-1 rounded shadow-lg"
                       style={{ left: '55%', top: '60%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Market</div>
                    <div>Med/Med</div>
                  </div>
                  
                  <div className="absolute w-20 h-12 bg-orange-500 text-white text-xs p-1 rounded shadow-lg"
                       style={{ left: '35%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Financial</div>
                    <div>Med/Med</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Risk canvas showing probability vs impact matrix. Red zones require immediate attention and mitigation strategies.
                </p>
              </section>
            ) : (
              // Risk Cards
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {risks.map((risk, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900 flex items-center">
                          <AlertTriangle className={`h-5 w-5 mr-2 ${
                            risk.level === 'High' ? 'text-red-500' :
                            risk.level === 'Medium' ? 'text-yellow-500' :
                            'text-green-500'
                          }`} />
                          {risk.category}
                        </h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          risk.level === 'High' ? 'bg-red-100 text-red-800' :
                          risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {risk.level}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-1">Description:</h4>
                          <p className="text-sm text-gray-600">{risk.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-1">Mitigation:</h4>
                          <p className="text-sm text-gray-600">{risk.mitigation}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-1">Potential Impact:</h4>
                          <p className="text-sm text-gray-600">{risk.impact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Risk Management Strategy */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Management Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-bold text-red-600 mb-3 text-lg">Identify</h3>
                  <p className="text-sm text-gray-600">
                    Continuous risk assessment through stakeholder feedback, market analysis, and technical reviews.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-yellow-600 mb-3 text-lg">Mitigate</h3>
                  <p className="text-sm text-gray-600">
                    Proactive strategies including pilot programs, compliance planning, and diversified partnerships.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-green-600 mb-3 text-lg">Monitor</h3>
                  <p className="text-sm text-gray-600">
                    Regular risk reviews, milestone tracking, and adaptive planning to respond to changing conditions.
                  </p>
                </div>
              </div>
            </section>
          </main>

          <footer className="mt-16 py-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500">© 2024 Skribh. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;