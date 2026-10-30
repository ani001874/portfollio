import React from 'react';
import { PageContainer } from '../components/layout';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <PageContainer
      title="404 — Page Not Found"
      description="The requested page could not be found."
    >
      <div className="py-24 sm:py-32 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded border border-surface-border bg-surface-elevated flex items-center justify-center text-accent mb-6">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="font-mono text-xs text-red-400 uppercase tracking-widest mb-3">
          ERROR // 404_PAGE_NOT_FOUND
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-typography-primary">
          PAGE NOT FOUND
        </h1>

        <p className="mt-4 text-sm sm:text-base text-typography-secondary max-w-md leading-relaxed">
          The requested page does not exist or has been moved to a new route.
        </p>

        <div className="mt-8">
          <Button to="/" size="lg" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return To Home
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};
