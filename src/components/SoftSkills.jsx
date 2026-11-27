import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Lightbulb,
  Shuffle,
  Users,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export const SoftSkills = ({ softSkills }) => {
  const iconMap = {
    MessageSquare,
    Lightbulb,
    Shuffle,
    Users,
    ShieldCheck,
    BookOpen,
  };

  return (
    <Section
      tag="Workplace Strengths"
      title="Soft Skills"
      subtitle="Interpersonal, problem-solving, and adaptability attributes that guide my daily work and team collaboration."
      alt
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((item, idx) => {
          const Icon = iconMap[item.icon] || MessageSquare;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              <Card className="h-full flex items-start gap-4 p-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
