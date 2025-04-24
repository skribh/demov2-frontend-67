
import { MessageSquare, Database, Shield } from 'lucide-react';

export const DocumentationSection = () => {
  const features = [
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
  ];

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="skribh-container">
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Effortless Documentation</h2>
        <div className="skribh-grid">
          {features.map((feature, index) => (
            <div key={index} className="col-span-12 md:col-span-4 p-6 border-l-2 border-white">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
