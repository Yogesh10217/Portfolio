// lib/data.ts — All portfolio content

export const personalInfo = {
  name: "Yogesh E",
  tagline: "Software Development Engineer",
  roles: [
    "Backend Engineer",
    "AI Infrastructure Builder",
    "Full Stack Developer",
    "Software Development Engineer",
  ],
  summary:
    "I'm a final-year Information Science & Engineering student at Dayananda Sagar College of Engineering, passionate about building production-grade backend systems, AI infrastructure, and document processing pipelines. I enjoy taking products from idea to deployment — developing robust APIs, architecting scalable databases, and integrating intelligent LLM features that solve real-world problems.",
  location: "Bengaluru, India",
  email: "eyogesh104@gmail.com",
  phone: "+91-8050255818",
  github: "https://github.com/Yogesh10217",
  linkedin: "https://www.linkedin.com/in/eyogesh/",
  githubUsername: "Yogesh10217",
};

export const techStack = [
  {
    category: "Backend",
    color: "from-violet-500 to-purple-500",
    bg: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500/20",
    icon: "⚙️",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "SQLAlchemy", "REST APIs"],
  },
  {
    category: "Languages",
    color: "from-yellow-500 to-orange-500",
    bg: "from-yellow-500/10 to-orange-500/10",
    border: "border-yellow-500/20",
    icon: "💻",
    skills: ["JavaScript", "C++", "Java", "TypeScript", "SQL", "Python"],
  },
  {
    category: "Database",
    color: "from-emerald-500 to-green-500",
    bg: "from-emerald-500/10 to-green-500/10",
    border: "border-emerald-500/20",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-500/20",
    icon: "🚀",
    skills: ["Docker", "Git", "GitHub", "Linux", "Postman", "CI/CD"],
  },
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    icon: "🎨",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "AI / ML",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-500/10 to-rose-500/10",
    border: "border-pink-500/20",
    icon: "🤖",
    skills: ["LLM Inference", "OpenAI", "Ollama", "OCR", "Gemini API"],
  },
];

export const experience = [
  {
    year: "Jan 2026 – Present",
    company: "Krama AI",
    role: "Backend Engineer",
    type: "Stealth AI Startup (Remote)",
    description:
      "Engineered an AI-powered insurance claims processing platform using FastAPI, SQLAlchemy, PostgreSQL, and Docker. Designed a scalable storage abstraction layer for secure document ingestion and lifecycle management, and built OCR and document conversion pipelines for multi-page insurance claims into structured data.",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Python"],
    highlight: true,
  },
  {
    year: "Feb 2026 – Present",
    company: "KPMG",
    role: "ServiceNow Developer Intern",
    type: "Internship (Bangalore, India)",
    description:
      "Customized enterprise workflows using Flow Designer and server-side scripting. Developed Business Rules, Script Includes, UI Policies, Service Portal components, and REST API integrations. Collaborated with cross-functional teams to enhance enterprise ITSM workflows.",
    tech: ["ServiceNow", "Flow Designer", "JavaScript", "REST APIs"],
    highlight: false,
  },
  {
    year: "2022 – 2026",
    company: "Dayananda Sagar College of Engineering",
    role: "B.E. Information Science & Engineering",
    type: "Education (CGPA: 8.7/10)",
    description:
      "Final year student with a strong focus on backend systems, distributed architectures, and AI integrations. Maintained excellent academic standing while building production-grade projects.",
    tech: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    highlight: false,
  },
  {
    year: "2020 – 2022",
    company: "Presidency PU College",
    role: "PUC (PCMB)",
    type: "Education (94%)",
    description:
      "Pre-University College in Physics, Chemistry, Mathematics, and Biology.",
    tech: [],
    highlight: false,
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "ServiceNow CAD",
    subtitle: "Certified Application Developer",
    color: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/30",
    glow: "shadow-yellow-500/20",
  },
  {
    icon: "🏅",
    title: "ServiceNow CSA",
    subtitle: "Certified System Administrator",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
  },
  {
    icon: "📜",
    title: "Filed a Patent",
    subtitle: "AI Research Architecture",
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
  },
  {
    icon: "🎓",
    title: "CGPA 8.7/10",
    subtitle: "Academic Excellence",
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
  },
];

export const projects = [
  {
    id: "llm-inference-engine",
    title: "LLM Inference Engine",
    subtitle: "Multi-Provider LLM Orchestration Platform",
    description:
      "Designed a modular multi-provider LLM inference platform supporting OpenAI and Ollama using Provider Factory, Request Router, and Model Registry.",
    longDescription:
      "Implemented provider abstraction, streaming APIs, dependency injection, structured logging, observability middleware, and health monitoring. Containerized the platform using Docker with automated CI-ready testing infrastructure.",
    featured: true,
    status: "Open Source",
    statusColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    color: "from-violet-600 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.3)",
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
      { step: "01", label: "Client Request", desc: "Incoming LLM API request", icon: "📨" },
      { step: "02", label: "Request Router", desc: "Routes by model & priority", icon: "🔀" },
      { step: "03", label: "Provider Factory", desc: "Instantiates correct provider", icon: "🏭" },
      { step: "04", label: "Model Registry", desc: "Maps model IDs to providers", icon: "📋" },
      { step: "05", label: "LLM Provider", desc: "OpenAI / Ollama / Gemini", icon: "🤖" },
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
    title: "AI-Powered Research Tool",
    subtitle: "Fake News Detection SaaS",
    description:
      "Developed a SaaS platform for AI-assisted academic research and fake news detection using NLP and Google Gemini API.",
    longDescription:
      "Implemented AI-powered content classification and semantic verification workflows. Filed a patent for the platform's architecture and intelligent document analysis workflow.",
    featured: true,
    status: "Production",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    color: "from-emerald-600 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.3)",
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
      { step: "01", label: "Input", desc: "Article or document submitted", icon: "📄" },
      { step: "02", label: "NLP Processing", desc: "Extracting key semantics", icon: "🧠" },
      { step: "03", label: "Gemini API", desc: "Advanced semantic verification", icon: "🤖" },
      { step: "04", label: "Classification", desc: "Scoring & validation", icon: "📊" },
      { step: "05", label: "Result", desc: "Verification report", icon: "✅" },
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
    statusColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    color: "from-pink-600 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.3)",
    github: "https://github.com/Yogesh10217", 
    demo: null,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Upstash", "Nodemailer"],
    features: [
      "JWT-based authentication system",
      "Bcrypt password encryption",
      "Upstash background workflows",
      "Automated email reminders via Nodemailer",
      "Scalable MongoDB schema design",
      "Comprehensive error handling",
    ],
    architecture: [
      { step: "01", label: "Auth", desc: "JWT & bcrypt verification", icon: "🔒" },
      { step: "02", label: "API", desc: "Express.js REST endpoints", icon: "🌐" },
      { step: "03", label: "Database", desc: "MongoDB dynamic schema", icon: "🗄️" },
      { step: "04", label: "Workflows", desc: "Upstash scheduling", icon: "⏱️" },
      { step: "05", label: "Email", desc: "Nodemailer notifications", icon: "✉️" },
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
    metrics: ["JWT Auth", "Upstash Workflows", "Dynamic Schema"],
  },
];
