import fs from "fs-extra";
import path from "path";
import { defineConfig } from "vite";
export default {
  base: "./",
  plugins: [
    {
      name: "rename-index-html",
      closeBundle() {
        const oldPath = path.resolve(__dirname, "dist", "index.html");
        const newPath = path.resolve(__dirname, "dist", "main.html");

        fs.renameSync(oldPath, newPath);
      },
    },
  ],
};
