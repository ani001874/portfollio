import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'outline' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium tracking-wider uppercase transition-colors';

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 rounded',
    md: 'text-xs px-2.5 py-1 rounded',
  };

  const variantStyles = {
    default: 'bg-surface-subtle text-typography-secondary border border-surface-border',
    accent: 'bg-accent/10 text-accent border border-accent/30',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    outline: 'bg-transparent text-typography-muted border border-surface-border',
    muted: 'bg-surface-elevated/40 text-typography-muted border border-transparent',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
