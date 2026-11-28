import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { Section } from './ui/Section';
import { TechTag } from './ui/TechTag';
import { FannedCarousel } from './ui/FannedCarousel';
import { useSound } from '../context/SoundContext.jsx';

const CompactProjectSlide = ({ project, isCenter, isVisible, onActivate }) => {
  const [imgErr, setImgErr] = useState(false);
  const { playSound } = useSound();
  const imgSrc = imgErr ? project.uploadedFallback : project.image;
  const screenshotCount = project.details?.screenshots?.length || 0;

  return (
    <a
      href={`#/projects/${project.id}`}
      draggable={false}
      onMouseEnter={() => {
        if (isVisible) playSound();
      }}
      onClick={(e) => {
        e.preventDefault();
        playSound();
        onActivate(e);
      }}
      tabIndex={isVisible ? 0 : -1}
      aria-label={isCenter ? `Open details for ${project.name}` : `Bring ${project.name} to center`}
      className={`group block rounded-2xl border bg-surface p-4 transition-colors duration-200 ${
        isCenter
          ? 'border-line-strong shadow-lift hover:border-ink/40'
          : 'border-line shadow-card hover:opacity-85'
      }`}
    >
      {/* Top Pill Badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.11em] text-canvas">
          <span aria-hidden="true">‹</span>
          <span className="max-w-[180px] truncate sm:max-w-[205px]">
            {project.badge || project.category}
          </span>
          <span aria-hidden="true">›</span>
        </span>

        {screenshotCount > 1 && (
          <span className="rounded-full border border-line bg-elevated px-2 py-0.5 font-mono text-[10px] text-ink-subtle">
            {screenshotCount} screens
          </span>
        )}
      </div>

      {/* Compact Screenshot Frame */}
      <div className="relative mt-3 h-36 sm:h-40 w-full overflow-hidden rounded-xl border border-line bg-elevated">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${project.name} preview`}
            draggable={false}
            loading="lazy"
            decoding="async"
            onError={() => setImgErr(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ink-subtle">
            <Layers className="h-7 w-7" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Title & Short Description */}
      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm sm:text-base font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          <ArrowUpRight
            className={`mt-0.5 h-4 w-4 shrink-0 transition-transform duration-200 ${
              isCenter
                ? 'text-ink-muted group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink'
                : 'text-ink-subtle'
            }`}
            aria-hidden="true"
          />
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-muted">
          {project.shortDescription}
        </p>
      </div>

      {/* Compact Tech Stack Row */}
      <div className="mt-3 flex flex-wrap items-center gap-1 border-t border-line/80 pt-3">
        {project.technologies.slice(0, 3).map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
        {project.technologies.length > 3 && (
          <span className="tag">+{project.technologies.length - 3}</span>
        )}
      </div>
    </a>
  );
};

export const Projects = ({ projects, onOpenProject, onOpenAllProjects }) => {
  const { playSound } = useSound();
  return (
  <Section
    id="projects"
    index="02"
    tag="projects"
    centerHeader
    action={
      <a
        href="#/projects"
        onMouseEnter={() => playSound()}
        onClick={(e) => {
          e.preventDefault();
          playSound();
          onOpenAllProjects();
        }}
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle transition-colors hover:text-ink"
      >
        <span>ALL PROJECTS</span>
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    }
  >
    <FannedCarousel
      items={projects}
      getKey={(p) => p.id}
      getLabel={(p) => p.name}
      onSelectItem={(p) => onOpenProject(p.id)}
      stageHeightClass="h-[340px] sm:h-[360px]"
      cardWidthClass="w-[76vw] max-w-[300px] sm:max-w-[340px]"
      ariaLabel="Featured projects carousel"
      renderCard={({ item, isCenter, isVisible, onActivate }) => (
        <CompactProjectSlide
          project={item}
          isCenter={isCenter}
          isVisible={isVisible}
          onActivate={onActivate}
        />
      )}
    />
  </Section>
  );
};
