import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const ProductSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="product">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        Product
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        <p>
          Our flagship product is an ambient AI transcription platform that automatically generates 
          HIPAA-compliant medical documentation. It serves as an intelligent assistant for healthcare 
          providers, capturing conversations and converting them into structured, accurate medical records.
        </p>

        <div>
          <h3 className={`text-xl font-semibold mt-8 mb-4 transition-colors ${textPrimary}`}>
            Key Features
          </h3>
          <ul className={`list-disc list-inside space-y-2 ${textSecondary}`}>
            <li><strong>Ambient Transcription:</strong> Real-time capture of patient-provider conversations without manual input.</li>
            <li><strong>HIPAA Compliance:</strong> Built-in security and privacy controls meeting healthcare regulatory standards.</li>
            <li><strong>Smart Documentation:</strong> AI-powered generation of structured medical records and reports.</li>
            <li><strong>EHR Integration:</strong> Seamless integration with existing electronic health record systems.</li>
            <li><strong>Quality Assurance:</strong> Automated accuracy checks and validation workflows.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h4 className="text-lg font-bold text-blue-400">Core Technology</h4>
            <p>
              Built on advanced natural language processing and machine learning models, specifically 
              trained on medical terminology and healthcare workflows for maximum accuracy and relevance.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h4 className="text-lg font-bold text-blue-400">Integration Partners</h4>
            <p>
              Compatible with major EHR systems including Epic, Cerner, and Allscripts, ensuring 
              smooth adoption within existing healthcare infrastructure.
            </p>
          </div>
        </div>

        <div className={`mt-8 border rounded-lg p-8 text-center ${isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
          <p className={`text-lg ${textSecondary}`}>Product Demo & Screenshots</p>
          <div className={`mt-4 h-48 rounded-md flex items-center justify-center ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
            <span className="text-gray-400">Interactive Demo Area</span>
          </div>
        </div>
      </div>
    </section>
  );
};
