import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

export const Experience = ({ experience }) => (
  <Section
    id="experience"
    index="03"
    tag="experience"
    title="Experience"
    subtitle="Practical technical support, workstation staging, and institutional operations experience."
  >
    <ol className="space-y-0">
      {experience.map((item, idx) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.3 }}
          className={`grid grid-cols-1 gap-4 py-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 ${
            idx > 0 ? 'border-t border-line' : 'pt-0'
          }`}
        >
          <div>
            <p className="font-mono text-xs text-ink-subtle">{item.period}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink">{item.position}</h3>
            <p className="mt-1 text-sm text-ink-muted">
              {item.company}
              {item.department && <span className="text-ink-subtle"> — {item.department}</span>}
            </p>
            {item.highlight && <p className="mt-3 text-xs font-medium text-ink-subtle">{item.highlight}</p>}

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.description}</p>

            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {item.responsibilities.map((resp) => (
                <li key={resp} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" aria-hidden="true" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            {item.imageShowcase && (
              <figure className="mt-6 overflow-hidden rounded-xl border border-line bg-elevated">
                <div className="aspect-[16/9]">
                  <img
                    src={item.imageShowcase.src}
                    alt={item.imageShowcase.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="border-t border-line bg-surface px-4 py-3 text-xs text-ink-muted">
                  <span className="font-medium text-ink">{item.imageShowcase.title}</span>
                  {item.imageShowcase.caption && <span className="block mt-0.5">{item.imageShowcase.caption}</span>}
                </figcaption>
              </figure>
            )}

            {item.tags?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  </Section>
);
