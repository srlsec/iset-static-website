/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        nav: '1140px',
      },
      colors: {
        navy: '#0D1B3E',
        sky: '#3B82C4',
        cream: '#F5F5F5',
        text: '#1A1A2E',
        muted: '#6B7280',
        border: '#E5E0D8',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        DEFAULT: '6px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(13,27,62,.10)',
        'card-hover': '0 12px 36px rgba(13,27,62,.14)',
        nav: '0 2px 12px rgba(0,0,0,.06)',
        fab: '0 4px 20px rgba(59,130,196,.5)',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
  plugins: [],
};
