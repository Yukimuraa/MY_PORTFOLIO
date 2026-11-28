import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FolderGit2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Menu,
  X,
  Check,
  Home,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useSound } from '../context/SoundContext.jsx';

export const Sidebar = ({
  personalInfo,
  config,
  activeView,
  activeSection,
  onNavigateSection,
  onOpenAllProjects,
  onViewResume,
  onActionToast,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { mode, setMode } = useTheme();
  const { soundEnabled, toggleSound, playSound } = useSound();

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const primaryLinks = [
    {
      id: 'home-top',
      label: 'Overview',
      icon: Home,
      isActive: activeView === 'home' && activeSection === 'home',
      onClick: () => {
        playSound();
        setMobileOpen(false);
        onNavigateSection('home');
      },
    },
    {
      id: 'all-projects',
      label: 'All Projects',
      icon: FolderGit2,
      isActive: activeView === 'all-projects' || activeView === 'project-detail',
      onClick: () => {
        playSound();
        setMobileOpen(false);
        onOpenAllProjects();
      },
    },
    {
      id: 'resume',
      label: 'View Resume',
      icon: FileText,
      isActive: false,
      onClick: () => {
        playSound();
        setMobileOpen(false);
        onViewResume();
      },
    },
  ];

  const externalLinks = [
    config.GITHUB_URL && {
      id: 'github',
      label: 'GitHub',
      icon: Github,
      href: config.GITHUB_URL,
    },
    config.LINKEDIN_URL && {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      href: config.LINKEDIN_URL,
    },
  ].filter(Boolean);

  const sectionLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Stack' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleEmailClick = (e) => {
    e.preventDefault();
    playSound();
    if (!config.EMAIL) return;
    navigator.clipboard?.writeText(config.EMAIL).then(() => {
      setCopiedEmail(true);
      onActionToast?.('Email address copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const themeOptions = [
    { key: 'system', label: 'System theme', icon: Monitor },
    { key: 'light', label: 'Light theme', icon: Sun },
    { key: 'dark', label: 'Dark theme', icon: Moon },
  ];

  const SoundIcon = soundEnabled ? Volume2 : VolumeX;

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between bg-canvas px-6 py-7 select-none">
      {/* Top: Brand + Scrollable Nav */}
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onMouseEnter={() => playSound()}
            onClick={(e) => {
              e.preventDefault();
              playSound();
              setMobileOpen(false);
              onNavigateSection('home');
            }}
            className="font-mono text-base font-medium tracking-tight text-ink transition-opacity hover:opacity-80"
          >
            {personalInfo.shortName ? `${personalInfo.shortName} Damasing` : personalInfo.name}
          </a>

          <button
            type="button"
            onClick={() => {
              playSound();
              setMobileOpen(false);
            }}
            className="rounded-md p-1.5 text-ink-subtle hover:bg-elevated hover:text-ink lg:hidden"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Nav Links */}
        <nav
          className="mt-8 flex-1 space-y-6 overflow-y-auto pr-1"
          aria-label="Sidebar navigation"
        >
          {/* Group 1: Primary Pages & Actions with Icons */}
          <ul className="space-y-1">
            {primaryLinks.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onMouseEnter={() => playSound()}
                    onClick={item.onClick}
                    className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left font-mono text-[13px] transition-colors ${
                      item.isActive
                        ? 'bg-elevated text-ink font-medium'
                        : 'text-ink-muted hover:bg-elevated/60 hover:text-ink'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-ink-subtle" aria-hidden="true" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Group 2: External Profiles */}
          {externalLinks.length > 0 && (
            <ul className="space-y-1">
              {externalLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => playSound()}
                      onClick={() => playSound()}
                      className="flex items-center gap-3 rounded-lg px-2.5 py-2 font-mono text-[13px] text-ink-muted transition-colors hover:bg-elevated/60 hover:text-ink"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-ink-subtle" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Group 3: Portfolio Sections (Plain Mono List) */}
          <ul className="space-y-1 border-t border-line/70 pt-5">
            {sectionLinks.map((sec) => {
              const active = activeView === 'home' && activeSection === sec.id;
              return (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onMouseEnter={() => playSound()}
                    onClick={(e) => {
                      e.preventDefault();
                      playSound();
                      setMobileOpen(false);
                      onNavigateSection(sec.id);
                    }}
                    className={`block rounded-lg px-2.5 py-1.5 font-mono text-[13px] transition-colors ${
                      active ? 'text-ink font-medium' : 'text-ink-subtle hover:text-ink'
                    }`}
                  >
                    {sec.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom: Theme Pill + Sound Toggle + Direct Email */}
      <div className="mt-6 space-y-5 border-t border-line pt-5">
        {/* Segmented Theme Switcher + Sound Toggle */}
        <div className="flex items-center gap-2.5">
          <div
            className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1"
            role="radiogroup"
            aria-label="Color theme"
          >
            {themeOptions.map((opt) => {
              const Icon = opt.icon;
              const selected = mode === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={opt.label}
                  title={opt.label}
                  onClick={() => {
                    playSound();
                    setMode(opt.key);
                  }}
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                    selected
                      ? 'bg-elevated text-ink shadow-sm'
                      : 'text-ink-subtle hover:text-ink'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={soundEnabled}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            title={soundEnabled ? 'Sound effects: ON (click to mute)' : 'Sound effects: OFF (click to enable)'}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              soundEnabled
                ? 'border-line-strong bg-elevated text-ink'
                : 'border-line bg-surface text-ink-subtle hover:border-line-strong hover:text-ink'
            }`}
          >
            <SoundIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Direct Email Reach-out */}
        {config.EMAIL && (
          <div>
            <p className="text-xs leading-relaxed text-ink-subtle">
              For work, inquiries &amp; everything else, reach me at
            </p>
            <button
              type="button"
              onMouseEnter={() => playSound()}
              onClick={handleEmailClick}
              title="Click to copy email address"
              className="mt-2 inline-flex max-w-full items-center gap-2 font-mono text-xs text-ink transition-opacity hover:opacity-80"
            >
              {copiedEmail ? (
                <Check className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              ) : (
                <Mail className="h-3.5 w-3.5 shrink-0 text-ink-subtle" aria-hidden="true" />
              )}
              <span className="truncate">{config.EMAIL}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile / Tablet Top Bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-canvas/90 px-5 backdrop-blur-md lg:hidden">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            playSound();
            onNavigateSection('home');
          }}
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          {personalInfo.shortName ? `${personalInfo.shortName} Damasing` : personalInfo.name}
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={soundEnabled}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
              soundEnabled
                ? 'border-line-strong bg-elevated text-ink'
                : 'border-line bg-surface text-ink-muted hover:text-ink'
            }`}
          >
            <SoundIcon className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              playSound();
              setMobileOpen(true);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-muted hover:text-ink"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Desktop Fixed Left Sidebar */}
      <aside
        className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-line bg-canvas lg:block"
        aria-label="Primary sidebar"
      >
        {sidebarContent}
      </aside>

      {/* Mobile Slide-Over Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 360, damping: 34 }}
              className="fixed inset-y-0 left-0 w-72 max-w-[85vw] border-r border-line bg-canvas shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
