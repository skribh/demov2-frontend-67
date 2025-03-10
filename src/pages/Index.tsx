
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, CheckCircle, Heart, ArrowRight, Mail, Phone, MessageSquare, Shield, Database, Link, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

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
    <div className="min-h-screen">
      {/* Hero Section - Swiss style with strong typography and asymmetric layout */}
      <section className="relative py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl font-bold mb-8 gradient-text leading-none"
              >
                Revolutionizing Prehospital Care with AI
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-swiss-gray mb-12 max-w-2xl"
              >
                Transforming conversations into accurate medical records
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button className="swiss-button">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-5 mt-12 md:mt-0">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 aspect-square w-3/4 mx-auto md:ml-auto md:mr-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Grid layout with clear hierarchy */}
      <section className="py-20 gradient-bg text-white">
        <div className="swiss-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Effortless Documentation</h2>
          <div className="swiss-grid">
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

      {/* Benefits Section - Swiss style with strong visual contrast */}
      <section className="py-20 bg-white">
        <div className="swiss-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Unlocking Efficiency and Accuracy</h2>
          <div className="swiss-grid">
            {[
              {
                icon: <Clock className="h-12 w-12 text-blue-600" />,
                title: "Reduced Documentation Time",
                metric: "60%",
                description: "Faster documentation process"
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
                title: "Increased Accuracy",
                metric: "95%",
                description: "Documentation accuracy rate"
              },
              {
                icon: <Heart className="h-12 w-12 text-blue-600" />,
                title: "Improved Patient Care",
                metric: "40%",
                description: "More time for patient care"
              }
            ].map((benefit, index) => (
              <div key={index} className="col-span-12 md:col-span-4 p-6 border-t-4 border-blue-600">
                <div className="mb-6">{benefit.icon}</div>
                <div className="text-5xl font-bold text-swiss-black mb-4">{benefit.metric}</div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-swiss-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section - Clean grid-based layout */}
      <section className="py-20 bg-swiss-black text-white">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Advanced AI for Precise Documentation</h2>
              <p className="text-xl mb-8">
                Our machine learning models identify patterns in audio data to generate accurate medical documentation.
              </p>
              <p className="text-xl">
                Through iterative fine-tuning, Skribh constantly improves its understanding of medical terminology and protocols.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-0">
              <div className="grid grid-cols-6 gap-4 h-full">
                <div className="col-span-4 col-start-1 row-span-3 bg-white"></div>
                <div className="col-span-2 col-start-5 row-span-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="col-span-2 col-start-5 row-span-2 bg-swiss-gray"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Grid-based asymmetric layout */}
      <section className="py-20 bg-white">
        <div className="swiss-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Comprehensive Documentation Solutions</h2>
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-4 p-6 border-b border-swiss-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Structured and unstructured data handling</h3>
              <p>Process all types of medical information regardless of format</p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-b border-swiss-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Compliance with NEMSIS standards</h3>
              <p>Ensures all documentation meets national EMS information system requirements</p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-b border-swiss-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Compatibility with popular ePCR applications</h3>
              <p>Works with your existing electronic patient care record systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="swiss-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Trusted by Healthcare Professionals</h2>
          <div className="max-w-4xl">
            <blockquote className="text-3xl font-light italic mb-8">
              "Skribh has transformed our documentation process, allowing our paramedics to focus more on patient care rather than paperwork."
            </blockquote>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full mr-4"></div>
              <div>
                <div className="font-bold text-xl">Dr. Sarah Johnson</div>
                <div>EMS Medical Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Swiss style form with clear hierarchy */}
      <section className="py-20 bg-white">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started with Skribh Today</h2>
              <p className="text-xl text-swiss-gray mb-8">
                Contact us to learn how Skribh can transform your documentation workflow and improve patient care.
              </p>
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
                    className="h-14 border-2 border-blue-600 rounded-none"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border-2 border-blue-600 rounded-none min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="swiss-button w-full">
                  Send Message <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Swiss style minimal footer */}
      <footer className="py-12 bg-swiss-black text-white">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-4">
              <div className="text-3xl font-bold mb-4">Skribh</div>
              <p className="mb-4">Revolutionizing prehospital care with AI-driven documentation</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-right">
              <div className="mb-4">© 2023 Skribh. All rights reserved.</div>
              <div className="flex justify-end space-x-4">
                <a href="#" className="hover:text-blue-400">Privacy</a>
                <a href="#" className="hover:text-blue-400">Terms</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
