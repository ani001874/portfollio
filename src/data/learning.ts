import { LearningTopic } from '../types';

export const learningData: LearningTopic[] = [
  {
    id: 'learn-01',
    number: '01',
    title: 'Data Structures & Algorithms',
    description: 'Practicing algorithmic problem solving, time and space complexity analysis (Big-O), tree traversals, and dynamic programming patterns.',
    status: 'In Progress',
    topics: ['Arrays & HashMaps', 'Two Pointers & Sliding Window', 'Binary Search & Trees', 'Graph Traversal (BFS/DFS)']
  },
  {
    id: 'learn-02',
    number: '02',
    title: 'Backend Engineering & Relational Databases',
    description: 'Deepening knowledge of scalable API contracts, SQL query optimization, database normalization, indexing strategies, and connection pooling.',
    status: 'In Progress',
    topics: ['PostgreSQL Indexing & Transactions', 'Prisma / Knex ORMs', 'Express Middleware Architecture', 'API Error Handling Standards']
  },
  {
    id: 'learn-03',
    number: '03',
    title: 'System Design Fundamentals',
    description: 'Studying core architectural concepts for web applications: client-side vs server-side rendering, caching layers, rate limiting, and microservices trade-offs.',
    status: 'In Progress',
    topics: ['CDN & Edge Caching', 'Horizontal vs Vertical Scaling', 'REST vs GraphQL vs gRPC', 'Stateless vs Stateful Sessions']
  },
  {
    id: 'learn-04',
    number: '04',
    title: 'Automated Testing (Unit & Integration)',
    description: 'Learning how to write reliable test suites for React components and backend routes using Vitest, React Testing Library, and Supertest.',
    status: 'In Progress',
    topics: ['Component Unit Testing', 'Mocking API Requests', 'Integration Testing with MSW', 'Test-Driven Development (TDD) Basics']
  },
  {
    id: 'learn-05',
    number: '05',
    title: 'Open Source Contribution',
    description: 'Exploring active open-source projects, understanding documentation guidelines, submitting meaningful pull requests, and participating in code reviews.',
    status: 'Upcoming',
    topics: ['Reading Large Codebases', 'Issue Triage & Reproduction', 'Git Fork & Rebase Workflows', 'Writing Clear PR Descriptions']
  }
];
