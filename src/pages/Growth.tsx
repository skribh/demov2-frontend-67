import React, { useState } from 'react';
import { TrendingUp, Eye, Target, Clock, DollarSign, Lightbulb, Zap, Shield, Globe } from 'lucide-react';

const Verticals: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const opportunities = [
    {
      category: "Market Expansion",
      potential: "High",
      timeframe: "12-18 months",
      description: "Expand beyond EMS to hospitals, urgent care, and international markets",
      requirements: "Product scaling, regulatory approvals, partnership development",
      value: "$50M+ TAM expansion",
      icon: Globe,
      color: "emerald"
    },
    {
      category: "AI Enhancement",
      potential: "High", 
      timeframe: "6-12 months",
      description: "Advanced ML models for predictive analytics and clinical decision support",
      requirements: "Data scientist hiring, model training, clinical validation",
      value: "Premium pricing, competitive differentiation",
      icon: Zap,
      color: "blue"
    },
    {
      category: "Platform Integration",
      potential: "Medium",
      timeframe: "9-15 months", 
      description: "Deep EHR integrations and API ecosystem development",
      requirements: "Partnership agreements, technical development, certification",
      value: "Sticky customer relationships, recurring revenue",
      icon: Shield,
      color: "purple"
    },
    {
      category: "Hardware Innovation",
      potential: "Medium",
      timeframe: "18-24 months",
      description: "Next-gen wearables with advanced sensors and longer battery life",
      requirements: "R&D investment, manufacturing partnerships, regulatory approval",
      value: "Technology leadership, patent portfolio",
      icon: Lightbulb,
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-16">
          <header className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Growth Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Strategic initiatives to expand our market reach, enhance capabilities, and drive sustainable growth in the healthcare technology sector
            </p>
            <button
              onClick={() => setShowCanvas(!showCanvas)}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                showCanvas 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              <Eye className="h-5 w-5" />
              {showCanvas ? 'Hide Strategic Canvas' : 'Show Opportunity Matrix'}
            </button>
          </header>

          <main className="space-y-12">
            {showCanvas ? (
              // Opportunity Canvas Visualization
              <section className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-2xl border border-emerald-200 shadow-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-2">Strategic Opportunity Matrix</h2>
                  <p className="text-emerald-600">Impact vs. Implementation Effort Analysis</p>
                </div>
                
                <div className="relative h-[500px] bg-white rounded-xl shadow-inner overflow-hidden border">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-x-0 top-1/3 h-px bg-gray-300"></div>
                    <div className="absolute inset-x-0 top-2/3 h-px bg-gray-300"></div>
                    <div className="absolute inset-y-0 left-1/3 w-px bg-gray-300"></div>
                    <div className="absolute inset-y-0 left-2/3 w-px bg-gray-300"></div>
                  </div>
                  
                  {/* Quadrant Background Colors */}
                  <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-50"></div>
                  <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-yellow-50"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50"></div>
                  <div className="absolute bottom-2/3 left-0 w-1/3 h-1/3 bg-blue-50"></div>
                  <div className="absolute bottom-2/3 left-1/3 w-1/3 h-1/3 bg-purple-50"></div>
                  <div className="absolute bottom-2/3 right-0 w-1/3 h-1/3 bg-pink-50"></div>
                  <div className="absolute bottom-1/3 left-0 w-1/3 h-1/3 bg-green-50"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1/3 h-1/3 bg-emerald-50"></div>
                  <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-cyan-50"></div>
                  
                  {/* Axis Labels */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full shadow">
                    Implementation Effort →
                  </div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full shadow">
                    Business Impact ↑
                  </div>
                  
                  {/* Opportunity Nodes */}
                  <div className="absolute w-32 h-16 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs p-2 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer" 
                       style={{ left: '25%', top: '20%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">AI Enhancement</div>
                    <div className="text-xs opacity-90">Quick Win</div>
                  </div>
                  
                  <div className="absolute w-32 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs p-2 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                       style={{ left: '75%', top: '20%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Market Expansion</div>
                    <div className="text-xs opacity-90">Strategic Initiative</div>
                  </div>
                  
                  <div className="absolute w-32 h-16 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs p-2 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                       style={{ left: '55%', top: '55%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Platform Integration</div>
                    <div className="text-xs opacity-90">Core Development</div>
                  </div>
                  
                  <div className="absolute w-32 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs p-2 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                       style={{ left: '75%', top: '80%', transform: 'translate(-50%, -50%)' }}>
                    <div className="font-bold">Hardware Innovation</div>
                    <div className="text-xs opacity-90">Future Investment</div>
                  </div>
                  
                  {/* Quadrant Labels */}
                  <div className="absolute top-6 left-6 text-emerald-700 font-bold text-sm bg-white/80 px-2 py-1 rounded">Quick Wins</div>
                  <div className="absolute top-6 right-6 text-blue-700 font-bold text-sm bg-white/80 px-2 py-1 rounded">Major Projects</div>
                  <div className="absolute bottom-6 left-6 text-gray-600 font-bold text-sm bg-white/80 px-2 py-1 rounded">Fill-ins</div>
                  <div className="absolute bottom-6 right-6 text-orange-700 font-bold text-sm bg-white/80 px-2 py-1 rounded">Questionable</div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-xl">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Strategic Matrix Guide:</strong> Green quadrant represents high-impact, low-effort opportunities (Quick Wins). 
                    Blue quadrant shows high-impact, high-effort initiatives (Major Projects). Focus resources on green and blue zones for maximum ROI.
                  </p>
                </div>
              </section>
            ) : (
              // Opportunity Cards
              <section>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Growth Opportunities</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Comprehensive analysis of key growth vectors with detailed implementation roadmaps and expected outcomes
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {opportunities.map((opportunity, index) => {
                    const IconComponent = opportunity.icon;

                    return (
                      <div key={index} className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                        {/* Header with gradient */}
                        <div className={`bg-gradient-to-r ${
                          opportunity.color === 'emerald' ? 'from-emerald-500 to-green-600' :
                          opportunity.color === 'blue' ? 'from-blue-500 to-indigo-600' :
                          opportunity.color === 'purple' ? 'from-purple-500 to-violet-600' :
                          'from-orange-500 to-red-500'
                        } p-6 text-white relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                          
                          <div className="flex items-start justify-between relative z-10">
                            <div className="flex items-center space-x-3">
                              <div className="bg-white/20 p-3 rounded-xl">
                                <IconComponent className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{opportunity.category}</h3>
                                <p className="text-white/80 text-sm">Strategic Initiative</p>
                              </div>
                            </div>
                            <span className="bg-white/20 px-3 py-1 text-xs font-medium rounded-full">
                              {opportunity.potential} Impact
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Target className="h-4 w-4 text-gray-400" />
                              <h4 className="text-sm font-semibold text-gray-900">Opportunity</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{opportunity.description}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Shield className="h-4 w-4 text-gray-400" />
                              <h4 className="text-sm font-semibold text-gray-900">Requirements</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{opportunity.requirements}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              <div className="bg-gray-100 p-2 rounded-lg">
                                <Clock className="h-4 w-4 text-gray-600" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 font-medium">Timeline</p>
                                <p className="text-sm font-semibold text-gray-900">{opportunity.timeframe}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <div className="bg-gray-100 p-2 rounded-lg">
                                <DollarSign className="h-4 w-4 text-gray-600" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 font-medium">Expected Value</p>
                                <p className="text-sm font-semibold text-gray-900">{opportunity.value}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Growth Strategy Framework */}
            <section className="bg-gradient-to-r from-gray-50 to-slate-100 p-8 rounded-2xl border border-gray-200">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Strategic Execution Framework</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Phased approach to implementing growth opportunities with clear timelines and success metrics
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-green-700 mb-3 text-lg text-center">Phase 1: Quick Wins</h3>
                  <div className="text-center mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">0-6 Months</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    AI enhancements and core product optimization for immediate competitive advantage and revenue impact.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-blue-700 mb-3 text-lg text-center">Phase 2: Foundation</h3>
                  <div className="text-center mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">6-12 Months</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Platform integrations and partnership development for ecosystem expansion and market penetration.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-purple-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-purple-700 mb-3 text-lg text-center">Phase 3: Expansion</h3>
                  <div className="text-center mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">12-24 Months</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    ✅Market ✅Market✅Market✅Marketv✅Market✅Marketvvvvexpansion and hardware innovation for sustained growth and market leadership position.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4 mx-auto">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-orange-700 mb-3 text-lg text-center">Phase 4: Innovation</h3>
                  <div className="text-center mb-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Ongoing</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Continuous evaluation and pivoting based on market feedback and competitive landscape analysis.
                  </p>
                </div>
              </div>
              
              {/* Timeline visualization */}
              <div className="mt-10">
                <div className="relative">
                  <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-green-200 via-blue-200 via-purple-200 to-orange-200 rounded-full"></div>
                  <div className="flex justify-between items-center relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Start</span>
                  <span>6M</span>
                  <span>12M</span>
                  <span>24M+</span>
                </div>
              </div>
            </section>

            {/* Future Section */}
            <section className="p-8 rounded-lg shadow-lg mb-16 transition-colors bg-white border border-gray-200" id="future">
              <h2 className="text-3xl font-bold mb-6 pb-3 border-b border-gray-200">
                Future
              </h2>
              <div className="text-base leading-relaxed space-y-8 text-gray-600">
                
                {/* Expansion Roadmap */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Zap className="h-6 w-6 text-purple-400" />
                    <h3 className="text-xl font-semibold text-gray-900">Expansion Roadmap</h3>
                  </div>
                  
                  <p className="mb-6 text-gray-600">
                    Our expansion strategy is built around three key phases, with the API economy as our primary 
                    accelerator for rapid growth and market penetration.
                  </p>

                  <div className="space-y-6">
                    {/* API Economy Entry */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                      <div className="flex items-start space-x-4">
                        <div className="text-blue-400 mt-1">
                          <Target className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">
                              API Economy Entry
                            </h4>
                            <span className="text-xs px-3 py-1 rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                              Phase 1
                            </span>
                          </div>
                          <p className="text-sm mb-4 text-gray-600">
                            Build machine learning team for rapid API development
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-blue-400"></div>
                              <span className="text-sm text-gray-600">
                                Hire specialized ML engineering team
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-blue-400"></div>
                              <span className="text-sm text-gray-600">
                                Develop robust API infrastructure
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-blue-400"></div>
                              <span className="text-sm text-gray-600">
                                Create developer-friendly documentation
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-blue-400"></div>
                              <span className="text-sm text-gray-600">
                                Establish partner integration programs
                              </span>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-blue-400">
                            💡 Opens new revenue streams and partnerships
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Market Expansion */}
                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                      <div className="flex items-start space-x-4">
                        <div className="text-green-400 mt-1">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">
                              Market Expansion
                            </h4>
                            <span className="text-xs px-3 py-1 rounded-full text-green-400 bg-green-400 bg-opacity-20">
                              Phase 2
                            </span>
                          </div>
                          <p className="text-sm mb-4 text-gray-600">
                            Beyond EMS to adjacent healthcare markets
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-green-400"></div>
                              <span className="text-sm text-gray-600">
                                Hospitals and urgent care centers
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-green-400"></div>
                              <span className="text-sm text-gray-600">
                                Specialty medical practices
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-green-400"></div>
                              <span className="text-sm text-gray-600">
                                International healthcare systems
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-green-400"></div>
                              <span className="text-sm text-gray-600">
                                Telemedicine platforms
                              </span>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-green-400">
                            💡 Multiplies addressable market size
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Strategic Partnerships */}
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                      <div className="flex items-start space-x-4">
                        <div className="text-purple-400 mt-1">
                          <Shield className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">
                              Strategic Partnerships
                            </h4>
                            <span className="text-xs px-3 py-1 rounded-full text-purple-400 bg-purple-400 bg-opacity-20">
                              Phase 3
                            </span>
                          </div>
                          <p className="text-sm mb-4 text-gray-600">
                            Ecosystem expansion through key partnerships
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-purple-400"></div>
                              <span className="text-sm text-gray-600">
                                EHR vendor partnerships
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-purple-400"></div>
                              <span className="text-sm text-gray-600">
                                Medical device integrations
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-purple-400"></div>
                              <span className="text-sm text-gray-600">
                                Healthcare system partnerships
                              </span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full mt-2 bg-purple-400"></div>
                              <span className="text-sm text-gray-600">
                                Technology platform alliances
                              </span>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-purple-400">
                            💡 Creates sustainable competitive moats
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Timeline */}
                <div className="p-6 rounded-lg bg-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-green-400 mb-2">Year 1: Foundation</h4>
                      <p className="text-sm text-gray-600">
                        School partnerships, early adoption programs, and verbalization training systems.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-400 mb-2">Year 2: Scale</h4>
                      <p className="text-sm text-gray-600">
                        API economy entry, ML team development, and initial market expansion.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-400 mb-2">Year 3+: Dominate</h4>
                      <p className="text-sm text-gray-600">
                        Strategic partnerships, international expansion, and ecosystem leadership.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </main>

          <footer className="mt-20 py-12 bg-gradient-to-r from-slate-900 to-gray-900 rounded-2xl text-white">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2"> this is the super design file Ready to Execute Your Growth Strategy?</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Transform these opportunities into measurable business outcomes with our strategic implementation framework.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400">© 2024 Skribh. All Rights Reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Verticals;