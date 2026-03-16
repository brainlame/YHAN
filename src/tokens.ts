// shared/tokens.ts
// Single source of truth for all colors.
// Import this everywhere instead of redefining C = {} per file.

export const C = {
  orange:   "#E97132",
  yellow:   "#F29C33",
  red:      "#E63337",
  cyan:     "#29A9C1",
  navy:     "#232C3D",
  hyphen:   "#D97E43",
  white:    "#ffffff",
  offwhite: "#f7f9fc",
  light:    "#eef3f7",
  mid:      "#5a6478",
  border:   "#e0e7ef",
} as const;