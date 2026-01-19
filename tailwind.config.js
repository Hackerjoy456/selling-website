/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00eaff',
          dim: 'rgba(0, 234, 255, 0.1)',
        },
        secondary: {
          DEFAULT: '#8a3dff',
          dim: 'rgba(138, 61, 255, 0.1)',
        },
        accent: {
          DEFAULT: '#ff4fd8',
          dim: 'rgba(255, 79, 216, 0.1)',
        },
        dark: {
          DEFAULT: '#0c1025',
          lighter: '#1a1f35',
          darker: '#02030a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #00eaff, #8a3dff)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // TV and large displays
        '4xl': '2560px', // Ultra-wide and 4K displays
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
