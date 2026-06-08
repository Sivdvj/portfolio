import { LuGithub, LuLinkedin } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { PiFlowerFill } from "react-icons/pi";
import { LuHouse, LuBriefcaseBusiness } from "react-icons/lu";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";

const navItems = [
  { label: "Home", href: "#home", icon: LuHouse },
  { label: "Experience", href: "#experience", icon: LuBriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: HiOutlinePuzzlePiece },
];

export default function Sidebar() {
  return (
    <aside className="z-30 border-[#F5C9D9] bg-[#FFF7FA]/92 px-5 py-5 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-r lg:px-6 lg:py-6">
      {" "}
      <a className="group block" href="#home">
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FFE4EF] text-[#FF6EA8] hover:scale-110 transition duration-300 ease-in-out">
            <PiFlowerFill size="36" />
          </div>

          <div>
            <h1 className="font-serif tracking-wide font-bold text-xl text-[#2A2024]">
              Sivaranjani Vijay
            </h1>
            <p className="tracking-wide text-sm text-[#8A6D78]">
              Full Stack Developer
            </p>
          </div>
        </div>
      </a>
      <a
        className="resume-button hover:scale-110 transition duration-300 ease-in-out w-full"
        href="https://drive.google.com/file/d/1AnfHe4RhKtAHq05_93J7QK1gc3EyGTrj/view?usp=sharing"
        target="_blank"
      >
        Resume ↗
      </a>
      <nav className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:mt-12 lg:grid lg:overflow-visible lg:pb-0">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a className="nav-link" href={item.href} key={item.href}>
              <span className="nav-icon">
                <Icon size={24} />
              </span>

              <span className="font-serif font-semibold tracking-wide">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
      <div className="paper-panel mt-8 hidden lg:block">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#FF6EA8]">
          About Me
        </p>

        <p className="text-sm leading-7 font-bold text-[#612d43]">
          I enjoy building backend systems, self-hosting applications on my own
          server, and figuring out how things work under the hood. When I'm not
          debugging something, I'm usually making it pink
        </p>
      </div>
      <div className="mt-8 hidden lg:block lg:absolute lg:bottom-6 lg:left-6 lg:right-6">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2 items-center">
            <a
              href="https://github.com/Sivdvj"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
            >
              <LuGithub size={24} />
            </a>
            <div className="font-bold text-pink-800 text-xs">Github</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/sivaranjani-vijay"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
            >
              <LuLinkedin size={24} />
            </a>
            <div className="font-bold text-pink-800 text-xs">LinkedIn</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a
              href="https://leetcode.com/u/Sivdvj"
              target="_blank"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE4EF] text-[#B65C7D] transition hover:-translate-y-1 hover:bg-[#FF8DB7] hover:text-white"
            >
              <SiLeetcode size={24} />
            </a>
            <div className="font-bold text-pink-800 text-xs">Leetcode</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
