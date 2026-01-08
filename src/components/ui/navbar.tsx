import { MenuButton } from './buttons/menuButton';
import { ThemeButton } from './theme/themeButton';

export const Navbar = () => {
  const navItems = [
    { name: 'Profile', href: '#profile' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const ItemsList = () => {
    return (
      <>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </>
    );
  };

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
            <MenuButton menuClassName="w-max dark:border-gray-800/80 dark:bg-zinc-950">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full rounded-sm px-8 py-2 text-gray-800 transition-colors hover:bg-gray-100 dark:border-0 dark:text-gray-300 dark:hover:bg-zinc-900"
                >
                  {item.name}
                </a>
              ))}
            </MenuButton>
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header>
  );
};
