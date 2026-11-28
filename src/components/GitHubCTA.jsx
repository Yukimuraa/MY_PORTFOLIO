import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

export const GitHubCTA = ({ config, onActionToast }) => (
  <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 sm:p-8">
    <div>
      <Github className="h-5 w-5 text-ink-subtle" aria-hidden="true" />
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">Explore My Code</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        I use GitHub to document and share my development projects, experiments, and learning progress.
      </p>
    </div>
    <div className="mt-6">
      {config.GITHUB_URL ? (
        <Button href={config.GITHUB_URL} variant="secondary" icon={ArrowUpRight} iconPosition="right">
          Visit My GitHub
        </Button>
      ) : (
        <Button
          variant="secondary"
          icon={ArrowUpRight}
          iconPosition="right"
          onClick={() => onActionToast('GitHub profile link will be configured soon in src/data/portfolio.js')}
        >
          Visit My GitHub
        </Button>
      )}
    </div>
  </div>
);
