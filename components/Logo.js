import Link from "next/link";
import React from "react";
// import Image from "next/image";

const Logo = ({ navbarOpen }) => (
  <Link href="/" passHref>
    <div
      className={`flex sm:flex-row ${navbarOpen && "flex-col"} cursor-pointer`}
    >
      <div className="self-center pr-2">
        <h1>{"<cartes/>"}</h1>
      </div>
    </div>
  </Link>
);

export default Logo;
