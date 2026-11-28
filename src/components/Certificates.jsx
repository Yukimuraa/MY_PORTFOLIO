import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { FannedCarousel } from './ui/FannedCarousel';

const CompactCertificateSlide = ({ cert, isCenter, isVisible, onActivate }) => {
  const handleImageError = (e) => {
    if (cert.fallback && e.currentTarget.src !== cert.fallback) {
      e.currentTarget.src = cert.fallback;
    }
  };

  return (
    <button
      type="button"
      draggable={false}
      onClick={onActivate}
      tabIndex={isVisible ? 0 : -1}
      aria-label={isCenter ? `Inspect certificate: ${cert.title}` : `Bring ${cert.title} to center`}
      className={`group block w-full rounded-2xl border bg-surface p-4 text-left transition-colors duration-200 ${
        isCenter
          ? 'border-line-strong shadow-lift hover:border-ink/40'
          : 'border-line shadow-card hover:opacity-85'
      }`}
    >
      {/* Top Pill Badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.11em] text-canvas">
          <span aria-hidden="true">‹</span>
          <span className="max-w-[180px] truncate sm:max-w-[205px]">
            {cert.badge || cert.status || 'Verified Credential'}
          </span>
          <span aria-hidden="true">›</span>
        </span>
        {cert.courseCode && (
          <span className="rounded-full border border-line bg-elevated px-2 py-0.5 font-mono text-[10px] text-ink-subtle">
            {cert.courseCode}
          </span>
        )}
      </div>

      {/* Certificate Preview Frame */}
      <div className="relative mt-3 flex h-36 sm:h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-elevated p-2">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            draggable={false}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            className="max-h-full max-w-full rounded object-contain shadow-card transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <Award className="h-7 w-7 text-ink-subtle" aria-hidden="true" />
        )}
      </div>

      {/* Title & Issuer */}
      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm sm:text-base font-semibold tracking-tight text-ink">
            {cert.title}
          </h3>
          <ArrowUpRight
            className={`mt-0.5 h-4 w-4 shrink-0 transition-transform duration-200 ${
              isCenter
                ? 'text-ink-muted group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink'
                : 'text-ink-subtle'
            }`}
            aria-hidden="true"
          />
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-muted">
          {cert.description || cert.issuer}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-line/80 pt-3">
        <span className="truncate text-xs text-ink-subtle">{cert.issuer}</span>
        {cert.date && (
          <span className="shrink-0 font-mono text-[10px] text-ink-subtle">{cert.date}</span>
        )}
      </div>
    </button>
  );
};

export const Certificates = ({ certificates, onActionToast }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (!selectedCert) return undefined;
    const onKey = (e) => e.key === 'Escape' && setSelectedCert(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedCert]);

  const handleImageError = (cert) => (e) => {
    if (cert.fallback && e.currentTarget.src !== cert.fallback) {
      e.currentTarget.src = cert.fallback;
    }
  };

  return (
    <Section
      id="certificates"
      index="08"
      tag="certificates"
      title="Certificates & Training"
      subtitle="Coursework in data analysis, relational databases, web development, and analytics."
      centerHeader
    >
      <FannedCarousel
        items={certificates}
        getKey={(c) => c.id}
        getLabel={(c) => c.title}
        onSelectItem={(c) => setSelectedCert(c)}
        stageHeightClass="h-[340px] sm:h-[360px]"
        cardWidthClass="w-[76vw] max-w-[300px] sm:max-w-[340px]"
        ariaLabel="Certificates and training carousel"
        renderCard={({ item, isCenter, isVisible, onActivate }) => (
          <CompactCertificateSlide
            cert={item}
            isCenter={isCenter}
            isVisible={isVisible}
            onActivate={onActivate}
          />
        )}
      />

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-lift"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-line p-5">
                <div>
                  <h3 id="cert-modal-title" className="text-base font-semibold text-ink">
                    {selectedCert.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-subtle">
                    {selectedCert.issuer || 'Official Certification'}
                    {selectedCert.date && ` · ${selectedCert.date}`}
                  </p>
                </div>
                <Button
                  variant="icon"
                  size="sm"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-elevated p-4 sm:p-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  onError={handleImageError(selectedCert)}
                  className="max-h-[62vh] max-w-full rounded object-contain shadow-card"
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-line p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-muted">{selectedCert.description}</p>
                {selectedCert.verificationUrl ? (
                  <Button
                    href={selectedCert.verificationUrl}
                    variant="primary"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    className="shrink-0"
                  >
                    Verify Credential
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="shrink-0"
                    onClick={() => {
                      setSelectedCert(null);
                      onActionToast(
                        `Verification documentation for "${selectedCert.title}" available on request.`
                      );
                    }}
                  >
                    Available on Request
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
