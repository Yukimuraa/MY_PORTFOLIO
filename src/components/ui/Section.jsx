import React from 'react';
import { motion } from 'framer-motion';

/**
 * Page section with a Bryl-inspired numbered mono header (e.g. "02 — projects").
 * Pass `centerHeader` to place the numbered index label dead-center with an
 * optional right-aligned action link.
 */
export const Section = ({
  id,
  index,
  tag,
  title,
  subtitle,
  action,
  centerHeader = false,
  children,
  className = '',
  containerClassName = '',
  bordered = true,
  ...props
}) => {
  const indexLabel = index ? `${index} — ${(tag || title || id || '').toLowerCase()}` : tag;

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${bordered ? 'border-t border-line/70' : ''} ${className}`}
      {...props}
    >
      <div className={`container-page ${containerClassName}`}>
        {(indexLabel || title || subtitle || action) && (
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`mb-8 sm:mb-10 ${centerHeader ? 'text-center' : ''}`}
          >
            {(indexLabel || action) &&
              (centerHeader ? (
                <div className="mb-3 grid grid-cols-1 items-center gap-2 sm:grid-cols-3">
                  <span className="hidden sm:block" />
                  {indexLabel ? (
                    <p className="text-center font-mono text-xs tracking-wide text-ink-subtle sm:text-sm">
                      {indexLabel}
                    </p>
                  ) : (
                    <span />
                  )}
                  <div className="flex justify-center sm:justify-end">{action}</div>
                </div>
              ) : (
                <div className="mb-4 flex items-center justify-between gap-4">
                  {indexLabel ? (
                    <p className="font-mono text-xs tracking-wide text-ink-subtle sm:text-sm">
                      {indexLabel}
                    </p>
                  ) : (
                    <span />
                  )}
                  {action && <div className="shrink-0">{action}</div>}
                </div>
              ))}

            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
            )}
            {subtitle && (
              <p
                className={`mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base ${
                  centerHeader ? 'mx-auto' : ''
                }`}
              >
                {subtitle}
              </p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
};
