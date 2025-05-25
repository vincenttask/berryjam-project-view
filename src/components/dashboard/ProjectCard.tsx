
import React from 'react';
import { Clock, GitBranch, AlertCircle, CheckCircle2, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: {
    name: string;
    id: number;
    progress: number;
    issues: { open: number; closed: number };
    contributors: string[];
    lastUpdated: Date;
    status: 'success' | 'warning' | 'error';
    color: string;
  };
}

const statusConfig = {
  success: {
    icon: CheckCircle2,
    bg: 'bg-green-500/20',
    text: 'text-green-400',
    border: 'border-green-500/30'
  },
  warning: {
    icon: AlertCircle,
    bg: 'bg-yellow-500/20',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30'
  },
  error: {
    icon: AlertCircle,
    bg: 'bg-red-500/20',
    text: 'text-red-400',
    border: 'border-red-500/30'
  }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const StatusIcon = statusConfig[project.status].icon;
  const circumference = 2 * Math.PI * 40;
  const strokeDasharray = `${(project.progress / 100) * circumference} ${circumference}`;
  
  return (
    <div className="project-card group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-white"
            style={{ backgroundColor: project.color }}
          >
            {project.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="text-sm text-slate-400">Project #{project.id}</p>
          </div>
        </div>
        
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border",
          statusConfig[project.status].bg,
          statusConfig[project.status].text,
          statusConfig[project.status].border
        )}>
          <StatusIcon size={12} />
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </div>
      </div>
      
      {/* Progress Ring */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-slate-700"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke={project.color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">{project.progress}%</span>
          </div>
        </div>
        
        <div className="flex-1 ml-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Open Issues</span>
            <span className="text-sm font-medium text-white">{project.issues.open}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Closed Issues</span>
            <span className="text-sm font-medium text-white">{project.issues.closed}</span>
          </div>
        </div>
      </div>
      
      {/* Team & Activity */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
        <div className="flex items-center gap-2">
          <Users size={14} className="text-slate-400" />
          <span className="text-sm text-slate-400">{project.contributors.length} contributors</span>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Clock size={12} />
          {project.lastUpdated.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
