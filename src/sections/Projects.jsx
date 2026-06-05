import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell projects-section">
      <SectionHeading eyebrow="Things I've Built" title="Featured Projects">
        <p>
          A tiny gallery of systems that are practical, shipped, and still
          carrying traces of the notebook they were planned in.
        </p>
      </SectionHeading>
      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
