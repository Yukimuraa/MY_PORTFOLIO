/**
 * =========================================================================
 * NAVBAR COMPONENT
 * =========================================================================
 * Sticky navigation bar with mobile hamburger menu, active section tracking,
 * and direct resume download action.
 */

window.Navbar = function Navbar({ activeSection, onNavigate, onDownloadResume }) {
  const { createElement: h, useState, useEffect } = React;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return h("header", { className: `navbar ${isScrolled ? "scrolled" : ""}` },
    h("div", { className: "container navbar-container" },
      // Brand / Name
      h("a", { 
        href: "#home", 
        className: "nav-brand",
        onClick: (e) => handleLinkClick(e, "home"),
        "aria-label": "Joemarie D. Damasing - Return to Home"
      },
        h("span", { className: "brand-badge" }, "JD"),
        h("span", null, "JOEMARIE D. DAMASING")
      ),

      // Desktop & Mobile Navigation Links
      h("nav", { 
        className: `nav-menu ${mobileMenuOpen ? "open" : ""}`,
        "aria-label": "Primary Navigation"
      },
        navItems.map(item => 
          h("a", {
            key: item.id,
            href: `#${item.id}`,
            className: `nav-link ${activeSection === item.id ? "active" : ""}`,
            onClick: (e) => handleLinkClick(e, item.id),
            "aria-current": activeSection === item.id ? "page" : undefined
          }, item.label)
        ),
        // Resume button inside mobile menu
        h("button", {
          type: "button",
          className: "btn btn-primary btn-sm mobile-resume-btn",
          style: { marginTop: "12px", display: mobileMenuOpen ? "flex" : "none" },
          onClick: onDownloadResume
        },
          window.PortfolioIcons.download({ size: 16 }),
          h("span", null, "Download Resume")
        )
      ),

      // Actions (Right side: Resume button & Mobile Toggle)
      h("div", { className: "nav-actions" },
        h("button", {
          type: "button",
          className: "btn btn-primary btn-sm",
          onClick: onDownloadResume,
          "aria-label": "Download Joemarie Damasing's Resume"
        },
          window.PortfolioIcons.download({ size: 16 }),
          h("span", null, "Download Resume")
        ),
        h("button", {
          type: "button",
          className: "nav-toggle",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          "aria-label": mobileMenuOpen ? "Close navigation menu" : "Open navigation menu",
          "aria-expanded": mobileMenuOpen
        },
          mobileMenuOpen 
            ? window.PortfolioIcons.close({ size: 22 })
            : window.PortfolioIcons.menu({ size: 22 })
        )
      )
    )
  );
};
