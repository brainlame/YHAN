'use client'
// teampage.tsx
// Only team-specific content lives here.
// Nav, Footer, ColorBar, tokens, Typography → imported from /shared

import { C } from "./Tokens";
import { Eyebrow } from "./typography";
import Nav from "./Nav";
import Footer from "./footer";
import ColorBar from "./ColorBar";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const founders = [
  {
    name: "Ayra Dhillon",
    role: "Founder & Executive Director",
    bio: "Ayra founded YHAN after watching decisions get made about students, without students. She leads global operations, chapter development, and direct partnerships with school districts and city governments.",
    email: "ayra@yhan.org",
    accentColor: C.orange,
    initials: "AD",
    badges: ["Policy Advocacy", "Chapter Ops", "Partnerships"],
  },
  {
    name: "Co-Founder Two",
    role: "Director of Research & Data",
    bio: "Leads survey design, data collection methodology, and analysis pipelines. Passionate about turning student responses into evidence that policymakers can act on.",
    email: "research@yhan.org",
    accentColor: C.cyan,
    initials: "CF",
    badges: ["Survey Design", "Data Analysis", "Research"],
  },
  {
    name: "Co-Founder Three",
    role: "Director of Community & Growth",
    bio: "Drives ambassador recruitment, ambassador training, and inter-chapter collaboration. Believes every school deserves a student who will speak up.",
    email: "community@yhan.org",
    accentColor: C.yellow,
    initials: "CT",
    badges: ["Recruitment", "Training", "Community"],
  },
];

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function TeamHero() {
  return (
    <section style={{ padding: "140px 60px 80px", background: C.white, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `
        radial-gradient(ellipse 60% 60% at 50% 0%, rgba(233,113,50,.07) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 0% 100%, rgba(41,169,193,.06) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%)
      `}} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <Eyebrow color={C.orange}>The People Behind YHAN</Eyebrow>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 4.8rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.navy, marginBottom: 24 }}>
          Meet the team that<br />
          <em style={{ fontStyle: "italic", color: C.orange }}>refuses to be ignored.</em>
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.08rem", lineHeight: 1.78, color: C.mid, fontWeight: 500, maxWidth: 580, margin: "0 auto" }}>
          Three students who believed that youth perspectives deserve a seat at the table — and built the organization to make it happen.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOUNDER CARD  (alternates layout)
───────────────────────────────────────── */

type Founder = (typeof founders)[number];

function FounderPhotoBlock({ founder, flipped }: { founder: Founder; flipped: boolean }) {
  return (
    <div style={{ aspectRatio: "4/5", background: C.light, borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, border: `2px dashed ${C.border}`, position: "relative", overflow: "hidden" }}>
      {/* Corner accents */}
      <div style={{ position: "absolute", top: 0, [flipped ? "right" : "left"]: 0, width: 60, height: 60, borderBottom: `4px solid ${founder.accentColor}`, [flipped ? "borderLeft" : "borderRight"]: `4px solid ${founder.accentColor}`, [flipped ? "borderBottomLeftRadius" : "borderBottomRightRadius"]: 28 }} />
      <div style={{ position: "absolute", bottom: 0, [flipped ? "left" : "right"]: 0, width: 60, height: 60, borderTop: `4px solid ${founder.accentColor}`, [flipped ? "borderRight" : "borderLeft"]: `4px solid ${founder.accentColor}`, [flipped ? "borderTopRightRadius" : "borderTopLeftRadius"]: 28 }} />
      <div style={{ width: 96, height: 96, borderRadius: "50%", background: founder.accentColor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2rem", color: "#fff", opacity: 0.85 }}>
        {founder.initials}
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: C.mid, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Photo Coming Soon
      </p>
    </div>
  );
}

function FounderTextBlock({ founder }: { founder: Founder }) {
  return (
    <div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.light, border: `1.5px solid ${C.border}`, padding: "6px 14px", borderRadius: 50, marginBottom: 20 }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: founder.accentColor, display: "inline-block" }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 800, color: C.mid, letterSpacing: "0.08em", textTransform: "uppercase" }}>{founder.role}</span>
      </div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.navy, marginBottom: 20 }}>
        {founder.name}
      </h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem", lineHeight: 1.82, color: C.mid, fontWeight: 500, marginBottom: 28 }}>{founder.bio}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
        {founder.badges.map((b) => (
          <span key={b} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, padding: "5px 14px", borderRadius: 50, background: `${founder.accentColor}18`, color: founder.accentColor, border: `1.5px solid ${founder.accentColor}30` }}>
            {b}
          </span>
        ))}
      </div>
      <a href={`mailto:${founder.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none", background: founder.accentColor, color: "#fff", boxShadow: `0 6px 20px ${founder.accentColor}30` }}>
        ✉ {founder.email}
      </a>
    </div>
  );
}

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 72, alignItems: "center", padding: "80px 0", borderBottom: `1.5px solid ${C.border}` }}>
      {flipped ? (
        <>
          <FounderTextBlock founder={founder} />
          <FounderPhotoBlock founder={founder} flipped={flipped} />
        </>
      ) : (
        <>
          <FounderPhotoBlock founder={founder} flipped={flipped} />
          <FounderTextBlock founder={founder} />
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   JOIN BANNER
───────────────────────────────────────── */
function JoinBanner() {
  return (
    <section style={{ padding: "80px 60px", background: C.navy, textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(233,113,50,.15) 0%, transparent 70%)` }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 620, margin: "0 auto" }}>
        <Eyebrow color={C.yellow}>Want to join the team?</Eyebrow>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.9rem, 3vw, 2.8rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Become a Chapter Ambassador
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,.6)", lineHeight: 1.75, fontWeight: 500, marginBottom: 32 }}>
          Lead surveys at your school, present findings to your local government, and join a global network of young advocates who are actually changing things.
        </p>
        <a href="mailto:ayra@yhan.org?subject=Ambassador Application" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 32px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", background: C.yellow, color: C.navy }}>
          Apply Now →
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function TeamPage() {
  return (
    <>
      <style>{`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; } body { overflow-x: hidden; }`}</style>
      <ColorBar />
      <Nav activePage="team" />
      <TeamHero />
      <section style={{ padding: "0 60px" }}>
        {founders.map((f, i) => <FounderCard key={f.name} founder={f} index={i} />)}
      </section>
      <JoinBanner />
      <Footer />
    </>
  );
}