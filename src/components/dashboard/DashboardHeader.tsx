
import React from 'react';
import { Bell, Search, Settings, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <header className="h-18 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/30 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {subtitle && (
            <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <RefreshCw size={16} />
              Refresh
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Search size={16} />
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white relative">
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-berry-strawberry rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Settings size={16} />
            </Button>
          </div>
          
          <div className="w-px h-6 bg-slate-700"></div>
          
          <div className="text-xs text-slate-400">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </header>
  );
}
