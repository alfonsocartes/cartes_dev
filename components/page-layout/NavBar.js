import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => (
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
      <Link href="/">Home</Link>
    </div>
    <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
      <Link href="portfolio">Portfolio</Link>
    </div>
    {/* <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
      <Link href="/">Blog</Link>
    </div> */}
    <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
      <Link href="about">About</Link>
    </div>
    <div className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
      <Link href="contact">Contact</Link>
    </div>
    <DarkModeToggle />
  </nav>
);

export default NavBar;
