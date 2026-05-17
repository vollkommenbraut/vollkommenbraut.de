/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./fixed-cta.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["GentiumPlusW", "Georgia", "serif"],
        sans: ["europa", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#5ea8b7",
          warm: "#faf8f6",
        },
        "brand-brown": "#8b7355",
        "brand-warm": "#f5f0eb",
        "brand-border": "#c4b4a0",
      },
      animation: {
        "fade-in-up": "fadeInUp 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-reveal": "heroReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-image": "heroImage 1000ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "soft-glow": "softGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroReveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px) scale(0.97)",
            filter: "blur(8px)",
            letterSpacing: "0.05em",
          },
          "60%": { filter: "blur(2px)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
            letterSpacing: "0",
          },
        },
        heroImage: {
          "0%": { opacity: "0", transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        softGlow: {
          "0%, 100%": { textShadow: "0 0 0 transparent" },
          "50%": { textShadow: "0 0 30px rgba(94, 168, 183, 0.15)" },
        },
      },
    },
  },
};

