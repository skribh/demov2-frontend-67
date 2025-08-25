import React, { useState, useEffect } from 'react';

// Note: Using REST API since GraphQL requires different project structure
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const PROJECT_URL = 'https://github.com/users/kajusarkar/projects/6/views/1';
const PROJECT_ID = 6; // Your Skribh project ID

interface GitHubIssue {
  id: number;
  title: string;
  body: string;
  state: string;
  labels: Array<{ name: string; color: string }>;
  created_at: string;
  updated_at: string;
  html_url: string;
  assignees: Array<{ login: string }>;
  milestone?: { title: string };
}

interface ProjectColumn {
  id: number;
  name: string;
  cards: Array<{
    id: number;
    note?: string;
    content_url?: string;
    created_at: string;
  }>;
}

const RoadmapAPIDraft = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<any>(null);
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [viewMode, setViewMode] = useState<'cards' | 'timeline' | 'metrics'>('cards');

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    if (!GITHUB_TOKEN) {
      setError('GitHub token not configured. Please add VITE_GITHUB_TOKEN to .env file.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      // Using GitHub GraphQL API to fetch user project data
      const graphqlQuery = {
        query: `
          query($projectNumber: Int!, $username: String!) {
            user(login: $username) {
              projectV2(number: $projectNumber) {
                title
                shortDescription
                readme
                items(first: 100) {
                  totalCount
                  nodes {
                    id
                    fieldValues(first: 10) {
                      nodes {
                        ... on ProjectV2ItemFieldTextValue {
                          text
                          field {
                            ... on ProjectV2Field {
                              name
                            }
                          }
                        }
                        ... on ProjectV2ItemFieldSingleSelectValue {
                          name
                          field {
                            ... on ProjectV2SingleSelectField {
                              name
                            }
                          }
                        }
                        ... on ProjectV2ItemFieldDateValue {
                          date
                          field {
                            ... on ProjectV2Field {
                              name
                            }
                          }
                        }
                      }
                    }
                    content {
                      ... on Issue {
                        title
                        body
                        state
                        createdAt
                        updatedAt
                        labels(first: 10) {
                          nodes {
                            name
                            color
                          }
                        }
                        assignees(first: 5) {
                          nodes {
                            login
                          }
                        }
                      }
                      ... on PullRequest {
                        title
                        body
                        state
                        createdAt
                        updatedAt
                      }
                      ... on DraftIssue {
                        title
                        body
                        createdAt
                        updatedAt
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          projectNumber: PROJECT_ID,
          username: "kajusarkar"
        }
      };

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(graphqlQuery)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`GitHub API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      
      if (data.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
      }

      // Process the project data
      if (data.data?.user?.projectV2) {
        const project = data.data.user.projectV2;
        const items = project.items.nodes || [];
        
        // Convert to issues format for compatibility
        const convertedIssues = items.map((item: any) => ({
          id: item.id,
          title: item.content?.title || 'Untitled',
          body: item.content?.body || '',
          state: item.content?.state || 'OPEN',
          labels: item.content?.labels?.nodes || [],
          created_at: item.content?.createdAt || new Date().toISOString(),
          updated_at: item.content?.updatedAt || new Date().toISOString(),
          html_url: PROJECT_URL,
          assignees: item.content?.assignees?.nodes || [],
          fieldValues: item.fieldValues?.nodes || []
        }));
        
        setIssues(convertedIssues);
        processProjectData(convertedIssues);
        
        // Store project metadata
        setProjectData(prev => ({
          ...prev,
          projectTitle: project.title,
          projectDescription: project.shortDescription,
          totalItems: project.items.totalCount
        }));
      } else {
        // Fallback to REST API for user's repositories
        const reposResponse = await fetch('https://api.github.com/user/repos?per_page=100', {
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (reposResponse.ok) {
          const repos = await reposResponse.json();
          
          // Try to fetch issues from user's repositories
          const allIssues: GitHubIssue[] = [];
          for (const repo of repos.slice(0, 5)) { // Limit to first 5 repos
            const issuesResponse = await fetch(`${repo.url}/issues?state=all&per_page=30`, {
              headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
              }
            });
            
            if (issuesResponse.ok) {
              const repoIssues = await issuesResponse.json();
              allIssues.push(...repoIssues);
            }
          }
          
          setIssues(allIssues);
          processProjectData(allIssues);
        }
      }
      
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
    } finally {
      setLoading(false);
    }
  };

  const processProjectData = (issuesData: GitHubIssue[]) => {
    // Group issues by status/labels for investor view
    const grouped = {
      planning: issuesData.filter(i => i.labels.some(l => l.name.includes('planning'))),
      inProgress: issuesData.filter(i => i.state === 'open' && !i.labels.some(l => l.name.includes('planning'))),
      completed: issuesData.filter(i => i.state === 'closed'),
      
      // Group by category
      infrastructure: issuesData.filter(i => 
        i.title.toLowerCase().includes('infrastructure') || 
        i.title.toLowerCase().includes('aws') ||
        i.title.toLowerCase().includes('terraform')
      ),
      features: issuesData.filter(i => 
        i.title.toLowerCase().includes('feature') || 
        i.title.toLowerCase().includes('ui') ||
        i.title.toLowerCase().includes('app')
      ),
      security: issuesData.filter(i => 
        i.title.toLowerCase().includes('security') || 
        i.title.toLowerCase().includes('compliance') ||
        i.title.toLowerCase().includes('hipaa')
      )
    };

    setProjectData({
      totalItems: issuesData.length,
      openItems: issuesData.filter(i => i.state === 'open').length,
      closedItems: issuesData.filter(i => i.state === 'closed').length,
      grouped
    });
  };

  const calculateProgress = () => {
    if (!projectData) return 0;
    return Math.round((projectData.closedItems / projectData.totalItems) * 100) || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4 mx-auto"></div>
          <p className="text-gray-600">Fetching GitHub project data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading GitHub Data</h2>
            <p className="text-red-700 mb-4">{error}</p>
            <div className="space-y-2 text-sm text-red-600">
              <p>Possible solutions:</p>
              <ul className="list-disc pl-5">
                <li>Check if the GitHub token is valid and has the necessary permissions</li>
                <li>Ensure the project is accessible with the provided token</li>
                <li>Verify the project URL is correct</li>
              </ul>
            </div>
            <div className="mt-4 flex gap-3">
              <button 
                onClick={() => fetchGitHubData()}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Retry
              </button>
              <a 
                href={PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Skribh Development Roadmap
                <span className="ml-3 text-sm font-normal bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  API Draft
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                Live data from your GitHub Project - Investor-optimized view
              </p>
              {projectData?.projectTitle && (
                <p className="text-sm text-gray-500 mt-1">
                  Project: {projectData.projectTitle} • {projectData.projectDescription || 'Medical AI Platform'}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchGitHubData()}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                🔄 Refresh
              </button>
              <a 
                href={PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          {/* View Mode Selector */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'cards' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📋 Card View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'timeline' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📅 Timeline
            </button>
            <button
              onClick={() => setViewMode('metrics')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'metrics' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📊 Metrics
            </button>
          </div>

          {/* Progress Overview */}
          {projectData && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{calculateProgress()}%</div>
                <div className="text-sm text-gray-700">Overall Progress</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600">{projectData.closedItems}</div>
                <div className="text-sm text-gray-700">Completed Tasks</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">{projectData.openItems}</div>
                <div className="text-sm text-gray-700">In Progress</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">{projectData.totalItems}</div>
                <div className="text-sm text-gray-700">Total Items</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {viewMode === 'cards' && projectData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Planning Column */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center justify-between">
                <span>📝 Planning</span>
                <span className="text-sm font-normal text-gray-500">
                  {projectData.grouped.planning.length} items
                </span>
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {projectData.grouped.planning.slice(0, 5).map((issue: GitHubIssue) => (
                  <div key={issue.id} className="bg-gray-50 rounded p-2 text-sm">
                    <div className="font-medium text-gray-800 line-clamp-2">{issue.title}</div>
                    <div className="flex gap-1 mt-1">
                      {issue.labels.slice(0, 2).map(label => (
                        <span 
                          key={label.name}
                          className="px-2 py-0.5 rounded text-xs"
                          style={{ backgroundColor: `#${label.color}`, color: '#fff' }}
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center justify-between">
                <span>🚀 In Progress</span>
                <span className="text-sm font-normal text-gray-500">
                  {projectData.grouped.inProgress.length} items
                </span>
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {projectData.grouped.inProgress.slice(0, 5).map((issue: GitHubIssue) => (
                  <div key={issue.id} className="bg-blue-50 rounded p-2 text-sm">
                    <div className="font-medium text-gray-800 line-clamp-2">{issue.title}</div>
                    <div className="flex gap-1 mt-1">
                      {issue.labels.slice(0, 2).map(label => (
                        <span 
                          key={label.name}
                          className="px-2 py-0.5 rounded text-xs"
                          style={{ backgroundColor: `#${label.color}`, color: '#fff' }}
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Column */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center justify-between">
                <span>✅ Completed</span>
                <span className="text-sm font-normal text-gray-500">
                  {projectData.grouped.completed.length} items
                </span>
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {projectData.grouped.completed.slice(0, 5).map((issue: GitHubIssue) => (
                  <div key={issue.id} className="bg-green-50 rounded p-2 text-sm">
                    <div className="font-medium text-gray-800 line-clamp-2">{issue.title}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Closed {new Date(issue.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {viewMode === 'timeline' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Development Timeline</h3>
            <div className="space-y-4">
              {issues.slice(0, 10).map((issue, index) => (
                <div key={issue.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      issue.state === 'closed' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{issue.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {issue.state === 'closed' ? 'Completed' : 'In Progress'} • 
                      Updated {new Date(issue.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'metrics' && projectData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Progress by Category</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Infrastructure</span>
                    <span>{projectData.grouped.infrastructure.length} tasks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Features</span>
                    <span>{projectData.grouped.features.length} tasks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Security & Compliance</span>
                    <span>{projectData.grouped.security.length} tasks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-2">
                {issues.slice(0, 5).map(issue => (
                  <div key={issue.id} className="flex items-center gap-2 text-sm">
                    <span className={`w-2 h-2 rounded-full ${
                      issue.state === 'closed' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></span>
                    <span className="flex-1 truncate">{issue.title}</span>
                    <span className="text-gray-500 text-xs">
                      {new Date(issue.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info Footer */}
      <div className="max-w-7xl mx-auto mt-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Success!</strong> This page uses GitHub's GraphQL API to fetch data from your Skribh project.
            The data is fetched in real-time using your personal access token. If you see data above, 
            your project is properly configured and accessible.
          </p>
          <p className="text-xs text-green-700 mt-2">
            Project URL: {PROJECT_URL}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapAPIDraft;