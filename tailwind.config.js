import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4efff",
          100: "#eadcff",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6"
        },
        ink: "#101828"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        glow: "0 18px 42px rgba(124, 58, 237, 0.26)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #5b2cff 0%, #8b22f7 55%, #b313ff 100%)",
        "soft-radial": "radial-gradient(circle at top right, rgba(124,58,237,0.14), transparent 42%), radial-gradient(circle at bottom left, rgba(59,130,246,0.10), transparent 34%)"
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"]
  }
};
