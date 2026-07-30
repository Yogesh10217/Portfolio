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
    skills: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL"],
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
    skills: ["Docker", "Git", "GitHub", "Linux", "Postman"],
  },
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    icon: "🎨",
    skills: ["React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "AI / ML",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-500/10 to-rose-500/10",
    border: "border-pink-500/20",
    icon: "🤖",
    skills: ["LLM Inference", "OpenAI", "Ollama", "OCR", "AI Workflows"],
  },
];

export const experience = [
  {
    year: "Current",
    company: "KPMG",
    role: "ServiceNow Developer Intern",
    type: "Internship",
    description:
      "Working with enterprise workflows and ITSM automation. Developing and customizing ServiceNow workflows, business rules, and UI policies. Building enterprise workflow automation using Flow Designer, Script Includes, and Service Portal UI + REST API integrations.",
    tech: ["ServiceNow", "Flow Designer", "JavaScript", "REST APIs"],
    highlight: true,
  },
  {
    year: "2026 Batch",
    company: "Dayananda Sagar College of Engineering",
    role: "B.E. Information Science & Engineering",
    type: "Education",
    description:
      "Final year student with a strong focus on backend systems, distributed architectures, and AI integrations. Maintained excellent academic standing while building production-grade projects.",
    tech: ["C++", "Java", "Python", "Data Structures", "Algorithms"],
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
    icon: "🎓",
    title: "CGPA 8.7/10",
    subtitle: "Academic Excellence",
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: "🚀",
    title: "Production Systems",
    subtitle: "Built Scalable Architectures",
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
  },
];

export const projects = [
  {
    id: "llm-inference-engine",
    title: "LLM Inference Engine",
    subtitle: "Multi-Provider LLM Orchestration Platform",
    description:
      "A modular multi-provider LLM inference platform (OpenAI + Ollama) with a Provider Factory, Request Router, and dynamic Model Registry. Features streaming APIs, health monitoring, structured logging & Docker deployment.",
    longDescription:
      "Built to solve the problem of LLM vendor lock-in, this engine acts as an intelligent middleware layer. It exposes a single unified API while internally routing requests across providers based on availability and capability constraints.",
    featured: true,
    status: "Open Source",
    statusColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    color: "from-violet-600 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.3)",
    github: "https://github.com/Yogesh10217", // Needs specific repo link when available
    demo: null,
    tech: ["Python", "FastAPI", "Docker", "SQLAlchemy", "OpenAI", "Ollama"],
    features: [
      "Unified API compatible with OpenAI spec",
      "Dynamic Model Registry & Provider Factory",
      "Real-time streaming APIs",
      "Automatic provider health checks & monitoring",
      "Structured logging & request routing",
      "Dockerized for easy deployment",
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
    id: "krama-ai",
    title: "Krama AI",
    subtitle: "AI-Powered Claims Automation",
    description:
      "An AI-powered insurance claims platform with OCR-driven document ingestion, scalable storage abstraction, and background job workflows for enterprise document processing.",
    longDescription:
      "Krama AI automates the insurance claims lifecycle. The system uses a multi-stage pipeline combining OCR and AI reasoning to extract structured data from unstructured documents, handling complex background job workflows.",
    featured: true,
    status: "Production",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    color: "from-blue-600 to-cyan-600",
    glowColor: "rgba(37, 99, 235, 0.3)",
    github: "https://github.com/Yogesh10217", // Add real repo link when ready
    demo: null,
    tech: ["FastAPI", "PostgreSQL", "OCR", "SQLAlchemy", "Python"],
    features: [
      "OCR-driven document ingestion",
      "Scalable storage abstraction",
      "Background job workflows",
      "LLM-powered claim validation and reasoning",
      "Enterprise document processing pipelines",
      "Relational data integrity with PostgreSQL",
    ],
    architecture: [
      { step: "01", label: "Upload", desc: "Document received via API", icon: "📤" },
      { step: "02", label: "Storage", desc: "Scalable storage abstraction", icon: "🗄️" },
      { step: "03", label: "OCR", desc: "Text & field extraction", icon: "🔍" },
      { step: "04", label: "AI Processing", desc: "Background job workflows", icon: "⚙️" },
      { step: "05", label: "Results", desc: "Structured data in PostgreSQL", icon: "📊" },
    ],
    challenges: "Handling diverse document formats and orchestrating long-running OCR and AI jobs without blocking the main API threads.",
    learnings: "Asynchronous task queues and robust storage abstractions are essential for building responsive document processing platforms.",
    decisions: [
      {
        title: "Why FastAPI over Django?",
        reason:
          "FastAPI's async-first design made it ideal for a high-throughput document processing API with multiple concurrent background jobs.",
      },
      {
        title: "Why PostgreSQL & SQLAlchemy?",
        reason:
          "Claims data is highly relational. PostgreSQL with SQLAlchemy ORM provides robust schema management and handles complex data relationships effectively.",
      },
    ],
    metrics: ["OCR integration", "Background workflows", "Enterprise scale"],
  },
  {
    id: "subscription-tracker",
    title: "Subscription Tracker",
    subtitle: "Automated Management System",
    description:
      "Subscription management system with automated email reminders, JWT-based auth, bcrypt encryption, and a scalable MongoDB schema with dynamic renewal logic.",
    longDescription:
      "A complete full-stack backend application designed to help users track and manage their recurring subscriptions. Features a robust authentication system and automated chronological jobs for sending timely email reminders.",
    featured: true,
    status: "Deployed",
    statusColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    color: "from-pink-600 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.3)",
    github: "https://github.com/Yogesh10217", // Add real repo link when ready
    demo: null,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    features: [
      "JWT-based authentication system",
      "Bcrypt password encryption",
      "Automated email reminders via cron jobs",
      "Dynamic renewal logic",
      "Scalable MongoDB schema design",
      "RESTful API architecture",
    ],
    architecture: [
      { step: "01", label: "Auth", desc: "JWT & Bcrypt verification", icon: "🔒" },
      { step: "02", label: "API", desc: "Express.js REST endpoints", icon: "🌐" },
      { step: "03", label: "Database", desc: "MongoDB dynamic schema", icon: "🗄️" },
      { step: "04", label: "Cron", desc: "Automated background jobs", icon: "⏱️" },
      { step: "05", label: "Email", desc: "Reminder notifications", icon: "✉️" },
    ],
    challenges: "Designing a database schema that efficiently handles varying subscription cycles (monthly, yearly, custom) while allowing fast queries for upcoming renewals.",
    learnings: "Properly indexing MongoDB collections based on query patterns drastically improves the performance of background cron jobs searching for due subscriptions.",
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
    metrics: ["JWT Auth", "Automated Emails", "Dynamic Schema"],
  },
];
