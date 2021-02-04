import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => (
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/">
      <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Home
      </a>
    </Link>
    {/* <Link href="/solutions">
      <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Solutions
      </a>
    </Link> */}
    <Link href="/portfolio">
      <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Portfolio
      </a>
    </Link>
    <Link href="/about">
      <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        About
      </a>
    </Link>
    {/* <Link href="/contact">
      <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Contact
      </a>
    </Link> */}
    <Link href="/blog">
      <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
        Blog
      </a>
    </Link>
    <DarkModeToggle />
  </nav>
);

export default NavBar;
