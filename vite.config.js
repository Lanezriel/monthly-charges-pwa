import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig(() => ({
	plugins: [
    sveltekit(),
    SvelteKitPWA({
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        "id": "monthly-charges-pwa",
        "name": "Monthly Charges PWA",
        "short_name": "Monthly Charges",
        "scope": "./",
        "start_url": "./",
        "display": "standalone",
        "theme_color": "#ffffff",
        "background_color": "#000000",
        "icons": [
            {
                "sizes": "192x192",
                "src": "icon192.png",
                "type": "image/png"
            },
            {
                "sizes": "512x512",
                "src": "icon512.png",
                "type": "image/png"
            }
        ]
      }
    }),
  ]
}));
