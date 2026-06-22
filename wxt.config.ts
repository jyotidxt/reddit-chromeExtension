import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    manifest_version: 3,
    name: "Reddit AI Assistant",
    description: "AI-powered Reddit workflow assistant",
    version: "1.0.0",
    permissions: [ 
      "storage",
      "activeTab",
      "scripting",
      "contextMenus", 
      "tabs"
    ],
  },
});