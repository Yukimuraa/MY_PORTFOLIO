import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Cpu, ArrowRight, Download, Terminal } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = ({ personalInfo, config, onDownloadResume }) => {
  const { hero, name, school, degree } = personalInfo;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Bio, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label & Status Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {hero.label}
              </span>
              {config.AVAILABLE_FOR_WORK && (
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {config.STATUS_TEXT}
                </span>
              )}
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {hero.heading}{' '}
              <span className="block text-cyan-400 font-bold mt-1">
                {hero.subheading}
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {hero.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={scrollToProjects}
                className="w-full sm:w-auto"
              >
                View My Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Download}
                onClick={onDownloadResume}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Meta Information */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{hero.locationText}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{hero.focusText}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full bg-dark-800/90 border border-slate-700/60 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col items-center">
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Big Profile Image Showcase */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/15 mb-5 group bg-dark-900 shrink-0">
                <img
                  src={personalInfo.avatar || "/images/profile.jpg"}
                  alt={name}
                  onError={(e) => {
                    if (personalInfo.avatarFallback && e.target.src !== personalInfo.avatarFallback) {
                      e.target.src = personalInfo.avatarFallback;
                    }
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Candidate Info */}
              <div className="w-full text-center mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{name}</h3>
                <p className="text-xs font-semibold text-cyan-400 mt-1">{degree}</p>
                <p className="text-xs text-slate-400 mt-0.5">{school} • Class of 2022–2026</p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="w-full grid grid-cols-2 gap-2.5 mb-5">
                <div className="bg-dark-850/80 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Program</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">BS Info Systems</div>
                </div>
                <div className="bg-dark-850/80 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">IT Experience</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">COMELEC Intern</div>
                </div>
                <div className="bg-dark-850/80 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Web Stack</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">PHP • MySQL • React</div>
                </div>
                <div className="bg-dark-850/80 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Mobile Dev</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Flutter • Dart</div>
                </div>
              </div>

              {/* Terminal-like Status Bar */}
              <div className="w-full bg-dark-950/90 border border-slate-800/80 rounded-xl px-4 py-2.5 font-mono text-xs text-cyan-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>status: ready_for_deployment</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#0EA5E9]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
