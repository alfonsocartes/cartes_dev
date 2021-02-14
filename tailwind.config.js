module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

/*
Background: bg-white dark:bg-black
Text main: text-black dark:text-gray-200
Accent text text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200"
Accet text background:  bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 dark:text-indigo-600
*/
