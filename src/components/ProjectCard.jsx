function ProjectVisual({ image }) {
  return (
    <div className="overflow-hidden border-b border-[#F5C9D9]">
      <img
        src={image}
        alt=""
        className="project-image h-52 w-full object-cover"
      />
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#F5C9D9] bg-white/80 shadow-[0_16px_45px_rgba(255,141,183,0.13)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(255,110,168,0.2)]">
      <ProjectVisual image={project.image} />

      <div className="p-6">
        <div className="mb-3">
          <span className="inline-flex rounded-full bg-[#FFE4EF] px-3 py-1 text-xs font-bold tracking-[0.12em] text-[#FF6EA8] uppercase">
            {project.category}
          </span>
        </div>

        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-serif text-3xl text-[#2A2024]">
            {project.title}
          </h3>
        </div>

        <p className="mb-5 text-base leading-7 text-[#6B5C61]">
          {project.summary}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <ul className="mb-6 grid gap-2 text-sm text-[#493D42]">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li className="flex gap-2" key={highlight}>
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#FF8DB7]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#F5C9D9] px-4 py-2 text-sm font-semibold text-[#493D42] transition hover:bg-[#FFF1F6]"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#FF8DB7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#FF6EA8]"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
