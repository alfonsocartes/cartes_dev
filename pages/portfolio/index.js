import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/Layout";

import mobilePortfolioImage from "../../public/images/mobile-portfolio.jpg";
import webPortfolioImage from "../../public/images/web-portfolio.jpg";

const Portfolio = () => (
  <>
    <Layout title="Portfolio | Cartes Development | Full-Stack Web Development | Mobile Development">
      <section className="body-font">
        <div className="container mx-auto">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-16 text-center">
            Portfolio
          </h1>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="mb-8 md:mb-16 sm:mx-0 mx-auto rounded-xl visible object-cover object-center overflow-hidden">
                <Link href="/portfolio/mobile-development">
                  <a aria-label="mobile development">
                    <Image
                      src={mobilePortfolioImage}
                      alt="mobile development sample image"
                      layout="responsive"
                      placeholder="blur"
                      priority
                    />
                  </a>
                </Link>
              </div>

              <h2 className="title-font text-2xl font-medium mt-6 mb-3 text-indigo-600 dark:text-indigo-400">
                <Link href="/portfolio/mobile-development">
                  Mobile Development
                </Link>
              </h2>
              <p className="leading-relaxed text-base px-10 py-5">
                Extense experience developing and publishing multiplatform state
                of the art apps.
              </p>
              <Link href="/portfolio/mobile-development" passHref>
                <button
                  type="button"
                  className="flex-shrink-0 mt-4 text-white bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 focus:outline-none text-lg"
                >
                  Mobile
                </button>
              </Link>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="mb-8 md:mb-16 sm:mx-0 mx-auto rounded-xl visible object-cover object-center overflow-hidden">
                <Link href="/portfolio/web-development">
                  <a aria-label="web development">
                    <Image
                      src={webPortfolioImage}
                      alt="web development sample image"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </a>
                </Link>
              </div>

              <h2 className="title-font text-2xl font-medium mt-6 mb-3 text-indigo-600 dark:text-indigo-400">
                <Link href="/portfolio/web-development">Web Development</Link>
              </h2>

              <p className="leading-relaxed text-base px-10 py-5">
                Using technologies like React, Next.js, TailwindCSS, Node.js and
                so much more.
              </p>
              <Link href="/portfolio/web-development" passHref>
                <button
                  type="button"
                  className="flex-shrink-0 mt-4 text-white bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 focus:outline-none text-lg"
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
