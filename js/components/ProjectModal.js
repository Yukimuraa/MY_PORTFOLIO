/**
 * =========================================================================
 * PROJECT MODAL COMPONENT
 * =========================================================================
 * High-fidelity, accessible dialog displaying exhaustive project details,
 * problem-solution breakdown, architecture, features, and screenshots.
 */

window.ProjectModal = function ProjectModal({ project, onClose, onShowToast }) {
  const { createElement: h, useEffect } = React;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const details = project.details || {};
  const config = window.PORTFOLIO_CONFIG;

  const handleActionClick = (type) => {
    if (type === "github") {
      const url = details.githubUrl || config.GITHUB_URL;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        onShowToast("GitHub repository link will be updated soon.");
      }
    } else if (type === "demo") {
      if (details.liveDemoUrl) {
        window.open(details.liveDemoUrl, "_blank", "noopener,noreferrer");
      } else {
        onShowToast("Live demo deployment is currently unavailable for this project.");
      }
    }
  };

  return h("div", { 
    className: "modal-backdrop open",
    onClick: (e) => { if (e.target === e.currentTarget) onClose(); },
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-project-title"
  },
    h("div", { className: "modal-dialog" },
      // Header
      h("div", { className: "modal-header" },
        h("div", { className: "modal-title-group" },
          h("h2", { id: "modal-project-title" }, project.name),
          project.subtitle && h("p", null, project.subtitle)
        ),
        h("button", {
          type: "button",
          className: "modal-close-btn",
          onClick: onClose,
          "aria-label": "Close project details modal"
        },
          window.PortfolioIcons.close({ size: 20 })
        )
      ),

      // Body Content
      h("div", { className: "modal-body" },
        // Overview Section
        h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "Overview"),
          h("p", { className: "modal-text" }, details.overview || project.shortDescription)
        ),

        // Problem & Solution
        (details.problem || details.solution) && h("div", { 
          style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" } 
        },
          details.problem && h("div", { className: "modal-section" },
            h("div", { className: "modal-section-title" }, "The Problem"),
            h("p", { className: "modal-text" }, details.problem)
          ),
          details.solution && h("div", { className: "modal-section" },
            h("div", { className: "modal-section-title" }, "The Solution"),
            h("p", { className: "modal-text" }, details.solution)
          )
        ),

        // Key Features
        project.features && project.features.length > 0 && h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "Key Features"),
          h("div", { className: "feature-check-list" },
            project.features.map((feat, fIdx) => 
              h("div", { key: fIdx, className: "feature-check-item" },
                window.PortfolioIcons.check({ size: 16 }),
                h("span", null, feat)
              )
            )
          )
        ),

        // Technologies Used
        project.technologies && project.technologies.length > 0 && h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "Technologies Used"),
          h("div", { className: "project-tech-tags", style: { margin: 0 } },
            project.technologies.map((tech, tIdx) => 
              h("span", { key: tIdx, className: "tech-tag", style: { fontSize: "0.8125rem", padding: "5px 12px" } }, tech)
            )
          )
        ),

        // My Role, Challenges & What I Learned
        h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "My Role"),
          h("p", { className: "modal-text" }, details.myRole || "More details coming soon.")
        ),

        h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "Challenges Overcome"),
          h("p", { className: "modal-text" }, details.challenges || "More details coming soon.")
        ),

        h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "What I Learned"),
          h("p", { className: "modal-text" }, details.whatILearned || "More details coming soon.")
        ),

        // Screenshots Gallery
        h("div", { className: "modal-section" },
          h("div", { className: "modal-section-title" }, "Screenshots & Interface"),
          details.screenshots && details.screenshots.length > 0 ? (
            h("div", { style: { display: "flex", flexDirection: "column", gap: "16px" } },
              details.screenshots.map((screen, sIdx) => 
                h("div", { key: sIdx, className: "modal-screenshot-box" },
                  h("img", { 
                    src: screen.src, 
                    alt: screen.alt || project.name,
                    loading: "lazy"
                  }),
                  screen.title && h("div", { 
                    style: { padding: "10px 14px", fontSize: "0.8125rem", color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)" } 
                  }, screen.title)
                )
              )
            )
          ) : (
            h("div", { 
              style: { 
                padding: "24px", 
                backgroundColor: "var(--bg-surface)", 
                borderRadius: "var(--radius-md)", 
                border: "1px dashed var(--border-medium)", 
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "0.875rem"
              } 
            },
              h("p", null, "Screenshot preview available in system records or coming soon.")
            )
          )
        )
      ),

      // Footer Actions
      h("div", { className: "modal-footer" },
        h("div", { className: "modal-footer-links" },
          // GitHub Button
          h("button", {
            type: "button",
            className: "btn btn-secondary btn-sm",
            onClick: () => handleActionClick("github")
          },
            window.PortfolioIcons.github({ size: 16 }),
            h("span", null, details.githubUrl ? "View Repository" : "GitHub (Unavailable)")
          ),
          // Live Demo Button
          h("button", {
            type: "button",
            className: "btn btn-secondary btn-sm",
            onClick: () => handleActionClick("demo")
          },
            window.PortfolioIcons.externalLink({ size: 16 }),
            h("span", null, details.liveDemoUrl ? "Live Demo" : "Live Demo (Unavailable)")
          )
        ),
        h("button", {
          type: "button",
          className: "btn btn-primary btn-sm",
          onClick: onClose
        }, "Close Details")
      )
    )
  );
};
