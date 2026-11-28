import React from 'react';
import {
  PhpIcon,
  LaravelIcon,
  ReactIcon,
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  TailwindCssIcon,
  BootstrapIcon,
  PythonIcon,
  SqlIcon,
  MySqlIcon,
  FirebaseIcon,
  FlutterIcon,
  DartIcon,
  GitIcon,
  GitHubIcon,
  VsCodeIcon,
  AndroidStudioIcon,
  MicrosoftExcelIcon,
  MicrosoftWordIcon,
  MicrosoftPowerPointIcon,
} from '../TechLogos';

// Maps technology names used in portfolio data to brand vector icons.
const logoMap = {
  php: PhpIcon,
  laravel: LaravelIcon,
  react: ReactIcon,
  javascript: JavaScriptIcon,
  html: Html5Icon,
  html5: Html5Icon,
  css: Css3Icon,
  css3: Css3Icon,
  tailwind: TailwindCssIcon,
  'tailwind css': TailwindCssIcon,
  tailwindcss: TailwindCssIcon,
  bootstrap: BootstrapIcon,
  python: PythonIcon,
  sql: SqlIcon,
  mysql: MySqlIcon,
  firebase: FirebaseIcon,
  flutter: FlutterIcon,
  dart: DartIcon,
  git: GitIcon,
  github: GitHubIcon,
  'vs code': VsCodeIcon,
  vscode: VsCodeIcon,
  'android studio': AndroidStudioIcon,
  'microsoft excel': MicrosoftExcelIcon,
  'microsoft word': MicrosoftWordIcon,
  'microsoft powerpoint': MicrosoftPowerPointIcon,
};

export const getTechLogo = (name = '') => logoMap[name.trim().toLowerCase()] || null;

/**
 * Technology pill with an optional brand logo.
 */
export const TechTag = ({ name, withLogo = true, className = '' }) => {
  const Logo = withLogo ? getTechLogo(name) : null;
  return (
    <span className={`tag ${className}`}>
      {Logo && <Logo className="h-4 w-4 shrink-0" />}
      <span>{name}</span>
    </span>
  );
};
