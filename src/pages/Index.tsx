import { useState } from "react";
import { motion } from "framer-motion";
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
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Link as RouterLink } from "react-router-dom";
import Header from "@/components/Header";
import { Stethoscope } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch(
      "https://script.google.com/macros/s/AKfycbwl4E650L9w9q_8csmIZiTLlbxSpeY89wSF9lu58tVYLqh9gLfCaDwKSmAcFETMiMqIug/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail("");
    setMessage("");
    setName("");
    setHoneypot("");
  };

  return (
    <div className="min-h-screen bg-skribh-cloudwhite text-white">
      <Header />
      {/* Hero Section - Red and black style with strong typography and ambulance image */}
      <section className="relative py-20 bg-skribh-cloudwhite border-b border-skribh-darkgray">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-skribh-blueprint text-6xl md:text-7xl font-bold mb-8 leading-none"
              >
                Intelligence That{" "}
                <span className="text-skribh-navy">Unlocks Impact</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-black mb-12 max-w-2xl"
              >
                AI-driven emergency management software for EMS that transforms
                conversations into accurate medical records
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <RouterLink
                  to="/#contact"
                  className="flex items-center justify-center"
                >
                  <Button className="skribh-button w-full">
                    Schedule Demo
                  </Button>
                </RouterLink>
                <RouterLink
                  to="/investors"
                  className="flex items-center justify-center"
                >
                  <Button className="skribh-button-outline w-full">
                    Investors <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </RouterLink>
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

      {/* EMS Directors Section with Ambulance Image */}
      <section className="section-gray py-20 border-b border-skribh-darkgray">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div>
                <h2 className="text-skribh-navy text-4xl md:text-5xl font-bold mb-8">
                  EMS Directors: Transform Your Data
                </h2>
                <p className="text-xl mb-8 text-black">
                  Access unprecedented insights from your field operations while
                  maintaining the highest standards of data privacy and
                  security. Our AI works where you do - in the field,
                  documenting patient care in real-time.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0 flex justify-center">
              <div className="glass-card p-6 w-full max-w-md">
                <h3 className="text-2xl font-bold mb-4 text-skribh-navy">
                  Turn Data into Actionable Insights
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-skribh-navy flex-shrink-0" />
                    <span>Instant pattern detection and trend analysis</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-skribh-navy flex-shrink-0" />
                    <span>Customizable performance dashboards</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-skribh-navy flex-shrink-0" />
                    <span>Predictive insights for resource planning</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-skribh-navy flex-shrink-0" />
                    <span>Automated quality assurance checks</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <RouterLink to="/#contact">
                    <Button className="phone-button">Contact Us Today</Button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Documentation Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="skribh-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16 text-white">
            Effortless Documentation
          </h2>
          <div className="skribh-grid">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-white" />,
                title: "Audio Processing",
                description:
                  "Advanced speech recognition for accurate transcription",
              },
              {
                icon: <Database className="h-10 w-10 text-white" />,
                title: "Data Integration",
                description:
                  "Seamless integration with CAD systems and medical devices",
              },
              {
                icon: <Shield className="h-10 w-10 text-white" />,
                title: "Protocol Compliance",
                description: "Automatic alignment with treatment protocols",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-4 p-6 border-l-2 border-white"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Documentation Solutions Section */}
      <section className="py-20 bg-skribh-cloudwhite">
        <div className="skribh-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">
            Comprehensive Documentation Solutions
          </h2>
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-4 p-6 border-b border-skribh-navy hover:bg-skribh-cloudwhite transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Structured and unstructured data handling
              </h3>
              <p className="text-black">
                Process all types of medical information regardless of format
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-b border-skribh-navy hover:bg-skribh-cloudwhite transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Compliance with NEMSIS standards
              </h3>
              <p className="text-black">
                Ensures all documentation meets national EMS information system
                requirements
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 p-6 border-b border-skribh-navy hover:bg-skribh-cloudwhite transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Compatibility with popular ePCR applications
              </h3>
              <p className="text-black">
                Works with your existing electronic patient care record systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Papers Section */}
      <section className="section-gray py-20 bg-skribh-cloudwhite text-white border-t border-skribh-darkgray">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Smarter Data, Better Outcomes
              </h2>
              <p className="text-xl mb-8 text-black">
                Our machine learning models identify patterns in audio data to
                generate accurate medical documentation.
              </p>
              <p className="text-xl mb-8 text-black">
                Through iterative fine-tuning, Skribh constantly improves its
                understanding of medical terminology and protocols.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
              <div className="bg-skribh-cloudwhite p-8 border-l-4 border-skribh-navy">
                <h3 className="text-2xl font-bold mb-6">
                  Transform your operations with intelligence-driven software
                </h3>
                <p className="mb-6 text-black">
                  Connect every critical data point across your EMS systems for
                  better patient outcomes and streamlined operations.
                </p>
                <RouterLink to="/#contact">
                  <Button className="skribh-button">
                    Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Get Started Section */}
      <section
        id="contact"
        className="section-light py-20 bg-skribh-cloudwhite border-t border-skribh-darkgray"
      >
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Get Started with Skribh Today
              </h2>
              <p className="text-xl text-black mb-8">
                Contact us to learn how Skribh can transform your documentation
                workflow and improve patient care.
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
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-14 border-2 border-skribh-navy rounded-none bg-skribh-cloudwhite text-white"
                  />
                </div>
                <div>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 border-2 border-skribh-navy rounded-none bg-skribh-cloudwhite text-white"
                  />
                </div>
                <div>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border-2 border-skribh-navy rounded-none min-h-[150px] bg-skribh-cloudwhite text-white"
                  />
                </div>
                <input
                  id="honeypot"
                  name="honeypot"
                  className="hidden"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
                <Button type="submit" className="skribh-button w-full">
                  Send Message <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section-dark py-16 bg-skribh-cloudwhite border-t border-skribh-darkgray">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 p-8 border-l-4 border-skribh-navy bg-skribh-cloudwhite hover-lift">
              <div className="flex items-start mb-6">
                <Briefcase className="h-12 w-12 text-skribh-navy mr-4" />
                <h3 className="text-3xl font-bold">
                  Interested in investing in Skribh?
                </h3>
              </div>
              <p className="text-xl mb-6 text-black">
                The global EMS software market is projected to reach $9.3
                billion by 2028, with a CAGR of 8.7% from 2023 to 2028.
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
      <footer className="py-12 bg-skribh-cloudwhite text-white border-t border-skribh-darkgray">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-4">
              <div className="text-3xl font-bold mb-4 text-skribh-navy">
                <Stethoscope className="h-8 w-8" /> skribh
              </div>
              <p className="mb-4 text-black">
                Revolutionizing prehospital care with AI-driven documentation
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-right">
              <div className="mb-4 text-black">
                © 2025 skribh. All rights reserved.
              </div>
              <div className="flex justify-end space-x-4">
                <a href="#" className="text-black hover:text-skribh-navy">
                  Privacy
                </a>
                <a href="#" className="text-black hover:text-skribh-navy">
                  Terms
                </a>
                <a href="#" className="text-black hover:text-skribh-navy">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
