export const personalInfo = {
  name: "Amit Kumar",
  title: "Senior Full Stack Engineer",
  subtitle: "AI Engineer · Generative AI · MERN Stack",
  email: "ams281997@gmail.com",
  phone: "+91 7388110797",
  linkedin: "https://linkedin.com/in/amikum9707/",
  github: "https://github.com/amikum9707",
  summary:
    "I engineer fast, intelligent web systems — from React frontends to serverless cloud backends — and specialize in wiring LLMs into real products that automate real workflows.",
  availableForWork: true,
  noticePeriod: "45 Days",
};

export const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "Python"],
  Frontend: ["React.js", "Next.js", "Vue.js", "SvelteKit", "Tailwind CSS", "HTML5 / CSS3"],
  Backend: ["Node.js", "NestJS", "Express.js"],
  "AI / ML": ["OpenAI GPT-4", "Google Gemini", "Claude", "AI Agents", "Prompt Engineering", "NLP", "Generative AI"],
  Databases: ["MongoDB", "PostgreSQL"],
  "DevOps & Cloud": ["AWS Lambda", "AWS EC2", "AWS S3", "AWS SQS", "Docker", "CI/CD", "Serverless"],
  "Tools & Tech": ["Git", "REST APIs", "WebSockets", "Redis", "Third Party APIs"],
};

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Crownstack",
    period: "Nov 2024 – Present",
    current: true,
    highlights: [
      "Architected and shipped full-stack products using React, Node.js, and NestJS — serving thousands of concurrent users without breaking a sweat.",
      "Designed serverless systems on AWS Lambda + SQS that cut infrastructure costs while scaling effortlessly under load.",
      "Led AI integration across multiple products using OpenAI, Gemini, and Claude — from intelligent recommendations to automated content generation.",
      "Built production AI agents that replaced repetitive manual workflows, saving teams 40% of their time.",
      "Tuned LLM prompts to deliver consistently accurate, contextually relevant AI responses at scale.",
      "Cut average API response times by 30% through caching strategies, query optimization, and smart data pipelines.",
      "Partnered with product, design, and QA teams in agile sprints to ship features that users actually love.",
    ],
  },
  {
    role: "Software Engineer (L2)",
    company: "OTS Solutions / JumpGrowth",
    period: "May 2022 – Nov 2024",
    current: false,
    highlights: [
      "Delivered full-stack features across multiple client products using React, Next.js, Node.js, and Python.",
      "Built and maintained enterprise-grade APIs consumed by Fortune 500 clients like Jefferies.",
      "Set up robust DevOps pipelines with AWS EC2, S3, Route 53, Docker, and Jenkins — zero-downtime deployments included.",
      "Diagnosed and resolved deep performance bottlenecks, measurably improving load times and system reliability.",
      "Built analytics dashboards with real-time data visualizations for high-stakes business decision-making.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "VenturePact / Outgrow",
    period: "Jul 2021 – Jul 2022",
    current: false,
    highlights: [
      "Developed core web app features using React, Node.js, MongoDB, and SQL — learning the full stack fast.",
      "Integrated external APIs including Facebook, Google, Twilio, and transactional email services.",
      "Built real-time collaboration features using WebSockets and Socket.io.",
      "Applied Factory and Singleton patterns to structure clean, maintainable server-side logic.",
    ],
  },
];

export const projects = [
  {
    slug: "learneze",
    title: "Learneze",
    tagline: "AI-Powered Personalized Learning Platform",
    shortDesc:
      "An adaptive e-learning platform that uses multiple LLMs to generate quizzes, craft personalized study paths, and recommend content — in real time, for every learner.",
    category: "AI / EdTech",
    tags: ["React.js", "NestJS", "OpenAI", "Gemini", "Claude", "MongoDB", "AWS"],
    color: "#fff",
    gradient: "from-neutral-700 to-neutral-900",
    icon: "🎓",
    featured: true,
    goal: "Replace static, one-size-fits-all course content with a dynamic learning experience that genuinely adapts to each student's pace, gaps, and strengths — powered by AI.",
    problem:
      "Traditional e-learning platforms dump content at students and hope for the best. No personalization. No real feedback loops. Result: low completion rates and mediocre outcomes.",
    solution:
      "Multi-LLM architecture (OpenAI, Gemini, Claude) where AI agents continuously analyze learner performance and regenerate quizzes, adjust difficulty, and surface the right content at the right time.",
    impact: [
      "Reduced wasted study time by ~30% through targeted, personalized delivery",
      "Quiz completion rates jumped 60% vs. static content",
      "Handles concurrent multi-user sessions with real-time AI interactions",
      "Subscription + credit-based monetization model in production",
    ],
    techDetails: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "NestJS", "REST APIs", "WebSockets"],
      ai: ["OpenAI GPT-4", "Google Gemini", "Claude", "Prompt Engineering"],
      database: ["MongoDB", "Redis (caching)"],
      infrastructure: ["AWS EC2", "AWS S3", "Docker"],
    },
    architecture:
      "Clean NestJS microservices split by domain: Auth, Content, AI Engine, Analytics, and Billing. AI processing runs asynchronously via job queues so heavy LLM calls never block the main request cycle. Redis caches repeated quiz structures, keeping response times snappy even at scale.",
    challenges: [
      "Engineering prompts that produce educationally sound, safe, and consistent AI output across three different LLMs simultaneously.",
      "Serving real-time adaptive difficulty adjustments without the user ever noticing latency.",
      "Designing a fair credit metering system that accounts for wildly different token costs per model.",
    ],
    screenshots: [
      { label: "Dashboard", placeholder: true },
      { label: "Quiz Interface", placeholder: true },
      { label: "Learning Path", placeholder: true },
    ],
  },
  {
    slug: "therapyamigo",
    title: "TherapyAmigo",
    tagline: "AI-Based Mental Health Assistant",
    shortDesc:
      "A privacy-first mental health platform with an AI companion for emotional support, real-time mood tracking, and personalized wellness guidance — available 24/7.",
    category: "AI / HealthTech",
    tags: ["Node.js", "NestJS", "OpenAI", "Gemini", "WebSockets", "MongoDB"],
    color: "#fff",
    gradient: "from-neutral-600 to-neutral-900",
    icon: "🧠",
    featured: true,
    goal: "Give anyone immediate, stigma-free access to emotional support — not as a replacement for therapy, but as a compassionate first touchpoint that's always available.",
    problem:
      "Therapy is expensive, waitlists are long, and asking for help is hard. Most people in crisis have nowhere to turn at 2am when they need support most.",
    solution:
      "A conversational AI platform with carefully crafted prompt guardrails that ensure empathetic, safe responses. AI agents track mood patterns and sentiment over time to surface personalized wellness nudges.",
    impact: [
      "24/7 emotional support with zero waitlist or appointment required",
      "Mood trend analysis helping users spot emotional patterns over weeks",
      "Role-based access for both individuals and licensed therapists",
      "End-to-end encrypted conversations — privacy is non-negotiable here",
    ],
    techDetails: {
      frontend: ["React.js", "Tailwind CSS", "Socket.io Client"],
      backend: ["Node.js", "NestJS", "WebSockets", "Socket.io"],
      ai: ["OpenAI GPT-4", "Google Gemini", "Sentiment Analysis", "NLP", "Prompt Engineering"],
      database: ["MongoDB", "Redis (session management)"],
      infrastructure: ["AWS EC2", "AWS S3", "Docker", "CI/CD"],
    },
    architecture:
      "Event-driven, WebSocket-based real-time chat with persistent conversation context managed per session. A dedicated AI service layer handles LLM calls, context windowing, and sentiment scoring — completely isolated from the auth and data layers. All sensitive data encrypted at rest and in transit.",
    challenges: [
      "Designing prompt guardrails that are empathetic and supportive without ever crossing into harmful medical advice.",
      "Maintaining coherent conversation history across multiple sessions securely — users expect continuity.",
      "Running sentiment analysis in parallel with chat responses without adding perceptible latency.",
    ],
    screenshots: [
      { label: "Chat Interface", placeholder: true },
      { label: "Mood Tracker", placeholder: true },
      { label: "Wellness Dashboard", placeholder: true },
    ],
  },
  {
    slug: "jefferies-analytics",
    title: "Jefferies Analytics",
    tagline: "Enterprise Analytics Dashboard · Fortune 500",
    shortDesc:
      "A high-performance financial analytics platform built for Jefferies — aggregating trading data from 5+ sources into a single real-time dashboard used by business decision-makers.",
    category: "Enterprise / FinTech",
    tags: ["React.js", "Node.js", "PostgreSQL", "AWS", "Docker", "Jenkins"],
    color: "#fff",
    gradient: "from-neutral-800 to-neutral-950",
    icon: "📊",
    featured: true,
    goal: "Unify fragmented financial data across Jefferies' systems into one fast, secure, role-aware analytics platform — so traders and executives can make decisions in seconds, not hours.",
    problem:
      "Data lived in five different systems. Reports were slow, manual, and always a day behind. Traders needed live insight, not yesterday's spreadsheet.",
    solution:
      "A scalable data aggregation layer feeding real-time React dashboards with interactive charts. PostgreSQL materialized views and Redis caching made previously-slow queries feel instant. RBAC ensures each team only sees what they're allowed to.",
    impact: [
      "Dashboard load time cut by ~35% through query optimization and materialized views",
      "5+ data sources consolidated into one unified view for the first time",
      "Real-time monitoring of live trading metrics — no more refresh-and-pray",
      "Enterprise RBAC covering multiple business units and security clearance levels",
    ],
    techDetails: {
      frontend: ["React.js", "D3.js", "Chart.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      ai: [],
      database: ["PostgreSQL", "Redis (query caching)", "Materialized Views", "Indexes"],
      infrastructure: ["AWS EC2", "AWS S3", "Docker", "Jenkins", "CI/CD"],
    },
    architecture:
      "N-tier architecture: React frontend talking to a Node/Express API layer, backed by PostgreSQL with aggressive indexing and materialized views for fast aggregations. Redis sits in front of the most expensive recurring queries. Jenkins CI/CD handles zero-downtime deployments.",
    challenges: [
      "Achieving sub-second query times on multi-million-row financial tables without breaking the budget on compute.",
      "Building interactive charts that remain performant when rendering thousands of live data points.",
      "Implementing granular RBAC that works across different business units with conflicting data access policies.",
    ],
    screenshots: [
      { label: "Analytics Overview", placeholder: true },
      { label: "Trading Dashboard", placeholder: true },
      { label: "Data Visualization", placeholder: true },
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    period: "2019 – 2021",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "GLA University, Mathura",
    period: "2016 – 2019",
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "API Response Boost", value: "30%" },
  { label: "Manual Effort Saved", value: "40%" },
];
