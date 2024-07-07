import Link from "next/link";
import Image from "next/image";

import { Layout } from "../../components/Layout";

import mobilePortfolioImage from "../../public/images/mobile-portfolio.jpg";
import webPortfolioImage from "../../public/images/web-portfolio.jpg";

const Portfolio = () => (
  <>
    <Layout title="Portfolio | Cartes Development | Full-Stack Web Development | Mobile Development">
      <section className="body-font">
        <div className="container mx-auto">
          <h1 className="title-font mb-16 text-center text-2xl font-bold sm:text-3xl">
            Portfolio
          </h1>
          <div className="-mx-4 -mb-10 flex flex-wrap text-center">
            <div className="mb-10 px-4 sm:w-1/2">
              <div className="visible mx-auto mb-8 overflow-hidden rounded-xl object-cover object-center sm:mx-0 md:mb-16">
                <Link
                  href="/portfolio/mobile-development"
                  aria-label="mobile development"
                >
                  <Image
                    src={mobilePortfolioImage}
                    alt="mobile development sample image"
                    placeholder="blur"
                    priority
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
              </div>

              <h2 className="title-font mt-6 mb-3 text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                <Link href="/portfolio/mobile-development">
                  Mobile Development
                </Link>
              </h2>
              <p className="px-10 py-5 text-base leading-relaxed">
                Extense experience developing and publishing multiplatform state
                of the art apps.
              </p>
              <Link href="/portfolio/mobile-development" passHref>
                <button
                  type="button"
                  className="mt-4 flex-shrink-0 rounded-lg bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900"
                >
                  Mobile
                </button>
              </Link>
            </div>
            <div className="mb-10 px-4 sm:w-1/2">
              <div className="visible mx-auto mb-8 overflow-hidden rounded-xl object-cover object-center sm:mx-0 md:mb-16">
                <Link
                  href="/portfolio/web-development"
                  aria-label="web development"
                >
                  <Image
                    src={webPortfolioImage}
                    alt="web development sample image"
                    placeholder="blur"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
              </div>

              <h2 className="title-font mt-6 mb-3 text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                <Link href="/portfolio/web-development">Web Development</Link>
              </h2>

              <p className="px-10 py-5 text-base leading-relaxed">
                Using technologies like React, Next.js, TailwindCSS, Node.js and
                so much more.
              </p>
              <Link href="/portfolio/web-development" passHref>
                <button
                  type="button"
                  className="mt-4 flex-shrink-0 rounded-lg bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900"
                >
                  Web
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default Portfolio;
