import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="rounded-[2rem] border border-[#F5C9D9] bg-[#FFF1F6] p-8 shadow-[0_18px_55px_rgba(255,141,183,0.13)] sm:p-10">
        <SectionHeading eyebrow="Contact" title="Let's build something that ships.">
          <p>
            Placeholder links are ready for your real GitHub, LinkedIn, email,
            resume, and live deployments.
          </p>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["GitHub", "#"],
            ["LinkedIn", "#"],
            ["Email", "mailto:hello@example.com"],
            ["Resume", "#"],
          ].map(([label, href]) => (
            <a className="contact-link" href={href} key={label}>
              <span>{label}</span>
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
