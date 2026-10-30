/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090a0f',
        surface: {
          DEFAULT: '#0f1118',
          subtle: '#141722',
          elevated: '#1a1e2d',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.16)',
        },
        accent: {
          DEFAULT: '#38bdf8', // Cyan / Sky Blue
          hover: '#0ea5e9',
          muted: 'rgba(56, 189, 248, 0.15)',
          glow: 'rgba(56, 189, 248, 0.25)',
        },
        typography: {
          primary: '#f3f4f6',   // zinc-100
          secondary: '#9ca3af', // zinc-400
          muted: '#6b7280',     // zinc-500
          faint: '#4b5563',     // zinc-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
