import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Section } from '../components/layout/Section';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Hero } from '../components/hero/Hero';
import { FeaturedProject } from '../components/projects/FeaturedProject';
import { SkillGroup } from '../components/skills/SkillGroup';
import { CurrentlyLearningList } from '../components/learning/CurrentlyLearningList';
import { EducationCard } from '../components/about/EducationCard';
import { ContactSection } from '../components/contact/ContactSection';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <PageContainer
      title="Alex Rivera — Frontend Developer & Aspiring Software Engineer"
      description="Portfolio of Alex Rivera, an entry-level software engineer and frontend developer specializing in React, TypeScript, and modern web applications."
    >
      {/* 01 // HERO */}
      <Hero />

      {/* 02 // SELECTED PROJECTS */}
      <Section id="work">
        <SectionHeader
          index="01"
          badge="PROJECTS"
          title="SELECTED PERSONAL WORK"
          subtitle="Complete web applications built to understand state management, browser APIs, and responsive architectures."
          actionText="View All Projects"
          actionTo="/projects"
        />

        <div className="divide-y divide-surface-border">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* 03 // ABOUT / LEARNING JOURNEY */}
      <Section id="about" bordered>
        <SectionHeader
          index="02"
          badge="BACKGROUND"
          title="ABOUT &amp; LEARNING APPROACH"
          subtitle="How I approach software development, solve problems, and structure my study."
          actionText="Read Full About"
          actionTo="/about"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-lg bg-surface border border-surface-border font-mono text-xs space-y-3">
              <div className="text-typography-muted uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-surface-border">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>FRESHER_PROFILE // OVERVIEW</span>
              </div>
              <p><span className="text-typography-muted">ROLE:</span> {profileData.role}</p>
              <p><span className="text-typography-muted">FOCUS:</span> Frontend Systems &amp; Web Foundations</p>
              <p><span className="text-typography-muted">STATUS:</span> <span className="text-emerald-400">Available For Junior Roles</span></p>
              <p><span className="text-typography-muted">EDUCATION:</span> B.S. in Computer Science</p>
            </div>

            <div className="p-4 rounded-lg bg-surface-subtle border border-surface-border text-xs text-typography-muted font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Building projects from scratch to understand real browser edge cases.</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-typography-secondary leading-relaxed">
            {profileData.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div className="pt-4 flex items-center gap-4">
              <Button to="/about" variant="outline" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                More About My Journey
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 04 // TECHNICAL SKILLS */}
      <Section id="skills" bordered>
        <SectionHeader
          index="03"
          badge="TOOLKIT"
          title="TECHNICAL SKILLS"
          subtitle="Languages, frontend tools, backend basics, and workflows I actively work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>
      </Section>

      {/* 05 // CURRENTLY LEARNING */}
      <Section id="learning" bordered>
        <SectionHeader
          index="04"
          badge="ROADMAP"
          title="CURRENTLY LEARNING"
          subtitle="Active topics and technical domains I study to continuously broaden my engineering foundation."
        />

        <CurrentlyLearningList />
      </Section>

      {/* 06 // EDUCATION */}
      <Section id="education" bordered>
        <SectionHeader
          index="05"
          badge="ACADEMICS"
          title="EDUCATION &amp; COURSEWORK"
          subtitle="Degree, core computer science subjects, and foundational theory."
        />

        <EducationCard />
      </Section>

      {/* 07 // CONTACT */}
      <Section id="contact" bordered>
        <ContactSection />
      </Section>
    </PageContainer>
  );
};
