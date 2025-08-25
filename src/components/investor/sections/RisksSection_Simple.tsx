import React from 'react';

export const RisksSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" id="risks">Risks</h2>
      
      <h3 className="text-lg font-semibold mb-2" id="critical-success-factors">Critical Success Factors</h3>
      <p className="mb-4">
        The success of Skribh depends on several critical factors that we continuously monitor and optimize:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Achieving and maintaining high accuracy rates in medical transcription (>95%)</li>
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
      <ul className="list-disc pl-6 space-y-1">
        <li>High customer acquisition costs in healthcare sales cycles</li>
        <li>Long implementation timelines affecting cash flow</li>
        <li>Pricing pressure from larger competitors</li>
        <li>Need for significant ongoing R&D investment to stay competitive</li>
      </ul>
    </div>
  );
};