import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export const Certificates = ({ certificates, onActionToast }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <Section
      id="certificates"
      tag="Credentials"
      title="Certificates & Training"
      subtitle="Industry and specialized coursework in data analysis, relational databases, web development, and analytics."
      alt
    >
      {/* Responsive Grid for 5 Certificates: 3 cols on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
          >
            <Card
              className="h-full flex flex-col justify-between p-0 overflow-hidden cursor-pointer group hover:border-cyan-500/50 transition-all duration-200"
              onClick={() => setSelectedCert(cert)}
              title="Click to view full certificate and verification"
            >
              {/* Certificate Image Preview: Full screenshot visible with object-contain */}
              <div className="w-full h-48 sm:h-56 bg-dark-950/95 relative flex items-center justify-center p-3 border-b border-slate-800/80 overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                    onError={(e) => {
                      if (cert.fallback && e.target.src !== cert.fallback) {
                        e.target.src = cert.fallback;
                      }
                    }}
                    className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500">
                    <Award className="w-10 h-10 text-cyan-400" />
                  </div>
                )}
              </div>

              {/* Card Body: ONLY the title of the certificate is visible */}
              <div className="p-4 sm:p-5 flex items-center justify-center text-center flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-dark-900 border border-slate-700 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-400">{selectedCert.issuer || 'Official Certification'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image Display */}
              <div className="p-4 sm:p-6 bg-dark-950 flex items-center justify-center max-h-[72vh] overflow-auto">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  onError={(e) => {
                    if (selectedCert.fallback && e.target.src !== selectedCert.fallback) {
                      e.target.src = selectedCert.fallback;
                    }
                  }}
                  className="max-w-full max-h-[62vh] w-auto h-auto object-contain rounded shadow-md"
                />
              </div>

              {/* Modal Footer with Verification Link */}
              <div className="p-4 border-t border-slate-800 bg-dark-850 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Click to inspect credential authenticity</span>
                {selectedCert.verificationUrl ? (
                  <button
                    type="button"
                    onClick={() => window.open(selectedCert.verificationUrl, '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs shadow-sm transition-colors"
                  >
                    <span>Verify Credential Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCert(null);
                      onActionToast(`Verification documentation for "${selectedCert.title}" available on request.`);
                    }}
                    className="text-xs text-cyan-400 hover:underline"
                  >
                    Documentation Available On Request
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};
