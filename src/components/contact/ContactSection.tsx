import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { profileData } from '../../data/profile';
import { Sparkles, MapPin, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        index="06"
        badge="TRANSMISSION"
        title="INITIATE CONTACT"
        subtitle="Have an opportunity, project, or interesting software engineering problem? Let's connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Channels & Availability Side Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-typography-muted border-b border-surface-border pb-3 flex items-center justify-between">
              <span>STATUS // AVAILABILITY</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                OPEN TO WORK
              </span>
            </div>

            <p className="text-sm text-typography-secondary leading-relaxed font-sans">
              {profileData.availability.message}
            </p>

            <div className="pt-2 border-t border-surface-border space-y-2 font-mono text-xs text-typography-muted">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span className="text-typography-primary">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Eager to learn &amp; contribute to real teams</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-typography-muted mb-3">
              DIRECT_PROFILES
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
