import { useState, useEffect } from "react";

export const DarkModeToggle = () => {
  const [themeState, setThemeState] = useState("light");

  function setTheme(theme) {
    if (theme === "light") {
      setThemeState("light");
      document.querySelector("html").classList.remove("dark");
    } else {
      setThemeState("dark");
      document.querySelector("html").classList.add("dark");
    }
  }

  function setInitialTheme() {
    if (typeof window !== "undefined") {
      if ("theme" in localStorage) {
        setTheme(localStorage.theme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    }
  }

  // After mounting, we have access to the theme
  useEffect(() => {
    setInitialTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleDarkMode() {
    if (themeState === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="m-auto bg-opacity-40 border-white border-opacity-20 border rounded-lg shadow-lg bg-gray-300 dark:bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-300 text-gray-900  hover:text-gray-300 dark:text-gray-900 dark:hover:text-yellow-500 pl-2 h-8 w-8 mr-4"
      onClick={toggleDarkMode}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="h-4 w-4"
      >
        {themeState === "dark" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </button>
  );
};
