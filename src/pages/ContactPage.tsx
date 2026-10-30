import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ContactSection } from '../components/contact/ContactSection';
import { Section } from '../components/layout/Section';
import { MessageSquare, Sparkles, Terminal } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <PageContainer
      title="Contact — Alex Rivera"
      description="Get in touch with Alex Rivera for entry-level frontend and software engineering opportunities."
    >
      {/* Header */}
      <div className="pt-12 sm:pt-20 pb-12 border-b border-surface-border">
        <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
          <span>04 // GET IN TOUCH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-typography-primary leading-tight">
          CONNECT &amp; REACH OUT
        </h1>
        <p className="mt-4 text-base sm:text-xl text-typography-secondary max-w-3xl leading-relaxed">
          I am actively seeking junior frontend, full-stack, and software engineer opportunities. Reach out if you have an open role, an interesting project, or want to discuss code.
        </p>
      </div>

      {/* Main Interactive Contact Section */}
      <div className="pt-12">
        <ContactSection />
      </div>

      {/* Fresher Availability Context */}
      <Section id="availability" bordered>
        <div className="font-mono text-xs text-typography-muted uppercase tracking-wider mb-8">
          OPPORTUNITY_PARAMETERS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-accent font-bold">
              <MessageSquare className="w-4 h-4" />
              <span>ROLES SOUGHT</span>
            </div>
            <p className="text-typography-secondary font-sans text-xs leading-relaxed">
              Seeking Entry-Level / Junior Frontend Engineer, Junior Full-Stack Developer, or Software Engineer graduate roles.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-accent font-bold">
              <Sparkles className="w-4 h-4" />
              <span>LOCATION &amp; RELOCATION</span>
            </div>
            <p className="text-typography-secondary font-sans text-xs leading-relaxed">
              Available for remote positions worldwide and open to on-site / hybrid relocation for compelling opportunities.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-surface border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-accent font-bold">
              <Terminal className="w-4 h-4" />
              <span>COMMUNICATION SLA</span>
            </div>
            <p className="text-typography-secondary font-sans text-xs leading-relaxed">
              I monitor direct messages and emails daily and will promptly follow up within 24 hours.
            </p>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
};
