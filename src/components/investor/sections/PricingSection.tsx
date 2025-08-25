import React from 'react';
import { Package, Plus, Gift, BarChart3, Users } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">The Pricing</h2>
      
      <h3 className="text-lg font-semibold mb-2">Bundling Strategy</h3>
      <p className="mb-4">
        Our pricing strategy offers three tiers: a standalone Documentation Product as the primary market entry point, 
        a premium QA/QI add-on for advanced analytics, and a comprehensive Bundle Solution with attractive discount pricing. 
        This approach creates multiple revenue streams while allowing customers to start with our core value proposition.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Documentation Product</h3>
      <p className="mb-4">
        Core AI documentation solution as the primary market entry vehicle. Features include real-time transcription, 
        HIPAA-compliant processing, basic report generation, and standard integrations. Positioned as primary market 
        entry with proven value proposition.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">QA/QI Product</h3>
      <p className="mb-4">
        Premium add-on offering advanced quality assurance and quality improvement analytics. Includes advanced 
        analytics dashboard, performance metrics tracking, compliance monitoring, and predictive insights. 
        Premium upsell with higher margins.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Bundle Solution</h3>
      <p className="mb-4">
        Comprehensive package with attractive bundle pricing including full documentation suite, complete QA/QI analytics, 
        priority support, and advanced integrations. Provides maximum customer value with reduced churn.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Tiered Pricing by Volume</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>1-50 calls/month: $299 (Small EMS services)</li>
        <li>51-200 calls/month: $799 (Medium departments)</li>
        <li>201-500 calls/month: $1,499 (Large departments)</li>
        <li>500+ calls/month: Custom pricing (Enterprise accounts)</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2">Marketing Positioning</h3>
      <p className="mb-4">
        Primary focus: Paramedic Experience First - Lead with how the solution improves daily workflows, 
        reduces documentation burden, and enhances job satisfaction for front-line paramedics. Secondary benefits: 
        Administrative Benefits Second - Support with operational efficiency, compliance improvements, and cost 
        savings for management and administrative stakeholders.
      </p>

      {/* Additional sections with simple styling */}
      <div className="mt-6 space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Package className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Product Tiers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h4 className="font-bold mb-2">Documentation Product</h4>
              <p className="text-sm mb-2">Standalone Entry Point</p>
              <ul className="text-sm space-y-1">
                <li>• Real-time transcription</li>
                <li>• HIPAA-compliant processing</li>
                <li>• Basic report generation</li>
                <li>• Standard integrations</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-bold mb-2">QA/QI Product</h4>
              <p className="text-sm mb-2">Premium Add-on</p>
              <ul className="text-sm space-y-1">
                <li>• Advanced analytics dashboard</li>
                <li>• Performance metrics tracking</li>
                <li>• Compliance monitoring</li>
                <li>• Predictive insights</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-bold mb-2">Bundle Solution</h4>
              <p className="text-sm mb-2">Combined Discount</p>
              <ul className="text-sm space-y-1">
                <li>• Full documentation suite</li>
                <li>• Complete QA/QI analytics</li>
                <li>• Priority support</li>
                <li>• Advanced integrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Volume-Based Pricing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded text-center">
              <h4 className="font-bold">1-50 calls/month</h4>
              <p className="text-2xl font-bold">$299</p>
              <p className="text-sm">Small EMS services</p>
            </div>
            <div className="p-4 border rounded text-center">
              <h4 className="font-bold">51-200 calls/month</h4>
              <p className="text-2xl font-bold">$799</p>
              <p className="text-sm">Medium departments</p>
            </div>
            <div className="p-4 border rounded text-center">
              <h4 className="font-bold">201-500 calls/month</h4>
              <p className="text-2xl font-bold">$1,499</p>
              <p className="text-sm">Large departments</p>
            </div>
            <div className="p-4 border rounded text-center">
              <h4 className="font-bold">500+ calls/month</h4>
              <p className="text-2xl font-bold">Custom</p>
              <p className="text-sm">Enterprise accounts</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Users className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Strategic Rationale</h3>
          </div>
          <p className="text-sm">
            This bundling approach creates multiple revenue streams while allowing customers to start 
            with our core value proposition. The tiered volume pricing ensures scalability and 
            fair pricing across different organization sizes, while our user-first marketing 
            approach drives adoption from the bottom up.
          </p>
        </div>
      </div>
    </div>
  );
};