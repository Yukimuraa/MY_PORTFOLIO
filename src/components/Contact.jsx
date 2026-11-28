import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

const displayUrl = (url = '') => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export const Contact = ({ config, personalInfo, onActionToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    if (!config.EMAIL) {
      onActionToast('Email address will be configured in src/data/portfolio.js');
      return;
    }
    navigator.clipboard.writeText(config.EMAIL).then(() => {
      setCopied(true);
      onActionToast('Email address copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: 'error', text: 'Please fill out Name, Email, and Message before submitting.' });
      return;
    }

    const emailTarget = config.EMAIL || 'contact@example.com';
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${emailTarget}?subject=${subject}&body=${body}`;

    setStatusMessage({
      type: 'success',
      text: 'Opening your default email client... If it did not launch automatically, feel free to contact me directly using the email address listed here.',
    });
    onActionToast('Draft inquiry opened in your email app.');
  };

  const channels = [
    config.LINKEDIN_URL && { label: 'LinkedIn', value: displayUrl(config.LINKEDIN_URL), href: config.LINKEDIN_URL, icon: Linkedin },
    config.GITHUB_URL && { label: 'GitHub', value: displayUrl(config.GITHUB_URL), href: config.GITHUB_URL, icon: Github },
  ].filter(Boolean);

  return (
    <Section
      id="contact"
      index="09"
      tag="contact"
      title="Let's Work Together"
      subtitle="I'm currently open to entry-level opportunities in IT Support, IT Operations, Systems Administration, Web Development, and other technology-related roles. If you're looking for someone who is willing to learn, adaptable, and ready to contribute, I'd be happy to connect."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Direct channels */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4 text-left transition-colors hover:border-line-strong"
          >
            <span className="flex min-w-0 items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-ink-subtle" aria-hidden="true" />
              <span className="min-w-0">
                <span className="eyebrow block">Email</span>
                <span className="mt-1 block truncate text-sm font-medium text-ink">
                  {config.EMAIL || 'Configure in portfolio.js'}
                </span>
              </span>
            </span>
            <span className="shrink-0 text-ink-subtle group-hover:text-ink" aria-label="Copy email">
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
            </span>
          </button>

          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-ink-subtle" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="eyebrow block">{label}</span>
                  <span className="mt-1 block truncate text-sm font-medium text-ink">{value}</span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-subtle transition-colors group-hover:text-ink" aria-hidden="true" />
            </a>
          ))}

          <p className="flex items-start gap-3 px-1 pt-3 text-sm leading-relaxed text-ink-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle" aria-hidden="true" />
            <span>
              Based in <span className="font-medium text-ink">{personalInfo.location}</span>. Open to on-site, hybrid, and
              remote entry-level roles.
            </span>
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          {statusMessage && (
            <div
              role="alert"
              className={`mb-5 rounded-lg border p-3.5 text-sm ${
                statusMessage.type === 'success'
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                  : 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300'
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name <span className="text-ink-subtle">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email <span className="text-ink-subtle">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-ink">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="IT Support Opportunity / Portfolio Inquiry"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                Message <span className="text-ink-subtle">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="form-input resize-y"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full">
              Send Message
            </Button>

            <p className="text-center text-xs leading-relaxed text-ink-subtle">
              This form prepares a draft message in your email client. No third-party tracking or backend storage is used.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};
