import React from 'react';

/**
 * Authentic, sharp vector brand logos for the Skills & Technologies section.
 * Optimized for 32px-40px presentation with exact brand colors and geometry.
 */

// 1. PHP
export const PhpIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
    <path
      d="M37.5 73.8h-7.6l4.7-19.6h12.5c4.7 0 7.8 2.4 6.8 6.7-1 4.2-4.9 6.8-9.3 6.8h-5.2l-1.9 6.1zm5.2-10.2h3.9c2.3 0 4.1-1.1 4.5-2.7.4-1.6-.7-2.7-3.1-2.7h-3.7l-1.6 5.4zm23.6 10.2h-7.5l8.1-33.8h7.5l-3.3 14.2h10.4c4.7 0 7.8 2.4 6.8 6.7-1 4.2-4.9 6.8-9.3 6.8h-9.4l-3.3 12.9zm6.6-17h3.9c2.3 0 4.1-1.1 4.5-2.7.4-1.6-.7-2.7-3.1-2.7h-3.7l-1.6 5.4zm30.3 17h-7.6l4.7-19.6h12.5c4.7 0 7.8 2.4 6.8 6.7-1 4.2-4.9 6.8-9.3 6.8h-5.2l-1.9 6.1zm5.2-10.2h3.9c2.3 0 4.1-1.1 4.5-2.7.4-1.6-.7-2.7-3.1-2.7h-3.7l-1.6 5.4z"
      fill="#FFFFFF"
    />
  </svg>
);

// 2. Laravel
export const LaravelIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M246.5 67.5c-.8-1.5-2.2-2.6-3.8-3.1L183.1 47c-2-.6-4.1-.1-5.6 1.3L135 83.1l-42.5-12.7c-2-.6-4.1-.1-5.6 1.3L8.5 137.9c-1.8 1.5-2.7 3.8-2.5 6.1s1.4 4.3 3.4 5.2l59.6 28.3 12.3 69.3c.4 2.2 1.9 4 4 4.8 2.1.8 4.5.4 6.2-.9l52.1-41.7 49.3 23.4c1.2.6 2.6.8 3.9.6s2.5-.8 3.5-1.7l50.3-48.4c1.7-1.6 2.6-3.9 2.4-6.3L246.5 67.5zm-59.3-5.2l44.3 12.1-40.4 34.6-43.7-12 39.8-34.7zm-96.1 27l38.8 11.6-40.3 34.7-39.7-11.9 41.2-34.4zm-71 52.8l43.8-36.6 39.7 11.9-44.6 38.3-38.9-13.6zm63.4 83.3l-10-56.5 40.8 14.3-30.8 42.2zm48.8-39.3l-45.2-15.8 45.4-39 44.9 15.7-45.1 39.1zm52.7-45.5l-44.9-15.7 40.5-34.7 44.3 12.2-39.9 38.2z"
      fill="#FF2D20"
    />
  </svg>
);

// 3. React
export const ReactIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// 4. JavaScript
export const JavaScriptIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#F7DF1E" />
    <path
      d="M15.4 36.4c.8.6 1.8 1 3 1 1.8 0 3-1 3-2.8v-13.2h4v13.2c0 4-2.6 6.2-6.6 6.2-2.2 0-4.2-.8-5.4-1.8l2-2.6zm13.6 4.4c1.2.8 3 1.4 4.8 1.4 2.6 0 4.4-1.4 4.4-3.4 0-2-1.4-3-4.2-4.2-3.2-1.4-5.2-3-5.2-6 0-3.2 2.6-5.6 6.4-5.6 2 0 3.8.6 5 1.4l-1.4 3.2c-1-.6-2.2-1.2-3.6-1.2-2 0-3.2 1.2-3.2 2.6 0 1.8 1.4 2.6 4.4 3.8 3.4 1.4 5.2 3.4 5.2 6.4 0 3.6-2.8 6-7.2 6-2.4 0-4.6-.6-6-1.6l1.4-2.8z"
      fill="#000000"
    />
  </svg>
);

// 5. HTML5
export const Html5Icon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.2 2L4.7 19.3 12 21.3l7.3-2L20.8 2H3.2z" fill="#E34F26" />
    <path d="M12 3.6v16l5.9-1.6 1.2-14.4H12z" fill="#EF652A" />
    <path d="M12 7.7H7.7l.2 2.3H12v-2.3zm0 4.6H7.9l.2 2.4H12v-2.4zm0 4.7l-.1 0-2.2-.6-.1-1.6H7.4l.3 3.2 4.3 1.2V17z" fill="#EBEBEB" />
    <path d="M12 7.7v2.3h4.1l-.3 3.5-.1 1.1H12v2.4h3.6l-.4 4.1-3.2.9v2.4l5.3-1.5.7-7.7.1-1.2.3-3.9H12z" fill="#FFFFFF" />
  </svg>
);

// 6. CSS3
export const Css3Icon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.2 2L4.7 19.3 12 21.3l7.3-2L20.8 2H3.2z" fill="#1572B6" />
    <path d="M12 3.6v16l5.9-1.6 1.2-14.4H12z" fill="#33A9DC" />
    <path d="M12 7.7H7.7l.2 2.3H12v-2.3zm0 4.6H7.9l.2 2.4H12v-2.4zm0 4.7l-.1 0-2.2-.6-.1-1.6H7.4l.3 3.2 4.3 1.2V17z" fill="#EBEBEB" />
    <path d="M12 7.7v2.3h4.1l-.2 2.3H12v2.3h3.8l-.4 4.2-3.4.9v2.4l5.3-1.5.1-1.3.6-6.6.3-4.7H12z" fill="#FFFFFF" />
  </svg>
);

// 7. Python
export const PythonIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.9 2c-3.1 0-5 .7-5 2.5v2.2h5.1v.7H4.5C2.6 7.4 2 8.7 2 11.2s1.4 3.7 3.5 3.7h1.4v-2c0-1.7 1.4-3.1 3.1-3.1h4.9c.7 0 1.2-.5 1.2-1.2V4.5C16.1 2.7 14.5 2 11.9 2zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
      fill="#3776AB"
    />
    <path
      d="M12.1 22c3.1 0 5-.7 5-2.5v-2.2H12v-.7h7.5c1.9 0 2.5-1.3 2.5-3.8s-1.4-3.7-3.5-3.7h-1.4v2c0 1.7-1.4 3.1-3.1 3.1H9.1c-.7 0-1.2.5-1.2 1.2v4.3c0 1.8 1.6 2.5 4.2 2.5zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
      fill="#FFD43B"
    />
  </svg>
);

// 8. SQL
export const SqlIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="11" rx="17" ry="5.5" fill="#00758F" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="2.5" />
    <path d="M7 11v11c0 3.2 7.6 5.8 17 5.8s17-2.6 17-5.8V11" stroke="#38BDF8" strokeWidth="2.5" />
    <path d="M7 22v11c0 3.2 7.6 5.8 17 5.8s17-2.6 17-5.8V22" stroke="#38BDF8" strokeWidth="2.5" />
    <rect x="12" y="19" width="24" height="13" rx="3.5" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
    <text x="24" y="28.5" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.8" textAnchor="middle">
      SQL
    </text>
  </svg>
);

// 9. MySQL
export const MySqlIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M42.2 24.3c-2.4-3.5-6.8-5.3-11.2-4.6-2.6-3.8-7.3-6.1-12-5.7-1.3.1-2.6.4-3.8.9C13.4 9.4 8.7 6.2 4.1 6.5c-.4 0-.8.3-.9.7-.1.4.1.8.4 1 3.5 2.2 5.5 5.8 5.6 9.8-3.4 2.8-5.2 7-4.8 11.4.5 5.2 4.5 9.4 9.7 10.3 6.3 1.1 12.3-2.1 14.8-7.7 2.3.8 4.9.9 7.3.2 2.6-.8 4.8-2.5 6.1-4.8.4-.7.4-1.6-.1-2.3-.2-.4-.6-.7-1-.8zm-22 9c-4.4.6-8.5-2.2-9.6-6.6-.9-3.7.8-7.4 4.1-9.2 1.3-.7 2.8-1.1 4.3-1.1 4.8 0 8.9 3.5 9.6 8.3.7 4.9-2.9 9.3-7.7 9.9.5-.4 1-.8 1.3-1.3z"
      fill="#00758F"
    />
    <path
      d="M43.5 27.5c-.6 1.8-1.9 3.3-3.6 4.2-1.9.9-4 .9-5.9.3 2.1-4.2-.2-8.5-4.5-9.8 3.5-.7 7.1.7 9 3.5.7.5 1 1.2.9 1.8h4.1z"
      fill="#F29111"
    />
  </svg>
);

// 10. Firebase
export const FirebaseIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.2 18.3L7.7 3.5c.1-.5.7-.6 1-.3l3.6 6.7-8.1 8.4z" fill="#FFA000" />
    <path d="M13.6 8.3L15.3 5c.2-.5.9-.5 1.1 0l3.4 13.3-6.2-10z" fill="#F57C00" />
    <path d="M3.5 18.7l8.2 4.6c.2.1.5.1.7 0l8.1-4.6-3.8-14.8-13.2 14.8z" fill="#FFCA28" />
  </svg>
);

// 11. Flutter
export const FlutterIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3 2L4 12.3l3.2 3.2L19.8 2h-5.5z" fill="#47C5FB" />
    <path d="M14.3 12.7l-4.7 4.7 4.7 4.7h5.5l-4.7-4.7 4.7-4.7h-5.5z" fill="#02569B" />
    <path d="M9.6 17.4l2.4 2.4-2.4 2.4h-5.5l5.5-4.8z" fill="#0175C2" />
  </svg>
);

// 12. Git
export const GitIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 10.9L13.1 1.5a1.8 1.8 0 00-2.5 0L8.8 3.3l3.2 3.2a2.1 2.1 0 012.7 2.7l3.1 3.1a2.1 2.1 0 11-1.3 1.2l-2.9-2.9v5.2a2.1 2.1 0 11-1.8 0v-5.4a2.1 2.1 0 01-1.1-2.7L7.6 4.5 1.5 10.6a1.8 1.8 0 000 2.5l9.4 9.4c.7.7 1.8.7 2.5 0l9.1-9.1a1.8 1.8 0 000-2.5z"
      fill="#F05032"
    />
  </svg>
);

// 13. GitHub
export const GitHubIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// 14. Microsoft Excel
export const MicrosoftExcelIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6h22c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H14V6z" fill="#107C41" />
    <path d="M22 13h12v5H22v-5zm0 8h12v5H22v-5zm0 8h12v5H22v-5z" fill="#21A366" />
    <rect x="6" y="11" width="18" height="26" rx="3" fill="#185C37" />
    <path d="M10.8 18.5l3.1 5.3-3.3 5.7h2.4l2.1-3.9 2.1 3.9h2.4l-3.3-5.7 3.1-5.3h-2.3l-2 3.6-2-3.6h-2.2z" fill="#FFFFFF" />
  </svg>
);

// 15. Microsoft Word
export const MicrosoftWordIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6h22c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H14V6z" fill="#185ABD" />
    <path d="M22 14h12v3H22v-3zm0 6h12v3H22v-3zm0 6h12v3H22v-3zm0 6h8v3h-8v-3z" fill="#41A5EE" />
    <rect x="6" y="11" width="18" height="26" rx="3" fill="#103F91" />
    <path d="M9.8 18.5l2.2 11h2.1l1.8-8.2 1.8 8.2h2.1l2.2-11h-2.1l-1.3 7.8-1.8-7.8h-1.8l-1.8 7.8-1.3-7.8H9.8z" fill="#FFFFFF" />
  </svg>
);
