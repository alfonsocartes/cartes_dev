//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    // <div className="z-10 sticky top-0 flex mb-2 p-3 items-center text-center rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
    //   <div className="w-full">
    //     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-700 dark:text-purple-400">
    //       cartes.dev
    //     </h1>
    //   </div>
    //   <div className="w-1/10">
    //     <Link href="/about">
    //       <button className="text-white bg-purple-600 hover:bg-purple-800 px-2 py-1 text-center font-bold rounded">
    //         About
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-200"
        >
          <span className="ml-3 text-xl">{"</> cartes.dev"}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            First Link
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Second Link
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Third Link
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Fourth Link
          </Link>
        </nav>
      </div>
    </header>
  );
}
