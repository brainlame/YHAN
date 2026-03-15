// shared/ColorBar.tsx
// The 4-color stripe that sits at the very top of every page.

import { C } from "./Tokens";

export default function ColorBar() {
  return (
    <div style={{ height: 5, display: "flex" }}>
      {[C.orange, C.yellow, C.red, C.cyan].map((c) => (
        <div key={c} style={{ flex: 1, background: c }} />
      ))}
    </div>
  );
}