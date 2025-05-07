// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import markdoc from '@astrojs/markdoc';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), markdoc(), partytown(), sitemap(), mdx(), compress({
    Image: true
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});