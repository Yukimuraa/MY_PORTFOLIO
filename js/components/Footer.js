/**
 * =========================================================================
 * FOOTER COMPONENT
 * =========================================================================
 * Section 12: Professional footer with branding, position statement,
 * social links, back-to-top button, and copyright notice.
 */

window.Footer = function Footer({ onShowToast, onNavigate }) {
  const { createElement: h, useState, useEffect } = React;
  const config = window.PORTFOLIO_CONFIG;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLink = (type) => {
    if (type === "github") {
      if (config.GITHUB_URL) window.open(config.GITHUB_URL, "_blank", "noopener,noreferrer");
      else onShowToast("GitHub URL will be configured in js/config.js");
    } else if (type === "linkedin") {
      if (config.LINKEDIN_URL) window.open(config.LINKEDIN_URL, "_blank", "noopener,noreferrer");
      else onShowToast("LinkedIn URL will be configured in js/config.js");
    } else if (type === "email") {
      if (config.EMAIL) window.location.href = `mailto:${config.EMAIL}`;
      else onShowToast("Email address will be configured in js/config.js");
    }
  };

  return h("footer", { className: "footer" },
    h("div", { className: "container" },
      // Top row
      h("div", { className: "footer-top" },
        h("div", { className: "footer-brand" },
          h("h4", null, "JOEMARIE D. DAMASING"),
          h("p", null, "BS Information Systems Graduate"),
          h("p", { style: { color: "var(--accent-light)", marginTop: "2px" } }, 
            "IT Support • Web Development • Information Systems"
          )
        ),

        // Social Links
        h("div", { className: "footer-social-links" },
          h("button", {
            type: "button",
            className: "btn btn-icon",
            onClick: () => handleLink("github"),
            "aria-label": "Joemarie Damasing GitHub"
          },
            window.PortfolioIcons.github({ size: 18 })
          ),
          h("button", {
            type: "button",
            className: "btn btn-icon",
            onClick: () => handleLink("linkedin"),
            "aria-label": "Joemarie Damasing LinkedIn"
          },
            window.PortfolioIcons.linkedin({ size: 18 })
          ),
          h("button", {
            type: "button",
            className: "btn btn-icon",
            onClick: () => handleLink("email"),
            "aria-label": "Send Email to Joemarie Damasing"
          },
            window.PortfolioIcons.mail({ size: 18 })
          )
        )
      ),

      // Bottom row
      h("div", { className: "footer-bottom" },
        h("div", null, "© 2026 Joemarie D. Damasing. All rights reserved."),
        h("div", { style: { display: "flex", gap: "16px" } },
          h("a", { 
            href: "#home", 
            onClick: (e) => { e.preventDefault(); scrollToTop(); },
            style: { color: "var(--text-muted)", transition: "color 0.2s" }
          }, "Back to Top ↑")
        )
      )
    ),

    // Floating Back To Top Button
    h("button", {
      type: "button",
      className: `back-to-top ${showBackToTop ? "visible" : ""}`,
      onClick: scrollToTop,
      "aria-label": "Scroll to top of page"
    },
      window.PortfolioIcons.arrowUp({ size: 20 })
    )
  );
};
