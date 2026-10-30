import React, { useEffect } from 'react';
import { NavLink } from './NavLink';
import { X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
    >
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between border-b border-surface-border pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-typography-secondary tracking-widest uppercase">
            {profileData.availability.status}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-typography-secondary hover:text-typography-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 py-8" aria-label="Mobile Navigation Links">
        <div className="text-[11px] font-mono tracking-widest text-typography-muted uppercase mb-1">
          NAVIGATION // INDEX
        </div>
        <NavLink to="/" onClick={onClose} className="text-xl">
          01 // Home
        </NavLink>
        <NavLink to="/projects" onClick={onClose} className="text-xl">
          02 // Selected Projects
        </NavLink>
        <NavLink to="/about" onClick={onClose} className="text-xl">
          03 // About &amp; Learning
        </NavLink>
        <NavLink to="/contact" onClick={onClose} className="text-xl">
          04 // Contact
        </NavLink>
      </nav>

      {/* Footer Info & Resume Download */}
      <div className="border-t border-surface-border pt-6 flex flex-col gap-4">
        <a
          href={profileData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-elevated border border-surface-border hover:border-accent text-typography-primary font-mono text-xs uppercase tracking-wider rounded"
        >
          <FileText className="w-4 h-4 text-accent" />
          <span>Download Resume PDF</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-typography-muted" />
        </a>

        <div className="flex items-center justify-between text-[11px] font-mono text-typography-muted">
          <span>{profileData.location}</span>
          <span className="text-accent">{profileData.role}</span>
        </div>
      </div>
    </div>
  );
};
