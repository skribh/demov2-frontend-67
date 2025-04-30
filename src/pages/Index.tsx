
import { Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { HeroSection } from '@/components/landing/HeroSection';
import { EMSDirectorsSection } from '@/components/landing/EMSDirectorsSection';
import { DocumentationSection } from '@/components/landing/DocumentationSection';
import { ContactForm } from '@/components/landing/ContactForm';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <EMSDirectorsSection />
      <DocumentationSection />
      
      {/* Comprehensive Documentation Solutions Section */}
      <section className="py-20 bg-black">
        <div className="skribh-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Comprehensive Documentation Solutions</h2>
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-4 p-6 border-b border-red-600 hover:bg-black transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Structured and unstructured data handling</h3>
              <p className="text-zinc-300">Process all types of medical information regardless of format</p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-b border-red-600 hover:bg-black transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Compliance with NEMSIS standards</h3>
              <p className="text-zinc-300">Ensures all documentation meets national EMS information system requirements</p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-b border-red-600 hover:bg-black transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Compatibility with popular ePCR applications</h3>
              <p className="text-zinc-300">Works with your existing electronic patient care record systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-black border-t border-zinc-800">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 p-8 border-l-4 border-red-600 bg-black hover-lift">
              <div className="flex items-start mb-6">
                <Briefcase className="h-12 w-12 text-red-600 mr-4" />
                <h3 className="text-3xl font-bold">Interested in investing in Skribh?</h3>
              </div>
              <p className="text-xl mb-6 text-zinc-300">
                The global EMS software market is projected to reach $9.3 billion by 2028, with a CAGR of 8.7% from 2023 to 2028.
              </p>
              <RouterLink to="/investors">
                <Button className="skribh-button">
                  Investor Information <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
