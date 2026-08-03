// lib/data.ts — All portfolio content

export const personalInfo = {
  name: "Yogesh E",
  tagline: "Software Development Engineer",
  roles: [
    "Founding Backend Engineer",
    "AI Infrastructure Builder",
    "Full Stack Developer",
    "Software Development Engineer",
  ],
  summary:
    "Software Development Engineer with experience building scalable backend systems, AI infrastructure, and production-grade APIs using Python, FastAPI, SQLAlchemy, PostgreSQL, and Docker. Skilled in designing clean, maintainable architectures and integrating LLM and OCR pipelines into real products. Strong foundation in Data Structures & Algorithms, distributed systems, OOP, and system design, with a track record of taking projects from concept to deployment.",
  location: "Bangalore, India",
  email: "eyogesh104@gmail.com",
  phone: "+91-8050255818",
  github: "https://github.com/Yogesh10217",
  linkedin: "https://www.linkedin.com/in/eyogesh/",
  githubUsername: "Yogesh10217",
};

export const techStack = [
  {
    category: "Backend",
    icon: "SERVER",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "SQLAlchemy", "REST APIs", "Microservices"],
  },
  {
    category: "Languages",
    icon: "CODE",
    skills: ["JavaScript", "C++", "Java", "TypeScript", "SQL", "Python"],
  },
  {
    category: "Database",
    icon: "DB",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    icon: "DEPLOY",
    skills: ["Docker", "Git", "GitHub", "Linux", "Postman", "CI/CD"],
  },
  {
    category: "Frontend",
    icon: "UI",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "AI / ML",
    icon: "AI",
    skills: ["LLMs", "Prompt Engineering", "OCR", "Google Gemini API"],
  },
  {
    category: "Core CS",
    icon: "CODE",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
  },
];

export const experience = [
  {
    year: "Dec 2025 – Present",
    company: "Krama AI",
    role: "Founding Backend Engineer",
    type: "Remote",
    description:
      "Built an AI-powered insurance claims processing platform end-to-end using FastAPI, SQLAlchemy, PostgreSQL, and Docker. Designed a scalable storage abstraction layer for secure ingestion and lifecycle management, and built OCR/document-conversion pipelines. Developed REST APIs and asynchronous workflows with clean architecture and dependency injection. Strengthened backend reliability through structured logging and automated testing.",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Python", "OCR"],
    highlight: true,
  },
  {
    year: "Feb 2026 – Present",
    company: "KPMG",
    role: "ServiceNow Developer Intern",
    type: "Bangalore, India",
    description:
      "Customized enterprise ITSM workflows for client organizations using Flow Designer and server-side scripting. Built Business Rules, Script Includes, UI Policies, and Service Portal components. Integrated ServiceNow with external systems via REST APIs, and partnered with cross-functional teams.",
    tech: ["ServiceNow", "Flow Designer", "JavaScript", "REST APIs"],
    highlight: true,
  },
  {
    year: "2022 – 2026",
    company: "Dayananda Sagar College of Engineering",
    role: "B.E. Information Science & Engineering",
    type: "Education (CGPA: 8.9/10)",
    description:
      "Information Science & Engineering with a strong focus on backend systems, distributed architectures, and AI integrations. Maintained excellent academic standing.",
    tech: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    highlight: false,
  },
  {
    year: "2020 – 2022",
    company: "Presidency PU College",
    role: "PUC (PCMB)",
    type: "Education (94%)",
    description:
      "Pre-University College in Physics, Chemistry, Mathematics, and Biology (PCMB) - Sira, Tumkur.",
    tech: [],
    highlight: false,
  },
];

export const achievements = [
  {
    icon: "CAD",
    title: "ServiceNow CAD",
    subtitle: "Certified Application Developer",
  },
  {
    icon: "CSA",
    title: "ServiceNow CSA",
    subtitle: "Certified System Administrator",
  },
  {
    icon: "PAT",
    title: "Filed a Patent",
    subtitle: "AI Architecture",
  },
  {
    icon: "GPA",
    title: "CGPA 8.9/10",
    subtitle: "Academic Excellence",
  },
];

export const projects = [
  {
    id: "llm-inference-engine",
    title: "LLM Inference Engine",
    subtitle: "Multi-Provider LLM Orchestration Platform",
    description:
      "Designed a modular, multi-provider LLM inference platform (OpenAI + Ollama) using a Provider Factory, Request Router, and Model Registry, with streaming APIs, structured logging, and health monitoring.",
    longDescription:
      "Containerized the platform with Docker and set up CI-ready automated testing infrastructure. Implemented provider abstraction, streaming APIs, dependency injection, structured logging, and observability middleware.",
    featured: true,
    status: "Open Source",
    type: "AI",
    github: "https://github.com/Yogesh10217",
    demo: null,
    tech: ["Python", "FastAPI", "Docker", "SQLAlchemy"],
    features: [
      "Provider Factory & Model Registry",
      "Real-time streaming APIs",
      "Dependency Injection",
      "Structured logging & Observability",
      "Dockerized testing infrastructure",
    ],
    architecture: [
      { step: "01", label: "Client Request", desc: "Incoming LLM API request", icon: "REQ" },
      { step: "02", label: "Request Router", desc: "Routes by model & priority", icon: "ROU" },
      { step: "03", label: "Provider Factory", desc: "Instantiates correct provider", icon: "FAC" },
      { step: "04", label: "Model Registry", desc: "Maps model IDs to providers", icon: "REG" },
      { step: "05", label: "LLM Provider", desc: "OpenAI / Ollama / Gemini", icon: "LLM" },
    ],
    challenges: "Implementing consistent streaming behavior across providers that have different SSE implementations required a unified streaming adapter abstraction.",
    learnings: "The Factory + Registry pattern is extremely powerful for extensible systems. Adding a new LLM provider requires zero changes to existing routing logic.",
    decisions: [
      {
        title: "Why a Provider Factory pattern?",
        reason:
          "The Factory pattern allows adding new LLM providers by implementing a single interface — zero changes to the routing or streaming layers.",
      },
      {
        title: "Why SQLAlchemy?",
        reason:
          "Used for robust configuration management and logging state interactions in a relational database, providing ACID guarantees for registry data.",
      },
    ],
    metrics: ["Multiple providers unified", "Dynamic registry", "Streaming API"],
  },
  {
    id: "ai-research-tool",
    title: "AI-Powered Research Tool & Fake News Detection",
    subtitle: "Fake News Detection SaaS",
    description:
      "Built a SaaS platform combining AI-assisted academic research with fake news detection, using NLP and the Google Gemini API for content classification and semantic verification.",
    longDescription:
      "Filed a patent for the platform's architecture and intelligent document-analysis workflow. Implemented AI-powered content classification and semantic verification workflows.",
    featured: true,
    status: "Production",
    type: "SaaS",
    github: "https://github.com/Yogesh10217",
    demo: null,
    tech: ["Node.js", "TypeScript", "Gemini API"],
    features: [
      "AI-assisted academic research",
      "Fake news detection via NLP",
      "Content classification workflow",
      "Semantic verification",
      "Patented intelligent document analysis architecture",
    ],
    architecture: [
      { step: "01", label: "Input", desc: "Article or document submitted", icon: "INP" },
      { step: "02", label: "NLP Processing", desc: "Extracting key semantics", icon: "NLP" },
      { step: "03", label: "Gemini API", desc: "Advanced semantic verification", icon: "API" },
      { step: "04", label: "Classification", desc: "Scoring & validation", icon: "CLS" },
      { step: "05", label: "Result", desc: "Verification report", icon: "OUT" },
    ],
    challenges: "Handling large documents and accurately classifying nuanced or complex fake news scenarios without high false positives.",
    learnings: "Prompt engineering with Gemini is highly nuanced; semantic workflows require careful multi-step validation.",
    decisions: [
      {
        title: "Why Google Gemini API?",
        reason:
          "Gemini offered superior multi-modal and semantic understanding capabilities, essential for verifying academic texts and detecting misinformation.",
      },
      {
        title: "Why patent the architecture?",
        reason:
          "The specific workflow combining NLP pipelines with LLM verification was novel enough to warrant protecting the intellectual property.",
      },
    ],
    metrics: ["Patented Architecture", "AI Verification", "High Accuracy"],
  },
  {
    id: "subscription-tracker",
    title: "Subscription Tracker",
    subtitle: "Automated Management System",
    description:
      "Built a subscription management platform with secure JWT authentication, automated renewal reminders, and email notifications.",
    longDescription:
      "Designed scalable MongoDB schemas and implemented robust authentication, authorization, and background scheduling workflows. Improved reliability through secure password encryption, validation, and comprehensive error handling.",
    featured: true,
    status: "Deployed",
    type: "Backend",
    github: "https://github.com/Yogesh10217",
    demo: null,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Nodemailer"],
    features: [
      "JWT-based authentication system",
      "Bcrypt password encryption",
      "Automated email reminders via Nodemailer",
      "Scalable MongoDB schema design",
      "Comprehensive error handling",
    ],
    architecture: [
      { step: "01", label: "Auth", desc: "JWT & bcrypt verification", icon: "AUTH" },
      { step: "02", label: "API", desc: "Express.js REST endpoints", icon: "API" },
      { step: "03", label: "Database", desc: "MongoDB dynamic schema", icon: "DB" },
      { step: "04", label: "Workflows", desc: "Background scheduling", icon: "JOB" },
      { step: "05", label: "Email", desc: "Nodemailer notifications", icon: "MAIL" },
    ],
    challenges: "Designing a database schema that efficiently handles varying subscription cycles (monthly, yearly, custom) while allowing fast queries for upcoming renewals.",
    learnings: "Properly indexing MongoDB collections based on query patterns drastically improves the performance of background jobs searching for due subscriptions.",
    decisions: [
      {
        title: "Why Node.js & Express?",
        reason:
          "The non-blocking I/O model of Node.js is perfect for handling many concurrent API requests and lightweight background tasks like sending emails.",
      },
      {
        title: "Why MongoDB?",
        reason:
          "The flexible document model allows for storing varying metadata associated with different types of subscriptions without strict schema migrations.",
      },
    ],
    metrics: ["JWT Auth", "Background Workflows", "Dynamic Schema"],
  },
];
