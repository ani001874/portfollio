import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../../types';
import { ProjectCard } from './ProjectCard';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Developer Tools', value: 'devtools' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-surface-border">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              role="tab"
              aria-selected={selectedCategory === cat.value}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-colors whitespace-nowrap ${
                selectedCategory === cat.value
                  ? 'bg-accent text-background font-semibold'
                  : 'bg-surface-elevated/50 text-typography-secondary hover:text-typography-primary hover:bg-surface-elevated'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-typography-muted pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech or keyword..."
            className="w-full bg-background border border-surface-border rounded pl-9 pr-4 py-1.5 text-xs font-mono text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent transition-colors"
            aria-label="Filter projects by keyword"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-typography-muted hover:text-typography-primary"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Filter Status */}
      <div className="flex items-center justify-between font-mono text-xs text-typography-muted px-1">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
          <span>PROJECTS DISPLAYED: {filteredProjects.length} OF {projects.length}</span>
        </div>
        {selectedCategory !== 'all' && (
          <span className="text-accent uppercase tracking-wider">
            FILTER: {selectedCategory}
          </span>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border border-dashed border-surface-border rounded-lg p-8">
          <p className="font-mono text-sm text-typography-muted">
            NO PROJECTS MATCHING: &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 font-mono text-xs uppercase tracking-wider text-accent underline underline-offset-4"
          >
            Reset filter
          </button>
        </div>
      )}
    </div>
  );
};
