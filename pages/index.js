import Image from "next/image";

import EmailNewsletter from "../components/cta/EmailNewsletter";
import Layout from "../components/layout/Layout";

export default function Index() {
  return (
    <>
      <Layout title="Cartes Development | Full-Stack Web Development / Mobile Development">
        <section className="body-font">
          <div className="container mx-auto flex py-8 items-center justify-center flex-col">
            <div className="w-28 h-28 relative mb-4">
              <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <Image
                  src="https://avatars1.githubusercontent.com/u/3504951?s=460&u=6fd136fb3de88e86ae2cd8741b0e48d524fcb9d1&v=4"
                  height={460}
                  width={460}
                  alt="Alfonso Cartes"
                  className="object-cover object-center w-full h-full visible group-hover:hidden"
                />
              </div>
            </div>
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                Alfonso Cartes
              </h1>
              <h2 className="title-font sm:text-xl text-xl mb-8 font-medium">
                Full-Stack Web Developer | Software Engineer
              </h2>
              <p className="mb-8 leading-relaxed">
                I work at <a href="about">cartes.dev</a> bringing customer ideas
                to life every day.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto flex pb-8 items-center justify-center flex-col text-gray-500">
            <span className="inline-flex text-xl">
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
                      className="w-8 h-8"
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
        <EmailNewsletter />
      </Layout>
    </>
  );
}
