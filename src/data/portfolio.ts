export const personalInfo = {
  name: "Amit Kumar",
  title: "Senior Full Stack Engineer",
  subtitle: "AI Engineer · Generative AI · MERN Stack",
  email: "ams281997@gmail.com",
  phone: "+91 7388110797",
  linkedin: "https://linkedin.com/in/amikum9707/",
  github: "https://github.com/amitdev-code",
  summary:
    "I engineer fast, intelligent web systems — from React frontends to serverless cloud backends — and specialize in wiring LLMs into real products that automate real workflows.",
  availableForWork: true,
  noticePeriod: "30 Days",
};

export const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "Python"],
  Frontend: ["React.js", "Next.js", "Vue.js", "SvelteKit", "Tailwind CSS", "HTML5 / CSS3"],
  Backend: ["Node.js", "NestJS", "Express.js"],
  "AI / ML": ["OpenAI GPT-4", "Google Gemini", "Claude", "AI Agents", "Prompt Engineering", "NLP", "Generative AI"],
  Databases: ["MongoDB", "PostgreSQL"],
  "DevOps & Cloud": ["AWS Lambda", "AWS EC2", "AWS S3", "AWS SQS", "Docker", "CI/CD", "Serverless"],
  "Tools & Tech": ["Git", "REST APIs", "WebSockets", "Socket.io", "WebRTC", "Kafka", "Redis", "Third Party APIs"],
  "Integrations": ["Google Maps API", "Google TTS / STT", "Twilio", "100ms", "Agora", "Facebook Business API", "Adobe Experience"],
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
    github: [
      { label: "GitHub", url: "https://github.com/amitdev-code/learnEze" },
    ],
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
      { label: "Screen 1",  src: "/images/learneze/01.png" },
      { label: "Screen 2",  src: "/images/learneze/02.png" },
      { label: "Screen 3",  src: "/images/learneze/03.png" },
      { label: "Screen 4",  src: "/images/learneze/04.png" },
      { label: "Screen 5",  src: "/images/learneze/05.png" },
      { label: "Screen 6",  src: "/images/learneze/06.png" },
      { label: "Screen 7",  src: "/images/learneze/07.png" },
      { label: "Screen 8",  src: "/images/learneze/08.png" },
      { label: "Screen 9",  src: "/images/learneze/09.png" },
      { label: "Screen 10", src: "/images/learneze/10.png" },
    ],
  },
  {
    slug: "therapyamigo",
    title: "TherapyAmigo",
    tagline: "AI-Based Mental Health Assistant",
    shortDesc:
      "A privacy-first mental health platform with an AI companion for emotional support, real-time mood tracking, and personalized wellness guidance — available 24/7.",
    category: "AI / HealthTech",
    tags: ["Node.js", "NestJS", "OpenAI", "Gemini", "WebSockets", "MongoDB", "React Native"],
    color: "#fff",
    gradient: "from-neutral-600 to-neutral-900",
    icon: "🧠",
    featured: true,
    github: [
      { label: "Backend", url: "https://github.com/amitdev-code/therapyamigo_backend" },
      { label: "Mobile App (React Native)", url: "https://github.com/amitdev-code/therapyamigo_app" },
    ],
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
      { label: "Screen 1", src: "/images/therapyamigo/01.webp" },
      { label: "Screen 2", src: "/images/therapyamigo/02.webp" },
      { label: "Screen 3", src: "/images/therapyamigo/03.webp" },
      { label: "Screen 4", src: "/images/therapyamigo/04.webp" },
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
    screenshots: [],
  },
  {
    slug: "unlocklife",
    title: "Unlocklife",
    tagline: "Senior Health Club — Wellness for the 50+ Community",
    shortDesc:
      "A full-featured health and wellness platform built exclusively for seniors, combining fitness tracking, community engagement, expert health consultations, and curated lifestyle content.",
    category: "HealthTech",
    tags: ["React.js", "Node.js", "NestJS", "MongoDB", "AWS", "REST APIs"],
    url: "https://www.unlocklife.today/",
    goal: "Build a digital health club that genuinely serves the 50+ demographic — making wellness accessible, social, and easy to navigate without technical barriers.",
    problem:
      "Most health apps are built for young, tech-savvy users. Seniors are largely ignored despite having the highest healthcare engagement and spending power, leaving a massive underserved gap in the market.",
    solution:
      "Designed and built a senior-first platform with large, accessible UI components, simplified navigation, and health-specific features like expert consultations, guided fitness programs, and peer community groups tailored to the 50+ lifestyle.",
    impact: [
      "Delivered a fully accessible UI optimized for the 50+ age group",
      "Integrated expert health consultation booking with real-time availability",
      "Built community features enabling peer-to-peer wellness accountability",
      "Launched subscription model with tiered membership plans",
    ],
    techDetails: {
      frontend: ["React.js", "Tailwind CSS", "Responsive Design"],
      backend: ["Node.js", "NestJS", "REST APIs"],
      ai: [],
      database: ["MongoDB", "Redis"],
      infrastructure: ["AWS EC2", "AWS S3", "CI/CD"],
    },
    architecture:
      "NestJS modular backend with separate services for user profiles, health data, consultation booking, and content delivery. React frontend built with accessibility-first principles — high contrast, large touch targets, and simplified navigation flows.",
    challenges: [
      "Designing an intuitive UX for users who are not digital natives — every interaction had to be obvious and forgiving.",
      "Building a real-time consultation booking system that syncs expert availability across time zones.",
      "Balancing feature richness with simplicity — the platform needed to feel powerful without overwhelming its users.",
    ],
    screenshots: [],
  },
  {
    slug: "betterlyf",
    title: "Betterlyf",
    tagline: "Online Mental Health Platform — Full Dashboard Suite",
    shortDesc:
      "A comprehensive mental health platform connecting users with licensed counsellors. Owned the end-to-end development of all four dashboards: User, Counsellor, Corporate, and Admin.",
    category: "HealthTech / Mental Health",
    tags: ["React.js", "Node.js", "PostgreSQL", "WebSockets", "AWS", "REST APIs"],
    url: "https://betterlyf.com/",
    goal: "Create a professional-grade mental health platform that serves four distinct user personas — individuals seeking help, licensed counsellors, corporate HR teams, and platform administrators — each with purpose-built workflows.",
    problem:
      "Existing mental health platforms had generic one-size-fits-all dashboards that didn't account for the fundamentally different needs of each stakeholder. Counsellors needed scheduling tools; corporates needed utilization reports; admins needed oversight controls.",
    solution:
      "Built four distinct, role-aware dashboards from the ground up. Each dashboard is tailored to its persona's primary jobs-to-be-done — from session scheduling and progress notes for counsellors, to utilization analytics and employee wellness tracking for corporate HR.",
    impact: [
      "Delivered 4 fully functional dashboards: User, Counsellor, Corporate, Admin",
      "Real-time session chat and video consultation integrations",
      "Corporate dashboard with employee wellness analytics and reporting",
      "Admin panel with full platform oversight, user management, and content moderation",
    ],
    techDetails: {
      frontend: ["React.js", "Tailwind CSS", "WebSockets", "Chart.js"],
      backend: ["Node.js", "REST APIs", "WebSockets"],
      ai: [],
      database: ["PostgreSQL", "Redis (session)"],
      infrastructure: ["AWS EC2", "AWS S3", "Docker"],
    },
    architecture:
      "Role-based access control (RBAC) at the API layer gates all four dashboard views. Shared component library across dashboards with role-specific modules loaded dynamically. WebSocket layer handles real-time messaging and session status updates without polling.",
    challenges: [
      "Designing four cohesive yet distinct UX flows that share a consistent design language without becoming generic.",
      "Implementing granular RBAC that prevents any role from accessing another's data while keeping the codebase DRY.",
      "Building real-time session management that handles dropped connections and resumption gracefully.",
    ],
    screenshots: [
      { label: "Screen 1", src: "/images/betterlyf/01.png" },
      { label: "Screen 2", src: "/images/betterlyf/02.png" },
      { label: "Screen 3", src: "/images/betterlyf/03.png" },
      { label: "Screen 4", src: "/images/betterlyf/04.png" },
      { label: "Screen 5", src: "/images/betterlyf/05.png" },
    ],
  },
  {
    slug: "oyopp",
    title: "Oyopp",
    tagline: "Multi-Vendor Home Services Marketplace",
    shortDesc:
      "An UrbanClap-style hyperlocal service marketplace connecting customers with verified service providers across categories like home cleaning, plumbing, electrical, beauty, and more.",
    category: "Marketplace / On-Demand",
    tags: ["React.js", "Node.js", "MongoDB", "WebSockets", "AWS", "Third Party APIs"],
    url: "https://www.oyoapp.com/",
    goal: "Build a scalable multi-vendor marketplace that makes booking trusted home services as simple as ordering food — with real-time provider tracking, transparent pricing, and verified professional profiles.",
    problem:
      "The local home services market is fragmented and trust-deficient. Customers have no reliable way to find, vet, or book service professionals, while skilled tradespeople lack digital tools to manage their business.",
    solution:
      "Built a two-sided marketplace with separate vendor and customer flows. Service providers get a mobile-friendly dashboard to manage bookings, availability, and earnings. Customers get a seamless discovery and booking experience with live tracking and secure payments.",
    impact: [
      "Multi-vendor onboarding with profile verification and service category management",
      "Real-time booking and live service provider tracking",
      "Integrated payment gateway with split payout to vendors",
      "Rating and review system driving service quality accountability",
    ],
    techDetails: {
      frontend: ["React.js", "Tailwind CSS", "WebSockets"],
      backend: ["Node.js", "REST APIs", "WebSockets"],
      ai: [],
      database: ["MongoDB", "Redis"],
      infrastructure: ["AWS EC2", "AWS S3", "Docker", "CI/CD"],
    },
    architecture:
      "Two-sided marketplace architecture with separate API modules for the customer-facing app and vendor management portal. WebSocket layer enables real-time booking confirmations and service tracking. Vendor payouts handled via a queued job system to ensure reliable processing independent of the main request cycle.",
    challenges: [
      "Designing a discovery algorithm that surfaces relevant service providers by location, rating, and availability simultaneously.",
      "Building a reliable real-time tracking system that handles intermittent mobile connectivity from providers in the field.",
      "Implementing fair and transparent split-payment logic that satisfies both vendors and platform economics.",
    ],
    screenshots: [
      { label: "Screen 1", src: "/images/oyoapp/01.png" },
      { label: "Screen 2", src: "/images/oyoapp/02.png" },
    ],
  },
  {
    slug: "expertopinion",
    title: "ExpertOpinion",
    tagline: "Doctor-to-Doctor Medical Consultation Platform",
    shortDesc:
      "A HIPAA-aware telemedicine platform enabling general practitioners to request specialist opinions on complex cases — bridging the expertise gap in underserved medical settings.",
    category: "MedTech / Telemedicine",
    tags: ["React.js", "NestJS", "PostgreSQL", "AWS SQS", "AWS RDS", "ECS", "Secrets Manager"],
    url: "https://expertopinion.md/",
    goal: "Enable any doctor — regardless of location or specialty access — to get a second opinion from a qualified specialist within hours, improving diagnostic accuracy and patient outcomes.",
    problem:
      "GPs in smaller clinics and rural settings frequently encounter cases outside their expertise but lack direct access to specialists. Referrals are slow, expensive, and often unavailable — leaving patients in limbo.",
    solution:
      "Built a structured consultation platform where GPs upload case details, medical history, and reports, then receive a formal specialist opinion asynchronously. AWS SQS decouples the notification pipeline so no consultation request is ever dropped. Secrets Manager centralises all credentials so no sensitive config ever touches the codebase.",
    impact: [
      "Reduced specialist consultation turnaround from days to hours",
      "Zero-loss notification delivery via SQS — every case triggers a reliable specialist alert",
      "Fully managed RDS (PostgreSQL) with automated backups and multi-AZ failover for medical data safety",
      "Audit trail for every consultation stored in RDS for medico-legal compliance",
      "ECS cluster auto-scales the API fleet under peak load without manual intervention",
      "AWS Secrets Manager eliminates hardcoded credentials across all environments",
    ],
    techDetails: {
      frontend: ["React.js", "Tailwind CSS", "WebSockets"],
      backend: ["Node.js", "NestJS", "REST APIs", "WebSockets"],
      ai: [],
      database: ["AWS RDS (PostgreSQL)", "Redis (session cache)", "AWS S3 (medical files)"],
      infrastructure: [
        "AWS ECS (containerised clusters)",
        "AWS SQS (async consultation queue)",
        "AWS Secrets Manager (credential management)",
        "AWS S3 (file storage)",
        "AWS EC2",
        "Docker",
        "CI/CD",
      ],
    },
    architecture:
      "NestJS API runs inside Docker containers orchestrated by AWS ECS clusters — capacity scales automatically with incoming traffic. Consultation requests flow through AWS SQS queues, guaranteeing at-least-once delivery even if the specialist notification service is temporarily unavailable. All patient data lives in AWS RDS (managed PostgreSQL) with automated backups, point-in-time recovery, and multi-AZ failover. Medical report files are stored encrypted in S3 with pre-signed URLs for secure access. Every API secret, DB password, and third-party key is fetched at runtime from AWS Secrets Manager — no credentials in code or environment files.",
    challenges: [
      "Designing a case submission flow that captures enough clinical detail to be useful without creating friction for time-pressed GPs.",
      "Ensuring SQS message idempotency so a specialist never receives duplicate consultation notifications even on retry.",
      "Migrating credential management from hardcoded env vars to Secrets Manager without disrupting running services.",
      "Configuring ECS task definitions and auto-scaling policies to handle spiky consultation traffic without over-provisioning.",
    ],
    screenshots: [],
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
