import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";



// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: import.meta.env.PROD ? "https://mellifluous-tartufo-d93029.netlify.app" : "http://localhost:4321"
});
