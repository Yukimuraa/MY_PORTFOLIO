import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const ResumeCTA = ({ onDownloadResume }) => {
  return (
    <div className="bg-dark-800/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-8 sm:p-9 shadow-dark-card flex flex-col justify-between transition-colors">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-dark-750 border border-slate-700 text-cyan-400 flex items-center justify-center mb-5">
          <FileText className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
          Interested in my background?
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Download my resume to learn more about my education, experience, technical skills, and projects.
        </p>
      </div>

      <div>
        <Button
          variant="primary"
          size="md"
          icon={Download}
          onClick={onDownloadResume}
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
};
