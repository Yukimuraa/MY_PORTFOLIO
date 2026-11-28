import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Github, Maximize2 } from 'lucide-react';
import { Button } from './ui/Button';
import { TechTag } from './ui/TechTag';
import { Lightbox } from './ui/Lightbox';

const Block = ({ title, children }) => (
  <section className="border-t border-line pt-8">
    <h2 className="eyebrow mb-4">{title}</h2>
    {children}
  </section>
);

export const ProjectDetail = ({ project, projects, onBack, onOpenProject }) => {
  const details = project.details || {};
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Use documented screenshots; fall back to the card image only if none exist.
  const screenshots =
    details.screenshots && details.screenshots.length > 0
      ? details.screenshots
      : project.image
      ? [{ src: project.image, title: `${project.name} preview`, alt: project.name }]
      : [];

  useEffect(() => {
    setActiveIndex(0);
    setLightboxIndex(null);
  }, [project.id]);

  const active = screenshots[activeIndex];
  const currentIdx = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIdx + 1) % projects.length];
  const hasLinks = Boolean(details.liveDemoUrl || details.githubUrl);

  const meta = [
    details.myRole && { label: 'Role', value: details.myRole },
    project.category && { label: 'Category', value: project.category },
    project.badge && { label: 'Type', value: project.badge },
  ].filter(Boolean);

  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="pb-24 pt-24 lg:pt-16"
    >
      <div className="container-page">
        {/* Back navigation */}
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="group inline-flex items-center gap-2 text-sm text-ink-subtle transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Back to Projects
        </a>

        {/* Header */}
        <header className="mt-8 max-w-3xl">
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">{project.name}</h1>
          {project.subtitle && <p className="mt-3 text-lg text-ink-muted">{project.subtitle}</p>}

          {hasLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {details.liveDemoUrl && (
                <Button href={details.liveDemoUrl} variant="primary" icon={ExternalLink}>
                  Live Demo
                </Button>
              )}
              {details.githubUrl && (
                <Button href={details.githubUrl} variant="secondary" icon={Github}>
                  Source Code
                </Button>
              )}
            </div>
          )}
        </header>

        {/* Gallery */}
        {active && (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setLightboxIndex(activeIndex)}
              className="group relative block w-full overflow-hidden rounded-xl border border-line bg-elevated"
              aria-label={`Open ${active.title || 'screenshot'} in full screen`}
            >
              <div className="flex aspect-[16/10] w-full items-center justify-center">
                <img
                  src={active.src}
                  alt={active.alt || active.title || project.name}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md border border-line bg-canvas/85 text-ink-muted opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>

            <div className="mt-3 flex items-start justify-between gap-4">
              <p className="text-sm text-ink-muted">{active.title}</p>
              {screenshots.length > 1 && (
                <p className="shrink-0 font-mono text-xs text-ink-subtle">
                  {activeIndex + 1} / {screenshots.length}
                </p>
              )}
            </div>

            {screenshots.length > 1 && (
              <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Screenshots">
                {screenshots.map((shot, idx) => (
                  <button
                    key={shot.src}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIndex}
                    aria-label={shot.title || `Screenshot ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border bg-elevated transition-all sm:w-36 ${
                      idx === activeIndex
                        ? 'border-ink opacity-100'
                        : 'border-line opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={shot.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-10">
            <Block title="Overview">
              <p className="text-base leading-relaxed text-ink-muted">{details.overview || project.shortDescription}</p>
            </Block>

            {(details.problem || details.solution) && (
              <Block title="Problem & Solution">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {details.problem && (
                    <div className="rounded-xl border border-line bg-surface p-5">
                      <h3 className="text-sm font-semibold text-ink">The Problem</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{details.problem}</p>
                    </div>
                  )}
                  {details.solution && (
                    <div className="rounded-xl border border-line bg-surface p-5">
                      <h3 className="text-sm font-semibold text-ink">The Solution</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{details.solution}</p>
                    </div>
                  )}
                </div>
              </Block>
            )}

            {project.features?.length > 0 && (
              <Block title="Key Features">
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {details.challenges && (
              <Block title="Challenges">
                <p className="text-sm leading-relaxed text-ink-muted">{details.challenges}</p>
              </Block>
            )}

            {details.whatILearned && (
              <Block title="What I Learned">
                <p className="text-sm leading-relaxed text-ink-muted">{details.whatILearned}</p>
              </Block>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-surface">
              {meta.map((item) => (
                <div key={item.label} className="border-b border-line p-5">
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-2 text-sm text-ink">{item.value}</p>
                </div>
              ))}
              <div className="p-5">
                <p className="eyebrow">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechTag key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </div>
            {!hasLinks && (
              <p className="mt-4 text-xs leading-relaxed text-ink-subtle">
                Source code and live demo are not publicly available for this project.
              </p>
            )}
          </aside>
        </div>

        {/* Footer navigation */}
        <nav className="mt-20 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between" aria-label="Project navigation">
          <Button variant="secondary" icon={ArrowLeft} onClick={onBack}>
            All Projects
          </Button>
          {nextProject && nextProject.id !== project.id && (
            <a
              href={`#/projects/${nextProject.id}`}
              onClick={(e) => {
                e.preventDefault();
                onOpenProject(nextProject.id);
              }}
              className="group text-left sm:text-right"
            >
              <span className="eyebrow">Next Project</span>
              <span className="mt-1 flex items-center gap-2 text-base font-medium text-ink sm:justify-end">
                {nextProject.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          )}
        </nav>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={screenshots}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={(idx) => {
            setLightboxIndex(idx);
            setActiveIndex(idx);
          }}
        />
      )}
    </motion.article>
  );
};
