import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageSquare, 
  Shield, 
  Database, 
  Briefcase, 
  Users,
  CheckCircle,
  Clock,
  FileText,
  HelpCircle,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Red and black style with strong typography and ambulance image */}
      <section className="relative py-20 bg-black border-b border-zinc-800">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl font-bold mb-8 leading-none"
              >
                Intelligence That <span className="text-red-600">Unlocks Impact</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl"
              >
                AI-driven emergency management software for EMS that transforms conversations into accurate medical records
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="skribh-button">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="skribh-button-outline">
                  Explore the Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ca7ded9c-d98a-4e90-8aba-9df8879192f3.png" 
                alt="Ambulance responding to emergency" 
                className="w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEMSIS Badges Section */}
      <section className="py-12 bg-black border-b border-zinc-800">
        <div className="skribh-container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img 
              src="/lovable-uploads/c51a6999-8d2e-4b58-83e8-c6818fa731b3.png" 
              alt="NEMSIS v3.5.0 Receive & Process Compliant" 
              className="h-20 object-contain" 
            />
            <img 
              src="/lovable-uploads/bbcff65e-594c-4f28-bd7a-e3ca27ef9ed1.png" 
              alt="NEMSIS v3.4.0 Collect Data Compliant" 
              className="h-20 object-contain" 
            />
          </div>
        </div>
      </section>

      {/* Software Integration Section */}
      <section className="py-20 bg-black border-b border-zinc-800">
        <div className="skribh-container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Integrates Seamlessly With Leading ePCRs</h2>
          <div className="skribh-grid items-center">
            <div className="col-span-12 md:col-span-3 p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/c2102a71-4e1c-4450-843e-227b6aa25c53.png" 
                alt="ImageTrend Elite Logo" 
                className="h-16 object-contain mb-4" 
              />
              <h3 className="text-xl font-bold text-center">ImageTrend Elite</h3>
              <p className="text-center text-zinc-400">Complete ePCR and analytics solution</p>
            </div>
            <div className="col-span-12 md:col-span-3 p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/f9d475b6-1e42-4bbd-8a9d-1e6a4fbf9669.png" 
                alt="ESO Logo" 
                className="h-16 object-contain mb-4 bg-white p-2 rounded" 
              />
              <h3 className="text-xl font-bold text-center">ESO</h3>
              <p className="text-center text-zinc-400">Leading EMS data and analytics platform</p>
            </div>
            <div className="col-span-12 md:col-span-3 p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/68707274-ee5e-4c3c-87dc-2963d58fdaa6.png" 
                alt="HealthEMS by Sansio" 
                className="h-16 object-contain mb-4 bg-white p-2 rounded" 
              />
              <h3 className="text-xl font-bold text-center">HealthEMS</h3>
              <p className="text-center text-zinc-400">Comprehensive ePCR system by Sansio</p>
            </div>
            <div className="col-span-12 md:col-span-3 p-8 flex flex-col items-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-red-600">Stryker</span>
              </div>
              <h3 className="text-xl font-bold text-center">Stryker</h3>
              <p className="text-center text-zinc-400">Industry-leading medical equipment and software</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMS Directors Section with Ambulance Image */}
      <section className="py-20 bg-black border-b border-zinc-800">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">EMS Directors: Transform Your Data</h2>
                <p className="text-xl mb-8 text-zinc-300">
                  Access unprecedented insights from your field operations while maintaining the highest standards of data privacy and security. Our AI works where you do - in the field, documenting patient care in real-time.
                </p>
                <div className="mt-8">
                  <RouterLink to="/ems-directors">
                    <Button className="skribh-button">
                      EMS Director Solutions <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0 flex justify-center">
              <div className="glass-card p-6 w-full max-w-md">
                <h3 className="text-2xl font-bold mb-4 text-red-500">Turn Data into Actionable Insights</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <span>Instant pattern detection and trend analysis</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <span>Customizable performance dashboards</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <span>Predictive insights for resource planning</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <span>Automated quality assurance checks</span>
                  </li>
                </ul>
                
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <img 
                    src="/lovable-uploads/c51a6999-8d2e-4b58-83e8-c6818fa731b3.png" 
                    alt="NEMSIS v3.5.0 Receive & Process Compliant" 
                    className="h-16 object-contain" 
                  />
                  <img 
                    src="/lovable-uploads/bbcff65e-594c-4f28-bd7a-e3ca27ef9ed1.png" 
                    alt="NEMSIS v3.4.0 Collect Data Compliant" 
                    className="h-16 object-contain" 
                  />
                </div>
                
                <div className="mt-8">
                  <a href="tel:+18005555555" className="phone-button">
                    <Phone className="h-5 w-5" /> Call Us Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Documentation Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="skribh-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Effortless Documentation</h2>
          <div className="skribh-grid">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-white" />,
                title: "Audio Processing",
                description: "Advanced speech recognition for accurate transcription"
              },
              {
                icon: <Database className="h-10 w-10 text-white" />,
                title: "Data Integration",
                description: "Seamless integration with CAD systems and medical devices"
              },
              {
                icon: <Shield className="h-10 w-10 text-white" />,
                title: "Protocol Compliance",
                description: "Automatic alignment with treatment protocols"
              }
            ].map((feature, index) => (
              <div key={index} className="col-span-12 md:col-span-4 p-6 border-l-2 border-white">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Technical Papers Section */}
      <section className="py-20 bg-black text-white border-t border-zinc-800">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Smarter Data, Better Outcomes</h2>
              <p className="text-xl mb-8 text-zinc-300">
                Our machine learning models identify patterns in audio data to generate accurate medical documentation.
              </p>
              <p className="text-xl mb-8 text-zinc-300">
                Through iterative fine-tuning, Skribh constantly improves its understanding of medical terminology and protocols.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="skribh-button-outline">
                  Read Technical Whitepaper <FileText className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="skribh-button-outline">
                  Read Accuracy Whitepaper <BarChart className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
              <div className="bg-black p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold mb-6">Transform your operations with intelligence-driven software</h3>
                <p className="mb-6 text-zinc-300">
                  Connect every critical data point across your EMS systems for better patient outcomes and streamlined operations.
                </p>
                <Button className="skribh-button">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black border-t border-zinc-800">
        <div className="skribh-container">
          <h2 className="text-4xl font-bold mb-12 text-center">What Customers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/a41c1049-9f0b-499a-bf85-4debfe508b1d.png" alt="EMS Logo" className="h-16 w-16" />
              </div>
              <p className="text-center mb-6 text-zinc-300">
                "The training was very helpful and informative. I really liked how hands-on it was during each session. We learned a lot to help us succeed with Skribh."
              </p>
              <div className="text-center">
                <p className="font-bold">Jessica Rodriguez</p>
                <p className="text-zinc-400 text-sm">EMS Specialist, Golden Valley EMS</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/05fb8946-1d85-4e07-9d6b-ca9cb8c4d5d5.png" alt="Hospital Logo" className="h-16 w-16" />
              </div>
              <p className="text-center mb-6 text-zinc-300">
                "The amount of time Skribh is saving me from what I used to do is incredible. I'm able to focus on other things the department needs instead of admin work."
              </p>
              <div className="text-center">
                <p className="font-bold">Michael Chen</p>
                <p className="text-zinc-400 text-sm">Operations Director, Metro Hospital EMS</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/eeaa2efb-e5e7-4a48-a3c1-5ebe7d80cc6f.png" alt="Fire Department Logo" className="h-16 w-16" />
              </div>
              <p className="text-center mb-6 text-zinc-300">
                "Skribh is excellent at determining where we need to focus and how we can improve. I love that they're always pushing the boundaries to make the system better."
              </p>
              <div className="text-center">
                <p className="font-bold">Sarah Thompson</p>
                <p className="text-zinc-400 text-sm">Battalion Chief, Lakeside Fire & Rescue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Get Started Section */}
      <section className="py-20 bg-black border-t border-zinc-800">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started with Skribh Today</h2>
              <p className="text-xl text-zinc-300 mb-8">
                Contact us to learn how Skribh can transform your documentation workflow and improve patient care.
              </p>
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/a41c1049-9f0b-499a-bf85-4debfe508b1d.png" 
                  alt="Star of Life Medical Symbol" 
                  className="w-24 h-24 opacity-60"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <form onSubmit={handleContact} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 border-2 border-red-600 rounded-none bg-black text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border-2 border-red-600 rounded-none min-h-[150px] bg-black text-white"
                  />
                </div>
                <Button type="submit" className="skribh-button w-full">
                  Send Message <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
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

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-zinc-800">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-4">
              <div className="text-3xl font-bold mb-4 text-red-600">Skribh</div>
              <p className="mb-4 text-zinc-400">Revolutionizing prehospital care with AI-driven documentation</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-right">
              <div className="mb-4 text-zinc-400">© 2023 Skribh. All rights reserved.</div>
              <div className="flex justify-end space-x-4">
                <a href="#" className="text-zinc-400 hover:text-red-500">Privacy</a>
                <a href="#" className="text-zinc-400 hover:text-red-500">Terms</a>
                <a href="#" className="text-zinc-400 hover:text-red-500">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
