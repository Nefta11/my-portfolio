import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest'], // Agrega aquí el paquete CSS problemático
    },
  },
});
