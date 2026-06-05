import DeskIllustration from "./DeskIllustration";

const badges = [
  "School First Rank",
  "CGPA: 9.15",
  "TCS Intern",
  "Backend Systems",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden border-b border-[#F5C9D9] px-6 py-4 lg:px-10 lg:py-0"
    >
      {" "}
      <div className="petal-field" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span className={`petal petal-${index + 1}`} key={index} />
        ))}{" "}
      </div>
      <div className="hero-grid grid items-center gap-4 xl:grid-cols-[1fr_1fr]">
        <div className="hero-copy relative z-10 max-w-5xl">
          <div className="mb-2 inline-flex items-center rounded-full border border-[#F5C9D9] bg-white/72 px-4 py-1.5 text-sm font-extrabold text-[#FF6EA8] shadow-sm">
            ✿ TCS Intern • VIT Chennai
          </div>
          <h1 className="font-serif text-[#151014] leading-[0.92] text-5xl sm:text-6xl lg:text-[5.2rem]">
            I build things that{" "}
            <span className="text-[#FF6EA8]">stay awake after</span>
            <br />I go to sleep.
          </h1>
          <p className="mt-2 max-w-xl text-lg leading-7 text-[#493D42]">
            Software Engineer focused on backend systems, real-time
            collaboration, and full-stack applications.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span className="badge-chip" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-desk relative z-10">
          <DeskIllustration />
        </div>
      </div>
    </section>
  );
}
