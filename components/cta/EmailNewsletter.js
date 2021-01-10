import React from "react";

const EmailNewsletter = () => (
  <section className="body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
          Subscribe to the Newsletter
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          We will just send you interesting info and the blog posts we publish.
        </p>
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="full-name" className="leading-7 text-sm">
            Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="email" className="leading-7 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:gray-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="frosted bg-opacity-40 border-white border-opacity-20 border rounded-lg shadow-lg bg-gray-300  hover:bg-gray-300 dark:hover:bg-gray-600  py-2 px-8 focus:outline-none text-lg">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

export default EmailNewsletter;
