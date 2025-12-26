import { Fredoka, Poppins } from 'next/font/google';

/**
 * @description Font for titles
 */
export const FontTitle = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  fallback: ['sans'],
  variable: '--font-title',
  display: 'swap',
});

/**
 * @description Font for subtitles
 */
export const FontSubtitle = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  fallback: ['sans'],
  variable: '--font-subtitle',
  display: 'swap',
});

/**
 * @description Font for generic text
 */
export const FontText = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  fallback: ['sans'],
  variable: '--font-text',
  display: 'swap',
});
