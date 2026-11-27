/**
 * =========================================================================
 * APPLICATION ENTRY POINT
 * =========================================================================
 * Assembles all React portfolio components, handles route/section navigation,
 * active scroll spying, modal lifecycle, and notifications.
 */

window.App = function App() {
  const { createElement: h, useState, useEffect, useCallback } = React;
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active section scroll spy via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1
    });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Toast notification helper with auto-dismiss
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

  // Smooth navigation helper
  const navigateTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Resume Download Handler
  const handleDownloadResume = () => {
    const config = window.PORTFOLIO_CONFIG;
    if (config.RESUME_URL) {
      // Create download anchor
      const link = document.createElement("a");
      link.href = config.RESUME_URL;
      link.download = "Joemarie_D_Damasing_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Downloading resume PDF...");
    } else {
      showToast("Resume PDF path will be configured in js/config.js. Place your PDF in assets/resume.pdf.");
    }
  };

  return h("div", { className: "portfolio-app" },
    // Sticky Navigation
    h(window.Navbar, {
      activeSection,
      onNavigate: navigateTo,
      onDownloadResume: handleDownloadResume
    }),

    // Main Content Sections
    h("main", null,
      // 1. Hero
      h(window.Hero, {
        onNavigate: navigateTo,
        onDownloadResume: handleDownloadResume
      }),

      // 2. About Me
      h(window.About),

      // 3. Skills & Technologies
      h(window.Skills),

      // 4. Soft Skills
      h(window.SoftSkills),

      // 5. Featured Projects
      h(window.Projects, {
        onSelectProject: setSelectedProject,
        onShowToast: showToast
      }),

      // 6. Experience Timeline
      h(window.Experience),

      // 7. Education
      h(window.Education),

      // 8. Certificates & Training
      h(window.Certificates, {
        onShowToast: showToast
      }),

      // 9 & 10. Call to Actions (GitHub & Resume)
      h("section", { className: "section section-alt" },
        h("div", { className: "container" },
          h("div", { className: "cta-banner-grid" },
            h(window.GitHubCta, { onShowToast: showToast }),
            h(window.ResumeCta, { onDownloadResume: handleDownloadResume })
          )
        )
      ),

      // 11. Contact & Form
      h(window.Contact, {
        onShowToast: showToast
      })
    ),

    // 12. Footer
    h(window.Footer, {
      onShowToast: showToast,
      onNavigate: navigateTo
    }),

    // Project Details Modal Dialog
    h(window.ProjectModal, {
      project: selectedProject,
      onClose: () => setSelectedProject(null),
      onShowToast: showToast
    }),

    // Toast Notifications Banner
    toastMessage && h("div", { className: "toast-container" },
      h("div", { className: "toast", role: "status", "aria-live": "polite" },
        window.PortfolioIcons.check({ size: 16 }),
        h("span", null, toastMessage)
      )
    )
  );
};

// Initialize Application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement && window.React && window.ReactDOM) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(window.App));
  }
});
