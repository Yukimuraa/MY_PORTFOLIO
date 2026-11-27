import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = ({ personalInfo, config, onActionToast }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocial = (type) => {
    if (type === 'github') {
      if (config.GITHUB_URL) window.open(config.GITHUB_URL, '_blank', 'noopener,noreferrer');
      else onActionToast('GitHub link will be configured in src/data/portfolio.js');
    } else if (type === 'linkedin') {
      if (config.LINKEDIN_URL) window.open(config.LINKEDIN_URL, '_blank', 'noopener,noreferrer');
      else onActionToast('LinkedIn link will be configured in src/data/portfolio.js');
    } else if (type === 'email') {
      if (config.EMAIL) window.location.href = `mailto:${config.EMAIL}`;
      else onActionToast('Email address will be configured in src/data/portfolio.js');
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          <div>
            <h4 className="text-base sm:text-lg font-bold tracking-wider text-white">
              {personalInfo.name.toUpperCase()}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              BS Information Systems Graduate
            </p>
            <p className="text-xs text-cyan-400 font-medium mt-0.5">
              IT Support • Web Development • Information Systems
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSocial('github')}
              className="p-2.5 rounded-xl bg-dark-850 border border-slate-700/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleSocial('linkedin')}
              className="p-2.5 rounded-xl bg-dark-850 border border-slate-700/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleSocial('email')}
              className="p-2.5 rounded-xl bg-dark-850 border border-slate-700/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Joemarie D. Damasing. All rights reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-dark-800 border border-slate-700 text-slate-200 hover:text-dark-950 hover:bg-cyan-400 hover:border-cyan-400 shadow-xl transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
