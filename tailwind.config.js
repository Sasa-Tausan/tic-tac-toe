/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkNavy: "hsl(202, 32%, 15%)",
      semiDarkNavy: "hsl(199, 35%, 19%)",
      silver: "hsl(198, 23%, 72%)",
      silverHover: "hsl(197, 33%, 89%)",
      lightBlue: "hsl(178, 60%, 48%)",
      lightBlueHover: "hsl(178, 75%, 65%)",
      lightYellow: "hsl(39, 88%, 58%)",
      lightYellowHover: "hsl(39, 100%, 69%)",
    },
    fontFamily: {
      outfit: "Outfit, sans-serif",
    },

    boxShadow: {
      innerCustomYellow: "0px -8px 0px 0px rgba(204,139,14,1) inset",
      innerCustomBlue: "2px -12px 0px -4px rgba(18,130,124,1) inset;",
      innerCustomElement: " 0px -8px 0px 0px rgba(16,33,42,1) inset;",
      innerCustomSilver: "2px -8px 0px -2px rgba(107,137,151,1) inset;",
      none: "none",
    },

    fontSize: {
      headingLarge: ["2.5rem", { fontWeight: "bold", letterSpacing: "2.5px" }],
      headingMedium: ["1.5rem", { fontWeight: "bold", letterSpacing: "1.5px" }],
      headingSmall: ["1.25rem", { fontWeight: "bold", letterSpacing: "1.25px" }],
      headingXSmall: ["1rem", { fontWeight: "bold", letterSpacing: "1px" }],
      bodyText: ["0.875rem", { fontWeight: "medium", letterSpacing: "0.8px" }],
    },
    extend: {},
  },
  plugins: [],
};
