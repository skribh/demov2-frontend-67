import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ThesisSection } from '@/components/investor/sections/ThesisSection';
import { InvestorImplicationsSection } from '@/components/investor/sections/InvestorImplicationsSection';
import { ContactSection } from '@/components/investor/sections/ContactSection';
import { ServiceSection } from '@/components/investor/sections/ServiceSection';
import { TechnologySection } from '@/components/investor/sections/TechnologySection';
import { MarketSection } from '@/components/investor/sections/MarketSection';
import { UnderstandingUserSection } from '@/components/investor/sections/UnderstandingUserSection';
import { RisksSection } from '@/components/investor/sections/RisksSection';
import { FutureSection } from '@/components/investor/sections/FutureSection';
import { PartnershipsSection } from '@/components/investor/sections/PartnershipsSection';
import WorkingCanvas from '@/pages/WorkingCanvas';
import SlicingPie from '@/pages/SlicingPie';

const Investors: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Handle hash changes in URL
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # character
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    // Set initial section from URL hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'thesis':
        return <ThesisSection />;
      case 'investor-implications':
        return <InvestorImplicationsSection />;
      case 'contact':
        return <ContactSection />;
      case 'service-overview':
      case 'qa-qi-product':
        return <ServiceSection />;
      case 'technical-excellence':
      case 'technical-moat':
      case 'deep-understanding':
        return <TechnologySection />;
      case 'product-market-fit':
      case 'traction':
      case 'user-acquisition':
      case 'pricing-strategy':
        return <MarketSection />;
      case 'ems-specific-intelligence':
      case 'user-centric-design':
      case 'user-adoption':
      case 'key-research-questions':
      case 'verbalization-training':
        return <UnderstandingUserSection />;
      case 'critical-success-factors':
      case 'key-risk-categories':
        return <RisksSection />;
      case 'future':
        return <FutureSection />;
      case 'calculator':
        return <SlicingPie />;
      case 'master-roadmap':
        return <WorkingCanvas />;
      default:
        return (
          <div className="py-12 text-center">
            <h1 className="text-3xl font-bold mb-6">Skribh Investor Portal</h1>
            <p className="text-gray-600 mb-4 text-lg">
              Select a section from the navigation on the left to view detailed information.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Investment Thesis</h3>
                <p className="text-sm text-gray-600">Our market opportunity and strategic positioning</p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Technology Overview</h3>
                <p className="text-sm text-gray-600">AI-driven documentation solutions</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default Investors;