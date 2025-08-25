import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

// Example of how to use your timeline.json data
interface TimelineTrack {
  name: string;
  color: string;
  data: any; // Your JSON track data
}

const tracks: TimelineTrack[] = [
  { name: 'Hardware', color: 'bg-blue-500', data: null }, // Load from your JSON
  { name: 'App Development', color: 'bg-green-500', data: null },
  { name: 'Business Development', color: 'bg-purple-500', data: null },
  { name: 'Marketing Community', color: 'bg-orange-500', data: null },
  { name: 'Compliance Operations', color: 'bg-red-500', data: null },
  { name: 'Team Building', color: 'bg-yellow-500', data: null },
];

export const EnhancedTimeline: React.FC = () => {
  const { isDark, accentClasses, textPrimary, textSecondary } = useTheme();
  const [selectedTracks, setSelectedTracks] = useState<string[]>(['Hardware']);
  const [showBurnRate, setShowBurnRate] = useState(false);

  const toggleTrack = (trackName: string) => {
    setSelectedTracks(prev => 
      prev.includes(trackName) 
        ? prev.filter(t => t !== trackName)
        : [...prev, trackName]
    );
  };

  return (
    <div className={`p-8 rounded-lg shadow-lg transition-colors ${accentClasses}`}>
      <h2 className={`text-3xl font-bold mb-6 ${textPrimary}`}>
        Interactive Timeline & Burn Rate
      </h2>

      {/* Track Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tracks.map((track) => (
          <button
            key={track.name}
            onClick={() => toggleTrack(track.name)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedTracks.includes(track.name)
                ? `${track.color} text-white shadow-lg`
                : isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {track.name}
          </button>
        ))}
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
          <span className={textSecondary}>Show Burn Rate Overlay</span>
        </label>
      </div>

      {/* Timeline Visualization */}
      <div className="relative">
        {/* Month Headers */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {[1,2,3,4,5,6,7].map(month => (
            <div key={month} className={`text-center font-bold ${textPrimary}`}>
              Month {month}
            </div>
          ))}
        </div>

        {/* Track Rows */}
        {selectedTracks.map(trackName => {
          const track = tracks.find(t => t.name === trackName);
          return (
            <div key={trackName} className="mb-4">
              <div className={`text-sm font-medium mb-2 ${textPrimary}`}>
                {trackName}
              </div>
              <div className="grid grid-cols-7 gap-4 h-16">
                {[1,2,3,4,5,6,7].map(month => (
                  <div 
                    key={month}
                    className={`${track?.color} rounded-lg p-2 text-white text-xs relative overflow-hidden`}
                  >
                    {/* Example milestone content */}
                    {trackName === 'Hardware' && month === 3 && (
                      <div className="absolute inset-0 bg-red-500 bg-opacity-30 flex items-center justify-center">
                        <span className="font-bold">$31K</span>
                      </div>
                    )}
                    <div className="relative z-10">
                      Month {month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Burn Rate Overlay */}
        {showBurnRate && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="grid grid-cols-7 gap-4 h-full">
              {[1,2,3,4,5,6,7].map(month => (
                <div key={month} className="relative">
                  <div 
                    className="absolute bottom-0 w-full bg-red-500 bg-opacity-50 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  >
                    <div className="text-xs text-white p-1">
                      ${Math.floor(Math.random() * 50)}K
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Financial Summary */}
      <div className={`mt-8 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className={`font-bold mb-2 ${textPrimary}`}>Financial Highlights</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className={textSecondary}>Hardware Track:</span>
            <div className="font-bold text-blue-400">$70K / 7 months</div>
          </div>
          <div>
            <span className={textSecondary}>Peak Cash Need:</span>
            <div className="font-bold text-red-400">$31K (Month 3)</div>
          </div>
          <div>
            <span className={textSecondary}>Total Investment:</span>
            <div className="font-bold text-green-400">$450K</div>
          </div>
        </div>
      </div>
    </div>
  );
};
