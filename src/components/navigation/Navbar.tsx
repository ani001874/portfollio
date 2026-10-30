import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { Menu, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-background/85 backdrop-blur-md transition-all">
        <div className="w-full max-w-content mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo / Name Monogram */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 font-mono font-bold tracking-tight text-typography-primary hover:text-accent transition-colors group"
            >
              <span className="w-7 h-7 rounded border border-surface-border group-hover:border-accent flex items-center justify-center bg-surface-elevated text-accent text-xs">
                AR
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {profileData.name}
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-surface-border text-[11px] font-mono text-typography-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>OPEN TO WORK</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            <NavLink to="/projects">Work</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Action / Resume Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-surface-border hover:border-accent text-typography-secondary hover:text-typography-primary font-mono text-xs uppercase tracking-wider transition-colors bg-surface-elevated/50"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-typography-secondary hover:text-typography-primary rounded border border-surface-border bg-surface-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
