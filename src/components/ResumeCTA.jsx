import React from 'react';
import { Eye, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const ResumeCTA = ({ onViewResume }) => (
  <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 sm:p-8">
    <div>
      <FileText className="h-5 w-5 text-ink-subtle" aria-hidden="true" />
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">Interested in my background?</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        View my resume to learn more about my education, experience, technical skills, and projects, or download a PDF copy.
      </p>
    </div>
    <div className="mt-6">
      <Button variant="primary" icon={Eye} onClick={onViewResume}>
        View Resume
      </Button>
    </div>
  </div>
);
