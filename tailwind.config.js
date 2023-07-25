/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "text-textdefault": "#222",
        "moccasin": "#ffedc1",
        "lightcyan": "#caf8ff",
        "black": "#000",
        "interactive-interactiveonedefault": "#d33852",
        "border-bordersubtle": "#ebebeb",
        "text-textplaceholder": "#b0b0b0",
        "interactive-interactiveonehover": "#af273e",
        "neutral-white": "#fff",
        "yellow-70": "#ffcc66",
        "pink-70": "#ffaec0",
        "violet-80": "#c5c5fc",
        "blue-80": "#a7f0f9",
        "teal-40": "#23856d",
        "gray": "#2b2b2b",
        "whitesmoke": "#ebebeb",
        "gainsboro": "#dbdbdb",
        "surface-white-surfaceselected": "#ebfcff",
        "icons-icon-icondisabled": "#b0b0b0",
        "text-textsubtle": "#717171",
      },
      "fontFamily": {
        "raleway": "'Raleway'",
        "body-body-2": "'Raleway'",
        "subtitle-subtitle-3": "'Raleway'",
        "label-label-2": "'Raleway'",
      },
      "borderRadius": {
        "4xs": "9px"
      }
    },
    "fontSize": {
      "base": "1rem",
      "sm": "0.88rem",
      "xl": "1.25rem",
    }
  },
  "corePlugins": {
    "preflight": false
  }
}