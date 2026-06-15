import { toProjectTechnologies } from '@/lib/technologies';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ResearchMind',
    description:
      'Production-style RAG and agentic AI research copilot — PDF ingestion, ChromaDB embeddings, Ollama-powered answers with citations, and evaluation hooks for retrieval quality',
    image: '/project/notesbuddy.png',
    link: 'https://github.com/KartikXx/ResearchMind-AI',
    technologies: toProjectTechnologies([
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'ChromaDB',
      'Ollama',
    ]),
    github: 'https://github.com/KartikXx/ResearchMind-AI',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/researchmind',
    isWorking: true,
  },
  {
    title: 'FluentForm',
    description:
      'AI speech therapist built with a Node.js backend and browser-based client — pronunciation analysis powered by Azure Cognitive Services',
    image: '/project/syncify.png',
    link: 'https://github.com/KartikXx/FluentAI',
    technologies: toProjectTechnologies([
      'JavaScript',
      'HTML',
      'Node.js',
      'Azure Cognitive Services',
    ]),
    github: 'https://github.com/KartikXx/FluentAI',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/fluentform',
    isWorking: true,
  },
  {
    title: 'GoLoad Balancer',
    description:
      'Fault-tolerant HTTP load balancer in Go with least-connections scheduling, health checks, circuit breaker logic, and Prometheus metrics',
    image: '/project/appwrite.png',
    link: 'https://github.com/KartikXx/GoLoad_Balancer',
    technologies: toProjectTechnologies(['Go', 'Prometheus']),
    github: 'https://github.com/KartikXx/GoLoad_Balancer',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/goload-balancer',
    isWorking: false,
  },
  {
    title: 'URL Shorty',
    description:
      'Multi-threaded C URL shortener with a custom HTTP server, SQLite persistence, mutex-based concurrency, and an in-memory LRU cache',
    image: '/project/quest.png',
    link: 'https://github.com/KartikXx/URL_Shorty',
    technologies: toProjectTechnologies(['C', 'SQLite']),
    github: 'https://github.com/KartikXx/URL_Shorty',
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/url-shorty',
    isWorking: false,
  },
  {
    title: 'TrustChain',
    description:
      'B.Tech final year project — blockchain + IPFS digital evidence management platform with tamper-proof chain of custody',
    image: '/project/festx.png',
    link: '#',
    technologies: toProjectTechnologies([
      'Solidity',
      'React',
      'Web3.js',
      'IPFS',
    ]),
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/trustchain',
    isWorking: false,
  },
  {
    title: 'HealthNex',
    description:
      'AI medical decision support with disease prediction, drug recommendation, cardiovascular risk assessment, and a RAG-based Medibot',
    image: '/project/chillguy.png',
    link: '#',
    technologies: toProjectTechnologies([
      'Python',
      'scikit-learn',
      'LightGBM',
      'Mistral AI',
    ]),
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/healthnex',
    isWorking: false,
  },
  {
    title: 'Attention Gym',
    description:
      'Product blueprint for a gamified cognitive training app — full PRD, TRD, competitive analysis, GTM strategy, and GenZ marketing playbook',
    image: '/project/intent.png',
    link: '#',
    technologies: toProjectTechnologies(['Figma', 'Notion']),
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/attention-gym',
    isWorking: false,
  },
];
