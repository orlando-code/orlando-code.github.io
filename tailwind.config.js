/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            '[class~="lead"]': {
              color: '#4b5563',
            },
            strong: {
              color: '#111827',
            },
            'ol > li::marker': {
              color: '#6b7280',
            },
            'ul > li::marker': {
              color: '#6b7280',
            },
            hr: {
              borderColor: '#e5e7eb',
            },
            blockquote: {
              color: '#374151',
              borderLeftColor: '#e5e7eb',
            },
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            'figure figcaption': {
              color: '#6b7280',
            },
            code: {
              color: '#111827',
            },
            'a code': {
              color: '#111827',
            },
            pre: {
              color: '#e5e7eb',
              backgroundColor: '#1f2937',
            },
            thead: {
              color: '#111827',
              borderBottomColor: '#d1d5db',
            },
            'tbody tr': {
              borderBottomColor: '#e5e7eb',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 