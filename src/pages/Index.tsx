
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Revolutionizing Prehospital Care with AI-Driven Documentation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Transforming conversations into accurate medical records
          </motion.p>
          <Button size="lg" className="hover-lift">
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Effortless Documentation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Audio Processing",
                description: "Advanced speech recognition for accurate transcription"
              },
              {
                icon: <Database className="h-8 w-8 text-primary" />,
                title: "Data Integration",
                description: "Seamless integration with CAD systems and medical devices"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Protocol Compliance",
                description: "Automatic alignment with treatment protocols"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover-lift glass-card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Unlocking Efficiency and Accuracy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-accent" />,
                title: "Reduced Documentation Time",
                metric: "60%",
                description: "Faster documentation process"
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-accent" />,
                title: "Increased Accuracy",
                metric: "95%",
                description: "Documentation accuracy rate"
              },
              {
                icon: <Heart className="h-8 w-8 text-accent" />,
                title: "Improved Patient Care",
                metric: "40%",
                description: "More time for patient care"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover-lift glass-card">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get Started with Skribh Today</h2>
          <div className="max-w-lg mx-auto">
            <Card className="p-8 glass-card">
              <form onSubmit={handleContact} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full hover-lift">
                  Send Message <Mail className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
