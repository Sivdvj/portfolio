// import codecollabImage from "../assets/codecollab.png";
// import blushboardImage from "../assets/blushboard.png";
// import telecomImage from "../assets/telecom.png";

export const projects = [
  {
    title: "CodeCollab",
    category: "Real-Time Systems",

    image: "hi",

    summary:
      "A collaborative code editor supporting live synchronization, cursor tracking, room management, and Dockerized deployment.",

    github: "YOUR_GITHUB_LINK",
    demo: "https://cc.sivv.me",

    tech: ["React", "Socket.IO", "Node.js", "Docker", "DigitalOcean"],

    highlights: [
      "Real-time collaborative editing",
      "Live cursor tracking",
      "Room ownership and moderation",
    ],
  },

  {
    title: "Telecom E-Commerce Backend",
    category: "Backend Engineering",

    image: "IH",

    summary:
      "Spring Boot microservices backend supporting authentication, telecom plans, devices, add-ons, and role-based access control.",

    github: "YOUR_GITHUB_LINK",

    tech: ["Java", "Spring Boot", "JWT", "Spring Security", "JPA"],

    highlights: [
      "JWT authentication",
      "Role-based authorization",
      "Microservices architecture",
    ],
  },

  {
    title: "BlushBoard",
    category: "Personal Project",

    image: "Hi",

    summary:
      "A cozy productivity corner featuring habit tracking, Pomodoro sessions, progress analytics, and a soft pink design system.",

    github: "YOUR_GITHUB_LINK",
    demo: "https://blushboard.sivv.me",

    tech: ["React", "Tailwind", "Docker", "Nginx"],

    highlights: ["Habit tracking", "Pomodoro timer", "Progress analytics"],
  },
];
