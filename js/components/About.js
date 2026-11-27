/**
 * =========================================================================
 * ABOUT COMPONENT
 * =========================================================================
 * Section 2: Detailed professional background, academic foundation,
 * and three structured highlight cards.
 */

window.About = function About() {
  const { createElement: h } = React;
  const personal = window.PORTFOLIO_DATA.personal;

  return h("section", { id: "about", className: "section section-alt" },
    h("div", { className: "container" },
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Background"),
        h("h2", { className: "section-title" }, personal.aboutHeading)
      ),

      h("div", { className: "about-grid" },
        // Narrative text column
        h("div", { className: "about-text-content" },
          personal.aboutParagraphs.map((para, idx) => 
            h("p", { key: idx }, para)
          )
        ),

        // Three Highlight Cards Column
        h("div", { className: "about-highlights-col" },
          personal.highlights.map((item, idx) => 
            h("div", { key: idx, className: "highlight-card" },
              h("div", { className: "highlight-header" },
                h("span", { className: "highlight-tag" }, item.title),
                h("div", { className: "highlight-icon-wrap" },
                  window.PortfolioIcons[item.icon] ? window.PortfolioIcons[item.icon]({ size: 18 }) : null
                )
              ),
              h("h3", { className: "highlight-primary" }, item.primary),
              h("p", { className: "highlight-secondary" }, item.secondary),
              h("span", { className: "highlight-meta" }, item.meta)
            )
          )
        )
      )
    )
  );
};
