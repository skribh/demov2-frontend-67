import React, { useState } from 'react';

const RoadmapEmbed = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [embedError, setEmbedError] = useState(false);
  
  // Test different embedding URLs
  const githubProjectUrls = {
    direct: 'https://github.com/orgs/github/projects/4247/views/1',
    // Alternative URLs that might work better with iframes
    raw: 'https://github.com/orgs/github/projects/4247/views/1?layout=table',
    api: 'https://api.github.com/projects/4247' // This won't work directly but shows the concept
  };
  
  const [currentUrl, setCurrentUrl] = useState(githubProjectUrls.direct);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header with Key Metrics */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Live Development Roadmap</h1>
              <p className="text-lg text-gray-600">
                Real-time view of our GitHub project board - full transparency for investors
              </p>
            </div>
            <a 
              href="https://github.com/orgs/github/projects/4247/views/1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Open in GitHub
            </a>
          </div>

          {/* Key Investor Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">37+</div>
              <div className="text-sm text-gray-700">Active Tasks</div>
              <div className="text-xs text-gray-500 mt-1">Backend infrastructure focus</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600">Q1 2025</div>
              <div className="text-sm text-gray-700">MVP Launch</div>
              <div className="text-xs text-gray-500 mt-1">Production deployment ready</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-700">Engineering Tracks</div>
              <div className="text-xs text-gray-500 mt-1">Parallel development streams</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="text-2xl font-bold text-orange-600">HIPAA</div>
              <div className="text-sm text-gray-700">Compliant</div>
              <div className="text-xs text-gray-500 mt-1">Security-first architecture</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 mt-4 text-sm">
            <a href="/working-canvas" className="text-blue-600 hover:underline">View 6-Month Timeline →</a>
            <a href="/working-canvas-draft" className="text-blue-600 hover:underline">Investor Dashboard →</a>
            <a href="/investors" className="text-blue-600 hover:underline">Full Investor Deck →</a>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Key Development Areas */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-800 mb-3">Current Sprint Focus</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">●</span>
                <div>
                  <div className="font-medium">AWS Infrastructure</div>
                  <div className="text-xs text-gray-500">ALB, EC2, Auto-scaling</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">●</span>
                <div>
                  <div className="font-medium">FastAPI Migration</div>
                  <div className="text-xs text-gray-500">Backend optimization</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">●</span>
                <div>
                  <div className="font-medium">ML Pipeline</div>
                  <div className="text-xs text-gray-500">Training infrastructure</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">●</span>
                <div>
                  <div className="font-medium">Mobile App</div>
                  <div className="text-xs text-gray-500">Production build pipeline</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-800 mb-3">Tech Stack</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• AWS (ECS, ALB, S3, RDS)</div>
              <div>• FastAPI + gRPC</div>
              <div>• React Native</div>
              <div>• Terraform IaC</div>
              <div>• GitHub Actions CI/CD</div>
              <div>• Docker/Kubernetes</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-800 mb-3">Compliance & Security</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>NEMSIS Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>SOC2 (In Progress)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Area - GitHub Project Iframe */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">GitHub Project Board - Live View</span>
              </div>
              {!iframeLoaded && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Loading...</span>
                </div>
              )}
            </div>
            
            {/* Testing Different Embedding Methods */}
            <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-medium text-yellow-800">Testing Embed:</span>
                  <span className="ml-2 text-yellow-700">GitHub Public Roadmap</span>
                </div>
                <button
                  onClick={() => {
                    setEmbedError(false);
                    setIframeLoaded(false);
                    setCurrentUrl(currentUrl === githubProjectUrls.direct ? githubProjectUrls.raw : githubProjectUrls.direct);
                  }}
                  className="text-xs bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700"
                >
                  Try Alternative URL
                </button>
              </div>
            </div>
            
            {/* The Magic: GitHub Project Iframe */}
            <div className="relative bg-gray-100" style={{ height: '800px' }}>
              {!embedError ? (
                <iframe
                  src={currentUrl}
                  className="w-full h-full border-0"
                  title="GitHub Public Roadmap"
                  onLoad={(e) => {
                    // Check if actually loaded content
                    try {
                      // This will throw an error if cross-origin
                      const iframeDoc = (e.target as HTMLIFrameElement).contentDocument;
                      if (iframeDoc) {
                        setIframeLoaded(true);
                      }
                    } catch (err) {
                      console.log('Iframe loaded but cross-origin restrictions apply');
                      setIframeLoaded(true); // Still mark as loaded
                    }
                  }}
                  onError={() => {
                    setEmbedError(true);
                    setIframeLoaded(false);
                  }}
                  // Try different sandbox modes
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-white">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🔒</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Embedding Restricted</h3>
                    <p className="text-gray-600 mb-4">
                      GitHub prevents direct embedding for security reasons.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="https://github.com/orgs/github/projects/4247/views/1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                      >
                        View GitHub Public Roadmap →
                      </a>
                      <button
                        onClick={() => setEmbedError(false)}
                        className="block w-full text-gray-600 hover:text-gray-800"
                      >
                        Try embedding again
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Loading indicator */}
              {!iframeLoaded && !embedError && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Attempting to load GitHub Public Roadmap...</p>
                    <p className="text-sm text-gray-500 mt-2">URL: {currentUrl}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Alternative Solutions */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">📋 Alternative Viewing Options:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <a 
                  href="https://github.com/orgs/github/projects/4247/views/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 hover:bg-blue-100 transition-colors"
                >
                  <span>🔗</span>
                  <span>Direct GitHub Link</span>
                </a>
                <a 
                  href="/working-canvas-draft"
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 hover:bg-blue-100 transition-colors"
                >
                  <span>📊</span>
                  <span>Upload TSV Export</span>
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('https://github.com/orgs/github/projects/4247/views/1');
                    alert('Link copied to clipboard!');
                  }}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 hover:bg-blue-100 transition-colors text-left"
                >
                  <span>📋</span>
                  <span>Copy Link</span>
                </button>
              </div>
              <p className="text-xs text-blue-700 mt-3">
                <strong>Note:</strong> If the embed doesn't work, it's because GitHub uses X-Frame-Options headers to prevent embedding. 
                Consider making your project public and using the GitHub API to fetch and display data instead.
              </p>
            </div>
          </div>

          {/* Bottom Info Panel */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-1">About This View</h3>
                <p className="text-sm text-gray-600">
                  This is our live GitHub project board showing real-time development progress. 
                  Each card represents a specific technical task or feature being implemented. 
                  The board automatically updates as our engineering team completes work.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-1">For Investors</h3>
                <p className="text-sm text-gray-600">
                  This transparency demonstrates our commitment to execution and allows you to track 
                  progress in real-time. For a simplified view with business metrics, check out our 
                  <a href="/working-canvas-draft" className="text-blue-600 hover:underline ml-1">investor dashboard</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapEmbed;