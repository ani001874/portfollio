import React from 'react';
import { educationData } from '../../data/education';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

export const EducationCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {educationData.map((edu) => (
        <div
          key={edu.id}
          className="p-6 sm:p-8 rounded-lg bg-surface border border-surface-border space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-surface-border pb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-typography-primary">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-typography-secondary mt-1 flex items-center gap-2">
                <span>{edu.institution}</span>
                <span className="text-typography-muted">•</span>
                <span className="flex items-center gap-1 font-mono text-xs text-typography-muted">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs text-typography-muted sm:text-right flex-shrink-0">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>{edu.year}</span>
            </div>
          </div>

          <p className="text-sm text-typography-secondary leading-relaxed">
            {edu.description}
          </p>

          {/* Relevant Coursework */}
          <div>
            <div className="font-mono text-xs text-typography-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>RELEVANT COURSEWORK &amp; THEORY:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.relevantCoursework.map((course) => (
                <span
                  key={course}
                  className="font-mono text-xs bg-surface-subtle text-typography-secondary px-2.5 py-1 rounded border border-surface-border"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          {edu.academicProjects && edu.academicProjects.length > 0 && (
            <div className="pt-4 border-t border-surface-border/60">
              <div className="font-mono text-xs text-typography-muted uppercase tracking-wider mb-2">
                ACADEMIC PROJECTS:
              </div>
              <ul className="space-y-1.5 list-disc pl-4 text-xs sm:text-sm text-typography-secondary marker:text-accent font-sans">
                {edu.academicProjects.map((p, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
