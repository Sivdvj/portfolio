import sentire from "../assets/sentire.png";
import codecollab from "../assets/codecollab.png";
import blushboard from "../assets/blushboard.png";
import threejs from "../assets/threejs.png";

export const projects = [
  {
    title: "CodeCollab",
    category: "Featured Project",
    label: "Real-Time Systems",
    image: codecollab,
    featured: true,
    summary:
      "Real-time collaborative code editor with shared rooms, live cursors, multi-user synchronization, and in-browser code execution",

    insight:
      "Built synchronization from scratch using Socket.IO and in-memory room state to understand real-time systems before adopting CRDT-based solutions like Yjs",
    github: "https://github.com/Sivdvj/code-collab",
    demo: "https://cc.sivv.me",
    tech: [
      "React",
      "Node.js",
      "Socket.IO",
      "Monaco Editor",
      "Docker",
      "Traefik",
      "Vitest",
      "GitHub Actions",
    ],
    highlights: [
      "Live cursor tracking with per-user colors",
      "Room ownership and participant kick",
      "CI/CD pipeline with unit tests gating deployment",
    ],
  },
  {
    title: "Sentire",
    category: "Full Stack Application",
    label: "Live at sentire.sivv.me",
    image: sentire,
    summary:
      "Emotion tracking platform that connects moods and activities over time to uncover patterns in emotional wellbeing",

    insight:
      "Uses MongoDB for application data and Neo4j for relationship analysis, turning mood-pattern discovery into graph traversals instead of repeated document queries",
    demo: "https://sentire.sivv.me",
    github: "https://github.com/Sivdvj/Sentire",
    tech: [
      "Svelte",
      "Node.js",
      "MongoDB",
      "Neo4j",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "DigitalOcean",
    ],
    highlights: [
      "Dual-database architecture — MongoDB + Neo4j",
      "Graph-based activity-emotion pattern detection",
      "Session management with per-device revocation",
    ],
  },
  {
    title: "Particle Morphing Engine",
    category: "Creative Engineering",
    label: "Interactive WebGL",
    image: threejs,
    summary:
      "Interactive WebGL experience where thousands of particles morph between geometric formations based on scroll position",

    insight:
      "Custom particle morphing system built with LERP interpolation and Simplex Noise, maintaining smooth animations across 5000+ particles",
    github: "https://github.com/Sivdvj/threejs",
    demo: "https://sivdvj.github.io/threejs/",
    tech: [
      "Three.js",
      "WebGL",
      "GSAP",
      "ScrollTrigger",
      "Simplex Noise",
      "JavaScript",
    ],
    highlights: [
      "5000+ particles morphing across 3 geometric states via LERP",
      "Scroll-driven animation with GSAP ScrollTrigger",
      "Simplex Noise for organic motion on top of deterministic paths",
    ],
  },
  {
    title: "BlushBoard",
    category: "Personal Project",
    label: "Live at blushboard.sivv.me",
    image: blushboard,
    summary:
      "A cozy productivity app featuring habit tracking, Pomodoro sessions, progress analytics, and ambient sounds",

    insight:
      "Started as a React learning project and evolved into a self-hosted application exploring state management, audio handling, and containerized deployment",
    github: "https://github.com/Sivdvj/blushboard",
    demo: "https://blushboard.sivv.me",
    tech: ["React", "Tailwind CSS", "Recharts", "Docker", "Nginx", "Traefik"],
    highlights: [
      "Habit tracking across months with completion stats",
      "Pomodoro with configurable laps, breaks, and ambient sounds",
      "Persistent settings via localStorage with useRef audio",
    ],
  },
];
