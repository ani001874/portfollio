import React from 'react';

interface DividerProps {
  label?: string;
  className?: string;
  technicalIndex?: string;
}

export const Divider: React.FC<DividerProps> = ({ label, className = '', technicalIndex }) => {
  return (
    <div className={`relative flex items-center my-12 w-full ${className}`} role="separator">
      <div className="flex-grow border-t border-surface-border"></div>
      {(label || technicalIndex) && (
        <div className="flex-shrink mx-4 flex items-center gap-2 text-typography-muted font-mono text-[10px] tracking-widest uppercase">
          {technicalIndex && <span className="text-accent">{technicalIndex}</span>}
          {label && <span>{label}</span>}
        </div>
      )}
      <div className="flex-grow border-t border-surface-border"></div>
    </div>
  );
};
