import { profileConfig } from './Profile';

export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: profileConfig.image,
    alt: profileConfig.alt,
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Resume',
      href: '/resume',
    },
  ] as NavItem[],
};
