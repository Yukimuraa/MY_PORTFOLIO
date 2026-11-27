import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';

export const Experience = ({ experience }) => {
  return (
    <Section
      id="experience"
      tag="Career History"
      title="Experience"
      subtitle="Practical technical support, workstation staging, and institutional operations experience."
      alt
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline connecting line */}
        <div className="absolute top-4 bottom-4 left-4 md:left-6 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-500/40 to-slate-800 -z-0" />

        <div className="space-y-10 sm:space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline marker icon */}
              <div className="absolute left-1.5 md:left-3.5 top-1.5 w-6 h-6 rounded-full bg-dark-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(14,165,233,0.4)] z-10">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="bg-dark-800/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 shadow-dark-card transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.position}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {item.company}
                      {item.department && ` — ${item.department}`}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.highlight && (
                      <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400 bg-dark-850 px-3 py-1 rounded-full border border-slate-800">
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 mb-5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Real system preview if present (e.g. COMELEC QMS) */}
                {item.imageShowcase && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-dark-950 flex flex-col items-center">
                      <div className="w-full h-56 sm:h-72 bg-dark-950/95 flex items-center justify-center p-3">
                        <img
                          src={item.imageShowcase.src}
                          alt={item.imageShowcase.title}
                          loading="lazy"
                          className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded shadow-sm"
                        />
                      </div>
                      <div className="p-3 bg-dark-900/90 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
                        <span className="font-semibold text-slate-200">
                          {item.imageShowcase.title}
                        </span>
                        <span className="text-cyan-400">COMELEC Operations</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/80">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-dark-850 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
