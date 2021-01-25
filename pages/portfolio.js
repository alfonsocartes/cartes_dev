import Link from "next/link";
import Layout from "../components/Layout";

const Portfolio = () => (
  <>
    <Layout title="Portfolio | Cartes Development | Full-Stack Web Development / Mobile Development">
      <section className="body-font">
        <div className="container px-5 py-10 mx-auto">
          {/* <h1 className=" px-5 pb-16 mx-auto text-center sm:text-3xl text-2xl font-bold title-font">
            Portfolio
          </h1> */}
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="web development"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                />
              </div>
              <h2 className="title-font text-2xl font-medium  mt-6 mb-3 text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200">
                Web Development
              </h2>
              <p className="leading-relaxed text-base px-10 py-5">
                Using technologies like NextJS, TailwindCSS, Wordpress and so
                much more.
              </p>
              <Link href="/web-portfolio">
                <button
                  type="button"
                  // className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
                  className="flex-shrink-0 mt-4 text-white bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 focus:outline-none text-lg"
                >
                  Web
                </button>
              </Link>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="mobile development"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                />
              </div>
              <h2 className="title-font text-2xl font-medium mt-6 mb-3 text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200">
                Mobile Development
              </h2>
              <p className="leading-relaxed text-base px-10 py-5">
                Extense experience developing and publishing multiplatform state
                of the art apps.
              </p>
              <Link href="/mobile-portfolio">
                <button
                  type="button"
                  // className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
                  className="flex-shrink-0 mt-4 text-white bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 focus:outline-none text-lg"
                >
                  Mobile
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
