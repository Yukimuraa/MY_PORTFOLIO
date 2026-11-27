import React from 'react';
import { Github, Code2 } from 'lucide-react';
import { Button } from './ui/Button';

export const GitHubCTA = ({ config, onActionToast }) => {
  const handleClick = () => {
    if (config.GITHUB_URL) {
      window.open(config.GITHUB_URL, '_blank', 'noopener,noreferrer');
    } else {
      onActionToast('GitHub profile link will be configured soon in src/data/portfolio.js');
    }
  };

  return (
    <div className="bg-dark-800/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-8 sm:p-9 shadow-dark-card flex flex-col justify-between transition-colors">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-dark-750 border border-slate-700 text-cyan-400 flex items-center justify-center mb-5">
          <Github className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
          Explore My Code
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          I use GitHub to document and share my development projects, experiments, and learning progress.
        </p>
      </div>

      <div>
        <Button
          variant="primary"
          size="md"
          icon={Github}
          onClick={handleClick}
        >
          Visit My GitHub
        </Button>
      </div>
    </div>
  );
};
