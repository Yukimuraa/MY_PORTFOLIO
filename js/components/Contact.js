/**
 * =========================================================================
 * CONTACT COMPONENT
 * =========================================================================
 * Section 11: Direct communication channels and a functional frontend
 * contact form with mailto fallback and copy-to-clipboard functionality.
 */

window.Contact = function Contact({ onShowToast }) {
  const { createElement: h, useState } = React;
  const config = window.PORTFOLIO_CONFIG;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({
        type: "info",
        text: "Please fill out all required fields before sending."
      });
      return;
    }

    const emailTarget = config.EMAIL || "contact@example.com";
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open mailto link
    const mailtoUrl = `mailto:${emailTarget}?subject=${subjectLine}&body=${bodyContent}`;
    window.location.href = mailtoUrl;

    setFeedback({
      type: "success",
      text: "Opening your default email client... If it doesn't open automatically, you can reach out directly via email or LinkedIn."
    });
    onShowToast("Draft message opened in your email client.");
  };

  const handleCopyEmail = () => {
    if (config.EMAIL) {
      navigator.clipboard.writeText(config.EMAIL)
        .then(() => onShowToast("Email address copied to clipboard!"))
        .catch(() => onShowToast(`Email: ${config.EMAIL}`));
    } else {
      onShowToast("Email address will be configured soon in js/config.js");
    }
  };

  const handleDirectLink = (type) => {
    if (type === "linkedin") {
      if (config.LINKEDIN_URL) {
        window.open(config.LINKEDIN_URL, "_blank", "noopener,noreferrer");
      } else {
        onShowToast("LinkedIn URL will be configured soon in js/config.js");
      }
    } else if (type === "github") {
      if (config.GITHUB_URL) {
        window.open(config.GITHUB_URL, "_blank", "noopener,noreferrer");
      } else {
        onShowToast("GitHub URL will be configured soon in js/config.js");
      }
    }
  };

  return h("section", { id: "contact", className: "section" },
    h("div", { className: "container" },
      // Header
      h("div", { className: "section-header" },
        h("span", { className: "section-tag" }, "Get In Touch"),
        h("h2", { className: "section-title" }, "Let's Work Together"),
        h("p", { className: "section-subtitle" },
          "I'm currently open to entry-level opportunities in IT Support, IT Operations, Systems Administration, Web Development, and other technology-related roles. If you're looking for someone who is willing to learn, adaptable, and ready to contribute, I'd be happy to connect."
        )
      ),

      h("div", { className: "contact-grid" },
        // Left Column: Direct Links & Info
        h("div", { className: "contact-info-col" },
          h("div", { className: "contact-direct-card" },
            h("h3", { style: { fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)" } }, 
              "Direct Channels"
            ),
            h("p", { style: { fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: "1.5" } },
              "Feel free to connect or send a message directly through any of these platforms:"
            ),

            // Email Button / Row
            h("div", { 
              className: "contact-link-row",
              style: { cursor: "pointer" },
              onClick: handleCopyEmail,
              tabIndex: 0,
              onKeyDown: (e) => { if (e.key === "Enter") handleCopyEmail(); }
            },
              h("div", { className: "contact-link-icon" },
                window.PortfolioIcons.mail({ size: 20 })
              ),
              h("div", { style: { flexGrow: 1 } },
                h("div", { className: "contact-link-label" }, "Email Address"),
                h("div", { className: "contact-link-val" }, config.EMAIL || "Click to copy / configure in js/config.js")
              )
            ),

            // LinkedIn Row
            h("div", { 
              className: "contact-link-row",
              style: { cursor: "pointer" },
              onClick: () => handleDirectLink("linkedin"),
              tabIndex: 0,
              onKeyDown: (e) => { if (e.key === "Enter") handleDirectLink("linkedin"); }
            },
              h("div", { className: "contact-link-icon" },
                window.PortfolioIcons.linkedin({ size: 20 })
              ),
              h("div", { style: { flexGrow: 1 } },
                h("div", { className: "contact-link-label" }, "LinkedIn Profile"),
                h("div", { className: "contact-link-val" }, config.LINKEDIN_URL ? "Connect on LinkedIn" : "Configure in js/config.js")
              ),
              window.PortfolioIcons.externalLink({ size: 16 })
            ),

            // GitHub Row
            h("div", { 
              className: "contact-link-row",
              style: { cursor: "pointer" },
              onClick: () => handleDirectLink("github"),
              tabIndex: 0,
              onKeyDown: (e) => { if (e.key === "Enter") handleDirectLink("github"); }
            },
              h("div", { className: "contact-link-icon" },
                window.PortfolioIcons.github({ size: 20 })
              ),
              h("div", { style: { flexGrow: 1 } },
                h("div", { className: "contact-link-label" }, "GitHub Profile"),
                h("div", { className: "contact-link-val" }, config.GITHUB_URL ? "View GitHub Profile" : "Configure in js/config.js")
              ),
              window.PortfolioIcons.externalLink({ size: 16 })
            )
          ),

          // Location badge card
          h("div", { className: "highlight-card" },
            h("div", { className: "highlight-header" },
              h("span", { className: "highlight-tag" }, "Current Base"),
              window.PortfolioIcons.pin({ size: 18 })
            ),
            h("h4", { className: "highlight-primary" }, "Negros Occidental, Philippines"),
            h("p", { className: "highlight-secondary" }, "Open to on-site, hybrid, and remote junior/entry-level positions.")
          )
        ),

        // Right Column: Frontend Contact Form
        h("div", { className: "contact-form-wrap" },
          feedback && h("div", { className: `form-feedback ${feedback.type}` }, feedback.text),

          h("form", { onSubmit: handleSubmit, noValidate: true },
            // Name
            h("div", { className: "form-group" },
              h("label", { htmlFor: "contact-name", className: "form-label" }, "Your Name *"),
              h("input", {
                id: "contact-name",
                name: "name",
                type: "text",
                required: true,
                className: "form-control",
                placeholder: "e.g., Jane Santos",
                value: formData.name,
                onChange: handleChange
              })
            ),

            // Email
            h("div", { className: "form-group" },
              h("label", { htmlFor: "contact-email", className: "form-label" }, "Your Email *"),
              h("input", {
                id: "contact-email",
                name: "email",
                type: "email",
                required: true,
                className: "form-control",
                placeholder: "e.g., jane@company.com",
                value: formData.email,
                onChange: handleChange
              })
            ),

            // Subject
            h("div", { className: "form-group" },
              h("label", { htmlFor: "contact-subject", className: "form-label" }, "Subject"),
              h("input", {
                id: "contact-subject",
                name: "subject",
                type: "text",
                className: "form-control",
                placeholder: "e.g., Job Opportunity / IT Support Role",
                value: formData.subject,
                onChange: handleChange
              })
            ),

            // Message
            h("div", { className: "form-group" },
              h("label", { htmlFor: "contact-message", className: "form-label" }, "Message *"),
              h("textarea", {
                id: "contact-message",
                name: "message",
                required: true,
                className: "form-control",
                placeholder: "Write your message or inquiry here...",
                value: formData.message,
                onChange: handleChange
              })
            ),

            // Submit Button
            h("button", {
              type: "submit",
              className: "btn btn-primary",
              style: { width: "100%" }
            },
              window.PortfolioIcons.mail({ size: 18 }),
              h("span", null, "Send Message")
            ),

            h("p", { className: "form-notice" },
              "Note: This form pre-fills an email message directly to Joemarie Damasing via your mail client. No backend email tracking or third-party data collection is involved."
            )
          )
        )
      )
    )
  );
};
