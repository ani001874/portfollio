import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNavigationProps {
  prevProject?: Project;
  nextProject?: Project;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  prevProject,
  nextProject,
}) => {
  return (
    <div className="py-12 border-t border-surface-border mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {prevProject ? (
        <Link
          to={`/projects/${prevProject.slug}`}
          className="flex flex-col p-6 rounded-lg bg-surface border border-surface-border hover:border-accent/40 transition-colors group"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-typography-muted uppercase mb-2">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-accent" />
            <span>PREVIOUS PROJECT</span>
          </div>
          <span className="font-bold text-lg text-typography-primary group-hover:text-accent transition-colors">
            {prevProject.title}
          </span>
          <span className="text-xs text-typography-muted font-mono mt-1">
            {prevProject.year} · {prevProject.category}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextProject ? (
        <Link
          to={`/projects/${nextProject.slug}`}
          className="flex flex-col sm:items-end p-6 rounded-lg bg-surface border border-surface-border hover:border-accent/40 transition-colors group sm:text-right"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-typography-muted uppercase mb-2">
            <span>NEXT PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-accent" />
          </div>
          <span className="font-bold text-lg text-typography-primary group-hover:text-accent transition-colors">
            {nextProject.title}
          </span>
          <span className="text-xs text-typography-muted font-mono mt-1">
            {nextProject.year} · {nextProject.category}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
    </div>
  );
};
