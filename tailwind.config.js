/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070B14',
          900: '#0A0F1D',
          850: '#0E1528',
          800: '#131D35',
          750: '#172340',
          700: '#1E293B',
          600: '#334155',
        },
        cyan: {
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle-cyan': '0 4px 20px -2px rgba(14, 165, 233, 0.25)',
        'dark-card': '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 10px -2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
