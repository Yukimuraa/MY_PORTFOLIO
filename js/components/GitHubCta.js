/**
 * =========================================================================
 * GITHUB & RESUME CTA COMPONENTS
 * =========================================================================
 * Sections 9 & 10: Clear, configurable calls-to-action for exploring source
 * code repositories and downloading Joemarie's curriculum vitae.
 */

window.GitHubCta = function GitHubCta({ onShowToast }) {
  const { createElement: h } = React;
  const config = window.PORTFOLIO_CONFIG;

  const handleClick = () => {
    if (config.GITHUB_URL) {
      window.open(config.GITHUB_URL, "_blank", "noopener,noreferrer");
    } else {
      onShowToast("GitHub profile link will be configured soon in js/config.js");
    }
  };

  return h("div", { className: "cta-banner-card" },
    h("div", { className: "cta-icon-box" },
      window.PortfolioIcons.github({ size: 28 })
    ),
    h("h3", { className: "cta-heading" }, "Explore My Code"),
    h("p", { className: "cta-text" },
      "I use GitHub to document and share my development projects, experiments, and learning progress."
    ),
    h("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: handleClick
    },
      window.PortfolioIcons.github({ size: 18 }),
      h("span", null, "Visit My GitHub")
    )
  );
};
