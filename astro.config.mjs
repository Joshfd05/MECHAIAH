import { defineConfig } from 'astro/config';

// Public origin for canonical URLs, Open Graph, JSON-LD, and the
// contact form redirect. Change this when the studio moves to a custom domain.
const site = 'https://mechaiah.netlify.app';

export default defineConfig({
  site,
  devToolbar: { enabled: false },
});
