import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    name: 'PROGRAMMING LANGUAGES',
    description: 'Core languages used across frontend, backend logic, and scripting.',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python (Fundamentals)', 'SQL']
  },
  {
    id: 'frontend',
    name: 'FRONTEND DEVELOPMENT',
    description: 'Building accessible, responsive, and maintainable user interfaces.',
    skills: ['React', 'Tailwind CSS', 'Responsive Layouts', 'State Management (Zustand/Context)', 'DOM & Web APIs', 'CSS Grid & Flexbox']
  },
  {
    id: 'backend',
    name: 'BACKEND & CORE CONCEPTS',
    description: 'Server foundations, API communications, and database persistence.',
    skills: ['Node.js', 'Express.js', 'RESTful API Design', 'PostgreSQL', 'SQLite / Relational Schemas', 'JWT Authentication']
  },
  {
    id: 'tools',
    name: 'DEVELOPER TOOLS & WORKFLOW',
    description: 'Version control, build tools, and developer productivity utilities.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'npm / pnpm', 'Linux Terminal Basics']
  }
];
