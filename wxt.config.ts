import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';
// See https://wxt.dev/api/config.html
export default defineConfig({
// extensionApi: "chrome",
  modules: ['@wxt-dev/module-react'],
   vite: () => ({
    plugins: [tailwindcss()], 
  }),
  manifest:({ browser, manifestVersion, mode, command}) =>{
    return{
      manifest_version:3,
      name:"Reddit AI Assistant",
      description:"AI-powered Reddit workflow assistant",
      version:"1.0.0",
      permisiions:["storage"],
    }

  }
});
