import React, { useState, useEffect } from 'react';

// GitHub API Configuration
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const PROJECT_URL = 'https://github.com/users/kajusarkar/projects/6/views/1';
const PROJECT_ID = 6;

interface ProjectItem {
  id: string;
  title: string;
  body: string;
  state: string;
  labels: Array<{ name: string; color: string }>;
  created_at: string;
  updated_at: string;
  assignees: Array<{ login: string }>;
  productFocusArea?: string;
  status?: string;
  priority?: string;
  fieldValues: any[];
}

interface PFAGroup {
  name: string;
  color: string;
  icon: string;
  items: ProjectItem[];
  completedCount: number;
  totalCount: number;
  progress: number;
}

const RoadmapPFADraft = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allItems, setAllItems] = useState<ProjectItem[]>([]);
  const [pfaGroups, setPfaGroups] = useState<Record<string, PFAGroup>>({});
  const [selectedPFA, setSelectedPFA] = useState<string>('Hardware');
  const [viewMode, setViewMode] = useState<'pfa' | 'timeline' | 'kanban'>('pfa');
  const [projectMetadata, setProjectMetadata] = useState<any>(null);

  // PFA Configuration with colors and icons
  const pfaConfig: Record<string, { color: string; icon: string; description: string }> = {
    'Hardware': { 
      color: 'bg-blue-500', 
      icon: '🔧', 
      description: 'Physical device development, sensors, and manufacturing' 
    },
    'Software': { 
      color: 'bg-green-500', 
      icon: '💻', 
      description: 'Application development, APIs, and user interfaces' 
    },
    'Infrastructure': { 
      color: 'bg-purple-500', 
      icon: '☁️', 
      description: 'Cloud services, deployment, and system architecture' 
    },
    'AI/ML': { 
      color: 'bg-orange-500', 
      icon: '🤖', 
      description: 'Machine learning models and AI capabilities' 
    },
    'Compliance': { 
      color: 'bg-red-500', 
      icon: '📋', 
      description: 'Regulatory compliance, HIPAA, and certifications' 
    },
    'Business': { 
      color: 'bg-yellow-500', 
      icon: '📊', 
      description: 'Business development, partnerships, and strategy' 
    },
    'Other': { 
      color: 'bg-gray-500', 
      icon: '📌', 
      description: 'Miscellaneous tasks and general items' 
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  // Simple icon assignment
  const getIconForPFA = (pfa: string): string => {
    const lowerPFA = pfa.toLowerCase();
    if (lowerPFA.includes('hardware')) return '🔧';
    if (lowerPFA.includes('software')) return '💻';
    if (lowerPFA.includes('infrastructure')) return '☁️';
    if (lowerPFA.includes('ai') || lowerPFA.includes('ml')) return '🤖';
    if (lowerPFA.includes('compliance')) return '📋';
    if (lowerPFA.includes('business')) return '📊';
    if (lowerPFA.includes('mobile')) return '📱';
    if (lowerPFA.includes('backend')) return '⚙️';
    return '📌';
  };

  const fetchProjectData = async () => {
    if (!GITHUB_TOKEN) {
      setError('GitHub token not configured');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      // Fetch all items with pagination
      const allItems: any[] = [];
      let hasNextPage = true;
      let cursor: string | null = null;
      
      while (hasNextPage) {
        const graphqlQuery = {
          query: `
            query($projectNumber: Int!, $username: String!, $cursor: String) {
              user(login: $username) {
                projectV2(number: $projectNumber) {
                  title
                  shortDescription
                  readme
                  fields(first: 20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                        dataType
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                      ... on ProjectV2IterationField {
                        id
                        name
                        configuration {
                          iterations {
                            id
                            title
                          }
                        }
                      }
                    }
                  }
                  items(first: 100, after: $cursor) {
                    totalCount
                    pageInfo {
                      hasNextPage
                      endCursor
                    }
                    nodes {
                      id
                      createdAt
                      updatedAt
                      fieldValues(first: 20) {
                        nodes {
                          ... on ProjectV2ItemFieldTextValue {
                            text
                            field {
                              ... on ProjectV2Field {
                                id
                                name
                              }
                            }
                          }
                          ... on ProjectV2ItemFieldSingleSelectValue {
                            name
                            field {
                              ... on ProjectV2SingleSelectField {
                                id
                                name
                              }
                            }
                          }
                          ... on ProjectV2ItemFieldDateValue {
                            date
                            field {
                              ... on ProjectV2Field {
                                id
                                name
                              }
                            }
                          }
                          ... on ProjectV2ItemFieldNumberValue {
                            number
                            field {
                              ... on ProjectV2Field {
                                id
                                name
                              }
                            }
                          }
                          ... on ProjectV2ItemFieldIterationValue {
                            title
                            field {
                              ... on ProjectV2IterationField {
                                id
                                name
                              }
                            }
                          }
                        }
                      }
                      content {
                        ... on Issue {
                          id
                          title
                          body
                          state
                          createdAt
                          updatedAt
                          url
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
                          id
                          title
                          body
                          state
                          createdAt
                          updatedAt
                          url
                        }
                        ... on DraftIssue {
                          id
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
            username: "kajusarkar",
            cursor: cursor
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

        if (data.data?.user?.projectV2) {
          const project = data.data.user.projectV2;
          allItems.push(...project.items.nodes);
          
          hasNextPage = project.items.pageInfo.hasNextPage;
          cursor = project.items.pageInfo.endCursor;
          
          // Store project metadata from first query
          if (allItems.length === project.items.nodes.length) {
            setProjectMetadata({
              title: project.title,
              description: project.shortDescription,
              totalItems: project.items.totalCount,
              fields: project.fields.nodes
            });
          }
        } else {
          hasNextPage = false;
        }
      }
      
      // Process all fetched items
      if (allItems.length > 0) {
        const mockProject = {
          title: projectMetadata?.title || 'Skribh Project',
          shortDescription: projectMetadata?.description || 'Medical AI Platform',
          items: { nodes: allItems, totalCount: allItems.length },
          fields: { nodes: projectMetadata?.fields || [] }
        };
        processProjectData(mockProject);
      }
      
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
    } finally {
      setLoading(false);
    }
  };

  const processProjectData = (project: any) => {
    // Store project metadata
    setProjectMetadata({
      title: project.title,
      description: project.shortDescription,
      totalItems: project.items.totalCount,
      fields: project.fields.nodes
    });

    // Process items and discover actual PFA values from GitHub
    const items = project.items.nodes || [];
    const processedItems: ProjectItem[] = [];
    const discoveredPFAs = new Set<string>();
    const groups: Record<string, PFAGroup> = {};

    // First pass: discover all unique PFA values from the actual data
    items.forEach((item: any) => {
      item.fieldValues?.nodes?.forEach((fieldValue: any) => {
        const fieldName = fieldValue.field?.name || '';
        if (fieldName === 'Product Focus Area' || 
            fieldName === 'PFA' ||
            fieldName === 'Area' ||
            fieldName === 'Focus Area' ||
            fieldName.includes('Product Focus')) {
          const pfaValue = fieldValue.name || fieldValue.text || '';
          if (pfaValue && pfaValue !== '') {
            discoveredPFAs.add(pfaValue);
          }
        }
      });
    });

    console.log('Discovered PFA values from GitHub:', Array.from(discoveredPFAs));

    // Create dynamic PFA groups based on actual GitHub values
    discoveredPFAs.forEach(pfa => {
      groups[pfa] = {
        name: pfa,
        color: 'bg-blue-500', // Simple default color
        icon: getIconForPFA(pfa),
        items: [],
        completedCount: 0,
        totalCount: 0,
        progress: 0
      };
    });

    // Always ensure we have an "Other" category
    if (!groups['Other']) {
      groups['Other'] = {
        name: 'Other',
        color: 'bg-gray-500',
        icon: '📌',
        items: [],
        completedCount: 0,
        totalCount: 0,
        progress: 0
      };
    }

    items.forEach((item: any) => {
      const processedItem: ProjectItem = {
        id: item.id,
        title: item.content?.title || 'Untitled',
        body: item.content?.body || '',
        state: item.content?.state || 'OPEN',
        labels: item.content?.labels?.nodes || [],
        created_at: item.content?.createdAt || item.createdAt,
        updated_at: item.content?.updatedAt || item.updatedAt,
        assignees: item.content?.assignees?.nodes || [],
        fieldValues: item.fieldValues?.nodes || []
      };

      // Extract PFA from field values - Use ACTUAL GitHub project values
      let productFocusArea = 'Other';
      let status = 'Todo';
      let priority = 'Medium';
      let debugInfo: string[] = [];

      // Debug: Log ALL field names and values for the first few items to see the actual structure
      if (processedItems.length < 3) {
        debugInfo.push(`=== ITEM ${processedItems.length + 1}: ${processedItem.title} ===`);
        item.fieldValues?.nodes?.forEach((fv: any, index: number) => {
          const fieldName = fv.field?.name || 'Unknown Field';
          const fieldValue_text = fv.name || fv.text || fv.number || fv.title || fv.date || 'No Value';
          debugInfo.push(`  Field ${index + 1}: "${fieldName}" = "${fieldValue_text}"`);
        });
      }

      // Process all field values and extract what we need
      item.fieldValues?.nodes?.forEach((fieldValue: any) => {
        const fieldName = fieldValue.field?.name || '';
        const fieldValue_text = fieldValue.name || fieldValue.text || fieldValue.number || fieldValue.title || '';
        
        // Log field processing for debugging
        if (processedItems.length < 3) {
          debugInfo.push(`Processing field: "${fieldName}" with value: "${fieldValue_text}"`);
        }
        
        // Extract Product Focus Area - check for exact field name first, then variations
        if (fieldName === 'Product Focus Area' || 
            fieldName === 'PFA' ||
            fieldName === 'Area' ||
            fieldName === 'Focus Area' ||
            fieldName.includes('Product Focus')) {
          
          // Use the actual GitHub project value directly
          productFocusArea = fieldValue_text || 'Other';
          debugInfo.push(`✓ Found PFA: "${fieldName}" = "${productFocusArea}"`);
        }
        
        // Extract Status
        if (fieldName === 'Status' || fieldName === 'State') {
          status = fieldValue_text || 'Todo';
          if (processedItems.length < 3) {
            debugInfo.push(`✓ Found Status: "${fieldName}" = "${status}"`);
          }
        }
        
        // Extract Priority
        if (fieldName === 'Priority' || fieldName === 'Importance') {
          priority = fieldValue_text || 'Medium';
          if (processedItems.length < 3) {
            debugInfo.push(`✓ Found Priority: "${fieldName}" = "${priority}"`);
          }
        }
      });

      // Enhanced keyword-based fallback detection
      if (productFocusArea === 'Other' || productFocusArea === '') {
        const text = `${processedItem.title} ${processedItem.body}`.toLowerCase();
        
        // Hardware keywords - expanded list
        if (text.match(/\b(hardware|device|sensor|schematic|manufacturing|prototype|pcb|circuit|electronics|embedded|firmware|comet|beacon|wearable|iot|bluetooth|connectivity|specs|requirements)\b/)) {
          productFocusArea = 'Hardware';
          debugInfo.push(`Detected Hardware from keywords in: ${processedItem.title}`);
        }
        // Infrastructure keywords
        else if (text.match(/\b(infrastructure|aws|deployment|terraform|docker|kubernetes|cloud|server|hosting|database|scaling|load|balancer|ec2|s3|rds)\b/)) {
          productFocusArea = 'Infrastructure';
          debugInfo.push(`Detected Infrastructure from keywords in: ${processedItem.title}`);
        }
        // AI/ML keywords  
        else if (text.match(/\b(ai|ml|model|training|neural|machine|learning|algorithm|data|science|nlp|llm|openai|anthropic)\b/)) {
          productFocusArea = 'AI/ML';
          debugInfo.push(`Detected AI/ML from keywords in: ${processedItem.title}`);
        }
        // Compliance keywords
        else if (text.match(/\b(compliance|hipaa|regulatory|certification|audit|security|gdpr|privacy|legal|fda|medical|device)\b/)) {
          productFocusArea = 'Compliance';
          debugInfo.push(`Detected Compliance from keywords in: ${processedItem.title}`);
        }
        // Business keywords
        else if (text.match(/\b(business|partnership|customer|sales|marketing|revenue|investor|fundraising|strategy|growth)\b/)) {
          productFocusArea = 'Business';
          debugInfo.push(`Detected Business from keywords in: ${processedItem.title}`);
        }
        // Software keywords
        else if (text.match(/\b(app|frontend|backend|api|software|ui|ux|react|mobile|web|dashboard|interface|client)\b/)) {
          productFocusArea = 'Software';
          debugInfo.push(`Detected Software from keywords in: ${processedItem.title}`);
        }
      }

      // Log debug info for first few items
      if (debugInfo.length > 0 && processedItems.length < 10) {
        console.log(`Debug for item ${processedItems.length + 1}:`, debugInfo);
      }

      processedItem.productFocusArea = productFocusArea;
      processedItem.status = status;
      processedItem.priority = priority;

      processedItems.push(processedItem);

      // Add to appropriate PFA group
      const groupKey = groups[productFocusArea] ? productFocusArea : 'Other';
      groups[groupKey].items.push(processedItem);
      groups[groupKey].totalCount++;
      
      if (processedItem.state === 'CLOSED' || status === 'Done' || status === 'Completed') {
        groups[groupKey].completedCount++;
      }
    });

    // Calculate progress for each group
    Object.values(groups).forEach(group => {
      group.progress = group.totalCount > 0 
        ? Math.round((group.completedCount / group.totalCount) * 100)
        : 0;
    });

    setAllItems(processedItems);
    setPfaGroups(groups);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4 mx-auto"></div>
          <p className="text-gray-600">Fetching Skribh project data with PFA breakdown...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Project Data</h2>
            <p className="text-red-700">{error}</p>
            <button 
              onClick={() => fetchProjectData()}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const selectedGroup = pfaGroups[selectedPFA];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Skribh Roadmap - Product Focus Areas
                <span className="ml-3 text-sm font-normal bg-green-100 text-green-800 px-2 py-1 rounded">
                  PFA Draft
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                {projectMetadata?.title} • {projectMetadata?.totalItems} total items
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchProjectData()}
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

          {/* Navigation Links */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a 
              href="/" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              🏠 Home
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="/investors" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              💼 Investor Dashboard
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="/working-canvas" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              📊 6-Month Timeline
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="/working-canvas-draft" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              📈 Upload TSV
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="/roadmap" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              🔗 Embed Test
            </a>
          </div>
          
          {/* Current Page Indicator */}
          <div className="mt-2 text-xs text-gray-500">
            📍 Currently viewing: <span className="font-medium text-gray-700">PFA Roadmap (Live GitHub Data)</span>
          </div>
          {/* View Mode Selector */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setViewMode('pfa')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'pfa' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📊 PFA Breakdown
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
              onClick={() => setViewMode('kanban')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'kanban' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📋 Kanban
            </button>
          </div>

          {/* Debug Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-bold text-yellow-800 mb-2">🔍 Debug Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Total Items Fetched:</strong> {allItems.length}
                <br />
                <strong>Available Project Fields:</strong> {projectMetadata?.fields?.map((f: any) => f.name).join(', ') || 'Loading...'}
              </div>
              <div>
                <strong>PFA Distribution:</strong>
                <div className="mt-1 space-y-1">
                  {Object.entries(pfaGroups).map(([pfa, group]) => (
                    <div key={pfa} className="flex justify-between">
                      <span>{group.icon} {pfa}:</span>
                      <span className="font-bold">{group.totalCount} tasks</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 text-xs text-yellow-700">
              <strong>Note:</strong> Open browser console (F12) to see detailed field detection logs for the first 10 items.
              If "Other" category is too large, the PFA field might have a different name in your project.
            </div>
          </div>
        </div>
      </div>

      {/* PFA Overview Cards */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Object.entries(pfaGroups).map(([pfaName, group]) => (
            <button
              key={pfaName}
              onClick={() => setSelectedPFA(pfaName)}
              className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${
                selectedPFA === pfaName ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="text-3xl mb-2">{group.icon}</div>
              <div className="font-bold text-gray-800">{pfaName}</div>
              <div className="text-2xl font-bold mt-2 text-gray-900">{group.totalCount}</div>
              <div className="text-xs text-gray-500">items</div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${group.color} h-2 rounded-full transition-all`}
                    style={{ width: `${group.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{group.progress}% complete</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto">
        {viewMode === 'pfa' && selectedGroup && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">{selectedGroup.icon}</span>
                {selectedPFA} Focus Area
              </h2>
              <p className="text-gray-600 mt-1">Tasks and progress for the {selectedPFA} area</p>
              <div className="mt-4 flex gap-4">
                <div className="bg-blue-50 rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-blue-600">{selectedGroup.totalCount}</span>
                  <span className="ml-2 text-gray-600">Total Tasks</span>
                </div>
                <div className="bg-green-50 rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-green-600">{selectedGroup.completedCount}</span>
                  <span className="ml-2 text-gray-600">Completed</span>
                </div>
                <div className="bg-orange-50 rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-orange-600">
                    {selectedGroup.totalCount - selectedGroup.completedCount}
                  </span>
                  <span className="ml-2 text-gray-600">In Progress</span>
                </div>
                <div className="bg-purple-50 rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-purple-600">{selectedGroup.progress}%</span>
                  <span className="ml-2 text-gray-600">Progress</span>
                </div>
              </div>
            </div>

            {/* Task List for Selected PFA */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {selectedGroup.items.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`border rounded-lg p-4 ${
                    item.state === 'CLOSED' ? 'bg-gray-50 opacity-75' : 'bg-white hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-mono text-sm">#{index + 1}</span>
                        <h3 className="font-medium text-gray-800">{item.title}</h3>
                        {item.priority === 'High' && (
                          <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">High Priority</span>
                        )}
                      </div>
                      {item.body && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.body}</p>
                      )}
                      <div className="flex gap-2 mt-2">
                        {item.labels.map(label => (
                          <span 
                            key={label.name}
                            className="px-2 py-0.5 rounded text-xs text-white"
                            style={{ backgroundColor: `#${label.color}` }}
                          >
                            {label.name}
                          </span>
                        ))}
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          item.state === 'CLOSED' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status || item.state}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-right">
                      <div>Updated: {new Date(item.updated_at).toLocaleDateString()}</div>
                      {item.assignees.length > 0 && (
                        <div>Assigned to: {item.assignees.map(a => a.login).join(', ')}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'timeline' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Timeline View - All PFAs</h2>
            <div className="space-y-2">
              {allItems.slice(0, 20).map((item, index) => (
                <div key={item.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded">
                  <div className="text-2xl">{pfaConfig[item.productFocusArea || 'Other']?.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">
                      {item.productFocusArea} • {item.status} • Updated {new Date(item.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'kanban' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-800 mb-3">📝 To Do</h3>
              <div className="space-y-2">
                {allItems
                  .filter(item => item.status === 'Todo' || (item.state === 'OPEN' && item.status !== 'In Progress'))
                  .slice(0, 10)
                  .map(item => (
                    <div key={item.id} className="bg-gray-50 rounded p-2 text-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <span>{pfaGroups[item.productFocusArea || 'Other']?.icon || '📌'}</span>
                        <span className="font-medium line-clamp-1">{item.title}</span>
                      </div>
                      <div className="text-xs text-gray-500">{item.productFocusArea}</div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-800 mb-3">🚀 In Progress</h3>
              <div className="space-y-2">
                {allItems
                  .filter(item => item.status === 'In Progress' || item.status === 'In Review')
                  .slice(0, 10)
                  .map(item => (
                    <div key={item.id} className="bg-blue-50 rounded p-2 text-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <span>{pfaGroups[item.productFocusArea || 'Other']?.icon || '📌'}</span>
                        <span className="font-medium line-clamp-1">{item.title}</span>
                      </div>
                      <div className="text-xs text-gray-500">{item.productFocusArea}</div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-800 mb-3">✅ Done</h3>
              <div className="space-y-2">
                {allItems
                  .filter(item => item.state === 'CLOSED' || item.status === 'Done' || item.status === 'Completed')
                  .slice(0, 10)
                  .map(item => (
                    <div key={item.id} className="bg-green-50 rounded p-2 text-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <span>{pfaGroups[item.productFocusArea || 'Other']?.icon || '📌'}</span>
                        <span className="font-medium line-clamp-1">{item.title}</span>
                      </div>
                      <div className="text-xs text-gray-500">{item.productFocusArea}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hardware-Specific Summary (Always Visible) */}
      {selectedPFA === 'Hardware' && pfaGroups['Hardware'] && (
        <div className="max-w-7xl mx-auto mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">🔧 Hardware Development Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Key Hardware Milestones:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  {pfaGroups['Hardware'].items.slice(0, 5).map(item => (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Hardware Statistics:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Hardware Tasks:</span>
                    <span className="font-bold">{pfaGroups['Hardware'].totalCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed:</span>
                    <span className="font-bold text-green-600">{pfaGroups['Hardware'].completedCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Progress:</span>
                    <span className="font-bold text-orange-600">
                      {pfaGroups['Hardware'].totalCount - pfaGroups['Hardware'].completedCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completion Rate:</span>
                    <span className="font-bold text-blue-600">{pfaGroups['Hardware'].progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapPFADraft;