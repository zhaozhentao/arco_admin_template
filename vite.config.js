import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: 'arco_admin/dist',
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [vue()]
})
