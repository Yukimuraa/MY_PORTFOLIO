/**
 * =========================================================================
 * SKILLS COMPONENT
 * =========================================================================
 * Section 3: Technical skills categorized across Programming, Database,
 * Mobile, IT Support, and Tools. No percentage bars.
 */

window.Skills = function Skills() {
  const { createElement: h } = React;
  const categories = window.PORTFOLIO_DATA.skills;

  return h("section", { id: "skills", className: "section" },
    h("div", { className: "container" },
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Technical Capabilities"),
        h("h2", { className: "section-title" }, "Skills & Technologies"),
        h("p", { className: "section-subtitle" }, 
          "A comprehensive overview of programming languages, frameworks, system administration skills, and tools I use."
        )
      ),

      h("div", { className: "skills-grid" },
        categories.map((cat, idx) => 
          h("div", { key: idx, className: "skill-category-card" },
            h("div", { className: "category-card-header" },
              h("div", { className: "category-icon-box" },
                window.PortfolioIcons[cat.icon] ? window.PortfolioIcons[cat.icon]({ size: 22 }) : null
              ),
              h("h3", { className: "category-title" }, cat.category)
            ),
            h("p", { className: "category-desc" }, cat.description),
            h("div", { className: "skill-pill-list" },
              cat.items.map((skill, sIdx) => 
                h("div", { key: sIdx, className: "skill-pill" },
                  h("span", null, skill.name),
                  skill.level && h("span", { className: "skill-level-hint" }, `• ${skill.level}`)
                )
              )
            )
          )
        )
      )
    )
  );
};
