'use client';
import { GitHubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import PrimaryButton from '@/components/ui/buttons/mainButton';
import { Check, Copy, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { contactInfo } from '../../shared/contactInfo';

export const Contact = () => {
  const MinimalCenteredStyle = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const copyEmail = () => {
      navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="w-full max-w-2xl text-center">
          <h2 className="font-title text-primary pb-4 text-[2rem] font-bold md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-subtitle mx-auto mb-12 max-w-xl text-xl">
            Available for freelance projects and full-time opportunities
          </p>

          <div className="mb-12 rounded-2xl border border-gray-200 p-4 shadow-sm">
            <section className="flex items-center justify-center gap-3">
              <i className="fab fa-envelope tablet:block hidden">
                <Mail />
              </i>
              <div className="flex flex-col items-start gap-1">
                <p className="text-subtitle text-sm font-semibold">Primary Contact</p>
                <p className="break-all first-letter:uppercase">{contactInfo.email}</p>
              </div>
            </section>
            <section className="mx-auto flex flex-wrap items-center justify-center gap-3 rounded-2xl p-2">
              <PrimaryButton
                startIcon={<Send />}
                href={`mailto:${contactInfo.email}`}
                text="Send Mail"
              />
              <PrimaryButton
                onClick={copyEmail}
                startIcon={
                  copiedEmail ? (
                    <Check className="text-emerald-600" size={20} />
                  ) : (
                    <Copy className="text-gray-600 dark:text-gray-300" size={20} />
                  )
                }
                text="Copy Email"
                className="hover:bg-gray-00 cursor-pointer border-0 bg-gray-100 text-gray-600 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800/90 dark:hover:text-white"
              />
            </section>
            <p className={`${copiedEmail ? '' : 'invisible'} text-sm font-medium text-emerald-600`}>
              Email copied to clipboard!
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <PrimaryButton
              className="flex items-center border-gray-500 bg-transparent/80 text-gray-600 hover:border-white/20! hover:bg-blue-600 hover:text-white dark:text-white"
              startIcon={<LinkedInIcon className="h-6 w-6 transition-colors" />}
              text="LinkedIn"
              href={contactInfo.linkedin}
            />

            <PrimaryButton
              className="flex items-center border-gray-500! bg-transparent/80 text-black hover:border-white/20 hover:bg-black hover:text-white dark:text-white"
              startIcon={<GitHubIcon className="h-6 w-6" />}
              text="GitHub"
              href={contactInfo.github}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="py-20">
      <MinimalCenteredStyle />
    </section>
  );
};
