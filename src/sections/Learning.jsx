import LearningCard from "../components/LearningCard";
import SectionHeading from "../components/SectionHeading";
import { learningItems } from "../data/projects";

export default function Learning() {
  return (
    <section id="learning" className="section-shell bg-white/42">
      <SectionHeading eyebrow="Currently Active" title="Things I'm Learning">
        <p>
          Notes in progress, concepts getting rewritten, and backend ideas
          slowly becoming muscle memory.
        </p>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {learningItems.map((item, index) => (
          <LearningCard item={item} index={index} key={item} />
        ))}
      </div>
    </section>
  );
}
