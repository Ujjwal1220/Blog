// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/register": {
//         target: "http://52.77.233.203:8000", // Your backend URL for register
//         changeOrigin: true,
//         secure: false, // Set to false if you're using HTTP instead of HTTPS
//         rewrite: (path) => path.replace(/^\/register/, "/register"), // Proxy rewrite rule
//       },
//       "/login": {
//         target: "http://52.77.233.203:8000", // Your backend URL for login
//         changeOrigin: true,
//         secure: false, // Set to false if you're using HTTP
//         rewrite: (path) => path.replace(/^\/login/, "/login"), // Proxy rewrite rule
//       },
//       "/profile": {
//         target: "http://52.77.233.203:8000", // Your backend URL for profile
//         changeOrigin: true,
//         secure: false, // Set to false if you're using HTTP
//         rewrite: (path) => path.replace(/^\/profile/, "/profile"), // Proxy rewrite rule
//       },
//     },
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//        "/register": {
//         target: "http://52.77.233.203:8000", // Your backend URL for register
//         changeOrigin: true,
//         secure: false, // Set to false if you're using HTTP instead of HTTPS
//         rewrite: (path) => path.replace(/^\/register/, "/register"), // Proxy rewrite rule
//       },
//       "/login": {
//         target: "http://52.77.233.203:8000", // Your backend URL for login
//         changeOrigin: true,
//         secure: false, // Set to false if you're using HTTP
//         rewrite: (path) => path.replace(/^\/login/, "/login"), // Proxy rewrite rule
// //       },
//       "/profile": {
//         target: "http://52.77.233.203:8000", // Your backend URL for profile
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/profile/, "/profile"),
//       },
//       "/post/1/comment": {
//         target: "http://52.77.233.203:8000", // Your backend URL for comment API
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/post\/1\/comment/, "/post/1/comment"),
//       },
//       "/post/like/1": {
//         target: "http://52.77.233.203:8000", // Your backend URL for like API
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/post\/like\/1/, "/post/like/1"),
//       },
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/register": {
        target: "http://52.77.233.203:8000", // Your backend URL for register
        changeOrigin: true,
        secure: false, // Set to false if you're using HTTP instead of HTTPS
        rewrite: (path) => path.replace(/^\/register/, "/register"), // Proxy rewrite rule
      },
      "/login": {
        target: "http://52.77.233.203:8000", // Your backend URL for login
        changeOrigin: true,
        secure: false, // Set to false if you're using HTTP
        rewrite: (path) => path.replace(/^\/login/, "/login"), // Proxy rewrite rule
      },
      "/profile": {
        target: "http://52.77.233.203:8000", // Your backend URL for profile
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/profile/, "/profile"),
      },

      "/post": {
        target: "http://52.77.233.203:8000", // Your backend URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/post/, "/post"),
      },
    },
  },
});
