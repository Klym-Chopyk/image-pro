/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e5a2ef",

          secondary: "#6bff97",

          accent: "#b55536",

          neutral: "#251f2d",

          "base-100": "#ffffff",

          info: "#3e8cd0",

          success: "#21c068",

          warning: "#e89230",

          error: "#f46552",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
