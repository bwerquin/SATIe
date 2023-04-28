import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

// load variables from .env (all of them!) into process.env:
dotenv.config();

export default () => {
  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
  });
};
