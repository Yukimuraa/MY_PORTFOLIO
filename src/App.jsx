import React, { useState, useEffect, useCallback, useRef } from 'react';
import { portfolioData } from './data/portfolio';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SoftSkills } from './components/SoftSkills';
import { Projects } from './components/Projects';
import { AllProjects } from './components/AllProjects';
import { ProjectDetail } from './components/ProjectDetail';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { GitHubCTA } from './components/GitHubCTA';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const DEFAULT_TITLE = 'Joemarie D. Damasing | BS Information Systems Graduate';

/**
 * Parses hash routes:
 * - "#/projects/<id>" -> { view: 'project-detail', projectId: '<id>' }
 * - "#/projects"      -> { view: 'all-projects', projectId: null }
 * - otherwise         -> { view: 'home', projectId: null }
 */
const readRouteFromHash = () => {
  const hash = window.location.hash;
  const detailMatch = hash.match(/^#\/projects\/([\w-]+)/);
  if (detailMatch) {
    return { view: 'project-detail', projectId: detailMatch[1] };
  }
  if (/^#\/projects\/?$/.test(hash)) {
    return { view: 'all-projects', projectId: null };
  }
  return { view: 'home', projectId: null };
};

export default function App() {
  const {
    personalInfo,
    config,
    skills,
    softSkills,
    projects,
    experience,
    education,
    certificates,
  } = portfolioData;

  const [activeSection, setActiveSection] = useState('home');
  const [route, setRoute] = useState(readRouteFromHash);
  const [toastMessage, setToastMessage] = useState(null);
  const pendingScrollTarget = useRef(null);

  const selectedProject =
    route.view === 'project-detail'
      ? projects.find((p) => p.id === route.projectId) || null
      : null;

  const activeView =
    route.view === 'project-detail' && !selectedProject ? 'home' : route.view;

  // Sync route state with browser Back/Forward and hash changes
  useEffect(() => {
    const sync = () => setRoute(readRouteFromHash());
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  // Page title + scroll management across views
  useEffect(() => {
    if (activeView === 'project-detail' && selectedProject) {
      document.title = `${selectedProject.name} — ${personalInfo.name}`;
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    if (activeView === 'all-projects') {
      document.title = `Projects — ${personalInfo.name}`;
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    document.title = DEFAULT_TITLE;
    const target = pendingScrollTarget.current;
    if (target) {
      pendingScrollTarget.current = null;
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'auto' });
      });
    }
  }, [activeView, selectedProject, personalInfo.name]);

  // Active section scroll spy on the home view
  useEffect(() => {
    if (activeView !== 'home') return undefined;
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [activeView]);

  const showToast = useCallback((msg) => setToastMessage(msg), []);

  useEffect(() => {
    if (!toastMessage) return undefined;
    const timer = setTimeout(() => setToastMessage(null), 4000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const openProject = useCallback((id) => {
    window.location.hash = `/projects/${id}`;
  }, []);

  const openAllProjects = useCallback(() => {
    window.location.hash = '/projects';
  }, []);

  const goHome = useCallback((sectionId = 'home') => {
    pendingScrollTarget.current = sectionId;
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setRoute({ view: 'home', projectId: null });
  }, []);

  const navigateSection = useCallback(
    (sectionId) => {
      if (activeView !== 'home') {
        goHome(sectionId);
        return;
      }
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    },
    [activeView, goHome]
  );

  const handleDownloadResume = () => {
    if (config.RESUME_URL) {
      const link = document.createElement('a');
      link.href = config.RESUME_URL;
      link.download = 'Joemarie_D_Damasing_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Downloading resume PDF...');
    } else {
      showToast('Resume PDF path can be configured in src/data/portfolio.js (Place file in public/resume.pdf).');
    }
  };

  return (
    <div className="min-h-screen text-ink">
      <Sidebar
        personalInfo={personalInfo}
        config={config}
        activeView={activeView}
        activeSection={activeSection}
        onNavigateSection={navigateSection}
        onOpenAllProjects={openAllProjects}
        onDownloadResume={handleDownloadResume}
        onActionToast={showToast}
      />

      {/* Right-hand content column offset by the fixed 16rem sidebar on desktop */}
      <div className="flex min-h-screen flex-col lg:pl-64">
        <main className="flex-grow">
          {activeView === 'project-detail' && selectedProject ? (
            <ProjectDetail
              project={selectedProject}
              projects={projects}
              onBack={() => goHome('projects')}
              onOpenProject={openProject}
            />
          ) : activeView === 'all-projects' ? (
            <AllProjects
              projects={projects}
              onOpenProject={openProject}
              onBack={() => goHome('projects')}
            />
          ) : (
            <>
              <Hero
                personalInfo={personalInfo}
                config={config}
                experience={experience}
                onViewProjects={() => navigateSection('projects')}
                onDownloadResume={handleDownloadResume}
              />
              <Projects
                projects={projects}
                onOpenProject={openProject}
                onOpenAllProjects={openAllProjects}
              />
              <Experience experience={experience} />
              <Skills skills={skills} />
              <SoftSkills softSkills={softSkills} />
              <About personalInfo={personalInfo} />
              <Education education={education} />
              <Certificates certificates={certificates} onActionToast={showToast} />

              <section className="border-t border-line/70 py-16 sm:py-20">
                <div className="container-page grid grid-cols-1 gap-5 md:grid-cols-2">
                  <GitHubCTA config={config} onActionToast={showToast} />
                  <ResumeCTA onDownloadResume={handleDownloadResume} />
                </div>
              </section>

              <Contact config={config} personalInfo={personalInfo} onActionToast={showToast} />
            </>
          )}
        </main>

        <Footer personalInfo={personalInfo} config={config} onNavigate={navigateSection} />
      </div>

      {toastMessage && (
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 px-4 lg:left-[calc(50%+8rem)]"
          role="status"
          aria-live="polite"
        >
          <div className="pointer-events-auto flex items-center gap-2.5 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-ink shadow-lift">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
