# Joemarie D. Damasing — Professional Portfolio Website

A modern, minimalist, recruiter-friendly personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Lucide React**, and **Framer Motion** for **Joemarie D. Damasing**, BS Information Systems Graduate from Carlos Hilado Memorial State University (2022–2026), specializing in IT Support, Systems Administration, and Web Development.

---

## 🛠️ Technology Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Dark Navy & Technical Cyan theme)
- **Icons:** Lucide React
- **Animations:** Framer Motion (subtle, accessible, respects `prefers-reduced-motion`)
- **Deployment:** Vercel & Netlify static frontend ready
- **Backend:** None (Static frontend with mailto fallback and clipboard support)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the displayed terminal port) in your browser.

### 3. Build for Production (Vercel / Netlify)
```bash
npm run build
```
The optimized static build will be output to the `dist/` directory.

---

## 📁 Project Structure

```text
My_portfolio/
├── index.html                   # Master entry point with SEO metadata
├── package.json                 # Project dependencies & npm scripts
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Tailwind CSS palette & theme
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Setup guide & personal asset checklist
│
├── public/                      # Static assets
│   ├── favicon.svg              # Tab icon
│   ├── resume.pdf               # Downloadable curriculum vitae
│   └── images/
│       ├── projects/            # Project preview images & SVGs
│       │   ├── bao.svg
│       │   ├── dengue.svg
│       │   ├── urnotes.svg
│       │   ├── ai-resume.svg
│       │   ├── weathercrops.svg
│       │   └── facility.svg
│       └── certificates/        # Coursework & certification images
│           ├── ibm-python.svg
│           ├── ibm-sql.svg
│           ├── google-analytics.svg
│           └── freecodecamp.svg
│
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application layout & state
    ├── index.css                # Tailwind directives & accessibility rules
    │
    ├── data/
    │   └── portfolio.js         # Centralized portfolio data & URLs
    │
    └── components/
        ├── Navbar.jsx           # Sticky nav & animated mobile menu
        ├── Hero.jsx             # Hero section with technical spec card
        ├── About.jsx            # Background story & 3 highlight cards
        ├── Skills.jsx           # Categorized skill cards (no percentage bars)
        ├── SoftSkills.jsx       # 6 workplace soft skill cards
        ├── Projects.jsx         # 3-col desktop / 2-col tablet / 1-col mobile grid
        ├── ProjectCard.jsx      # Interactive project cards with tech tags
        ├── ProjectModal.jsx     # Accessible deep-dive project modal
        ├── Experience.jsx       # Timeline with COMELEC QMS showcase
        ├── Education.jsx        # BSIS degree & curriculum areas
        ├── Certificates.jsx     # Verified certification cards
        ├── GitHubCTA.jsx        # Code repository callout
        ├── ResumeCTA.jsx        # Resume download callout
        ├── Contact.jsx          # Direct channels & validated form
        ├── Footer.jsx           # Branding, links & back-to-top button
        └── ui/
            ├── Button.jsx       # Reusable button with Framer micro-animations
            ├── Section.jsx      # Reusable section with scroll reveals
            └── Card.jsx         # Reusable dark surface card with subtle border
```

---

## ⚙️ How to Customize Your Links & Contact Info

All links are centralized in [`src/data/portfolio.js`](file:///c:/Users/ASUS/Projects_2026/My_portfolio/src/data/portfolio.js):

```javascript
export const portfolioData = {
  config: {
    GITHUB_URL: "https://github.com/your-username",
    LINKEDIN_URL: "https://linkedin.com/in/your-username",
    EMAIL: "your.name@example.com",
    RESUME_URL: "/resume.pdf",
    AVAILABLE_FOR_WORK: true,
    STATUS_TEXT: "Available for Entry-Level Roles",
  },
  // ...
};
```

---

## 📋 Checklist: Assets to Provide

1. **Resume PDF:** Place your PDF in [`public/resume.pdf`](file:///c:/Users/ASUS/Projects_2026/My_portfolio/public/resume.pdf).
2. **Personal Profiles in `src/data/portfolio.js`:**
   - `GITHUB_URL`
   - `LINKEDIN_URL`
   - `EMAIL`
3. **Project Screenshots:** If you wish to replace the SVGs with your own PNG screenshots, drop them into `public/images/projects/`:
   - `bao.png` (BAO Information System)
   - `dengue.png` (Dengue Monitoring System)
   - `urnotes.png` (UrNotes)
   - `ai-resume.png` (AI Resume Analyzer)
   - `weathercrops.png` (WeatherCrops)
   - `facility.png` (Facility Reservation System)
4. **Live Project / Demo URLs:** Whenever you host any project online, add the link to `details.liveDemoUrl` in `src/data/portfolio.js`.
