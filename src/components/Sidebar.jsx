const navItems = [
  { label: "Home", href: "#home", icon: "⌂" },
  { label: "Experience", href: "#experience", icon: "◈" },
  { label: "Projects", href: "#projects", icon: "✧" },
];

export default function Sidebar() {
  return (
    <aside className="z-30 border-[#F5C9D9] bg-[#FFF7FA]/92 px-5 py-5 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-62.5 lg:border-r lg:px-6 lg:py-6">
      {" "}
      <div className="flex items-center justify-between gap-4 lg:block">
        <a className="group flex items-center gap-3" href="#home">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FFE4EF] text-2xl text-[#FF6EA8] shadow-inner">
            ✿
          </span>
          <div>
            <p className="text-lg font-extrabold uppercase tracking-[0.12em] text-[#FF6EA8]">
              Sivaranjani
            </p>
            <p className="hidden text-sm text-[#6B5C61] sm:block">
              Crafting ideas into real-world systems
            </p>
          </div>
        </a>
        <a
          className="resume-button lg:hidden"
          href="#"
          aria-label="Resume placeholder"
        >
          Resume
        </a>
      </div>
      <nav className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:mt-12 lg:grid lg:overflow-visible lg:pb-0">
        {navItems.map((item) => (
          <a className="nav-link" href={item.href} key={item.href}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="paper-panel mt-8 hidden lg:block">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-[#FF6EA8]">
          Quick Facts
        </p>

        <div className="space-y-3 text-sm text-[#493D42]">
          <div className="flex items-center justify-between">
            <span>CGPA</span>
            <span className="font-semibold">9.15</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Current Role</span>
            <span className="font-semibold">TCS Intern</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Focus</span>
            <span className="font-semibold">Backend</span>
          </div>

          <div className="flex items-center justify-between">
            <span>University</span>
            <span className="font-semibold">VIT Chennai</span>
          </div>
        </div>
      </div>
      <div className="mt-8 hidden lg:block">
        <p className="mb-4 text-sm font-bold text-[#2A2024]">Let's connect</p>

        <div className="flex gap-3">
          <a
            href="https://github.com/Sivdvj"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
          >
            <i className="fa-brands fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/sivaranjani-vijay"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
          >
            ✉
          </a>
        </div>
      </div>
    </aside>
  );
}
