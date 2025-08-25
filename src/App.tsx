import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Investors from '@/pages/Investors';
import WorkingCanvas from '@/pages/WorkingCanvas';
import WorkingCanvasDraft from '@/pages/WorkingCanvasDraft';
import RoadmapEmbed from '@/pages/RoadmapEmbed';
import RoadmapAPIDraft from '@/pages/RoadmapAPIDraft';
import RoadmapPFADraft from '@/pages/RoadmapPFADraft';
import SlicingPie from '@/pages/SlicingPie';
import Market from '@/pages/Market';
import Product from '@/pages/Product';
import Partnerships from '@/pages/Partnerships';
import RiskAnalysis from '@/pages/RiskAnalysis';
import Growth from '@/pages/Growth';
import Service from '@/pages/Service';
import UnderstandingUser from '@/pages/UnderstandingUser';
import Technology from '@/pages/Technology';
import PricingStrategy from '@/pages/PricingStrategy';
import Pricing from '@/pages/Pricing';
import Risks from '@/pages/Risks';
import Timeline from '@/pages/Timeline';
import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={
                <div className="min-h-screen bg-white">
                  <header className="border-b pb-6 mb-8 p-8 max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2">Skribh</h1>
                    <p className="text-lg text-gray-700">Automated, HIPAA-compliant medical documentation via ambient AI transcription. Transforming healthcare efficiency through intelligent automation.</p>
                  </header>

                  <div className="flex max-w-7xl mx-auto desktop-layout">
                    {/* Sticky Table of Contents Sidebar */}
                    <div className="toc-sidebar">
                      <nav>
                        <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
                        <ol className="list-decimal pl-6 space-y-2 text-blue-600">
                          <li><a href="#business-overview" className="hover:underline block py-1">Business Overview</a></li>
                          <li><a href="#product-features" className="hover:underline block py-1">Product Features</a></li>
                          <li><a href="#ems-solutions" className="hover:underline block py-1">EMS Solutions</a></li>
                          <li><a href="#technical-capabilities" className="hover:underline block py-1">Technical Capabilities</a></li>
                          <li><a href="#market-opportunity" className="hover:underline block py-1">Market Opportunity</a></li>
                          <li><a href="#company-story" className="hover:underline block py-1">Company Story</a></li>
                          <li><a href="#contact" className="hover:underline block py-1">Contact Information</a></li>
                        </ol>
                      </nav>
                    </div>

                    {/* Main Content Area */}
                    <main className="flex-1 p-8 space-y-12 main-content">
                    <article id="business-overview">
                      <header>
                        <h2 className="text-2xl font-bold mb-4">Business Overview</h2>
                      </header>
                      <p className="mb-4">
                        The healthcare industry faces a fundamental documentation crisis. Medical professionals spend 40-60% of their time on paperwork instead of patient care, leading to burnout, errors, and inefficient resource allocation. Current solutions are fragmented, non-compliant, or require significant workflow changes.
                      </p>
                      <p>
                        Skribh addresses this fundamental pain point with ambient AI transcription that automatically generates HIPAA-compliant medical documentation in real-time. Our solution integrates seamlessly into existing workflows, requires no additional hardware, and produces documentation that meets regulatory standards while freeing up clinicians to focus on what they do best: healing.
                      </p>
                    </article>

                    <article id="product-features">
                      <header>
                        <h2 className="text-2xl font-bold mb-4">Revolutionizing Prehospital Care with AI-Driven Documentation</h2>
                      </header>
                      <p className="mb-4">
                        AI-driven emergency management software for EMS that transforms conversations into accurate medical records.
                      </p>
                      <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Key Features</summary>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                          <li>Real-time conversation transcription</li>
                          <li>Automated medical record generation</li>
                          <li>HIPAA-compliant processing</li>
                          <li>Seamless workflow integration</li>
                        </ul>
                      </details>
                    </article>

                    <article id="ems-solutions">
                      <header>
                        <h2 className="text-2xl font-bold mb-4">EMS Directors: Transform Your Data</h2>
                      </header>
                      <p className="mb-4">
                        Access unprecedented insights from your field operations while maintaining the highest standards of data privacy and security. Our AI works where you do - in the field, documenting patient care in real-time.
                      </p>
                      <section>
                        <h3 className="text-xl font-semibold mb-2">Turn Data into Actionable Insights</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Instant pattern detection and trend analysis</li>
                          <li>Customizable performance dashboards</li>
                          <li>Predictive insights for resource planning</li>
                          <li>Automated quality assurance checks</li>
                        </ul>
                      </section>
                    </article>

                    <article id="technical-capabilities">
                      <header>
                        <h2 className="text-2xl font-bold mb-4">Technical Capabilities</h2>
                      </header>
                      
                      <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Effortless Documentation</h3>
                        <div className="space-y-4">
                          <details className="border border-gray-300 rounded p-4">
                            <summary className="font-semibold cursor-pointer">Audio Processing</summary>
                            <p className="mt-2">Advanced speech recognition for accurate transcription with support for medical terminology and ambient noise filtering.</p>
                          </details>
                          <details className="border border-gray-300 rounded p-4">
                            <summary className="font-semibold cursor-pointer">Data Integration</summary>
                            <p className="mt-2">Seamless integration with CAD systems and medical devices, supporting real-time data synchronization.</p>
                          </details>
                          <details className="border border-gray-300 rounded p-4">
                            <summary className="font-semibahl cursor-pointer">Protocol Compliance</summary>
                            <p className="mt-2">Automatic alignment with treatment protocols and regulatory requirements for consistent documentation.</p>
                          </details>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold mb-3">Comprehensive Documentation Solutions</h3>
                        <div className="space-y-4">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <h4 className="font-semibold">Structured and unstructured data handling</h4>
                            <p>Process all types of medical information regardless of format</p>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-4">
                            <h4 className="font-semibold">Compliance with NEMSIS standards</h4>
                            <p>Ensures all documentation meets national EMS information system requirements</p>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-4">
                            <h4 className="font-semibold">Compatibility with popular ePCR applications</h4>
                            <p>Works with your existing electronic patient care record systems</p>
                          </div>
                        </div>
                      </section>
                    </article>

                    <article id="market-opportunity">
                      <header>
                        <h2 className="text-2xl font-bold mb-4">Market Opportunity</h2>
                      </header>
                      <p className="mb-4">
                        The global EMS software market is projected to reach $9.3 billion by 2028, with a CAGR of 8.7% from 2023 to 2028.
                      </p>
                      <aside className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                        <p className="font-semibold">Market Insight:</p>
                        <p>Healthcare documentation inefficiencies cost the industry billions annually in lost productivity and compliance issues.</p>
                      </aside>
                    </article>

                    <article id="company-story">
                      <header>
                        <h2 className="text-2xl font-bold mb-4">Company Story</h2>
                      </header>
                      
                      <section className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Inspiration</h3>
                        <p className="mb-4">
                          The idea for Skribh was born from founder Kaju Sarkar's direct experience with healthcare inefficiencies. After witnessing firsthand how medical professionals struggled with time-consuming documentation that pulled them away from patient care, Kaju envisioned a world where AI could handle the paperwork, allowing clinicians to focus on what they do best: healing.
                        </p>
                      </section>
                      
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Leadership</h3>
                        <div className="bg-gray-50 p-4 rounded">
                          <h4 className="font-semibold">Kaju Sarkar</h4>
                          <p className="mb-2 text-sm text-gray-600">Founder & CEO</p>
                          <p>
                            Experienced product leader with deep expertise in AI/ML and healthcare technology. Previously led product initiatives at major tech companies, with a track record of building scalable solutions that solve real-world problems in healthcare and enterprise software.
                          </p>
                        </div>
                      </section>
                    </article>
                      <footer id="contact" className="border-t pt-6 mt-12">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <address className="not-italic">
                          <p className="mb-2">For more information about Skribh:</p>
                          <p><a href="/investors" className="text-blue-600 underline hover:no-underline">View Detailed Information →</a></p>
                        </address>
                      </footer>
                    </main>
                  </div>
                </div>
              } />
              <Route path="/investors" element={<Investors />} />
              <Route path="/working-canvas" element={<WorkingCanvas />} />
              <Route path="/working-canvas-draft" element={<WorkingCanvasDraft />} />
              <Route path="/roadmap" element={<RoadmapEmbed />} />
              <Route path="/roadmap-api-draft" element={<RoadmapAPIDraft />} />
              <Route path="/roadmap-pfa-draft" element={<RoadmapPFADraft />} />
              <Route path="/slicing-pie" element={<SlicingPie />} />
              <Route path="/market" element={<Market />} />
              <Route path="/product" element={<Product />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/risk-analysis" element={<RiskAnalysis />} />
              <Route path="/growth" element={<Growth />} />
              <Route path="/service" element={<Service />} />
              <Route path="/understanding-user" element={<UnderstandingUser />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/pricing-strategy" element={<PricingStrategy />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/risks" element={<Risks />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
