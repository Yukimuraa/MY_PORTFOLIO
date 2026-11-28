import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Download, Laptop, Layers, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
});

const INLINE_TOKENS = [
  { phrase: 'web development', icon: Laptop },
  { phrase: 'database management', icon: Database },
  { phrase: 'information systems', icon: Layers },
];

/**
 * Renders the supporting paragraph while injecting crisp inline icons before
 * "web development", "database management", and "information systems".
 */
const renderSupportingText = (text = '') => {
  const pattern = /(web development|database management|information systems)/g;
  const parts = text.split(pattern);

  return parts.map((part, idx) => {
    const match = INLINE_TOKENS.find((t) => t.phrase === part);
    if (!match) return <React.Fragment key={idx}>{part}</React.Fragment>;
    const Icon = match.icon;
    return (
      <span
        key={idx}
        className="mx-0.5 inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-0.5 align-baseline text-sm font-medium text-ink"
      >
        <Icon className="h-3.5 w-3.5 shrink-0 text-ink-muted" aria-hidden="true" />
        <span>{part}</span>
      </span>
    );
  });
};

export const Hero = ({ personalInfo, config, experience, onViewProjects, onDownloadResume }) => {
  const { hero, name, school, degree, period } = personalInfo;
  const latestRole = experience?.[0];
  const aiTools = hero.aiTools || [];

  const facts = [
    { label: 'Education', value: degree, meta: `${school} · ${period}` },
    latestRole && { label: 'Experience', value: latestRole.position, meta: latestRole.company },
    { label: 'Focus', value: hero.focusText, meta: hero.locationText },
  ].filter(Boolean);

  return (
    <section id="home" className="pb-16 pt-24 sm:pb-20 lg:pt-16">
      <div className="container-page">
        <motion.p {...fadeUp(0)} className="mb-8 font-mono text-xs tracking-wide text-ink-subtle sm:text-sm">
          01 — overview
        </motion.p>

        {/* Identity */}
        <motion.div {...fadeUp(0.03)} className="flex items-center gap-4">
          <img
            src={personalInfo.avatar || '/images/profile.jpg'}
            alt={name}
            width="64"
            height="64"
            onError={(e) => {
              if (personalInfo.avatarFallback && e.currentTarget.src !== personalInfo.avatarFallback) {
                e.currentTarget.src = personalInfo.avatarFallback;
              }
            }}
            className="h-14 w-14 rounded-full border border-line object-cover object-top sm:h-16 sm:w-16"
          />
          <div className="min-w-0">
            <p className="text-base font-semibold text-ink">{name}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-ink-subtle">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {hero.locationText}
            </p>
          </div>
        </motion.div>

        {/* Headline & Bio */}
        <motion.div {...fadeUp(0.06)} className="mt-8 max-w-3xl">
          {config.AVAILABLE_FOR_WORK && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {config.STATUS_TEXT}
            </p>
          )}
          <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            {hero.heading}
            <span className="block text-ink-subtle">{hero.subheading}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.85] text-ink-muted">
            {renderSupportingText(hero.supportingText)}
          </p>

          {/* Currently Exploring AI Tools */}
          {aiTools.length > 0 && (
            <div className="mt-6">
              <p className="eyebrow mb-3">Currently Exploring AI Tools</p>
              <div className="flex flex-wrap items-center gap-2.5">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-1.5 transition-colors hover:border-line-strong"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white p-1 shadow-xs">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span className="text-xs font-medium text-ink">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Actions */}
        <motion.div {...fadeUp(0.1)} className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" onClick={onViewProjects}>
            Explore Projects
          </Button>
          <Button variant="secondary" size="lg" icon={Download} onClick={onDownloadResume}>
            Download Resume
          </Button>
        </motion.div>

        {/* Quick facts */}
        <motion.dl
          {...fadeUp(0.14)}
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-3"
        >
          {facts.map((fact, idx) => (
            <div
              key={fact.label}
              className={`p-5 ${idx > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''}`}
            >
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-2 text-sm font-medium text-ink">{fact.value}</dd>
              <dd className="mt-1 text-xs text-ink-subtle">{fact.meta}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
