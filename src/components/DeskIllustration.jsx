function DeskShadow() {
  return (
    <ellipse
      cx="430"
      cy="286"
      rx="325"
      ry="24"
      className="fill-[#FF8DB7]/20"
    />
  );
}

function StickyNote({ x, y, rotate = 0, children, tape = true }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect
        x="0"
        y="0"
        width="86"
        height="82"
        rx="3"
        className="fill-white/80 stroke-[#A77283]"
        strokeWidth="1.3"
      />
      <path
        d="M6 7 C25 4, 48 9, 80 5"
        className="fill-none stroke-[#A77283]/50"
        strokeWidth="1"
      />
      {tape && (
        <rect
          x="25"
          y="-8"
          width="36"
          height="14"
          rx="1"
          className="fill-[#FFB8D4]/70 stroke-[#B86B83]/50"
        />
      )}
      <foreignObject x="9" y="19" width="68" height="52">
        <div className="flex h-full items-center justify-center text-center font-mono text-[13px] leading-4 text-[#6B5C61]">
          {children}
        </div>
      </foreignObject>
    </g>
  );
}

function FlowNote() {
  const boxes = [
    ["IDEA", 24],
    ["CODE", 60],
    ["DEPLOY", 96],
  ];

  return (
    <g transform="translate(212 24) rotate(2)">
      <rect
        width="116"
        height="128"
        rx="3"
        className="fill-white/80 stroke-[#A77283]"
        strokeWidth="1.3"
      />
      <rect
        x="38"
        y="-7"
        width="40"
        height="13"
        className="fill-[#FFB8D4]/60 stroke-[#B86B83]/40"
      />
      {boxes.map(([label, y], index) => (
        <g key={label}>
          <rect
            x={index === 2 ? 28 : 35}
            y={y}
            width={index === 2 ? 60 : 46}
            height="19"
            rx="2"
            className="fill-[#FFF7FA] stroke-[#6B5C61]"
          />
          <text
            x="58"
            y={y + 13}
            textAnchor="middle"
            className="fill-[#2A2024] font-mono text-[11px] font-bold"
          >
            {label}
          </text>
          {index < boxes.length - 1 && (
            <path
              d={`M58 ${y + 21} L58 ${y + 34}`}
              className="stroke-[#6B5C61]"
              markerEnd="url(#arrow)"
            />
          )}
        </g>
      ))}
      <text x="88" y="66" className="fill-[#FF6EA8] text-[15px]">
        ♡
      </text>
    </g>
  );
}

function ArchitectureDiagram() {
  const services = [
    ["AUTH", 20],
    ["PLAN", 100],
    ["DEVICE", 180],
  ];

  return (
    <g transform="translate(360 32) rotate(1)">
      <rect
        width="220"
        height="158"
        rx="4"
        className="fill-white/70 stroke-[#8D6470]"
        strokeWidth="1.4"
      />
      <rect
        x="82"
        y="-8"
        width="56"
        height="16"
        className="fill-[#FFB8D4]/70 stroke-[#B86B83]/40"
      />
      <text
        x="110"
        y="29"
        textAnchor="middle"
        className="fill-[#2A2024] font-mono text-[11px] font-bold"
      >
        USERS
      </text>
      <path d="M110 36 L110 54" className="stroke-[#5F5157]" markerEnd="url(#arrow)" />
      <rect
        x="54"
        y="55"
        width="112"
        height="24"
        rx="2"
        className="fill-[#FFF7FA] stroke-[#5F5157]"
      />
      <text
        x="110"
        y="71"
        textAnchor="middle"
        className="fill-[#2A2024] font-mono text-[11px] font-bold"
      >
        API GATEWAY
      </text>
      <path d="M110 80 L110 94 M60 94 H190" className="fill-none stroke-[#5F5157]" />
      {services.map(([label, x]) => (
        <g key={label}>
          <path d={`M${x + 30} 94 L${x + 30} 104`} className="stroke-[#5F5157]" />
          <rect
            x={x}
            y="104"
            width="60"
            height="34"
            rx="2"
            className="fill-[#FFF1F6] stroke-[#B76C83]"
          />
          <text
            x={x + 30}
            y="118"
            textAnchor="middle"
            className="fill-[#2A2024] font-mono text-[10px] font-bold"
          >
            {label}
          </text>
          <text
            x={x + 30}
            y="131"
            textAnchor="middle"
            className="fill-[#2A2024] font-mono text-[10px] font-bold"
          >
            SERVICE
          </text>
        </g>
      ))}
      <path d="M110 138 L110 150" className="stroke-[#5F5157]" />
      <ellipse
        cx="110"
        cy="151"
        rx="22"
        ry="7"
        className="fill-white stroke-[#5F5157]"
      />
      <path
        d="M88 151 v15 c0 4 44 4 44 0 v-15"
        className="fill-white stroke-[#5F5157]"
      />
    </g>
  );
}

function Laptop() {
  return (
    <g transform="translate(246 158)">
      <rect
        x="0"
        y="0"
        width="230"
        height="132"
        rx="9"
        className="fill-[#2A2024] stroke-[#47333C]"
        strokeWidth="5"
      />
      <rect x="13" y="13" width="204" height="101" rx="4" className="fill-[#201C20]" />
      <circle cx="115" cy="8" r="2" className="fill-[#FFD3E5]" />
      {[
        "> building",
        "> learning",
        "> shipping",
        "> repeating",
      ].map((line, index) => (
        <text
          x="43"
          y={42 + index * 19}
          className="fill-[#BCEFB1] font-mono text-[14px]"
          key={line}
        >
          {line}
        </text>
      ))}
      <path
        d="M-30 132 H260 L286 156 C260 165 4 165 -32 156 Z"
        className="fill-[#DAB8C5] stroke-[#47333C]"
        strokeWidth="3"
      />
      <rect x="75" y="143" width="84" height="8" rx="4" className="fill-[#B98A9B]" />
      <g className="stroke-[#6B5C61]/50">
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 10 }).map((__, col) => (
            <rect
              x={30 + col * 16}
              y={119 + row * 3}
              width="10"
              height="1"
              rx="0.5"
              key={`${row}-${col}`}
            />
          )),
        )}
      </g>
    </g>
  );
}

function Vase() {
  return (
    <g transform="translate(164 174)">
      <path
        d="M34 94 C12 82 12 26 29 20 C32 12 45 12 49 20 C66 27 66 83 43 94 Z"
        className="fill-[#FFD3E5] stroke-[#8D6470]"
        strokeWidth="2"
      />
      <path d="M35 22 C24 -16 18 -28 5 -42" className="fill-none stroke-[#5F7D58]" />
      <path d="M41 21 C42 -12 50 -27 60 -42" className="fill-none stroke-[#5F7D58]" />
      <path d="M38 22 C31 -11 33 -26 36 -46" className="fill-none stroke-[#5F7D58]" />
      {[[-3, -49], [60, -48], [36, -54], [16, -30], [51, -27]].map(([x, y]) => (
        <g transform={`translate(${x} ${y})`} key={`${x}-${y}`}>
          <ellipse cx="8" cy="8" rx="7" ry="11" className="fill-[#FFB8D4] stroke-[#8D6470]" />
          <ellipse cx="14" cy="7" rx="6" ry="10" className="fill-[#FFD3E5] stroke-[#8D6470]" />
          <circle cx="10" cy="11" r="3" className="fill-[#FF8DB7]" />
        </g>
      ))}
      <path d="M28 40 C35 48 43 48 51 38" className="fill-none stroke-white" strokeWidth="2" />
    </g>
  );
}

function CatCup() {
  return (
    <g transform="translate(505 225)">
      <path
        d="M18 8 C38 -2 71 2 88 13 L86 61 C82 78 27 79 22 61 Z"
        className="fill-[#FFD3E5] stroke-[#8D6470]"
        strokeWidth="2.2"
      />
      <path
        d="M86 24 C117 20 117 56 88 55"
        className="fill-none stroke-[#8D6470]"
        strokeWidth="8"
      />
      <ellipse cx="54" cy="12" rx="37" ry="9" className="fill-[#2A2024] stroke-[#8D6470]" />
      <path d="M36 40 l7 -8 l7 8 M59 40 l7 -8 l7 8" className="fill-none stroke-[#8D6470]" />
      <circle cx="45" cy="51" r="2" className="fill-[#2A2024]" />
      <circle cx="64" cy="51" r="2" className="fill-[#2A2024]" />
      <path d="M53 58 Q57 62 61 58" className="fill-none stroke-[#2A2024]" />
      <path d="M53 -24 C47 -13 50 -4 44 5 M68 -30 C59 -18 66 -8 58 4" className="fill-none stroke-[#FFB8D4]" strokeWidth="3" />
    </g>
  );
}

function CatTablet() {
  return (
    <g transform="translate(632 207) rotate(7)">
      <rect
        x="0"
        y="0"
        width="86"
        height="76"
        rx="8"
        className="fill-[#2A2024] stroke-[#47333C]"
        strokeWidth="4"
      />
      <rect x="10" y="10" width="66" height="52" rx="4" className="fill-[#FFF1F6]" />
      <path
        d="M27 42 C28 29 38 24 43 24 C53 24 61 31 61 42 C61 55 28 55 27 42 Z"
        className="fill-[#FFD3E5] stroke-[#8D6470]"
      />
      <path d="M34 28 l5 -8 l5 8 M50 28 l5 -8 l5 8" className="fill-[#FFD3E5] stroke-[#8D6470]" />
      <circle cx="39" cy="40" r="1.8" className="fill-[#2A2024]" />
      <circle cx="51" cy="40" r="1.8" className="fill-[#2A2024]" />
      <path d="M42 47 Q45 50 49 47" className="fill-none stroke-[#2A2024]" />
      <path d="M-10 78 H95" className="stroke-[#FF8DB7]/50" strokeWidth="5" />
    </g>
  );
}

function Petals() {
  return (
    <g className="fill-[#FF8DB7]/55">
      {[
        [35, 35, -20],
        [110, 78, 22],
        [318, 8, 18],
        [610, 98, -28],
        [688, 33, 18],
        [126, 294, -8],
        [575, 306, 18],
      ].map(([x, y, rotate]) => (
        <ellipse
          cx={x}
          cy={y}
          rx="8"
          ry="4"
          transform={`rotate(${rotate} ${x} ${y})`}
          key={`${x}-${y}`}
        />
      ))}
    </g>
  );
}

function CherryBranch() {
  const blossoms = [
    [34, 8, 1],
    [78, 19, 0.85],
    [112, 6, 1.1],
    [156, 21, 0.9],
    [198, 8, 1],
    [232, 26, 0.82],
  ];

  return (
    <g transform="translate(438 2)">
      <path
        d="M0 20 C56 8 110 8 170 18 C202 23 242 16 286 3"
        className="fill-none stroke-[#7D4D55]"
        strokeLinecap="round"
        strokeWidth="6"
      />
      <path
        d="M55 13 C67 22 78 30 96 34 M145 15 C155 3 165 -6 186 -12 M217 14 C231 23 244 31 262 33"
        className="fill-none stroke-[#7D4D55]"
        strokeLinecap="round"
        strokeWidth="4"
      />
      {blossoms.map(([x, y, scale]) => (
        <g transform={`translate(${x} ${y}) scale(${scale})`} key={`${x}-${y}`}>
          <circle cx="0" cy="0" r="4" className="fill-[#FF8DB7]" />
          {[0, 72, 144, 216, 288].map((rotate) => (
            <ellipse
              cx="0"
              cy="-9"
              rx="6"
              ry="9"
              className="fill-[#FFB8D4] stroke-[#FF8DB7]/60"
              transform={`rotate(${rotate})`}
              key={rotate}
            />
          ))}
        </g>
      ))}
    </g>
  );
}

export default function DeskIllustration() {
  return (
    <svg
      className="desk-illustration h-full w-full"
      viewBox="0 0 740 330"
      role="img"
      aria-labelledby="desk-title"
    >
      <title id="desk-title">A pink scrapbook software engineer desk with laptop, diagrams, flowers, cat cup, and tablet</title>
      <defs>
        <marker
          id="arrow"
          markerHeight="6"
          markerWidth="6"
          orient="auto"
          refX="5"
          refY="3"
        >
          <path d="M0 0 L6 3 L0 6 Z" className="fill-[#5F5157]" />
        </marker>
      </defs>
      <CherryBranch />
      <Petals />
      <path
        d="M26 286 C160 274 304 277 448 282 C556 286 626 282 717 270"
        className="fill-none stroke-[#C98EA5]/70"
        strokeWidth="2"
      />
      <DeskShadow />
      <StickyNote x={74} y={22} rotate={-4}>
        Ship something cute ♡
      </StickyNote>
      <FlowNote />
      <ArchitectureDiagram />
      <Vase />
      <Laptop />
      <CatCup />
      <CatTablet />
    </svg>
  );
}
