/**
 * =========================================================================
 * EDUCATION COMPONENT
 * =========================================================================
 * Section 7: Formal academic credentials, curriculum foundations,
 * and key study domains.
 */

window.Education = function Education() {
  const { createElement: h } = React;
  const edu = window.PORTFOLIO_DATA.education;

  return h("section", { id: "education", className: "section" },
    h("div", { className: "container" },
      // Header
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Academic Foundation"),
        h("h2", { className: "section-title" }, "Education"),
        h("p", { className: "section-subtitle" },
          "My formal degree program combining technical software engineering, database modeling, and enterprise information systems."
        )
      ),

      // Education Card
      h("div", { className: "education-container" },
        h("div", { className: "education-card" },
          h("div", { className: "edu-header" },
            h("div", null,
              h("h3", { className: "edu-degree" }, edu.degree),
              h("div", { className: "edu-school" }, edu.school),
              h("div", { style: { fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "4px" } }, edu.location)
            ),
            h("span", { className: "edu-period" }, edu.period)
          ),

          h("p", { className: "edu-desc" }, edu.description),

          // Relevant Areas
          h("div", null,
            h("div", { className: "edu-areas-label" }, "Relevant Study Areas"),
            h("div", { className: "edu-areas-list" },
              edu.relevantAreas.map((area, idx) => 
                h("div", { key: idx, className: "edu-area-tag" }, area)
              )
            )
          )
        )
      )
    )
  );
};
