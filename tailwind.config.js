module.exports = {
  content: [
    "./pages/admin/*.{js,jsx,ts,tsx}",
    "./pages/community/*.{js,jsx,ts,tsx}",
    "./pages/srinsta/*.{js,jsx,ts,tsx}",
    "./pages/campvideo/*.{js,jsx,ts,tsx}",
    "./pages/info.js",
    "./src/components/floating-button.js",
    "./src/components/AdminLayout.js",
    "./src/components/EventLayout.js",
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
