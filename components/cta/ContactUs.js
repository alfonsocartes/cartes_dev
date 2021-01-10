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
          className="flex-shrink-0 mt-4 text-white frosted bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 focus:outline-none text-lg"
        >
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  </section>
);

export default ContactUs;
