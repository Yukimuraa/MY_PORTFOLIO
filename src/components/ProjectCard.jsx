import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { TechTag } from './ui/TechTag';
import { useSound } from '../context/SoundContext.jsx';

const MAX_TAGS = 4;

export const ProjectCard = ({ project, onOpen, index = 0 }) => {
  const [imageError, setImageError] = useState(false);
  const { playSound } = useSound();
  const imgSrc = imageError ? project.uploadedFallback : project.image;
  const screenshotCount = project.details?.screenshots?.length || 0;
  const extraTags = project.technologies.length - MAX_TAGS;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: (index % 2) * 0.05, ease: 'easeOut' }}
      className="group h-full"
    >
      <a
        href={`#/projects/${project.id}`}
        onMouseEnter={() => playSound()}
        onClick={(e) => {
          e.preventDefault();
          playSound();
          onOpen(project.id);
        }}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
        aria-label={`View details for ${project.name}`}
      >
        {/* Preview */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-elevated">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={`${project.name} preview`}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-ink-subtle">
              <Layers className="h-8 w-8" aria-hidden="true" />
            </div>
          )}
          {screenshotCount > 1 && (
            <span className="absolute bottom-3 right-3 rounded-md border border-line bg-canvas/85 px-2 py-0.5 font-mono text-[11px] text-ink-muted backdrop-blur-sm">
              {screenshotCount} screens
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2.5">
            <div className="min-w-0">
              <p className="eyebrow mb-1">{project.category}</p>
              <h3 className="line-clamp-1 text-sm font-semibold tracking-tight text-ink sm:text-base">{project.name}</h3>
            </div>
            <ArrowUpRight
              className="mt-4 h-4 w-4 shrink-0 text-ink-subtle transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              aria-hidden="true"
            />
          </div>

          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-muted">{project.shortDescription}</p>

          <div className="mt-auto flex flex-wrap gap-1 pt-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
            {project.technologies.length > 3 && <span className="tag">+{project.technologies.length - 3}</span>}
          </div>
        </div>
      </a>
    </motion.article>
  );
};
