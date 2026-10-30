import React from 'react';
import { profileData } from '../../data/profile';
import { Layers, Terminal, Sparkles, BookOpen } from 'lucide-react';

export const DeveloperSystemCard: React.FC = () => {
  const { systemCard } = profileData;

  return (
    <div className="rounded-lg border border-surface-border bg-surface/90 backdrop-blur-md p-5 font-mono text-xs shadow-xl relative overflow-hidden group hover:border-surface-border-strong transition-colors">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4 text-typography-muted">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-bold text-typography-primary tracking-wider uppercase">
            DEV_STATUS_CARD
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          ACTIVE
        </span>
      </div>

      <div className="space-y-4">
        {/* CURRENTLY BUILDING */}
        <div>
          <div className="flex items-center justify-between text-[10px] text-typography-muted tracking-wider uppercase mb-1.5">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent" />
              CURRENTLY BUILDING
            </span>
            <span className="text-accent">{systemCard.progress}%</span>
          </div>
          <div className="text-typography-primary font-semibold mb-2">
            {systemCard.currentlyBuilding}
          </div>
          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-surface-elevated overflow-hidden border border-surface-border">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${systemCard.progress}%` }}
            />
          </div>
        </div>

        {/* CURRENTLY LEARNING */}
        <div className="pt-2 border-t border-surface-border/60">
          <div className="text-[10px] text-typography-muted tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-accent" />
            ACTIVE LEARNING
          </div>
          <ul className="space-y-1 text-typography-secondary text-[11px]">
            {systemCard.learning.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-accent text-[9px]">0{idx + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PRIMARY STACK */}
        <div className="pt-2 border-t border-surface-border/60">
          <div className="text-[10px] text-typography-muted tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-accent" />
            PRIMARY STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {systemCard.stack.map((tech) => (
              <span
                key={tech}
                className="bg-surface-elevated px-2 py-0.5 rounded border border-surface-border text-typography-primary text-[10px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
