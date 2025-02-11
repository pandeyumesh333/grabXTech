import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, var(--tw-gradient-stops))",
      },

      gradientColorStops: {
        primary: "#4F46E5", // indigo-600
        secondary: "#3B82F6", // blue-500
      },
    },
  },
  plugins: [],
} satisfies Config;
