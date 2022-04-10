import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginMockjsServer from 'vite-plugin-mockjs-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginMockjsServer({ mockDir: "api" })
  ]
})
