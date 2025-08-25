import React from 'react';
import { Heart, Users, HelpCircle, Mic, Clock, MessageSquare, Brain, User } from 'lucide-react';

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

      {/* Additional content from new-site */}
      <div className="mt-6 space-y-4" id="verbalization-training">
        
        {/* Enhanced EMS-Specific Intelligence */}
        <div className="border-l-4 border-gray-400 pl-4">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-4 w-4" />
            <h3 className="text-lg font-semibold">EMS-Specific Intelligence Details</h3>
          </div>
          <p className="mb-3">
            EMS-specific intelligence that understands the unique challenges, terminology, and workflows of emergency medical services.
            We're not building generic AI - we're building EMS-specific intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Medical terminology recognition trained on EMS-specific datasets</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Understanding of emergency protocols and procedures</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Context-aware documentation for high-stress environments</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Integration with existing EMS workflows and systems</span>
            </div>
          </div>
        </div>

        {/* Enhanced User-Centric Design */}
        <div className="border-l-4 border-gray-400 pl-4">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="h-4 w-4" />
            <h3 className="text-lg font-semibold">User-Centric Design Details</h3>
          </div>
          <p className="mb-3">
            Every decision is made with the paramedic in mind. If it doesn't make their job easier and better, it doesn't belong in our product.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Intuitive interface designed for high-pressure situations</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Minimal learning curve and training requirements</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Voice-first interaction optimized for field conditions</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">Seamless integration into existing paramedic workflows</span>
            </div>
          </div>
        </div>

        {/* Enhanced User Adoption */}
        <div className="p-4 border rounded">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="h-4 w-4" />
            <h3 className="text-lg font-semibold">User Adoption Strategy</h3>
          </div>
          <p className="mb-3">
            User-centric design ensures high adoption rates and low churn by focusing on the actual needs 
            and workflows of paramedics in real-world emergency situations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Adoption Drivers</h4>
              <ul className="text-sm space-y-1">
                <li>• Immediate workflow improvement</li>
                <li>• Reduced documentation burden</li>
                <li>• Enhanced job satisfaction</li>
                <li>• Peer-to-peer advocacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Success Metrics</h4>
              <ul className="text-sm space-y-1">
                <li>• 85%+ user adoption rate target</li>
                <li>• High user satisfaction scores</li>
                <li>• Low training time requirements</li>
                <li>• Positive user feedback loops</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Key Research Questions */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <HelpCircle className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Key Research Questions</h3>
          </div>
          <p className="mb-3">
            Understanding real-world paramedic workflows through systematic research to ensure our solution 
            addresses actual pain points and delivers measurable value.
          </p>
          <div className="space-y-3">
            <div className="p-3 border rounded">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">What specific documentation tasks cause the most delays?</h4>
                  <p className="text-sm text-gray-600 mb-2 italic">Understanding pain points helps prioritize feature development and measure impact</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Identifying bottlenecks in current workflows</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Measuring time savings potential</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Prioritizing automation features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Quantifying ROI for customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">How do paramedics currently handle difficult patient interactions while documenting?</h4>
                  <p className="text-sm text-gray-600 mb-2 italic">Critical for designing ambient AI that works in real-world, high-stress scenarios</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Understanding multitasking challenges</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Designing for high-stress environments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Ensuring patient care isn't compromised</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Optimizing voice recognition accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 border rounded">
              <div className="flex items-start space-x-3">
                <Brain className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">What information is typically forgotten or missed during busy shifts?</h4>
                  <p className="text-sm text-gray-600 mb-2 italic">Addresses key value proposition of comprehensive, automated documentation</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Identifying common documentation gaps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Building intelligent prompting systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Ensuring compliance completeness</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 flex-shrink-0" />
                      <span className="text-sm">Reducing liability and audit risks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Verbalization Training */}
        <div className="p-4 border-l-4 border-gray-400 pl-4">
          <div className="flex items-center space-x-2 mb-2">
            <Mic className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Verbalization Training Details</h3>
          </div>
          <p className="mb-3">
            <strong>Will paramedics verbalize enough?</strong> This is the fundamental question that determines 
            our product's success. Our training programs specifically address this critical success factor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Training Components</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <User className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Training programs on effective verbal documentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Brain className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Best practices for ambient AI interaction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MessageSquare className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Workflow optimization for voice-first documentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Users className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Behavioral change management and incentives</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Implementation Strategy</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium mb-1">Challenges</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Natural tendency to work silently</li>
                    <li>• High-stress environments</li>
                    <li>• Existing workflow habits</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Solutions</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Structured verbalization training</li>
                    <li>• Positive reinforcement systems</li>
                    <li>• Integration with existing protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Research Methodology */}
        <div className="p-4 border rounded">
          <h3 className="text-lg font-semibold mb-3">User Research Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold mb-2">Pilot Programs</h4>
              <p className="text-sm">
                Direct deployment with EMS departments to measure real-world performance and gather feedback.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">User Interviews</h4>
              <p className="text-sm">
                Regular interviews with paramedics to understand workflow challenges and solution effectiveness.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Behavioral Analysis</h4>
              <p className="text-sm">
                Continuous monitoring of user behavior patterns to optimize product design and training programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};