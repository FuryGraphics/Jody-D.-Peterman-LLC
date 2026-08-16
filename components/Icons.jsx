// Lightweight inline SVG icon set (stroke-based, currentColor).
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, className = "", size = 24 }) {
  const p = { ...base, width: size, height: size, className };
  switch (name) {
    case "car":
      return (
        <svg {...p}>
          <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5" />
          <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z" />
          <path d="M6.5 16h.01M17.5 16h.01" />
        </svg>
      );
    case "truck":
      return (
        <svg {...p}>
          <path d="M2 6h11v9H2zM13 9h4l3 3v3h-7z" />
          <circle cx="6.5" cy="17.5" r="1.6" />
          <circle cx="17" cy="17.5" r="1.6" />
        </svg>
      );
    case "motorcycle":
      return (
        <svg {...p}>
          <circle cx="5" cy="16" r="3" />
          <circle cx="19" cy="16" r="3" />
          <path d="M5 16l4-5h5l2 3M9 11l-1-3H6M14 11h4l1 2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...p}>
          <path d="M12 20s-7-4.35-9.3-8.5C1.1 8.8 2.6 5.5 6 5.5c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3 3.4 0 4.9 3.3 3.3 6C19 15.65 12 20 12 20z" />
        </svg>
      );
    case "warning":
      return (
        <svg {...p}>
          <path d="M12 3l9 16H3z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case "hardhat":
      return (
        <svg {...p}>
          <path d="M3 17a9 9 0 0 1 18 0" />
          <path d="M10 5.5A2 2 0 0 1 12 4a2 2 0 0 1 2 1.5V9M8 9V7M16 9V7" />
          <path d="M2 17h20v2H2z" />
        </svg>
      );
    case "medical":
      return (
        <svg {...p}>
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <path d="M9 6V4h6v2M12 10v6M9 13h6" />
        </svg>
      );
    case "star":
      return (
        <svg {...p} fill="currentColor" stroke="none">
          <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3 1.2-6.5L2.5 8.9 9 8z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...p}>
          <path d="M4 5h16v11H8l-4 3z" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...p}>
          <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...p}>
          <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "scale":
      return (
        <svg {...p}>
          <path d="M12 3v18M7 21h10M5 7h14M12 4l-4 3M12 4l4 3" />
          <path d="M5 7l-2.5 6a3 3 0 0 0 5 0zM19 7l-2.5 6a3 3 0 0 0 5 0z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...p}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
