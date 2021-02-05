import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import BurgerButton from "../BurgerButton";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="sm:ml-auto flex flex-wrap items-center">
      <div
        className={`lg:flex flex-grow items-center${
          navbarOpen ? " flex" : " hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mr-4">
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
      </div>
      <BurgerButton toggleFunction={() => setNavbarOpen(!navbarOpen)} />
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
