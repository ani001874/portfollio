import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 select-none text-xs tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed group focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 gap-1.5 text-[11px] rounded',
    md: 'px-4 py-2.5 gap-2 text-xs rounded',
    lg: 'px-6 py-3.5 gap-2.5 text-xs rounded-md',
  };

  const variantStyles = {
    primary: 'bg-accent text-background hover:bg-accent-hover font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.35)]',
    secondary: 'bg-surface-elevated text-typography-primary border border-surface-border hover:border-surface-border-strong hover:bg-surface-subtle',
    outline: 'border border-surface-border text-typography-secondary hover:text-typography-primary hover:border-accent hover:bg-accent/5',
    ghost: 'text-typography-secondary hover:text-typography-primary hover:bg-surface-subtle',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
