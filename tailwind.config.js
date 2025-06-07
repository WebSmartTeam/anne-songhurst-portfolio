/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dutch Masters inspired palette
        primary: {
          dark: '#2C2B28',
          light: '#F8F6F0',
        },
        accent: {
          gold: '#B8860B',
          brown: '#8B4513',
          burgundy: '#722F37',
        },
        neutral: {
          cream: '#FDF8F3',
          warm: '#F5F5F5',
        },
        text: {
          dark: '#333333',
          light: '#666666',
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