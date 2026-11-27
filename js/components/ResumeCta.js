/**
 * =========================================================================
 * RESUME CTA COMPONENT
 * =========================================================================
 * Section 10: Call to action inviting recruiters and hiring managers
 * to download Joemarie's curriculum vitae.
 */

window.ResumeCta = function ResumeCta({ onDownloadResume }) {
  const { createElement: h } = React;

  return h("div", { className: "cta-banner-card" },
    h("div", { className: "cta-icon-box" },
      window.PortfolioIcons.download({ size: 28 })
    ),
    h("h3", { className: "cta-heading" }, "Interested in my background?"),
    h("p", { className: "cta-text" },
      "Download my resume to learn more about my education, experience, technical skills, and projects."
    ),
    h("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: onDownloadResume
    },
      window.PortfolioIcons.download({ size: 18 }),
      h("span", null, "Download Resume")
    )
  );
};
