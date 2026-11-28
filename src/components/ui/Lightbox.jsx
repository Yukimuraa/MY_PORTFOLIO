import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

/**
 * Full-screen image viewer with keyboard navigation (←/→/Esc) and zoom.
 */
export const Lightbox = ({ images, index, onClose, onChange }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const total = images.length;
  const current = images[index];

  useEffect(() => setIsZoomed(false), [index]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (total > 1 && e.key === 'ArrowRight') onChange((index + 1) % total);
      if (total > 1 && e.key === 'ArrowLeft') onChange((index - 1 + total) % total);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [index, total, onClose, onChange]);

  if (!current) return null;

  const controlClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 transition-colors hover:bg-black/70 hover:text-white';

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 p-4" onClick={(e) => e.stopPropagation()}>
        <p className="min-w-0 truncate text-sm text-white/80">
          {total > 1 && <span className="mr-3 font-mono text-white/50">{index + 1} / {total}</span>}
          {current.title}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className={controlClass}
            onClick={() => setIsZoomed((z) => !z)}
            aria-label={isZoomed ? 'Fit to screen' : 'Zoom in'}
            title={isZoomed ? 'Fit to screen' : 'Zoom in'}
          >
            {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
          </button>
          <button type="button" className={controlClass} onClick={onClose} aria-label="Close viewer">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Image stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        {total > 1 && (
          <button
            type="button"
            className={`${controlClass} absolute left-3 top-1/2 z-10 -translate-y-1/2 sm:left-5`}
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + total) % total);
            }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          className={isZoomed ? 'h-full w-full overflow-auto' : 'flex h-full w-full items-center justify-center'}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt || current.title || ''}
            onClick={() => setIsZoomed((z) => !z)}
            className={
              isZoomed
                ? 'mx-auto w-[160vw] max-w-none cursor-zoom-out sm:w-[130vw]'
                : 'max-h-full max-w-full cursor-zoom-in rounded-lg object-contain shadow-2xl'
            }
          />
        </div>

        {total > 1 && (
          <button
            type="button"
            className={`${controlClass} absolute right-3 top-1/2 z-10 -translate-y-1/2 sm:right-5`}
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % total);
            }}
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};
