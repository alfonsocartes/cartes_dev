import React from "react";

const SocialNetworks = () => (
  <section>
    <div className="container mx-auto flex pb-8 items-center justify-center flex-col ">
      <span className="inline-flex text-xl">
        <div className="pl-4 text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
          <a
            href="https://twitter.com/cartes_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="pl-4 text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
          <a
            href="https://www.linkedin.com/company/cartesdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </div>
          </a>
        </div>
        <div className="pl-4 text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
          <a
            href="https://www.facebook.com/cartes.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </div>
          </a>
        </div>
      </span>
    </div>
  </section>
);

export default SocialNetworks;
