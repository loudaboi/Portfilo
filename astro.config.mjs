import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const site = process.env.SITE_URL?.trim();
const integrations = [];

if (site) {
  integrations.push(
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/+$/, "") || "/";
        return pathname !== "/confirmed" && pathname !== "/404";
      },
    }),
  );
}

export default defineConfig({
  site: site || undefined,
  integrations,
});
