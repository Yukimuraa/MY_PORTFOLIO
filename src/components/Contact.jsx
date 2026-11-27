import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact = ({ config, onActionToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    if (config.EMAIL) {
      navigator.clipboard.writeText(config.EMAIL).then(() => {
        setCopied(true);
        onActionToast('Email address copied to clipboard!');
        setTimeout(() => setCopied(false), 3000);
      });
    } else {
      onActionToast('Email address will be configured in src/data/portfolio.js');
    }
  };

  const handleSocialClick = (type) => {
    if (type === 'linkedin') {
      if (config.LINKEDIN_URL) {
        window.open(config.LINKEDIN_URL, '_blank', 'noopener,noreferrer');
      } else {
        onActionToast('LinkedIn profile link will be configured in src/data/portfolio.js');
      }
    } else if (type === 'github') {
      if (config.GITHUB_URL) {
        window.open(config.GITHUB_URL, '_blank', 'noopener,noreferrer');
      } else {
        onActionToast('GitHub link will be configured in src/data/portfolio.js');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill out Name, Email, and Message before submitting.',
      });
      return;
    }

    const emailTarget = config.EMAIL || 'contact@example.com';
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Prepare mailto link
    const mailtoLink = `mailto:${emailTarget}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setStatusMessage({
      type: 'success',
      text: 'Opening your default email client... If it did not launch automatically, feel free to contact me directly using the email address on the left.',
    });
    onActionToast('Draft inquiry opened in your email app.');
  };

  return (
    <Section
      id="contact"
      tag="Get In Touch"
      title="Let's Work Together"
      subtitle="I'm currently open to entry-level opportunities in IT Support, IT Operations, Systems Administration, Web Development, and other technology-related roles. If you're looking for someone who is willing to learn, adaptable, and ready to contribute, I'd be happy to connect."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct channels and location */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-dark-800/90 border border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-dark-card space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">
              Direct Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Feel free to reach out directly via email or connect through LinkedIn:
            </p>

            {/* Email item */}
            <div
              onClick={handleCopyEmail}
              className="p-3.5 rounded-xl bg-dark-850 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase text-slate-400">
                    Email Address
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {config.EMAIL || 'Configure in portfolio.js'}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="text-slate-400 group-hover:text-cyan-400 p-1"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Item */}
            <div
              onClick={() => handleSocialClick('linkedin')}
              className="p-3.5 rounded-xl bg-dark-850 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase text-slate-400">
                    LinkedIn
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    linkedin.com/in/joemarie-damasing-8b2795317
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Item */}
            <div
              onClick={() => handleSocialClick('github')}
              className="p-3.5 rounded-xl bg-dark-850 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase text-slate-400">
                    GitHub
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    github.com/Yukimuraa
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location note */}
          <div className="bg-dark-800/90 border border-slate-800/90 rounded-2xl p-5 flex items-center gap-3.5 text-xs sm:text-sm text-slate-300">
            <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>
              Based in <strong>Negros Occidental, Philippines</strong>. Open to on-site, hybrid, and remote entry-level roles.
            </span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-dark-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-9 shadow-dark-card">
            {statusMessage && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm mb-5 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                    : 'bg-red-500/10 border border-red-500/30 text-red-300'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g., Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g., alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g., IT Support Opportunity / Portfolio Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-y"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={Send}
                className="w-full justify-center mt-2"
              >
                Send Message
              </Button>

              <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
                Note: This form prepares a draft message directly in your email client. No third-party data tracking or simulated backend storage is used.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
