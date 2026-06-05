export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-6 xl:grid-cols-[1fr_1.15fr]">
        <div className="paper-panel">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#FF6EA8]">
            whoami
          </p>
          <h2 className="mt-3 font-serif text-4xl text-[#2A2024]">
            Software engineer with a soft spot for systems that feel alive.
          </h2>
          <p className="mt-5 leading-8 text-[#6B5C61]">
            I like building reliable backend services, real-time experiences,
            and full-stack tools that move beyond demos. My work sits somewhere
            between careful engineering and a pink notebook full of diagrams.
          </p>
        </div>

        <div className="terminal-card min-h-full">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-mono text-xl font-bold text-[#2A2024]">whoami</h3>
            <span className="rounded-full bg-[#FFE4EF] px-3 py-1 text-sm font-bold text-[#FF6EA8]">
              live notes
            </span>
          </div>
          <div className="grid gap-5 text-[#2A2024] sm:grid-cols-2">
            <div>
              <p className="terminal-label">School</p>
              <p>School First Rank</p>
            </div>
            <div>
              <p className="terminal-label">CGPA</p>
              <p>9.15</p>
            </div>
            <div>
              <p className="terminal-label">Currently Building</p>
              <ul className="mt-2 space-y-1">
                <li>CodeCollab</li>
                <li>Telecom Platform</li>
                <li>BlushBoard</li>
              </ul>
            </div>
            <div>
              <p className="terminal-label">Currently Learning</p>
              <ul className="mt-2 space-y-1">
                <li>Spring Security</li>
                <li>System Design</li>
                <li>CRDTs</li>
              </ul>
            </div>
            <div className="sm:col-span-2">
              <p className="terminal-label">Coffee Consumption</p>
              <p>Dangerously High</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
