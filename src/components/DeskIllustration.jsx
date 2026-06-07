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
      </defs>

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
      <g transform="translate(400, 30) scale(1.3)" filter="url(#softShadow)">
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
      <g transform="translate(110, 125) scale(1.5)" filter="url(#softShadow)">
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
    </svg>
  );
}
