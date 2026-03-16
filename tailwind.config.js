/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sw: {
          orange:  "#FC8019",
          orangeD: "#E67211",
          red:     "#E23744",
          redD:    "#C1303C",
          dark:    "#1C1C1C",
          gray:    "#686B78",
          light:   "#F2F2F2",
          white:   "#FFFFFF",
          green:   "#48C479",
          yellow:  "#FFB905",
          card:    "#FAFAFA",
        }
      },
      fontFamily: {
        display: ["'Nunito'", "sans-serif"],
        body:    ["'Nunito Sans'", "sans-serif"],
      },
      boxShadow: {
        card:  "0 2px 8px rgba(0,0,0,0.10)",
        hover: "0 4px 20px rgba(0,0,0,0.15)",
        nav:   "0 2px 12px rgba(0,0,0,0.08)",
      },
      animation: {
        "slide-up":   "slideUp 0.5s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        wiggle:       "wiggle 0.3s ease",
        shimmer:      "shimmer 1.5s infinite linear",
      },
      keyframes: {
        slideUp:   { "0%": { opacity:0, transform:"translateY(24px)" }, "100%": { opacity:1, transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:0 }, "100%": { opacity:1 } },
        pulseSoft: { "0%,100%": { opacity:1 }, "50%": { opacity:0.6 } },
        wiggle:    { "0%,100%": { transform:"rotate(0)" }, "25%": { transform:"rotate(-6deg)" }, "75%": { transform:"rotate(6deg)" } },
        shimmer:   { "0%": { backgroundPosition:"-400px 0" }, "100%": { backgroundPosition:"400px 0" } },
      },
    },
  },
  plugins: [],
}
