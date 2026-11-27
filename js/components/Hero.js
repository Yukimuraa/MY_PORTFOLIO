/**
 * =========================================================================
 * HERO COMPONENT
 * =========================================================================
 * Professional hero section showcasing degree, positioning, quick CTAs,
 * and a technical profile card.
 */

window.Hero = function Hero({ onNavigate, onDownloadResume }) {
  const { createElement: h } = React;
  const data = window.PORTFOLIO_DATA.personal;
  const config = window.PORTFOLIO_CONFIG;

  return h("section", { id: "home", className: "hero-section" },
    h("div", { className: "container" },
      h("div", { className: "hero-grid" },
        // Left Column: Introduction & CTAs
        h("div", { className: "hero-content" },
          // Eyebrow badges
          h("div", { className: "hero-eyebrow-row" },
            h("span", { className: "section-tag", style: { marginBottom: 0 } }, "BS INFORMATION SYSTEMS GRADUATE"),
            config.AVAILABLE_FOR_WORK && h("span", { className: "badge badge-status" },
              h("span", { className: "status-dot" }),
              h("span", null, config.STATUS_TEXT)
            )
          ),

          // Main Heading
          h("h1", { className: "hero-title" },
            "Hi, I'm Joemarie.",
            h("span", { className: "hero-title-accent" }, "I build practical digital solutions.")
          ),

          // Supporting Bio Text
          h("p", { className: "hero-bio" }, data.heroBio),

          // Action Buttons
          h("div", { className: "hero-actions" },
            h("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: () => onNavigate("projects"),
              "aria-label": "View Featured Projects"
            },
              h("span", null, "View My Projects"),
              window.PortfolioIcons.arrowRight({ size: 18 })
            ),
            h("button", {
              type: "button",
              className: "btn btn-secondary",
              onClick: onDownloadResume,
              "aria-label": "Download Joemarie Damasing's Resume"
            },
              window.PortfolioIcons.download({ size: 18 }),
              h("span", null, "Download Resume")
            )
          ),

          // Meta Information
          h("div", { className: "hero-meta" },
            h("div", { className: "hero-meta-item" },
              window.PortfolioIcons.pin({ size: 16 }),
              h("span", null, data.location)
            ),
            h("div", { className: "hero-meta-item" },
              window.PortfolioIcons.cpu({ size: 16 }),
              h("span", null, "IT Support • Web Development • Information Systems")
            )
          )
        ),

        // Right Column: Technical Specification Card
        h("div", { className: "hero-card" },
          h("div", { className: "card-profile-header" },
            h("div", { className: "profile-avatar-wrap" }, "JD"),
            h("div", { className: "profile-info" },
              h("h3", null, data.name),
              h("p", null, "Carlos Hilado Memorial State University"),
              h("p", { style: { color: "var(--accent-light)", fontWeight: 600, marginTop: "2px" } }, "Class of 2026")
            )
          ),

          h("div", { className: "profile-specs-grid" },
            h("div", { className: "spec-box" },
              h("div", { className: "spec-label" }, "Degree Program"),
              h("div", { className: "spec-val" }, "BS Info Systems")
            ),
            h("div", { className: "spec-box" },
              h("div", { className: "spec-label" }, "IT Experience"),
              h("div", { className: "spec-val" }, "COMELEC Intern")
            ),
            h("div", { className: "spec-box" },
              h("div", { className: "spec-label" }, "Primary Stack"),
              h("div", { className: "spec-val" }, "PHP • MySQL • React")
            ),
            h("div", { className: "spec-box" },
              h("div", { className: "spec-label" }, "Mobile Dev"),
              h("div", { className: "spec-val" }, "Flutter • Dart")
            )
          ),

          h("div", { className: "profile-terminal-banner" },
            h("span", null, "> status: ready_for_deployment"),
            h("span", { className: "terminal-indicator" })
          )
        )
      )
    )
  );
};
