import React from "react";
import Link from "next/link";

const ContactUs = () => (
  <section className="body-font">
    <div className="container mt-10 mx-auto">
      <div className="lg:w-2/3 flex flex-col sm:flex-row items-center mx-auto">
        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font">
          Tell us about your project.
        </h1>
        <button
          type="button"
          className="flex-shrink-0 frosted bg-opacity-40 border-white border-opacity-20 border rounded-lg shadow-lg bg-gray-300  hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-8 sm:mt-4 focus:outline-none text-lg"
        >
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  </section>
);

export default ContactUs;
