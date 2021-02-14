import Link from "next/link";
import React from "react";
// import Image from "next/image";

const Logo = ({ navbarOpen }) => (
  <Link href="/">
    <div
      className={`flex sm:flex-row ${navbarOpen && "flex-col"} cursor-pointer`}
    >
      <div className="self-center pr-2">
        <h1>{"</>"}</h1>
      </div>
      <h1>cartes.dev</h1>
    </div>
  </Link>
);

export default Logo;
