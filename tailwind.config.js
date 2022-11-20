
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      'teXgyre':['TeXGyreAdventor'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Francisco"'],
      'Francisco':['SF Pro Display']
    }
  },
  plugins: [],
}
