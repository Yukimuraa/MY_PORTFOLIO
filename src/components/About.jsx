import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Crosshair, MapPin } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export const About = ({ personalInfo }) => {
  const { about } = personalInfo;

  const iconMap = {
    GraduationCap,
    Crosshair,
    MapPin,
  };

  return (
    <Section id="about" tag="Background" title={about.title} alt>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Narrative Text */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-slate-300 text-base sm:text-lg leading-relaxed">
          {about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Profile Card & 3 Highlight Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <Card className="p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 border-cyan-500/25">
              <div className="relative w-28 h-36 sm:w-32 sm:h-42 rounded-xl overflow-hidden border-2 border-cyan-500/40 shrink-0 bg-dark-900 shadow-lg shadow-cyan-500/10">
                <img
                  src={personalInfo.avatar || "/images/profile.jpg"}
                  alt={personalInfo.name}
                  onError={(e) => {
                    if (personalInfo.avatarFallback && e.target.src !== personalInfo.avatarFallback) {
                      e.target.src = personalInfo.avatarFallback;
                    }
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                  Graduate Profile
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-cyan-300 font-medium mt-0.5">
                  BS in Information Systems
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Carlos Hilado Memorial State University • Class of 2026
                </p>
                <div className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md justify-center sm:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Available for Entry-Level Roles</span>
                </div>
              </div>
            </Card>
          </motion.div>
          {about.highlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || MapPin;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
              >
                <Card className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.primary}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {item.secondary}
                  </p>
                  <span className="inline-block mt-3 text-xs font-mono text-cyan-300">
                    {item.period}
                  </span>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
