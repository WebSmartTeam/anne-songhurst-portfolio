/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern elegant palette inspired by galleries
        primary: {
          dark: '#6A6A58',
          medium: '#2D2E36',
          light: '#F5F3F0',
        },
        accent: {
          gold: '#D4AF37',
          copper: '#B87333',
          burgundy: '#800020',
          bronze: '#CD7F32',
        },
        neutral: {
          cream: '#F8F6F2',
          warm: '#F0ECE8',
          sand: '#E6E0D8',
          stone: '#D8D2C8',
          charcoal: '#36454F',
        },
        text: {
          dark: '#2C2C2C',
          light: '#666666',
          muted: '#999999',
        },
        background: {
          main: '#babaa9',
          gallery: '#babaa9',
          section: '#babaa9',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'Times New Roman', 'serif'],
        'body': ['Source Sans Pro', 'Helvetica Neue', 'sans-serif'],
        'title': ['Crimson Text', 'Georgia', 'serif'],
      },
      fontSize: {
        'artist-name': '3rem',
        'section-header': '2rem',
        'artwork-title': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}