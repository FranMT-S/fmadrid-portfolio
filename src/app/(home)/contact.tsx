import  { GitHubIcon } from "@/components/icons/github"
import { LinkedInIcon } from "@/components/icons/linkedin"
import Link from "next/link"
import type { ComponentType } from "react"

interface Link{
  name:string,
  url:string,
  Icon:ComponentType<{ className?: string }>
}

export const Contact = () => {
  const links:Link[] = [
  {
    name:"GitHub",
    url:"https://github.com/FranMT-S",
    Icon: GitHubIcon,
  },
  {
    name:"LinkedIn",
    url:"https://www.linkedin.com/in/fmadridt/",
    Icon: LinkedInIcon,
  }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll get back to you as soon as possible!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Say Hello
        </a>
         <div className="mt-12 flex justify-center space-x-6">
          { 
            links.map(({Icon,name,url}) =>(
            <a
              id={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <span className="sr-only">{name}</span>
              <Icon/>
            </a>
            ))
          }
         </div>
      </div>
    </section>
  )
}
