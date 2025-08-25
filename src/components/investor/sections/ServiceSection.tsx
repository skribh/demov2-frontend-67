import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Stethoscope, Shield, Brain, CheckCircle, Cpu } from 'lucide-react';

export const ServiceSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="service-overview">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        The Service
      </h2>
      <div className={`text-base leading-relaxed transition-colors space-y-8 ${textSecondary}`}>
        
        {/* Service Overview */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} border-l-4 border-blue-400`}>
          <div className="flex items-center space-x-3 mb-4">
            <Stethoscope className="h-6 w-6 text-blue-400" />
            <h3 className={`text-xl font-bold ${textPrimary}`}>Service Overview</h3>
          </div>
          <p className={`${textSecondary} mb-4`}>
            Our flagship product is an ambient AI transcription platform that automatically generates
            HIPAA-compliant medical documentation. It serves as an intelligent assistant for healthcare
            providers, capturing conversations and converting them into structured, accurate medical records.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className={`text-xl font-semibold mb-6 ${textPrimary}`}>Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg border transition-colors ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>Ambient Transcription</h4>
              <p className={`${textSecondary}`}>Real-time capture of patient-provider conversations without manual input.</p>
            </div>
            <div className={`p-6 rounded-lg border transition-colors ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>HIPAA Compliance</h4>
              <p className={`${textSecondary}`}>Built-in security and privacy controls meeting healthcare regulatory standards.</p>
            </div>
            <div className={`p-6 rounded-lg border transition-colors ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>Smart Documentation</h4>
              <p className={`${textSecondary}`}>AI-powered generation of structured medical records and reports.</p>
            </div>
            <div className={`p-6 rounded-lg border transition-colors ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-3 ${textPrimary}`}>EHR Integration</h4>
              <p className={`${textSecondary}`}>Seamless integration with existing electronic health record systems.</p>
            </div>
          </div>
        </div>

        {/* QA/QI Product */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/20' : 'bg-green-50'} border-l-4 border-green-400`} id="qa-qi-product">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="h-6 w-6 text-green-400" />
            <h3 className={`text-xl font-bold ${textPrimary}`}>QA/QI Product</h3>
          </div>
          <p className={`${textSecondary} mb-4`}>
            Advanced quality assurance and quality improvement analytics that provide comprehensive
            insights into documentation quality, compliance metrics, and operational efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className={`font-semibold mb-2 ${textPrimary}`}>Quality Assurance Features</h4>
              <ul className={`text-sm space-y-1 ${textSecondary}`}>
                <li>• Automated accuracy checks and validation workflows</li>
                <li>• Real-time error detection and correction suggestions</li>
                <li>• Compliance monitoring and reporting</li>
                <li>• Documentation completeness verification</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${textPrimary}`}>Analytics & Insights</h4>
              <ul className={`text-sm space-y-1 ${textSecondary}`}>
                <li>• Performance metrics tracking and dashboards</li>
                <li>• Predictive insights for resource planning</li>
                <li>• Trend analysis and pattern detection</li>
                <li>• Custom reporting and data visualization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Technology */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-purple-900/20' : 'bg-purple-50'} border-l-4 border-purple-400`} id="core-technology">
          <div className="flex items-center space-x-3 mb-4">
            <Cpu className="h-6 w-6 text-purple-400" />
            <h3 className={`text-xl font-bold ${textPrimary}`}>Core Technology</h3>
          </div>
          <p className={`${textSecondary} mb-4`}>
            Built on advanced natural language processing and machine learning models, specifically
            trained on medical terminology and healthcare workflows for maximum accuracy and relevance.
          </p>
        </div>

        {/* Integration Partners */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} id="integration-partners">
          <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Integration Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-bold text-blue-400 mb-2`}>EHR Compatibility</h4>
              <p className={`text-sm ${textSecondary}`}>
                Compatible with major EHR systems including Epic, Cerner, and Allscripts, ensuring
                smooth adoption within existing healthcare infrastructure.
              </p>
            </div>
            <div>
              <h4 className={`font-bold text-green-400 mb-2`}>Integration Depth</h4>
              <p className={`text-sm ${textSecondary}`}>
                Deep workflow integration creates switching costs and customer lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};