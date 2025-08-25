import React from 'react';
import { TrendingUp, Target, Users, BarChart3, Zap, Globe } from 'lucide-react';

export const MarketSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">The Market</h2>
      
      <h3 className="text-lg font-semibold mb-2">Product-Market Fit</h3>
      <p className="mb-4">
        The healthcare documentation crisis represents a massive market opportunity. Medical professionals
        spend 40-60% of their time on paperwork instead of patient care, creating a clear demand for
        automated solutions. Our AI-driven approach directly addresses this pain point with measurable
        time savings and improved accuracy.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Traction</h3>
      <p className="mb-4">
        We have demonstrated strong early traction with pilot programs showing 50% reduction in
        documentation time and 95% accuracy rates. Healthcare providers report significant improvement
        in workflow efficiency and job satisfaction when using our platform.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">User Acquisition</h3>
      <p className="mb-4">
        Our go-to-market strategy focuses on direct sales to EMS providers, healthcare systems, and
        medical practices. We leverage industry partnerships and referral networks to scale adoption
        efficiently within the healthcare ecosystem.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Pricing Strategy</h3>
      <p className="mb-4">
        Our subscription-based pricing model is designed to deliver immediate ROI for customers while
        scaling with their usage. Pricing tiers accommodate everything from small medical practices
        to large healthcare systems, with enterprise features for advanced analytics and integration.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Market Size</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Global EMS software market: $9.3B projected by 2028</li>
        <li>Healthcare documentation efficiency market growing at 8.7% CAGR</li>
        <li>Target addressable market: $2.5B in documentation automation</li>
        <li>Immediate serviceable market: $500M in EMS and urgent care</li>
      </ul>

      {/* Additional content from new-site */}
      <div className="mt-6 space-y-4">
        
        {/* Market Size Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Market Size Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-1 text-gray-600">TAM</h4>
              <p className="text-3xl font-bold mb-1">$45B</p>
              <p className="text-sm text-gray-600">Healthcare Documentation</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-1 text-gray-600">SAM</h4>
              <p className="text-3xl font-bold mb-1">$15B</p>
              <p className="text-sm text-gray-600">AI Healthcare Solutions</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-1 text-gray-600">SOM</h4>
              <p className="text-3xl font-bold mb-1">$500M</p>
              <p className="text-sm text-gray-600">Ambient AI Documentation</p>
            </div>
          </div>
        </div>

        {/* Traction Generation */}
        <div className="p-4 border-l-4 border-green-400">
          <div className="flex items-center space-x-3 mb-2">
            <TrendingUp className="h-5 w-5" />
            <h3 className="text-lg font-bold">Traction Generation</h3>
          </div>
          <p className="mb-2">
            Like CareSwift's EPCR reports strategy, we're following proven market entry strategies to establish 
            initial customer base and demonstrate market demand through strategic partnerships and pilot programs.
          </p>
          <p>
            Skribh is actively building traction in the healthcare AI documentation space through
            strategic partnerships, pilot programs, and continued product development.
          </p>
        </div>

        {/* Product-Market Fit Validation */}
        <div className="p-4 border-l-4 border-blue-400">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="h-5 w-5" />
            <h3 className="text-lg font-bold">Product-Market Fit Validation</h3>
          </div>
          <p className="mb-3">
            Our product-market fit validation focuses on understanding real-world paramedic workflows 
            and measuring concrete improvements in their daily operations.
          </p>
          
          {/* PMF Success Metrics */}
          <div>
            <h4 className="font-semibold mb-2">PMF Success Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3 border rounded-lg text-center">
                <BarChart3 className="h-4 w-4 mx-auto mb-2" />
                <h5 className="font-bold mb-1 text-sm">Documentation Time Reduction</h5>
                <p className="text-lg font-bold mb-1">70%+</p>
                <span className="text-xs px-2 py-1 rounded-full border bg-green-100 text-green-800">Achieved in pilots</span>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <BarChart3 className="h-4 w-4 mx-auto mb-2" />
                <h5 className="font-bold mb-1 text-sm">User Adoption Rate</h5>
                <p className="text-lg font-bold mb-1">85%+</p>
                <span className="text-xs px-2 py-1 rounded-full border bg-blue-100 text-blue-800">Tracking</span>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <BarChart3 className="h-4 w-4 mx-auto mb-2" />
                <h5 className="font-bold mb-1 text-sm">Customer Satisfaction</h5>
                <p className="text-lg font-bold mb-1">4.5/5</p>
                <span className="text-xs px-2 py-1 rounded-full border bg-purple-100 text-purple-800">Measuring</span>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <BarChart3 className="h-4 w-4 mx-auto mb-2" />
                <h5 className="font-bold mb-1 text-sm">Documentation Accuracy</h5>
                <p className="text-lg font-bold mb-1">95%+</p>
                <span className="text-xs px-2 py-1 rounded-full border bg-orange-100 text-orange-800">Validating</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Acquisition Strategy */}
        <div className="p-4 border-l-4 border-purple-400">
          <div className="flex items-center space-x-3 mb-2">
            <Users className="h-5 w-5" />
            <h3 className="text-lg font-bold">User Acquisition Strategy</h3>
          </div>
          <p className="mb-3">
            Strategic customer acquisition approach targeting early adopters and expanding through proven channels.
            Focused acquisition strategy that builds sustainable growth engines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-1">Early Adoption Focus</h4>
              <p className="text-sm">
                Partner with paramedic schools and target new graduates to build long-term user base and brand loyalty.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Scalable Growth</h4>
              <p className="text-sm">
                Building sustainable growth engines that can scale efficiently with capital investment.
              </p>
            </div>
          </div>
        </div>

        {/* Market Trends & Growth Strategy */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Market Trends & Growth Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">Market Trends</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Increasing adoption of AI-powered healthcare solutions and ambient computing.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Growing focus on clinician burnout reduction and workflow optimization.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Regulatory support for AI in healthcare with clear HIPAA compliance frameworks.</span>
                </li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">Early Adoption & Expansion</h4>
              <p className="text-sm mb-3">
                Our early adoption strategy focuses on capturing the next generation of paramedics while 
                they're still in training, creating lasting habits and brand loyalty.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Partner with paramedic schools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">API economy entry for rapid growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Strategic partnerships for market expansion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};