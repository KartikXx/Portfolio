import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import { profileConfig } from '@/config/Profile';
import { getHeroSkills, skillComponents } from '@/lib/technologies';

export { skillComponents };

export const heroConfig = {
  name: 'Kartik',
  title: 'Backend Engineer with AI taste.',
  avatar: profileConfig.image,
  skills: getHeroSkills(),
  description: {
    template:
      'I build <b>RAG pipelines</b> and <b>agentic systems</b> using {skills:0}, {skills:1}, and {skills:2}. Focused on <b>distributed systems</b>, <b>LLMs</b>, and <b>GenAI</b> — shipping with {skills:3} and {skills:4}.',
  },
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kartik1714/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/KartikXx',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:Kartik.rajput1714@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'X',
    href: 'https://x.com/CodeKartikk',
    icon: <X />,
  },
];
