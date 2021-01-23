import Link from "next/link";
import React from "react";

const TechStack = () => (
  <section className="body-font border-b border-gray-200">
    <div className="container px-5 py-20 mx-auto">
      <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2">
          Current Main Tech Stack
        </h2>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 bg-indigo-100 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 hover:text-indigo-800 dark:text-indigo-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </h2>
            <p className="leading-relaxed text-base">
              React JS React JS React JS React JS React JS React JS React JS
              React JS React JS React JS React JS. MAYBE I CAN MAKE A PAGE FOR
              EACH TECHNOLOGY TO EXPLAIN WHAT IT IS AND HOW I USE IT
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 bg-indigo-100 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 hover:text-indigo-800 dark:text-indigo-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <h2 className="text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native
              </a>
            </h2>
            <p className="leading-relaxed text-base">
              Expo Expo Expo Expo Expo Expo Expo Expo Expo Expo Expo Expo Expo
              Expo Expo. MAYBE I CAN MAKE A PAGE FOR EACH TECHNOLOGY TO EXPLAIN
              WHAT IT IS AND HOW I USE IT
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 bg-indigo-100 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 hover:text-indigo-800 dark:text-indigo-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.JS
              </a>
            </h2>
            <p className="leading-relaxed text-base">
              Next.JS Serverless SSG SSR ISR. MAYBE I CAN MAKE A PAGE FOR EACH
              TECHNOLOGY TO EXPLAIN WHAT IT IS AND HOW I USE IT
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 bg-indigo-100 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 hover:text-indigo-800 dark:text-indigo-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
              </svg>
            </div>
            <h2 className="text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
            </h2>
            <p className="leading-relaxed text-base">
              Tailwind CSS. MAYBE I CAN MAKE A PAGE FOR EACH TECHNOLOGY TO
              EXPLAIN WHAT IT IS AND HOW I USE IT
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 bg-indigo-100 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 hover:text-indigo-800 dark:text-indigo-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </div>
            <h2 className="text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node JS
              </a>
            </h2>
            <p className="leading-relaxed text-base">
              Express JS. MAYBE I CAN MAKE A PAGE FOR EACH TECHNOLOGY TO EXPLAIN
              WHAT IT IS AND HOW I USE IT
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 bg-indigo-100 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-100 text-indigo-600 hover:text-indigo-800 dark:text-indigo-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 className="text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
              <Link href="about">Others</Link>
            </h2>
            <p className="leading-relaxed text-base">
              Others. MAYBE I CAN MAKE A PAGE FOR EACH TECHNOLOGY TO EXPLAIN
              WHAT IT IS AND HOW I USE IT
            </p>
          </div>
        </div>
      </div>
      <Link href="portfolio">
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
