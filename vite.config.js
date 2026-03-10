import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
    plugins: [glsl()],
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'esbuild'
    },
    server: {
        port: 5173,
        strictPort: false
    }
})
