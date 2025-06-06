import path from 'path';
import type { Configuration } from 'webpack';

import { rules } from './webpack.rules.ts';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const mainConfig: Configuration = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: {
        index: './src/main/index.ts',
    },
    // Put your normal webpack config below here
    module: {
        rules,
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.node'],
        alias: {
            '@': path.join(__dirname, '../src'),
            '@main': path.join(__dirname, '../src/main'),
            '@native': path.join(__dirname, '../src/main/native_modules'),
            '@shared': path.join(__dirname, '../src/shared'),
        },
    },
    output: {
        filename: '[name].js',
    },
    externals: ['sharp'],
};
