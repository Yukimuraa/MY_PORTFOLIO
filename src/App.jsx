import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SoftSkills } from './components/SoftSkills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { GitHubCTA } from './components/GitHubCTA';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Section } from './components/ui/Section';

export default function App() {
  const { personalInfo, config, skills, softSkills, projects, experience, education, certificates } = portfolioData;

  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active section scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Toast feedback helper
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
  }, []);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Resume Download Handler
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
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-400">
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero
          personalInfo={personalInfo}
          config={config}
          onDownloadResume={handleDownloadResume}
        />

        {/* 2. About Me */}
        <About personalInfo={personalInfo} />

        {/* 3. Skills & Technologies */}
        <Skills skills={skills} />

        {/* 4. Soft Skills */}
        <SoftSkills softSkills={softSkills} />

        {/* 5. Featured Projects */}
        <Projects
          projects={projects}
          onSelectProject={setSelectedProject}
          onActionToast={showToast}
        />

        {/* 6. Experience */}
        <Experience experience={experience} />

        {/* 7. Education */}
        <Education education={education} />

        {/* 8. Certificates & Training */}
        <Certificates
          certificates={certificates}
          onActionToast={showToast}
        />

        {/* 9 & 10. Call to Actions (Explore Code & Download Resume) */}
        <Section alt>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GitHubCTA config={config} onActionToast={showToast} />
            <ResumeCTA onDownloadResume={handleDownloadResume} />
          </div>
        </Section>

        {/* 11. Contact */}
        <Contact config={config} onActionToast={showToast} />
      </main>

      {/* 12. Footer */}
      <Footer
        personalInfo={personalInfo}
        config={config}
        onActionToast={showToast}
      />

      {/* Accessible Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onActionToast={showToast}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="bg-dark-800 border border-slate-700 text-slate-100 text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
