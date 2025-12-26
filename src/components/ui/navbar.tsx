import { ThemeButton } from './theme/themeButton';

export const Navbar = () => {
  const navItems = [
    { name: 'Profile', href: '#profile' },
    // { name: 'Projects', href: '#projects' },
    // { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="px-6 py-4 md:px-16">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            FMADRID
          </a>
          <div className="items-center space-x-8 md:flex">
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header>
  );
};
