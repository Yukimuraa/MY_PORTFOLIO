/**
 * =========================================================================
 * EXPERIENCE COMPONENT
 * =========================================================================
 * Section 6: Professional IT support internship and institutional experience
 * rendered as a structured timeline.
 */

window.Experience = function Experience() {
  const { createElement: h } = React;
  const experiences = window.PORTFOLIO_DATA.experiences;

  return h("section", { id: "experience", className: "section section-alt" },
    h("div", { className: "container" },
      // Header
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Career History"),
        h("h2", { className: "section-title" }, "Experience"),
        h("p", { className: "section-subtitle" },
          "Practical experience in technical operations, IT support, hardware deployment, and administrative workflows."
        )
      ),

      // Timeline
      h("div", { className: "timeline" },
        experiences.map(exp => 
          h("div", { key: exp.id, className: "timeline-item" },
            h("div", { className: "timeline-marker" }),
            h("div", { className: "timeline-card" },
              // Header
              h("div", { className: "timeline-header" },
                h("div", null,
                  h("h3", { className: "timeline-role-title" }, exp.position),
                  h("div", { className: "timeline-company" }, 
                    exp.company, 
                    exp.department && ` — ${exp.department}`
                  )
                ),
                h("div", { style: { display: "flex", gap: "8px", alignItems: "center" } },
                  exp.highlight && h("span", { className: "badge" }, exp.highlight),
                  h("span", { className: "timeline-period-badge" }, exp.period)
                )
              ),

              // Description
              h("p", { className: "timeline-desc" }, exp.description),

              // Responsibilities List
              h("div", { className: "responsibilities-list" },
                exp.responsibilities.map((resp, rIdx) => 
                  h("div", { key: rIdx, className: "resp-item" },
                    h("span", { className: "resp-bullet" }),
                    h("span", null, resp)
                  )
                )
              ),

              // Optional real system screenshot preview (e.g. COMELEC QMS)
              exp.imageShowcase && h("div", { className: "timeline-image-preview" },
                h("img", {
                  src: exp.imageShowcase.src,
                  alt: exp.imageShowcase.title,
                  loading: "lazy"
                }),
                h("div", { className: "preview-caption" },
                  h("strong", null, exp.imageShowcase.title),
                  h("span", null, ` • ${exp.imageShowcase.caption}`)
                )
              ),

              // Key skill tags
              exp.keySkills && h("div", { className: "project-tech-tags", style: { marginTop: "16px", marginBottom: 0 } },
                exp.keySkills.map((sk, sIdx) => 
                  h("span", { key: sIdx, className: "tech-tag" }, sk)
                )
              )
            )
          )
        )
      )
    )
  );
};
