import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { projectsData } from '../data/projects';
import { ProjectMeta } from '../components/projects/ProjectMeta';
import { ProjectNavigation } from '../components/projects/ProjectNavigation';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : undefined;

  return (
    <PageContainer
      title={`${project.title} — Case Study`}
      description={project.shortDescription}
    >
      {/* Top Breadcrumb */}
      <div className="pt-8 sm:pt-12 pb-6 border-b border-surface-border">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-typography-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="py-12 border-b border-surface-border">
        <div className="flex items-center gap-3 font-mono text-xs text-typography-muted mb-4">
          <span className="text-accent font-semibold">PROJECT {project.id}</span>
          <span>//</span>
          <span className="uppercase tracking-wider">{project.category}</span>
          <span>//</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-typography-primary leading-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-base sm:text-xl text-typography-secondary max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Main Image Showcase */}
      <div className="py-8">
        <div className="rounded-lg overflow-hidden border border-surface-border bg-surface aspect-[16/9] shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Two Column Case Study Layout */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content Narrative */}
        <div className="lg:col-span-8 space-y-14">
          {/* 01 // Problem */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>01 // THE PROBLEM</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-typography-primary">
              What Was I Trying to Solve?
            </h2>
            <p className="text-base text-typography-secondary leading-relaxed font-sans">
              {project.problem}
            </p>
          </section>

          {/* 02 // Approach */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>02 // THE APPROACH</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-typography-primary">
              How Did I Approach It?
            </h2>
            <p className="text-base text-typography-secondary leading-relaxed font-sans">
              {project.approach}
            </p>

            {/* Technical Decisions */}
            {project.technicalDecisions && project.technicalDecisions.length > 0 && (
              <div className="mt-6 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-typography-muted">
                  KEY ARCHITECTURAL DECISIONS:
                </h3>
                <div className="space-y-3">
                  {project.technicalDecisions.map((td, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface border border-surface-border">
                      <div className="font-mono text-xs font-bold text-typography-primary">
                        {td.title}
                      </div>
                      <div className="font-mono text-[11px] text-accent mt-1">
                        Decision: {td.decision}
                      </div>
                      <p className="text-xs text-typography-secondary mt-2 leading-relaxed font-sans">
                        <strong className="text-typography-muted">Rationale: </strong>{td.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 03 // Key Features & Implementation */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>03 // IMPLEMENTATION</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-typography-primary">
              Key Features Built
            </h2>
            <ul className="space-y-2.5 pl-4 list-disc text-sm sm:text-base text-typography-secondary marker:text-accent font-sans">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="leading-relaxed">
                  {feat}
                </li>
              ))}
            </ul>
          </section>

          {/* 04 // Challenges */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>04 // CHALLENGES</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-typography-primary">
              What Was Difficult?
            </h2>
            <div className="space-y-4">
              {project.challenges.map((c, idx) => (
                <div key={idx} className="p-5 rounded-lg bg-surface border border-surface-border space-y-3">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-typography-primary">
                        Hurdle: {c.challenge}
                      </h4>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-surface-border/50 flex items-start gap-2.5 pl-6">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-typography-secondary leading-relaxed font-sans">
                      <strong className="text-typography-primary">Resolution: </strong>
                      {c.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 // What I Learned */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>05 // LEARNING</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-typography-primary">
              What Did This Project Teach Me?
            </h2>
            <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-3">
              <ul className="space-y-2 list-disc pl-4 text-sm text-typography-secondary marker:text-accent font-sans">
                {project.whatILearned.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 06 // Future Improvements */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>06 // NEXT</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-typography-primary">
              What Would I Improve Next?
            </h2>
            <ul className="space-y-2 pl-4 list-disc text-sm text-typography-secondary marker:text-accent font-sans">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="leading-relaxed">
                  {imp}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sticky Sidebar Metadata */}
        <div className="lg:col-span-4 sticky top-24">
          <ProjectMeta project={project} />
        </div>
      </div>

      {/* Previous / Next Pagination */}
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </PageContainer>
  );
};
