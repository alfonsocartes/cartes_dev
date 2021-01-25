import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => (
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/">
      <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Home
      </div>
    </Link>
    {/* <Link href="/solutions">
      <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Solutions
      </div>
    </Link> */}
    <Link href="portfolio">
      <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Portfolio
      </div>
    </Link>
    <Link href="/about">
      <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        About
      </div>
    </Link>
    <Link href="/contact">
      <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Contact
      </div>
    </Link>
    {/* <Link href="/blog">
      <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Blog
      </div>
    </Link> */}
    <DarkModeToggle />
  </nav>
);

export default NavBar;
