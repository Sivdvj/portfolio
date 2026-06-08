import { projects } from "../data/projects";

function ProjectVisual({ image }) {
  return (
    <div className="overflow-hidden">
      <img src={image} alt="" className="h-64 w-full object-cover" />
    </div>
  );
}

function FeaturedProjectCard({ project }) {
  const href = project.demo || project.github || "#";

  return (
    <a
      className={`group overflow-hidden rounded-2xl border border-[#F5C9D9] bg-pink-100/30 text-[#2A2024] no-underline shadow-[0_16px_45px_rgba(255,141,183,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#FF8DB7] hover:shadow-[0_20px_55px_rgba(232,82,122,0.14)] ${
        project.featured ? "grid lg:grid-cols-[0.44fr_0.56fr]" : ""
      }`}
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noreferrer"}
    >
      <ProjectVisual image={project.image} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#E8527A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8527A]" />
          {project.category}
        </div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#9E7B8E]">
          {project.label}
        </p>
        <h3 className="font-serif text-3xl leading-tight text-[#1A1118]">
          {project.title}
        </h3>
        <p className="mt-3 text-md leading-6 text-[#5C3D52]">
          {project.summary}
        </p>
        <p className="mt-4 mb-4 border-l-2 border-[#F0A0B8] pl-3 text-sm italic leading-6 text-[#9E7B8E]">
          {project.insight}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 lg:mt-auto">
          {project.tech.map((tech) => (
            <span
              className="rounded-md bg-[#FCE8EF] px-2.5 py-1 font-mono text-[10px] tracking-wide text-[#D6638A]"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section id="projects" className="section-shell projects-section">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8527A]">
            Work
          </p>
          <h2 className="font-serif text-4xl leading-none text-[#2A2024]">
            Things I've Built
          </h2>
        </div>
        <a
          className="hidden font-mono text-md font-bold tracking-wide text-[#E8527A] transition hover:underline sm:inline-flex"
          href="https://github.com/Sivdvj"
          target="_blank"
        >
          Github →
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <FeaturedProjectCard project={featuredProject} />
        </div>
        {secondaryProjects.map((project) => (
          <FeaturedProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
