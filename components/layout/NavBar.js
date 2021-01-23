import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => (
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <div className=" hover:frosted hover:bg-opacity-40 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600  py-2 px-3">
      <Link href="/">Home</Link>
    </div>
    <div className=" hover:frosted hover:bg-opacity-40 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600  py-2 px-3">
      <Link href="portfolio">Portfolio</Link>
    </div>
    {/* <div className=" hover:frosted hover:bg-opacity-40 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600  py-2 px-3">
      <Link href="/">Blog</Link>
    </div> */}
    <div className=" hover:frosted hover:bg-opacity-40 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600  py-2 px-3">
      <Link href="about">About</Link>
    </div>
    <div className=" hover:frosted hover:bg-opacity-40 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600  py-2 px-3">
      <Link href="contact">Contact</Link>
    </div>
    <DarkModeToggle />
  </nav>
);

export default NavBar;
