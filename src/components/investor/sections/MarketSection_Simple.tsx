import React from 'react';

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
    </div>
  );
};