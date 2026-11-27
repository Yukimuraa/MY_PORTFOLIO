/**
 * =========================================================================
 * PROJECTS COMPONENT
 * =========================================================================
 * Section 5: Featured Projects grid with category filtering,
 * interactive card previews, and details trigger.
 */

window.Projects = function Projects({ onSelectProject, onShowToast }) {
  const { createElement: h, useState } = React;
  const projects = window.PORTFOLIO_DATA.projects;
  const config = window.PORTFOLIO_CONFIG;
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Systems", "Mobile"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleAction = (e, project, type) => {
    e.stopPropagation();
    if (type === "github") {
      const url = project.details?.githubUrl || config.GITHUB_URL;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        onShowToast(`GitHub link for "${project.name}" will be updated soon.`);
      }
    } else if (type === "demo") {
      if (project.details?.liveDemoUrl) {
        window.open(project.details.liveDemoUrl, "_blank", "noopener,noreferrer");
      } else {
        onShowToast(`Live demo for "${project.name}" is currently unavailable.`);
      }
    }
  };

  return h("section", { id: "projects", className: "section" },
    h("div", { className: "container" },
      // Header
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Portfolio Work"),
        h("h2", { className: "section-title" }, "Featured Projects"),
        h("p", { className: "section-subtitle" },
          "A selection of academic, personal, and practical information systems projects."
        )
      ),

      // Filter Buttons
      h("div", { className: "projects-filter-bar", role: "tablist", "aria-label": "Project categories" },
        categories.map(cat => 
          h("button", {
            key: cat,
            type: "button",
            role: "tab",
            "aria-selected": activeFilter === cat,
            className: `filter-btn ${activeFilter === cat ? "active" : ""}`,
            onClick: () => setActiveFilter(cat)
          }, cat)
        )
      ),

      // Grid
      h("div", { className: "projects-grid" },
        filteredProjects.map(project => {
          const imageSrc = project.fallbackImage || project.imagePath;

          return h("article", { 
            key: project.id, 
            className: "project-card",
            tabIndex: 0,
            onKeyDown: (e) => { if (e.key === "Enter") onSelectProject(project); }
          },
            // Thumbnail / Screenshot area
            h("div", { className: "project-thumbnail-wrap" },
              imageSrc ? (
                h("img", {
                  src: imageSrc,
                  alt: `${project.name} interface screenshot`,
                  className: "project-img",
                  loading: "lazy",
                  onError: (e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = "none";
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "flex";
                    }
                  }
                })
              ) : null,

              // Fallback container (shown if no image or on load error)
              h("div", { 
                className: "project-thumb-fallback",
                style: { display: imageSrc ? "none" : "flex" }
              },
                h("div", { className: "fallback-icon" },
                  project.category === "Mobile" 
                    ? window.PortfolioIcons.mobile({ size: 40 })
                    : window.PortfolioIcons.code({ size: 40 })
                ),
                h("div", { className: "fallback-title" }, project.name),
                h("span", { className: "fallback-badge" }, project.badge || project.category)
              ),

              // Overlay badge
              project.badge && h("span", { className: "project-badge-overlay" }, project.badge)
            ),

            // Card Body
            h("div", { className: "project-content" },
              h("h3", { className: "project-name" }, project.name),
              project.subtitle && h("div", { className: "project-subtitle" }, project.subtitle),
              h("p", { className: "project-desc" }, project.shortDescription),

              // Tech stack tags
              h("div", { className: "project-tech-tags" },
                project.technologies.map((t, idx) => 
                  h("span", { key: idx, className: "tech-tag" }, t)
                )
              ),

              // Action buttons
              h("div", { className: "project-actions" },
                h("button", {
                  type: "button",
                  className: "btn btn-detail btn-sm",
                  onClick: () => onSelectProject(project),
                  "aria-label": `View details for ${project.name}`
                },
                  h("span", null, "View Details")
                ),

                // Icon buttons for GitHub and Live Demo
                h("button", {
                  type: "button",
                  className: "btn btn-icon",
                  title: project.details?.githubUrl ? "View GitHub Repository" : "GitHub (Unavailable)",
                  onClick: (e) => handleAction(e, project, "github"),
                  "aria-label": `GitHub for ${project.name}`
                },
                  window.PortfolioIcons.github({ size: 16 })
                ),

                h("button", {
                  type: "button",
                  className: "btn btn-icon",
                  title: project.details?.liveDemoUrl ? "Open Live Demo" : "Live Demo (Unavailable)",
                  onClick: (e) => handleAction(e, project, "demo"),
                  "aria-label": `Live Demo for ${project.name}`
                },
                  window.PortfolioIcons.externalLink({ size: 16 })
                )
              )
            )
          );
        })
      )
    )
  );
};
