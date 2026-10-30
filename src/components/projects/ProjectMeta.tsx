import React from 'react';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { Github, ExternalLink, Calendar, Layers } from 'lucide-react';

interface ProjectMetaProps {
  project: Project;
}

export const ProjectMeta: React.FC<ProjectMetaProps> = ({ project }) => {
  return (
    <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-6">
      <div className="font-mono text-xs uppercase tracking-wider text-typography-muted border-b border-surface-border pb-3 flex items-center justify-between">
        <span>PROJECT_METADATA</span>
        <span className="text-accent">{project.id}</span>
      </div>

      <div className="space-y-4 font-mono text-xs">
        <div>
          <div className="text-typography-muted flex items-center gap-1.5 mb-1">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>DEVELOPED</span>
          </div>
          <div className="text-typography-primary font-medium pl-5">
            {project.year} (Personal Project)
          </div>
        </div>

        <div>
          <div className="text-typography-muted flex items-center gap-1.5 mb-2">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>TECHNOLOGY STACK</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pl-5">
            {project.technologies.map((tech) => (
              <Badge key={tech} size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="pt-4 border-t border-surface-border flex flex-col gap-2.5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded bg-accent text-background font-mono text-xs uppercase font-bold hover:bg-accent-hover transition-colors"
          >
            <span>Live Demonstration</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded bg-surface-elevated border border-surface-border hover:border-surface-border-strong text-typography-primary font-mono text-xs uppercase transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-typography-muted" />
            <span>Source Code (GitHub)</span>
          </a>
        )}
      </div>
    </div>
  );
};
