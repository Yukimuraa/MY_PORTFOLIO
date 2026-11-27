import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Layers, Smartphone } from 'lucide-react';
import { Button } from './ui/Button';

export const ProjectCard = ({ project, onSelectProject, onActionToast }) => {
  const [imageError, setImageError] = useState(false);

  // Prioritize web-accessible static assets served by Vite/Vercel
  const imgSrc = imageError 
    ? (project.uploadedFallback || null) 
    : (project.image || project.uploadedFallback);

  const handleAction = (e, type) => {
    e.stopPropagation();
    if (type === 'github') {
      if (project.details?.githubUrl) {
        window.open(project.details.githubUrl, '_blank', 'noopener,noreferrer');
      } else {
        onActionToast(`GitHub link for "${project.name}" will be updated soon.`);
      }
    } else if (type === 'demo') {
      if (project.details?.liveDemoUrl) {
        window.open(project.details.liveDemoUrl, '_blank', 'noopener,noreferrer');
      } else {
        onActionToast(`Live demo for "${project.name}" is currently unavailable.`);
      }
    }
  };

  const shortDesc = project.subtitle || project.shortDescription;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -3 }}
      className="bg-dark-800/95 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl overflow-hidden shadow-dark-card flex flex-col transition-all duration-200 group h-full"
    >
      {/* Compact thumbnail container: full screenshot visibility with object-contain */}
      <div className="w-full h-44 sm:h-48 md:h-52 bg-dark-950/95 relative flex items-center justify-center p-2.5 border-b border-slate-800/80 overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${project.name} preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="max-w-full max-h-full w-auto h-auto object-contain object-center transition-transform duration-300 group-hover:scale-[1.02] rounded shadow-sm"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-4 text-slate-500 bg-gradient-to-br from-dark-900 to-dark-850">
            {project.category === 'Mobile' ? (
              <Smartphone className="w-8 h-8 text-cyan-400/80" />
            ) : (
              <Layers className="w-8 h-8 text-cyan-400/80" />
            )}
            <span className="text-xs font-semibold text-slate-300">{project.name}</span>
          </div>
        )}
      </div>

      {/* Compact Card Content: ONLY title, short description, and compact buttons */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
            {project.name}
          </h3>
          {shortDesc && (
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
              {shortDesc}
            </p>
          )}
        </div>

        {/* Compact Card Footer Actions */}
        <div className="pt-3.5 mt-4 border-t border-slate-800/80 flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            icon={Eye}
            onClick={() => onSelectProject(project)}
            className="flex-grow justify-center py-1.5 text-xs font-semibold"
          >
            View Details
          </Button>

          <Button
            variant="icon"
            onClick={(e) => handleAction(e, 'github')}
            title={project.details?.githubUrl ? 'View GitHub' : 'GitHub (Unavailable)'}
            aria-label={`GitHub for ${project.name}`}
            className="p-1.5"
          >
            <Github className="w-4 h-4" />
          </Button>

          <Button
            variant="icon"
            onClick={(e) => handleAction(e, 'demo')}
            title={project.details?.liveDemoUrl ? 'Live Demo' : 'Live Demo (Unavailable)'}
            aria-label={`Live Demo for ${project.name}`}
            className="p-1.5"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
};
