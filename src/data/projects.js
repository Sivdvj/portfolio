export const projects = [
  {
    title: "CodeCollab",
    description:
      "A real-time collaborative code editor where multiple users can write code together, see each other's changes instantly, track live cursor positions, and execute code in a shared workspace.",
    imageTone: "terminal",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
    ],
    highlights: [
      "Real-time collaboration",
      "Socket.IO synchronization",
      "Live cursor tracking",
      "Room management",
      "Docker deployment",
      "GitHub Actions CI/CD",
    ],
    tech: ["React", "Node.js", "Socket.IO", "Docker", "DigitalOcean"],
  },
  {
    title: "Telecom E-Commerce Backend",
    description:
      "A Spring Boot microservices backend supporting telecom plans, devices, add-ons, authentication, and role-based access control.",
    imageTone: "diagram",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Docs", href: "#" },
    ],
    highlights: [
      "JWT authentication",
      "Spring Security",
      "Role-based authorization",
      "CRUD operations",
      "JPA relationships",
      "REST APIs",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "JWT"],
  },
  {
    title: "BlushBoard",
    description:
      "A cozy productivity application built to learn React while creating tools I genuinely wanted to use.",
    imageTone: "dashboard",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Preview", href: "#" },
    ],
    highlights: [
      "Habit Tracker",
      "Pomodoro Timer",
      "Progress Analytics",
      "Local Persistence",
      "Future reminders/events system",
    ],
    tech: ["React", "Tailwind", "Docker", "Nginx", "Traefik"],
  },
];

export const learningItems = [
  "Spring Security",
  "System Design",
  "Redis",
  "CRDTs",
  "Distributed Systems",
  "Backend Architecture",
];
