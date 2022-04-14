import Link from "next/link";

export const ContactUs = () => (
  <section className="body-font">
    <div className="container mx-auto mt-10">
      <div className="mx-auto mt-8 flex w-full flex-col items-center border-t border-gray-200 pt-8 text-center sm:flex-row lg:w-2/3">
        <p className="title-font flex-grow text-lg font-medium sm:pr-16 sm:text-2xl">
          Tell us about your project.
        </p>
        <Link href="/contact" passHref>
          <button
            type="button"
            className="mt-4 flex-shrink-0 rounded-lg bg-transparent bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900"
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  </section>
);
