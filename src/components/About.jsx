import React from 'react';
import { GraduationCap, Crosshair, MapPin } from 'lucide-react';
import { Section } from './ui/Section';

const iconMap = { GraduationCap, Crosshair, MapPin };

export const About = ({ personalInfo }) => {
  const { about } = personalInfo;

  return (
    <Section id="about" index="06" tag="about" title={about.title}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-5 text-base leading-relaxed text-ink-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="overflow-hidden rounded-xl border border-line bg-surface lg:self-start">
          <div className="aspect-[4/3] overflow-hidden border-b border-line bg-elevated">
            <img
              src={personalInfo.avatar || '/images/profile.jpg'}
              alt={personalInfo.name}
              loading="lazy"
              onError={(e) => {
                if (personalInfo.avatarFallback && e.currentTarget.src !== personalInfo.avatarFallback) {
                  e.currentTarget.src = personalInfo.avatarFallback;
                }
              }}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <dl>
            {about.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || MapPin;
              return (
                <div key={item.tag} className={`flex gap-3 p-4 ${idx > 0 ? 'border-t border-line' : ''}`}>
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="eyebrow">{item.tag}</dt>
                    <dd className="mt-1.5 text-sm font-medium text-ink">{item.primary}</dd>
                    <dd className="text-sm text-ink-subtle">
                      {item.secondary} · {item.period}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </aside>
      </div>
    </Section>
  );
};
