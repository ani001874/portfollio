import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-surface-border bg-background pt-16 pb-12 mt-20 relative">
      <div className="w-full max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Contact Statement */}
        <div className="pb-12 border-b border-surface-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-typography-primary leading-tight">
                HAVE AN OPPORTUNITY, PROJECT, OR <span className="text-accent underline decoration-accent/30 underline-offset-8">INTERESTING PROBLEM</span>?
              </h2>
              <p className="mt-4 text-typography-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
                I am actively interviewing for junior frontend and software engineer roles. Feel free to reach out.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-accent text-background font-mono font-semibold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm group"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-surface-elevated border border-surface-border hover:border-surface-border-strong text-typography-primary font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Directory & Social Links */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-surface-border font-mono text-xs">
          <div className="flex items-center gap-6 text-typography-secondary">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/projects" className="hover:text-accent transition-colors">
              Projects
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-5 text-typography-muted">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-typography-primary transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-typography-primary transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Minimal Footer Baseline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-typography-muted">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React + TypeScript + Tailwind CSS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
