import React from 'react';
import { AlertTriangle, Mic, Shield, TrendingDown } from 'lucide-react';

export const RisksSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" id="risks">Risks</h2>
      
      <h3 className="text-lg font-semibold mb-2" id="critical-success-factors">Critical Success Factors</h3>
      <p className="mb-4">
        The success of Skribh depends on several critical factors that we continuously monitor and optimize:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Achieving and maintaining high accuracy rates in medical transcription (greater than 95%)</li>
        <li>Seamless integration with existing healthcare workflows and EMR systems</li>
        <li>Strong data security and HIPAA compliance to build trust with healthcare providers</li>
        <li>Building strategic partnerships with major healthcare technology vendors</li>
        <li>Scaling customer success and support teams to match growth</li>
        <li>Continuous improvement of AI models based on user feedback and data</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2" id="key-risk-categories">Key Risk Categories</h3>
      <p className="mb-4">
        We have identified and are actively managing several key risk categories:
      </p>
      
      <h4 className="font-semibold mb-2">Technology Risks</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>AI model accuracy may not meet healthcare standards consistently</li>
        <li>Integration challenges with diverse EMR systems and healthcare software</li>
        <li>Cybersecurity threats and data breach risks</li>
        <li>Technology obsolescence as AI advances rapidly</li>
      </ul>
      
      <h4 className="font-semibold mb-2">Market Risks</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Slow adoption rates in conservative healthcare industry</li>
        <li>Competition from large technology companies entering the market</li>
        <li>Changes in healthcare regulations affecting documentation requirements</li>
        <li>Economic downturns reducing healthcare technology spending</li>
      </ul>
      
      <h4 className="font-semibold mb-2">Operational Risks</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Difficulty scaling customer support for complex healthcare workflows</li>
        <li>Challenges in hiring and retaining specialized healthcare AI talent</li>
        <li>Dependency on cloud infrastructure and third-party services</li>
        <li>Regulatory compliance requirements across different jurisdictions</li>
      </ul>
      
      <h4 className="font-semibold mb-2">Financial Risks</h4>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>High customer acquisition costs in healthcare sales cycles</li>
        <li>Long implementation timelines affecting cash flow</li>
        <li>Pricing pressure from larger competitors</li>
        <li>Need for significant ongoing R&D investment to stay competitive</li>
      </ul>

      {/* Additional detailed content from new-site */}
      <div className="mt-6 space-y-4">
        
        {/* Enhanced Critical Success Factor */}
        <div className="p-4 border-l-4 border-gray-400 pl-4">
          <div className="flex items-center space-x-2 mb-2">
            <Mic className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Critical Success Factor Details</h3>
          </div>
          <p className="mb-3">
            <strong>Will paramedics verbalize enough?</strong> This is the fundamental question that determines 
            our product's success. Our early adoption strategy specifically addresses this through training 
            and behavior change programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Challenges</h4>
              <ul className="text-sm space-y-1">
                <li>• Natural tendency to work silently</li>
                <li>• High-stress environments</li>
                <li>• Existing workflow habits</li>
                <li>• Resistance to change</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mitigation Strategies</h4>
              <ul className="text-sm space-y-1">
                <li>• Structured verbalization training</li>
                <li>• Positive reinforcement systems</li>
                <li>• Integration with existing protocols</li>
                <li>• Early adoption through training programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Key Risk Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Detailed Risk Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                  Regulatory Risk
                </h4>
                <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                  High
                </span>
              </div>
              <p className="text-sm mb-3">
                HIPAA compliance and medical device certification requirements
              </p>
              <div>
                <h5 className="text-sm font-medium mb-1">Mitigation:</h5>
                <p className="text-sm">
                  Early legal consultation, compliance-first design, certification pathway planning
                </p>
              </div>
            </div>

            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                  Technical Risk
                </h4>
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                  Medium
                </span>
              </div>
              <p className="text-sm mb-3">
                Hardware development complexity and integration challenges
              </p>
              <div>
                <h5 className="text-sm font-medium mb-1">Mitigation:</h5>
                <p className="text-sm">
                  Experienced India team, phased development approach, regular testing
                </p>
              </div>
            </div>

            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                  Market Risk
                </h4>
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                  Medium
                </span>
              </div>
              <p className="text-sm mb-3">
                EMS adoption resistance and competitive response
              </p>
              <div>
                <h5 className="text-sm font-medium mb-1">Mitigation:</h5>
                <p className="text-sm">
                  Pilot programs, user training, clear ROI demonstration
                </p>
              </div>
            </div>

            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                  Financial Risk
                </h4>
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                  Medium
                </span>
              </div>
              <p className="text-sm mb-3">
                Financial risk management and funding sustainability
              </p>
              <div>
                <h5 className="text-sm font-medium mb-1">Mitigation:</h5>
                <p className="text-sm">
                  Conservative burn rate, milestone-based funding, multiple funding sources
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management Framework */}
        <div className="p-4 border rounded">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Risk Management Framework</h3>
          </div>
          <p className="text-sm mb-3">
            Our comprehensive approach to identifying, assessing, and mitigating risks across all business areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold mb-2">Risk Identification</h4>
              <p className="text-sm">
                Regular assessment of potential risks through stakeholder feedback, market analysis, and technical reviews.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Risk Assessment</h4>
              <p className="text-sm">
                Systematic evaluation of risk probability and impact using quantitative and qualitative methods.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Risk Mitigation</h4>
              <p className="text-sm">
                Implementation of targeted strategies to reduce risk impact and likelihood of occurrence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};