import { about } from './About';
import { heroConfig } from './Hero';
import { profileConfig } from './Profile';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: 'Kartik Rajput — Portfolio',
  description:
    'Backend Engineer with AI taste — distributed systems, LLMs, GenAI, RAG pipelines, and agentic systems.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: profileConfig.image,
  author: {
    name: about.name,
    twitter: '@CodeKartikk',
    github: 'KartikXx',
    linkedin: 'kartik1714',
    email: 'Kartik.rajput1714@gmail.com',
  },
  keywords: [
    'portfolio',
    'backend engineer',
    'ai engineer',
    'rag',
    'llm',
    'genai',
    'distributed systems',
    'agentic systems',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      'portfolio',
      'backend engineer',
      'ai engineer',
      'rag pipelines',
      'agentic systems',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
    keywords: [
      'contact',
      'hire',
      'collaboration',
      'backend engineer',
      'ai engineer',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Explore my professional work experience across AI systems evaluation, backend engineering, and distributed systems.',
    keywords: [
      'work experience',
      'career',
      'ai systems evaluator',
      'deccan ai',
      'backend engineer',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: 'Projects - My Work & Projects Portfolio',
    description:
      'Discover my projects across RAG systems, edge AI, blockchain, and medical decision support.',
    keywords: [
      'projects',
      'portfolio',
      'rag',
      'llm',
      'blockchain',
      'machine learning',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description:
      'Read my thoughts, tutorials, and insights on AI systems, backend engineering, and distributed systems.',
    keywords: [
      'blog',
      'tutorials',
      'ai',
      'backend engineering',
      'technical writing',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: 'Resume - Professional CV',
    description: `View and download ${heroConfig.name}'s professional resume and CV. Technical skills, experience, and qualifications.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary',
  },

  // Gears page
  '/gears': {
    title: 'Gears - My Setup & Tools',
    description:
      'Discover the tools, devices, and software I use to get my work done efficiently.',
    keywords: [
      'setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'development environment',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: 'Setup Guide - VS Code Configuration',
    description:
      'Complete guide to setting up VS Code with my preferred configuration, extensions, and fonts for optimal development.',
    keywords: [
      'vscode',
      'setup',
      'configuration',
      'extensions',
      'development environment',
      'guide',
    ],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Journey page
  '/journey': {
    title: 'Journey - Learning & Milestones',
    description:
      'A timeline of my learning, projects, certifications, and career milestones.',
    keywords: ['journey', 'timeline', 'learning', 'milestones', 'career'],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },

  // Certificates page
  '/journey/certificates': {
    title: 'Certificates & Achievements',
    description: 'A curated list of my certificates and notable achievements.',
    keywords: ['certificates', 'achievements', 'credentials', 'learning'],
    ogImage: profileConfig.image,
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
