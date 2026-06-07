import sentire from "../assets/sentire.png";
import codecollab from "../assets/codecollab.png";
import blushboard from "../assets/blushboard.png";
export const projects = [
  {
    title: "CodeCollab",
    category: "Featured Project",
    label: "Real-Time Systems",
    image: codecollab,
    featured: true,
    summary:
      "Real-time collaborative code editor with live cursors, room management, user presence tracking, and multi-user synchronization.",
    insight:
      "Built synchronization from scratch using Socket.IO and in-memory room state — deliberately, to understand the hard parts before moving toward CRDTs.",
    github: "https://github.com/Sivdvj/code-collab",
    demo: "https://cc.sivv.me",
    tech: [
      "React",
      "Node.js",
      "Socket.IO",
      "Docker",
      "DigitalOcean",
      "GitHub Actions",
    ],
    highlights: [
      "Live cursor tracking",
      "Room ownership and moderation",
      "User presence tracking",
    ],
  },
  {
    title: "Sentire",
    category: "Full Stack",
    label: "Live at sentire.sivv.me",
    image: sentire,
    summary:
      "An emotion tracking platform that maps the relationship between what you do and how you feel. Track moods, activities, and patterns over time, then uncover correlations between habits and emotional wellbeing.",
    insight:
      "Built around a dual-database architecture where MongoDB handles application data and Neo4j handles activity-emotion relationship traversal, making complex pattern discovery a graph problem instead of repeated document lookups.",
    demo: "https://sentire.sivv.me",
    github: "https://github.com/Sivdvj/sentire",
    tech: [
      "Svelte",
      "Node.js",
      "MongoDB",
      "Neo4j",
      "PostgreSQL",
      "Docker",
      "Nginx",
    ],
    highlights: [
      "JWT authentication",
      "Role-based authorization",
      "Plan, device, and add-on CRUD",
    ],
  },
  {
    title: "BlushBoard",
    category: "Featured Project",
    label: "Personal Project",
    image: blushboard,
    summary:
      "A cozy productivity app with Pomodoro timer, habit tracker, and progress analytics — containerized and reverse-proxied.",
    insight:
      "Built it because I couldn't find a productivity tool I actually enjoyed using. Ships everything I wanted to learn about infra.",
    github: "https://github.com/Sivdvj/blushboard",
    demo: "https://blushboard.sivv.me",
    tech: ["React", "Tailwind", "Docker", "Nginx", "Traefik"],
    highlights: ["Habit tracking", "Pomodoro timer", "Progress analytics"],
  },
];

export const learningItems = [
  "Spring Boot Security",
  "System Design Fundamentals",
  "WebSocket Architectures",
  "CRDTs & Yjs",
  "Rate Limiters",
  "Distributed Caching",
];
