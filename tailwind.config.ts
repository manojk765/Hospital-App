import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Cinzel'] , 
        title:['Noto Serif'],
        description:['Noto Sans'] ,
        contact:['Raleway'],
        nav:['Montserrat'],
        info:['Poppins']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': { 'max': '500px' }, 
      },
    },  
  },
  plugins: [], 
};
export default config;
 