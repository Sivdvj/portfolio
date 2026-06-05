const navItems = [
  { label: "Home", href: "#home", icon: "⌂" },
  { label: "Projects", href: "#projects", icon: "✧" },
];

export default function Sidebar() {
  return (
    <aside className="z-30 border-[#F5C9D9] bg-[#FFF7FA]/92 px-5 py-5 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-r lg:px-7 lg:py-8">
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

      <div className="terminal-card mt-8 hidden lg:block">
        <div className="mb-5 flex items-center justify-between">
          <p className="font-mono text-sm font-bold text-[#2A2024]">$ whoami</p>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF6EA8]" />
            <span className="h-3 w-3 rounded-full bg-[#F6C85F]" />
            <span className="h-3 w-3 rounded-full bg-[#82D887]" />
          </div>
        </div>
        <div className="space-y-3 font-mono text-sm leading-6 text-[#2A2024]">
          <p>
            <span className="text-[#4C9B62]">siv@portfolio</span>:~$ cat
            about.txt
          </p>
          <p>School First Rank</p>
          <p>CGPA: 9.15</p>
          <p>Backend Enjoyer</p>
          <p>Docker Survivor</p>
          <p>Professional Pink Enthusiast</p>
          <span className="inline-block h-5 w-2 animate-pulse bg-[#2A2024]" />
        </div>
      </div>

      <div className="mt-8 hidden lg:block">
        <p className="mb-4 text-sm font-bold text-[#2A2024]">Let's connect</p>
        <div className="flex gap-3">
          {["GH", "in", "✉", "IG"].map((item) => (
            <a
              className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] font-bold text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
