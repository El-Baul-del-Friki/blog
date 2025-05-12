// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import markdoc from '@astrojs/markdoc';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

//import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    markdoc(),
    partytown(),
    sitemap(),
    mdx(),
    // Comenta compress antes de hacer un deploy, solo usalo para comprimir las imagenes
    /*compress({
      CSS: false,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: false,
      SVG: false,
    }),*/
  ],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});