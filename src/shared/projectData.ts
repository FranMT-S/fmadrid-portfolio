import { Project } from '@/interfaces/project';

export const featuredProjects: Project[] = [
  {
    title: 'StockApp',
    description:
      'StockApp lets users explore stock market data and perform technical analysis. It integrates the Gemini API to deliver personalized investment insights and short-term stock price predictions up to one week ahead.',
    link: '',
    images: [
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668302/portfolio/StockApp_01_vkfrnh.png',
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668302/portfolio/StockApp_03_e4bjps.png',
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668302/portfolio/StockApp_02_qlqmcz.png',
    ],
    thumbnail:
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767713213/portfolio/StockApp_-_thumbnail_pyiyzd.png',
    video:
      'https://res.cloudinary.com/duwlysed4/video/upload/v1767676178/portfolio/StockApp_Vi_01.1_pxwtrl.mp4',
    repository: 'https://github.com/FranMT-S/StockVision',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Terraform', 'Docker'],
  },
  {
    title: 'Job Finder',
    description:
      'Job Finder helps users discover job opportunities that match their skills and experience by using web scraping techniques to gather listings from multiple sources.',
    link: '',
    images: [
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668301/portfolio/JobFinder_01.0_qhzerm.png',
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668302/portfolio/JobFinder_02_fqd2v5.png',
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668302/portfolio/JobFinder_01.1_vrpmlo.png',
    ],
    thumbnail:
      'https://res.cloudinary.com/duwlysed4/image/upload/v1767668302/portfolio/JobFinder_02_fqd2v5.png',
    video:
      'https://res.cloudinary.com/duwlysed4/video/upload/v1767676889/portfolio/JobFinder_Vi_01.1_v9p5ch.mp4',
    repository: 'https://github.com/FranMT-S/JobFinder',
    technologies: ['Vue.js', 'Node.js'],
  },
];
