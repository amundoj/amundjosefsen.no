import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/globals.css'
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0f0f23',
          neon: '#00f5ff',
          glow: '#0ea5e9'
        }
      }
    },
  },
  plugins: [],
}
export default config