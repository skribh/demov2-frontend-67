import React from 'react';
import { Brain, Server, Zap, Shield } from 'lucide-react';

export const TechnologySection: React.FC = () => {

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">The Technology</h2>
      
      <h3 className="text-lg font-semibold mb-2">Technical Excellence</h3>
      <p className="mb-4">
        Our AI platform is built on state-of-the-art natural language processing and machine learning models,
        specifically trained on medical terminology and healthcare workflows. We leverage advanced speech
        recognition technology combined with contextual understanding to deliver unparalleled accuracy
        in medical documentation.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Technical Moat</h3>
      <p className="mb-4">
        Our competitive advantage lies in our proprietary healthcare-specific AI models and deep
        integration capabilities. We have developed custom algorithms that understand medical context,
        terminology, and workflow patterns that generic transcription services cannot match.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Deep Understanding</h3>
      <p className="mb-4">
        Our technology goes beyond simple transcription to provide intelligent documentation that
        understands medical relationships, patient history context, and clinical decision-making processes.
        This deep understanding enables more accurate and useful documentation output.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Core Technology Stack</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Advanced neural language models trained on medical data</li>
        <li>Real-time speech recognition and processing</li>
        <li>HIPAA-compliant cloud infrastructure</li>
        <li>APIs for seamless EHR integration</li>
        <li>Machine learning pipeline for continuous improvement</li>
        <li>Natural language understanding for medical context</li>
      </ul>

      {/* Additional sections from new-site */}
      <div className="mt-8 space-y-8" id="technical-moat">
        
        {/* EMS-Specific Deep Understanding */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="h-6 w-6" />
            <h3 className="text-xl font-bold">EMS-Specific Deep Understanding</h3>
          </div>
          <p className="text-lg font-medium mb-4">
            EMS-specific intelligence that understands the unique challenges
          </p>
          <p className="mb-6">
            We're not building generic AI - we're building EMS-specific intelligence that understands the unique challenges, terminology, and workflows of emergency medical services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-2 bg-gray-400"></div>
              <span className="text-sm">
                Medical terminology recognition trained on EMS-specific datasets
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-2 bg-gray-400"></div>
              <span className="text-sm">
                Understanding of emergency protocols and procedures
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-2 bg-gray-400"></div>
              <span className="text-sm">
                Context-aware documentation for high-stress environments
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 rounded-full mt-2 bg-gray-400"></div>
              <span className="text-sm">
                Integration with existing EMS workflows and systems
              </span>
            </div>
          </div>
        </div>

        {/* Core Technology & Integration */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Core Technology & Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Server className="h-6 w-6" />
                <h4 className="text-xl font-bold">Core Technology</h4>
              </div>
              <p>
                Built on advanced natural language processing and machine learning models, specifically 
                trained on medical terminology and healthcare workflows for maximum accuracy and relevance.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-6 w-6" />
                <h4 className="text-xl font-bold">Integration Partners</h4>
              </div>
              <p>
                Compatible with major EHR systems including Epic, Cerner, and Allscripts, ensuring 
                smooth adoption within existing healthcare infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Moat Details */}
        <div className="p-6 border rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6" />
            <h3 className="text-xl font-bold">Technical Moat Details</h3>
          </div>
          <p className="mb-4">
            Our technical architecture creates sustainable competitive advantages through specialized domain knowledge, 
            advanced security implementations, and deep healthcare workflow integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Domain Expertise</h4>
              <p className="text-sm">
                Deep EMS knowledge creates barriers to entry for generic AI competitors
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Security Architecture</h4>
              <div className="space-y-2 text-sm">
                <p>Advanced local-first processing and proximity authentication</p>
                <p>Foundation of trust that makes adoption possible</p>
                <p>Local-first AI processing for data privacy and speed</p>
                <p>Offline capability ensuring reliability in remote areas</p>
                <p>Proximity authentication for secure, hands-free operation</p>
                <p>Enterprise-grade security and compliance standards</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Integration Depth</h4>
              <p className="text-sm">
                Deep workflow integration creates switching costs and customer lock-in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};