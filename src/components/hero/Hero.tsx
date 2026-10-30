import React from 'react';
import { Button } from '../ui/Button';
import { DeveloperSystemCard } from './DeveloperSystemCard';
import { ArrowDownRight, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <div className="pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-surface-border relative overflow-hidden">
      {/* Subtle background tech texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-10">
        {/* Availability / Status Eyebrow */}
        <div>
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-elevated/80 border border-surface-border backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-widest text-typography-secondary uppercase">
              {profileData.availability.label}
            </span>
          </div>
        </div>

        {/* Hero Headline & Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tighter text-typography-primary leading-[0.95] uppercase">
              {profileData.heroHeading.line1}<br />
              <span className="text-typography-primary">{profileData.heroHeading.line2}</span><br />
              <span className="text-accent">{profileData.heroHeading.line3}</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-typography-secondary max-w-2xl font-normal leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/projects" size="lg" icon={<ArrowDownRight className="w-4 h-4" />}>
                View My Work
              </Button>
              <Button to="/contact" variant="outline" size="lg" icon={<Mail className="w-4 h-4" />}>
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Side: Developer System Card */}
          <div className="lg:col-span-5">
            <DeveloperSystemCard />
          </div>
        </div>

        {/* Small Technical Metadata Strip */}
        <div className="pt-6 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-typography-muted">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-accent font-semibold">CORE TOOLSET:</span>
            <span>React</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>JavaScript</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span>Node.js</span>
            <span>·</span>
            <span>Git</span>
          </div>
          <div className="text-[11px] text-typography-muted">
            CS GRADUATE // ENTRY-LEVEL CANDIDATE
          </div>
        </div>
      </div>
    </div>
  );
};
