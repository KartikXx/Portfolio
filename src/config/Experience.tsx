import { toExperienceTechnology } from '@/lib/technologies';

import { profileConfig } from './Profile';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Deccan AI',
    position: 'AI Systems Evaluator (Freelance)',
    location: 'Bengaluru, Karnataka, India (Remote)',
    image: profileConfig.image,
    description: [
      'Evaluated LLM outputs across instruction-following, multi-step reasoning, and tool-use workflows in RLHF pipelines.',
      'Assessed tool invocation accuracy and identified failure modes such as hallucinated outputs and incorrect tool invocations.',
      'Performed multi-step reasoning evaluation to improve production AI system reliability.',
    ],
    startDate: 'December 2025',
    endDate: 'April 2026',
    technologies: [
      toExperienceTechnology('Python'),
      toExperienceTechnology('LangChain'),
      toExperienceTechnology('Postman'),
      toExperienceTechnology('AWS'),
    ],
    website: 'https://deccan.ai',
    linkedin: 'https://www.linkedin.com/company/deccan-ai',
  },
];
