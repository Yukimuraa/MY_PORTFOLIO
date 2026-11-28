import React from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 select-none ' +
  'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

const variants = {
  primary: 'bg-ink text-canvas hover:bg-ink/85',
  secondary: 'border border-line bg-surface text-ink hover:border-line-strong hover:bg-elevated',
  ghost: 'text-ink-muted hover:bg-elevated hover:text-ink',
  icon: 'border border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ink',
};

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
};

const iconSizes = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-10 w-10',
};

/**
 * Shared button. Renders an <a> when `href` is provided, otherwise a <button>.
 */
export const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      icon: Icon,
      iconPosition = 'left',
      href,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const sizeClass = variant === 'icon' ? iconSizes[size] || iconSizes.md : sizes[size] || sizes.md;
    const classes = `${base} ${variants[variant] || variants.primary} ${sizeClass} ${className}`;
    const iconEl = Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null;

    const content = (
      <>
        {iconPosition === 'left' && iconEl}
        {children}
        {iconPosition === 'right' && iconEl}
      </>
    );

    if (href) {
      const external = /^https?:\/\//.test(href);
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
