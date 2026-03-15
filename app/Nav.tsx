// shared/Nav.tsx
// Fixed navigation bar shared across all pages.
// URLs: / → Home, /team → Team, /chapters → Chapters
// "Get in Touch" scrolls to #contact on whichever page is active.
//
// Props:
//   activePage — "home" | "team" | "chapters"
//   Highlights the current page link in orange.

import Link from "next/link";
import { C } from "./Tokens";

const NAV_LINKS: { label: string; href: string; page: string }[] = [
  { label: "Home",     href: "/",          page: "home" },
  { label: "Team",     href: "/team",      page: "team" },
  { label: "Chapters", href: "/chapters",  page: "chapters" },
];

export default function Nav({ activePage }: { activePage: "home" | "team" | "chapters" }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 60px",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: `1.5px solid ${C.border}`,
      }}
    >
      {/* Wordmark — always links home */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ lineHeight: 1.1 }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "1rem",
              color: C.navy,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: C.orange }}>Youth Health</span>
            <span style={{ color: C.hyphen, margin: "0 3px" }}>-</span>
            <span>Accountability</span>
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C.mid,
            }}
          >
            Network
          </div>
        </div>
      </Link>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {NAV_LINKS.map(({ label, href, page }) => (
          <li key={page}>
            <Link
              href={href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: activePage === page ? C.orange : C.mid,
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          </li>
        ))}

        {/* CTA */}
        <li>
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: C.orange,
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </li>
      </ul>
    </nav>
  );
}