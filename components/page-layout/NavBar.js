import { useState } from "react";
import Link from "next/link";

import Logo from "../Logo";
import DarkModeToggle from "./DarkModeToggle";
import BurgerButton from "./BurgerButton";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex flex-row items-center">
      <div className="mr-auto text-lg sm:text-2xl text-black dark:text-white font-bold">
        <Logo />
      </div>
      <div
        className={`flex flex-row items-center ${
          navbarOpen ? "flex-col-reverse" : ""
        }`}
      >
        <ul
          className={`${
            navbarOpen ? "flex flex-col" : "sm:flex flex-row hidden"
          }`}
        >
          <Link href="/">
            <li className="nav-item my-3">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Home
              </a>
            </li>
          </Link>
          <Link href="/portfolio">
            <li className="nav-item my-3">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Portfolio
              </a>
            </li>
          </Link>

          <Link href="/about">
            <li className="nav-item my-3">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                About
              </a>
            </li>
          </Link>
          <Link href="/blog">
            <li className="nav-item my-3">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Blog
              </a>
            </li>
          </Link>
        </ul>
        <div className="flex flex-row">
          <div className="md:hidden">
            <BurgerButton
              navbarOpen={navbarOpen}
              toggleFunction={() => setNavbarOpen(!navbarOpen)}
            />
          </div>
          <div className="ml-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
