/**
 * =========================================================================
 * SOFT SKILLS COMPONENT
 * =========================================================================
 * Section 4: Professional interpersonal, problem-solving, and adaptability
 * capabilities essential for engineering and IT operations.
 */

window.SoftSkills = function SoftSkills() {
  const { createElement: h } = React;
  const softSkills = window.PORTFOLIO_DATA.softSkills;

  return h("section", { className: "section section-alt" },
    h("div", { className: "container" },
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Professional Attributes"),
        h("h2", { className: "section-title" }, "Soft Skills"),
        h("p", { className: "section-subtitle" },
          "Personal and professional strengths that guide my approach to team collaboration, problem solving, and work ethics."
        )
      ),

      h("div", { className: "soft-skills-grid" },
        softSkills.map((item, idx) => 
          h("div", { key: idx, className: "soft-skill-card" },
            h("div", { className: "soft-skill-icon-wrap" },
              window.PortfolioIcons[item.icon] ? window.PortfolioIcons[item.icon]({ size: 20 }) : null
            ),
            h("div", null,
              h("h3", { className: "soft-skill-name" }, item.name),
              h("p", { className: "soft-skill-desc" }, item.description)
            )
          )
        )
      )
    )
  );
};
