import React from 'react';
import { SkillCategory } from '../../types';

interface SkillGroupProps {
  category: SkillCategory;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category }) => {
  return (
    <div className="p-6 sm:p-8 rounded-lg bg-surface border border-surface-border">
      <div className="border-b border-surface-border pb-4 mb-6">
        <h3 className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
          {category.name}
        </h3>
        <p className="mt-1 text-xs text-typography-muted font-sans leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded bg-surface-subtle border border-surface-border text-xs font-mono text-typography-secondary hover:text-typography-primary hover:border-accent/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
