/* eslint-disable react/jsx-wrap-multilines */

import Link from "next/link";
import React from "react";
import TechStackItem from "./TechStackItem";

const TechStack = () => (
  <section className="body-font border-b border-gray-200">
    <div className="container px-5 py-20 mx-auto max-w-4xl">
      <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2">
          Current Main Tech Stack
        </h2>
      </div>
      <div className="grid grid-cols-1">
        <TechStackItem
          title="React Native"
          url="https://reactnative.dev/"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        >
          React Native is an open-source mobile application framework. It is
          used to develop applications for Android, Android TV, iOS, macOS,
          tvOS, Web, Windows and UWP.
        </TechStackItem>
        <TechStackItem
          title="Next.js"
          url="https://nextjs.org/"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        >
          Next.js is an open-source React front-end development web framework
          that enables functionality such as server-side rendering and
          generating static websites for React based web applications.
        </TechStackItem>
        <TechStackItem
          title="Node.js"
          url="https://nodejs.org/"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
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
