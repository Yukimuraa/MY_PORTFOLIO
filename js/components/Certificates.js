/**
 * =========================================================================
 * CERTIFICATES COMPONENT
 * =========================================================================
 * Section 8: Professional certifications, technical training credentials,
 * and coursework badges.
 */

window.Certificates = function Certificates({ onShowToast }) {
  const { createElement: h } = React;
  const certificates = window.PORTFOLIO_DATA.certificates;

  const handleCertificateClick = (cert) => {
    onShowToast(`Certificate verification for "${cert.title}" available upon request.`);
  };

  return h("section", { id: "certificates", className: "section section-alt" },
    h("div", { className: "container" },
      // Header
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Credentials"),
        h("h2", { className: "section-title" }, "Certificates & Training"),
        h("p", { className: "section-subtitle" },
          "Recognized certifications and specialized coursework in data analysis, databases, web development, and digital measurement."
        )
      ),

      // Certificates Grid
      h("div", { className: "certificates-grid" },
        certificates.map(cert => 
          h("div", { 
            key: cert.id, 
            className: "certificate-card",
            tabIndex: 0,
            onClick: () => handleCertificateClick(cert),
            onKeyDown: (e) => { if (e.key === "Enter") handleCertificateClick(cert); }
          },
            // Top Row
            h("div", { className: "cert-top-row" },
              h("div", { className: "cert-icon-wrap" },
                window.PortfolioIcons.award({ size: 22 })
              ),
              h("span", { className: "cert-badge" }, cert.badge)
            ),

            // Title & Issuer
            h("h3", { className: "cert-title" }, cert.title),
            h("div", { className: "cert-issuer" }, cert.issuer),
            h("p", { style: { fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.5" } },
              cert.description
            ),

            // Date & Status
            h("div", { className: "cert-date" },
              h("span", null, cert.date),
              h("span", { style: { color: "var(--status-available)", fontSize: "0.75rem", fontWeight: 600 } },
                `✓ ${cert.status}`
              )
            )
          )
        )
      )
    )
  );
};
