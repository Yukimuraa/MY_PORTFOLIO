import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ProjectCard } from './ProjectCard';

export const Projects = ({ projects, onSelectProject, onActionToast }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Systems', 'POS & Operations', 'Mobile'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      tag="Portfolio Work"
      title="Featured Projects"
      subtitle="A selection of academic, personal, and practical information systems projects."
    >
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === cat
                ? 'bg-cyan-500 text-dark-950 shadow-sm'
                : 'bg-dark-800 text-slate-300 hover:text-white hover:bg-dark-750 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
            onActionToast={onActionToast}
          />
        ))}
      </div>
    </Section>
  );
};
