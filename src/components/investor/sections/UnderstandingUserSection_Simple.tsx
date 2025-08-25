import React from 'react';

export const UnderstandingUserSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Understanding the User</h2>
      
      <h3 className="text-lg font-semibold mb-2">EMS-Specific Intelligence</h3>
      <p className="mb-4">
        We're building EMS-specific intelligence that understands the unique challenges, terminology,
        and workflows of emergency medical services. Our AI is trained on EMS-specific datasets and
        understands the high-stress, time-critical nature of emergency medical documentation.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">User-Centric Design</h3>
      <p className="mb-4">
        Our platform is designed with the end user in mind - EMS professionals who need to focus on
        patient care, not paperwork. The interface is intuitive, hands-free when needed, and integrates
        seamlessly into existing workflows without disrupting care delivery.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">User Adoption</h3>
      <p className="mb-4">
        Early user feedback shows high adoption rates due to immediate time savings and improved
        accuracy. Healthcare professionals appreciate the reduction in administrative burden and
        the ability to focus more time on direct patient care.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Key Research Questions</h3>
      <p className="mb-4">
        Our ongoing research focuses on understanding how different medical specialties document
        patient encounters, what terminology and patterns are most common, and how to optimize
        the AI for maximum accuracy across various medical contexts.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Verbalization Training</h3>
      <p className="mb-4">
        We provide training and support to help medical professionals optimize their verbal
        communication for AI transcription. This includes best practices for clear documentation,
        structured reporting, and efficient workflow integration.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">User Benefits</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>50% reduction in documentation time</li>
        <li>95% accuracy in medical transcription</li>
        <li>Improved work-life balance for healthcare providers</li>
        <li>Enhanced focus on patient care rather than paperwork</li>
        <li>Reduced burnout and job satisfaction improvement</li>
      </ul>
    </div>
  );
};