function ProjectVisual({ tone, title }) {
  if (tone === "terminal") {
    return <div className="project-visual"></div>;
  }

  if (tone === "diagram") {
    return <div className="project-visual"></div>;
  }

  return <div className="project-visual"></div>;
}

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#F5C9D9] bg-white/80 shadow-[0_16px_45px_rgba(255,141,183,0.13)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(255,110,168,0.2)]">
      <ProjectVisual tone={project.imageTone} title={project.title} />
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-serif text-3xl text-[#2A2024]">
            {project.title}
          </h3>
          <a
            aria-label={`${project.title} project link placeholder`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#F5C9D9] text-xl text-[#FF6EA8] transition group-hover:rotate-12 group-hover:bg-[#FFF1F6]"
            href={project.links[0].href}
          >
            ↗
          </a>
        </div>
        <p className="leading-7 text-[#6B5C61]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <ul className="mt-5 grid gap-2 text-sm text-[#493D42]">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li className="flex gap-2" key={highlight}>
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#FF8DB7]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
