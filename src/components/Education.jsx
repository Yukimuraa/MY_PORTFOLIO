import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Section } from './ui/Section';

export const Education = ({ education }) => (
  <Section
    id="education"
    index="07"
    tag="education"
    title="Education"
    subtitle="Coursework and practical training in information systems, databases, and software engineering."
  >
    <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-elevated text-ink-muted">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink">{education.degree}</h3>
            <p className="mt-1 text-sm text-ink-muted">{education.school}</p>
            <p className="text-sm text-ink-subtle">{education.location}</p>
          </div>
        </div>
        <p className="font-mono text-xs text-ink-subtle sm:pt-1">{education.period}</p>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-ink-muted">{education.description}</p>

      <div className="mt-6 border-t border-line pt-6">
        <p className="eyebrow mb-3">Relevant Study Areas</p>
        <div className="flex flex-wrap gap-1.5">
          {education.relevantAreas.map((area) => (
            <span key={area} className="tag">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
