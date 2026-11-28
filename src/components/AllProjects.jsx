import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

/**
 * Full projects directory page ("#/projects"), reachable from "ALL PROJECTS ->"
 * and from the left sidebar.
 */
export const AllProjects = ({ projects, onOpenProject, onBack }) => {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => {
    const counts = projects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { name: 'All', count: projects.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count })),
    ];
  }, [projects]);

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="pb-24 pt-24 lg:pt-16"
    >
      <div className="container-page">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="group inline-flex items-center gap-2 font-mono text-xs text-ink-subtle transition-colors hover:text-ink"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          <span>Back to Overview</span>
        </a>

        <header className="mt-8 max-w-2xl">
          <p className="font-mono text-xs tracking-wide text-ink-subtle">archive — projects</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            All Projects
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Complete directory of academic, personal, and operational information systems I have designed and built.
          </p>
        </header>

        {categories.length > 2 && (
          <div
            className="no-scrollbar -mx-5 mt-8 mb-8 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map(({ name, count }) => {
              const active = filter === name;
              return (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(name)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                    active
                      ? 'bg-elevated text-ink font-medium'
                      : 'text-ink-subtle hover:text-ink'
                  }`}
                >
                  <span>{name}</span>
                  <span className="text-ink-subtle">{count}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
