import DeskIllustration from "./DeskIllustration";

const badges = ["TCS Intern", "VIT Chennai", "CGPA: 9.15", "Backend Systems"];

function CherryBlossom() {
  const blossoms = [
    [80, 80],
    [150, 65],
    [220, 70],
    [300, 55],
    [380, 72],
    [470, 50],
    [560, 68],
    [650, 45],
    [740, 65],
    [820, 50],
    [920, 70],
    [1020, 48],
    [1100, 62],
  ];
  const miniBlossoms = [
    [120, 92],
    [190, 78],
    [260, 88],
    [340, 72],
    [420, 86],
    [500, 68],
    [590, 82],
    [670, 65],
    [760, 84],
    [840, 70],
    [930, 88],
    [1010, 72],
    [1090, 82],
    [1160, 68],
  ];

  return (
    <svg
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-35px",
        left: 0,
        width: "100%",
        height: "140px",
      }}
    >
      <defs>
        <radialGradient id="bp1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde8f0" />
          <stop offset="100%" stopColor="#f4b0c8" />
        </radialGradient>
        <radialGradient id="bp2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff0f5" />
          <stop offset="100%" stopColor="#f9c8d8" />
        </radialGradient>
      </defs>

      <path
        d="
        M 1200 10
        Q 1050 20 900 45
        Q 750 70 600 55
        Q 450 40 300 60
        Q 150 80 0 90
        "
        stroke="#d4a0b4"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />

      {blossoms.map(([cx, cy], i) => (
        <g
          key={i}
          transform={`translate(${cx} ${cy})`}
          opacity={0.7 + (i % 3) * 0.1}
        >
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx={Math.cos((angle * Math.PI) / 180) * 6}
              cy={Math.sin((angle * Math.PI) / 180) * 6}
              rx="5.5"
              ry="3.5"
              fill={i % 2 === 0 ? "url(#bp1)" : "url(#bp2)"}
              transform={`rotate(${angle + i * 8})`}
              opacity="0.85"
            />
          ))}
          <circle cx="0" cy="0" r="2.5" fill="#fde8f0" />
          <circle cx="0" cy="0" r="1.2" fill="#f4a0c0" />
        </g>
      ))}

      {miniBlossoms.map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`} opacity="0.55">
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx={Math.cos((angle * Math.PI) / 180) * 4}
              cy={Math.sin((angle * Math.PI) / 180) * 4}
              rx="3.5"
              ry="2.5"
              fill="url(#bp2)"
              transform={`rotate(${angle + i * 12})`}
              opacity="0.75"
            />
          ))}
          <circle cx="0" cy="0" r="1.5" fill="#fde8f0" />
          <circle cx="0" cy="0" r="0.8" fill="#f9a0c0" />
        </g>
      ))}

      {[
        [60, 74, 15],
        [140, 80, -10],
        [220, 68, 20],
        [310, 76, -15],
        [420, 58, 8],
      ].map(([cx, cy, rot], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="4"
          ry="2.5"
          fill="url(#bp1)"
          transform={`rotate(${rot} ${cx} ${cy})`}
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden border-b border-[#F5C9D9] px-6 pt-20 pb-12 lg:px-10 lg:pt-20 lg:pb-10"
    >
      <CherryBlossom />

      <div className="petal-field" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span className={`petal petal-${index + 1}`} key={index} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="hero-copy relative z-10 flex-1">
          <h1 className="font-serif text-[#151014] leading-[0.92] text-6xl">
            Full Stack Developer
            <br />
            <div className="text-3xl mt-2">
              with a love for backend{" "}
              <span className="text-[#FF6EA8]">and cute design</span>
            </div>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#493D42]">
            CS student at VIT Chennai who builds efficient backend systems,
            self-hosts production infrastructure on a server I actually manage,
            and occasionally makes things{" "}
            <span className="text-[#FF6EA8] font-medium">
              unreasonably pink
            </span>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                className="rounded-md bg-[#FCE8EF] font-mono px-2.5 py-1 text-xs uppercase tracking-wider text-[#D6638A]"
                key={badge}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-desk relative z-10 w-full max-w-md">
          <DeskIllustration />
        </div>
      </div>
    </section>
  );
}
