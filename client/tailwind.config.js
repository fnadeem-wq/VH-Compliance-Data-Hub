/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "var(--color-primary-light)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        navy: "var(--color-navy)",
        charcoal: "var(--color-charcoal)",
        "bg-subtle": "var(--color-bg-subtle)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      borderRadius: {
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
