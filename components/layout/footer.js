import React from "react";

export default function Footer() {
  return (
    <footer className="body-font ">
      <div className="frosted bg-opacity-20 bg-gray-200 dark:bg-white-800 border-white border-opacity-20 border-t p-4 top-inner-shadow">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm sm:ml-6 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Alfonso Cartes —
            <a
              href="https://twitter.com/cartes_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @cartes_dev
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <div className="pl-4">
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
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="pl-4 ">
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
                    className="w-5 h-5"
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
            <div className="pl-4 ">
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
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </div>
              </a>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
}
