
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockActivityData = [
  { week: 'W1', commits: 45, issues: 12, prs: 8 },
  { week: 'W2', commits: 52, issues: 15, prs: 11 },
  { week: 'W3', commits: 38, issues: 9, prs: 6 },
  { week: 'W4', commits: 61, issues: 18, prs: 13 },
  { week: 'W5', commits: 49, issues: 14, prs: 9 },
  { week: 'W6', commits: 67, issues: 21, prs: 15 }
];

export function ActivityChart() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 shadow-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Team Activity</h3>
        <p className="text-sm text-slate-400">Weekly commits, issues, and pull requests</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockActivityData} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="week" 
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
            <Bar 
              dataKey="commits" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              name="Commits"
            />
            <Bar 
              dataKey="issues" 
              fill="#ff6b8a" 
              radius={[4, 4, 0, 0]}
              name="Issues"
            />
            <Bar 
              dataKey="prs" 
              fill="#9b59b6" 
              radius={[4, 4, 0, 0]}
              name="Pull Requests"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
