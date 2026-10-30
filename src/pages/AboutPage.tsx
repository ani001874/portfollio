import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Section } from '../components/layout/Section';
import { SectionHeader } from '../components/layout/SectionHeader';
import { SkillGroup } from '../components/skills/SkillGroup';
import { CurrentlyLearningList } from '../components/learning/CurrentlyLearningList';
import { EducationCard } from '../components/about/EducationCard';
import { profileData } from '../data/profile';
import { skillsData } from '../data/skills';
import { Heart, Compass, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <PageContainer
      title="About & Learning Journey — Animesh Mahato"
      description="About Animesh Mahato: developer journey, educational foundation, problem-solving approach, and active learning areas."
    >
      {/* Header */}
      <div className="pt-12 sm:pt-20 pb-12 border-b border-surface-border">
        <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
          <span>03 // BACKGROUND &amp; STORY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-typography-primary leading-tight">
          ABOUT &amp; LEARNING JOURNEY
        </h1>
        <p className="mt-4 text-base sm:text-xl text-typography-secondary max-w-3xl leading-relaxed">
          I am a fresher software developer with a solid foundation in computer science and a passion for building clean, user-focused web interfaces.
        </p>
      </div>

      {/* Developer Journey */}
      <Section id="journey">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-typography-muted border-b border-surface-border pb-3 flex items-center justify-between">
                <span>CANDIDATE_SUMMARY</span>
                <span className="text-accent">FRESHER</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-typography-secondary">
                <p><span className="text-typography-muted">DEGREE:</span> B.S. in Computer Science</p>
                <p><span className="text-typography-muted">LOCATION:</span> {profileData.location}</p>
                <p><span className="text-typography-muted">OPEN TO:</span> Junior / Entry-Level Roles</p>
                <p><span className="text-typography-muted">PREFERRED:</span> Frontend / Full-Stack</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface border border-surface-border font-mono text-xs space-y-3">
              <div className="text-typography-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-accent" />
                <span>WHAT I ENJOY BUILDING</span>
              </div>
              <ul className="space-y-2 text-typography-secondary list-disc pl-4 marker:text-accent font-sans">
                <li>Responsive, accessible interfaces with React and Tailwind CSS</li>
                <li>Interactive tools that solve daily workflow friction</li>
                <li>Clean RESTful APIs with clear validation and error handling</li>
                <li>Projects that require understanding state management deeply</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-typography-secondary leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-typography-primary mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-accent" />
                <span>How I Approach Software Development</span>
              </h2>
              <p className="text-base sm:text-lg mb-4">
                During my computer science degree, I realized that writing code is only half of the challenge—the other half is building software that other people can easily read, maintain, and interact with without friction.
              </p>
              <p className="text-base sm:text-lg mb-4">
                When working on projects like my sprint workspace or e-commerce catalog, I pay close attention to user feedback states: loading spinners, error banners, keyboard focus rings, and optimistic state updates. I believe attention to detail early in one&apos;s career establishes the habits needed to become a dependable engineer.
              </p>
            </div>

            <div className="pt-6 border-t border-surface-border">
              <h3 className="text-xl font-bold tracking-tight text-typography-primary mb-4">
                Personal Engineering Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                {[
                  {
                    title: 'Learn By Building',
                    desc: 'Theory is essential, but building full applications reveals the subtle bugs that tutorials skip over.',
                  },
                  {
                    title: 'Clean, Readable Code',
                    desc: 'Descriptive variable names, typed interfaces, and modular components over clever one-liners.',
                  },
                  {
                    title: 'Respect the User Experience',
                    desc: 'Fast page loads, visible keyboard focus, and layouts that adapt smoothly to mobile screens.',
                  },
                  {
                    title: 'Eagerness to Learn',
                    desc: 'Receptive to constructive code review feedback and excited to learn from experienced developers.',
                  },
                ].map((val) => (
                  <div key={val.title} className="p-4 rounded bg-surface border border-surface-border">
                    <div className="flex items-center gap-2 text-accent font-semibold mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-typography-muted font-sans text-xs mt-1 leading-normal">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Skills */}
      <Section id="skills" bordered>
        <SectionHeader
          index="03.1"
          badge="CAPABILITIES"
          title="TECHNICAL SKILLS"
          subtitle="Core programming languages, libraries, and developer tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>
      </Section>

      {/* Active Learning Radar */}
      <Section id="learning" bordered>
        <SectionHeader
          index="03.2"
          badge="GROWTH"
          title="ACTIVE LEARNING ROADMAP"
          subtitle="Topics I am studying to expand my computer science and engineering fundamentals."
        />

        <CurrentlyLearningList />
      </Section>

      {/* Education */}
      <Section id="education" bordered>
        <SectionHeader
          index="03.3"
          badge="DEGREE"
          title="EDUCATION"
          subtitle="Academic credentials and foundational coursework."
        />

        <EducationCard />

        <div className="mt-12 text-center">
          <Button to="/contact" size="lg">
            Let&apos;s Connect
          </Button>
        </div>
      </Section>
    </PageContainer>
  );
};
