import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // force IPv4
    port: 3000,         // choose any port you like
    strictPort: true    // fail if port is taken
  }
})