import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  const projectNumber = `0${index + 1}`.slice(-2);

  return (
    <article className="py-16 sm:py-20 border-b border-surface-border first:pt-8 last:border-b-0 group">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}>
        {/* Project Preview Graphic */}
        <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <Link
            to={`/projects/${project.slug}`}
            className="block relative rounded-lg overflow-hidden border border-surface-border group-hover:border-accent/50 transition-all duration-300 bg-surface/50 aspect-[16/9]"
          >
            <img
              src={project.image}
              alt={`Interface visual for ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase bg-background/90 backdrop-blur-md px-2.5 py-1 rounded border border-surface-border text-typography-muted">
              PROJECT {projectNumber} // {project.category}
            </div>
          </Link>
        </div>

        {/* Project Editorial Content */}
        <div className={`lg:col-span-5 flex flex-col justify-between ${
          isReversed ? 'lg:order-1' : 'lg:order-2'
        }`}>
          <div>
            <div className="flex items-center gap-3 mb-3 font-mono text-xs text-typography-muted">
              <span className="text-accent font-semibold">{projectNumber}</span>
              <span>/</span>
              <span className="uppercase tracking-wider">{project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-typography-primary group-hover:text-accent transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            <p className="mt-4 text-sm sm:text-base text-typography-secondary font-normal leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Key Features Preview */}
            <div className="mt-5 space-y-1.5 font-mono text-xs text-typography-muted">
              {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <Badge key={tech} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-surface-border/60 flex items-center justify-between">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="flex items-center gap-3 text-typography-muted">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-typography-primary transition-colors p-1"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-typography-primary transition-colors p-1"
                  aria-label={`Live demonstration of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
