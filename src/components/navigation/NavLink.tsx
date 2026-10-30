import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick, className = '' }) => {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative py-1 font-mono text-xs tracking-wider uppercase transition-colors duration-150 ${
          isActive
            ? 'text-accent font-medium'
            : 'text-typography-secondary hover:text-typography-primary'
        } ${className}`
      }
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>
          {isActive && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
          )}
        </>
      )}
    </RouterNavLink>
  );
};
