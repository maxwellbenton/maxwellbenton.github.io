import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as childProcess from 'child_process';

const commit = childProcess
    .execSync('git rev-parse --short HEAD')
    .toString();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __COMMIT__: JSON.stringify(commit),
  },
  base: "/",
  plugins: [react()],
  server:{
    hmr: {
      clientPort: 80,
    },
  }
})
