module.exports = {
  content: [
    "./pages/admin/*.{js,jsx,ts,tsx}",
    "./src/components/floating-button.js",
    "./src/components/AdminLayout.js",
    "./src/components/button.js",
    "./src/components/textarea.js",
    "./pages/faith.js",
    "./pages/weekly/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
