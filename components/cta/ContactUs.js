import Link from "next/link";

const ContactUs = () => (
  <section className="body-font">
    <div className="container mt-10 mx-auto">
      <div className="lg:w-2/3 flex flex-col sm:flex-row items-center mx-auto w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <h4 className="flex-grow sm:pr-16 sm:text-2xl text-lg font-medium title-font">
          Tell me about your project.
        </h4>
        <button
          type="button"
          className="flex-shrink-0 mt-4 text-white bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 focus:outline-none text-lg"
        >
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  </section>
);

export default ContactUs;
