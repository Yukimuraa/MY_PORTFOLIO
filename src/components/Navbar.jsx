import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext.jsx';

export const Navbar = ({ activeSection, onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-dark-900/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 text-slate-100 font-bold tracking-wide group"
        >
          <div className="w-9 h-9 rounded-lg bg-dark-800 border border-slate-700/80 group-hover:border-cyan-500/60 flex items-center justify-center text-cyan-400 text-sm font-extrabold transition-colors">
            JD
          </div>
          <span className="text-sm sm:text-base font-bold tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
            JOEMARIE D. DAMASING
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Download Resume + Mobile Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-dark-850 border border-slate-700/70 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          <div className="hidden sm:block">
            <Button
              variant="primary"
              size="sm"
              icon={Download}
              onClick={onDownloadResume}
            >
              Download Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-dark-850 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-dark-900/98 border-b border-slate-800 px-4 pt-3 pb-6 overflow-hidden shadow-2xl"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5 sm:hidden">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-dark-850 border border-slate-700/70 text-slate-300 font-medium text-sm"
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
                    <span>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{isDark ? 'Dark' : 'Light'}</span>
                </button>

                <Button
                  variant="primary"
                  size="md"
                  icon={Download}
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
