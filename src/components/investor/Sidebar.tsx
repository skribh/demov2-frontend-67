import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Subsection {
  id?: string;
  path?: string;
  label: string;
  isLocal?: boolean;
  isCanvas?: boolean;
  isInteractive?: boolean;
}

interface Level1Section {
  id: string;
  label: string;
  path: string;
  subsections: Subsection[];
}

const level1Sections: Level1Section[] = [
  {
    id: 'the-service',
    label: 'The Service',
    path: '/service',
    subsections: [
      { id: 'service-overview', label: 'Service Overview' },
      { id: 'qa-qi-product', label: 'QA/QI Product' }
    ]
  },
  {
    id: 'the-technology',
    label: 'The Technology',
    path: '/technology',
    subsections: [
      { id: 'technical-excellence', label: 'Technical Excellence' },
      { id: 'technical-moat', label: 'Technical Moat' },
      { id: 'deep-understanding', label: 'Understanding' }
    ]
  },
  {
    id: 'the-market',
    label: 'The Market',
    path: '/market',
    subsections: [
      { id: 'product-market-fit', label: 'Product-Market Fit' },
      { id: 'traction', label: 'Traction' },
      { id: 'user-acquisition', label: 'User Acquisition' },
      { id: 'pricing-strategy', label: 'Pricing Strategy' }
    ]
  },
  {
    id: 'the-pricing',
    label: 'The Pricing',
    path: '/pricing',
    subsections: []
  },
  {
    id: 'slicing-pie-calc',
    label: 'Slicing Pie Calc',
    path: '/slicing-pie',
    subsections: [
      { id: 'calculator', label: 'Calculator', isInteractive: true }
    ]
  },
  {
    id: 'master-roadmap',
    label: 'Master Roadmap',
    path: '/working-canvas',
    subsections: []
  },
  {
    id: 'understanding-the-user',
    label: 'Understanding the User',
    path: '/understanding-user',
    subsections: [
      { id: 'ems-specific-intelligence', label: 'EMS-specific Intelligence' },
      { id: 'user-centric-design', label: 'User-Centric Design' },
      { id: 'user-adoption', label: 'User Adoption' },
      { id: 'key-research-questions', label: 'Key Research Questions' },
      { id: 'verbalization-training', label: 'Verbalization Training' }
    ]
  },
  {
    id: 'risks',
    label: 'Risks',
    path: '/risks',
    subsections: [
      { id: 'critical-success-factors', label: 'Critical Success Factors' },
      { id: 'key-risk-categories', label: 'Key Risk Categories' }
    ]
  },
  {
    id: 'growth',
    label: 'Growth',
    path: '/growth',
    subsections: [
      { id: 'future', label: 'Future' }
    ]
  },
  {
    id: 'partnerships',
    label: 'Partnerships',
    path: '/partnerships',
    subsections: []
  }
];

const additionalSections = [
  { id: 'thesis', label: 'Investment Thesis', isLocal: true },
  { id: 'investor-implications', label: 'Investor Implications', isLocal: true },
  { id: 'contact', label: 'Contact', isLocal: true }
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-full w-full bg-white">
      <div className="p-6 h-full">
        <h3 className="text-lg font-bold mb-6 font-mono">Navigation</h3>
        <nav>
          {/* Level 1 Sections */}
          <div className="mb-8">
            <div className="space-y-1">
              {level1Sections.map((section) => (
                <div key={section.id}>
                  <div className="text-sm font-semibold mb-1 text-gray-800">
                    {section.subsections.length > 0 ? (
                      <a href={section.path} className="font-mono text-blue-600 hover:text-blue-800">
                        ◦ {section.label}
                      </a>
                    ) : (
                      <a href={section.path} className="font-mono text-blue-600 hover:text-blue-800">
                        ◦ {section.label}
                      </a>
                    )}
                  </div>
                  <div className="ml-4 mb-2">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id || subsection.path}>
                        <a
                          href={`${section.path}#${subsection.id}`}
                          className="block text-xs font-mono transition-colors text-blue-600 hover:text-blue-800 py-1"
                        >
                          ◦ {subsection.label}
                          {subsection.isInteractive && (
                            <span className="ml-1 text-green-500">*</span>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Sections */}
          <div>
            <div className="space-y-1">
              {additionalSections.map((item) => (
                <div key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-sm font-mono transition-colors text-gray-600 hover:text-blue-600 py-1"
                  >
                    ◦ {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
