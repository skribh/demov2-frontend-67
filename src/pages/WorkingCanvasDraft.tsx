import React, { useState, useRef, useEffect } from 'react';
import timelineData from '@/data/timelineData.json';

// TypeScript definitions for GitHub Project TSV structure
type GitHubTaskRow = {
  ID: string;
  Title: string;
  Body: string;
  Status: string;
  Priority: string;
  'Issue/PR Number': string;
  State: string;
  URL: string;
  'Created At': string;
  'Updated At': string;
};

// Investor-friendly aggregated view structure
type InvestorTrack = {
  name: string;
  description: string;
  color: string;
  githubTasks: number;
  completedTasks: number;
  progress: number;
  monthlyMilestones: {
    [key: string]: {
      milestone: string;
      tasksCompleted: number;
      totalTasks: number;
      keyDeliverables: string[];
      githubLinks: string[];
    };
  };
  totalInvestment?: number;
  burnRate?: number;
};

type InvestorViewData = {
  tracks: Record<string, InvestorTrack>;
  totalTasks: number;
  completedTasks: number;
  overallProgress: number;
  lastSyncDate: string;
  githubProjectUrl: string;
};

const WorkingCanvasDraft = () => {
  // File upload refs
  const githubFileInputRef = useRef<HTMLInputElement>(null);
  
  // State management
  const [viewMode, setViewMode] = useState<'investor' | 'technical'>('investor');
  const [githubData, setGithubData] = useState<GitHubTaskRow[]>([]);
  const [investorData, setInvestorData] = useState<InvestorViewData | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  // Track categories mapping (GitHub tasks to investor tracks)
  const taskCategoryMapping: Record<string, string> = {
    'ALB': 'Infrastructure',
    'EC2': 'Infrastructure',
    'AWS': 'Infrastructure',
    'Database': 'Infrastructure',
    'ML': 'AI & Machine Learning',
    'Model': 'AI & Machine Learning',
    'Frontend': 'Product Development',
    'UI': 'Product Development',
    'Mobile': 'Product Development',
    'FastAPI': 'Backend Development',
    'API': 'Backend Development',
    'gRPC': 'Backend Development',
    'CI/CD': 'DevOps & Deployment',
    'Terraform': 'DevOps & Deployment',
    'Deploy': 'DevOps & Deployment',
    'Test': 'Quality Assurance',
    'Optimization': 'Performance',
    'Protocol': 'Medical Compliance',
    'Demo': 'Marketing & Sales'
  };

  // Track colors for visual consistency
  const trackColors: Record<string, string> = {
    'Infrastructure': 'bg-blue-500',
    'AI & Machine Learning': 'bg-purple-500',
    'Product Development': 'bg-green-500',
    'Backend Development': 'bg-orange-500',
    'DevOps & Deployment': 'bg-red-500',
    'Quality Assurance': 'bg-yellow-500',
    'Performance': 'bg-indigo-500',
    'Medical Compliance': 'bg-pink-500',
    'Marketing & Sales': 'bg-teal-500'
  };

  /**
   * Categorize GitHub task based on title/body content
   */
  const categorizeTask = (task: GitHubTaskRow): string => {
    const searchText = `${task.Title} ${task.Body}`.toLowerCase();
    
    for (const [keyword, category] of Object.entries(taskCategoryMapping)) {
      if (searchText.includes(keyword.toLowerCase())) {
        return category;
      }
    }
    return 'General Development';
  };

  /**
   * Convert GitHub project data to investor-friendly view
   */
  const convertGitHubToInvestorView = (tasks: GitHubTaskRow[]): InvestorViewData => {
    const tracks: Record<string, InvestorTrack> = {};
    let totalTasks = 0;
    let completedTasks = 0;

    // Initialize track categories
    const categories = [...new Set(Object.values(taskCategoryMapping)), 'General Development'];
    categories.forEach(category => {
      tracks[category] = {
        name: category,
        description: `${category} initiatives and milestones`,
        color: trackColors[category] || 'bg-gray-500',
        githubTasks: 0,
        completedTasks: 0,
        progress: 0,
        monthlyMilestones: {}
      };

      // Initialize 6-month timeline
      for (let i = 1; i <= 6; i++) {
        tracks[category].monthlyMilestones[`month${i}`] = {
          milestone: `Month ${i} Goals`,
          tasksCompleted: 0,
          totalTasks: 0,
          keyDeliverables: [],
          githubLinks: []
        };
      }
    });

    // Process GitHub tasks
    tasks.forEach(task => {
      totalTasks++;
      const category = categorizeTask(task);
      const track = tracks[category];
      
      if (track) {
        track.githubTasks++;
        
        // Check if task is completed (you might need to adjust based on your Status values)
        const isCompleted = task.Status?.toLowerCase().includes('done') || 
                           task.Status?.toLowerCase().includes('complete') ||
                           task.State?.toLowerCase().includes('closed');
        
        if (isCompleted) {
          track.completedTasks++;
          completedTasks++;
        }

        // Distribute tasks across months (simplified - you can make this smarter)
        const createdDate = new Date(task['Created At']);
        const monthsSinceStart = Math.min(6, Math.max(1, 
          Math.ceil((Date.now() - createdDate.getTime()) / (30 * 24 * 60 * 60 * 1000))
        ));
        const monthKey = `month${monthsSinceStart}`;
        
        if (track.monthlyMilestones[monthKey]) {
          track.monthlyMilestones[monthKey].totalTasks++;
          if (isCompleted) {
            track.monthlyMilestones[monthKey].tasksCompleted++;
          }
          
          // Add as key deliverable if high priority or has PR
          if (task.Priority === 'High' || task['Issue/PR Number']) {
            track.monthlyMilestones[monthKey].keyDeliverables.push(task.Title);
            if (task.URL) {
              track.monthlyMilestones[monthKey].githubLinks.push(task.URL);
            }
          }
        }

        // Calculate track progress
        track.progress = track.githubTasks > 0 
          ? Math.round((track.completedTasks / track.githubTasks) * 100)
          : 0;
      }
    });

    // Update milestone descriptions based on actual tasks
    Object.values(tracks).forEach(track => {
      Object.entries(track.monthlyMilestones).forEach(([monthKey, milestone]) => {
        if (milestone.keyDeliverables.length > 0) {
          milestone.milestone = milestone.keyDeliverables[0].substring(0, 30) + '...';
        }
      });
    });

    return {
      tracks,
      totalTasks,
      completedTasks,
      overallProgress: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      lastSyncDate: new Date().toISOString(),
      githubProjectUrl: 'https://github.com/orgs/github/projects/4247/views/1'
    };
  };

  /**
   * Handle GitHub TSV file upload
   */
  const handleGitHubTSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setIsLoading(true);
    setUploadStatus('Parsing GitHub project data...');
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const tsvText = e.target?.result as string;
        const lines = tsvText.trim().split('\n');
        
        if (lines.length < 2) {
          throw new Error('TSV file must contain at least a header row and one data row');
        }
        
        // Parse headers
        const headers = lines[0].split('\t').map(h => h.trim());
        
        // Parse data rows
        const tasks: GitHubTaskRow[] = lines.slice(1).map((line) => {
          const cells = line.split('\t');
          const row: any = {};
          
          headers.forEach((header, index) => {
            row[header] = cells[index] ? cells[index].trim() : '';
          });
          
          return row as GitHubTaskRow;
        });
        
        setGithubData(tasks);
        const investorView = convertGitHubToInvestorView(tasks);
        setInvestorData(investorView);
        
        setUploadStatus(`✅ Successfully synced ${tasks.length} tasks from GitHub`);
        setIsLoading(false);
        
        // Clear the file input
        if (githubFileInputRef.current) {
          githubFileInputRef.current.value = '';
        }
        
      } catch (error) {
        console.error('GitHub TSV parsing error:', error);
        setUploadStatus(`❌ Error parsing GitHub data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        setIsLoading(false);
      }
    };
    
    reader.onerror = () => {
      setUploadStatus('❌ Error reading file');
      setIsLoading(false);
    };
    
    reader.readAsText(file);
  };

  /**
   * Export investor view as simplified TSV
   */
  const handleExportInvestorTSV = () => {
    if (!investorData) {
      setUploadStatus('❌ No data to export. Please sync GitHub data first.');
      return;
    }

    try {
      const headers = ['Track', 'Progress %', 'Total Tasks', 'Completed Tasks', 'Current Milestone', 'Key Deliverables'];
      const rows: string[] = [headers.join('\t')];
      
      Object.entries(investorData.tracks).forEach(([trackKey, track]) => {
        if (track.githubTasks > 0) {
          const currentMonth = Object.entries(track.monthlyMilestones)
            .find(([_, m]) => m.totalTasks > 0 && m.tasksCompleted < m.totalTasks);
          
          const currentMilestone = currentMonth ? currentMonth[1].milestone : 'Planning';
          const keyDeliverables = currentMonth 
            ? currentMonth[1].keyDeliverables.slice(0, 3).join('; ')
            : '';
          
          const row = [
            track.name,
            `${track.progress}%`,
            track.githubTasks.toString(),
            track.completedTasks.toString(),
            currentMilestone,
            keyDeliverables
          ];
          rows.push(row.join('\t'));
        }
      });
      
      const tsvContent = rows.join('\n');
      const blob = new Blob([tsvContent], { type: 'text/tab-separated-values' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `investor-roadmap-${new Date().toISOString().split('T')[0]}.tsv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setUploadStatus('✅ Investor view exported successfully');
    } catch (error) {
      console.error('Export error:', error);
      setUploadStatus('❌ Error exporting data');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Strategic Roadmap Dashboard</h1>
              <p className="text-lg text-gray-600">
                GitHub-synced project overview with investor-friendly visualization
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('investor')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'investor' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                👔 Investor View
              </button>
              <button
                onClick={() => setViewMode('technical')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'technical' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🔧 Technical View
              </button>
            </div>
          </div>

          {/* GitHub Sync Controls */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4 border border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">📊 GitHub Project Sync</h3>
                <p className="text-sm text-blue-700 mb-3">
                  Import your GitHub project TSV export to automatically generate investor-friendly views.
                  The system will categorize tasks and calculate progress metrics.
                </p>
                <div className="flex gap-3 items-center flex-wrap">
                  <label className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer shadow-md">
                    🔄 Sync GitHub Data
                    <input
                      ref={githubFileInputRef}
                      type="file"
                      accept=".tsv,.txt"
                      onChange={handleGitHubTSVUpload}
                      className="hidden"
                    />
                  </label>
                  <button 
                    onClick={handleExportInvestorTSV}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md"
                    disabled={!investorData}
                  >
                    📤 Export Investor View
                  </button>
                  <a 
                    href="https://github.com/orgs/github/projects/4247/views/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-md"
                  >
                    🔗 View on GitHub
                  </a>
                </div>
              </div>
              {investorData && (
                <div className="ml-4 text-right">
                  <div className="text-sm text-gray-600">Last Sync</div>
                  <div className="text-xs text-gray-500">
                    {new Date(investorData.lastSyncDate).toLocaleString()}
                  </div>
                </div>
              )}
            </div>
            {uploadStatus && (
              <div className={`mt-3 p-2 rounded text-sm ${
                uploadStatus.includes('❌') 
                  ? 'bg-red-100 text-red-700' 
                  : uploadStatus.includes('✅')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {uploadStatus}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="text-sm text-gray-500">
            Navigate: 
            <a href="/" className="text-blue-600 hover:underline ml-2">Home</a> | 
            <a href="/investors" className="text-blue-600 hover:underline ml-2">Investors</a> | 
            <a href="/working-canvas" className="text-blue-600 hover:underline ml-2">Original Canvas</a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {isLoading ? (
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-gray-600">Processing GitHub data...</span>
            </div>
          </div>
        </div>
      ) : investorData ? (
        <div className="max-w-7xl mx-auto">
          {/* Overall Progress Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-3xl font-bold text-blue-500">{investorData.overallProgress}%</div>
              <div className="text-sm text-gray-600">Overall Progress</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-3xl font-bold text-green-500">{investorData.completedTasks}</div>
              <div className="text-sm text-gray-600">Tasks Completed</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-3xl font-bold text-orange-500">{investorData.totalTasks}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-3xl font-bold text-purple-500">
                {Object.values(investorData.tracks).filter(t => t.githubTasks > 0).length}
              </div>
              <div className="text-sm text-gray-600">Active Tracks</div>
            </div>
          </div>

          {/* Track Progress Cards */}
          {viewMode === 'investor' ? (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Development Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(investorData.tracks)
                  .filter(([_, track]) => track.githubTasks > 0)
                  .sort((a, b) => b[1].githubTasks - a[1].githubTasks)
                  .map(([trackKey, track]) => (
                    <div 
                      key={trackKey}
                      className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedTrack(trackKey === selectedTrack ? null : trackKey)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 ${track.color} rounded-full mr-2`}></div>
                          <h3 className="font-semibold text-gray-800">{track.name}</h3>
                        </div>
                        <span className="text-sm text-gray-500">{track.githubTasks} tasks</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div 
                          className={`${track.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${track.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{track.completedTasks} completed</span>
                        <span className="font-medium text-gray-800">{track.progress}%</span>
                      </div>

                      {/* Expanded Details */}
                      {selectedTrack === trackKey && (
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="font-medium text-sm text-gray-700 mb-2">Recent Milestones:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {Object.entries(track.monthlyMilestones)
                              .filter(([_, m]) => m.keyDeliverables.length > 0)
                              .slice(0, 3)
                              .map(([month, milestone]) => (
                                <li key={month} className="flex items-start">
                                  <span className="text-green-500 mr-1">✓</span>
                                  <span>{milestone.keyDeliverables[0]?.substring(0, 40)}...</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            /* Technical View - Raw GitHub Data */
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Task List</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {githubData.slice(0, 20).map((task, index) => (
                      <tr key={task.ID || index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {task.Title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            trackColors[categorizeTask(task)] || 'bg-gray-500'
                          } text-white`}>
                            {categorizeTask(task)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {task.Status || 'Pending'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {task.Priority || 'Normal'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(task['Updated At']).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {githubData.length > 20 && (
                  <div className="text-center py-4 text-sm text-gray-500">
                    Showing 20 of {githubData.length} tasks
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Data Synced Yet</h2>
              <p className="text-gray-600 mb-6">
                Import your GitHub project TSV file to get started with the investor dashboard
              </p>
              <label className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                🔄 Import GitHub Project Data
                <input
                  type="file"
                  accept=".tsv,.txt"
                  onChange={handleGitHubTSVUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkingCanvasDraft;