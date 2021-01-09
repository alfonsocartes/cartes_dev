import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }

  function toggleDarkMode() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
    }
    console.log("Theme selected: ", theme);
  }

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setTheme(localStorage.theme);
    }
  }, []);

  return (
    <header className="frosted bg-opacity-40 border-white border-opacity-20 border-b shadow-lg bg-gray-100 dark:bg-white-800 sticky top-0 z-10 mb-4">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="text-3xl p-10 font-bold">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="m-2 hover:text-gray-900">
            <Link href="/">Home</Link>
          </div>
          <div className="m-2 hover:text-gray-900">
            <Link href="/">Portfolio</Link>
          </div>
          <div className="m-2 hover:text-gray-900">
            <Link href="/">Blog</Link>
          </div>
          <div className="m-2 hover:text-gray-900">
            <Link href="/">About</Link>
          </div>
          <div className="m-2 hover:text-gray-900">
            <Link href="/">Contact</Link>
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="frosted bg-opacity-40 border-white border-opacity-20 border rounded-lg shadow-lg bg-gray-300 dark:bg-white-800 pl-2 h-8 w-8 m-4"
            onClick={toggleDarkMode}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
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
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
