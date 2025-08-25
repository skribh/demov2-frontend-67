import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Calculator, PieChart, TrendingUp, Users, DollarSign } from 'lucide-react';

interface Participant {
  currentSlices: number;
  hourlyRate: number;
  weeklyHours: number;
  multiplier: number;
  isFounder: boolean;
}

interface Participants {
  [name: string]: Participant;
}

export const SlicingPieSection: React.FC = () => {
  const { isDark, accentClasses, borderClasses, textPrimary, textSecondary } = useTheme();
  
  const [participants, setParticipants] = useState<Participants>({
    "Kaju": {
      currentSlices: 298604,
      hourlyRate: 1, // $1/hour FMV (works for equity)
      weeklyHours: 40,
      multiplier: 2,
      isFounder: true
    },
    "Dr. B": {
      currentSlices: 6200,
      hourlyRate: 50,
      weeklyHours: 15,
      multiplier: 2,
      isFounder: false
    },
    "Dev Person": {
      currentSlices: 10350,
      hourlyRate: 50,
      weeklyHours: 25,
      multiplier: 2,
      isFounder: false
    },
    "Noah": {
      currentSlices: 3875,
      hourlyRate: 50,
      weeklyHours: 20,
      multiplier: 2,
      isFounder: false
    },
    "Jess": {
      currentSlices: 6,
      hourlyRate: 50,
      weeklyHours: 10,
      multiplier: 2,
      isFounder: false
    }
  });

  const [weeksToFreeze, setWeeksToFreeze] = useState(26);
  const [andyInvestment, setAndyInvestment] = useState(20000);
  const [salePrice, setSalePrice] = useState(5000000);
  const [newParticipant, setNewParticipant] = useState({ name: '', rate: 50, hours: 40 });

  const CASH_MULTIPLIER = 4;
  const SAFE_VAL_CAP = 2000000;
  const SERIES_A_AMOUNT = 1000000;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  const getTotalSlices = () => {
    return Object.values(participants).reduce((sum, p) => sum + p.currentSlices, 0);
  };

  const calculateFutureSlices = () => {
    const futureParticipants: { [name: string]: Participant & { futureSlices: number } } = {};
    let totalFutureSlices = 0;

    Object.entries(participants).forEach(([name, data]) => {
      const weeklySlices = data.weeklyHours * data.hourlyRate * data.multiplier;
      const projectedSlices = weeklySlices * weeksToFreeze;
      const futureSlices = data.currentSlices + projectedSlices;

      futureParticipants[name] = {
        ...data,
        futureSlices: futureSlices
      };
      totalFutureSlices += futureSlices;
    });

    return { futureParticipants, totalFutureSlices };
  };

  const calculatePayouts = () => {
    const { futureParticipants, totalFutureSlices } = calculateFutureSlices();
    
    // Add Andy's investment if he chooses Slicing Pie
    const andySlices = andyInvestment * CASH_MULTIPLIER;
    const totalSlicesWithAndy = totalFutureSlices + andySlices;

    // Calculate payouts
    const seriesAPercent = SERIES_A_AMOUNT / salePrice;
    const remainingAfterSeriesA = salePrice * (1 - seriesAPercent);

    // Slicing Pie scenario
    const andyPiePercent = andySlices / totalSlicesWithAndy;
    const andySlicingPayout = andyPiePercent * remainingAfterSeriesA;

    // SAFE scenario
    const preMoney = salePrice - SERIES_A_AMOUNT;
    const safeConversionVal = Math.min(SAFE_VAL_CAP, preMoney);
    const safePercent = andyInvestment / safeConversionVal;
    const andySafePayout = safePercent * salePrice;

    return {
      futureParticipants,
      totalSlicesWithAndy,
      andySlices,
      andyPiePercent,
      andySlicingPayout,
      andySafePayout,
      safePercent,
      remainingAfterSeriesA
    };
  };

  const addParticipant = () => {
    if (!newParticipant.name || participants[newParticipant.name]) return;

    setParticipants(prev => ({
      ...prev,
      [newParticipant.name]: {
        currentSlices: 0,
        hourlyRate: newParticipant.rate,
        weeklyHours: newParticipant.hours,
        multiplier: 2,
        isFounder: false
      }
    }));

    setNewParticipant({ name: '', rate: 50, hours: 40 });
  };

  const removeParticipant = (name: string) => {
    if (participants[name].isFounder) return;
    
    setParticipants(prev => {
      const newParticipants = { ...prev };
      delete newParticipants[name];
      return newParticipants;
    });
  };

  const updateWeeklyHours = (name: string, hours: number) => {
    setParticipants(prev => ({
      ...prev,
      [name]: { ...prev[name], weeklyHours: hours }
    }));
  };

  const results = calculatePayouts();

  return (
    <section className={`p-8 rounded-lg shadow-lg mb-16 transition-colors ${accentClasses}`} id="slicing-pie">
      <h2 className={`text-3xl font-bold mb-6 pb-3 border-b transition-colors ${borderClasses} flex items-center`}>
        <PieChart className="h-8 w-8 mr-3 text-blue-500" />
        🥧 Dynamic Slicing Pie Calculator
      </h2>

      <div className={`mb-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>What is Slicing Pie?</h3>
        <p className={`${textSecondary} mb-4`}>
          Slicing Pie is a dynamic equity allocation model that fairly distributes ownership based on actual contributions. 
          Unlike traditional fixed equity splits, it adjusts in real-time as team members contribute time, money, and resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
            <h4 className={`font-bold text-blue-500 mb-2`}>Fair & Dynamic</h4>
            <p className={`text-sm ${textSecondary}`}>Equity adjusts based on actual contributions, not promises</p>
          </div>
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
            <h4 className={`font-bold text-green-500 mb-2`}>Transparent</h4>
            <p className={`text-sm ${textSecondary}`}>Everyone can see exactly how equity is calculated</p>
          </div>
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
            <h4 className={`font-bold text-purple-500 mb-2`}>Motivating</h4>
            <p className={`text-sm ${textSecondary}`}>More contribution = more equity, encouraging active participation</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={`p-6 rounded-lg mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>Investment Scenario Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className={`block font-medium ${textPrimary} mb-2`}>Weeks Until Freeze</label>
            <input
              type="number"
              value={weeksToFreeze}
              onChange={(e) => setWeeksToFreeze(parseInt(e.target.value))}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              min="1"
              max="104"
            />
          </div>
          <div>
            <label className={`block font-medium ${textPrimary} mb-2`}>Your Investment</label>
            <input
              type="number"
              value={andyInvestment}
              onChange={(e) => setAndyInvestment(parseInt(e.target.value))}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              min="10000"
              step="1000"
            />
          </div>
          <div>
            <label className={`block font-medium ${textPrimary} mb-2`}>Exit Sale Price</label>
            <select
              value={salePrice}
              onChange={(e) => setSalePrice(parseInt(e.target.value))}
              className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            >
              <option value="3000000">$3,000,000</option>
              <option value="5000000">$5,000,000</option>
              <option value="10000000">$10,000,000</option>
              <option value="20000000">$20,000,000</option>
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <div className={`text-center p-3 rounded-lg ${isDark ? 'bg-green-800' : 'bg-green-100'}`}>
              <div className={`text-2xl font-bold text-green-600`}>
                {formatNumber(getTotalSlices())}
              </div>
              <div className={`text-sm ${textSecondary}`}>Total Slices</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Participants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary} flex items-center`}>
            <Users className="h-5 w-5 mr-2" />
            Current Team
          </h3>
          
          {/* Add Participant */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={newParticipant.name}
              onChange={(e) => setNewParticipant(prev => ({ ...prev, name: e.target.value }))}
              className={`p-2 rounded border text-sm ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
            <input
              type="number"
              placeholder="$/hr"
              value={newParticipant.rate}
              onChange={(e) => setNewParticipant(prev => ({ ...prev, rate: parseInt(e.target.value) }))}
              className={`p-2 rounded border text-sm ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
            <button
              onClick={addParticipant}
              className="bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors"
            >
              Add
            </button>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {Object.entries(participants).map(([name, data]) => {
              const percentage = (data.currentSlices / getTotalSlices() * 100).toFixed(2);
              return (
                <div key={name} className={`p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold ${textPrimary}`}>
                      {name} {data.isFounder ? '👑' : ''}
                    </span>
                    {!data.isFounder && (
                      <button
                        onClick={() => removeParticipant(name)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className={`${textSecondary}`}>Slices:</span>
                      <div className="font-bold text-blue-500">{formatNumber(data.currentSlices)}</div>
                    </div>
                    <div>
                      <span className={`${textSecondary}`}>Ownership:</span>
                      <div className="font-bold text-purple-500">{percentage}%</div>
                    </div>
                    <div>
                      <span className={`${textSecondary}`}>Hrs/week:</span>
                      <input
                        type="number"
                        value={data.weeklyHours}
                        onChange={(e) => updateWeeklyHours(name, parseInt(e.target.value))}
                        className={`w-full mt-1 p-1 rounded border text-sm ${isDark ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projections */}
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-xl font-bold mb-4 ${textPrimary} flex items-center`}>
            <TrendingUp className="h-5 w-5 mr-2" />
            Future Projections
          </h3>
          <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <p className={`text-sm ${textSecondary} mb-2`}>
              Based on current weekly hours, participants will accumulate these slices by freeze:
            </p>
            <div className="space-y-2">
              {Object.entries(participants).map(([name, data]) => {
                const weeklySlices = data.weeklyHours * data.hourlyRate * data.multiplier;
                const projectedSlices = weeklySlices * weeksToFreeze;
                return (
                  <div key={name} className="flex justify-between text-sm">
                    <span className={`${textPrimary}`}>{name}:</span>
                    <span className="font-bold text-blue-500">
                      +{formatNumber(projectedSlices)} slices
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Slicing Pie Option */}
        <div className={`p-6 rounded-lg border-2 border-green-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-bold text-center mb-4 text-green-600">
            🥧 Choose Slicing Pie
          </h3>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 text-center mb-4">
            <div className="text-3xl font-bold">
              {formatCurrency(results.andySlicingPayout)}
            </div>
            <div className="text-lg">
              {(results.andyPiePercent * 100).toFixed(2)}% of pie
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <h4 className={`font-bold ${textPrimary} mb-2`}>Breakdown:</h4>
            {Object.entries(results.futureParticipants).map(([name, data]) => {
              const percent = data.futureSlices / results.totalSlicesWithAndy;
              const payout = percent * results.remainingAfterSeriesA;
              return (
                <div key={name} className="flex justify-between">
                  <span className={`${textSecondary}`}>{name}:</span>
                  <span className={`${textPrimary}`}>
                    {(percent * 100).toFixed(1)}% ({formatCurrency(payout)})
                  </span>
                </div>
              );
            })}
            <div className="flex justify-between font-bold border-t pt-2">
              <span className={`${textPrimary}`}>Your Investment:</span>
              <span className="text-green-600">
                {(results.andyPiePercent * 100).toFixed(1)}% ({formatCurrency(results.andySlicingPayout)})
              </span>
            </div>
          </div>
        </div>

        {/* SAFE Option */}
        <div className={`p-6 rounded-lg border-2 border-red-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-bold text-center mb-4 text-red-600">
            📄 Choose SAFE
          </h3>
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6 text-center mb-4">
            <div className="text-3xl font-bold">
              {formatCurrency(results.andySafePayout)}
            </div>
            <div className="text-lg">
              {(results.safePercent * 100).toFixed(2)}% of company
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
            <h4 className={`font-bold ${textPrimary} mb-2`}>SAFE Terms:</h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className={`${textSecondary}`}>Valuation Cap:</span>
                <span className={`${textPrimary}`}>{formatCurrency(SAFE_VAL_CAP)}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${textSecondary}`}>Investment:</span>
                <span className={`${textPrimary}`}>{formatCurrency(andyInvestment)}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${textSecondary}`}>Ownership:</span>
                <span className={`${textPrimary}`}>{(results.safePercent * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>

          <div className={`text-sm ${textSecondary}`}>
            <p className="mb-2">
              <strong>Note:</strong> SAFE gives you a fixed percentage regardless of team contributions. 
              Team equity pool remains separate and continues with Slicing Pie model.
            </p>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-yellow-50'} border-l-4 border-yellow-500`}>
        <h3 className={`text-xl font-bold mb-4 ${textPrimary} flex items-center`}>
          <Calculator className="h-5 w-5 mr-2 text-yellow-500" />
          Key Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className={`font-bold text-green-600 mb-2`}>Slicing Pie Advantages</h4>
            <ul className={`text-sm ${textSecondary} space-y-1`}>
              <li>• Higher potential returns based on company performance</li>
              <li>• Aligns with team's dynamic equity model</li>
              <li>• Rewards continued contribution and involvement</li>
              <li>• Transparent and fair allocation system</li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold text-red-600 mb-2`}>SAFE Advantages</h4>
            <ul className={`text-sm ${textSecondary} space-y-1`}>
              <li>• Fixed ownership percentage</li>
              <li>• Standard investment structure</li>
              <li>• Predictable returns</li>
              <li>• Separate from team equity dynamics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
