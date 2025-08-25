import React, { useState, useRef } from 'react';
import timelineData from '@/data/timelineData.json';

// TypeScript definitions for TSV data structure
type TSVRow = {
  Title: string;
  Description: string;
  'Start Date': string;
  'End Date': string;
  Status: string;
  Phase: string;
  Investment?: string;
  'Burn Rate'?: string;
  Color?: string;
  Actions?: string;
  Payment?: string;
  Highlight?: string;
};

type TimelineData = {
  tracks: Record<string, {
    name: string;
    description: string;
    color: string;
    partner?: string;
    totalInvestment: number;
    timeline: Record<string, {
      milestone: string;
      payment?: number;
      actions?: string[];
      burnRate?: number;
      highlight?: boolean;
    }>;
  }>;
  totalInvestment: number;
  peakCashMonth: number;
  peakCashAmount: number;
};

type TrackKey = keyof typeof timelineData.tracks;

const WorkingCanvas = () => {
  // TSV upload state and file reference
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentTimelineData, setCurrentTimelineData] = useState<TimelineData>(timelineData);
  const [isUsingUploadedData, setIsUsingUploadedData] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  
  // 6-Month Roadmap state
  const [selectedTracks, setSelectedTracks] = useState<TrackKey[]>(['hardware', 'appDevelopment']);
  const [showBurnRate, setShowBurnRate] = useState(false);

  // 6-Month Roadmap functions
  const toggleTrack = (trackKey: string) => {
    setSelectedTracks(prev =>
      prev.includes(trackKey as TrackKey)
        ? prev.filter(t => t !== trackKey)
        : [...prev, trackKey as TrackKey]
    );
  };

  /**
   * TSV to Timeline Data Conversion
   * Maps TSV columns to timeline track structure for GitHub Projects compatibility
   * Expected TSV format: Title, Description, Start Date, End Date, Status, Phase, Investment, Burn Rate, Color, Actions, Payment, Highlight
   */
  const convertTSVToTimelineData = (tsvRows: TSVRow[]): TimelineData => {
    const tracks: Record<string, any> = {};
    let totalInvestment = 0;
    
    // Group TSV rows by Phase (becomes track)
    const phaseGroups = tsvRows.reduce((acc, row) => {
      const phase = row.Phase || 'default';
      if (!acc[phase]) acc[phase] = [];
      acc[phase].push(row);
      return acc;
    }, {} as Record<string, TSVRow[]>);
    
    // Convert each phase group to a track
    Object.entries(phaseGroups).forEach(([phase, rows]) => {
      const trackKey = phase.toLowerCase().replace(/\s+/g, '');
      const firstRow = rows[0];
      const investment = parseInt(firstRow.Investment || '0');
      totalInvestment += investment;
      
      const timeline: Record<string, any> = {};
      
      // Map each row to a month (limit to 6 months for display)
      rows.slice(0, 6).forEach((row, index) => {
        const monthKey = `month${index + 1}`;
        timeline[monthKey] = {
          milestone: row.Title || 'Planning',
          payment: parseInt(row.Payment || '0'),
          actions: row.Actions ? row.Actions.split(';').map(a => a.trim()) : [],
          burnRate: parseInt(row['Burn Rate'] || '0'),
          highlight: row.Highlight?.toLowerCase() === 'true'
        };
      });
      
      tracks[trackKey] = {
        name: phase,
        description: firstRow.Description || '',
        color: firstRow.Color || 'bg-blue-500',
        totalInvestment: investment,
        timeline
      };
    });
    
    return {
      tracks,
      totalInvestment,
      peakCashMonth: 3, // Default value
      peakCashAmount: Math.max(...Object.values(tracks).map(t => t.totalInvestment)) || 0
    };
  };
  
  /**
   * Timeline Data to TSV Conversion
   * Converts current timeline data back to TSV format for GitHub Projects export
   */
  const convertTimelineDataToTSV = (data: TimelineData): string => {
    const headers = ['Title', 'Description', 'Start Date', 'End Date', 'Status', 'Phase', 'Investment', 'Burn Rate', 'Color', 'Actions', 'Payment', 'Highlight'];
    const rows: string[] = [headers.join('\t')];
    
    Object.entries(data.tracks).forEach(([trackKey, track]) => {
      Object.entries(track.timeline).forEach(([monthKey, monthData], index) => {
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() + index);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);
        
        const row = [
          monthData.milestone || '',
          track.description || '',
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0],
          'In Progress', // Default status
          track.name,
          track.totalInvestment.toString(),
          (monthData.burnRate || 0).toString(),
          track.color || 'bg-blue-500',
          (monthData.actions || []).join(';'),
          (monthData.payment || 0).toString(),
          (monthData.highlight || false).toString()
        ];
        rows.push(row.join('\t'));
      });
    });
    
    return rows.join('\n');
  };
  
  /**
   * Handle TSV file upload and parsing
   * Robust parsing with error handling for various TSV formats
   */
  const handleTSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setUploadStatus('Parsing TSV file...');
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const tsvText = e.target?.result as string;
        const lines = tsvText.trim().split('\n');
        
        if (lines.length < 2) {
          throw new Error('TSV file must contain at least a header row and one data row');
        }
        
        // Parse headers (flexible to handle different column orders)
        const headers = lines[0].split('\t').map(h => h.trim());
        
        // Parse data rows
        const tsvRows: TSVRow[] = lines.slice(1).map((line, lineIndex) => {
          const cells = line.split('\t');
          const row: any = {};
          
          headers.forEach((header, index) => {
            row[header] = cells[index] ? cells[index].trim() : '';
          });
          
          // Ensure required fields have defaults
          if (!row.Title) row.Title = `Item ${lineIndex + 1}`;
          if (!row.Phase) row.Phase = 'Default Track';
          
          return row as TSVRow;
        });
        
        // Convert TSV data to timeline format
        const newTimelineData = convertTSVToTimelineData(tsvRows);
        setCurrentTimelineData(newTimelineData);
        setIsUsingUploadedData(true);
        setUploadStatus(`Successfully imported ${tsvRows.length} items from TSV`);
        
        // Update selected tracks to show imported data
        const trackKeys = Object.keys(newTimelineData.tracks);
        setSelectedTracks(trackKeys.slice(0, 2) as TrackKey[]);
        
        // Clear the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
      } catch (error) {
        console.error('TSV parsing error:', error);
        setUploadStatus(`Error parsing TSV: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };
    
    reader.onerror = () => {
      setUploadStatus('Error reading file');
    };
    
    reader.readAsText(file);
  };
  
  /**
   * Export current timeline data as TSV file
   * Compatible with GitHub Projects import format
   */
  const handleExportTSV = () => {
    try {
      const tsvContent = convertTimelineDataToTSV(currentTimelineData);
      const blob = new Blob([tsvContent], { type: 'text/tab-separated-values' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `roadmap-export-${new Date().toISOString().split('T')[0]}.tsv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setUploadStatus('Timeline exported successfully as TSV');
    } catch (error) {
      console.error('Export error:', error);
      setUploadStatus('Error exporting TSV file');
    }
  };
  
  /**
   * Reset to default timeline data
   */
  const handleResetToDefault = () => {
    setCurrentTimelineData(timelineData);
    setIsUsingUploadedData(false);
    setSelectedTracks(['hardware', 'appDevelopment']);
    setUploadStatus('Reset to default timeline data');
  };

  const tracks = Object.entries(currentTimelineData.tracks);
  const months = ['month1', 'month2', 'month3', 'month4', 'month5', 'month6'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">6-Month Strategic Roadmap</h1>
          <p className="text-lg text-gray-600 mb-4">
            Interactive timeline showing detailed tracks, burn rates, and milestones
          </p>
          {/* TSV Import/Export Controls - GitHub Projects Integration */}
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-900">GitHub Projects Integration</h3>
            <p className="text-sm text-blue-700 mb-3">
              Upload TSV files from GitHub Projects or export current roadmap for seamless integration.
              TSV format supports: Title, Description, Start/End Dates, Status, Phase, Investment, Burn Rate.
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <label className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                📁 Import TSV
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".tsv,.txt"
                  onChange={handleTSVUpload}
                  className="hidden"
                />
              </label>
              <button 
                onClick={handleExportTSV}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                📤 Export TSV
              </button>
              <button 
                onClick={handleResetToDefault}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                🔄 Reset to Default
              </button>
              {isUsingUploadedData && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Using Uploaded Data
                </span>
              )}
            </div>
            {uploadStatus && (
              <div className={`mt-2 p-2 rounded text-sm ${
                uploadStatus.includes('Error') 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {uploadStatus}
              </div>
            )}
          </div>
          
          <div className="flex gap-4 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Save Timeline
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              🔗 Export to GitHub (Future)
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Navigate: <a href="/" className="text-blue-600 hover:underline">Home</a> | 
            <a href="/investors" className="text-blue-600 hover:underline ml-2">Investors</a>
          </div>
        </div>
      </div>

      {/* 6-Month Strategic Roadmap */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Track Filters */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Tracks to View</h3>
            <div className="flex flex-wrap gap-3">
              {tracks.map(([trackKey, track]) => (
                <button
                  key={trackKey}
                  onClick={() => toggleTrack(trackKey as TrackKey)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTracks.includes(trackKey as TrackKey)
                      ? `${track.color} text-white shadow-lg transform scale-105`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </div>

          {/* Burn Rate Toggle */}
          <div className="mb-8">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={showBurnRate}
                onChange={(e) => setShowBurnRate(e.target.checked)}
                className="form-checkbox h-5 w-5 rounded text-blue-400"
              />
              <span className="font-medium text-gray-700">Show Burn Rate Overlay</span>
            </label>
          </div>

          {/* Timeline Visualization */}
          <div className="space-y-6">
            {/* Month Headers */}
            <div className="grid grid-cols-7 gap-4 mb-6">
              <div className="font-bold text-gray-800">Track</div>
              {months.map((_, index) => (
                <div key={index} className="text-center font-bold text-gray-800">
                  Month {index + 1}
                </div>
              ))}
            </div>

            {/* Track Rows */}
            {selectedTracks.map(trackKey => {
              const track = currentTimelineData.tracks[trackKey];
              return (
                <div key={trackKey} className="grid grid-cols-7 gap-4 items-center">
                  {/* Track Name */}
                  <div className="font-medium text-gray-800 text-sm">
                    <div className={`w-4 h-4 ${track.color} rounded-full inline-block mr-2`}></div>
                    {track.name}
                  </div>
                  
                  {/* Month Cells */}
                  {months.map((monthKey, monthIndex) => {
                    const monthData = track.timeline[monthKey as keyof typeof track.timeline];
                    const burnRate = monthData?.burnRate || 0;
                    const isHighlight = (monthData as any)?.highlight;
                    
                    return (
                      <div
                        key={monthKey}
                        className={`relative h-20 rounded-lg p-2 text-white text-xs overflow-hidden ${track.color} ${
                          isHighlight ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
                        }`}
                      >
                        {/* Milestone Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div className="font-semibold text-xs leading-tight">
                            {monthData?.milestone || 'Planning'}
                          </div>
                          {(monthData as any)?.payment && (monthData as any).payment > 0 && (
                            <div className="text-yellow-200 font-bold text-xs">
                              ${((monthData as any).payment / 1000).toFixed(0)}K
                            </div>
                          )}
                        </div>

                        {/* Burn Rate Overlay */}
                        {showBurnRate && burnRate > 0 && (
                          <div
                            className="absolute bottom-0 left-0 w-full bg-red-500 bg-opacity-60 flex items-end justify-center text-white text-xs font-bold"
                            style={{ height: `${Math.min((burnRate / 35000) * 100, 100)}%` }}
                          >
                            <span className="mb-1">${(burnRate / 1000).toFixed(0)}K</span>
                          </div>
                        )}

                        {/* Highlight indicator */}
                        {isHighlight && (
                          <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Financial Summary */}
          <div className="mt-8 p-6 rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Financial Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  ${(currentTimelineData.totalInvestment / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-600">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">
                  ${(currentTimelineData.peakCashAmount / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-600">Peak Cash Need (Month {currentTimelineData.peakCashMonth})</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {selectedTracks.length}
                </div>
                <div className="text-sm text-gray-600">Active Tracks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  6
                </div>
                <div className="text-sm text-gray-600">Month Timeline</div>
              </div>
            </div>
          </div>

          {/* Track Details */}
          {selectedTracks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Track Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTracks.map(trackKey => {
                  const track = currentTimelineData.tracks[trackKey];
                  return (
                    <div key={trackKey} className="p-4 rounded-lg border bg-white border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className={`w-4 h-4 ${track.color} rounded-full mr-2`}></div>
                        <h4 className="font-bold text-gray-800">{track.name}</h4>
                      </div>
                      <p className="text-sm mb-2 text-gray-600">{track.description}</p>
                      <div className="text-sm font-medium text-gray-800">
                        Investment: ${(track.totalInvestment / 1000).toFixed(0)}K
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkingCanvas;