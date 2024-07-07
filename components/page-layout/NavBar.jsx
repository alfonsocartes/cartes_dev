import { useState } from "react";
import Link from "next/link";
import { Logo } from "../Logo";
import { DarkModeToggle } from "./DarkModeToggle";
import { BurgerButton } from "./BurgerButton";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex flex-row items-center">
      <div className="mr-auto transform text-lg font-bold text-black duration-200 ease-in hover:scale-110 dark:text-white sm:text-3xl md:transform-none">
        <div
          className={`transform duration-200 ease-in md:transform-none ${
            navbarOpen ? "translate-x-10 scale-150" : ""
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
            navbarOpen ? "flex flex-col" : "hidden flex-row sm:flex"
          }`}
        >
          <li className="nav-item my-3">
            <Link href="/" className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Home
            </Link>
          </li>
          <li className="nav-item my-3">
            <Link href="/portfolio" className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Portfolio
            </Link>
          </li>
        
          <li className="nav-item my-3">
            <Link href="/about" className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600" >
                About
            </Link>
          </li>
          <li className="nav-item my-3">
            <Link href="/blog" className="rounded-lg py-2 px-3 font-medium hover:bg-indigo-200 dark:hover:bg-gray-600">
                Blog
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
