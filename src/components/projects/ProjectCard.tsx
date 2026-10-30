import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg bg-surface border border-surface-border hover:border-surface-border-strong transition-all duration-300 group">
      <div>
        <div className="flex items-center justify-between font-mono text-xs text-typography-muted mb-4">
          <span className="text-accent font-semibold">{project.id}</span>
          <span className="uppercase tracking-wider">{project.year}</span>
        </div>

        <Link to={`/projects/${project.slug}`} className="block mb-4 overflow-hidden rounded border border-surface-border aspect-video bg-surface-subtle">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        <h3 className="text-xl font-bold tracking-tight text-typography-primary group-hover:text-accent transition-colors">
          <Link to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-typography-secondary leading-relaxed line-clamp-3 font-sans">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} size="sm" variant="muted">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-typography-primary hover:text-accent transition-colors"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <div className="flex items-center gap-2.5 text-typography-muted">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-typography-primary transition-colors p-1"
              aria-label={`GitHub source for ${project.title}`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-typography-primary transition-colors p-1"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
