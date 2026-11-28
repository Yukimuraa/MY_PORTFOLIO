import React from 'react';

/**
 * Minimal bordered surface used across sections.
 */
export const Card = ({ children, className = '', interactive = false, as: Component = 'div', ...props }) => (
  <Component
    className={`rounded-xl border border-line bg-surface ${
      interactive ? 'transition-colors duration-150 hover:border-line-strong' : ''
    } ${className}`}
    {...props}
  >
    {children}
  </Component>
);
