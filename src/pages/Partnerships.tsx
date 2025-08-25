import React, { useState } from 'react';
import { ExternalLink, Download, Eye } from 'lucide-react';

const Partnerships: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const partnerships = [
    {
      name: "Silicon Signals",
      type: "Hardware Development Partner",
      location: "India",
      investment: "$70K / 7 months",
      status: "Active Development",
      description: "Wearable device development with Bluetooth connectivity to Mecha Comet platform",
      outcomes: ["Hardware prototypes", "BT connectivity", "Field testing capabilities"]
    },
    {
      name: "ImageTrend",
      type: "EHR Integration Partner",
      location: "USA",
      investment: "Revenue Share",
      status: "Partnership Discussions",
      description: "Leading EMS data platform for seamless integration and data flow",
      outcomes: ["EHR integration", "Data standardization", "Market access"]
    },
    {
      name: "EMS Training Schools",
      type: "Education Partners",
      location: "Multiple States",
      investment: "Curriculum Development",
      status: "Pilot Programs",
      description: "Integration into paramedic training programs for early adoption",
      outcomes: ["Student exposure", "Feedback loops", "Future workforce preparation"]
    },
    {
      name: "Regional EMS Departments",
      type: "Pilot Customers",
      location: "Target Markets",
      investment: "Implementation Support",
      status: "Active Pilots",
      description: "Real-world validation and feedback from active EMS operations",
      outcomes: ["Product validation", "Case studies", "Reference customers"]
    }
  ];

  const canvasData = {
    nodes: [
      { id: "skribh", name: "Skribh Platform", type: "core", x: 400, y: 300 },
      { id: "silicon", name: "Silicon Signals", type: "hardware", x: 100, y: 100 },
      { id: "imagetrend", name: "ImageTrend", type: "integration", x: 700, y: 100 },
      { id: "ems-schools", name: "EMS Training Schools", type: "education", x: 100, y: 500 },
      { id: "ems-depts", name: "EMS Departments", type: "customer", x: 700, y: 500 }
    ],
    connections: [
      { from: "skribh", to: "silicon", label: "$70K Hardware Development" },
      { from: "skribh", to: "imagetrend", label: "EHR Integration & Data Flow" },
      { from: "skribh", to: "ems-schools", label: "Training & Education Programs" },
      { from: "skribh", to: "ems-depts", label: "Pilot Programs & Validation" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="py-12">
          <header className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partnerships</h1>
                <p className="text-xl text-gray-600">Building our ecosystem through strategic collaborations</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCanvas(!showCanvas)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    showCanvas 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                  {showCanvas ? 'Hide Canvas' : 'Show Canvas View'}
                </button>
                <a
                  href="/skribh-partnerships-canvas.json"
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  <Download className="h-4 w-4" />
                  Download JSON Canvas
                </a>
              </div>
            </div>
          </header>

          <main className="space-y-12">
            {showCanvas ? (
              // Canvas Visualization
              <section className="bg-purple-50 p-6 rounded-lg border-2 border-purple-500">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Partnership Ecosystem Canvas</h2>
                <div className="relative h-96 overflow-hidden rounded-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  {/* Canvas Nodes */}
                  {canvasData.nodes.map(node => (
                    <div
                      key={node.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-lg shadow-lg text-white text-center text-sm font-medium ${
                        node.type === 'core' ? 'bg-blue-600 w-32 h-20' :
                        node.type === 'hardware' ? 'bg-green-500 w-28 h-16' :
                        node.type === 'integration' ? 'bg-orange-500 w-28 h-16' :
                        node.type === 'education' ? 'bg-yellow-500 w-28 h-16' :
                        'bg-red-500 w-28 h-16'
                      }`}
                      style={{ 
                        left: `${(node.x / 800) * 100}%`, 
                        top: `${(node.y / 600) * 100}%` 
                      }}
                    >
                      {node.name}
                    </div>
                  ))}
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {canvasData.connections.map((conn, index) => {
                      const fromNode = canvasData.nodes.find(n => n.id === conn.from);
                      const toNode = canvasData.nodes.find(n => n.id === conn.to);
                      if (!fromNode || !toNode) return null;
                      
                      const x1 = (fromNode.x / 800) * 100;
                      const y1 = (fromNode.y / 600) * 100;
                      const x2 = (toNode.x / 800) * 100;
                      const y2 = (toNode.y / 600) * 100;
                      
                      return (
                        <line
                          key={index}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="rgba(255,255,255,0.6)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        />
                      );
                    })}
                  </svg>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  This JSON Canvas visualization shows the strategic partnership ecosystem around Skribh. 
                  Each node represents a key partner with connections showing value exchange and collaboration areas.
                </p>
              </section>
            ) : (
              // Partnership Cards
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Partnerships</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {partnerships.map((partner, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          partner.status === 'Active Development' ? 'bg-green-100 text-green-800' :
                          partner.status === 'Active Pilots' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {partner.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Type:</span> {partner.type}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> {partner.location}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Investment:</span> {partner.investment}
                        </div>
                      </div>
                      
                      <p className="text-sm mb-4 text-gray-700">{partner.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Outcomes:</h4>
                        <ul className="space-y-1">
                          {partner.outcomes.map((outcome, idx) => (
                            <li key={idx} className="text-sm flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Partnership Strategy */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-bold text-blue-600 mb-3 text-lg">Technology Partners</h3>
                  <p className="text-sm text-gray-600">
                    Hardware development and platform integrations to accelerate product development and market reach.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-green-600 mb-3 text-lg">Distribution Partners</h3>
                  <p className="text-sm text-gray-600">
                    EHR systems and training institutions to access established customer bases and distribution channels.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-purple-600 mb-3 text-lg">Validation Partners</h3>
                  <p className="text-sm text-gray-600">
                    EMS departments and training schools for real-world testing, feedback, and market validation.
                  </p>
                </div>
              </div>
            </section>
          </main>

          <footer className="mt-16 py-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500">© 2024 Skribh. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;