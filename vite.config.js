import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Allow access from external devices
  //   port: 5173, // You can change this if needed
  // }
  server: {
    host: true,
    hmr: true,
    port: 5190
  },
  assetsInclude: ['**/*.glb']

})
