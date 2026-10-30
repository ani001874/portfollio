import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  bordered = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 lg:py-28 relative ${
        bordered ? 'border-t border-surface-border' : ''
      } ${className}`}
    >
      {children}
    </section>
  );
};
