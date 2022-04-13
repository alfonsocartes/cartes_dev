import { useState } from "react";
import Link from "next/link";
import { Logo } from "../Logo";
import { DarkModeToggle } from "./DarkModeToggle";
import { BurgerButton } from "./BurgerButton";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex flex-row items-center">
      <div className="mr-auto text-lg sm:text-3xl text-black dark:text-white font-bold md:transform-none transform ease-in duration-200 hover:scale-110">
        <div
          className={`md:transform-none transform ease-in duration-200 ${
            navbarOpen ? "scale-150 translate-x-10" : ""
          }`}
        >
          <Logo navbarOpen={navbarOpen} />
        </div>
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
          <li className="nav-item my-3">
            <Link href="/">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item my-3">
            <Link href="/portfolio">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Portfolio
              </a>
            </Link>
          </li>
          {/* <li className="nav-item my-3">
            <Link href="/solutions">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Solutions
              </a>
            </Link>
          </li> */}
          <li className="nav-item my-3">
            <Link href="/about">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                About
              </a>
            </Link>
          </li>
          <li className="nav-item my-3">
            <Link href="/blog">
              <a className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Blog
              </a>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row">
          <div className="sm:hidden">
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
