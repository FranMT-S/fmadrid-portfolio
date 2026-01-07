'use client';

import { Github, Play, ArrowRight } from 'lucide-react';
import { MouseEvent, useState } from 'react';
import { Project } from '@/interfaces/project';
import { Gallery } from './gallery';
import PrimaryButton from './buttons/mainButton';
import { VideoModal } from './videoplayer';

interface ProjectCardProps {
  project: Project;
  idx: number;
  activeCard: number | null;
  mousePos: { x: number; y: number };
  onMouseMove: (e: MouseEvent, idx: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  cssStyle?: React.CSSProperties;
  className?: string;
}

// Mini-component for the spotlight effect
const SpotlightEffect = ({ mousePos }: { mousePos: { x: number; y: number } }) => (
  <div
    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style={{
      background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(10, 18, 124, 0.1), transparent 40%)`,
    }}
  />
);

// Mini-component for the media section
const MediaSection = ({ project }: { project: Project }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative mb-6 h-48 overflow-hidden rounded-2xl">
      <Gallery
        thumbnail={project.thumbnail}
        images={project.images}
        title={project.title}
        className="h-full w-full"
      />
      <section className="absolute top-4 right-4 flex gap-2">
        {project.video && (
          <>
            <div className="z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/80 transition-transform duration-300 group-hover:scale-110 hover:bg-black/90">
              <Play
                size={16}
                onClick={() => setIsVideoOpen(true)}
                className="text-4xl text-white drop-shadow-md"
              />
            </div>

            <VideoModal
              isOpen={isVideoOpen}
              videoSrc={project.video}
              title={project.title}
              onClose={() => setIsVideoOpen(false)}
              autoPlay={true}
              controls={true}
            />
          </>
        )}
      </section>
    </section>
  );
};

// Mini-component for the header section
const HeaderSection = ({ project }: { project: Project }) => (
  <main className="flex-1">
    <h3 className="text-primary font-subtitle mb-2 text-2xl font-bold md:text-3xl">
      {project.title}
    </h3>
    <p className="font-text mb-6 flex-1 leading-relaxed whitespace-pre-line dark:text-gray-300">
      {project.description}
    </p>
  </main>
);

// Mini-component for the action buttons
const ButtonsSection = ({ project }: { project: Project }) => (
  <footer className="flex gap-3">
    {project.link && <PrimaryButton text="Explore" href={project.link} />}
    {project.repository && (
      <PrimaryButton
        className="flex items-center border-gray-500! bg-transparent/80 text-black! hover:border-white/20! hover:bg-black! hover:text-white! dark:text-white!"
        endIcon={<Github size={16} />}
        text="Code"
        href={project.repository}
      />
    )}
  </footer>
);

export const ProjectCard = ({
  project,
  idx,
  activeCard,
  mousePos,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  cssStyle,
  className,
}: ProjectCardProps) => {
  return (
    <div
      key={idx}
      className={`group relative overflow-hidden rounded-3xl text-black shadow-lg transition-all duration-500 hover:border-green-500/40 dark:border dark:border-green-200/10 ${className || ''}`}
      style={cssStyle}
      onMouseMove={(e) => onMouseMove(e, idx)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {activeCard === idx && <SpotlightEffect mousePos={mousePos} />}

      <article className="relative flex h-full flex-col p-8">
        <MediaSection project={project} />
        <div className="flex flex-1 flex-col">
          <HeaderSection project={project} />
          <ButtonsSection project={project} />
        </div>
      </article>
    </div>
  );
};
