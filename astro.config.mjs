import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jadeduong.netlify.app',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
