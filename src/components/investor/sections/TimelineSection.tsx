import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import timelineData from '@/data/timelineData.json';

interface TimelineMonth {
  milestone: string;
  actions: string[];
  burnRate: number;
  payment?: number;
  highlight?: boolean;
}

interface Track {
  name: string;
  description: string;
  color: string;
  totalInvestment: number;
  timeline: Record<string, TimelineMonth>;
}

type TrackKey = keyof typeof timelineData.tracks;

export const TimelineSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();
  const [selectedTracks, setSelectedTracks] = useState<TrackKey[]>(['hardware', 'appDevelopment']);
  const [showBurnRate, setShowBurnRate] = useState(false);

  const tracks = Object.entries(timelineData.tracks);
  
  const toggleTrack = (trackKey: TrackKey) => {
    setSelectedTracks(prev => 
      prev.includes(trackKey)
        ? prev.filter(t => t !== trackKey)
        : [...prev, trackKey]
    );
  };

  const getTrackColor = (trackKey: string) => {
    const track = timelineData.tracks[trackKey as TrackKey];
    return track?.color || 'bg-gray-500';
  };

  const months = ['month1', 'month2', 'month3', 'month4', 'month5', 'month6'];

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="timeline">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses}`}>
        6-Month Strategic Roadmap
      </h2>

      {/* Track Filters */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${textPrimary}`}>Select Tracks to View</h3>
        <div className="flex flex-wrap gap-3">
          {tracks.map(([trackKey, track]) => (
            <button
              key={trackKey}
              onClick={() => toggleTrack(trackKey as TrackKey)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTracks.includes(trackKey as TrackKey)
                  ? `${track.color} text-white shadow-lg transform scale-105`
                  : isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
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
          <span className={`font-medium ${textSecondary}`}>Show Burn Rate Overlay</span>
        </label>
      </div>

      {/* Timeline Visualization */}
      <div className="space-y-6">
        {/* Month Headers */}
        <div className="grid grid-cols-7 gap-4 mb-6">
          <div className={`font-bold ${textPrimary}`}>Track</div>
          {months.map((_, index) => (
            <div key={index} className={`text-center font-bold ${textPrimary}`}>
              Month {index + 1}
            </div>
          ))}
        </div>

        {/* Track Rows */}
        {selectedTracks.map(trackKey => {
          const track = timelineData.tracks[trackKey] as Track;
          return (
            <div key={trackKey} className="grid grid-cols-7 gap-4 items-center">
              {/* Track Name */}
              <div className={`font-medium ${textPrimary} text-sm`}>
                <div className={`w-4 h-4 ${track.color} rounded-full inline-block mr-2`}></div>
                {track.name}
              </div>
              
              {/* Month Cells */}
              {months.map((monthKey, monthIndex) => {
                const monthData = track.timeline[monthKey as keyof typeof track.timeline] as TimelineMonth;
                const burnRate = monthData?.burnRate || 0;
                const isHighlight = monthData?.highlight || false;
                
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
                      {monthData?.payment && monthData.payment > 0 && (
                        <div className="text-yellow-200 font-bold text-xs">
                          ${(monthData.payment / 1000).toFixed(0)}K
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
      <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Financial Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className={`text-2xl font-bold text-blue-400`}>
              ${(timelineData.totalInvestment / 1000).toFixed(0)}K
            </div>
            <div className={`text-sm ${textSecondary}`}>Total Investment</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold text-red-400`}>
              ${(timelineData.peakCashAmount / 1000).toFixed(0)}K
            </div>
            <div className={`text-sm ${textSecondary}`}>Peak Cash Need (Month {timelineData.peakCashMonth})</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold text-green-400`}>
              {selectedTracks.length}
            </div>
            <div className={`text-sm ${textSecondary}`}>Active Tracks</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold text-purple-400`}>
              6
            </div>
            <div className={`text-sm ${textSecondary}`}>Month Timeline</div>
          </div>
        </div>
      </div>

      {/* Track Details */}
      {selectedTracks.length > 0 && (
        <div className="mt-8">
          <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Track Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedTracks.map(trackKey => {
              const track = timelineData.tracks[trackKey] as Track;
              return (
                <div key={trackKey} className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-2">
                    <div className={`w-4 h-4 ${track.color} rounded-full mr-2`}></div>
                    <h4 className={`font-bold ${textPrimary}`}>{track.name}</h4>
                  </div>
                  <p className={`text-sm mb-2 ${textSecondary}`}>{track.description}</p>
                  <div className={`text-sm font-medium ${textPrimary}`}>
                    Investment: ${(track.totalInvestment / 1000).toFixed(0)}K
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Strategic Timeline */}
      <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Strategic Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className={`font-bold text-green-400 mb-2`}>Year 1: Foundation</h4>
            <p className={`text-sm ${textSecondary}`}>
              School partnerships, early adoption programs, and verbalization training systems.
            </p>
          </div>
          <div>
            <h4 className={`font-bold text-blue-400 mb-2`}>Year 2: Scale</h4>
            <p className={`text-sm ${textSecondary}`}>
              API economy entry, ML team development, and initial market expansion.
            </p>
          </div>
          <div>
            <h4 className={`font-bold text-purple-400 mb-2`}>Year 3+: Dominate</h4>
            <p className={`text-sm ${textSecondary}`}>
              Strategic partnerships, international expansion, and ecosystem leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
