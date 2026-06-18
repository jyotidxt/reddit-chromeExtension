import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
   vite: () => ({
    plugins: [tailwindcss()], // <-- Tailwind plugin yahan add hoga
  }),
  manifest:({ browser, manifestVersion, mode, command}) =>{
    return{
      manifest_version:2,
      name:"WXT Example",
      description:"WXT",
      version:"1.0.0",
      permisiion:["storage", "tabs"],
    }
  }
});
