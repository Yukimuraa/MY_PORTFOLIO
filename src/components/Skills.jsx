import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cpu, Wrench } from 'lucide-react';
import { Section } from './ui/Section';
import { TechTag } from './ui/TechTag';

const iconMap = { Code, Database, Smartphone, Cpu, Wrench };

export const Skills = ({ skills }) => (
  <Section
    id="skills"
    index="04"
    tag="stack"
    title="Skills & Technologies"
    subtitle="Programming languages, frameworks, databases, and professional tools I work with."
  >
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {skills.map((group, idx) => {
        const Icon = iconMap[group.icon] || Code;
        return (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: (idx % 2) * 0.05 }}
            className={`rounded-xl border border-line bg-surface p-6 ${
              idx === skills.length - 1 && skills.length % 2 === 1 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-elevated text-ink-muted">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
            </div>
            <p className="mt-3 text-sm text-ink-subtle">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <TechTag key={item.name} name={item.name} />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);
