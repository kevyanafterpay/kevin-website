/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFDF7',
        surface: '#F5F0E8',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        primary: '#1A1A2E',
        muted: '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

