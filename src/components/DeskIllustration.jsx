// src/components/DeskIllustration.jsx

export default function DeskIllustration() {
  return (
    <svg
      viewBox="0 0 520 340"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        {/* Petal shadow */}
        <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="1"
            dy="2"
            stdDeviation="2"
            floodColor="#c05080"
            floodOpacity="0.15"
          />
        </filter>

        {/* Laptop base gradient */}
        <linearGradient id="laptopBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9c8d8" />
          <stop offset="100%" stopColor="#f0a0b8" />
        </linearGradient>

        {/* Vase gradient */}
        <linearGradient id="vaseGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fce8ef" />
          <stop offset="100%" stopColor="#f0a0b8" />
        </linearGradient>

        {/* Mug gradient */}
        <linearGradient id="mugGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce8ef" />
          <stop offset="100%" stopColor="#f5b8cb" />
        </linearGradient>

        {/* Sticky note 1 */}
        <linearGradient id="sticky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce8ef" />
          <stop offset="100%" stopColor="#f9dce8" />
        </linearGradient>

        {/* Sticky note 2 */}
        <linearGradient id="sticky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff8f0" />
          <stop offset="100%" stopColor="#fdf0e4" />
        </linearGradient>

        {/* Tablet gradient */}
        <linearGradient id="tabletGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce8ef" />
          <stop offset="100%" stopColor="#f5c0d0" />
        </linearGradient>

        {/* Cherry blossom petal */}
        <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdd8e8" />
          <stop offset="100%" stopColor="#f0a0b8" />
        </radialGradient>
      </defs>

      {/* ── Cherry blossom branch (top) ──────────────────────────── */}
      {/* Main branch sweeping from top-right */}
      <path
        d="M 350 0 Q 390 20 420 35 Q 460 55 500 45 Q 520 38 520 38"
        stroke="#c8a0b0"
        strokeWidth="2.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M 395 22 Q 405 10 415 5"
        stroke="#c8a0b0"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M 440 42 Q 445 28 455 22"
        stroke="#c8a0b0"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      {/* Blossoms on branch */}
      {[
        [385, 26],
        [405, 16],
        [418, 9],
        [430, 35],
        [447, 28],
        [460, 22],
        [472, 40],
        [488, 33],
        [503, 42],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx={Math.cos((angle * Math.PI) / 180) * 5}
              cy={Math.sin((angle * Math.PI) / 180) * 5}
              rx="4.5"
              ry="3"
              fill="url(#petalGrad)"
              opacity="0.75"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="2" fill="#fdd8e8" />
          <circle cx="0" cy="0" r="1" fill="#f9a0c0" />
        </g>
      ))}

      {/* ── Desk surface ─────────────────────────────────────────── */}
      <rect
        x="0"
        y="258"
        width="520"
        height="82"
        fill="#faf0f4"
        rx="0"
        opacity="0.6"
      />
      <line
        x1="0"
        y1="258"
        x2="520"
        y2="258"
        stroke="rgba(214,99,138,0.18)"
        strokeWidth="1"
      />

      {/* ── STICKY NOTE 2: IDEA → CODE → DEPLOY ─────────────────── */}
      <g transform="translate(158, 60)" filter="url(#softShadow)">
        <g transform="rotate(2)">
          <rect
            x="0"
            y="0"
            width="82"
            height="90"
            rx="3"
            fill="url(#sticky2)"
          />
          <rect
            x="24"
            y="-6"
            width="28"
            height="10"
            rx="2"
            fill="#f9e8c8"
            opacity="0.7"
          />
          {/* IDEA box */}
          <rect
            x="18"
            y="10"
            width="46"
            height="16"
            rx="2"
            fill="none"
            stroke="rgba(92,61,82,0.35)"
            strokeWidth="1"
          />
          <text
            x="41"
            y="22"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="8"
            fill="#5c3d52"
            textAnchor="middle"
            fontWeight="500"
          >
            IDEA
          </text>
          {/* arrow */}
          <line
            x1="41"
            y1="26"
            x2="41"
            y2="33"
            stroke="rgba(92,61,82,0.4)"
            strokeWidth="1"
          />
          <polygon points="37,32 41,37 45,32" fill="rgba(92,61,82,0.35)" />
          {/* CODE box */}
          <rect
            x="18"
            y="37"
            width="46"
            height="16"
            rx="2"
            fill="rgba(240,160,184,0.18)"
            stroke="rgba(214,99,138,0.3)"
            strokeWidth="1"
          />
          <text
            x="41"
            y="49"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="8"
            fill="#e8527a"
            textAnchor="middle"
            fontWeight="500"
          >
            CODE
          </text>
          {/* arrow */}
          <line
            x1="41"
            y1="53"
            x2="41"
            y2="60"
            stroke="rgba(92,61,82,0.4)"
            strokeWidth="1"
          />
          <polygon points="37,59 41,64 45,59" fill="rgba(92,61,82,0.35)" />
          {/* DEPLOY box */}
          <rect
            x="18"
            y="64"
            width="46"
            height="16"
            rx="2"
            fill="none"
            stroke="rgba(92,61,82,0.3)"
            strokeWidth="1"
          />
          <text
            x="41"
            y="76"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="8"
            fill="#5c3d52"
            textAnchor="middle"
            fontWeight="500"
          >
            DEPLOY
          </text>
        </g>
      </g>

      {/* ── Architecture sketch: USERS → Gateway → Services ──────── */}
      <g transform="translate(256, 52)" filter="url(#softShadow)">
        {/* background card */}
        <rect
          x="0"
          y="0"
          width="180"
          height="130"
          rx="5"
          fill="rgba(253,246,240,0.85)"
          stroke="rgba(214,99,138,0.15)"
          strokeWidth="1"
        />

        {/* USERS */}
        <rect
          x="55"
          y="10"
          width="70"
          height="18"
          rx="3"
          fill="none"
          stroke="rgba(92,61,82,0.3)"
          strokeWidth="1"
        />
        <text
          x="90"
          y="23"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="8"
          fill="#5c3d52"
          textAnchor="middle"
        >
          USERS
        </text>
        {/* down arrow */}
        <line
          x1="90"
          y1="28"
          x2="90"
          y2="35"
          stroke="rgba(92,61,82,0.35)"
          strokeWidth="1"
        />
        <polygon points="86,34 90,38 94,34" fill="rgba(92,61,82,0.3)" />
        {/* API GATEWAY */}
        <rect
          x="30"
          y="38"
          width="120"
          height="18"
          rx="3"
          fill="rgba(240,160,184,0.15)"
          stroke="rgba(214,99,138,0.3)"
          strokeWidth="1"
        />
        <text
          x="90"
          y="51"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="7.5"
          fill="#e8527a"
          textAnchor="middle"
          fontWeight="500"
        >
          API GATEWAY
        </text>
        {/* branching arrows */}
        <line
          x1="60"
          y1="56"
          x2="38"
          y2="64"
          stroke="rgba(92,61,82,0.3)"
          strokeWidth="0.75"
        />
        <line
          x1="90"
          y1="56"
          x2="90"
          y2="64"
          stroke="rgba(92,61,82,0.3)"
          strokeWidth="0.75"
        />
        <line
          x1="120"
          y1="56"
          x2="142"
          y2="64"
          stroke="rgba(92,61,82,0.3)"
          strokeWidth="0.75"
        />
        {/* Auth Service */}
        <rect
          x="5"
          y="64"
          width="56"
          height="20"
          rx="3"
          fill="none"
          stroke="rgba(92,61,82,0.25)"
          strokeWidth="1"
        />
        <text
          x="33"
          y="72"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fill="#5c3d52"
          textAnchor="middle"
        >
          AUTH
        </text>
        <text
          x="33"
          y="80"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fill="#5c3d52"
          textAnchor="middle"
        >
          SERVICE
        </text>
        {/* Plan Service */}
        <rect
          x="62"
          y="64"
          width="56"
          height="20"
          rx="3"
          fill="none"
          stroke="rgba(92,61,82,0.25)"
          strokeWidth="1"
        />
        <text
          x="90"
          y="72"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fill="#5c3d52"
          textAnchor="middle"
        >
          PLAN
        </text>
        <text
          x="90"
          y="80"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fill="#5c3d52"
          textAnchor="middle"
        >
          SERVICE
        </text>
        {/* Device Service */}
        <rect
          x="119"
          y="64"
          width="58"
          height="20"
          rx="3"
          fill="none"
          stroke="rgba(92,61,82,0.25)"
          strokeWidth="1"
        />
        <text
          x="148"
          y="72"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fill="#5c3d52"
          textAnchor="middle"
        >
          DEVICE
        </text>
        <text
          x="148"
          y="80"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fill="#5c3d52"
          textAnchor="middle"
        >
          SERVICE
        </text>
      </g>

      {/* ── Flower vase (left side) ───────────────────────────────── */}
      <g transform="translate(28, 158)">
        {/* Stems */}
        <path
          d="M 36 90 Q 28 60 24 20"
          stroke="#9bc4a0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 36 90 Q 36 55 38 18"
          stroke="#9bc4a0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 36 90 Q 46 58 54 22"
          stroke="#9bc4a0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <ellipse
          cx="30"
          cy="52"
          rx="8"
          ry="4"
          fill="#9bc4a0"
          opacity="0.7"
          transform="rotate(-35 30 52)"
        />
        <ellipse
          cx="44"
          cy="58"
          rx="7"
          ry="3.5"
          fill="#9bc4a0"
          opacity="0.6"
          transform="rotate(25 44 58)"
        />

        {/* Flower 1 — top center */}
        <g transform="translate(38, 14)">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx={Math.cos((a * Math.PI) / 180) * 8}
              cy={Math.sin((a * Math.PI) / 180) * 8}
              rx="7"
              ry="4"
              fill="#f9c8d8"
              opacity="0.85"
              transform={`rotate(${a})`}
            />
          ))}
          <circle cx="0" cy="0" r="5" fill="#fdd8e8" />
          <circle cx="0" cy="0" r="2.5" fill="#f9a0c0" />
        </g>

        {/* Flower 2 — left */}
        <g transform="translate(22, 18)">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx={Math.cos((a * Math.PI) / 180) * 7}
              cy={Math.sin((a * Math.PI) / 180) * 7}
              rx="6"
              ry="3.5"
              fill="#fce8ef"
              opacity="0.8"
              transform={`rotate(${a + 30})`}
            />
          ))}
          <circle cx="0" cy="0" r="4" fill="#fdd8e8" />
          <circle cx="0" cy="0" r="2" fill="#f0a0b8" />
        </g>

        {/* Flower 3 — right */}
        <g transform="translate(54, 20)">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx={Math.cos((a * Math.PI) / 180) * 7}
              cy={Math.sin((a * Math.PI) / 180) * 7}
              rx="6"
              ry="3.5"
              fill="#f9c8d8"
              opacity="0.75"
              transform={`rotate(${a + 15})`}
            />
          ))}
          <circle cx="0" cy="0" r="4" fill="#fdd8e8" />
          <circle cx="0" cy="0" r="2" fill="#f9a0c0" />
        </g>

        {/* Vase body */}
        <path
          d="M 20 90 Q 14 95 16 105 L 20 130 Q 28 138 36 138 Q 44 138 52 130 L 56 105 Q 58 95 52 90 Q 46 86 36 86 Q 26 86 20 90 Z"
          fill="url(#vaseGrad)"
          stroke="rgba(214,99,138,0.3)"
          strokeWidth="1.5"
          filter="url(#softShadow)"
        />
        {/* Vase neck */}
        <ellipse
          cx="36"
          cy="90"
          rx="16"
          ry="5"
          fill="#f9c8d8"
          stroke="rgba(214,99,138,0.25)"
          strokeWidth="1"
        />
        {/* Vase highlight */}
        <path
          d="M 24 98 Q 22 108 23 120"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* ── Laptop ───────────────────────────────────────────────── */}
      <g transform="translate(120, 148)" filter="url(#softShadow)">
        {/* Screen */}
        <rect
          x="8"
          y="0"
          width="196"
          height="130"
          rx="8"
          fill="#1a0d14"
          stroke="#3a1e2e"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="6"
          width="184"
          height="118"
          rx="5"
          fill="url(#screenGrad)"
        />

        {/* Screen content: terminal lines */}
        <text
          x="24"
          y="28"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fill="#f9a0c0"
          opacity="0.7"
        >
          &gt; building
        </text>
        <text
          x="24"
          y="42"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fill="#9bc4a0"
          opacity="0.6"
        >
          &gt; learning
        </text>
        <text
          x="24"
          y="56"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fill="#f9a0c0"
          opacity="0.7"
        >
          &gt; shipping
        </text>
        <text
          x="24"
          y="70"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fill="#9bc4a0"
          opacity="0.5"
        >
          &gt; repeating
        </text>

        {/* Faint code lines */}
        <rect
          x="24"
          y="94"
          width="80"
          height="4"
          rx="2"
          fill="rgba(240,160,184,0.2)"
        />
        <rect
          x="24"
          y="102"
          width="120"
          height="4"
          rx="2"
          fill="rgba(155,196,160,0.18)"
        />
        <rect
          x="24"
          y="110"
          width="60"
          height="4"
          rx="2"
          fill="rgba(240,160,184,0.15)"
        />

        {/* Laptop hinge + base */}
        <rect
          x="0"
          y="130"
          width="212"
          height="12"
          rx="3"
          fill="url(#laptopBase)"
          stroke="rgba(214,99,138,0.3)"
          strokeWidth="1"
        />
        {/* trackpad */}
        <rect
          x="76"
          y="132"
          width="60"
          height="8"
          rx="3"
          fill="rgba(214,99,138,0.18)"
          stroke="rgba(214,99,138,0.2)"
          strokeWidth="0.75"
        />
      </g>

      {/* ── Cat mug (right side) ─────────────────────────────────── */}
      <g transform="translate(364, 200)" filter="url(#softShadow)">
        {/* Mug body */}
        <path
          d="M 8 0 L 8 62 Q 8 72 18 72 L 50 72 Q 60 72 60 62 L 60 0 Z"
          fill="url(#mugGrad)"
          stroke="rgba(214,99,138,0.28)"
          strokeWidth="1.5"
        />
        {/* Handle */}
        <path
          d="M 60 15 Q 82 15 82 35 Q 82 55 60 55"
          stroke="rgba(214,99,138,0.35)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 60 18 Q 76 18 76 35 Q 76 52 60 52"
          stroke="url(#mugGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Cat face on mug */}
        <circle cx="34" cy="32" r="18" fill="rgba(249,200,216,0.35)" />
        {/* Eyes */}
        <ellipse cx="26" cy="30" rx="3.5" ry="4" fill="#5c3d52" />
        <ellipse cx="42" cy="30" rx="3.5" ry="4" fill="#5c3d52" />
        <circle cx="27" cy="28.5" r="1.2" fill="#fff" opacity="0.7" />
        <circle cx="43" cy="28.5" r="1.2" fill="#fff" opacity="0.7" />
        {/* Nose */}
        <ellipse cx="34" cy="35" rx="2.5" ry="1.5" fill="#f9a0c0" />
        {/* Whiskers */}
        <line
          x1="12"
          y1="34"
          x2="30"
          y2="35.5"
          stroke="#9e7b8e"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <line
          x1="12"
          y1="37"
          x2="30"
          y2="36.5"
          stroke="#9e7b8e"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <line
          x1="38"
          y1="35.5"
          x2="56"
          y2="34"
          stroke="#9e7b8e"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <line
          x1="38"
          y1="36.5"
          x2="56"
          y2="37"
          stroke="#9e7b8e"
          strokeWidth="0.75"
          opacity="0.5"
        />
        {/* Ears (cat ears on top of mug) */}
        <polygon
          points="20,0 14,-12 28,-2"
          fill="#f9c8d8"
          stroke="rgba(214,99,138,0.2)"
          strokeWidth="1"
        />
        <polygon
          points="48,0 40,-2 54,-12"
          fill="#f9c8d8"
          stroke="rgba(214,99,138,0.2)"
          strokeWidth="1"
        />
        <polygon points="20,0 16,-8 26,-1" fill="#f5b8cb" opacity="0.5" />
        <polygon points="48,0 43,-1 52,-8" fill="#f5b8cb" opacity="0.5" />
        {/* Steam */}
        <path
          d="M 20 0 Q 16 -8 20 -16 Q 24 -24 20 -32"
          stroke="rgba(214,99,138,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="opacity"
            values="0.25;0.5;0.25"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M 34 -4 Q 30 -12 34 -20 Q 38 -28 34 -36"
          stroke="rgba(214,99,138,0.2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.45;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        {/* Mug rim */}
        <rect
          x="8"
          y="-4"
          width="52"
          height="8"
          rx="3"
          fill="#fce8ef"
          stroke="rgba(214,99,138,0.2)"
          strokeWidth="1"
        />
      </g>

      {/* ── Small tablet (far right) ─────────────────────────────── */}
      <g transform="translate(452, 178)" filter="url(#softShadow)">
        {/* Tablet frame */}
        <rect
          x="0"
          y="0"
          width="58"
          height="75"
          rx="7"
          fill="url(#tabletGrad)"
          stroke="rgba(214,99,138,0.28)"
          strokeWidth="1.5"
        />
        {/* Screen area */}
        <rect x="4" y="5" width="50" height="58" rx="4" fill="#1a0d14" />

        {/* Bottom lines on screen */}
        <rect
          x="10"
          y="44"
          width="38"
          height="3"
          rx="1.5"
          fill="rgba(240,160,184,0.25)"
        />
        <rect
          x="14"
          y="50"
          width="30"
          height="2.5"
          rx="1.2"
          fill="rgba(240,160,184,0.18)"
        />
        {/* Home button */}
        <circle
          cx="29"
          cy="68"
          r="3"
          fill="rgba(214,99,138,0.18)"
          stroke="rgba(214,99,138,0.25)"
          strokeWidth="0.75"
        />
      </g>
    </svg>
  );
}
