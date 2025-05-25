
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const mockBurndownData = [
  { day: 'Day 1', ideal: 100, actual: 100 },
  { day: 'Day 2', ideal: 90, actual: 95 },
  { day: 'Day 3', ideal: 80, actual: 88 },
  { day: 'Day 4', ideal: 70, actual: 82 },
  { day: 'Day 5', ideal: 60, actual: 75 },
  { day: 'Day 6', ideal: 50, actual: 68 },
  { day: 'Day 7', ideal: 40, actual: 55 },
  { day: 'Day 8', ideal: 30, actual: 45 },
  { day: 'Day 9', ideal: 20, actual: 35 },
  { day: 'Day 10', ideal: 10, actual: 20 },
  { day: 'Day 11', ideal: 0, actual: 12 }
];

export function BurndownChart() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 shadow-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Sprint Burndown</h3>
        <p className="text-sm text-slate-400">Current sprint progress vs ideal trajectory</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockBurndownData}>
            <defs>
              <linearGradient id="idealGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6b8a" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ff6b8a" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="day" 
              stroke="#9ca3af"
              fontSize={12}
            />
            <YAxis 
              stroke="#9ca3af"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area
              type="monotone"
              dataKey="ideal"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#idealGradient)"
              name="Ideal"
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#ff6b8a"
              strokeWidth={2}
              fill="url(#actualGradient)"
              name="Actual"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
