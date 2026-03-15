// shared/Footer.tsx
// Site-wide footer used on every page.
// Navigate links point to real page URLs: /, /team, /chapters
// "Get Involved" links open a mailto to the founder.

import Link from "next/link";
import { C } from "./Tokens";

const NAVIGATE_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Team",     href: "/team" },
  { label: "Chapters", href: "/chapters" },
  { label: "Contact",  href: "#contact" },
];

const INVOLVE_LINKS = [
  { label: "Apply as Ambassador", href: "mailto:ayra@yhan.org?subject=Ambassador Application" },
  { label: "Start a Chapter",     href: "mailto:ayra@yhan.org?subject=Start a Chapter" },
  { label: "Partner with Us",     href: "mailto:ayra@yhan.org?subject=Partnership Inquiry" },
];

export default function Footer() {
  return (
    <footer style={{ background: C.navy, padding: "64px 60px 32px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 56,
          marginBottom: 48,
        }}
      >
        {/* Brand column */}
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 900,
                fontSize: "0.95rem",
                color: "#fff",
                marginBottom: 14,
              }}
            >
              <span style={{ color: C.orange }}>Youth Health</span> - Accountability
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.3)",
                  marginTop: 2,
                }}
              >
                Network
              </div>
            </div>
          </Link>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.84rem",
              color: "rgba(255,255,255,.38)",
              lineHeight: 1.7,
              fontWeight: 500,
              maxWidth: 300,
            }}
          >
            A global student-led movement using youth insight to reshape
            education systems, one policy at a time.
          </p>
        </div>

        {/* Navigate */}
        <FooterCol heading="Navigate" links={NAVIGATE_LINKS} />

        {/* Get Involved */}
        <FooterCol heading="Get Involved" links={INVOLVE_LINKS} />
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          paddingTop: 26,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.76rem",
          color: "rgba(255,255,255,.26)",
          fontWeight: 600,
        }}
      >
        <span>© {new Date().getFullYear()} Youth Health Accountability Network. All rights reserved.</span>
        <span>Built by students, for students.</span>
      </div>
    </footer>
  );
}

/* ── small helper so each column isn't repeated ── */
function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 800,
          fontSize: "0.75rem",
          color: "#fff",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {heading}
      </h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            {href.startsWith("mailto:") || href.startsWith("#") ? (
              <a
                href={href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,.4)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,.4)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}