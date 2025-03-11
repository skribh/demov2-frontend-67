
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Investors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'intro',
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-6xl font-bold mb-8 gradient-text">Skribh</h2>
          <p className="text-2xl text-center mb-8 max-w-3xl">
            Transforming EMS Documentation with AI
          </p>
          <div className="bg-white/10 p-8 backdrop-blur-sm rounded-lg">
            <p className="text-xl text-center">
              Investment Opportunity in Healthcare AI
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'market',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Market Opportunity</h2>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="text-xl mb-4">
                The global EMS software market is projected to reach $9.3 billion by 2028, with a CAGR of 8.7% from 2023 to 2028.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Market Highlights</h3>
              <ul className="space-y-4 text-lg">
                <li>• EMS agencies spend 40% of their time on documentation</li>
                <li>• 85% of EMS directors report documentation as their biggest operational challenge</li>
                <li>• AI in healthcare market growing at 39.4% CAGR</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'highlights',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Investment Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-lg border-t-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">Proprietary AI Technology</h3>
              <p className="text-lg">
                Our specialized models are trained on medical terminology and EMS protocols,
                delivering accuracy rates exceeding 95% in documentation.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border-t-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">Scalable SaaS Model</h3>
              <p className="text-lg">
                Subscription-based revenue with high margins and predictable cash flows.
                Each EMS agency client represents 5-1000+ paramedic subscriptions.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border-t-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">First-Mover Advantage</h3>
              <p className="text-lg">
                Pioneer in AI-based EMS documentation with early partnerships with major
                agencies and integration with leading ePCR software providers.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'financials',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Financial Projection</h2>
          <div className="bg-white/10 p-8 backdrop-blur-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">$2.4M</div>
                <p className="text-xl">Year 1 Projected Revenue</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$12.8M</div>
                <p className="text-xl">Year 3 Projected Revenue</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">82%</div>
                <p className="text-xl">Gross Margin at Scale</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Connect With Our Investment Team</h2>
          <p className="text-xl mb-8 max-w-2xl">
            For detailed financial information, pitch deck, and to schedule a meeting with our founders,
            please contact our investment relations team.
          </p>
          <Button size="lg" className="text-xl">
            Request Investor Package
          </Button>
          <img 
            src="/lovable-uploads/a41c1049-9f0b-499a-bf85-4debfe508b1d.png" 
            alt="Star of Life Medical Symbol" 
            className="w-32 h-32 mt-8 opacity-60"
          />
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-zinc-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link to="/" className="mr-6">
              <Button variant="ghost" className="text-white">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold gradient-text">Investor Presentation</h1>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="container mx-auto px-4 py-12 min-h-[calc(100vh-160px)] relative">
        <div className="max-w-6xl mx-auto h-full">
          {slides[currentSlide].content}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
          <Button
            variant="ghost"
            className={`text-white rounded-full p-2 pointer-events-auto ${
              currentSlide === 0 ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={previousSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            className={`text-white rounded-full p-2 pointer-events-auto ${
              currentSlide === slides.length - 1 ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-red-600' : 'bg-zinc-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investors;
