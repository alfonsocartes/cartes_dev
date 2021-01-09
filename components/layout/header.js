//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-200">
          <Link href="/">
            <span className="ml-3 text-xl">{"</> cartes.dev"}</span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="mr-5 hover:text-gray-900">
            <Link href="/">Home</Link>
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Link href="/">Portfolio</Link>
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Link href="/">Blog</Link>
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Link href="/">About</Link>
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Link href="/">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
