import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(var(--color-acc1))",
          2: "rgb(var(--color-acc2))",
          3: "rgb(var(--color-acc3))",
          4: "rgb(var(--color-acc4))",
        },
        bgr: "rgb(var(--color-bgr))",
        content: "rgb(var(--color-content))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
      },
      scale: {
        '400': '4',
      },
      boxShadow: {
        'custom': '0 10px 15px rgba(var(--color-content), 0.2), 0 4px 6px rgba(var(--color-content), 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;
