import React from 'react';
import { MessageSquare, Lightbulb, Shuffle, Users, ShieldCheck, BookOpen } from 'lucide-react';
import { Section } from './ui/Section';

const iconMap = { MessageSquare, Lightbulb, Shuffle, Users, ShieldCheck, BookOpen };

export const SoftSkills = ({ softSkills }) => (
  <Section
    index="05"
    tag="strengths"
    title="Soft Skills"
    subtitle="Interpersonal, problem-solving, and adaptability attributes that guide my daily work and team collaboration."
  >
    <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '1px' }}>
      {softSkills.map((item) => {
        const Icon = iconMap[item.icon] || MessageSquare;
        return (
          <div key={item.name} className="bg-surface p-6">
            <Icon className="h-4 w-4 text-ink-subtle" aria-hidden="true" />
            <h3 className="mt-4 text-sm font-semibold text-ink">{item.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>
          </div>
        );
      })}
    </div>
  </Section>
);
