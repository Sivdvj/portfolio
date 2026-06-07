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
      "A real-time collaborative code editor where multiple users share a room, see each other's keystrokes instantly, track live cursor positions, and execute code in a shared workspace.",
    insight:
      "Intentionally built synchronization from scratch using Socket.IO and in-memory room state — without Yjs, Liveblocks, or ShareDB — to understand the hard engineering problems before reaching for abstractions. Current approach is last-write-wins with full document broadcast; CRDT migration via Yjs is planned.",
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
      "An emotion tracking platform that maps what you do to how you feel — logging moods, activities, and patterns over time to uncover correlations like gym correlating with positive emotions or studying correlating with stress.",
    insight:
      "Designed around a dual-database architecture: MongoDB handles users, sessions, and emotion logs; Neo4j models activity-emotion relationships as a graph. Pattern detection like 'music improves mood 90% of the time' is a graph traversal in Neo4j — computationally expensive as repeated document lookups in MongoDB, trivial as a relationship query.",
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
    title: "BlushBoard",
    category: "Personal Project",
    label: "Live at blushboard.sivv.me",
    image: blushboard,
    summary:
      "A cozy productivity corner with a configurable Pomodoro timer, month-view habit tracker with completion statistics, and ambient sound mixing — because every productivity app I tried was missing something.",
    insight:
      "Started as a place to learn React properly by building something I'd actually use every day. Ended up becoming a real exploration of localStorage state management, custom audio handling with useRef, and Docker reverse-proxy deployment on a self-managed server.",
    github: "https://github.com/Sivdvj/blushboard",
    demo: "https://blushboard.sivv.me",
    tech: ["React", "Tailwind CSS", "Recharts", "Docker", "Nginx", "Traefik"],
    highlights: [
      "Habit tracking across months with completion stats",
      "Pomodoro with configurable laps, breaks, and ambient sounds",
      "Persistent settings via localStorage with useRef audio",
    ],
  },
  {
    title: "Particle Morphing Engine",
    category: "Creative Engineering",
    label: "Interactive WebGL",
    image: threejs,
    summary:
      "An interactive 3D system where thousands of particles morph fluidly between geometric formations — scatter cloud, torus, and circular grid — driven by scroll position and mouse parallax.",
    insight:
      "Built a custom morphing engine using linear interpolation (LERP) between pre-computed particle coordinate sets. Each particle smoothly transitions between target positions as scroll progress advances, while Simplex Noise adds organic drift to prevent the motion from feeling mechanical. The challenge was maintaining 60fps with 5000+ particles interpolating simultaneously.",
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
];
