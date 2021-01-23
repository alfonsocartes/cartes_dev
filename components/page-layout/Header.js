import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="frosted bg-opacity-40 border-white border-opacity-20 border-b shadow-lg bg-gray-200 dark:bg-transparent sticky top-0 z-10 mb-4">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-8 pb-4">
        <div className="text-3xl font-bold pb-4">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
