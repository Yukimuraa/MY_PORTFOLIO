import React from 'react';
import { Section } from './ui/Section';
import {
  PhpIcon,
  LaravelIcon,
  ReactIcon,
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  PythonIcon,
  SqlIcon,
  MySqlIcon,
  FirebaseIcon,
  FlutterIcon,
  GitIcon,
  GitHubIcon,
  MicrosoftExcelIcon,
  MicrosoftWordIcon,
} from './TechLogos';

// Exactly the 15 technologies requested, distributed across 3 distinct continuous marquee rows
const row1Technologies = [
  { name: 'PHP', icon: PhpIcon },
  { name: 'Laravel', icon: LaravelIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'HTML5', icon: Html5Icon },
];

const row2Technologies = [
  { name: 'CSS3', icon: Css3Icon },
  { name: 'Python', icon: PythonIcon },
  { name: 'SQL', icon: SqlIcon },
  { name: 'MySQL', icon: MySqlIcon },
  { name: 'Firebase', icon: FirebaseIcon },
];

const row3Technologies = [
  { name: 'Flutter', icon: FlutterIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'GitHub', icon: GitHubIcon },
  { name: 'Microsoft Excel', icon: MicrosoftExcelIcon },
  { name: 'Microsoft Word', icon: MicrosoftWordIcon },
];

// Helper to duplicate items for a 100% seamless, mathematically infinite loop across all resolutions
const buildTrackItems = (items, copies = 4) => {
  const half = Array.from({ length: copies }, () => items).flat();
  return [...half, ...half];
};

const track1 = buildTrackItems(row1Technologies, 4);
const track2 = buildTrackItems(row2Technologies, 4);
const track3 = buildTrackItems(row3Technologies, 4);

export const Skills = () => {
  return (
    <Section
      id="skills"
      tag="Technical Capabilities"
      title="Skills & Technologies"
      subtitle="A seamless overview of programming languages, frameworks, databases, and professional tools I work with."
    >
      {/* Marquee Viewport: clipped to prevent any page horizontal overflow */}
      <div className="relative w-full overflow-hidden skills-marquee-container py-2">
        {/* Soft edge gradient fades for infinite edge transitions */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* Row 1: Continuously moves LEFT -> RIGHT */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-ltr flex items-center">
              {track1.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`row1-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-3.5 mx-5 sm:mx-8 md:mx-10 py-1 shrink-0 select-none group/item transition-transform duration-200 hover:scale-105"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 max-w-full max-h-full object-contain drop-shadow-sm" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-200 group-hover/item:text-cyan-400 transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Continuously moves RIGHT -> LEFT */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-rtl flex items-center">
              {track2.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`row2-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-3.5 mx-5 sm:mx-8 md:mx-10 py-1 shrink-0 select-none group/item transition-transform duration-200 hover:scale-105"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 max-w-full max-h-full object-contain drop-shadow-sm" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-200 group-hover/item:text-cyan-400 transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3: Continuously moves LEFT -> RIGHT */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-ltr flex items-center">
              {track3.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`row3-${tech.name}-${idx}`}
                    className="inline-flex items-center gap-3.5 mx-5 sm:mx-8 md:mx-10 py-1 shrink-0 select-none group/item transition-transform duration-200 hover:scale-105"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 max-w-full max-h-full object-contain drop-shadow-sm" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-200 group-hover/item:text-cyan-400 transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
