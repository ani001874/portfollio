export interface Profile {
  name: string;
  role: string;
  tagline: string;
  heroHeading: {
    line1: string;
    line2: string;
    line3: string;
  };
  shortBio: string;
  aboutParagraphs: string[];
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
  availability: {
    status: string;
    label: string;
    message: string;
  };
  systemCard: {
    currentlyBuilding: string;
    progress: number;
    learning: string[];
    stack: string[];
  };
}

export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'devtools';

export interface TechnicalDecision {
  title: string;
  decision: string;
  rationale: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  year: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  approach: string;
  keyFeatures: string[];
  technicalDecisions: TechnicalDecision[];
  challenges: TechnicalChallenge[];
  whatILearned: string[];
  futureImprovements: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface LearningTopic {
  id: string;
  number: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Upcoming';
  topics: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  relevantCoursework: string[];
  academicProjects?: string[];
}
