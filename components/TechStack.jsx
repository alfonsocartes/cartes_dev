import Link from "next/link";
import { TechStackItem } from "./TechStackItem";

export const TechStack = () => (
  <section className="body-font">
    <div className="container mx-auto max-w-4xl px-5 py-20">
      <div className="mb-10 flex w-full flex-col flex-wrap items-center text-center">
        <h2 className="title-font mb-2 text-xl font-medium sm:text-2xl">
          Current Main Tech Stack
        </h2>
        <a
          href="https://github.com/alfonsocartes/cartes_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex transform py-8 text-lg font-semibold text-indigo-600 ease-in-out hover:scale-105 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
            Take a look at the code for this website
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1">
        <TechStackItem
          title="Remix"
          url="https://remix.run/"
          imageUrl="/assets/technologies/remix-logo.svg"
        >
          <p>
            Remix is a full stack web framework that lets you focus on the user
            interface and work back through web standards to deliver a fast,
            slick, and resilient user experience.
          </p>
        </TechStackItem>
        <TechStackItem
          title="Next.js"
          url="https://nextjs.org/"
          imageUrl="/assets/technologies/nextjs-logo.svg"
        >
          <p>
            Next.js is an open-source React front-end development web framework
            that enables functionality such as server-side rendering and
            generating static websites for React based web applications.
          </p>
        </TechStackItem>
        <TechStackItem
          title="TailwindCSS"
          url="https://tailwindcss.com/"
          imageUrl="/assets/technologies/tailwindcss-logo.svg"
        >
          <p>
            TailwindCSS is an utility-first CSS framework packed with classes
            like <i>flex, pt-4, text-center</i> and <i>rotate-90</i> that can be
            composed to build any design, directly in your markup.
          </p>
        </TechStackItem>
        <TechStackItem
          title="React Native"
          url="https://reactnative.dev/"
          imageUrl="/assets/technologies/reactjs-logo.svg"
        >
          <p>
            React Native is an open-source mobile application framework. It is
            used to develop applications for Android, Android TV, iOS, macOS,
            tvOS, Web, Windows and UWP.
          </p>
        </TechStackItem>
        <TechStackItem
          title="Node.js"
          url="https://nodejs.org/"
          imageUrl="/assets/technologies/nodejs-logo.svg"
        >
          <p>
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment and executes JavaScript code outside a web
            browser.
          </p>
        </TechStackItem>
      </div>
      <Link href="/portfolio" passHref>
        <button
          type="button"
          className="mx-auto mt-16 flex rounded-lg bg-transparent bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900"
        >
          Portfolio
        </button>
      </Link>
    </div>
  </section>
);
