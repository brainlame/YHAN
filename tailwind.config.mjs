/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        yhan: {
          orange: "#E97132",
          yellow: "#F29C33",
          red: "#E63337",
          cyan: "#29A9C1",
          navy: "#232C3D",
          hyphen: "#D97E43",
          white: "#ffffff",
          offwhite: "#f7f9fc",
          light: "#eef3f7",
          mid: "#5a6478",
          border: "#e0e7ef",
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
