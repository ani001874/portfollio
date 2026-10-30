import { Education } from '../types';

export const educationData: Education[] = [
  {
    id: 'edu-01',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University of Technology (Placeholder)',
    location: 'City, State',
    year: '2020 — 2024 (Recent Graduate)',
    description: 'Focused on core computing fundamentals, algorithmic problem solving, software engineering principles, and full-stack web technologies.',
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems (SQL)',
      'Operating Systems & Concurrency',
      'Computer Networks & Protocols',
      'Web Systems Architecture',
      'Software Testing & Quality Assurance'
    ],
    academicProjects: [
      'DevSprint — Capstone project implementing a real-time Kanban board with optimistic local caching.',
      'Algorithmic Pathfinding Visualizer — Java/Swing desktop tool visualizing Dijkstra and A* search algorithms.'
    ]
  }
];
