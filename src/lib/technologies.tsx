import AWS from '@/components/technologies/AWS';
import Azure from '@/components/technologies/Azure';
import C from '@/components/technologies/C';
import ChromaDB from '@/components/technologies/ChromaDB';
import Docker from '@/components/technologies/Docker';
import FastAPI from '@/components/technologies/FastAPI';
import Figma from '@/components/technologies/Figma';
import GenericTech from '@/components/technologies/GenericTech';
import Go from '@/components/technologies/Go';
import Html from '@/components/technologies/Html';
import IPFS from '@/components/technologies/IPFS';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import LangGraph from '@/components/technologies/LangGraph';
import LightGBM from '@/components/technologies/LightGBM';
import Mistral from '@/components/technologies/Mistral';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import Notion from '@/components/technologies/Notion';
import Ollama from '@/components/technologies/Ollama';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prometheus from '@/components/technologies/Prometheus';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import SQLite from '@/components/technologies/SQLite';
import ScikitLearn from '@/components/technologies/ScikitLearn';
import Solidity from '@/components/technologies/Solidity';
import TypeScript from '@/components/technologies/TypeScript';
import Web3 from '@/components/technologies/Web3';
import React from 'react';

type TechnologyComponent = React.ComponentType<{ label?: string }>;

export const technologyLinks: Record<string, string> = {
  Python: 'https://www.python.org/',
  Go: 'https://go.dev/',
  C: 'https://en.cppreference.com/w/c',
  'C / C++': 'https://en.cppreference.com/w/c',
  FastAPI: 'https://fastapi.tiangolo.com/',
  LangChain: 'https://www.langchain.com/',
  LangGraph: 'https://www.langchain.com/langgraph',
  ChromaDB: 'https://www.trychroma.com/',
  Ollama: 'https://ollama.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  MongoDB: 'https://www.mongodb.com/',
  Redis: 'https://redis.io/',
  Docker: 'https://www.docker.com/',
  AWS: 'https://aws.amazon.com/',
  Azure: 'https://azure.microsoft.com/',
  'Azure Cognitive Services':
    'https://azure.microsoft.com/en-us/products/ai-services',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  HTML: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'Node.js': 'https://nodejs.org/',
  React: 'https://react.dev/',
  TypeScript: 'https://www.typescriptlang.org/',
  Postman: 'https://www.postman.com/',
  Solidity: 'https://soliditylang.org/',
  Prometheus: 'https://prometheus.io/',
  SQLite: 'https://www.sqlite.org/',
  'Web3.js': 'https://web3js.org/',
  IPFS: 'https://ipfs.tech/',
  Figma: 'https://www.figma.com/',
  Notion: 'https://www.notion.so/',
  'scikit-learn': 'https://scikit-learn.org/',
  LightGBM: 'https://lightgbm.readthedocs.io/',
  'Mistral AI': 'https://mistral.ai/',
};

const technologyIcons: Record<string, TechnologyComponent> = {
  Python,
  Go,
  C,
  'C / C++': C,
  FastAPI,
  LangChain,
  LangGraph,
  ChromaDB,
  Ollama,
  PostgreSQL,
  MongoDB,
  Redis,
  Docker,
  AWS,
  Azure,
  'Azure Cognitive Services': Azure,
  JavaScript,
  HTML: Html,
  'Node.js': NodeJs,
  React: ReactIcon,
  TypeScript,
  Postman,
  Solidity,
  Prometheus,
  SQLite,
  'Web3.js': Web3,
  IPFS,
  Figma,
  Notion,
  'scikit-learn': ScikitLearn,
  LightGBM,
  'Mistral AI': Mistral,
};

export function TechnologyIcon({ name }: { name: string }) {
  const Icon = technologyIcons[name];

  if (Icon) {
    return <Icon />;
  }

  return <GenericTech label={name} />;
}

export function toProjectTechnologies(names: string[]) {
  return names.map((name) => ({
    name,
    icon: <TechnologyIcon key={name} name={name} />,
  }));
}

export function toExperienceTechnology(name: string) {
  return {
    name,
    href: technologyLinks[name] ?? '#',
    icon: <TechnologyIcon name={name} />,
  };
}

export const skillComponents = Object.fromEntries(
  Object.entries(technologyIcons).map(([name, Icon]) => [name, Icon]),
) as Record<string, TechnologyComponent>;

export const backendAiSkillNames = [
  'Python',
  'Go',
  'C / C++',
  'FastAPI',
  'LangChain',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'AWS',
];

export const heroSkillNames = [
  'Python',
  'Go',
  'FastAPI',
  'LangChain',
  'PostgreSQL',
];

export function getHeroSkills() {
  return heroSkillNames.map((name) => ({
    name,
    href: technologyLinks[name] ?? '#',
    component: name,
  }));
}

export function getAboutSkills() {
  return backendAiSkillNames.map((name) => ({
    name,
    icon: <TechnologyIcon key={name} name={name} />,
  }));
}
