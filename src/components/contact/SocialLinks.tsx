import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';

export const SocialLinks: React.FC = () => {
  const links = [
    {
      name: 'GitHub',
      url: profileData.github,
      icon: <Github className="w-4 h-4" />,
      handle: 'github.com/placeholder-developer',
    },
    {
      name: 'LinkedIn',
      url: profileData.linkedin,
      icon: <Linkedin className="w-4 h-4" />,
      handle: 'linkedin.com/in/placeholder-developer',
    },
    {
      name: 'Direct Email',
      url: `mailto:${profileData.email}`,
      icon: <Mail className="w-4 h-4" />,
      handle: profileData.email,
    },
    {
      name: 'Resume',
      url: profileData.resumeUrl,
      icon: <FileText className="w-4 h-4" />,
      handle: 'Download PDF (Q3 2024)',
    },
  ];

  return (
    <div className="space-y-3 font-mono text-xs">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="flex items-center justify-between p-3.5 rounded border border-surface-border bg-surface hover:border-accent hover:bg-surface-elevated transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="text-accent group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span className="font-semibold text-typography-primary">{link.name}</span>
          </div>
          <span className="text-typography-muted group-hover:text-typography-secondary transition-colors text-[11px]">
            {link.handle}
          </span>
        </a>
      ))}
    </div>
  );
};
