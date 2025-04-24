
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

export const EMSDirectorsSection = () => {
  return (
    <section className="py-20 bg-black border-b border-zinc-800">
      <div className="skribh-container">
        <div className="skribh-grid">
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">EMS Directors: Transform Your Data</h2>
              <p className="text-xl mb-8 text-zinc-300">
                Access unprecedented insights from your field operations while maintaining the highest standards of data privacy and security. Our AI works where you do - in the field, documenting patient care in real-time.
              </p>
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
              <div className="mt-8">
                <RouterLink to="/#contact">
                  <Button className="phone-button">
                    Contact Us Today
                  </Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
