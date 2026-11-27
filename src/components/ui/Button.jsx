import React from 'react';
import { motion } from 'framer-motion';

export const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer';

  const variants = {
    primary: 'bg-cyan-500 text-dark-950 hover:bg-cyan-400 shadow-sm hover:shadow-subtle-cyan',
    secondary: 'bg-dark-800 text-slate-100 border border-slate-700/60 hover:bg-dark-750 hover:border-cyan-500/50',
    outline: 'bg-transparent text-cyan-400 border border-cyan-500/60 hover:bg-cyan-500/10 hover:border-cyan-400',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60',
    icon: 'p-2.5 bg-dark-800 text-slate-300 border border-slate-700/60 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-dark-750 rounded-lg',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const sizeClass = variant === 'icon' ? '' : sizes[size] || sizes.md;
  const variantClass = variants[variant] || variants.primary;

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
});

Button.displayName = 'Button';
