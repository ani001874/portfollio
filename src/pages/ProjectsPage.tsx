import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Section } from '../components/layout/Section';
import { ProjectList } from '../components/projects/ProjectList';
import { projectsData } from '../data/projects';
import { FeaturedProject } from '../components/projects/FeaturedProject';

export const ProjectsPage: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <PageContainer
      title="Projects — Alex Rivera"
      description="Personal and academic web engineering projects built with React, TypeScript, and modern web technologies by Alex Rivera."
    >
      {/* Header */}
      <div className="pt-12 sm:pt-20 pb-12 border-b border-surface-border">
        <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
          <span>02 // INDEX OF WORK</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-typography-primary leading-tight">
          PROJECTS &amp; EXPERIMENTS
        </h1>
        <p className="mt-4 text-base sm:text-xl text-typography-secondary max-w-3xl leading-relaxed">
          Case studies of web applications I built from scratch to explore frontend architecture, browser APIs, and state management.
        </p>
      </div>

      {/* Featured Deep-Dives */}
      <Section id="featured-work">
        <div className="font-mono text-xs text-typography-muted uppercase tracking-wider mb-8">
          SELECTED_CASE_STUDIES // ARCHITECTURE &amp; LESSONS
        </div>
        <div className="divide-y divide-surface-border">
          {featured.map((project, idx) => (
            <FeaturedProject key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Section>

      {/* Complete Filterable Archive */}
      <Section id="catalog" bordered>
        <div className="font-mono text-xs text-typography-muted uppercase tracking-wider mb-8">
          ALL_PROJECTS // FILTERABLE CATALOG
        </div>
        <ProjectList projects={projectsData} />
      </Section>
    </PageContainer>
  );
};
