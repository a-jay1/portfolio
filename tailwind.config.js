/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    colors: {
      transparent: 'transparent',
      txt: {
        light: '#000',
        dark: '#fff'
      },
      bodyBg: {
        light: {
          100: '#fff',
        },
        dark: {
          100: '#000',
        }
      },
      background: {
        light: {
          100: '#fff',
        },
        dark: {
          100: '#232732'
        }
      },
      violet: {
        light: {
          100: '#7733FF'
        },
        dark: {
          100: '#7733FF'
        }
      },
      red: {
        light: {
          100: '#D32D20',
        },
        dark: {
          100: '#D32D20'
        }
      },
      black : {
        light: {
          100: '#000',
          200: '#24272C'
        },
        dark: {
          100: '#000',
          200: '#24272C'
        }
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
};
