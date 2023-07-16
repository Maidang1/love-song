/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        'high-light': 'rgb(3, 105, 161)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
