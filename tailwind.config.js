module.exports = {
  content: ["./pages/admin/*.{js,jsx,ts,tsx}","./src/components/floating-button.js", "./src/components/AdminLayout.js", "./src/components/button.js", "./src/components/textarea.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
