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
        shapes: "rgb(var(--color-shapes))",
        offwhite: 'rgb(var(--color-offwhite))',
        offblack: 'rgb(var(--color-offblack))',
      },
      spacing: {
        '1/5': '20%',
        '1/6': '16.666667%',
        '1/8': '12.5%',
        '1/10': '10%',
      },
      lineClamp: {
        12: '12',
        15: '15',
        20: '20',
      },
      padding: {
        '1/11': '9.090909%',
        '1/14': '7.142857%',
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
    },
  },
  plugins: [],
};
export default config;
