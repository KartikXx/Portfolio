export type CommandItem = {
  id: string;
  label: string;
  description?: string;
  href?: string;
  action?: string;
  shortcut?: string;
  group: 'Navigate' | 'Actions' | 'Connect';
};

export const commandPaletteConfig = {
  title: 'Command palette',
  placeholder: 'Type a command or search...',
  email: 'Kartik.rajput1714@gmail.com',
  github: 'https://github.com/KartikXx',
  commands: [
    {
      id: 'home',
      label: 'Go to Home',
      description: 'Navigate to the homepage',
      href: '/',
      shortcut: 'H',
      group: 'Navigate',
    },
    {
      id: 'work',
      label: 'Go to Work',
      description: 'View work experience',
      href: '/work-experience',
      shortcut: 'W',
      group: 'Navigate',
    },
    {
      id: 'projects',
      label: 'Go to Projects',
      description: 'Browse project portfolio',
      href: '/projects',
      shortcut: 'P',
      group: 'Navigate',
    },
    {
      id: 'resume',
      label: 'Go to Resume',
      description: 'View and download resume',
      href: '/resume',
      shortcut: 'R',
      group: 'Navigate',
    },
    {
      id: 'contact',
      label: 'Go to Contact',
      description: 'Get in touch',
      href: '/contact',
      shortcut: 'C',
      group: 'Navigate',
    },
    {
      id: 'gears',
      label: 'Go to Gears',
      description: 'View hardware and software setup',
      href: '/gears',
      shortcut: 'G',
      group: 'Navigate',
    },
    {
      id: 'setup',
      label: 'Go to Setup',
      description: 'VS Code configuration guide',
      href: '/setup',
      shortcut: 'S',
      group: 'Navigate',
    },
    {
      id: 'certificates',
      label: 'Go to Certificates',
      description: 'View certificates and achievements',
      href: '/journey/certificates',
      group: 'Navigate',
    },
    {
      id: 'journey',
      label: 'Go to Journey',
      description: 'Learning and career timeline',
      href: '/journey',
      group: 'Navigate',
    },
    {
      id: 'theme',
      label: 'Toggle Theme',
      description: 'Switch between light and dark mode',
      action: 'toggle-theme',
      shortcut: 'T',
      group: 'Actions',
    },
    {
      id: 'scroll-top',
      label: 'Scroll to Top',
      description: 'Scroll to the top of the page',
      action: 'scroll-top',
      group: 'Actions',
    },
    {
      id: 'copy-email',
      label: 'Copy Email',
      description: 'Copy email address to clipboard',
      action: 'copy-email',
      shortcut: 'E',
      group: 'Actions',
    },
    {
      id: 'github',
      label: 'View GitHub Profile',
      description: 'Open GitHub profile in a new tab',
      action: 'open-github',
      group: 'Connect',
    },
    {
      id: 'spotify',
      label: 'Open Spotify Song',
      description: 'Open the currently playing Spotify song',
      action: 'open-spotify',
      shortcut: 'M',
      group: 'Connect',
    },
  ] as CommandItem[],
};
