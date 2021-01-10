import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => (
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
      <Link href="/about">About</Link>
    </div>
    <div className="m-2 hover:text-gray-900">
      <Link href="/contact">Contact</Link>
    </div>
    <DarkModeToggle />
  </nav>
);

export default NavBar;
