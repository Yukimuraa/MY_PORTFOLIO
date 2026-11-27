import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/Button';

export const ProjectModal = ({ project, onClose, onActionToast }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const details = project.details || {};

  const handleAction = (type) => {
    if (type === 'github') {
      if (details.githubUrl) {
        window.open(details.githubUrl, '_blank', 'noopener,noreferrer');
      } else {
        onActionToast(`GitHub link for "${project.name}" will be updated soon.`);
      }
    } else if (type === 'demo') {
      if (details.liveDemoUrl) {
        window.open(details.liveDemoUrl, '_blank', 'noopener,noreferrer');
      } else {
        onActionToast(`Live demo for "${project.name}" is currently unavailable.`);
      }
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/85 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-dark-900 border border-slate-700/80 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        >
          {/* Modal Header */}
          <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 bg-dark-900/95 backdrop-blur-sm z-10">
            <div>
              <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-white">
                {project.name}
              </h2>
              {project.subtitle && (
                <p className="text-xs sm:text-sm text-cyan-400 mt-1 font-medium">
                  {project.subtitle}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-dark-800 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Overview
              </h3>
              <p>{details.overview || project.shortDescription}</p>
            </div>

            {/* Problem & Solution */}
            {(details.problem || details.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.problem && (
                  <div className="bg-dark-850 border border-slate-800 p-4 rounded-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                      The Problem
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {details.problem}
                    </p>
                  </div>
                )}
                {details.solution && (
                  <div className="bg-dark-850 border border-slate-800 p-4 rounded-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {details.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-dark-800 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role, Challenges & What I Learned */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  My Role
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {details.myRole || 'More details coming soon.'}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Challenges
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {details.challenges || 'More details coming soon.'}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  What I Learned
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {details.whatILearned || 'More details coming soon.'}
                </p>
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Screenshots
              </h3>
              {details.screenshots && details.screenshots.length > 0 ? (
                <div className="space-y-4">
                  {details.screenshots.map((screen, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden border border-slate-800 bg-dark-950 flex flex-col"
                    >
                      <div className="w-full flex items-center justify-center p-2 sm:p-3 bg-dark-950/90">
                        <img
                          src={screen.src}
                          alt={screen.alt || project.name}
                          className="max-w-full max-h-[30rem] w-auto h-auto object-contain object-center rounded"
                        />
                      </div>
                      {screen.title && (
                        <div className="p-3 text-xs text-slate-400 border-t border-slate-800 bg-dark-900/60">
                          {screen.title}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : project.image ? (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-dark-950 flex flex-col">
                  <div className="w-full flex items-center justify-center p-2 sm:p-3 bg-dark-950/90">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="max-w-full max-h-[30rem] w-auto h-auto object-contain object-center rounded"
                    />
                  </div>
                  <div className="p-3 text-xs text-slate-400 border-t border-slate-800 bg-dark-900/60">
                    System interface preview for {project.name}
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-dark-850 border border-dashed border-slate-800 text-center text-xs sm:text-sm text-slate-400 flex flex-col items-center gap-2">
                  <ImageIcon className="w-8 h-8 text-slate-500" />
                  <span>Screenshots available upon request or coming soon.</span>
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-slate-800 bg-dark-850 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                icon={Github}
                onClick={() => handleAction('github')}
              >
                {details.githubUrl ? 'View GitHub' : 'GitHub (Unavailable)'}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={ExternalLink}
                onClick={() => handleAction('demo')}
              >
                {details.liveDemoUrl ? 'Live Demo' : 'Live Demo (Unavailable)'}
              </Button>
            </div>
            <Button variant="primary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
