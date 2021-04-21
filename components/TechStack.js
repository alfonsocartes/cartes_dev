/* eslint-disable react/jsx-wrap-multilines */

import Link from "next/link";
import React from "react";
import TechStackItem from "./TechStackItem";

const TechStack = () => (
  <section className="body-font">
    <div className="container px-5 py-20 mx-auto max-w-4xl">
      <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2">
          Current Main Tech Stack
        </h2>
        <a
          href="https://github.com/alfonsocartes/cartes_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex text-lg font-semibold py-8 text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600 transform hover:scale-105 ease-in-out">
            Take a look at the code
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1">
        <TechStackItem
          title="React Native"
          url="https://reactnative.dev/"
          imageUrl="/static/assets/technologies/reactjs-logo.svg"
        >
          React Native is an open-source mobile application framework. It is
          used to develop applications for Android, Android TV, iOS, macOS,
          tvOS, Web, Windows and UWP.
        </TechStackItem>
        <TechStackItem
          title="Next.js"
          url="https://nextjs.org/"
          imageUrl="/static/assets/technologies/nextjs-logo.svg"
        >
          Next.js is an open-source React front-end development web framework
          that enables functionality such as server-side rendering and
          generating static websites for React based web applications.
        </TechStackItem>
        <TechStackItem
          title="TailwindCSS"
          url="https://tailwindcss.com/"
          imageUrl="/static/assets/technologies/tailwindcss-logo.svg"
        >
          <p>
            TailwindCSS is an utility-first CSS framework packed with classes
            like <i>flex, pt-4, text-center</i> and <i>rotate-90</i> that can be
            composed to build any design, directly in your markup.
          </p>
        </TechStackItem>
        <TechStackItem
          title="Node.js"
          url="https://nodejs.org/"
          imageUrl="/static/assets/technologies/nodejs-logo.svg"
        >
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment and executes JavaScript code outside a web browser.
        </TechStackItem>
      </div>
      <Link href="/portfolio">
        <button
          type="button"
          className="flex mx-auto mt-16 text-white py-2 px-8 focus:outline-none text-lg bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900"
        >
          Portfolio
        </button>
      </Link>
    </div>
  </section>
);

export default TechStack;
