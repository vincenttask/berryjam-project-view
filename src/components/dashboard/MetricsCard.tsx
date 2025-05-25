
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  suffix?: string;
}

const colorClasses = {
  blue: 'text-blue-400 bg-blue-500/20',
  green: 'text-green-400 bg-green-500/20',
  yellow: 'text-yellow-400 bg-yellow-500/20',
  red: 'text-red-400 bg-red-500/20',
  purple: 'text-purple-400 bg-purple-500/20'
};

export function MetricsCard({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'neutral', 
  color = 'blue',
  suffix 
}: MetricsCardProps) {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  
  return (
    <div className="metric-card group">
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110",
          colorClasses[color]
        )}>
          {icon}
        </div>
        
        {change !== undefined && (
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium",
            trend === 'up' && "text-green-400 bg-green-500/20",
            trend === 'down' && "text-red-400 bg-red-500/20",
            trend === 'neutral' && "text-slate-400 bg-slate-500/20"
          )}>
            <TrendIcon size={12} />
            {Math.abs(change)}%
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
          {suffix && (
            <span className="text-sm text-slate-400">{suffix}</span>
          )}
        </div>
        
        <p className="text-sm text-slate-400">{title}</p>
      </div>
    </div>
  );
}
