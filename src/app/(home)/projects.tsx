'use client';

import { Project } from '@/interfaces/project';
import { ProjectCard } from '@/components/ui/projectsCard';
import { MouseEvent, useState } from 'react';
import { featuredProjects } from './shared/projectData';

export const Projects = () => {
  // Section: Bento Style to display projects in a grid layout
  const BentoStyle = ({ projects }: { projects: Project[] }) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div className="border-t-2 border-zinc-200 p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-primary font-title mb-4 text-7xl font-black">My Projects</h2>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-12 gap-3">
            {projects.map((project, index) => (
              <ProjectCard
                className={`col-span-12 row-span-2 lg:col-span-6`}
                key={index}
                project={project}
                idx={index}
                activeCard={activeCard}
                mousePos={mousePos}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="">
      <BentoStyle projects={featuredProjects} />
    </section>
  );
};
