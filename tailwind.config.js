/* eslint-disable global-require */
module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Inter", ...fontFamily.sans],
      // },
      typography: (theme) => ({
        // DEFAULT: {
        //   css: {
        //     color: theme("colors.gray.700"),
        //     a: {
        //       color: theme("colors.blue.900"),
        //       "&:hover": {
        //         color: theme("colors.blue.700"),
        //       },
        //       code: { color: theme("colors.blue.400") },
        //     },
        //     "h2,h3,h4": {
        //       // 'scroll-margin-top': spacing[32]
        //     },
        //     code: { color: theme("colors.pink.500") },
        //     "blockquote p:first-of-type::before": false,
        //     "blockquote p:last-of-type::after": false,
        //   },
        // },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: { color: theme("colors.gray.100") },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};

/*
Background: bg-white dark:bg-black
Text main: text-black dark:text-gray-200
Accent text text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200"
Accet text background:  bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 dark:text-indigo-600
*/
