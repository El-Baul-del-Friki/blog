// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import markdoc from '@astrojs/markdoc';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://elbauldelfriki.com',
  output: 'server',
  integrations: [svelte(), markdoc(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap(), mdx(), db()],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    session: true, // Agrega esta línea
  },
});