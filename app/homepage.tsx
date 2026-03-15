// homepage.tsx
// Only home-specific sections live here.
// Nav, Footer, ColorBar, tokens, Typography → imported from /shared

import { useState } from "react";
import { C } from "./Tokens";
import { Eyebrow, H2 } from "./typography";
import Nav from "./Nav";
import Footer from "./footer";
import ColorBar from "./ColorBar";

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  const stats = [
    { n: "10",   l: "Student\nAmbassadors", color: C.orange },
    { n: "15K+", l: "Students\nReached",    color: C.cyan },
    { n: "7",    l: "Global\nChapters",     color: C.red },
    { n: "28",   l: "Schools\nImpacted",    color: C.yellow },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 60,
        padding: "120px 60px 80px",
        background: C.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gradient blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `
        radial-gradient(ellipse 55% 55% at 0% 0%,   rgba(233,113,50,.08) 0%, transparent 70%),
        radial-gradient(ellipse 50% 50% at 100% 0%,  rgba(242,156,51,.07) 0%, transparent 70%),
        radial-gradient(ellipse 50% 50% at 100% 100%,rgba(230,51,55,.06)  0%, transparent 70%),
        radial-gradient(ellipse 55% 55% at 0% 100%,  rgba(41,169,193,.07) 0%, transparent 70%)
      `}} />

      {/* Left — headline + CTAs */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.light, border: `1.5px solid ${C.border}`, color: C.mid, padding: "7px 16px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ width: 7, height: 7, background: C.cyan, borderRadius: "50%", display: "inline-block" }} />
          Student-Led · Non-Profit
        </div>

        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.6rem, 4.5vw, 4.8rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.navy, marginBottom: 22 }}>
          Your voice can<br />
          <em style={{ fontStyle: "italic", color: C.orange }}>change</em> the rules.
        </h1>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.08rem", lineHeight: 1.78, color: C.mid, fontWeight: 500, marginBottom: 38, maxWidth: 500 }}>
          A global movement using student insight to reshape education systems.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/chapters" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.93rem", textDecoration: "none", background: C.orange, color: "#fff", boxShadow: "0 6px 20px rgba(233,113,50,.28)" }}>
            Become an Ambassador
          </a>
          <a href="#mission" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.93rem", textDecoration: "none", color: C.navy, border: `2px solid ${C.border}`, background: "transparent" }}>
            Our Mission →
          </a>
        </div>
      </div>

      {/* Right — logo + stats */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <div style={{ width: 280, height: 280, display: "flex", alignItems: "center", justifyContent: "center", background: C.white, borderRadius: "50%", boxShadow: "0 20px 70px rgba(35,44,61,.1), 0 4px 20px rgba(35,44,61,.06)", padding: 30 }}>
          <svg viewBox="0 0 120 120" width="180" height="180">
            <circle cx="60" cy="60" r="55" fill={C.light} />
            <path d="M 60 20 L 90 80 L 30 80 Z" fill="none" stroke={C.orange} strokeWidth="4" strokeLinejoin="round" />
            <circle cx="60" cy="60" r="12" fill={C.cyan} opacity="0.8" />
            <circle cx="60" cy="20" r="6" fill={C.orange} />
            <circle cx="90" cy="80" r="6" fill={C.yellow} />
            <circle cx="30" cy="80" r="6" fill={C.red} />
            <text x="60" y="105" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="11" fill={C.navy} letterSpacing="2">YHAN</text>
          </svg>
        </div>

        <div style={{ display: "flex", borderRadius: 18, overflow: "hidden", border: `1.5px solid ${C.border}`, background: C.white, boxShadow: "0 4px 20px rgba(35,44,61,.06)", width: "100%", maxWidth: 380 }}>
          {stats.map((s, i) => (
            <div key={s.n} style={{ padding: "18px 0", borderRight: i < 3 ? `1.5px solid ${C.border}` : "none", textAlign: "center", flex: 1 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.8rem", lineHeight: 1, color: s.color }}>{s.n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: C.mid, marginTop: 4, lineHeight: 1.35, whiteSpace: "pre-line" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MISSION
───────────────────────────────────────── */
function Mission() {
  const cards = [
    { icon: "📋", title: "Survey & Research",    body: "Large-scale surveys designed and distributed by student leaders to capture authentic peer perspectives at scale.",  border: C.orange },
    { icon: "📊", title: "Data Analysis",        body: "We help students turn raw responses into clear, compelling insights that decision-makers can&apos;t ignore.",             border: C.yellow },
    { icon: "🏛️", title: "Policy Advocacy",      body: "Results are presented directly to principals, school boards, and city officials to drive real, lasting change.",    border: C.cyan },
    { icon: "🌐", title: "Global Collaboration", body: "Chapters across cities and countries share knowledge, strategies, and wins with one another.",                       border: C.red },
  ];

  return (
    <section id="mission" style={{ padding: "90px 60px", background: C.offwhite }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <Eyebrow color={C.orange}>Our Mission</Eyebrow>
          <H2>What we do and how we do it.</H2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem", lineHeight: 1.82, color: C.mid, fontWeight: 500, marginTop: 18 }}>
            We connect students with school and community leaders. We work with student leaders to distribute surveys, analyze the data, and present results directly to decision-makers who shape your city&apos;s school policies.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem", lineHeight: 1.82, color: C.mid, fontWeight: 500, marginTop: 12 }}>
            We help schools improve by making sure student voices are heard and genuinely acted upon.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {cards.map((c, i) => (
            <div key={c.title} style={{ background: C.white, borderRadius: 20, padding: "26px 20px", boxShadow: "0 2px 16px rgba(35,44,61,.07)", borderTop: `4px solid ${c.border}`, marginTop: i % 2 === 1 ? 20 : 0 }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "0.95rem", color: C.navy, marginBottom: 7 }}>{c.title}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: C.mid, lineHeight: 1.6, fontWeight: 500 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   IMPACT
───────────────────────────────────────── */
function Impact() {
  const boxes = [
    { n: "10",   l: "Student Ambassadors\nWorldwide", color: C.orange },
    { n: "15K+", l: "Students\nReached",              color: C.yellow },
    { n: "7",    l: "Global Chapters\nActive",        color: C.cyan },
    { n: "28",   l: "Schools\nImpacted",              color: C.red },
  ];

  return (
    <section id="impact" style={{ padding: "90px 60px", background: C.navy, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(circle 500px at 20% 50%, rgba(233,113,50,.12) 0%, transparent 70%), radial-gradient(circle 400px at 80% 50%, rgba(41,169,193,.1) 0%, transparent 70%)` }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 56px" }}>
          <Eyebrow color={C.yellow}>Our Impact</Eyebrow>
          <H2 light>Numbers that tell the story</H2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", marginTop: 16, fontSize: "0.96rem", color: "rgba(255,255,255,.5)", lineHeight: 1.75, fontWeight: 500 }}>
            Every survey distributed, every meeting held, every policy changed: tracked and counted because accountability goes both ways.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {boxes.map((b) => (
            <div key={b.n} style={{ background: "rgba(255,255,255,.06)", border: "1.5px solid rgba(255,255,255,.09)", borderRadius: 20, padding: "44px 28px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "3.2rem", lineHeight: 1, color: b.color }}>{b.n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,.45)", marginTop: 10, lineHeight: 1.5, fontWeight: 600, whiteSpace: "pre-line" }}>{b.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", topic: "", message: "" });

  const handleSubmit = () => {
    window.location.href = `mailto:ayra@yhan.org?subject=${encodeURIComponent(form.topic || "Inquiry")}&body=${encodeURIComponent(`Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`)}`;
  };

  const input: React.CSSProperties = { width: "100%", padding: "12px 15px", border: `1.5px solid ${C.border}`, borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: C.navy, background: C.offwhite, outline: "none", fontWeight: 500, boxSizing: "border-box" };
  const lbl: React.CSSProperties  = { display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mid, marginBottom: 6 };

  return (
    <section id="contact" style={{ padding: "90px 60px", background: C.offwhite }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
        <div>
          <Eyebrow color={C.orange}>Get in Touch</Eyebrow>
          <H2>Let&apos;s connect.</H2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", marginTop: 18, fontSize: "1rem", lineHeight: 1.8, color: C.mid, fontWeight: 500 }}>
            For quick inquiries, updates, chapter information, or to apply as an ambassador — reach out directly to our founder.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 30 }}>
            {[
              { icon: "✉️", label: "Email our founder", val: "ayra@yhan.org" },
              { icon: "🌍", label: "Active in",         val: "7 countries · 28 schools impacted" },
              { icon: "🎓", label: "Open to",           val: "Students, schools & partner organizations" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: C.white, borderRadius: 16, boxShadow: "0 2px 14px rgba(35,44,61,.06)", border: `1.5px solid ${C.border}` }}>
                <div style={{ width: 40, height: 40, background: "#edf7fb", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{l.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.74rem", color: C.mid, fontWeight: 600 }}>{l.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 800, color: C.navy }}>{l.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: C.white, borderRadius: 24, padding: "44px 40px", boxShadow: "0 4px 36px rgba(35,44,61,.09)", border: `1.5px solid ${C.border}` }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.35rem", color: C.navy, marginBottom: 5 }}>Send us a message</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: C.mid, marginBottom: 26, fontWeight: 500 }}>We&apos;ll get back to you as soon as we can.</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            <div><label style={lbl}>First Name</label><input style={input} placeholder="Ayra"    value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} /></div>
            <div><label style={lbl}>Last Name</label> <input style={input} placeholder="Dhillon" value={form.lastName}  onChange={(e) => setForm({ ...form, lastName:  e.target.value })} /></div>
          </div>
          <div style={{ marginBottom: 14 }}><label style={lbl}>Email</label><input style={input} type="email" placeholder="you@school.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
          <div style={{ marginBottom: 14 }}>
            <label style={lbl}>I&apos;m reaching out about</label>
            <select style={{ ...input, appearance: "none" }} value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
              <option value="">Select a topic...</option>
              {["Starting a YHAN Chapter","Ambassador Application","School / Organization Partnership","General Inquiry","Media & Press"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: 14 }}><label style={lbl}>Message</label><textarea style={{ ...input, resize: "vertical" }} rows={4} placeholder="Tell us about yourself..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
          <button onClick={handleSubmit} style={{ width: "100%", padding: 14, background: C.orange, color: "#fff", border: "none", borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.93rem", cursor: "pointer", marginTop: 6 }}>
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE — reads like a table of contents
───────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <style>{`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; } body { overflow-x: hidden; }`}</style>
      <ColorBar />
      <Nav activePage="home" />
      <Hero />
      <Mission />
      <Impact />
      <Contact />
      <Footer />
    </>
  );
}