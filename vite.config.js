import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'arco_admin_template/dist',
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
})
