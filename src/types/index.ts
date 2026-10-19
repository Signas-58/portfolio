export interface Project {
  id: string;
  title: string;
  codeId: string;
  category: 'AI & Automation' | 'Web & Systems' | 'Data & Security';
  tagline: string;
  description: string;
  status: 'Production Prototype' | 'In Development' | 'System Proposed';
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: {
    problem: string;
    architecture: string;
    tradeOffs: string;
    outcomes: string;
    techStack: string[];
  };
}

export interface SkillCategory {
  title: string;
  code: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Working Knowledge' | 'Practical Experience';
    highlight?: boolean;
  }[];
}

export interface GithubUserData {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  html_url: string;
}
