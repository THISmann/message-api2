import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    //add test to vite config
    test: {
        globals:true, 
    },
});