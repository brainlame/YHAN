// shared/typography.tsx
// Reusable type primitives used across every page.

import React from "react";
import { C } from "./Tokens";

export const Eyebrow = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => (
  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 800,
      fontSize: "0.72rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      marginBottom: 12,
    }}
  >
    {children}
  </p>
);

export const H2 = ({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => (
  <h2
    style={{
      fontFamily: "'Fraunces', serif",
      fontWeight: 900,
      fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: light ? "#fff" : C.navy,
    }}
  >
    {children}
  </h2>
);