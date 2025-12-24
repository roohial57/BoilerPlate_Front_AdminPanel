import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import posthtml from 'posthtml'
import removeAttrs from 'posthtml-remove-attributes'


export default defineConfig({
  plugins: [vue(),
    {
      name: 'remove-test-ids',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        return posthtml([
          removeAttrs({ attributes: ['data-testid', 'data-test'] })
        ]).process(html).then(res => res.html)
      }
    }],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
