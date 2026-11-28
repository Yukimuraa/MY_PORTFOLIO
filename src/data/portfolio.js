/**
 * =========================================================================
 * CENTRALIZED PORTFOLIO DATA STORE
 * =========================================================================
 * All personal details, projects, skills, experience, and configuration
 * are managed here for clean, centralized maintainability.
 */

export const portfolioData = {
  // Configuration Variables - Real links and assets
  config: {
    GITHUB_URL: "https://github.com/Yukimuraa",
    LINKEDIN_URL: "https://www.linkedin.com/in/joemarie-damasing-8b2795317/",
    EMAIL: "damasingjoemarie@gmail.com",
    RESUME_URL: "/resume.pdf",
    AVAILABLE_FOR_WORK: true,
    STATUS_TEXT: "Available for Entry-Level Roles",
  },

  personalInfo: {
    name: "Joemarie D. Damasing",
    shortName: "Joemarie",
    avatar: "/images/profile.jpg",
    avatarFallback: "/user-uploads/media_1790488414559.jpg",
    title: "BS Information Systems Graduate | IT Support & Web Development",
    location: "Negros Occidental, Philippines",
    degree: "Bachelor of Science in Information Systems",
    school: "Carlos Hilado Memorial State University",
    period: "2022–2026",
    careerFocus: [
      "IT Support",
      "IT Operations",
      "Systems Administration",
      "Web Development",
      "Software Development",
      "Information Systems",
      "Freelance Web Development"
    ],
    positioning: "I am an entry-level Information Systems graduate with hands-on experience in IT support, web development, database management, and information systems.",
    hero: {
      label: "BS INFORMATION SYSTEMS GRADUATE",
      heading: "Hi, I'm Joemarie.",
      subheading: "I build practical digital solutions.",
      supportingText: "I'm a BS Information Systems graduate with hands-on experience in IT support, web development, database management, and information systems. I enjoy building practical applications that solve real-world problems while continuously learning new technologies.",
      locationText: "Negros Occidental, Philippines",
      focusText: "IT Support • Web Development • Information Systems"
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm Joemarie D. Damasing, a Bachelor of Science in Information Systems graduate from Carlos Hilado Memorial State University.",
        "My background combines information technology, software development, database management, and technical support. During my academic journey and internship experience, I worked with different technologies and developed systems designed to improve everyday processes and information management.",
        "I also gained hands-on IT support experience during my internship with COMELEC, where I assisted with workstation deployment, hardware diagnostics, operating system configuration, peripherals, data encoding, digital records, and first-line technical support.",
        "I'm currently looking for opportunities where I can apply my technical skills, learn from experienced professionals, and contribute to a team while continuing to grow in the IT industry."
      ],
      highlights: [
        {
          tag: "EDUCATION",
          primary: "BS Information Systems",
          secondary: "Carlos Hilado Memorial State University",
          period: "2022–2026",
          icon: "GraduationCap"
        },
        {
          tag: "FOCUS",
          primary: "IT Support & Ops",
          secondary: "Web Dev & Info Systems",
          period: "Core Domains",
          icon: "Crosshair"
        },
        {
          tag: "LOCATION",
          primary: "Negros Occidental",
          secondary: "Philippines",
          period: "Open to Local & Remote",
          icon: "MapPin"
        }
      ]
    }
  },

  skills: [
    {
      category: "Programming & Web Development",
      description: "Core languages and web development frameworks",
      icon: "Code",
      items: [
        { name: "PHP", role: "Backend" },
        { name: "Laravel", role: "Framework" },
        { name: "React", role: "Frontend" },
        { name: "JavaScript", role: "Core" },
        { name: "HTML", role: "Markup" },
        { name: "CSS", role: "Styling" },
        { name: "Python", role: "Scripting" }
      ]
    },
    {
      category: "Database & Backend",
      description: "Data modeling, relational databases, and API development",
      icon: "Database",
      items: [
        { name: "MySQL", role: "RDBMS" },
        { name: "SQL", role: "Queries" },
        { name: "Firebase", role: "Cloud" },
        { name: "REST API", role: "Integration" }
      ]
    },
    {
      category: "Mobile Development",
      description: "Cross-platform mobile applications",
      icon: "Smartphone",
      items: [
        { name: "Flutter", role: "Framework" },
        { name: "Dart", role: "Language" }
      ]
    },
    {
      category: "IT Support",
      description: "Diagnostics, operating systems, hardware deployment, and maintenance",
      icon: "Cpu",
      items: [
        { name: "Hardware Troubleshooting", role: "Diagnostics" },
        { name: "Software Installation", role: "Deployment" },
        { name: "Windows Configuration", role: "OS Admin" },
        { name: "Workstation Deployment", role: "Setup" },
        { name: "Peripheral Setup", role: "Devices" },
        { name: "Preventive Maintenance", role: "Care" },
        { name: "Cable Management", role: "Organization" },
        { name: "IT Asset Inventory", role: "Asset Mgmt" },
        { name: "First-Line Technical Support", role: "Helpdesk" }
      ]
    },
    {
      category: "Tools",
      description: "Version control, IDEs, and office productivity suites",
      icon: "Wrench",
      items: [
        { name: "Git", role: "VCS" },
        { name: "GitHub", role: "Collaboration" },
        { name: "VS Code", role: "Editor" },
        { name: "Android Studio", role: "Mobile IDE" },
        { name: "Microsoft Word", role: "Documentation" },
        { name: "Microsoft Excel", role: "Spreadsheets" },
        { name: "Microsoft PowerPoint", role: "Presentations" }
      ]
    }
  ],

  softSkills: [
    {
      name: "Communication",
      icon: "MessageSquare",
      description: "Able to communicate technical information clearly and work effectively with different people."
    },
    {
      name: "Problem Solving",
      icon: "Lightbulb",
      description: "Comfortable analyzing problems and finding practical solutions."
    },
    {
      name: "Adaptability",
      icon: "Shuffle",
      description: "Willing to learn new tools, technologies, and processes."
    },
    {
      name: "Teamwork",
      icon: "Users",
      description: "Able to collaborate with others toward a shared goal."
    },
    {
      name: "Work Ethic",
      icon: "ShieldCheck",
      description: "Responsible, organized, and committed to completing assigned tasks."
    },
    {
      name: "Willingness to Learn",
      icon: "BookOpen",
      description: "Continuously improving technical and professional skills."
    }
  ],

  projects: [
    {
      id: "bao-system",
      name: "BAO Information System",
      subtitle: "University Business Affairs Office Management Platform",
      category: "Web Systems",
      featured: true,
      image: "/images/projects/bao.png",
      uploadedFallback: "file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded/media_1790481394480.png",
      badge: "Academic Capstone Project",
      shortDescription: "A web-based information system designed to manage gym, bus, and item-related operations through a centralized platform.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "User and administrator management",
        "Gym facility and equipment management",
        "Campus bus scheduling and vehicle dispatch",
        "Item and resource inventory tracking",
        "Centralized information management records",
        "Administrative approval functions",
        "Email OTP verification for secure access"
      ],
      details: {
        overview: "This project demonstrates my ability to design and develop a multi-module information system using PHP and MySQL. The system focuses on organizing operational data and providing administrators with a centralized platform for managing information.",
        problem: "The Business Affairs Office previously managed various university operations—including gym reservations, bus schedules, and item requests—through manual logbooks and fragmented spreadsheets, resulting in scheduling bottlenecks.",
        solution: "A unified, role-based PHP and MySQL web application that streamlines user registration, administrative approvals, resource dispatch, and email-verified security.",
        myRole: "Full Stack Developer (System Architecture, Database Schema, PHP Backend, Frontend UI)",
        challenges: "Ensuring secure email OTP authentication and managing multi-module business logic with relational integrity across users, vehicles, and facilities.",
        whatILearned: "Deepened practical skills in relational database schema design, PHP session and authentication management, and building intuitive admin dashboards.",
        screenshots: [
          {
            title: "CHMSU Talisay Business Affairs Office Registration & Account Creation Interface",
            src: "/images/projects/bao.png",
            alt: "BAO System Account Registration Screen"
          },
          {
            title: "CHMSU BAO Available Items & Online Ordering Interface",
            src: "/images/projects/bao-items.jpg",
            alt: "BAO System Available Items & Ordering Screen"
          }
        ],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "comelec-qms",
      name: "COMELEC Queue Management System (QMS)",
      subtitle: "Automated Frontline Queueing & Counter Operations Platform",
      category: "POS & Operations",
      featured: true,
      image: "/images/projects/comelec-qms.png",
      uploadedFallback: null,
      badge: "IT Operations Deployment",
      shortDescription: "A digital queue management system designed to coordinate voter transactions, counter calling, ticket reprinting, and capacity tracking.",
      technologies: ["PHP", "JavaScript", "MySQL", "Thermal Printer API", "QR Code Scanner"],
      features: [
        "Counter Calling Board with Now Serving display and Call Next / Skip / Re-call actions",
        "Priority and Regular queue routing controls",
        "Token QR Print Center with batch generation and single ticket reprint",
        "Daily Capacity limit settings and live Total Served counter",
        "Built-in camera QR Token Scanner for rapid barcode verification",
        "Pending FIFO (First-In, First-Out) voter queue tracking",
        "Dedicated TV Display and Daily Report portal views"
      ],
      details: {
        overview: "Developed and supported during my IT internship at COMELEC, this queue management system modernizes frontline voter transactions, eliminating crowded counter bottlenecks and giving staff real-time visibility over service queues.",
        problem: "Manual paper queuing caused crowd congestion, untracked voter registration wait times, and difficulties verifying ticket numbers during peak registration periods.",
        solution: "A digital web-based QMS integrating counter audio/visual calling boards, thermal QR ticket printing, barcode scanner verification, and live daily capacity metrics.",
        myRole: "System Deployment & IT Support (Assisted with workstation deployment, queue diagnostics, peripheral thermal printer setup, and technical support).",
        challenges: "Configuring hardware peripherals (thermal ticket printers and webcam QR scanners) to respond reliably in real-time across multiple counter terminals.",
        whatILearned: "Hands-on experience deploying mission-critical frontline IT systems, hardware peripheral setup, and optimizing queue operational workflows.",
        screenshots: [
          {
            title: "COMELEC QMS Counter Calling Board & Token QR Print Center Interface",
            src: "/images/projects/comelec-qms.png",
            alt: "COMELEC QMS Counter Calling Board & Token Print Center Screenshot"
          },
          {
            title: "COMELEC QMS Live TV Display & Queue Announcer Board",
            src: "/images/projects/comelec-qms-tv.png",
            alt: "COMELEC QMS Live TV Display Screenshot"
          }
        ],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "local-grind",
      name: "The Local Grind Counter POS",
      subtitle: "Specialty Cafe Touchpoint & Ordering Interface",
      category: "POS & Operations",
      featured: true,
      image: "/images/projects/localgrind.png",
      uploadedFallback: null,
      badge: "Counter Touchpoint",
      shortDescription: "A modern, branded counter welcome, POS ordering terminal, and admin sales analytics platform designed for specialty coffee operations.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      features: [
        "Clean branded counter welcome screen with single-touch 'Start Order' trigger",
        "Categorized menu directory (Coffee, Non-Coffee, Tea, Pastries, Desserts, Snacks, Fries)",
        "Real-time Order Ticket with Dine-In / New Order modes and customer details",
        "Admin Console Dashboard with Today's/Weekly/Monthly sales and order status charts",
        "Full-screen responsive viewport layout optimized for counter displays"
      ],
      details: {
        overview: "A specialized counter terminal and admin management platform built for The Local Grind coffee shop, combining a distraction-free welcome screen, fast POS order ticket workflow, and real-time sales analytics.",
        problem: "Cluttered counter display screens and manual order tracking make it difficult for counter staff to quickly launch new tickets and monitor daily cafe sales.",
        solution: "A minimalist welcome interface paired with a responsive category-driven POS terminal and an integrated admin console for sales overview, order status, and best-selling product metrics.",
        myRole: "Frontend Developer & UI Designer.",
        challenges: "Achieving balanced visual typography and aesthetic contrast across both the welcome kiosk screen and the data-rich admin dashboard.",
        whatILearned: "Modern CSS layout techniques, minimalist UI principles, POS cart state management, and touch-target optimization for kiosk hardware.",
        screenshots: [
          {
            title: "The Local Grind Counter POS Welcome & Start Screen",
            src: "/images/projects/localgrind.png",
            alt: "The Local Grind Counter Welcome Screen"
          },
          {
            title: "The Local Grind Admin Console — Sales & Order Analytics Dashboard",
            src: "/images/projects/localgrind-dashboard.jpg",
            alt: "The Local Grind Admin Console Dashboard Screenshot"
          },
          {
            title: "The Local Grind POS Menu & Live Order Ticket Interface",
            src: "/images/projects/localgrind-pos.jpg",
            alt: "The Local Grind POS Menu and Order Ticket Screenshot"
          }
        ],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "urnotes",
      name: "UrNotes",
      subtitle: "Personal Productivity Web App",
      category: "Web Systems",
      featured: true,
      image: "/images/projects/urnotes-loading.png",
      uploadedFallback: null,
      badge: "Full-Stack Productivity PWA",
      shortDescription: "A modern productivity application for organizing notes, sticky notes, tasks, and deleted items in one place.",
      technologies: ["Laravel", "React", "Vite", "JavaScript", "PWA"],
      features: [
        "Structured notes management with rich formatting",
        "Draggable sticky notes for quick thoughts and reminders",
        "Todo list with task completion states and priority",
        "Trash and recovery system for deleted items",
        "Customizable user settings and preferences",
        "Responsive interface optimized for desktop and mobile",
        "Progressive Web App (PWA) offline-ready functionality"
      ],
      details: {
        overview: "UrNotes is a personal productivity application that combines note-taking and task management features into a single web application. I worked with Laravel and React to build the application's frontend and backend structure.",
        problem: "Users frequently switch between separate apps for quick scratchpad stickies, long-form documents, and daily task checklists.",
        solution: "A cohesive, high-performance web application combining quick sticky notes, rich note archiving, and interactive task checklists into a single responsive PWA interface.",
        myRole: "Full Stack Developer (Laravel REST API & React/Vite Frontend)",
        challenges: "Implementing responsive state management across multiple productivity modules while ensuring clean REST API synchronization with Laravel.",
        whatILearned: "Component architecture in React with modern Vite tooling, Laravel API resource controllers, and PWA service worker configurations.",
        screenshots: [
          {
            title: "UrNotes Progressive Web App (PWA) Launch & Loading Screen",
            src: "/images/projects/urnotes-loading.png",
            alt: "UrNotes Loading Screen Screenshot"
          },
          {
            title: "UrNotes Dashboard — Notes, Sticky Notes & Task Overview",
            src: "/images/projects/urnotes-dashboard.png",
            alt: "UrNotes Dashboard Screenshot"
          },
          {
            title: "UrNotes Settings — Custom Theme Colors, Quick Presets & PWA Info",
            src: "/images/projects/urnotes-settings.png",
            alt: "UrNotes Settings & Presets Screenshot"
          }
        ],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "ai-resume-analyzer",
      name: "AI Resume Analyzer",
      subtitle: "ATS-Oriented Feedback & Career Evaluation",
      category: "Web Systems",
      featured: true,
      image: "/images/projects/ai-resume.svg",
      uploadedFallback: null,
      badge: "AI & Full-Stack Integration",
      shortDescription: "An AI-powered application designed to analyze resumes and provide structured feedback based on resume content and ATS-oriented criteria.",
      technologies: ["Laravel", "React", "Python", "Gemini API"],
      features: [
        "Automated resume content parsing and analysis",
        "ATS-oriented compatibility evaluation and scoring",
        "Curated resume structure templates",
        "AI-generated actionable feedback for sections",
        "Comprehensive resume content analysis",
        "Secure API integration with AI endpoints"
      ],
      details: {
        overview: "This project explores the use of AI in career applications. The system processes resume information and provides structured feedback to help users identify areas that can be improved.",
        problem: "Job applicants often face automated Applicant Tracking System (ATS) filtering without knowing how to optimize their resumes for clarity and technical keywords.",
        solution: "An intelligent evaluation platform that ingests resume data, queries the Gemini API with structured prompts, and delivers clear, categorized suggestions to the applicant.",
        myRole: "Backend Developer & AI API Integration",
        challenges: "Prompt engineering for consistent JSON-structured ATS assessments and bridging the Python text-processing service with the Laravel application core.",
        whatILearned: "Practical experience integrating large language model APIs into production web workflows, handling token limits, and structuring asynchronous response pipelines.",
        screenshots: [],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "dengue-monitoring",
      name: "Dengue Monitoring System",
      subtitle: "Location-Based Health Analytics & Geo-Visualization",
      category: "Web Systems",
      featured: true,
      image: "/images/projects/dengue.svg",
      uploadedFallback: null,
      badge: "Geospatial Health System",
      shortDescription: "A web-based monitoring system designed to help organize and visualize dengue-related information using location-based data.",
      technologies: ["PHP", "MySQL", "Leaflet", "GeoJSON", "JavaScript"],
      features: [
        "Dengue case monitoring and tracking",
        "Location-based visualization with interactive map layers",
        "Barangay-level geospatial information presentation",
        "Administrative dashboard for health data management",
        "Public information interface for community awareness",
        "User role and permission management"
      ],
      details: {
        overview: "I developed this system to demonstrate how information systems can be used to organize health-related records and present location-based information through an interactive map.",
        problem: "Public health monitoring requires clear spatial awareness to identify emerging clusters and coordinate proactive vector control measures at the barangay level.",
        solution: "A dynamic web platform integrating Leaflet and GeoJSON with a PHP/MySQL backend, enabling real-time spatial heat mapping and verified case recording.",
        myRole: "System Developer & GIS Integrator",
        challenges: "Accurately parsing GeoJSON polygon coordinates for local administrative boundaries while keeping interactive map rendering responsive.",
        whatILearned: "Hands-on experience integrating client-side mapping libraries (Leaflet) with relational spatial data and GeoJSON datasets.",
        screenshots: [],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "facility-reservation",
      name: "Facility Reservation System",
      subtitle: "Campus Venue & Facility Booking Management",
      category: "Web Systems",
      featured: true,
      image: "/images/projects/facility.svg",
      uploadedFallback: null,
      badge: "Administrative System",
      shortDescription: "A web-based system designed to manage facility reservations and organize booking information.",
      technologies: ["PHP", "MySQL", "Laravel"],
      features: [
        "Facility and room directory management",
        "Reservation scheduling and conflict avoidance",
        "User request submission and tracking",
        "Administrative approval and scheduling oversight",
        "Historical booking records and audit reports"
      ],
      details: {
        overview: "This project focuses on improving the organization of facility reservations by replacing manual processes with a centralized digital system.",
        problem: "Manual reservation logs create scheduling conflicts, double bookings, and delays in administrative approvals for campus facilities.",
        solution: "A structured Laravel and MySQL application that automates date checking, manages user booking states, and presents administrators with clear approval queues.",
        myRole: "Backend & Database Developer",
        challenges: "Designing reliable SQL queries to detect overlapping time slots and prevent double bookings across diverse facilities.",
        whatILearned: "Implementing robust validation rules, database transactions, and relational constraints in Laravel.",
        screenshots: [],
        githubUrl: null,
        liveDemoUrl: null
      }
    }
  ],

  experience: [
    {
      id: "comelec-intern",
      company: "COMELEC (Commission on Elections)",
      position: "IT Support Intern",
      period: "Internship",
      highlight: "Hands-on IT Support Experience",
      imageShowcase: {
        title: "COMELEC Queue Management System (QMS) & Digital Operations",
        src: "/images/projects/comelec-qms.png",
        caption: "Assisted with workstation deployment, queue operations, digital records, and technical support."
      },
      description: "During my internship with COMELEC, I provided technical and administrative support while assisting with IT-related operations and digital records.",
      responsibilities: [
        "Assisted with workstation deployment and setup",
        "Performed basic hardware diagnostics",
        "Installed and configured operating systems",
        "Set up computer peripherals (printers, biometric devices, scanners)",
        "Assisted with first-line technical support for office staff",
        "Performed preventive maintenance on office computer equipment",
        "Assisted with cable management and workstation organization",
        "Maintained IT asset inventory records",
        "Assisted with data encoding and digital records management",
        "Supported the Online Voter Registration System operations"
      ],
      tags: ["Hardware Diagnostics", "OS Configuration", "Workstation Deployment", "Digital Records", "OVRS Support"]
    },
    {
      id: "chmsu-student-assistant",
      company: "Carlos Hilado Memorial State University",
      department: "Office of Student Affairs",
      position: "Student Assistant",
      period: "2023–2024",
      highlight: "Institutional Administrative & Technical Support",
      imageShowcase: null,
      description: "Assisted with administrative and technical office tasks while supporting student services and daily office operations.",
      responsibilities: [
        "Prepared documents using Microsoft Word and Excel",
        "Assisted with student inquiries and front-desk requests",
        "Supported office operations and inter-department communications",
        "Organized records and documents archives",
        "Assisted with technical and administrative tasks across student activities"
      ],
      tags: ["Office Productivity", "Records Management", "Student Services", "Documentation"]
    },
    {
      id: "dswd-cash-for-work",
      company: "DSWD Cash For Work Program",
      department: "MSWDO Registrar's Office",
      position: "Program Assistant",
      period: "2024–2025",
      highlight: "Public Service & Records Management",
      imageShowcase: null,
      description: "Assisted with student records, filing, enrollment-related documentation, and registration support.",
      responsibilities: [
        "Organized student records and community registration dossiers",
        "Assisted with physical and digital filing and documentation",
        "Supported enrollment and registration activities",
        "Assisted with administrative tasks under the registrar"
      ],
      tags: ["Data Encoding", "Document Archiving", "Registration Support", "Organization"]
    }
  ],

  education: {
    degree: "Bachelor of Science in Information Systems",
    school: "Carlos Hilado Memorial State University",
    period: "2022–2026",
    location: "Negros Occidental, Philippines",
    description: "Developed knowledge and practical experience in information systems, software development, databases, business processes, and information technology.",
    relevantAreas: [
      "Systems Analysis",
      "Database Management",
      "Web Development",
      "Programming",
      "Information Management",
      "IT Infrastructure"
    ]
  },

  certificates: [
    {
      id: "ibm-python",
      title: "Data Analysis with Python",
      issuer: "IBM — Cognitive Class (CHMSU)",
      courseCode: "DA0101EN",
      date: "January 18, 2025",
      badge: "Python & Analytics",
      image: "/images/certificates/cert-python.png",
      fallback: "/user-uploads/media_1790489198045.png",
      status: "Verified Credential",
      verificationUrl: "https://courses.cognitiveclass.ai/certificates/014540327b6a4036b55b27a26208d2e8",
      description: "Data wrangling, exploratory data analysis, and predictive model development & evaluation with Python."
    },
    {
      id: "google-analytics",
      title: "Google Analytics Certification",
      issuer: "Google Skillshop",
      certificateId: "163142661",
      date: "Oct 11, 2025 – Oct 11, 2026",
      badge: "Analytics & GA4",
      image: "/images/certificates/cert-google-analytics.png",
      fallback: "/user-uploads/media_1790489131375.png",
      status: "Active Certification",
      verificationUrl: "https://skillshop.credential.net/7e8f0158-7a31-4468-871c-ce3ffc91fec2#acc.8Fy0KoOh",
      description: "Setup of GA4 web/app properties, event tracking, audience segmentation, and business intelligence reporting."
    },
    {
      id: "ibm-regression",
      title: "Digital Analytics & Regression",
      issuer: "IBM — Cognitive Class",
      courseCode: "ML0103EN",
      date: "October 13, 2025",
      badge: "Machine Learning",
      image: "/images/certificates/cert-regression.png",
      fallback: "/user-uploads/media_1790489085858.png",
      status: "Verified Credential",
      verificationUrl: "https://courses.cognitiveclass.ai/certificates/4f1f8e684af34a3a8428cc9cd264cb04",
      description: "Regression models, statistical inference, digital metrics correlation, and predictive analytics pipelines."
    },
    {
      id: "ibm-ml",
      title: "A Quick Introduction to Machine Learning",
      issuer: "IBM — Cognitive Class",
      courseCode: "ML0104EN",
      date: "October 11, 2025",
      badge: "AI & ML",
      image: "/images/certificates/cert-ml.png",
      fallback: "/user-uploads/media_1790489038021.png",
      status: "Verified Credential",
      verificationUrl: "https://courses.cognitiveclass.ai/certificates/f6936d50004a477bbb69aa43e14371aa",
      description: "Foundational machine learning concepts, supervised vs unsupervised algorithms, and evaluation techniques."
    },
    {
      id: "ibm-sql",
      title: "SQL and Relational Databases 101",
      issuer: "IBM — Cognitive Class",
      courseCode: "DB0101EN",
      date: "October 10, 2025",
      badge: "Database",
      image: "/images/certificates/cert-sql.png",
      fallback: "/user-uploads/media_1790489262263.png",
      status: "Verified Coursework",
      verificationUrl: "https://courses.cognitiveclass.ai/certificates/799459a990ce43ed9bed16beec32f72f",
      description: "Relational database concepts, schema modeling, SQL query syntax, and database management."
    }
  ]
};
