import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, X } from 'lucide-react';
import { Button } from './ui/Button';

export const ResumeModal = ({ isOpen, onClose, resumeUrl, personalInfo, onDownloadResume }) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[65] flex items-center justify-center bg-black/75 p-3 sm:p-6 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with only Title, Download Resume, and Close */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3.5 sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-elevated text-ink-muted">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 id="resume-modal-title" className="truncate text-sm font-semibold text-ink sm:text-base">
                    {personalInfo?.name || 'Joemarie D. Damasing'} — Resume
                  </h2>
                  <p className="truncate text-xs text-ink-subtle">
                    {personalInfo?.degree || 'BS Information Systems'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  icon={Download}
                  onClick={onDownloadResume}
                  className="hidden sm:inline-flex"
                >
                  Download Resume
                </Button>
                <Button variant="icon" size="sm" onClick={onClose} aria-label="Close resume viewer">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Clean Resume View (browser print/toolbar UI hidden via PDF fragment parameters) */}
            <div className="relative min-h-0 flex-1 bg-elevated">
              {resumeUrl ? (
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                  title={`${personalInfo?.name || 'Resume'} Preview`}
                  className="h-full w-full border-0 bg-white"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-sm text-ink-muted">
                  Resume PDF is not configured yet.
                </div>
              )}
            </div>

            {/* Mobile bottom bar so Download Resume is always one tap away */}
            <div className="border-t border-line bg-surface p-3 sm:hidden">
              <Button
                variant="primary"
                size="md"
                icon={Download}
                onClick={onDownloadResume}
                className="w-full"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
