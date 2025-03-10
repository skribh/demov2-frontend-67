
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Investors = () => {
  return (
    <div className="min-h-screen">
      {/* Header with navigation back to home */}
      <header className="bg-swiss-black text-white py-6">
        <div className="swiss-container">
          <div className="flex items-center">
            <Link to="/" className="mr-6">
              <Button variant="ghost" className="text-white">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Skribh Investor Information</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-5xl font-bold mb-8 gradient-text">Investment Opportunity in Healthcare AI</h2>
              <p className="text-xl mb-8">
                The global EMS software market is projected to reach $9.3 billion by 2028, with a CAGR of 8.7% from 2023 to 2028.
                Skribh is positioned at the intersection of AI and healthcare, targeting a critical pain point in prehospital care.
              </p>
              <div className="bg-white p-6 border-l-4 border-blue-600 mb-8">
                <h3 className="text-2xl font-bold mb-2">Market Highlights</h3>
                <ul className="space-y-2 text-lg">
                  <li>• EMS agencies spend 40% of their time on documentation</li>
                  <li>• 85% of EMS directors report documentation as their biggest operational challenge</li>
                  <li>• AI in healthcare market growing at 39.4% CAGR</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-white">
        <div className="swiss-container">
          <h2 className="text-4xl font-bold mb-12">Investment Highlights</h2>
          <div className="swiss-grid gap-8">
            <div className="col-span-12 md:col-span-4 p-6 border-t-4 border-blue-600 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Proprietary AI Technology</h3>
              <p className="text-lg">
                Our specialized models are trained on medical terminology and EMS protocols,
                delivering accuracy rates exceeding 95% in documentation.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-t-4 border-blue-600 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Scalable SaaS Model</h3>
              <p className="text-lg">
                Subscription-based revenue with high margins and predictable cash flows.
                Each EMS agency client represents 5-1000+ paramedic subscriptions.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-t-4 border-blue-600 hover-lift">
              <h3 className="text-2xl font-bold mb-4">First-Mover Advantage</h3>
              <p className="text-lg">
                Pioneer in AI-based EMS documentation with early partnerships with major
                agencies and integration with leading ePCR software providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projection */}
      <section className="py-16 gradient-bg text-white">
        <div className="swiss-container">
          <h2 className="text-4xl font-bold mb-12">Financial Projection</h2>
          <div className="bg-white/10 p-8 backdrop-blur-sm">
            <div className="swiss-grid gap-8">
              <div className="col-span-12 md:col-span-4 text-center">
                <div className="text-5xl font-bold mb-2">$2.4M</div>
                <p className="text-xl">Year 1 Projected Revenue</p>
              </div>
              <div className="col-span-12 md:col-span-4 text-center">
                <div className="text-5xl font-bold mb-2">$12.8M</div>
                <p className="text-xl">Year 3 Projected Revenue</p>
              </div>
              <div className="col-span-12 md:col-span-4 text-center">
                <div className="text-5xl font-bold mb-2">82%</div>
                <p className="text-xl">Gross Margin at Scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-4xl font-bold mb-8">Connect With Our Investment Team</h2>
              <p className="text-xl mb-8">
                For detailed financial information, pitch deck, and to schedule a meeting with our founders,
                please contact our investment relations team.
              </p>
              <Button className="swiss-button">
                Request Investor Package
              </Button>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-center">
              <img 
                src="/lovable-uploads/a41c1049-9f0b-499a-bf85-4debfe508b1d.png" 
                alt="Star of Life Medical Symbol" 
                className="w-32 h-32 mx-auto opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-swiss-black text-white">
        <div className="swiss-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Skribh</div>
            <div>© 2023 Skribh. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Investors;
