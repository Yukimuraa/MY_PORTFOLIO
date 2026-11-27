/**
 * =========================================================================
 * PORTFOLIO DATA STORE
 * =========================================================================
 * Centralized, data-driven content for Joemarie D. Damasing's Portfolio.
 * All information matches real academic and practical experience.
 */

window.PORTFOLIO_DATA = {
  personal: {
    name: "Joemarie D. Damasing",
    shortName: "Joemarie",
    title: "BS Information Systems Graduate | IT Support & Web Development",
    degree: "Bachelor of Science in Information Systems",
    school: "Carlos Hilado Memorial State University",
    period: "2022–2026",
    location: "Negros Occidental, Philippines",
    heroHeading: "Hi, I'm Joemarie.",
    heroSubheading: "I build practical digital solutions.",
    heroBio: "I'm a BS Information Systems graduate with hands-on experience in IT support, web development, database management, and information systems. I enjoy building practical applications that solve real-world problems while continuously learning new technologies.",
    aboutHeading: "About Me",
    aboutParagraphs: [
      "I'm Joemarie D. Damasing, a Bachelor of Science in Information Systems graduate from Carlos Hilado Memorial State University.",
      "My background combines information technology, software development, database management, and technical support. During my academic journey and internship experience, I worked with different technologies and developed systems designed to improve everyday processes and information management.",
      "I also gained hands-on IT support experience during my internship with COMELEC, where I assisted with workstation deployment, hardware diagnostics, operating system configuration, peripherals, data encoding, digital records, and first-line technical support.",
      "I'm currently looking for opportunities where I can apply my technical skills, learn from experienced professionals, and contribute to a team while continuing to grow in the IT industry."
    ],
    highlights: [
      {
        title: "EDUCATION",
        primary: "BS Information Systems",
        secondary: "Carlos Hilado Memorial State University",
        meta: "2022–2026",
        icon: "academic"
      },
      {
        title: "FOCUS",
        primary: "IT Support & Operations",
        secondary: "Web Development & Info Systems",
        meta: "Full Stack & Support",
        icon: "target"
      },
      {
        title: "LOCATION",
        primary: "Negros Occidental",
        secondary: "Philippines",
        meta: "Open to Local & Remote",
        icon: "pin"
      }
    ]
  },

  skills: [
    {
      category: "Programming & Web Development",
      description: "Core languages and web frameworks for frontend and backend development",
      icon: "code",
      items: [
        { name: "PHP", level: "Primary Backend" },
        { name: "Laravel", level: "MVC Framework" },
        { name: "React", level: "Frontend Library" },
        { name: "JavaScript", level: "Core Scripting" },
        { name: "HTML", level: "Semantic Markup" },
        { name: "CSS", level: "Vanilla & Responsive" },
        { name: "Python", level: "Scripting & Data" }
      ]
    },
    {
      category: "Database & Backend",
      description: "Data modeling, relational management, and service APIs",
      icon: "database",
      items: [
        { name: "MySQL", level: "Relational DB" },
        { name: "SQL", level: "Queries & Procedures" },
        { name: "Firebase", level: "Cloud Platform" },
        { name: "REST API", level: "API Architecture" }
      ]
    },
    {
      category: "Mobile Development",
      description: "Cross-platform mobile application development",
      icon: "mobile",
      items: [
        { name: "Flutter", level: "Cross-Platform" },
        { name: "Dart", level: "Application Logic" }
      ]
    },
    {
      category: "IT Support",
      description: "Workstation maintenance, operating systems, and first-line technical support",
      icon: "cpu",
      items: [
        { name: "Hardware Troubleshooting", level: "Diagnostics & Repair" },
        { name: "Software Installation", level: "Deployment & Setup" },
        { name: "Windows Configuration", level: "OS Administration" },
        { name: "Workstation Deployment", level: "Staging & Assembly" },
        { name: "Peripheral Setup", level: "Printers & Devices" },
        { name: "Preventive Maintenance", level: "System Care" },
        { name: "Cable Management", level: "Physical Organization" },
        { name: "IT Asset Inventory", level: "Tracking & Auditing" },
        { name: "First-Line Technical Support", level: "User Support" }
      ]
    },
    {
      category: "Tools",
      description: "Development tools, version control, and productivity suites",
      icon: "tool",
      items: [
        { name: "Git", level: "Version Control" },
        { name: "GitHub", level: "Code Repository" },
        { name: "VS Code", level: "Code Editor" },
        { name: "Android Studio", level: "Mobile IDE" },
        { name: "Microsoft Word", level: "Documentation" },
        { name: "Microsoft Excel", level: "Data & Worksheets" },
        { name: "Microsoft PowerPoint", level: "Presentations" }
      ]
    }
  ],

  softSkills: [
    {
      name: "Communication",
      icon: "chat",
      description: "Able to communicate technical information clearly and work effectively with different people."
    },
    {
      name: "Problem Solving",
      icon: "puzzle",
      description: "Comfortable analyzing problems and finding practical solutions."
    },
    {
      name: "Adaptability",
      icon: "refresh",
      description: "Willing to learn new tools, technologies, and processes."
    },
    {
      name: "Teamwork",
      icon: "users",
      description: "Able to collaborate with others toward a shared goal."
    },
    {
      name: "Work Ethic",
      icon: "shield",
      description: "Responsible, organized, and committed to completing assigned tasks."
    },
    {
      name: "Willingness to Learn",
      icon: "book",
      description: "Continuously improving technical and professional skills."
    }
  ],

  projects: [
    {
      id: "bao-system",
      name: "BAO Information System",
      subtitle: "University Business Affairs Office Management System",
      tagline: "Centralized web platform for gym, bus, and item-related operations.",
      shortDescription: "A web-based information system designed to manage gym, bus, and item-related operations through a centralized platform.",
      category: "Web Systems",
      featured: true,
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      imagePath: "assets/images/bao-system.png",
      fallbackImage: "file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded/media_1790479502522.png",
      badge: "Academic Capstone Project",
      features: [
        "User and administrator management",
        "Gym facility and equipment management",
        "Campus bus scheduling and vehicle management",
        "Item and resource inventory management",
        "Centralized administrative functions",
        "Secure Email OTP verification for account authentication",
        "Centralized information management records"
      ],
      details: {
        overview: "This project demonstrates my ability to design and develop a multi-module information system using PHP and MySQL. The system focuses on organizing operational data and providing administrators with a centralized platform for managing information.",
        problem: "The Business Affairs Office previously managed various university operations—including gym reservations, bus schedules, and inventory tracking—through disparate or manual workflows, leading to coordination bottlenecks and record fragmentation.",
        solution: "A unified, role-based PHP & MySQL web application that streamlines user registration, administrative approvals, resource dispatch, and email-verified security.",
        myRole: "Full Stack Developer (System Design, Database Architecture, PHP Backend, Frontend Interfaces)",
        challenges: "Ensuring secure email OTP authentication and managing multi-module business logic with relational integrity across users, vehicles, and facilities.",
        whatILearned: "Deepened practical skills in relational database schema design, PHP session and authentication management, and building intuitive admin dashboards.",
        screenshots: [
          {
            title: "Account Creation & Registration Interface (CHMSU Talisay)",
            src: "file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded/media_1790479502522.png",
            alt: "BAO Information System Registration Screen"
          }
        ],
        githubUrl: null, // Configurable
        liveDemoUrl: null
      }
    },
    {
      id: "dengue-monitoring",
      name: "Dengue Monitoring System",
      subtitle: "Location-Based Health Analytics & Geo-Visualization",
      tagline: "Organize and visualize dengue records with interactive geospatial maps.",
      shortDescription: "A web-based monitoring system designed to help organize and visualize dengue-related information using location-based data.",
      category: "Web Systems",
      featured: true,
      technologies: ["PHP", "MySQL", "Leaflet", "GeoJSON", "JavaScript"],
      imagePath: "assets/images/dengue-monitoring.png",
      fallbackImage: null,
      badge: "Geospatial Health System",
      features: [
        "Dengue case monitoring and record tracking",
        "Location-based visualization with interactive map layers",
        "Barangay-level geospatial information presentation",
        "Administrative dashboard for health data management",
        "Public information interface for community awareness",
        "User role and permission management"
      ],
      details: {
        overview: "I developed this system to demonstrate how information systems can be used to organize health-related records and present location-based information through an interactive map.",
        problem: "Public health monitoring requires clear, actionable spatial awareness to identify emerging clusters and coordinate proactive vector control measures at the barangay level.",
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
      id: "urnotes",
      name: "UrNotes",
      subtitle: "Personal Productivity Web App",
      tagline: "Modern PWA for notes, sticky pads, task management, and trash recovery.",
      shortDescription: "A modern productivity application for organizing notes, sticky notes, tasks, and deleted items in one place.",
      category: "Web Systems",
      featured: true,
      technologies: ["Laravel", "React", "Vite", "JavaScript", "PWA"],
      imagePath: "assets/images/urnotes.png",
      fallbackImage: null,
      badge: "Full-Stack Productivity PWA",
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
        problem: "Users often juggle multiple distinct apps for quick scratchpad stickies, long-form notes, and daily task checklists.",
        solution: "A cohesive, high-performance web application combining quick sticky notes, rich note archiving, and interactive task checklists into a single responsive PWA interface.",
        myRole: "Full Stack Developer (Laravel REST API & React/Vite Frontend)",
        challenges: "Implementing responsive state management across multiple productivity modules while ensuring clean REST API synchronization with Laravel.",
        whatILearned: "Component architecture in React with modern Vite tooling, Laravel API resource controllers, and PWA service worker configurations.",
        screenshots: [],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "ai-resume-analyzer",
      name: "AI Resume Analyzer",
      subtitle: "ATS-Oriented Feedback & Career Evaluation",
      tagline: "Automated resume evaluation and structural feedback powered by AI.",
      shortDescription: "An AI-powered application designed to analyze resumes and provide structured feedback based on resume content and ATS-oriented criteria.",
      category: "Web Systems",
      featured: true,
      technologies: ["Laravel", "React", "Python", "Gemini API"],
      imagePath: "assets/images/ai-resume-analyzer.png",
      fallbackImage: null,
      badge: "AI & Full-Stack Integration",
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
        problem: "Job seekers often face automated Applicant Tracking System (ATS) filtering without knowing how to optimize their resumes for clarity and technical keywords.",
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
      id: "weathercrops",
      name: "WeatherCrops",
      subtitle: "Agricultural Weather & Decision Support App",
      tagline: "Mobile application combining meteorological forecasts with agricultural insights.",
      shortDescription: "A Flutter-based mobile application that combines weather information and agricultural data to provide useful information for crop-related decision making.",
      category: "Mobile",
      featured: true,
      technologies: ["Flutter", "Dart", "Open-Meteo API"],
      imagePath: "assets/images/weathercrops.png",
      fallbackImage: "file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded/media_1790479502363.png",
      badge: "Mobile Application",
      features: [
        "Real-time weather tracking (temperature, humidity, rain precipitation, wind, soil temperature)",
        "Location-based coordinates (customized for Talisay City, Negros Occidental)",
        "7-day daily forecast cards with condition indicators",
        "Agricultural and crop-related decision insights",
        "Live Open-Meteo API integration",
        "Clean, dark-themed mobile dashboard interface"
      ],
      details: {
        overview: "WeatherCrops demonstrates my experience with mobile application development, API integration, and presenting external data through a user-friendly interface.",
        problem: "Smallholder farmers and local agriculturalists need accessible, localized weather forecasts and soil conditions on their mobile devices to plan irrigation and harvesting.",
        solution: "A sleek Flutter mobile dashboard that queries Open-Meteo REST endpoints and transforms meteorological telemetry into simple, readable indicators for farm planning.",
        myRole: "Mobile Application Developer (Flutter & Dart)",
        challenges: "Handling asynchronous REST data fetches, managing offline fallbacks when GPS or network signals are weak, and structuring clean Flutter widget trees.",
        whatILearned: "State management in Flutter, Dart HTTP serialization, and designing clean dark-mode mobile UI layouts.",
        screenshots: [
          {
            title: "WeatherCrops Mobile Farm Dashboard (Talisay City, Negros Occidental)",
            src: "file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded/media_1790479502363.png",
            alt: "WeatherCrops Farm Dashboard Screenshot"
          }
        ],
        githubUrl: null,
        liveDemoUrl: null
      }
    },
    {
      id: "facility-reservation",
      name: "Facility Reservation System",
      subtitle: "Campus Venue & Facility Booking Management",
      tagline: "Web-based reservation management replacing manual paper logs.",
      shortDescription: "A web-based system designed to manage facility reservations and organize booking information.",
      category: "Web Systems",
      featured: true,
      technologies: ["PHP", "MySQL", "Laravel"],
      imagePath: "assets/images/facility-reservation.png",
      fallbackImage: null,
      badge: "Administrative System",
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

  experiences: [
    {
      id: "comelec-intern",
      company: "COMELEC (Commission on Elections)",
      position: "IT Support Intern",
      period: "Internship",
      highlight: "Hands-on IT Support Experience",
      imageShowcase: {
        title: "COMELEC Queue Management System (QMS) & Digital Operations",
        src: "file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded/media_1790479502482.png",
        caption: "Assisted with workstation deployment, queue operations, digital records, and technical support."
      },
      description: "During my internship with COMELEC, I provided technical and administrative support while assisting with IT-related operations and digital records.",
      responsibilities: [
        "Assisted with workstation deployment and setup",
        "Performed basic hardware diagnostics",
        "Installed and configured operating systems",
        "Set up computer peripherals (printers, biometric devices, scanners)",
        "Assisted with first-line technical support for staff",
        "Performed preventive maintenance on office computer equipment",
        "Assisted with cable management and workstation organization",
        "Maintained IT asset inventory records",
        "Assisted with data encoding and digital records management",
        "Supported the Online Voter Registration System operations"
      ],
      keySkills: ["Hardware Diagnostics", "OS Configuration", "Workstation Deployment", "Digital Records", "OVRS Support"]
    },
    {
      id: "chmsu-student-assistant",
      company: "Carlos Hilado Memorial State University",
      position: "Student Assistant — Office of Student Affairs",
      period: "2023–2024",
      highlight: "Institutional Administrative & Technical Support",
      imageShowcase: null,
      description: "Assisted with administrative and technical office tasks while supporting student services and daily office operations.",
      responsibilities: [
        "Prepared official documents and worksheets using Microsoft Word and Excel",
        "Assisted with student inquiries and frontline service desk requests",
        "Supported general office operations and inter-department communications",
        "Organized and maintained student records and document archives",
        "Assisted with technical and administrative tasks across university events"
      ],
      keySkills: ["Office Productivity", "Records Management", "Student Services", "Documentation"]
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
        "Organized, categorized, and archived student records",
        "Assisted with physical and digital filing and documentation",
        "Supported enrollment and community registration activities",
        "Assisted with administrative operational tasks under the registrar"
      ],
      keySkills: ["Data Encoding", "Document Archiving", "Registration Support", "Organization"]
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
    ],
    highlights: [
      "Capstone Project: Multi-module Information System (BAO System)",
      "Focus on bridging IT operational support with custom software solutions",
      "Extensive coursework in database management (SQL, MySQL) and software development"
    ]
  },

  certificates: [
    {
      id: "ibm-data-analysis",
      title: "Data Analysis with Python",
      issuer: "IBM — Cognitive Class",
      date: "January 18, 2025",
      badge: "Data & Python",
      description: "Practical data analysis techniques using Python, data structures, and foundational analytical methods.",
      status: "Verified Coursework"
    },
    {
      id: "ibm-sql-db",
      title: "SQL and Relational Databases 101",
      issuer: "IBM — Cognitive Class",
      date: "October 10, 2025",
      badge: "Database",
      description: "Relational database concepts, schema modeling, SQL query syntax, and database management.",
      status: "Verified Coursework"
    },
    {
      id: "google-analytics",
      title: "Google Analytics Certification",
      issuer: "Google",
      date: "October 11, 2025 – October 11, 2026",
      badge: "Analytics & Web",
      description: "Web analytics measurement, event tracking, user journeys, and data-driven reporting.",
      status: "Valid Certificate"
    },
    {
      id: "fcc-responsive-web",
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "November 14, 2024",
      badge: "Frontend Development",
      description: "Comprehensive hands-on training in responsive layout design, HTML5, CSS3, Flexbox, and CSS Grid (approx. 300 hours).",
      status: "300 Hours Completed"
    }
  ]
};
