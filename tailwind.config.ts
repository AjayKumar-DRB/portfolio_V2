import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans: 'var(--font-sans)',
        serif: 'var(--font-cal)',
      },
      animation:{
        "ping-large": "ping-large 0.75s ease-in-out infinite",
        'move-left': "move-left 1s linear infinite",
        'move-right': "move-right 1s linear infinite",
        'blink': "blink 1s step-end infinite",
        'wave-hand': "wave 1s infinite",
        'hang': "hang 0.75s infinite",
        'side-bounce': 'side-bounce 1s infinite',
      },
      keyframes:{
        "ping-large":{
          "75%,100%": { 
            transform: "scale(2)",
            opacity: "0",
          },
        },
        'move-left':{
          '0%':{
            transform: 'translateX(0)'
          },
          '100%':{
            transform: 'translateX(-50%)'
          }
        },
        'move-right':{
          '0%':{
            transform: 'translateX(-50%)'
          },
          '100%':{
            transform: 'translateX(0%)'
          }
        },
        'blink':{
          '50%':{
            opacity: '0'
          }
        },
        'wave':{
          '0%, 20%, 50%, 80%, 100%':{
            transform: 'rotate(20deg)'
          },
          '40%':{
            transform: 'rotate(40deg)'
          },
          '60%':{
            transform: 'rotate(0deg)'
          }
        },
        'hang':{
          '0%, 100%':{
            transform: 'rotate(180deg)'
          },
          '40%':{
            transform: 'rotate(220deg)'
          },
          '80%':{
            transform: 'rotate(140deg)'
          }
        },
        'side-bounce':{
          '0%, 100%':{
            transform: 'translate(-25%, 25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%':{
              transform: 'none',
              animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
