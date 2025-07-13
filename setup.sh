# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Overwrite tailwind.config.js
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Create styles directory and global SCSS file
mkdir -p styles
echo '@tailwind base;
@tailwind components;
@tailwind utilities;' > styles/globals.scss

# Install GSAP, Framer Motion, SCSS
npm install gsap framer-motion sass

echo "✅ Installed Tailwind CSS, GSAP, Framer Motion, SCSS"

echo "⚠️  Make sure to import your styles in app/layout.tsx or app/layout.js:"
echo "import '../styles/globals.scss';"
