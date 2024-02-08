/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "var(--primary-black)",
        "primary-white": "var(--primary-white)",
        "primary-red": "var(--primary-red)",
        "grey-50": "var(--grey-50)",
        "grey-100": "var(--grey-100)",
        "grey-200": "var(--grey-200)",
        "grey-300": "var(--grey-300)",
        "grey-400": "var(--grey-400)",
        "grey-500": "var(--grey-500)",
        "grey-600": "var(--grey-600)",
        "grey-700": "var(--grey-700)",
        "grey-800": "var(--grey-800)",
        "grey-900": "var(--grey-900)",
      },
    },
  },
  plugins: [],

  mode: "jit",
};
