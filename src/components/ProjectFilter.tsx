import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export type BuildTypeFilter = 'all' | 'custom' | 'production';
export type StatusFilter = 'all' | string;

interface ProjectFilterProps {
  buildTypeFilter: BuildTypeFilter;
  onBuildTypeChange: (filter: BuildTypeFilter) => void;
  statusFilter: StatusFilter;
  onStatusChange: (filter: StatusFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  availableStatuses: string[];
  totalProjects: number;
  filteredCount: number;
}

export function ProjectFilter({
  buildTypeFilter,
  onBuildTypeChange,
  statusFilter,
  onStatusChange,
  searchQuery,
  onSearchChange,
  availableStatuses,
  totalProjects,
  filteredCount
}: ProjectFilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-card border-2 border-accent rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-accent" />
          <span className="text-foreground font-medium">Filters</span>
          <Badge variant="outline" className="border-accent text-accent">
            {filteredCount} of {totalProjects} projects
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="text-accent hover:bg-accent/10"
        >
          {showFilters ? 'Hide' : 'Show'} Filters
        </Button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="space-y-4">
          {/* Build Type Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Build Type
            </label>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={buildTypeFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onBuildTypeChange('all')}
                className={buildTypeFilter === 'all' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'border-accent text-accent hover:bg-accent/10'
                }
              >
                All Projects
              </Button>
              <Button
                variant={buildTypeFilter === 'production' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onBuildTypeChange('production')}
                className={buildTypeFilter === 'production' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-accent text-accent hover:bg-accent/10'
                }
              >
                Production
              </Button>
              <Button
                variant={buildTypeFilter === 'custom' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onBuildTypeChange('custom')}
                className={buildTypeFilter === 'custom' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'border-accent text-accent hover:bg-accent/10'
                }
              >
                Custom
              </Button>
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Status
            </label>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={statusFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onStatusChange('all')}
                className={statusFilter === 'all' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'border-accent text-accent hover:bg-accent/10'
                }
              >
                All Statuses
              </Button>
              {availableStatuses.map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onStatusChange(status)}
                  className={statusFilter === status 
                    ? 'bg-accent text-accent-foreground' 
                    : 'border-accent text-accent hover:bg-accent/10'
                  }
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

