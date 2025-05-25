
import React, { useState } from 'react';
import { LayoutDashboard, FolderKanban, TrendingUp, Users, GitBranch, Calendar, FileText, Download, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const sidebarSections = [
  {
    title: "Dashboard",
    items: [
      { icon: LayoutDashboard, label: "Overview", href: "/", active: true },
      { icon: FolderKanban, label: "Projects", href: "/projects" },
      { icon: TrendingUp, label: "Analytics", href: "/analytics" }
    ]
  },
  {
    title: "Management", 
    items: [
      { icon: Users, label: "Team", href: "/team" },
      { icon: GitBranch, label: "Repositories", href: "/repos" },
      { icon: Calendar, label: "Milestones", href: "/milestones" }
    ]
  },
  {
    title: "Reports",
    items: [
      { icon: FileText, label: "Executive", href: "/reports/executive" },
      { icon: Download, label: "Export", href: "/reports/export" }
    ]
  }
];

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  return (
    <div className={cn(
      "relative h-screen bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/30 transition-all duration-300",
      collapsed ? "w-20" : "w-80"
    )}>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/40 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-berry-strawberry to-berry-mulberry rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Berrijam</h2>
                <p className="text-xs text-slate-400">Projects Dashboard</p>
              </div>
            </div>
          )}
          
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-slate-800/60 transition-colors text-slate-400 hover:text-white"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">
          {sidebarSections.map((section, sectionIndex) => (
            <div key={section.title} className={cn("mb-8", sectionIndex === 0 && "mt-0")}>
              {!collapsed && (
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
                  {section.title}
                </h3>
              )}
              
              <nav className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "sidebar-item group",
                        item.active && "active",
                        collapsed && "justify-center px-3"
                      )}
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      {!collapsed && (
                        <span className="truncate">{item.label}</span>
                      )}
                      
                      {/* Tooltip for collapsed state */}
                      {collapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                          {item.label}
                        </div>
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/30">
          <div className={cn(
            "flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer",
            collapsed && "justify-center"
          )}>
            <div className="w-8 h-8 bg-gradient-to-br from-berry-goji to-berry-cranberry rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-slate-400 truncate">Admin</p>
              </div>
            )}
            {!collapsed && <Settings size={16} className="text-slate-400" />}
          </div>
        </div>
      </div>
    </div>
  );
}
