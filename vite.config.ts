import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const config = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    }
  }


}

export default defineConfig(config)
