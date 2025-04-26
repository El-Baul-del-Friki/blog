/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss";

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
        h5: ['1.25rem', { lineHeight: '1.6', fontWeight: '500' }],
        h6: ['1.125rem', { lineHeight: '1.6', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.75' }],
        small: ['0.875rem', { lineHeight: '1.6' }]
      }
    },
  },
  plugins: [],
};