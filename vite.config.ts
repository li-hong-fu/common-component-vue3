import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin(), StylelintPlugin({ fix: true })],
    server: {
        host: 'localhost', // 主机地址
        port: 9999, // 端口
        open: true, // 是否自动打开浏览器
    },
});
