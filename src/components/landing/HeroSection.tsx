
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

export const HeroSection = () => {
  return (
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
              <RouterLink to="/#contact" className="flex items-center justify-center">
                <Button className="skribh-button w-full">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </RouterLink>
              <RouterLink to="/investors" className="flex items-center justify-center">
                <Button className="skribh-button-outline w-full">
                  Investor Information <ArrowRight className="ml-2 h-5 w-5" />
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
  );
};
