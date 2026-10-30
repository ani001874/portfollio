import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeaderProps {
  index?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionTo?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  badge,
  title,
  subtitle,
  actionText,
  actionTo,
  className = '',
}) => {
  return (
    <div className={`mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-border pb-6 ${className}`}>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          {index && (
            <span className="font-mono text-xs font-semibold tracking-widest text-accent">
              {index}
            </span>
          )}
          {index && badge && <span className="text-typography-muted text-xs">//</span>}
          {badge && (
            <span className="font-mono text-xs tracking-wider uppercase text-typography-muted">
              {badge}
            </span>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-typography-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-typography-secondary font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionTo && (
        <div className="flex-shrink-0">
          <Link
            to={actionTo}
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-typography-secondary hover:text-accent transition-colors group"
          >
            <span>{actionText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
};
