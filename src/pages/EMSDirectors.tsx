import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Database,
  Shield,
  Clock,
  CheckCircle,
  Heart,
} from "lucide-react";
import { Stethoscope } from "lucide-react";

const EMSDirectors = () => {
  return (
    <div className="min-h-screen">
      {/* Header with navigation back to home */}
      <header className="bg-skribh-deepnavy text-white shadow-md py-6">
        <div className="skribh-container">
          <div className="flex items-center">
            <Link to="/" className="mr-6">
              <Button variant="ghost" className="text-white">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl text-white font-bold">
              Skribh for EMS Directors
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section with Ambulance Image */}
      <section className="section-gray text-white py-20">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Transform Your EMS Operations with Data-Driven Insights
                </h2>
                <p className="text-xl text-black mb-8">
                  Access unprecedented insights from your field operations while
                  maintaining the highest standards of data privacy and
                  security.
                </p>
                <Button className="bg-white text-blue-900 hover:bg-blue-100 transition-colors">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
              <img
                src="/lovable-uploads/ca7ded9c-d98a-4e90-8aba-9df8879192f3.png"
                alt="Ambulance responding to emergency"
                className="w-full rounded-md shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="skribh-container">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">
            Director Dashboard Features
          </h2>
          <div className="skribh-grid">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
                title: "Real-Time Documentation",
                description:
                  "Monitor documentation completion rates and quality scores across your entire fleet in real-time.",
              },
              {
                icon: <Database className="h-10 w-10 text-blue-600" />,
                title: "Data Integration Hub",
                description:
                  "Seamless integration with CAD systems, medical devices, and hospital records systems.",
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: "Compliance Monitoring",
                description:
                  "Automatic alignment with treatment protocols and regulatory requirements with real-time notifications.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-4 p-6 border-l-2 border-blue-600"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="section-dark py-20 text-white">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Data Privacy & Security
              </h2>
              <p className="text-xl mb-8">
                Skribh is built from the ground up with HIPAA compliance and
                data security as core principles. Your patient data never leaves
                your control, and our AI processing follows the highest
                standards of healthcare data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="skribh-container">
          <div className="skribh-grid">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-4xl font-bold mb-8">
                Ready to Transform Your Documentation?
              </h2>
              <p className="text-xl mb-8">
                Schedule a personalized demo to see how Skribh can work
                specifically for your agency. Our team includes former EMS
                directors who understand your challenges.
              </p>
              <Button className="skribh-button">Request Director Demo</Button>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-center">
              <img
                src="/lovable-uploads/a41c1049-9f0b-499a-bf85-4debfe508b1d.png"
                alt="Star of Life Medical Symbol"
                className="w-32 h-32 mx-auto opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="skribh-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-bold mb-4 text-white">
              <Stethoscope className="h-8 w-8" /> skribh
            </div>
            <div>© 2025 Skribh. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EMSDirectors;
