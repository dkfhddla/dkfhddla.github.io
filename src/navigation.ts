import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '글',
      href: getBlogPermalink(),
    },
    {
      text: '소개',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    {
      text: 'GitHub',
      href: 'https://github.com/dkfhddla',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: 'tabler:brand-github',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: '글', href: getBlogPermalink() },
    { text: '소개', href: getPermalink('/about') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/dkfhddla' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Jacob · Built with <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a>.
  `,
};
