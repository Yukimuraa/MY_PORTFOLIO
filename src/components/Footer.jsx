import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { useSound } from '../context/SoundContext.jsx';

export const Footer = ({ personalInfo, config, onNavigate }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { playSound } = useSound();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    config.GITHUB_URL && { label: 'GitHub', href: config.GITHUB_URL, icon: Github },
    config.LINKEDIN_URL && { label: 'LinkedIn', href: config.LINKEDIN_URL, icon: Linkedin },
    config.EMAIL && { label: 'Email', href: `mailto:${config.EMAIL}`, icon: Mail },
  ].filter(Boolean);

  const links = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-ink-subtle">{personalInfo.hero.focusText}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onMouseEnter={() => playSound()}
                onClick={(e) => {
                  e.preventDefault();
                  playSound();
                  onNavigate(link.id);
                }}
                className="text-sm text-ink-subtle transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-subtle">© 2026 {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <Button key={label} variant="icon" size="sm" href={href} aria-label={label} title={label}>
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>

      {showBackToTop && (
        <Button
          variant="icon"
          size="lg"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 shadow-lift"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </footer>
  );
};
