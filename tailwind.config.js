/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fbf5f2',
          100: '#f7ebe5',
          200: '#edd8ce',
          500: '#c65d3b', // Primary Deep Terracotta
          600: '#b24f30',
          700: '#943e24',
          800: '#7a3420',
          900: '#642d1e',
        },
        sand: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4e8d5', // Sand
          300: '#ebd7b8',
          400: '#dfbe92',
          500: '#d4a24c', // Muted Gold
        },
        indigo: {
          900: '#1a2436',
          950: '#24324a', // Deep Indigo
          800: '#2c3c58',
          700: '#394d6f',
        },
        cream: {
          50: '#ffffff',
          100: '#fffdfa',
          200: '#fff9f0', // Warm Cream Background
          300: '#fcf2e3',
          400: '#f7e7ce',
        },
        gold: {
          400: '#e5b65f',
          500: '#d4a24c', // Muted Gold
          600: '#b88636',
        },
        forest: {
          500: '#3f6654', // Forest Green
          600: '#325243',
          700: '#274034',
        },
        charcoal: {
          800: '#2d2d2d',
          900: '#202020', // Charcoal
          950: '#141414',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -1px rgba(198, 93, 59, 0.08), 0 1px 3px -1px rgba(36, 50, 74, 0.05)',
        'warm-md': '0 8px 24px -4px rgba(198, 93, 59, 0.12), 0 2px 6px -2px rgba(36, 50, 74, 0.06)',
        'warm-lg': '0 16px 36px -6px rgba(198, 93, 59, 0.16), 0 4px 12px -3px rgba(36, 50, 74, 0.08)',
      }
    },
  },
  plugins: [],
}
