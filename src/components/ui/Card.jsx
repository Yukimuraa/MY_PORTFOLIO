import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) => {
  const Component = hoverEffect ? motion.div : 'div';
  const motionProps = hoverEffect
    ? {
        whileHover: { y: -3, transition: { duration: 0.2 } },
      }
    : {};

  return (
    <Component
      onClick={onClick}
      className={`bg-dark-800/90 border border-slate-800/80 rounded-2xl p-6 sm:p-7 shadow-dark-card transition-colors duration-200 ${
        hoverEffect ? 'hover:border-cyan-500/40 hover:bg-dark-750' : ''
      } ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};
