import heroDesk from "../assets/herodesk.png";

const badges = ["TCS Intern", "VIT Chennai", "CGPA: 9.15", "Backend Systems"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#F5C9D9]"
    >
      <div className="absolute inset-0">
        <img
          src={heroDesk}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-pink-100/30" />
      </div>

      <div className="petal-field" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span className={`petal petal-${index + 1}`} key={index} />
        ))}
      </div>

      <div className="relative z-10 px-6 py-24 lg:px-36 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-serif text-[#151014] leading-[0.92] text-5xl lg:text-7xl">
            Full Stack Developer
          </h1>

          <p className="mt-4 text-3xl text-[#FF6EA8] font-serif">
            with a love for backend and design
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#493D42]">
            CS student at VIT Chennai who builds efficient backend systems,
            self-hosts production infrastructure on a server I actually manage,
            and occasionally makes things{" "}
            <span className="font-medium text-[#FF6EA8]">
              unreasonably pink
            </span>
            .
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-md bg-[#FCE8EF]/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#D6638A]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
