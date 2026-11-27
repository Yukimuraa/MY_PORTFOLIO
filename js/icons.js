/**
 * =========================================================================
 * ICONS & SVG UTILITIES
 * =========================================================================
 * Clean, lightweight, professional SVG icons with no external dependencies.
 */

window.PortfolioIcons = {
  academic: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  }, 
    React.createElement("path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }),
    React.createElement("path", { d: "M6 12v5c3 3 9 3 12 0v-5" })
  ),

  target: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React.createElement("circle", { cx: 12, cy: 12, r: 6 }),
    React.createElement("circle", { cx: 12, cy: 12, r: 2 })
  ),

  pin: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
    React.createElement("circle", { cx: 12, cy: 10, r: 3 })
  ),

  code: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("polyline", { points: "16 18 22 12 16 6" }),
    React.createElement("polyline", { points: "8 6 2 12 8 18" })
  ),

  database: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
    React.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    React.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  ),

  mobile: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("rect", { width: 14, height: 20, x: 5, y: 2, rx: 2, ry: 2 }),
    React.createElement("path", { d: "M12 18h.01" })
  ),

  cpu: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("rect", { x: 4, y: 4, width: 16, height: 16, rx: 2 }),
    React.createElement("rect", { x: 9, y: 9, width: 6, height: 6 }),
    React.createElement("path", { d: "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" })
  ),

  tool: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
  ),

  chat: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  ),

  puzzle: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M19.439 7.85c-.049-.322-.28-.584-.596-.676A3.996 3.996 0 0 0 16 3.5c-1.33 0-2.49.65-3.21 1.65-.58-.09-1.21-.09-1.79 0A3.996 3.996 0 0 0 7.79 3.5 3.996 3.996 0 0 0 5 7.174c-.316.092-.547.354-.596.676A3.996 3.996 0 0 0 3.5 11c0 1.33.65 2.49 1.65 3.21-.09.58-.09 1.21 0 1.79A3.996 3.996 0 0 0 3.5 19a3.996 3.996 0 0 0 3.674 2.79c.092.316.354.547.676.596A3.996 3.996 0 0 0 11 23.5c1.33 0 2.49-.65 3.21-1.65.58.09 1.21.09 1.79 0A3.996 3.996 0 0 0 19 23.5c1.33 0 2.49-.65 3.21-1.65.322-.049.584-.28.676-.596A3.996 3.996 0 0 0 23.5 18c0-1.33-.65-2.49-1.65-3.21.09-.58.09-1.21 0-1.79A3.996 3.996 0 0 0 23.5 10a3.996 3.996 0 0 0-4.061-2.15z" })
  ),

  refresh: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }),
    React.createElement("path", { d: "M21 3v5h-5" }),
    React.createElement("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }),
    React.createElement("path", { d: "M3 21v-5h5" })
  ),

  users: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: 9, cy: 7, r: 4 }),
    React.createElement("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ),

  shield: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
  ),

  book: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" }),
    React.createElement("path", { d: "M6 6h10M6 10h10" })
  ),

  download: (props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    React.createElement("polyline", { points: "7 10 12 15 17 10" }),
    React.createElement("line", { x1: 12, y1: 15, x2: 12, y2: 3 })
  ),

  externalLink: (props = {}) => React.createElement("svg", {
    width: props.size || 16,
    height: props.size || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    React.createElement("polyline", { points: "15 3 21 3 21 9" }),
    React.createElement("line", { x1: 10, y1: 14, x2: 21, y2: 3 })
  ),

  github: (props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
    React.createElement("path", { d: "M9 18c-4.51 2-5-2-7-2" })
  ),

  linkedin: (props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    React.createElement("rect", { width: 4, height: 12, x: 2, y: 9 }),
    React.createElement("circle", { cx: 4, cy: 4, r: 2 })
  ),

  mail: (props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }),
    React.createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
  ),

  check: (props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("polyline", { points: "20 6 9 17 4 12" })
  ),

  close: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("line", { x1: 18, y1: 6, x2: 6, y2: 18 }),
    React.createElement("line", { x1: 6, y1: 6, x2: 18, y2: 18 })
  ),

  menu: (props = {}) => React.createElement("svg", {
    width: props.size || 22,
    height: props.size || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("line", { x1: 3, y1: 12, x2: 21, y2: 12 }),
    React.createElement("line", { x1: 3, y1: 6, x2: 21, y2: 6 }),
    React.createElement("line", { x1: 3, y1: 18, x2: 21, y2: 18 })
  ),

  arrowUp: (props = {}) => React.createElement("svg", {
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("line", { x1: 12, y1: 19, x2: 12, y2: 5 }),
    React.createElement("polyline", { points: "5 12 12 5 19 12" })
  ),

  arrowRight: (props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("line", { x1: 5, y1: 12, x2: 19, y2: 12 }),
    React.createElement("polyline", { points: "12 5 19 12 12 19" })
  ),

  award: (props = {}) => React.createElement("svg", {
    width: props.size || 22,
    height: props.size || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement("circle", { cx: 12, cy: 8, r: 6 }),
    React.createElement("path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" })
  )
};
