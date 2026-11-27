import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  id,
  tag,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  alt = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative ${
        alt ? 'bg-dark-850/40 border-y border-slate-800/60' : ''
      } ${className}`}
      {...props}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(tag || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="mb-12 md:mb-16"
          >
            {tag && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                <span className="w-4 h-0.5 bg-cyan-500 rounded-full" />
                <span>{tag}</span>
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
