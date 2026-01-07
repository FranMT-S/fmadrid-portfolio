import { Project } from '@/interfaces/project';

export const featuredProjects: Project[] = [
  {
    title: 'StockApp',
    description: 'Stock market analysis app',
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
    description: 'Job search app',
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
