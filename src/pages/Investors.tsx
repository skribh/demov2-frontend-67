import { ArrowLeft, ChevronLeft, ChevronRight, FileText, BarChart, TrendingUp, Clock, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const Investors = () => {
  const [viewMode, setViewMode] = useState<'landing' | 'slides'>('landing');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'core-offering',
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png" 
              alt="Skribh Logo" 
              className="h-32 w-32" 
            />
          </div>
          <h2 className="text-6xl font-bold mb-8 gradient-text">Skribh</h2>
          <p className="text-2xl text-center mb-8 max-w-3xl italic">
            Automated, HIPAA-compliant medical documentation via ambient AI transcription
          </p>
          <div className="bg-black/80 border-l-4 border-red-600 p-8 backdrop-blur-sm rounded-none w-full max-w-3xl">
            <ul className="space-y-4 text-xl">
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-red-600 rounded-none mr-3"></span>
                Real-time NEMSIS-compliant report generation
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-red-600 rounded-none mr-3"></span>
                ICD-10 coding & litigation-ready audit trails
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      content: (
        <div className="flex flex-col h-full">
          <div className="flex justify-end mb-6">
            <img 
              src="/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png" 
              alt="Skribh Logo" 
              className="h-16 w-16" 
            />
          </div>
          <h2 className="text-4xl font-bold mb-8 text-red-600">Documentation Burden Crippling EMS Efficiency</h2>
          <div className="space-y-6">
            <div className="bg-black/80 border-l-4 border-red-600 p-6">
              <p className="text-xl mb-4 font-bold">
                25-30% of medics' time spent manually transcribing interactions
              </p>
            </div>
            <div className="bg-black/80 border-l-4 border-red-600 p-6">
              <h3 className="text-2xl font-bold mb-4">Consequences</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  53% EMT burnout risk | 18.5% nurse turnover vs 15.9% nat'l avg
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  44% emergency nurses report emotional exhaustion
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  Dispatch delays from after-shift documentation marathons
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  Providers distracted by documentation instead of focusing on patient care
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  Documentation not complete/accurate
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'current-solutions',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Current Solutions Fall Short</h2>
          <div className="overflow-hidden bg-black/80 border-l-4 border-red-600">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-600/20">
                  <th className="p-4 text-left text-xl border-b border-white/10">Solution</th>
                  <th className="p-4 text-left text-xl border-b border-white/10">Limitations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-lg font-medium">ChatGPT</td>
                  <td className="p-4 text-lg">Non-HIPAA, workflow-disconnected</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-lg font-medium">Traditional Dictation</td>
                  <td className="p-4 text-lg">No time savings (45-60 mins/report)</td>
                </tr>
                <tr>
                  <td className="p-4 text-lg font-medium">Body Cameras</td>
                  <td className="p-4 text-lg">$12k/unit + $200/mo storage costs, privacy concerns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Our Solution</h2>
          <h3 className="text-2xl font-bold mb-6">Three-Stage AI Pipeline</h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-black/80 p-6 border-l-4 border-red-600">
              <p className="text-xl font-bold">1. Speech → Transcript</p>
              <p className="text-lg opacity-80">(wave2vec 2.0, WER &lt;10%)</p>
            </div>
            <div className="bg-black/80 p-6 border-l-4 border-red-600">
              <p className="text-xl font-bold">2. Transcript → NEMSIS JSON</p>
              <p className="text-lg opacity-80">(NER with 90% F1-score)</p>
            </div>
            <div className="bg-black/80 p-6 border-l-4 border-red-600">
              <p className="text-xl font-bold">3. JSON → ICD-10 Codes</p>
              <p className="text-lg opacity-80">(RAG-enhanced coding)</p>
            </div>
          </div>
          <div className="bg-red-600 p-4 inline-block">
            <p className="text-xl font-bold">Output: Audit-ready reports in &lt;5 mins</p>
          </div>
        </div>
      )
    },
    {
      id: 'why-now',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Why Now?</h2>
          <h3 className="text-2xl font-bold mb-6">Perfect Storm for Adoption</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold border-b border-red-600 pb-2">Technical</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  Open-source models (wave2vec 2.0) enable low-cost STT
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  Cloud infra maturity (Kubernetes/Docker)
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold border-b border-red-600 pb-2">Market</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  AI transcription in doctor offices and AI translation in EMS dispatch signals newfound readiness
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  73% EMS agencies cite documentation as #1 cost center
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  CMS pushing for automated quality reporting
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                  Other players have not entered the market
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-size',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Market Size</h2>
          <div className="bg-black/80 border-l-4 border-red-600 p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">$1.2B Addressable EMS Market</h3>
            <ul className="space-y-4 text-lg mb-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                21,200 EMS agencies in US
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                A2B60M annual 911 calls requiring documentation
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold mb-4">Upsell Potential</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                Hospital ER integration ($380M/yr)
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
                Nursing workflow automation ($620M/yr)
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'competitive-landscape',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Competitive Landscape</h2>
          <div className="overflow-hidden bg-black/80 border-l-4 border-red-600 mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-600/20">
                  <th className="p-4 text-left text-xl border-b border-white/10">Competitor</th>
                  <th className="p-4 text-left text-xl border-b border-white/10">Weakness vs Skribh</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-lg font-medium">ePCRs</td>
                  <td className="p-4 text-lg">Manual entry workflows, focused on capturing market share for existing products</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-lg font-medium">Pulsara</td>
                  <td className="p-4 text-lg">No ambient listening</td>
                </tr>
                <tr>
                  <td className="p-4 text-lg font-medium">Axon</td>
                  <td className="p-4 text-lg">Focused on bodycams, not AI</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Why us?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
              Timing
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
              Focus on AI
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></span>
              Purpose-built for EMS documentation workflows
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'product',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Product</h2>
          <h3 className="text-2xl font-bold mb-6">Technical Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/80 border-l-4 border-red-600 rounded-none">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Heavy-Tailed Self-Regularization</h4>
                <p className="text-lg opacity-80">Advanced diagnostics ensure consistent performance even with unusual medical cases</p>
              </div>
            </Card>
            <Card className="bg-black/80 border-l-4 border-red-600 rounded-none">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">HIPAA-certified Architecture</h4>
                <p className="text-lg opacity-80">AES-256 encryption with secure mobile architecture</p>
              </div>
            </Card>
            <Card className="bg-black/80 border-l-4 border-red-600 rounded-none">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Reinforcement Learning</h4>
                <p className="text-lg opacity-80">Continuous improvement from medic feedback loops</p>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Our Team</h2>
          <div className="bg-black/80 border-l-4 border-red-600 p-8 w-full max-w-3xl">
            <p className="text-xl text-center italic">
              (To be filled with team details - placeholder)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'business-model',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Business Model</h2>
          <h3 className="text-2xl font-bold mb-6">Subscription Tiers</h3>
          <div className="overflow-hidden bg-black/80 border-l-4 border-red-600">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-600/20">
                  <th className="p-4 text-left text-xl border-b border-white/10">Tier</th>
                  <th className="p-4 text-left text-xl border-b border-white/10">Price</th>
                  <th className="p-4 text-left text-xl border-b border-white/10">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-lg font-medium">Basic</td>
                  <td className="p-4 text-lg">$299/unit/mo</td>
                  <td className="p-4 text-lg">Real-time transcription</td>
                </tr>
                <tr>
                  <td className="p-4 text-lg font-medium">Pro</td>
                  <td className="p-4 text-lg">$599/unit/mo</td>
                  <td className="p-4 text-lg">+ ICD coding & analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'market-entry',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Market Entry</h2>
          <h3 className="text-2xl font-bold mb-6">Pilot Roadmap</h3>
          <div className="space-y-6">
            <div className="flex">
              <div className="w-20 h-20 bg-red-600 flex items-center justify-center text-2xl font-bold mr-6">
                I
              </div>
              <div className="flex-1 bg-black/80 border-l-4 border-red-600 p-6">
                <h4 className="text-xl font-bold mb-2">Phase I</h4>
                <p className="text-lg">East Jefferson Ambulance (500 hrs audio validation)</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-20 h-20 bg-red-600 flex items-center justify-center text-2xl font-bold mr-6">
                II
              </div>
              <div className="flex-1 bg-black/80 border-l-4 border-red-600 p-6">
                <h4 className="text-xl font-bold mb-2">Phase II</h4>
                <p className="text-lg">3-state rollout (LA, TX, CO)</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-20 h-20 bg-red-600 flex items-center justify-center text-2xl font-bold mr-6">
                III
              </div>
              <div className="flex-1 bg-black/80 border-l-4 border-red-600 p-6">
                <h4 className="text-xl font-bold mb-2">Phase III</h4>
                <p className="text-lg">CMS partnership for reimbursement</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'financial-projections',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Financial Projections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-black/80 border-l-4 border-red-600 p-8">
              <div className="text-5xl font-bold mb-2">$2.1M</div>
              <p className="text-xl">Year 1 ARR (35 EMS agencies)</p>
            </div>
            <div className="bg-black/80 border-l-4 border-red-600 p-8">
              <div className="text-5xl font-bold mb-2">$19.8M</div>
              <p className="text-xl">Year 3 ARR (330 agencies + hospital ERs)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Vision</h2>
          <p className="text-xl mb-8 max-w-3xl italic">
            If all goes well, what does this company look like in 10 years?
          </p>
          <div className="bg-black/80 border-l-4 border-red-600 p-8 w-full max-w-3xl">
            <p className="text-2xl font-bold">
              "Stethoscope for Documentation"
            </p>
            <p className="text-xl mt-4">
              AI scribe in every EMS vehicle globally by 2035
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'product-roadmap',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Product Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/80 border-l-4 border-red-600 p-8">
              <div className="text-3xl font-bold mb-4">2025</div>
              <p className="text-xl">Voice biomarker integration (stroke detection)</p>
            </div>
            <div className="bg-black/80 border-l-4 border-red-600 p-8">
              <div className="text-3xl font-bold mb-4">2026</div>
              <p className="text-xl">Multilingual support (Spanish/ALS-compatible)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-management',
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Risk Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/80 p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">Regulatory</h3>
              <p className="text-xl">Built-in NEMSIS v3.5 validation engine</p>
            </div>
            <div className="bg-black/80 p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">Technical</h3>
              <p className="text-xl">Layer-wise model diagnostics</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Connect With Our Investment Team</h2>
          <p className="text-xl mb-8 max-w-2xl">
            For detailed financial information, pitch deck, and to schedule a meeting with our founders,
            please contact our investment relations team.
          </p>
          <Button size="lg" className="skribh-button text-xl">
            Request Investor Package
          </Button>
          <div className="mt-8 flex justify-center">
            <img 
              src="/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png" 
              alt="Skribh Logo" 
              className="h-32 w-32" 
            />
          </div>
        </div>
      )
    }
  ];

  for (let i = 2; i < slides.length; i++) {
    const slide = slides[i];
    const originalContent = slide.content;
    
    if (!originalContent.props.children.some(child => 
      child?.props?.children?.props?.src === "/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png")) {
      
      slide.content = (
        <div className="flex flex-col h-full">
          <div className="flex justify-end mb-6">
            <img 
              src="/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png" 
              alt="Skribh Logo" 
              className="h-16 w-16" 
            />
          </div>
          {originalContent.props.children}
        </div>
      );
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const investorResources = [
    {
      id: 'pitch-deck',
      title: 'Pitch Deck',
      description: 'Our comprehensive investor presentation',
      icon: <Presentation className="h-8 w-8 text-red-600" />,
      action: () => setViewMode('slides')
    },
    {
      id: 'one-pager',
      title: 'One-Pager',
      description: 'Key information about Skribh summarized',
      icon: <FileText className="h-8 w-8 text-red-600" />,
      action: () => alert('One-pager would open here')
    },
    {
      id: 'forecast-model',
      title: 'Forecast Model',
      description: 'Interactive financial projections spreadsheet',
      icon: <BarChart className="h-8 w-8 text-red-600" />,
      action: () => alert('Forecast model would open here')
    },
    {
      id: 'revenue-model',
      title: 'Revenue Model',
      description: 'Detailed breakdown of our revenue streams',
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      action: () => alert('Revenue model would open here')
    },
    {
      id: 'timeline',
      title: 'Product Timeline',
      description: 'Development and investment milestones',
      icon: <Clock className="h-8 w-8 text-red-600" />,
      action: () => alert('Product timeline would open here')
    }
  ];

  const renderLandingPage = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <img 
            src="/lovable-uploads/2e03f383-0ea8-4e5e-9345-164936ca73f4.png" 
            alt="Skribh Logo" 
            className="h-48 w-48 mr-6" 
          />
          <div>
            <h1 className="text-6xl font-bold gradient-text">Skribh</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {investorResources.map((resource) => (
            <button 
              key={resource.id}
              onClick={resource.action}
              className="text-left bg-black/80 border-l-4 border-red-600 rounded-none p-4 hover:bg-black/90 transition-colors h-full"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-3">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <p className="text-sm text-white/80">{resource.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-helvetica">
      {/* Header */}
      <header className="bg-black border-b border-zinc-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {viewMode === 'landing' ? (
              <Link to="/" className="mr-6">
                <Button variant="ghost" className="text-white hover:bg-red-600/20">
                  <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
                </Button>
              </Link>
            ) : (
              <Button 
                variant="ghost" 
                className="mr-6 text-white hover:bg-red-600/20"
                onClick={() => setViewMode('landing')}
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Resources
              </Button>
            )}
            <h1 className="text-3xl font-bold text-red-600">
              {viewMode === 'landing' ? 'Investor Information' : 'Investor Presentation'}
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {viewMode === 'landing' ? (
        renderLandingPage()
      ) : (
        <main className="container mx-auto px-4 py-12 min-h-[calc(100vh-160px)] relative">
          <div className="max-w-6xl mx-auto h-full">
            {slides[currentSlide].content}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <Button
              variant="ghost"
              className={`text-white rounded-none p-2 pointer-events-auto ${
                currentSlide === 0 ? 'opacity-0' : 'opacity-100'
              } hover:bg-red-600/20`}
              onClick={previousSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              className={`text-white rounded-none p-2 pointer-events-auto ${
                currentSlide === slides.length - 1 ? 'opacity-0' : 'opacity-100'
              } hover:bg-red-600/20`}
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto px-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-none transition-colors ${
                    index === currentSlide ? 'bg-red-600' : 'bg-zinc-600'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Investors;
