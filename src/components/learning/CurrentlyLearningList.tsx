import React from 'react';
import { learningData } from '../../data/learning';
import { Sparkles } from 'lucide-react';

export const CurrentlyLearningList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learningData.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-lg bg-surface border border-surface-border hover:border-surface-border-strong transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-xs text-typography-muted mb-2">
              <span className="text-accent font-bold">{item.number}</span>
              <span className="text-[10px] uppercase tracking-wider bg-surface-subtle px-2 py-0.5 rounded border border-surface-border">
                {item.status}
              </span>
            </div>

            <h3 className="text-base font-bold text-typography-primary flex items-center gap-2">
              <span>{item.title}</span>
            </h3>

            <p className="mt-2 text-xs text-typography-secondary leading-relaxed font-sans">
              {item.description}
            </p>

            <div className="mt-4 pt-3 border-t border-surface-border/50 flex flex-wrap gap-1.5 font-mono text-[10px] text-typography-muted">
              {item.topics.map((t) => (
                <span key={t} className="bg-surface-elevated px-2 py-0.5 rounded border border-surface-border/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-surface-subtle border border-surface-border font-mono text-xs text-typography-muted flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-typography-primary">Continuous Growth Mindset: </strong>
          I document my daily learning, solve coding challenges, and build micro-projects to test concepts in practice rather than only reading passive theory.
        </p>
      </div>
    </div>
  );
};
