import { GitHubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import type { ComponentType } from 'react';

interface ProfileLink {
  name: string;
  url: string;
  Icon: ComponentType<{ className?: string }>;
}

export const Contact = () => {
  const links: ProfileLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/FranMT-S',
      Icon: GitHubIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fmadridt/',
      Icon: LinkedInIcon,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          I’m currently looking for new opportunities. Whether you have a question or just want to
          say hi, I’ll get back to you as soon as possible!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          Say Hello
        </a>
        <div className="mt-12 flex justify-center space-x-6">
          {links.map(({ Icon, name, url }) => (
            <a
              key={name}
              id={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <span className="sr-only">{name}</span>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
