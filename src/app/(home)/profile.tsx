export const Profile = () => {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-linear-to-r from-blue-500 to-purple-600 p-1">
          <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">FM</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Francisco Madrid
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
          Web Developer & Designer
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
          I build exceptional digital experiences with modern web technologies.
          Currently focused on creating beautiful, responsive, and user-friendly applications.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
