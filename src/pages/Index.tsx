
import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { MetricsCard } from '@/components/dashboard/MetricsCard';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { BurndownChart } from '@/components/dashboard/BurndownChart';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { FolderKanban, GitBranch, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

// Mock data for the dashboard
const mockMetrics = [
  {
    title: 'Active Projects',
    value: 5,
    change: 12,
    trend: 'up' as const,
    icon: <FolderKanban size={24} />,
    color: 'blue' as const
  },
  {
    title: 'Total Issues',
    value: 247,
    change: -8,
    trend: 'down' as const,
    icon: <GitBranch size={24} />,
    color: 'green' as const
  },
  {
    title: 'Team Members',
    value: 12,
    change: 3,
    trend: 'up' as const,
    icon: <Users size={24} />,
    color: 'purple' as const
  },
  {
    title: 'Completion Rate',
    value: '87',
    suffix: '%',
    change: 5,
    trend: 'up' as const,
    icon: <TrendingUp size={24} />,
    color: 'yellow' as const
  }
];

const mockProjects = [
  {
    name: 'Strawberri',
    id: 5,
    progress: 87,
    issues: { open: 12, closed: 45 },
    contributors: ['user1', 'user2', 'user3'],
    lastUpdated: new Date('2025-01-20'),
    status: 'success' as const,
    color: '#ff6b8a'
  },
  {
    name: 'Gojiberri',
    id: 4,
    progress: 73,
    issues: { open: 8, closed: 32 },
    contributors: ['user1', 'user4', 'user5'],
    lastUpdated: new Date('2025-01-19'),
    status: 'warning' as const,
    color: '#ff8c42'
  },
  {
    name: 'Mulberri',
    id: 6,
    progress: 92,
    issues: { open: 3, closed: 28 },
    contributors: ['user2', 'user3'],
    lastUpdated: new Date('2025-01-21'),
    status: 'success' as const,
    color: '#9b59b6'
  },
  {
    name: 'Cranberri',
    id: 8,
    progress: 45,
    issues: { open: 18, closed: 15 },
    contributors: ['user1', 'user6'],
    lastUpdated: new Date('2025-01-18'),
    status: 'error' as const,
    color: '#dc2626'
  },
  {
    name: 'Elderberri',
    id: 9,
    progress: 68,
    issues: { open: 11, closed: 22 },
    contributors: ['user3', 'user4', 'user7'],
    lastUpdated: new Date('2025-01-20'),
    status: 'warning' as const,
    color: '#4c1d95'
  }
];

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex w-full">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          title="Project Overview" 
          subtitle="Berrijam Projects Dashboard - Real-time insights across all repositories"
        />
        
        <main className="flex-1 p-8 bg-slate-950 overflow-auto">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mockMetrics.map((metric, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <MetricsCard {...metric} />
              </div>
            ))}
          </div>
          
          {/* Project Cards */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">Active Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
              <BurndownChart />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <ActivityChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
