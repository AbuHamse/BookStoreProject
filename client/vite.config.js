import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'


const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      '@' : path.resolve(_dirname,'./src')
    }
  },
  server: {
    host: '127.0.0.1', // force IPv4
    port: 3000,         // choose any port you like
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3222',
        changeOrigin: true,
        // This allows you to just use axios.post('/api/login') 
        // instead of the full localhost path
      }
    }    // fail if port is taken
  },
  
})