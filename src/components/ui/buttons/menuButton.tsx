'use client';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface MenuButtonProps {
  children: ReactNode;
  className?: string;
  menuClassName?: string;
}

export const MenuButton = ({ children, className, menuClassName }: MenuButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={twMerge(
          'hover:bg-primary/60 cursor-pointer rounded-sm bg-transparent p-1 text-gray-500 transition-all duration-200 hover:text-white',
          isOpen && 'bg-primary/60 text-white hover:text-white',
          className,
        )}
        aria-label="Menu"
      >
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

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={twMerge(
            'bg-background absolute -right-9/12 z-50 mx-2 origin-top-left overflow-hidden rounded-lg border border-gray-200 px-2 shadow-xl',
            'transition-all duration-200 ease-out',
            'animate-slideDown',
            menuClassName,
          )}
        >
          <div className="flex flex-col py-1" onClick={() => setIsOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
