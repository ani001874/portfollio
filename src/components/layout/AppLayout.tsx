import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-typography-primary selection:bg-accent/20 selection:text-accent relative">
      <ScrollToTop />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-background font-mono text-xs uppercase font-bold rounded shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow focus:outline-none">
        {children}
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};
