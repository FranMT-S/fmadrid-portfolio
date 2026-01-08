import { contactInfo } from '@/shared/contactInfo';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../icons';

export const Footer = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,

      hasMailto: true,
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      link: contactInfo.linkedin,
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: contactInfo.github,
      link: contactInfo.github,
    },
  ];

  return (
    <footer className="flex flex-row flex-wrap border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto px-4 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} FMADRID. All rights reserved.</p>
      </div>
      <div className="mobile:w-fit flex w-full flex-row items-center justify-center gap-1 text-center">
        {contacts.map(({ icon: Icon, label, value, link, hasMailto }) => (
          <a
            key={label}
            id={label}
            href={hasMailto ? `mailto:${value}` : link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-1 transition-colors dark:hover:text-white"
            aria-label={label}
          >
            <span className="sr-only">{label}</span>
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};
