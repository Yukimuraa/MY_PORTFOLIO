import React from 'react';

/**
 * Crisp, high-contrast vector brand logos optimized for 16px–40px display
 * across both dark and light surfaces.
 */

// 1. PHP
export const PhpIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="64" cy="64" rx="60" ry="36" fill="#777BB4" />
    <path
      d="M37.5 73.8h-7.6l4.7-19.6h12.5c4.7 0 7.8 2.4 6.8 6.7-1 4.2-4.9 6.8-9.3 6.8h-5.2l-1.9 6.1zm5.2-10.2h3.9c2.3 0 4.1-1.1 4.5-2.7.4-1.6-.7-2.7-3.1-2.7h-3.7l-1.6 5.4zm23.6 10.2h-7.5l8.1-33.8h7.5l-3.3 14.2h10.4c4.7 0 7.8 2.4 6.8 6.7-1 4.2-4.9 6.8-9.3 6.8h-9.4l-3.3 12.9zm6.6-17h3.9c2.3 0 4.1-1.1 4.5-2.7.4-1.6-.7-2.7-3.1-2.7h-3.7l-1.6 5.4zm30.3 17h-7.6l4.7-19.6h12.5c4.7 0 7.8 2.4 6.8 6.7-1 4.2-4.9 6.8-9.3 6.8h-5.2l-1.9 6.1zm5.2-10.2h3.9c2.3 0 4.1-1.1 4.5-2.7.4-1.6-.7-2.7-3.1-2.7h-3.7l-1.6 5.4z"
      fill="#FFFFFF"
    />
  </svg>
);

// 2. Laravel — bold red rounded badge with crisp white isometric cube mark
export const LaravelIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#FF2D20" />
    <path
      d="M13 16.5L20.5 12.5L28 16.5V25L35 21L40 23.8V31.5L27.5 38.5L13 30.5V16.5Z"
      stroke="#FFFFFF"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />
    <path
      d="M13 16.5L20.5 20.5L28 16.5M20.5 20.5V34.5M27.5 25.3V38.5M27.5 25.3L35 29.2L40 26.2"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. React
export const ReactIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.25" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// 4. JavaScript
export const JavaScriptIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="44" height="44" rx="8" fill="#F7DF1E" />
    <path
      d="M15.4 36.4c.8.6 1.8 1 3 1 1.8 0 3-1 3-2.8V21.4h4.2v13.2c0 4-2.6 6.2-6.6 6.2-2.2 0-4.2-.8-5.4-1.8l1.8-2.6zm13.8.2c1.2.8 3 1.4 4.8 1.4 2.4 0 3.8-1.1 3.8-2.7 0-1.9-1.4-2.6-4-3.7-3.2-1.4-5.2-3-5.2-6 0-3.2 2.6-5.5 6.5-5.5 2.1 0 3.8.6 5 1.4l-1.5 3.2c-1-.6-2.1-1.1-3.5-1.1-1.9 0-3 .9-3 2.3 0 1.6 1.2 2.3 4.2 3.6 3.4 1.4 5.3 3.2 5.3 6.2 0 3.6-2.8 6.1-7.2 6.1-2.5 0-4.8-.7-6.2-1.8l1-3.4z"
      fill="#111111"
    />
  </svg>
);

// 5. HTML5 — clean, sharp shield + centered white "5"
export const Html5Icon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4L10.1 39.2L24 44L37.9 39.2L41 4H7Z" fill="#E44D26" />
    <path d="M24 7V40.7L35.2 36.9L37.8 7H24Z" fill="#F16529" />
    <path
      d="M14.5 13H33.5L33 18H19.8L20.3 23H32.5L31.2 35.2L24 37.5L16.8 35.2L16.3 29H21.2L21.5 31.8L24 32.6L26.5 31.8L27 27.6H15.8L14.5 13Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 6. CSS3 — clean, sharp shield + centered white "3"
export const Css3Icon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4L10.1 39.2L24 44L37.9 39.2L41 4H7Z" fill="#1572B6" />
    <path d="M24 7V40.7L35.2 36.9L37.8 7H24Z" fill="#33A9DC" />
    <path
      d="M14.5 13H33.5L33 18H24.2L19.5 22.5H32.6L31.3 35.2L24 37.5L16.8 35.2L16.3 29H21.2L21.5 31.8L24 32.6L26.6 31.8L27.1 27H16.2L15.8 22.5L25.5 18H14.9L14.5 13Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 7. Tailwind CSS — official cyan double-wave mark
export const TailwindCssIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 12C17.6 12 13.6 15.2 12 21.6C14.4 18.4 17.2 17.2 20.4 18C22.2 18.45 23.5 19.77 24.92 21.22C27.25 23.58 29.95 26.32 36 26.32C42.4 26.32 46.4 23.12 48 16.72C45.6 19.92 42.8 21.12 39.6 20.32C37.8 19.87 36.5 18.55 35.08 17.1C32.75 14.74 30.05 12 24 12ZM12 26.32C5.6 26.32 1.6 29.52 0 35.92C2.4 32.72 5.2 31.52 8.4 32.32C10.2 32.77 11.5 34.09 12.92 35.54C15.25 37.9 17.95 40.64 24 40.64C30.4 40.64 34.4 37.44 36 31.04C33.6 34.24 30.8 35.44 27.6 34.64C25.8 34.19 24.5 32.87 23.08 31.42C20.75 29.06 18.05 26.32 12 26.32Z"
      fill="#38BDF8"
    />
  </svg>
);

// 8. Bootstrap — purple rounded shield/badge with crisp white "B"
export const BootstrapIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="42" height="38" rx="9" fill="#7952B3" />
    <path
      d="M16.5 13H26.2C29.9 13 32.4 14.8 32.4 17.9C32.4 20.1 30.9 21.8 28.8 22.4V22.6C31.5 23.1 33.3 25 33.3 27.8C33.3 31.4 30.5 33.5 26.1 33.5H16.5V13ZM20.8 21.3H25.2C27.2 21.3 28.3 20.3 28.3 18.7C28.3 17.1 27.2 16.2 25.2 16.2H20.8V21.3ZM20.8 30.3H25.6C27.9 30.3 29.1 29.3 29.1 27.5C29.1 25.7 27.8 24.6 25.5 24.6H20.8V30.3Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 9. Python
export const PythonIcon = ({ className = 'w-4 h-4' }) => (
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

// 10. SQL
export const SqlIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="11" rx="17" ry="5.5" fill="#0284C7" stroke="#38BDF8" strokeWidth="2.5" />
    <path d="M7 11v12c0 3.2 7.6 5.8 17 5.8s17-2.6 17-5.8V11" stroke="#38BDF8" strokeWidth="2.5" />
    <path d="M7 23v12c0 3.2 7.6 5.8 17 5.8s17-2.6 17-5.8V23" stroke="#38BDF8" strokeWidth="2.5" />
  </svg>
);

// 11. MySQL — high-contrast teal & orange badge with dolphin/database emblem visible on dark & light
export const MySqlIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#00618A" />
    <path
      d="M12 31C12.5 22 18.5 14.5 27.5 13C25.2 15.8 24.5 18.8 25.5 21.8C29.5 21.2 33.8 23.2 36.5 27.2C33.2 26.8 30.6 27.5 28.8 29.5C26.5 32 23 34.5 18 35"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 13C31.8 13.5 35.2 16 37 19.8"
      stroke="#F29111"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <circle cx="21" cy="21" r="2" fill="#F29111" />
  </svg>
);

// 12. Firebase
export const FirebaseIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.2 18.3L7.7 3.5c.1-.5.7-.6 1-.3l3.6 6.7-8.1 8.4z" fill="#FFA000" />
    <path d="M13.6 8.3L15.3 5c.2-.5.9-.5 1.1 0l3.4 13.3-6.2-10z" fill="#F57C00" />
    <path d="M3.5 18.7l8.2 4.6c.2.1.5.1.7 0l8.1-4.6-3.8-14.8-13.2 14.8z" fill="#FFCA28" />
  </svg>
);

// 13. Flutter
export const FlutterIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3 2L4 12.3l3.2 3.2L19.8 2h-5.5z" fill="#47C5FB" />
    <path d="M14.3 12.7l-4.7 4.7 4.7 4.7h5.5l-4.7-4.7 4.7-4.7h-5.5z" fill="#00B5F8" />
    <path d="M9.6 17.4l2.4 2.4-2.4 2.4h-5.5l5.5-4.8z" fill="#0175C2" />
  </svg>
);

// 14. Dart
export const DartIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 11L22 4L40 22V37H25L7 19L11 11Z" fill="#0175C2" />
    <path d="M22 4L40 22H25L11 11L22 4Z" fill="#40C4FF" />
    <path d="M11 11L25 22V37L7 19L11 11Z" fill="#00B4AB" />
  </svg>
);

// 15. Git
export const GitIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 10.9L13.1 1.5a1.8 1.8 0 00-2.5 0L8.8 3.3l3.2 3.2a2.1 2.1 0 012.7 2.7l3.1 3.1a2.1 2.1 0 11-1.3 1.2l-2.9-2.9v5.2a2.1 2.1 0 11-1.8 0v-5.4a2.1 2.1 0 01-1.1-2.7L7.6 4.5 1.5 10.6a1.8 1.8 0 000 2.5l9.4 9.4c.7.7 1.8.7 2.5 0l9.1-9.1a1.8 1.8 0 000-2.5z"
      fill="#F05032"
    />
  </svg>
);

// 16. GitHub — uses currentColor so it stays visible in both Dark and Light mode
export const GitHubIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} text-ink`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// 17. VS Code
export const VsCodeIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.2 4.6L16.8 22.2L9.2 16.2L5 18.4V29.6L9.2 31.8L16.8 25.8L35.2 43.4L43 39.6V8.4L35.2 4.6Z" fill="#007ACC" />
    <path d="M35.2 4.6L43 8.4V39.6L35.2 43.4V4.6Z" fill="#29B6F6" />
    <path d="M35.2 14.5L22.5 24L35.2 33.5V14.5Z" fill="#0A192F" fillOpacity="0.25" />
  </svg>
);

// 18. Android Studio
export const AndroidStudioIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#1E88E5" />
    <path d="M13 21C13 15.5 17.9 11 24 11C30.1 11 35 15.5 35 21H13Z" fill="#3DDC84" />
    <circle cx="19.5" cy="16.5" r="1.4" fill="#0D2538" />
    <circle cx="28.5" cy="16.5" r="1.4" fill="#0D2538" />
    <path d="M17.5 12L15.2 8.5M30.5 12L32.8 8.5" stroke="#3DDC84" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M24 19L15.5 37H20L24 27.8L28 37H32.5L24 19Z" fill="#FFFFFF" />
  </svg>
);

// 19. Microsoft Excel
export const MicrosoftExcelIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6h22c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H14V6z" fill="#107C41" />
    <path d="M22 13h12v5H22v-5zm0 8h12v5H22v-5zm0 8h12v5H22v-5z" fill="#21A366" />
    <rect x="6" y="11" width="18" height="26" rx="3" fill="#185C37" />
    <path d="M10.8 18.5l3.1 5.3-3.3 5.7h2.4l2.1-3.9 2.1 3.9h2.4l-3.3-5.7 3.1-5.3h-2.3l-2 3.6-2-3.6h-2.2z" fill="#FFFFFF" />
  </svg>
);

// 20. Microsoft Word
export const MicrosoftWordIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6h22c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H14V6z" fill="#185ABD" />
    <path d="M22 14h12v3H22v-3zm0 6h12v3H22v-3zm0 6h12v3H22v-3zm0 6h8v3h-8v-3z" fill="#41A5EE" />
    <rect x="6" y="11" width="18" height="26" rx="3" fill="#103F91" />
    <path d="M9.8 18.5l2.2 11h2.1l1.8-8.2 1.8 8.2h2.1l2.2-11h-2.1l-1.3 7.8-1.8-7.8h-1.8l-1.8 7.8-1.3-7.8H9.8z" fill="#FFFFFF" />
  </svg>
);

// 21. Microsoft PowerPoint
export const MicrosoftPowerPointIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="24" r="15" fill="#D24726" />
    <path d="M28 9A15 15 0 0143 24H28V9Z" fill="#FF8F6B" />
    <rect x="6" y="11" width="19" height="26" rx="3" fill="#C43E1C" />
    <path
      d="M12 18H16.8C19.2 18 20.8 19.4 20.8 21.6C20.8 23.8 19.2 25.3 16.7 25.3H14.5V29.5H12V18ZM14.5 23.2H16.5C17.7 23.2 18.4 22.6 18.4 21.6C18.4 20.6 17.7 20.1 16.5 20.1H14.5V23.2Z"
      fill="#FFFFFF"
    />
  </svg>
);
