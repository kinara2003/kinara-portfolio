// Site content and portfolio data
export const site = {
  name: 'Kinara Hemachandra',
  title: 'Junior Business Analyst | Software Engineering Undergraduate',
  email: 'Kinarahemachandra2003@gmail.com',
  phone: '+94 77 222 1736',
  linkedin: 'https://www.linkedin.com/in/kinara-hemachandra-10a174284',
  github: 'https://github.com/kinara2003',
  location: 'Wijayaba Place, Malabe, Sri Lanka',
  cvPath: '/Kinara_Hemachandra_CV.pdf',
  formEndpoint: '', // e.g. a Formspree URL; if empty the form opens your email app
  photo: '/profile.jpg',
}

export type Section = { h: string; p?: string; l?: string[] }
export type Project = {
  slug: string; title: string; cat: string; role: string; featured?: boolean; note?: string
  summary: string; sections: Section[]; tools: string[]
  flows: { title: string; steps: string[]; conceptual?: boolean }[]
  links?: { label: string; url: string }[]
}

export const experience = [
  {
    org: 'Cloud Syntex',
    place: 'Rajagiriya, Sri Lanka',
    role: 'Business Analyst (Intern)',
    period: 'Feb 2026 – September 2026',
    d: 'Collaborated with clients and cross-functional teams to gather, analyze, and document requirements for CRM enhancements and new features.',
    l: [
      'Collaborated with clients to gather, analyze, and document business and functional requirements for CRM enhancements and new features.',
      'Prepared Business Requirement Documents (BRDs), Software Requirement Specifications (SRS), user guides, and other project documentation.',
      'Participated in client meetings, captured meeting minutes, clarified requirements, and translated business needs into actionable tasks for the development team.',
      'Worked closely with developers, UI/UX designers, and QA engineers throughout the SDLC to ensure requirements were accurately implemented.',
      'Analyzed existing CRM workflows and identified opportunities to improve usability, automation, and business processes.',
      'Documented CRM integrations, including HubSpot and Dinero, detailing integration workflows, data synchronization, and user processes.',
      'Created process flows, feature descriptions, and functional documentation to support system development and client onboarding.',
      'Assisted in backlog management by converting business requirements into clear user stories and acceptance criteria.',
      'Validated implemented features against documented requirements and coordinated with stakeholders to resolve requirement-related issues.',
      'Contributed to continuous improvement of product documentation, ensuring accuracy, consistency, and alignment with client expectations.',
      'Analyzed business processes and gathered requirements to support data-driven decision-making, improving project efficiency and stakeholder alignment.'
    ]
  },
  {
    org: 'RAR Properties',
    place: 'Dubai, UAE (Remote)',
    role: 'Virtual Telecommunication Assistant',
    period: 'Sep 2025 – Nov 2026',
    d: 'Customer communications management, CRM customer records, and cross-team operational coordination.',
    l: [
      'Managed customer communications through phone, email, and digital platforms, addressing inquiries and ensuring professional, timely responses.',
      'Maintained and updated customer information, interaction records, and follow-up activities using CRM systems.',
      'Coordinated with internal teams and customers to resolve issues, manage requests, and improve overall communication processes.'
    ]
  },
  {
    org: 'Independent',
    place: 'Sri Lanka',
    role: 'Freelance Mathematics and ICT Tutor',
    period: 'Approximately 2 years',
    d: 'Individual tutoring for students on Edexcel and local syllabuses.',
    l: [
      'Taught Mathematics and ICT.',
      'Explained technical and mathematical concepts in simple, structured steps.',
      'Adapted teaching methods to different learning needs, building communication and interpersonal skills.'
    ]
  },
]

export const extra = {
  title: 'Disala Coir Industries – Website Development',
  d: 'A website for a family-associated coir business (coir products and raw materials). A practical business and web project, not formal employment.',
  url: ''
}

export const skills: { g: string; items: string[] }[] = [
  {
    g: 'Business Analysis',
    items: [
      'Requirements Gathering',
      'Requirements Analysis',
      'BRD & SRS Documentation',
      'Business Process Analysis',
      'Stakeholder Engagement',
      'User Stories & Acceptance Criteria',
      'Workflow Analysis',
      'Process Improvement',
      'Requirement Clarification',
      'System Analysis',
      'Backlog Management'
    ]
  },
  {
    g: 'Technical & Engineering',
    items: [
      'SQL – Intermediate',
      'Data Analysis',
      'Excel – Intermediate',
      'Software Engineering Fundamentals',
      'Database Concepts',
      'Technical Troubleshooting',
      'Web Application Fundamentals',
      'Systems Understanding'
    ]
  },
  {
    g: 'Tools and Platforms',
    items: [
      'HubSpot CRM',
      'Dinero',
      'Jira',
      'Figma',
      'Trello',
      'Microsoft Office (Word, Excel)',
      'Google Workspace',
      'Android Studio (Kotlin)',
      'Java & MERN Stack',
      'Git & GitHub'
    ]
  },
  {
    g: 'Core Competencies',
    items: [
      'Stakeholder Communication',
      'Customer Service',
      'Cross-Team Collaboration',
      'Problem-Solving',
      'Analytical Thinking',
      'Multitasking',
      'Report Writing',
      'Remote Collaboration',
      'Adaptability',
      'Attention to Detail'
    ]
  },
]

export const education = {
  school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  q: 'BSc (Hons) in Software Engineering',
  status: 'Undergraduate (Jul 2023 – Present). Expected graduation 2027.',
  areas: [
    'Software Engineering',
    'Database Systems',
    'Enterprise Application Integration',
    'Secure Software Development',
    'Software Architecture',
    'Systems Analysis',
    'Information Technology',
    'Web Development'
  ]
}

export const interests = [
  'Business Analysis',
  'Business Operations',
  'Product Analysis',
  'Product Operations',
  'Business Process Improvement',
  'Digital Transformation',
  'CRM Systems',
  'Enterprise Systems',
  'Technology-driven operational improvements',
  'Stakeholder collaboration'
]

export const projects: Project[] = [
  {
    slug: 'power-solutions-crm',
    title: 'Power Solutions CRM',
    cat: 'Business Analysis / CRM / Business Process Analysis',
    role: 'Business Analyst Intern, Cloud Syntex',
    featured: true,
    note: 'Anonymised case study based on practical internship experience. Diagrams are conceptual illustrations.',
    summary: 'Analysis and documentation of business workflows and system requirements for an integrated CRM covering sales, client management, activities, products, and external integrations.',
    tools: ['HubSpot CRM', 'Dinero', 'Jira', 'Figma', 'Word / Google Docs'],
    sections: [
      {
        h: 'Project Overview',
        p: 'A comprehensive CRM business analysis project covering how sales opportunities, leads, client interactions, activities, products, and operational workflows can be managed in one integrated CRM environment spanning multiple functional areas and external integrations.'
      },
      {
        h: 'Problem Statement',
        p: 'Disjointed sales activities and client management processes lacked centralized tracking, real-time visibility, and seamless synchronization with external accounting and operational tools.'
      },
      {
        h: 'Objectives',
        l: [
          'Understand client business workflows and pain points through stakeholder engagement.',
          'Document clear functional and non-functional requirements for engineering teams.',
          'Detail synchronization workflows and data integration between CRM and external systems (HubSpot, Dinero).'
        ]
      },
      {
        h: 'My Role & Contributions',
        p: 'Responsible for gathering requirements, mapping business processes into functional specifications, producing BRDs and SRS, creating workflow diagrams, and coordinating between client stakeholders and development teams.'
      },
      {
        h: 'Core Functional Areas Documented',
        l: [
          'Interactive dashboard with sales targets, pipelines, and performance KPIs',
          'Lead, opportunity, company, and client lifecycle management',
          'Custom sales pipelines with stage tracking and conversion metrics',
          'Activity tracking (calls, meetings, tasks: completed, pending, overdue)',
          'Automated data pre-fill and synchronization',
          'HubSpot CRM and Dinero accounting integration workflows',
          'Role-based access control and administrative configurations'
        ]
      },
      {
        h: 'Key Learnings & Impact',
        p: 'Sharpened ability to translate complex stakeholder expectations into structured technical user stories, manage requirement dependencies across multiple teams, and ensure high fidelity between business goals and software implementation.'
      }
    ],
    flows: [
      {
        title: 'Lead-to-Opportunity Workflow',
        steps: ['Lead Captured', 'Qualification', 'Opportunity Created', 'Pipeline Stages', 'Won / Closed'],
        conceptual: true
      },
      {
        title: 'Activity Management Lifecycle',
        steps: ['Task / Meeting Scheduled', 'Pending Notification', 'Activity Logged', 'Dashboard KPI Updated'],
        conceptual: true
      },
      {
        title: 'HubSpot & Dinero Integration Pipeline',
        steps: ['HubSpot CRM', 'Data Sync Engine', 'Power Solutions CRM', 'Dinero Invoicing'],
        conceptual: true
      }
    ]
  },
  {
    slug: 'wellness-studio-management',
    title: 'Wellness Studio Management System',
    cat: 'Full-Stack Web Application / Client Project',
    role: 'Software Developer & Client Liaison',
    featured: true,
    summary: 'Collaborated with a real-world client to design and develop a comprehensive wellness studio system featuring appointment scheduling, client management, and service tracking.',
    tools: ['Java', 'MERN Stack', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    sections: [
      {
        h: 'Project Overview',
        p: 'A tailored business management system built in collaboration with a wellness studio owner to digitize their appointment booking, client records, and service tracking.'
      },
      {
        h: 'Business Needs & Requirements',
        l: [
          'Eliminate manual scheduling conflicts and paper appointment books.',
          'Provide clients with an intuitive digital booking experience.',
          'Allow staff to track client visit history, preferences, and service packages.',
          'Generate operational insights on daily bookings and service popularity.'
        ]
      },
      {
        h: 'My Contribution',
        p: 'Engaged directly with the client to elicit functional requirements, mapped out user journeys, implemented frontend and backend services, and verified solution acceptance.'
      }
    ],
    flows: [
      {
        title: 'Booking & Service Flow',
        steps: ['Service Selected', 'Date & Time Slot Picked', 'Client Info Recorded', 'Booking Confirmed', 'Staff Calendar Updated']
      }
    ]
  },
  {
    slug: 'iot-water-monitoring',
    title: 'Intelligent IoT-Based Water Infrastructure Monitoring & NRW Detection',
    cat: 'University Research / IoT / Systems Analysis',
    role: 'Research Group Member (Component: Fraud & Non-Revenue Water Detection)',
    featured: true,
    summary: 'Research and prototype system analyzing IoT sensor telemetry to detect suspicious water usage, meter tampering, and non-revenue water (NRW) in Sri Lanka.',
    tools: ['IoT Sensors', 'Data Analytics', 'Monitoring Dashboard', 'Python', 'Systems Architecture'],
    sections: [
      {
        h: 'Project Overview',
        p: 'Explores how IoT sensing and analytical logic can support municipal water distribution infrastructure by identifying abnormal consumption, physical meter tampering, and pipe leaks in real time.'
      },
      {
        h: 'My Focus Area: Water Fraud & NRW Detection',
        l: [
          'Magnetometer and tilt sensor detection logic for physical meter tampering',
          'Reverse-flow and sudden abnormal flow rate detection',
          'Bypass-line identification via comparative flow and neighbourhood pressure analysis',
          'Alert triggering and dashboard visual representations for utility operators'
        ]
      }
    ],
    flows: [
      {
        title: 'Telemetry & Anomaly Detection Pipeline',
        steps: ['Water Meter Sensors', 'Data Ingestion Node', 'Analytical Processing', 'Fraud Detection Logic', 'Operator Alert Dashboard']
      }
    ]
  },
  {
    slug: 'finance-tracker',
    title: 'Personal Finance Tracker Mobile App',
    cat: 'Mobile Application Development',
    role: 'Android Developer',
    featured: false,
    summary: 'Native Android application designed to track personal income, expenses, and budget categories with real-time balance calculations and visual financial breakdowns.',
    tools: ['Kotlin', 'Android Studio', 'XML', 'SQLite', 'Material Design'],
    sections: [
      {
        h: 'Project Overview',
        p: 'A user-centric mobile solution empowering individuals to manage daily financial transactions, categorize expenditures, and stay within monthly budgets.'
      },
      {
        h: 'Features & Capabilities',
        l: [
          'Fast transaction logging for income and expenses',
          'Dynamic category assignment with custom labels and icons',
          'Real-time balance updates and expense summaries',
          'Local offline persistence with SQLite'
        ]
      }
    ],
    flows: [
      {
        title: 'Transaction Tracking Flow',
        steps: ['Log Amount & Type', 'Assign Category', 'Add Date/Note', 'Balance Updated in Real-Time']
      }
    ]
  },
  {
    slug: 'online-job-portal',
    title: 'Online Job Portal',
    cat: 'Web Application Development',
    role: 'Frontend & Logic Developer',
    featured: false,
    summary: 'Web platform connecting employers and candidates, allowing recruiters to publish vacancy listings and applicants to filter, explore, and submit job applications.',
    tools: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    sections: [
      {
        h: 'Project Overview',
        p: 'Developed a responsive job portal that streamlines candidate discovery and application workflows for employers and job seekers.'
      },
      {
        h: 'Key Functionalities',
        l: [
          'Employer vacancy posting and job management panel',
          'Search and keyword filtering for prospective candidates',
          'Structured application submission workflow',
          'Responsive layout optimized for desktop and mobile viewports'
        ]
      }
    ],
    flows: [
      {
        title: 'Job Application Journey',
        steps: ['Job Search / Filter', 'View Job Description', 'Submit Application', 'Employer Review Dashboard']
      }
    ]
  },
  {
    slug: 'clean-water-sanitation',
    title: 'Clean Water & Sanitation System',
    cat: 'Community Web Platform',
    role: 'Frontend & System Workflow Developer',
    featured: false,
    summary: 'Interactive web platform designed to monitor community water resources, track sanitation maintenance requests, and facilitate citizen reporting.',
    tools: ['HTML5', 'CSS3', 'JavaScript'],
    sections: [
      {
        h: 'Project Overview',
        p: 'A social-impact web project aligning with UN Sustainable Development Goals (SDG 6) to support community-level clean water monitoring and sanitation tracking.'
      },
      {
        h: 'Scope',
        l: [
          'Community incident reporting for water supply disruptions',
          'Sanitation service status tracking',
          'Public information and resource hygiene guidelines'
        ]
      }
    ],
    flows: []
  },
  {
    slug: 'spare-parts-management',
    title: 'Online Vehicle Spare Parts Management System',
    cat: 'Inventory & E-Commerce Web System',
    role: 'Web Application Developer',
    featured: false,
    summary: 'Inventory management and purchasing platform enabling automotive suppliers to organize stock, process orders, and manage customer sales.',
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    sections: [
      {
        h: 'Project Overview',
        p: 'Developed an end-to-end inventory tracking and order placement web application tailored to automotive spare parts retailers.'
      },
      {
        h: 'Features',
        l: [
          'Catalog organization by vehicle make, model, and category',
          'Real-time inventory level indicators',
          'Customer shopping cart and order processing workflow'
        ]
      }
    ],
    flows: []
  },
  {
    slug: 'crm-documentation',
    title: 'CRM Documentation and Workflow Analysis',
    cat: 'Business Analysis / System Documentation',
    role: 'Business Analyst Intern, Cloud Syntex',
    featured: false,
    summary: 'Structured documentation system translating business rules, user workflows, and external software integrations into clear BRD/SRS artifacts.',
    tools: ['Jira', 'Figma', 'Microsoft Word', 'Google Docs'],
    sections: [
      {
        h: 'Documentation Approach',
        l: [
          'Deconstructing stakeholder business requirements into functional modules',
          'Mapping user journeys and role-specific workflows',
          'Defining integration specifications between CRM and third-party systems',
          'Standardizing acceptance criteria and verification checklists'
        ]
      }
    ],
    flows: []
  },
  {
    slug: 'secure-software-development',
    title: 'Secure Software Development Assignment (SE4030)',
    cat: 'Software Security / University Project',
    role: 'Group Member (Input Security, XSS Prevention, File Security)',
    featured: false,
    summary: 'Security assessment, threat modeling, and code hardening on an existing enterprise application using black-box and white-box security methodologies.',
    tools: ['Input Validation', 'XSS Prevention', 'OWASP Guidelines', 'Secure Code Review'],
    sections: [
      {
        h: 'Project Overview',
        p: 'Group assignment examining vulnerabilities and implementing defensive security controls across an application codebase.'
      },
      {
        h: 'Individual Contributions',
        l: [
          'Input sanitation and validation mechanisms',
          'Cross-Site Scripting (XSS) defenses and output encoding',
          'File upload security restrictions and MIME-type validation',
          'Testing and regression verification for implemented security patches'
        ]
      }
    ],
    flows: []
  }
]
