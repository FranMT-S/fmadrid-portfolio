export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} FMADRID. All rights reserved.</p>
      </div>
    </footer>
  )
}