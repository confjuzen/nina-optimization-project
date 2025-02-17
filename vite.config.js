import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: "./",
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
      safelist: {
        standard: [
          /selectize-.*/, 
          'item-column', 'mb-4', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-4', 'col-xl-4'
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`,
      },
    },
  },
});
