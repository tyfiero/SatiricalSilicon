module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "310px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        p:  {
    '50': '#f7fcfe', 
    '100': '#eef9fe', 
    '200': '#d5effc', 
    '300': '#bce5fb', 
    '400': '#89d2f7', 
    '500': '#57bef4', 
    '600': '#4eabdc', 
    '700': '#418fb7', 
    '800': '#347292', 
    '900': '#2b5d78'
},
s: {
  '50': '#fffef7', 
  '100': '#fffcef', 
  '200': '#fef9d8', 
  '300': '#fef5c0', 
  '400': '#fded90', 
  '500': '#fce561', 
  '600': '#e3ce57', 
  '700': '#bdac49', 
  '800': '#97893a', 
  '900': '#7b7030'
}
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "tracking-in-expand":
          "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
      },
      keyframes: {
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
