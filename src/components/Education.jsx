import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookMarked } from 'lucide-react';
import { Section } from './ui/Section';

export const Education = ({ education }) => {
  return (
    <Section
      id="education"
      tag="Academic Foundation"
      title="Education"
      subtitle="Comprehensive coursework and practical training in information systems, databases, and software engineering."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-dark-800/90 border border-slate-800/90 rounded-3xl p-6 sm:p-9 shadow-dark-card relative overflow-hidden"
        >
          {/* Subtle cyan border accent on the left */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-cyan-500" />

          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-semibold text-slate-300 mt-1">
                {education.school}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{education.location}</p>
            </div>

            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
              {education.period}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {education.description}
          </p>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <BookMarked className="w-3.5 h-3.5 text-cyan-400" />
              <span>Relevant Study Areas</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.relevantAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-700/80 text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
