const badges = [
  "School First Rank",
  "CGPA: 9.15",
  "TCS Intern",
  "Full Stack Developer",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#F5C9D9] px-6 py-16 lg:px-12 lg:py-20"
    >
      <div className="petal-field" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span className={`petal petal-${index + 1}`} key={index} />
        ))}
      </div>

      <div className="grid items-center gap-12 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 inline-flex items-center rounded-full border border-[#F5C9D9] bg-white/72 px-4 py-2 text-sm font-extrabold text-[#FF6EA8] shadow-sm">
            ✿ TCS Intern • VIT Chennai
          </div>
          <h1 className="font-serif text-5xl leading-[0.98] text-[#151014] sm:text-7xl lg:text-8xl">
            I build things that{" "}
            <span className="text-[#FF6EA8]">stay awake after</span> I go to
            sleep.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#493D42] sm:text-xl">
            Software Engineer focused on backend systems, real-time
            collaboration, and full-stack applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span className="badge-chip" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-desk relative z-10">
          <div className="note note-one">Ship something cute</div>
          <div className="note note-two">
            <span>IDEA</span>
            <span>↓</span>
            <span>CODE</span>
            <span>↓</span>
            <span>DEPLOY</span>
          </div>
          <div className="note note-three">
            <span>Users</span>
            <span>↓</span>
            <strong>API Gateway</strong>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
              <span>Auth</span>
              <span>Plan</span>
              <span>Device</span>
            </div>
          </div>

          <div className="laptop">
            <div className="laptop-screen">
              <code>
                <span>&gt; building</span>
                <span>&gt; learning</span>
                <span>&gt; shipping</span>
                <span>&gt; repeating</span>
              </code>
            </div>
          </div>
          <div className="desk-mug">♡</div>
          <div className="desk-vase">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
