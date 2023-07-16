import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodeLoaderPlugin } from "@vavite/node-loader/plugin";

export default defineConfig(({ mode }) => {
    let plugins = [nodeLoaderPlugin(), sveltekit()]

    return {
        // ... your code ...
        plugins
    };
});